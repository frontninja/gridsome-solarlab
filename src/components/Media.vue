<template>
    <section class="media-section">
        <div class="media-section__main">
            <h2 class="media-section__main-title">Медиа</h2>
        </div>
        <g-link class="media-section__item" :to="album.path" :class="{'media-section__item--accent': accent}"
                v-for="{albom : album, accent} of albums" v-if="album && album !== activeMedia" :key="album.title">
            <span
                    class="media-section__item-bg"
                    :style="{backgroundImage: 'url(' + album.acf.media[0] + ')'}"
            ></span>
            <span class="media-section__item-content">
              {{album.title}} <br>
              {{album.acf.date}}
            </span>
        </g-link>
    </section>
</template>

<script>
    export default {
        name: "Media",
        props: ["albums", "activeMedia"]
    }
</script>

<style scoped lang="scss">
    .media-section {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-auto-rows: 220px;
        color: var(--color-white);

        @media (max-width: 786px) {
            &>* {
                grid-column: 1/3;
            }
        }
    }

    .media-section__main {
        background: var(--color-second);
        display: flex;
        justify-content: center;
        padding: 95px 15px;
        grid-column: 1/3;
        grid-row: 1/3;
    }

    .media-section__main-title {
        font-size: 24px;
        text-transform: uppercase;
        font-weight: 800;
    }

    .media-section__item {
        display: flex;
        text-align: left;
        background-size: cover;
        font-size: 24px;
        line-height: 31px;
        padding: 23px 20px;
        text-decoration: none;
        position: relative;
        transition: all 0.3s ease-in-out;

        &:hover {
            color: var(--color-white);
            background: var(--color-black);

            .media-section__item-bg {
                opacity: 0.7;
                filter: grayscale(0.2);
            }

            .media-section__item-content {
                color: var(--color-white);
            }
        }

        &--accent {
            &:before {
                z-index: 2;
                content: '';
                position: absolute;
                display: block;
                top: 0;
                left: 0;
                width: 0;
                height: 0;
                border-top: 32px solid var(--color-accent);
                border-right: 32px solid transparent;
            }
        }

        &:hover {
            outline: none;
        }

        @media (min-width: 768px) {
            &:first-of-type {
                padding-top: 95px;
                grid-column: 3/-1;
                grid-row: 1/3;
            }

            &:nth-of-type(2) {
                grid-row: 3/5;
            }

            &:nth-of-type(3) {
                grid-column: 2/4;
                grid-row: 3/5;
            }

            &:nth-of-type(5) {
                grid-column: 5/7;
            }

            &:nth-of-type(6) {
                grid-column: 4/7;
                grid-row: 4/5;
            }

            &:nth-of-type(6) {
                grid-column: 4/7;
                grid-row: 4/5;
            }
        }
    }

    .media-section__item-bg {
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

    .media-section__item-content {
        position: relative;
        z-index: 1;
        font-weight: 600;
        text-transform: uppercase;
        text-decoration: none;
        color: var(--color-black);
        transition: all 0.3s ease-in-out;
    }

    @media (max-width: 767px) {
        .media-section {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-auto-rows: 220px;
            color: var(--color-white);
        }

        .media-section__main {
            grid-row: 1/2;
        }
    }
</style>
