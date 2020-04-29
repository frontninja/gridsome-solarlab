<template>
    <Layout>
        <article class="page">
            <div class="container">
                <div class="breadcrumbs activity-page__breadcrumbs">
                    <g-link to="/">главная</g-link>
                    /
                    <g-link to="/activities">мероприятия</g-link>
                    /
                    <g-link :to="$page.wordPressNews.acf.acitivty.path">{{$page.wordPressNews.acf.acitivty.title}}
                    </g-link>
                </div>
            </div>
            <ActivityTop :title="$page.wordPressNews.acf.acitivty.title"/>
            <ActivityBanner :activity="$page.wordPressNews.acf.acitivty"/>
            <div class="section">
                <div class="container">
                    <h1 class="text-xl margin">{{$page.wordPressNews.title}}</h1>
                    <div v-html="$page.wordPressNews.content" class="text-component"></div>
                </div>
            </div>
            <News :news-items="$page.wordPressNews.acf.acitivty.acf.news"/>
        </article>
    </Layout>
</template>

<page-query>
    query($path: String!) {
    wordPressNews(path: $path) {
    title
    content
    acf {
    acitivty {
    path
    title
    acf {
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
