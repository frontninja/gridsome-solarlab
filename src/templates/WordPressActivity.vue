import SweetScroll from "sweet-scroll";
<template>
    <Layout>
        <div class="overlay" v-if="activeSponsor" @click="activeSponsor = null"></div>
        <article class="page" :style="cssVars">
            <div class="container">
                <nav class="activity-nav">
                    <ul class="activity-nav__ul">
                        <li class="activity-nav__li"
                            v-if="$page.wordPressActivity.acf.resultsLink"
                        >
                            <button type="button" @click="scrollTo('results')" class="activity-nav__link">Результаты
                            </button>
                        </li>
                        <li class="activity-nav__li"
                            v-if="$page.wordPressActivity.acf.sponsors && $page.wordPressActivity.acf.sponsors.length">
                            <button type="button" @click="scrollTo('sponsors')" class="activity-nav__link">Спонсоры
                            </button>
                        </li>
                        <li class="activity-nav__li"
                            v-if="$page.wordPressActivity.acf.news && $page.wordPressActivity.acf.news.length">
                            <button type="button" @click="scrollTo('news')" class="activity-nav__link">Новости</button>
                        </li>
                        <li class="activity-nav__li"
                            v-if="$page.wordPressActivity.acf.documents && $page.wordPressActivity.acf.documents.length">
                            <button type="button" @click="scrollTo('documents')" class="activity-nav__link">Документы
                            </button>
                        </li>
                        <li class="activity-nav__li"
                            v-if="$page.wordPressActivity.acf.alboms && $page.wordPressActivity.acf.alboms.length">
                            <button type="button" @click="scrollTo('media')" class="activity-nav__link">Медиа</button>
                        </li>
                    </ul>
                </nav>
                <div class="breadcrumbs activity-page__breadcrumbs">
                    <g-link to="/">главная</g-link>
                    /
                    <g-link to="/activities">мероприятия</g-link>
                    /
                    {{$page.wordPressActivity.title}}
                </div>
            </div>
            <ActivityTop v-if="$page.wordPressActivity" :activity="$page.wordPressActivity"/>
            <ActivityBanner :activity="$page.wordPressActivity"/>

            <div class="container">
                <section class="activity-timing"
                         v-if="$page.wordPressActivity.acf.tajming && $page.wordPressActivity.acf.tajming.length">
                    <h2 class="title-2">Тайминг</h2>
                    <div class="timings">
                        <div class="timings__item"
                             :class="$page.wordPressActivity.acf.tajming.length - 1 === index && 'timings__item--end' || 1 === index && 'timings__item--start'"
                             v-for="(timing, index) of $page.wordPressActivity.acf.tajming">
                            <div class="timings__item-top">
                                <span v-if="!timing.isEtap">{{timing.title}}</span>
                                <button v-else type="button" @click="scrollTo('etap-' + (index+1))"
                                        class="timings__stage">
                                    <span class="timings__stage-value">{{timing.periodNumber}}</span>
                                    <span class="timings__stage-text">Этап</span>
                                </button>
                            </div>
                            <div class="timings__item-bot">
                                <div class="timings__item-desc" v-if="timing.description">
                                    {{timing.description}}
                                </div>
                                <div class="timings__item-date">{{timing.date | formatDate}}</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div class="periods">
                <article
                        class="period"
                        v-for="(period, index) of this.$page.wordPressActivity.acf.periods"
                        :key="index"
                        :id="'etap-' + (index+1)"
                >
                    <div
                            class="period__main"
                            :class="{'period__main--second': index % 2 === 0, 'green': index % 2 !== 0 }"
                    >
                        <div class="period__content">
                            <p class="period__title">{{index + 1}} Этап</p>
                            <h2 class="period__title">{{period.title}}</h2>
                            <p class="period__date">{{period.textDate}}</p>
                            <p class="period__text text-component" v-html="period.content"></p>
                            <g-link
                                    v-if="$page.wordPressActivity.acf.canRegister && period.registerLink"
                                    :to="period.registerLink"
                                    :class="{'button--second': index % 2 === 0}"
                                    class="button period__button"
                            >Регистрация
                            </g-link>
                        </div>
                    </div>
                    <div class="period__video-wrapper" v-if="period.video || period.media">
                        <div class="video-wrapper">
                            <div class="video-wrapper__item video-wrapper__item--primary"></div>
                            <div class="video-wrapper__item video-wrapper__item--accent"></div>
                            <div class="video-wrapper__item video-wrapper__item--second"></div>
                        </div>
                        <video class="period__video" controls v-if="!period.isLinkedVideo && period.video">
                            <source :src="period.video" type="video/mp4"/>
                        </video>
                        <div class="period__o-video" v-if="period.media && period.isLinkedVideo" v-html="period.media">
                        </div>
                    </div>
                    <div class="period__image-wrapper" v-for="image of period.images">
                        <div class="period__bg" :key="image.sourceUrl"
                             :style="{backgroundImage: 'url(' + image.sourceUrl + ')'}"></div>
                        <g-image :src="image.sourceUrl" :alt="image.altText" class="period__image"></g-image>
                    </div>
                </article>
            </div>
        </article>
        <Grid/>
        <News id="news" :style="cssVars"
              v-if="$page.wordPressActivity.acf.news && $page.wordPressActivity.acf.news.length"
              :news-items="$page.wordPressActivity.acf.news"/>
        <section class="documents-section" :style="cssVars"
                 id="documents"
                 v-if="$page.wordPressActivity.acf.documents && $page.wordPressActivity.acf.documents.length">
            <div class="container documents-section__container">
                <h2 class="documents-section__title">Документы</h2>
                <div class="documents">
                    <a class="documents__item" target="_blank" :href="document.file" :download="document.fileName"
                       v-for="document of $page.wordPressActivity.acf.documents">
                        <Document class="documents__item-icon"/>
                        <p class="documents__item-text">{{document.fileName}}</p>
                    </a>
                </div>
            </div>
        </section>

        <section class="container sponsors-section"
                 id="sponsors"
                 v-if="$page.wordPressActivity.acf.sponsors && $page.wordPressActivity.acf.sponsors.length">
            <h2 class="sponsors-section__title">Спонсоры</h2>
            <div class="sponsors">
                <div class="sponsors__item" @click="activeSponsor = sponsor.acf.logo"
                     v-for="{sponsor} of $page.wordPressActivity.acf.sponsors">
                    <g-image :src="sponsor.acf.logo" :alt="sponsor.title"></g-image>
                </div>
            </div>
        </section>
        <div class="sponsor-modal"
             :class="activeSponsor === sponsor.acf.logo ? 'sponsor-modal--active' : ''"
             v-if="activeSponsor === sponsor.acf.logo"
             v-for="{sponsor} of $page.wordPressActivity.acf.sponsors">
            <span class="sponsor-modal__title"><ArrowLeftIcon class="sponsor-modal__title-icon"
                                                              @click="activeSponsor = null"/> {{sponsor.title}}</span>
            <g-image class="sponsor-modal__logo" :src="sponsor.acf.logo" :alt="sponsor.title"></g-image>
            <g-link class="sponsor-modal__link" :to="sponsor.acf.link">Сайт</g-link>
        </div>
        <Media id="media" :style="cssVars"
               v-if="$page.wordPressActivity.acf.alboms && $page.wordPressActivity.acf.alboms.length"
               :albums="$page.wordPressActivity.acf.alboms"/>
        <div class="container">
            <div>
                <div id="vk_comments"></div>
            </div>
        </div>
    </Layout>
