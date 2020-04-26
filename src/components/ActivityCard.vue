<template>
    <g-link :to="activity.path" class="activity-card" :class="{'activity-card--big': isBig, 'activity-card--active': !active}">
        <div class="activity-card__bg" v-if="activity.acf.logo" :style="{backgroundImage: 'url(' + activity.acf.banner + ')'}"></div>
        <div class="activity-card__content">
            <h2 class="activity-card__title">{{activity.title}}</h2>
            <p class="activity-card__date" v-if="activity.acf.period">
                <span v-if="activity.acf.period.from">{{activity.acf.period.from}}</span>
                <span v-if="activity.acf.period.to"> - {{activity.acf.period.to}}</span></p>
            <div class="activity-card__tags" v-if="activity.acf.tag && activity.acf.tag.length">
                <div class="activity-card__tag" v-for="tag in activity.acf.tag" :key="tag">{{tag}}</div>
            </div>
        </div>
    </g-link>
</template>
<script>
    export default {
        name: "ActivityCard",
        props: ['active', 'isBig', 'activity'],
    }
</script>

<style scoped lang="scss">
    .activity-card {
        position: relative;
        transition: all .3s ease-in-out;
        color: var(--color-main);
        background: var(--color-second);
        cursor: pointer;
        flex: 1;
        text-decoration: none;
        &--big {
            min-width: 100%;
        }

        &--active {
            color: var(--color-second);
            background: var(--color-main);
            .activity-card__bg {
                filter: grayscale(.2);
            }
            .activity-card__tag{
                background: var(--color-second);
                color: var(--color-main);
            }
        }
    }

    .activity-card__bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        transition: all .3s ease-in-out;
        opacity: .60;
        filter: grayscale(1);
    }
    .activity-card__content {
        padding-top: 78px;
        height: 350px;
        display: flex;
        flex-direction: column;
        padding-left: 200px;
        padding-right: 50px;
        position: relative;
        z-index: 1;
    }

    .activity-card__title{
        font-weight: 800;
        font-size: 37px;
        line-height: 47px;
        letter-spacing: 0.16em;
        text-transform: uppercase;
    }

    .activity-card__date {
        font-weight: 800;
        font-size: 16px;
        letter-spacing: 0.16em;
    }

    .activity-card__tags{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: auto;
    }

    .activity-card__tag{
        height: 50px;
        display: inline-flex;
        align-items: center;
        padding: 0 22px;
        font-weight: 800;
        font-size: 21px;
        line-height: 25px;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        transition: all .3s ease-in-out;
        background: var(--color-main);
        color: var(--color-second);
    }
</style>
