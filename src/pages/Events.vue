<template>
    <Layout>
<!--        <div class="container page-padding">-->
<!--            <div class="grid-section__topline">-->
<!--                <div class="grid-section__filter">-->
<!--                    <span class="grid-section__filter-text">Фильтр</span>-->
<!--                    <span class="grid-section__filter-chip">Мужчины <button class="close-button"><Close/></button></span>-->
<!--                    <span class="grid-section__filter-chip">2 этап <button class="close-button"><Close/></button></span>-->
<!--                </div>-->
<!--                <input type="text" class="gird-section__search" placeholder="Поиск...">-->
<!--            </div>-->
<!--            <div class="page-filters">-->
<!--                <div class="page-filter">-->
<!--                    <b>вид:</b> <span>шоссе</span> <span>кантри</span> <span>бег</span> <span>mtb</span>-->
<!--                </div>-->
<!--                <div class="page-filter">-->
<!--                    <b>вид:</b> <span>шоссе</span> <span>кантри</span> <span>бег</span> <span>mtb</span>-->
<!--                </div>-->
<!--                <div class="page-filter">-->
<!--                    <b>вид:</b> <span>шоссе</span> <span>кантри</span> <span>бег</span> <span>mtb</span>-->
<!--                </div>-->
<!--                <div class="page-filter">-->
<!--                    <b>вид:</b> <span>шоссе</span> <span>кантри</span> <span>бег</span> <span>mtb</span>-->
<!--                </div>-->
<!--                <div class="page-filter">-->
<!--                    <b>вид:</b> <span>шоссе</span> <span>кантри</span> <span>бег</span> <span>mtb</span>-->
<!--                </div>-->
<!--                <div class="page-filter">-->
<!--                    <b>вид:</b> <span>шоссе</span> <span>кантри</span> <span>бег</span> <span>mtb</span>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
        <div class="box-grid">
            <div class="main-box">
                <h1 class="main-box__title">Мероприятия</h1>
            </div>
            <g-link :to="node.path" class="box"
                    v-for="({node}, index) of $page.allWordPressActivity.edges" :key="index">
                <div class="box__bg"
                     :style="{backgroundImage: 'url(' + node.acf.banner + ')'}"></div>
                <p class="box__title">
                    {{node.title}}
                </p>
                <p class="box__desc">
                    {{node.acf.period.from | formatDate}} - {{node.acf.period.to | formatDate}}
                </p>
            </g-link>
        </div>
        <div class="container">
            <Pager class="pagination" :info="$page.allWordPressActivity.pageInfo"/>
        </div>
    </Layout>
</template>

<page-query>
    query ($page: Int) {
    allWordPressActivity(perPage: 8, page: $page, sortBy: "date", order: ASC) @paginate {
    pageInfo {
    totalPages
    currentPage
    }
    edges {
    node {
    id
    title
    path
    acf {
    banner
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
<script>
    import {Pager} from 'gridsome';
    import Close from '../assets/svg/close-icon.svg'

    export default {
        components: {
            Pager,
            Close
        },
        name: "Activities",
        metaInfo: {
            title: 'Мероприятия'
        },
    }
</script>

<style scoped lang="scss">
    .page-filters {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 18px;
        margin-bottom: 72px;
    }
        .page-filter {
            font-size: 14px;
            color: #616160;
            display: flex;
            b {
                font-weight: 900;
                margin-right: 5px;
            }

            &>*:not(b)+* {
                margin-left: 12px;
            }
        }
    .page-padding{
        padding-top: 91px;
    }
    .grid-section__topline {
        display: flex;
        margin-bottom: 33px;
    }

    .gird-section__search {
        margin-left: auto;
        background: var(--color-gray-light);
        border-radius: 160px;
        border: none;
        width: 235px;
        height: 33px;
        padding: 0 30px;
    }

    .grid-section__filter {
        display: flex;
        align-items: center;
        margin-right: 30px;

        & > * + * {
            margin-left: 15px;
        }
    }

    .grid-section__filter-chip {
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--color-gray-light);
        height: 33px;
        border-radius: 30px;
        padding: 0 18px;
    }

    .grid-section__filter-text {
        font-size: 18px;
        line-height: 22px;
        text-transform: uppercase;
    }

    .close-button {
        background: none;
        border: none;
        display: inline-flex;
        width: 14px;
        height: 14px;
        justify-content: center;
        align-items: center;
        margin-left: 5px;

        &:hover {
            svg {
                fill: var(--color-accent);
            }
        }
    }
</style>
