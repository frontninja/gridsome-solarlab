<template>
    <div class="main-activity">
        <div class="main-activity__bg" v-if="activity.acf.banner"
             :style="{backgroundImage: 'url(' + activity.acf.banner + ')'}"></div>
        <div class="container main-activity__container">
            <div class="main-activity__content">
                <p class="main-activity__title text-xxl">
                    {{activity.title}}
                </p>
                <p class="main-activity__description">
                    {{activity.acf.description}}
                </p>
                <p class="main-activity__date">
                    {{activity.acf.period.from | formatDate}} - {{activity.acf.period.to | formatDate}}
                </p>
                <div class="main-activity__buttons">
                    <g-link class="button button--primary" v-if="activity.acf.canRegister && activity.acf.registerLink"
                            :to="activity.acf.registerLink">регистрация
                    </g-link>
                    <g-link class="button button--primary" :to="activity.path">Подробности</g-link>
                </div>
            </div>
            <div class="main-activity__info">
                <p class="period-value">{{activity.acf.numberOfStages}}</p>
                <p class="period-text">{{activity.acf.numberOfStages | pluralize('ru', ['Этап', 'Этапа',
                    'Этапов'])}}</p>
                <p class="main-activity__info-range">{{activity.acf.totalDistance}} км</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainActivity.vue",
        props: ['activity'],
        filters: {
            format: (imagesSrc) => {
                return imagesSrc.map(imageSrc => ({
                    src: imageSrc
                }))
            }
        }
    }
</script>

<style scoped lang="scss">

    .period-value {
        color: var(--color-accent);
        font-weight: bold;
        font-size: 64px;
    }

    .period-text {
        color: var(--color-gray);
        font-size: 24px;
        font-weight: 600;
        text-transform: lowercase;
    }

    .main-activity {
        position: relative;
        color: var(--color-white);
        background: var(--color-primary);
        transition: all .3s ease-in-out;
        &:hover {
            background: var(--color-black);

            .main-activity__bg {
                filter: grayscale(0);
                opacity: .6;
            }
        }
    }

    .main-activity__title {
        font-size: 36px;
        font-weight: bold;
        line-height: 1.2;
        margin-bottom: 14px;
    }

    .main-activity__bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: .3;
        filter: grayscale(1);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;

        transition: all .3s ease-in-out;
    }

    .main-activity__description {
        font-size: 18px;
        line-height: 1.2;
        margin-bottom: 14px;
    }

    .main-activity__date {
        font-size: 18px;
        line-height: 1.2;
        margin-bottom: 28px;
    }

    .main-activity__buttons {
        display: flex;
        flex-wrap: wrap;
        margin: 0 -11px;

        & > * {
            margin: 0 11px 15px;
        }
    }

    .main-activity__container {
        display: flex;
    }

    .main-activity__content {
        padding-right: 50px;
        height: 437px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    .main-activity__info {
        flex-shrink: 0;
        margin-left: auto;
        margin-right: 200px;
        height: 288px;
        width: 146px;
        background: var(--color-white);
        color: var(--color-black);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 0 21px 30px;
        position: relative;

        &:after {
            content: '';
            display: block;
            position: absolute;
            left: 0;
            width: 0;
            height: 0;
            border-top: 30px solid var(--color-white);
            border-right: 146px solid transparent;
            top: 100%;
        }
    }

    .main-activity__info-range {
        position: absolute;
        bottom: 30px;
        color: var(--color-gray);
        font-size: 18px;
        font-weight: 600;
    }

    @media (max-width: 767px) {
        .main-activity__container {
            flex-direction: column;
        }

        .main-activity__content {
            order: 2;
        }

        .main-activity__info {
            height: 150px;
            width: 117px;
            margin-left: 0;

            &:after {
                border-top: 25px solid var(--color-white);
                border-right: 117px solid transparent;
            }
        }
    }
</style>
