<template>
    <Layout>
        <div class="box-grid">
            <div class="main-box">
                <h1 class="main-box__title">Медиа</h1>
            </div>
            <g-link :to="node.path" class="box"
                    v-for="({node}, index) of $page.allWordPressAlbom.edges" :key="index">
                <div class="box__bg"
                     :style="{backgroundImage: 'url(' + node.acf.media[0] + ')'}"></div>
                <p class="box__title">
                    {{node.title}}
                </p>
                <p class="box__desc">
                    {{node.acf.date}}
                </p>
            </g-link>
        </div>
        <div class="container">
            <Pager class="pagination" :info="$page.allWordPressAlbom.pageInfo"/>
        </div>
    </Layout>
</template>

<page-query>
    query($page: Int) {
    allWordPressAlbom(perPage: 8, page: $page, sortBy: "date", order: ASC) @paginate {
    pageInfo {
    totalPages
    currentPage
    }
    edges {
    node {
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

</page-query>
<script>
    import {Pager} from 'gridsome';
    import Close from '../assets/svg/close-icon.svg'

    export default {
        components: {
            Pager,
            Close
        },
        name: "Media",
        metaInfo: {
            title: 'Медиа'
        }
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
