<template>
    <Layout>
        <div>
            <div class="activity-cards"  @mouseleave="activeActivityCard = null">
                <ActivityCard
                        v-for="(edge, index) in $page.allWordPressActivity.edges"
                        :key="edge.node.id"
                        :activity="edge.node"
                        :active="activeActivityCard !== edge.node.id && activeActivityCard !== null"
                        @mouseenter.native="activeActivityCard = edge.node.id"
                        :is-big="index === 0"
                />
            </div>
        </div>
    </Layout>
</template>

<script>
    import ActivityCard from "../components/ActivityCard";
    export default {
        metaInfo: {
            title: 'Hello, world!'
        },
        components: {
            ActivityCard
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
    query {
    allWordPressActivity{
    edges{
    node{
    title
    id
    slug
    path
    acf{
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
</page-query>
