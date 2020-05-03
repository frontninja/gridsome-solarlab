<template>
    <Layout>
        <article class="page">
            <div class="container">
                <div class="breadcrumbs activity-page__breadcrumbs">
                    <g-link to="/">главная</g-link>
                    /
                    <g-link to="/activities">мероприятия</g-link>
                    /
                    <g-link :to="$page.wordPressAlbom.acf.activity.path">{{$page.wordPressAlbom.acf.activity.title}}
                    </g-link>
                </div>
            </div>
            <ActivityTop :title="$page.wordPressAlbom.acf.activity.title"/>
            <ActivityBanner :activity="$page.wordPressAlbom.acf.activity"/>
            <div class="section">
                <div class="container" v-if="$page.wordPressAlbom.acf.media">
                    <h1 class="text-xl margin">{{$page.wordPressAlbom.title}} <br> {{$page.wordPressAlbom.acf.date}}
                    </h1>
                    <silent-box class="silentbox-gallery"
                                :gallery="$page.wordPressAlbom.acf.media | gallery"></silent-box>
                </div>
            </div>
            <div class="margin"></div>
            <Media :albums="$page.wordPressAlbom.acf.activity.acf.alboms"/>
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

    export default {
        components: {
            ActivityTop,
            ActivityBanner,
            Media
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
