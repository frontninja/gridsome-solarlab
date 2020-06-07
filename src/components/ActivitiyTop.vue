<template>
    <div class="container">
        <div class="activity-main">
            <div class="activity-main__item">
                <h1 class="activity-main__title">{{activity.title}}</h1>
                <p class="activity-main__date">{{activity.acf.period.from | formatDate}} - {{activity.acf.period.to | formatDate}}</p>
            </div>
            <div class="activity-main__item">
                <p class="activity-main__desc">
                    до начала
                    <br/>мероприятия осталось:
                </p>
                <div class="activity-timer">
                    <div class="activity-timer__item" v-if="months">
                        <span class="activity-timer__value">{{months}}</span>
                        <span class="activity-timer__text">{{months | pluralize('ru', ['Месяц', 'Месяца', 'Месяцов'])}}</span>
                    </div>
                    <div class="activity-timer__item">
                        <span class="activity-timer__value">{{days}}</span>
                        <span class="activity-timer__text">{{days | pluralize('ru', ['День', 'Дня', 'Дней'])}}</span>
                    </div>
                    <div class="activity-timer__item">
                        <span class="activity-timer__value">{{hours}}</span>
                        <span class="activity-timer__text">{{hours | pluralize('ru', ['Час', 'Часа', 'Часов'])}}</span>
                    </div>
                    <div class="activity-timer__item" v-if="!months">
                        <span class="activity-timer__value">{{minutes}}</span>
                        <span class="activity-timer__text">{{minutes | pluralize('ru', ['Минута', 'Минуты', 'Минут'])}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import * as moment from 'moment';

    export default {
        name: "ActivityCard",
        props: ["activity"],
        data() {
            return {
                months: null,
                days: null,
                hours: null,
                minutes: null
            }
        },
        mounted() {
            const date = moment(this.activity.acf.period.from).format('YYYY-MM-DD HH:mm:ss');
            const diff = moment().isBefore(date) ? moment().diff(date, 'minutes') : 0;
            const duration = moment.duration(diff, 'minutes');
            this.months = Math.abs(duration.months());
            this.days = Math.abs(duration.days());
            this.hours = Math.abs(duration.hours());
            this.minutes = Math.abs(duration.minutes());
        }
    };
</script>

<style lang="scss">
    .activity-main {
        margin-top: 50px;
        display: flex;
        align-items: center;
        margin-bottom: 100px;
    }

    .activity-main__item {
        flex: 1;
        padding-right: 50px;
    }

    .activity-main__title {
        font-size: 36px;
        line-height: 47px;
        letter-spacing: 0.5px;
        font-weight: 800;
        text-transform: uppercase;
        margin-bottom: 14px;

        @media (max-width: 768px) {
            font-size: 24px;
            line-height: 1.5;
        }
    }

    .activity-main__date {
        font-weight: 600;
        font-size: 18px;
    }

    .activity-main__desc {
        font-size: 18px;
        line-height: 23px;
        font-weight: 600;
        margin-bottom: 30px;
    }

    .activity-timer {
        display: grid;
        grid-auto-flow: column;
        grid-gap: 30px;
    }

    .activity-timer__item {
        display: flex;
        align-items: baseline;
    }

    .activity-timer__value {
        background: #33BE41;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        font-size: 30px;
        font-weight: 800;
        color: var(--color-white);
    }

    .activity-timer__text {
        font-size: 16px;
        font-weight: 800;
        text-transform: uppercase;
    }

    @media (max-width: 767px) {

        .activity-timer {
            grid-auto-flow: row;
        }
        .activity-main {
            flex-direction: column;
            align-items: stretch;
            &>*+*{
                margin-top: 50px;
            }
        }
        .activity-main__item {
            padding: 0;
        }
    }
</style>