</template>
<page-query>
    query Activity($path: String!) {
    wordPressActivity(path: $path) {
    slug
    id
    title
    acf {
    canRegister
    registerLink
    tajming {
    isEtap
    periodNumber
    title
    description
    date
    }
    documents {
    fileName
    file
    }
    sponsors {
    sponsor {
    title
    acf {
    logo
    link
    }
    }
    }
    primaryColor
    accentColor
    secondColor
    logo
    banner
    tag
    description
    numberOfStages
    totalDistance
    numberOfDays
    period {
    from
    to
    }
    periods {
    title
    textDate
    content
    registerLink
    video
    isLinkedVideo
    media
    images {
    sourceUrl
    altText
    }
    }
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
    alboms {
    albom {
    path
    title
    acf {
    media
    date
    }
    }
    }
    }
    }
    }


</page-query>

<script>
    import Document from "../assets/svg/document.svg";
    import ActivityTop from "../components/ActivitiyTop";
    import ActivityBanner from "../components/ActivityBanner";
    import Media from "../components/Media";
    import News from "../components/News";
    import Grid from "../components/Grid";
    import ArrowLeftIcon from '../assets/svg/arrow-left-icon.svg';
    import SweetScroll from 'sweet-scroll';

    const scroller = new SweetScroll();
    export default {
        components: {
            Document,
            ActivityTop,
            ActivityBanner,
            Media,
            News,
            Grid,
            ArrowLeftIcon
        },
        metaInfo() {
            return {title: this.$page.wordPressActivity.title};
        },
        data: () => ({
            stages: null,
            activeSponsor: null,
            periods: []
        }),
        computed: {
            cssVars() {
                return {
                    '--color-primary': this.$page.wordPressActivity.acf.primaryColor,
                    '--color-accent': this.$page.wordPressActivity.acf.accentColor,
                    '--color-second': this.$page.wordPressActivity.acf.secondColor,
                }
            }
        },
        mounted() {
            if (this.$page) {
                this.stages = Array(+this.$page.wordPressActivity.acf.numberOfStages)
                    .fill(1)
                    .map((_, i) => i + 1);
            }
            // injectVKOpenApi()
            //     .then(initVK(true))
            //     .then(() => {
            //         VK.Widgets.Comments("vk_comments", {limit: 5, attach: "*"});
            //     });
        },
        methods: {
            scrollTo(elementId) {
                if (process.isClient) {
                    const el = document.getElementById(elementId);
                    scroller.toElement(el);
                }
            }
        }
    };
