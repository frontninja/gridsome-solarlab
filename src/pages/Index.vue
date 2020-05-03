<template>
    <Layout>
        <div>
            <MainActivity :activity="$page.wordPressPage.acf.mainActivity"/>
            <div class="activity-cards"  @mouseleave="activeActivityCard = null">
                <ActivityCard
                        v-for="({activity}, index) in $page.wordPressPage.acf.activities"
                        :key="activity.id"
                        :activity="activity"
                        :active="activeActivityCard !== activity.id && activeActivityCard !== null"
                        @mouseenter.native="activeActivityCard = activity.id"
                        :is-big="index === 0"
                />
            </div>
        </div>
    </Layout>
</template>

<script>
    import ActivityCard from "../components/ActivityCard";
    import MainActivity from "../components/MainActivity";
    export default {
        metaInfo: {
            title: 'Hello, world!'
        },
        components: {
            ActivityCard,
            MainActivity
        },
        data: () => {
            return {
                activeActivityCard: null
            }
        }
    }
</script>

<style lang="scss">
    .activity-cards {
        display: flex;
        flex-wrap: wrap;
    }
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
    logo
    banner
    tag
    period {
    from
    to
    }
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
    }
    }
    }
    }
    }
    }
</page-query>
