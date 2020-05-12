<template>
    <div class="activity-banner">
        <div class="activity-banner__item">
            <g-image
                    class="activity-banner__logo"
                    :src="activity.acf.logo"
                    :alt="activity.title"
            ></g-image>
            <a href="#" class="button activity-banner__button">Регистрация</a>
        </div>
        <div
                class="activity-banner__item activity-banner__item--row activity-banner__item--overlay"
                :style="{backgroundImage: 'url(' + activity.acf.banner + ')'}"
        >
            <div class="activity-banner__item-content">
                <h2 class="activity-banner__title">
              <span
                      class="activity-banner__title-item"
                      v-for="tag of activity.acf.tag"
                      :key="tag"
              >{{tag}}</span>
                </h2>
                <p class="activity-banner__date">{{activity.acf.period.from | formatDate}} - {{activity.acf.period.to | formatDate}}</p>
            </div>
            <div class="activity-banner__stages">
            <span
                    class="activity-banner__stage-value"
            >{{ activity.acf.numberOfStages}}</span>
                <span
                        class="activity-banner__stage-text"
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
    }

    .activity-banner__item {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 50%;
        height: 438px;
        padding-top: 100px;
        color: var(--color-white);
        background: var(--color-primary);
        background-size: cover;
        background-position: center;
        position: relative;

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

    .activity-banner__logo {
        margin-bottom: 80px;
    }

    .activity-banner__title {
        font-weight: 800;
        font-size: 36px;
        text-transform: uppercase;
        line-height: 1.5;
        margin-bottom: 15px;
        letter-spacing: 1px;
    }

    .activity-banner__title-item {
        display: flex;
    }

    .activity-banner__date {
        font-weight: 600;
        font-size: 18px;
    }

    .activity-banner__stages {
        margin-left: 15px;
    }

    .activity-banner__stage-value {
        font-size: 144px;
        font-weight: 800;
        color: var(--color-accent);
    }

    .activity-banner__stage-text {
        font-size: 18px;
        font-weight: 800;
        text-transform: uppercase;
    }

    @media (max-width: 1199px) {

        .activity-banner {
            grid-template-columns: repeat(1, 1fr);
        }
        .activity-banner__item {
            flex-wrap: wrap;
            min-width: 100%;
            order: 2;
            padding-left: 15px;

            &--row {
                order: 1;
                justify-content: flex-start;
            }
        }
    }
</style>