</script>

<style scoped lang="scss">

    .overlay {
        z-index: 100;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(black, .4);
    }

    .sponsor-modal {
        opacity: 0;
        visibility: hidden;
        background: #ffffff;
        position: fixed;
        min-width: 320px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
        padding: 100px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        &--active {
            opacity: 1;
            visibility: visible;
        }
    }

    .sponsor-modal__title {
        font-weight: 900;
        font-size: 24px;
        line-height: 31px;
        text-transform: uppercase;
        margin-bottom: 100px;
        color: #000000;
        display: flex;
        align-items: center;
    }

    .sponsor-modal__title-icon {
        margin-right: 20px;
        transition: all .28s ease-in-out;
        cursor: pointer;

        &:hover {
            fill: var(--color-primary);
        }
    }

    .sponsor-modal__logo {
        margin-bottom: 50px;
    }

    .sponsor-modal__link {
        background: var(--color-primary);
        border-radius: 160px;
        display: flex;
        align-items: center;
        height: 60px;
        padding: 0 28px;

        font-weight: 900;
        font-size: 18px;
        line-height: 23px;
        text-transform: uppercase;
        text-decoration: none;
        color: #FFFFFF;
        transition: all .28s ease-in-out;

        &:hover {
            background: var(--color-primary-dark);
        }
    }

    .video-wrapper {
        display: flex;
    }

    .video-wrapper__item {
        height: 15px;
    }

    .video-wrapper__item--primary {
        width: 45%;
        background: var(--color-primary);
    }

    .video-wrapper__item--accent {
        width: 35%;
        background: var(--color-accent);
    }

    .video-wrapper__item--second {
        width: 20%;
        background: var(--color-second);
    }

    .sponsors-section {
        padding-top: 85px;
        padding-bottom: 85px;
    }

    .sponsors-section__title {
        font-weight: 800;
        font-size: 24px;
        margin-bottom: 85px;
    }

    .sponsors {
        display: grid;
        grid-column-gap: 20px;
        grid-template-columns: repeat(6, 1fr);
        grid-auto-rows: 150px;
        align-items: center;
    }

    .sponsors__item {
        justify-self: center;
        filter: grayscale(1);
        transition: all .3s ease-in-out;
        cursor: pointer;

        &:hover {
            filter: grayscale(0);
        }

        & > img {
            max-width: 100%;
            object-fit: contain;
            max-height: 100%;
        }
    }

    .documents-section {
        background-color: var(--color-primary);
        padding: 85px 0;
        color: var(--color-white);
        background-image: url("../assets/images/design-element.png");
        background-position: right bottom;
        background-repeat: no-repeat;
    }

    .documents-section__title {
        font-weight: 800;
        font-size: 24px;
        margin-bottom: 85px;
    }

    .documents {
        display: grid;
        grid-template-columns: repeat(6, 126px);
        grid-gap: 20px;
    }

    .documents__item {
        color: var(--color-white);
        transition: all 0.3s ease-in-out;

        &:hover {
            color: var(--color-accent);

            .documents__item-icon {
                fill: var(--color-accent);
            }
        }
    }

    .documents__item-icon {
        margin-bottom: 12px;
        transition: all 0.3s ease-in-out;
    }

    .documents__item-text {
        font-size: 18px;
        line-height: 1.2;
    }

    .period {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 450px;
        color: var(--color-white);
    }

    .period__main {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--color-primary);

        &--second {
            background-color: var(--color-accent);

            & + .period__video {
                height: 450px;
                width: 100%;
            }
        }
    }

    .period__video {
        height: 435px;
        width: 100%;
    }

    .period__o-video {
        width: 100%;
        height: calc(100% - 15px);
    }

    .period__content {
        width: 50%;
    }

    .period__title {
        text-transform: uppercase;
        font-weight: 800;
        font-size: 24px;
        line-height: 1.5;
    }

    .period__date {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .period__text {
        font-size: 12px;
        line-height: 1.2;
    }

    .period__button {
        margin-top: 20px;
    }

    .period__image-wrapper {
        position: relative;
        overflow: hidden;
    }

    .period__bg {
        position: absolute;
        top: 0;
        left: 0;
        background-repeat: no-repeat;
        background-size: cover;
        filter: blur(5px);
        height: 100%;
        width: 100%;
    }

    .period__image {
        position: relative;
        z-index: 1;
        object-fit: contain;
        width: 100%;
        height: 100%;
    }

    .period__media {
        position: relative;
        overflow: hidden;
        padding-top: 56.25%;
    }

    .period__media-iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
    }

    .activity-nav {
        margin-bottom: 30px;
    }

    .activity-page__breadcrumbs {
        margin-bottom: 50px;
    }

    .activity-nav__ul {
        display: flex;
        flex-wrap: wrap;
        margin: 0 -25px;
    }

    .activity-nav__li {
        margin: 0 25px;
        margin-bottom: 20px;
    }

    .activity-nav__link {
        background: none;
        border: none;
        font-size: 17px;
        letter-spacing: 0.6px;
        font-weight: 600;
        text-decoration: none;
        color: var(--color-black);

        &:hover {
            text-decoration: underline;
        }
    }

    .activity-timing {
        padding: 100px 0;
    }

    .timings {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 20px;
    }

    .title-2 {
        font-weight: 800;
        font-size: 24px;
        line-height: 29px;
        margin-bottom: 50px;
    }

    .timings__item {
        flex: 1;
        min-width: 15%;
        border-bottom: 1px solid var(--color-black);
        position: relative;
        margin-bottom: 50px;
    }

    .timings__item-top {
        margin-bottom: 17px;
    }

    .timings__item-bot {
        position: relative;
        border-left: 1px solid var(--color-black);
        padding-left: 25%;
        height: 104px;
        display: flex;
        align-items: flex-end;
    }

    .timings__item-desc {
        font-size: 10px;
        line-height: 1.2;
        max-width: 80%;

        &:after {
            content: "";
            margin-top: 11px;
            display: block;
            height: 54px;
            width: 1px;
            background: var(--color-black);
        }
    }

    .timings__item-date {
        top: calc(100% + 5px);
        left: 0;
        position: absolute;
    }

    .timings__stage {
        background: none;
        border: none;
        display: flex;
        align-items: baseline;
        text-decoration: none;
    }

    .timings__stage-value {
        font-size: 48px;
        color: var(--color-accent);
        font-weight: 800;
    }

    .timings__stage-text {
        font-size: 18px;
        margin-left: 3px;
        text-transform: lowercase;
        color: var(--color-black);
    }

    .timings__item--end {
        flex: inherit;
        width: 0;

        .timings__item-bot {
            border-left: none;
            border-right: 1px solid var(--color-black);
            padding-left: 0;
        }

        .timings__item-top {
            position: absolute;
            top: -33px;
            right: 0;
        }

        .timings__item-date {
            left: inherit;
            right: 0;
        }
    }

    @media (max-width: 1199px) {

        .activity-banner {
            grid-template-columns: repeat(1, 1fr);
        }
        .activity-banner__item {
            min-width: 100%;
            order: 2;
            padding-left: 15px;

            &--row {
                order: 1;
                justify-content: flex-start;
            }
        }

        .documents {
            grid-template-columns: repeat(3, 126px);
        }

        .timings__item {
            min-width: 25%;
        }

        .sponsors {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media (max-width: 767px) {
        .timings__item {
            min-width: 50%;
        }

        .period {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-auto-rows: min-content;
            color: var(--color-white);
        }

        .period > * {
            min-height: 300px;
        }

        .period__main {
            padding: 25px;
        }

        .sponsors {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>

