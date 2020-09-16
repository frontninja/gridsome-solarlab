<template>
    <Layout>
        <article class="page">
            <div class="container">
                <div class="breadcrumbs activity-page__breadcrumbs">
                    <g-link to="/">главная</g-link>
                    /
                    <g-link to="/events">мероприятия</g-link>
                    /
                    <g-link :to="$page.wordPressAlbom.acf.activity.path">{{$page.wordPressAlbom.acf.activity.title}}
                    </g-link>
                </div>
            </div>
            <ActivityTop v-if="$page.wordPressAlbom.acf.activity" :activity="$page.wordPressAlbom.acf.activity"/>
            <ActivityBanner :activity="$page.wordPressAlbom.acf.activity"/>
            <div class="section">
                <div class="container" v-if="$page.wordPressAlbom.acf.media">
                    <h1 class="text-xl margin">{{$page.wordPressAlbom.title}} <br> {{$page.wordPressAlbom.acf.date}}
                    </h1>
                    <silent-box class="silentbox-gallery"
                                :gallery="currentMedia | gallery"></silent-box>
                                  <paginator
                        :page-count="totalPages"
                        :page-range="5"
                        :margin-pages="1"
                        :click-handler="clickCallback"
                        :prev-text="'‹'"
                        :next-text="'›'"
                        :container-class="'pagination'"
                        :page-class="'page-item'">
                    </paginator>
                </div>
            </div>
            <div class="margin"></div>
            <Media :albums="$page.wordPressAlbom.acf.activity.acf.alboms" />
        </article>
    </Layout>
</template>

<page-query>
    query($path: String!) {
    wordPressAlbom(path: $path) {
    title
    acf {
    media
    activity {
    path
    title
    acf {
    period {
    from
    to
    }
    logo
    banner
    tag
    numberOfStages
    alboms {
    albom {
    path
    title
    acf {
    media
    date
    }
    }
    }
    }
    }
    }
    }
    }
</page-query>

<script>
    import ActivityTop from "../components/ActivitiyTop";
    import ActivityBanner from "../components/ActivityBanner";
    import Media from "../components/Media";
    import Paginator from "../components/Paginator";
    export default {
        data() {
            return {
                medias: [],
                currentMedia: [],
                totalPages: 0,
            };
        },
        mounted() {
            if (process.isClient) {
                this.medias = [];
                this.$page.wordPressAlbom.acf.activity.acf.alboms.forEach(item => this.medias = [...this.medias, ...item.albom.acf.media]);
                this.totalPages = this.medias.length % 12;
                this.setCurrentMedia(1, this.medias);
            }
        },
          methods: {
                clickCallback: function(pageNum) {
                    if (process.isClient) {
                        this.setCurrentMedia(pageNum, this.medias);
                    }
                },
                setCurrentMedia: function(currentPage, medias) {
                    const min = (currentPage - 1) !== 0 ? (currentPage - 1) * 12 : 0;
                    const max = currentPage * 12
                    this.currentMedia = medias.filter((media, index) => {
                        return  index >= min && index < max;
                    });
                }
            },
        components: {
            ActivityTop,
            ActivityBanner,
            Media,
            Paginator
        },
        filters: {
            gallery: (imagesSrc) => {
                return imagesSrc.map(imageSrc => ({
                    src: imageSrc
                }))
            }
        }
    };
</script>

<style lang="scss">
    .silentbox-gallery {
        display: grid;
        grid-template-columns: repeat(4, 220px);
        grid-column-gap: 40px;
        grid-row-gap: 20px;
        grid-auto-rows: 220px;
        @media (max-width: 1000px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 768px) {
            grid-template-columns: repeat(1, 1fr);
        }
        .silentbox-item {
            width: 100%;
            height: 100%;
            overflow: hidden;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                object-fit: cover;
                width: 100%;
                height: 100%;
                transition: all .3s ease-in-out;
            }

            &:hover {
                img {
                    width: 120%;
                    height: 120%;
                }
            }

        }
    }
</style>
