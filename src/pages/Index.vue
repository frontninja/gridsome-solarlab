<template>
    <Layout>
        <div>
            <MainActivity :activity="$page.wordPressPage.acf.mainActivity"/>
            <div class="box-grid">
                <g-link :to="activity.path" class="box"
                        v-for="({activity}, index) of $page.wordPressPage.acf.activities" :key="index">
                    <div class="box__bg"
                         :style="{backgroundImage: 'url(' + activity.acf.banner + ')'}"></div>
                    <p class="box__title">
                        {{activity.title}}
                    </p>
                    <p class="box__desc">
                        {{activity.acf.period.from}} - {{activity.acf.period.to}}
                    </p>
                </g-link>
                <div class="search-box">
                    <p class="search-box__title">Поиск<br>
                        мероприятия</p>
                    <div class="search-box__select-wrapper">
                        <button type="button" class="search-box__select">поиск по</button>
                        <div class="search-box__select-content">
                            <span class="search-box__select-item">гонке</span>
                            <span class="search-box__select-item">участнику</span>
                            <span class="search-box__select-item">возраст</span>
                            <span class="search-box__select-item">кол.во этапов</span>
                            <span class="search-box__select-item">дате</span>
                        </div>
                    </div>
                    <input type="text" class="search-box__input" placeholder="Поиск...">
                    <div class="search-box__buttons">
                        <g-link class="search-box__button" :to="'activities'">Поиск</g-link>
                        <g-link class="search-box__button" :to="'activities'">все мороприятия</g-link>
                    </div>
                </div>
            </div>
            <div class="box-grid">
                <div class="main-box">
                    <h2 class="main-box__title">новости</h2>
                </div>
                <g-link :to="newsItem.path" class="box" :class="{'box--accent': accent}"
                        v-for="({newsItem, accent}, index) of $page.wordPressPage.acf.news"
                        :key="index">
                    <div class="box__bg"
                         :style="{backgroundImage: 'url(' + newsItem.acf.image + ')'}"></div>
                    <p class="box__title">
                        {{newsItem.title}}
                    </p>
                </g-link>
                <div class="search-box">
                    <p class="search-box__title">Поиск<br>
                        новости</p>
                    <div class="search-box__select-wrapper">
                        <button type="button" class="search-box__select">поиск по</button>
                        <div class="search-box__select-content">
                            <span class="search-box__select-item">гонке</span>
                            <span class="search-box__select-item">участнику</span>
                            <span class="search-box__select-item">возраст</span>
                            <span class="search-box__select-item">кол.во этапов</span>
                            <span class="search-box__select-item">дате</span>
                        </div>
                    </div>
                    <input type="text" class="search-box__input" placeholder="Поиск...">
                    <div class="search-box__buttons">
                        <g-link class="search-box__button" :to="'news'">Поиск</g-link>
                        <g-link class="search-box__button" :to="'news'">все новости</g-link>
                    </div>
                </div>
            </div>
            <Grid/>
            <Media :albums="$page.wordPressPage.acf.alboms"/>
        </div>
    </Layout>
</template>

<script>
    import ActivityCard from "../components/ActivityCard";
    import MainActivity from "../components/MainActivity";
    import Media from "../components/Media";
    import Grid from "../components/Grid";

    export default {
        metaInfo: {
            title: 'Hello, world!'
        },
        components: {
            ActivityCard,
            MainActivity,
            Media,
            Grid
        },
        data: () => {
            return {
                activeActivityCard: null
            }
        }
    }
</script>

<style lang="scss">

</style>

<page-query>
    query Page {
    wordPressPage(id: "83") {
    title
    title
    acf {
    mainActivity {
    title
    title
    id
    slug
    path
    acf {
    description
    logo
    banner
    tag
    period {
    from
    to
    }
    totalDistance
    numberOfStages
    }
    }
    activities {
    activity {
    title
    id
    slug
    path
    acf {
    logo
    banner
    tag
    period {
    from
    to
    }
    totalDistance
    numberOfStages
    }
    }
    }
    news {
    newsItem {
    title
    path
    acf {
    image
    }
    }
    accent
    }
    alboms {
    albom {
    path
    title
    acf {
    date
    media
    }
    }
    }
    }
    }
    }
</page-query>
