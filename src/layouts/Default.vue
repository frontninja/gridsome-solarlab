<template>
    <div class="layout scroll-to-top__wrapper">
        <Sidebar class="layout__sidebar"/>
        <div class="layout__wrapper">
            <div class="layout__content">
                <slot class="page__content"/>
            </div>
            <Footer class="layout__footer"/>
        </div>
        <button type="button" class="scroll-to-top" v-if="isToTopButtonActive" @click="scrollToTop()">
            <ArrowTop class="scroll-to-top__icon"/>
            <span class="scroll-to-top__text">наверх</span>
        </button>
    </div>
</template>

<static-query>
    query {
    metadata {
    siteName
    }
    }
</static-query>

<script>

    import {throttle} from 'throttle-debounce';
    import SweetScroll from 'sweet-scroll';

    import Sidebar from "../components/Sidebar";
    import Footer from "../components/Footer";
    import ArrowTop from "../assets/svg/arrow-top-icon.svg";
    const scroller = new SweetScroll();
    const THROTTLE_DELAY = 100;
    export default {
        components: {Sidebar, Footer, ArrowTop},
        data() {
            return {
                isToTopButtonActive: false,
                throttleScroll: null,
                throttleResize: null
            }
        },
        created() {
            if (process.isClient) {
                this.throttleScroll = throttle(THROTTLE_DELAY, this.handleScroll);
                window.addEventListener('scroll', this.throttleScroll);
            }
        },
        methods: {
            scrollToTop() {
                if (process.isClient) {
                    scroller.to(0);
                }
            },
            handleScroll() {
                if (process.isClient) {
                    this.isToTopButtonActive = window.pageYOffset > 300;
                }
            },
        }
    }
</script>

<style scoped lang="scss">

    .layout {
        height: 100%;
        display: grid;
        grid-template-columns: 126px 1fr;
    }

    .layout__wrapper {
        grid-column-start: 2;
        grid-column-end: -1;
        display: flex;
        flex-direction: column;
        min-height: 100%;
    }

    .layout__content {
        flex: 1 0 auto;
    }

    .layout__footer {
        flex: 0 0 auto;
    }

    .scroll-to-top__wrapper {
        position: relative;
    }

    .scroll-to-top {
        z-index: 100;
        position: fixed;
        bottom: 50px;
        right: 50px;
        width: 60px;
        height: 60px;
        border: none;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: var(--color-white);
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

        &:hover {
            .scroll-to-top__icon {
                fill: #616160;
            }

            .scroll-to-top__text {
                color: #616160;
            }
        }
    }

    .scroll-to-top__icon {
        fill: #C4C4C4;
        transition: all .3s ease-in-out;
    }

    .scroll-to-top__text {
        font-weight: 500;
        font-size: 12px;
        color: #C4C4C4;
        transition: all .3s ease-in-out;
    }

    @media (max-width: 767px) {
        .layout {
            height: 100%;
            display: grid;
            grid-template-columns: 56px 1fr;
        }
    }
</style>
