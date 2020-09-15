<template>
    <Layout>
        <article class="page">
            <div class="container" v-if="!!$page.wordPressNews.acf.acitivty">
                <div class="breadcrumbs activity-page__breadcrumbs">
                    <g-link to="/">главная</g-link>
                    /
                    <g-link to="/events">мероприятия</g-link>
                    /
                    <g-link :to="$page.wordPressNews.acf.acitivty.path">{{$page.wordPressNews.acf.acitivty.title}}
                    </g-link>
                </div>
            </div>
            <ActivityTop v-if="!!$page.wordPressNews.acf.acitivty" :activity="$page.wordPressNews.acf.acitivty"/>
            <ActivityBanner v-if="!!$page.wordPressNews.acf.acitivty" :activity="$page.wordPressNews.acf.acitivty"/>
            <div class="section">
                <div class="container text-component">
                    <h1 class="text-xl margin">{{$page.wordPressNews.title}}</h1>
                    <p class="text-md">{{$page.wordPressNews.acf.date}}</p>
                    <div v-html="$page.wordPressNews.content" class="text-component"></div>
                </div>
            </div>
            <News v-if="!!$page.wordPressNews.acf.acitivty && $page.wordPressNews.acf.acitivty.acf.news && $page.wordPressNews.acf.acitivty.acf.news.length"
                  :news-items="$page.wordPressNews.acf.acitivty.acf.news"/>
        </article>
    </Layout>
</template>

<page-query>
    query($path: String!) {
    wordPressNews(path: $path) {
    title
    content
    acf {
    date
    acitivty {
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
    news {
    item {
    path
    slug
    id
    title
    acf {
    image
    link
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
    import News from "../components/News";

    export default {
        components: {
            ActivityTop,
            ActivityBanner,
            News
        }
    };
</script>

<style>
</style>
