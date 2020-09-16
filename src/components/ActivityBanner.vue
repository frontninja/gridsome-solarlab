<template>
    <div class="activity-banner">
        <div class="activity-banner__main">
            <g-image
                    class="activity-banner__logo"
                    :src="activity.acf.logo"
                    :alt="activity.title"
            ></g-image>
            <a v-if="activity.acf.canRegister && activity.acf.registerLink" :href="activity.acf.registerLink"
               class="button activity-banner__button">Регистрация</a>
        </div>
        <div class="activity-banner__info banner-info"
             :style="{backgroundImage: 'url(' + activity.acf.banner + ')'}">
            <div class="banner-info__content">
                <h2 class="banner-info__title">
              <span class="banner-info__title-item"
                    v-for="tag of activity.acf.tag"
                    :key="tag">{{tag}}</span>
                </h2>
                <p class="banner-info__date">{{activity.acf.period.from | formatDate}} - {{activity.acf.period.to |
                    formatDate}}</p>
            </div>
            <div class="banner-info__stages">
            <span
                    class="banner-info__stage-value"
            >{{ activity.acf.numberOfStages}}</span>
                <span
                        class="banner-info__stage-text"
                >{{ activity.acf.numberOfStages | pluralize('ru', ['Этап', 'Этапа', 'Этапов']) }}</span>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "ActivityCard",
        props: ["activity"]
    };
</script>

<style lang="scss">
    .activity-banner {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 438px;
        color: var(--color-white);
    }

    .activity-banner__item {
        color: var(--color-white);
        background: var(--color-primary);
        background-size: cover;
        background-position: center;
        position: relative;
        display: grid;
        grid-template-columns: min-content min-content;
        grid-gap: 15px;

        & > * {
            position: relative;
            z-index: 1;
        }

        &--overlay {
            &:before {
                content: "";
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: var(--color-black);
                opacity: 0.45;
            }
        }

        &--row {
            align-items: stretch;
            justify-content: center;
            flex-direction: row;
        }
    }

    .activity-banner__info {
        position: relative;
        display: grid;
        background-size: cover;
        background-position: center;
        grid-template-columns: repeat(2, min-content);
        justify-content: center;
        align-items: center;
        grid-gap: 15px;

        &:before {
            content: "";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--color-black);
            opacity: 0.45;
        }
    }

    .banner-info__content {
        display: grid;
        z-index: 1;
    }

    .banner-info__stages {
        display: flex;
        z-index: 1;
        align-items: flex-end;
    }

    .banner-info__title {
        font-weight: 800;
        font-size: 36px;
        text-transform: uppercase;
        line-height: 1.5;
        margin-bottom: 15px;
        letter-spacing: 1px;
    }

    .banner-info__title-item {
        display: flex;
    }

    .banner-info__date {
        font-weight: 600;
        font-size: 18px;
    }

    .banner-info__stage-value {
        font-size: 144px;
        font-weight: 800;
        color: var(--color-accent);
        line-height: 0.78;
    }

    .banner-info__stage-text {
        font-size: 18px;
        font-weight: 800;
        text-transform: uppercase;
    }

    .activity-banner__main {
        display: grid;
        justify-content: center;
        align-items: center;
        background: var(--color-primary);
        grid-gap: 80px;
        grid-auto-columns: min-content;
    }

    .activity-banner__logo {
        max-width: 100%;
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
            grid-template-columns: repeat(3, 1fr);
        }

        .timings__item {
            min-width: 25%;
        }

        .sponsors {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media (max-width: 789px) {

        .banner-info__title {
            font-size: 24px;
        }
        .activity-banner {
            grid-auto-rows: min-content;
        }

        .activity-banner__main {
            padding: 40px 10px;
        }
        .activity-banner__info {
            padding: 40px 10px;
            grid-template-columns: repeat(1, 1fr);
        }

        .banner-info__content {
            justify-content: center;
        }

        .banner-info__stages{
            justify-content: center;
        }
    }

</style>
