<template>
    <section class="news">
        <div class="news__main">
            <h2 class="news__title">Новости</h2>
        </div>
        <g-link class="news__item"
                :to="item.path"
                v-for="{item} of newsItems"
                :key="item.id">
            <span class="news__item-bg" :style="{backgroundImage: 'url(' + item.acf.image + ')'}"></span>
            <span class="news__item-content">{{item.title}}</span>
        </g-link>
    </section>
</template>

<script>
    export default {
        name: "News",
        props: ["newsItems"]
    }
</script>

<style scoped lang="scss">
    .news {
        color: #fff;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 450px;
    }

    .news__main {
        padding: 95px 20px 0;
        display: flex;
        text-align: center;
        justify-content: center;
        background: var(--color-page-accent);
    }

    .news__title {
        text-transform: uppercase;
        font-weight: 800;
        font-size: 24px;
    }

    .news__item {
        display: flex;
        text-align: left;
        background-size: cover;
        font-size: 24px;
        line-height: 31px;
        padding: 95px 20px;
        text-decoration: none;
        position: relative;
        transition: all 0.3s ease-in-out;

        &:hover {
            color: var(--color-white);
            background: var(--color-black);

            .news__item-bg {
                opacity: 0.7;
                filter: grayscale(0.2);
            }

            .news__item-content {
                color: var(--color-white);
            }
        }

        &:hover {
            outline: none;
        }
    }

    .news__item-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        transition: all 0.3s ease-in-out;
        opacity: 0.4;
        filter: grayscale(1);
    }

    .news__item-content {
        position: relative;
        z-index: 1;
        max-width: 75%;
        font-weight: 600;
        text-decoration: none;
        color: var(--color-black);
        transition: all 0.3s ease-in-out;
    }
</style>
