<template>
    <div class="grid-section">
        <div class="container grid-section__container">
            <p class="grid-section__title">
                классификация
            </p>
            <div class="grid-section__topline">
                <div class="grid-section__filter">
                    <span class="grid-section__filter-text">Фильтр</span>
                    <span class="grid-section__filter-chip">Мужчины <button class="close-button"><Close/></button></span>
                    <span class="grid-section__filter-chip">2 этап <button class="close-button"><Close/></button></span>
                </div>
                <input type="text" class="gird-section__search" placeholder="Поиск...">
            </div>
            <div class="grid-section__tabs">
                <button type="button" class="grid-section__tab" @click="activeTab = index"
                        :class="{'grid-section__tab--active': index === activeTab}" v-for="(tab, index) of tabs"
                        :key="tab.title">
                    {{tab.title}}
                </button>
            </div>
            <div class="grid-section__tabs-content" v-if="index === activeTab" v-for="(tab, index) of tabs"
                 :key="tab.title">
                <button class="grid-section__filter-item" v-for="item of tab.content">{{item.title}}</button>
            </div>

            <div class="grid__wrapper">
                <div class="grid">
                    <div class="grid__head">
                    <span class="grid__item">
                        Место
                    </span>
                        <span class="grid__item">
                        Участник
                    </span>
                        <span class="grid__item">
                        Номер
                    </span>
                        <span class="grid__item">
                        Кругов
                    </span>
                        <span class="grid__item">
                        Время
                    </span>
                    </div>
                    <div class="grid__body">
                        <div class="grid__row">
                         <span class="grid__item grid__item--first">
                            1
                        </span>
                            <span class="grid__item">
                            Щебелин Алексей (ETALON TEAM)
                        </span>
                            <span class="grid__item">
                            103
                        </span>
                            <span class="grid__item">
                            10
                        </span>
                            <span class="grid__item">
                            00:05:47.54
                        </span>
                        </div>
                        <div class="grid__row">
                         <span class="grid__item grid__item--second">
                            2
                        </span>
                            <span class="grid__item">
                            Щебелин Алексей (ETALON TEAM)
                        </span>
                            <span class="grid__item">
                            103
                        </span>
                            <span class="grid__item">
                            10
                        </span>
                            <span class="grid__item">
                            00:05:47.54
                        </span>
                        </div>
                        <div class="grid__row">
                         <span class="grid__item grid__item--third">
                            3
                        </span>
                            <span class="grid__item">
                            Щебелин Алексей (ETALON TEAM)
                        </span>
                            <span class="grid__item">
                            103
                        </span>
                            <span class="grid__item">
                            10
                        </span>
                            <span class="grid__item">
                            00:05:47.54
                        </span>
                        </div>
                        <div class="grid__row">
                         <span class="grid__item">
                            4
                        </span>
                            <span class="grid__item">
                            Щебелин Алексей (ETALON TEAM)
                        </span>
                            <span class="grid__item">
                            103
                        </span>
                            <span class="grid__item">
                            10
                        </span>
                            <span class="grid__item">
                            00:05:47.54
                        </span>
                        </div>
                        <div class="grid__row">
                         <span class="grid__item">
                            5
                        </span>
                            <span class="grid__item">
                            Щебелин Алексей (ETALON TEAM)
                        </span>
                            <span class="grid__item">
                            103
                        </span>
                            <span class="grid__item">
                            10
                        </span>
                            <span class="grid__item">
                            00:05:47.54
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Close from '../assets/svg/close-icon.svg';

    const axios = require('axios')

    export default {
        name: "Grid.vue",
        components: {
            Close
        },
        data() {
            return {
                info: null,
                activeTab: 0,
                tabs: [
                    {
                        title: '1 этап - Пролог',
                        content: [
                            {
                                title: 'КО2019 Masters Мужчины 30-39',
                                filter: 'КО2019 Masters Мужчины 30-39'
                            },
                            {
                                title: 'КО2019 Masters Мужчины 50-59',
                                filter: 'КО2019 Masters Мужчины 50-59'
                            },
                            {
                                title: 'КО2019 Masters Мужчины 40-49',
                                filter: 'КО2019 Masters Мужчины 40-49'
                            },
                            {
                                title: 'КО2019 Masters Мужчины 18-29',
                                filter: 'КО2019 Masters Мужчины 18-29'
                            },
                            {
                                title: 'КО2019 Masters Мужчины 60+',
                                filter: 'КО2019 Masters Мужчины 60+'
                            },
                            {
                                title: 'КО2019 Masters Женщины 18+',
                                filter: 'КО2019 Masters Женщины 18+'
                            }
                        ]
                    },
                    {
                        title: '2 этап - Групповая гонка [по часовой]',
                        content: [
                            {
                                title: 'КО2019 Masters Мужчины 30-39',
                                filter: 'КО2019 Masters Мужчины 30-39'
                            },
                            {
                                title: 'КО2019 Masters Мужчины 50-59',
                                filter: 'КО2019 Masters Мужчины 50-59'
                            },
                            {
                                title: 'КО2019 Masters Мужчины 40-49',
                                filter: 'КО2019 Masters Мужчины 40-49'
                            },
                            {
                                title: 'КО2019 Masters Мужчины 18-29',
                                filter: 'КО2019 Masters Мужчины 18-29'
                            },
                        ]
                    },
                    {
                        title: '3 этап - Групповая гонка [против часовой]',
                        content: [
                            {
                                title: 'КО2019 Masters Мужчины 30-39',
                                filter: 'КО2019 Masters Мужчины 30-39'
                            },
                            {
                                title: 'КО2019 Masters Мужчины 50-59',
                                filter: 'КО2019 Masters Мужчины 50-59'
                            },
                            {
                                title: 'КО2019 Masters Мужчины 40-49',
                                filter: 'КО2019 Masters Мужчины 40-49'
                            },
                            {
                                title: 'КО2019 Masters Мужчины 18-29',
                                filter: 'КО2019 Masters Мужчины 18-29'
                            },
                            {
                                title: 'КО2019 Masters Мужчины 60+',
                                filter: 'КО2019 Masters Мужчины 60+'
                            },
                            {
                                title: 'КО2019 Masters Женщины 18+',
                                filter: 'КО2019 Masters Женщины 18+'
                            }
                        ]
                    },
                    {
                        title: '4 этап - Индивидуальная гонка на время',
                        content: [
                            {
                                title: 'КО2019 Masters Мужчины 30-39',
                                filter: 'КО2019 Masters Мужчины 30-39'
                            },
                            {
                                title: 'КО2019 Masters Мужчины 50-59',
                                filter: 'КО2019 Masters Мужчины 50-59'
                            },
                            {
                                title: 'КО2019 Masters Мужчины 18-29',
                                filter: 'КО2019 Masters Мужчины 18-29'
                            },
                            {
                                title: 'КО2019 Masters Мужчины 60+',
                                filter: 'КО2019 Masters Мужчины 60+'
                            },
                            {
                                title: 'КО2019 Masters Женщины 18+',
                                filter: 'КО2019 Masters Женщины 18+'
                            }
                        ]
                    }
                ]
            }
        },
        mounted() {
            if (process.isClient) {
                axios.get('http://api.chrono.zelbike.ru/v1/RaceStages/List?accessKey=RCwhtjBTpjVJ7tPGZKfPnQdtGzgo8pGQUisXxeXEvw')
                    .then(response => (this.info = response));
            }
        }
    }
</script>

<style scoped lang="scss">
    .grid-section {
        display: none;
        padding: 95px 0;
        background: #F5F5F5;
        color: #616160;
    }

    .grid-section__topline {
        display: flex;
        margin-bottom: 33px;
    }

    .gird-section__search {
        margin-left: auto;
        background: var(--color-white);
        border-radius: 160px;
        border: none;
        width: 235px;
        height: 33px;
        padding: 0 30px;
    }

    .grid-section__title {
        font-weight: 900;
        font-size: 24px;
        line-height: 29px;
        text-transform: uppercase;
        margin-bottom: 33px;
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
        background: var(--color-white);
        height: 33px;
        border-radius: 30px;
        padding: 0 18px;
    }

    .grid-section__filter-text {
        font-size: 18px;
        line-height: 22px;
        text-transform: uppercase;
    }

    .grid-section__tabs {
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        margin-bottom: 18px;
    }

    .grid-section__tab {
        flex: 1;
        background: none;
        border: none;
        text-align: left;
        line-height: 1.2;
        font-weight: 900;
        font-size: 18px;
        color: #616160;

        &:hover, &--active {
            color: var(--color-accent);
        }

        & + & {
            margin-left: 20px;
        }
    }

    .grid-section__tabs-content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 20px;
        margin-bottom: 46px;
    }

    .grid-section__filter-item {
        background: none;
        border: none;
        font-size: 18px;
        line-height: 23px;
        display: inline-flex;
        color: #616160;

        &:hover {
            color: var(--color-accent);
        }
    }

    .grid {
        background: var(--color-white);
    }

    .grid__head {
        padding: 17px 20px;
        display: grid;
        grid-template-columns: 115px 1fr 115px 115px 115px;
        grid-column-gap: 15px;
        border-bottom: 1px solid #C4C4C4;

        .grid__item {
            font-weight: 900;
            font-size: 18px;
            color: #616160;
        }
    }

    .grid__item {
        font-size: 18px;

        &--first {
            font-weight: 900;
            color: #FABD13;
        }

        &--second {
            font-weight: 900;
            color: #C4C4C4;
        }

        &--third {
            font-weight: 900;
            color: #EC681D;
        }
    }

    .grid__body {
        padding: 10px 0;
    }

    .grid__row {
        padding: 5px 20px;
        display: grid;
        grid-template-columns: 115px 1fr 115px 115px 115px;
        grid-column-gap: 15px;
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

    @media (max-width: 1023px) {

        .grid__wrapper {
            width: 100%;
            overflow: auto;
            margin: 0 0 20px;
        }

        .grid {
            width: 100%;
            overflow: auto;
            margin: 0 0 20px;
        }
        .grid-section__topline {
            flex-direction: column;
        }
        .grid-section__filter {
            order: 2;
        }
        .gird-section__search {
            margin-left: 0;
            margin-bottom: 20px;
        }

        .grid-section__tabs {
            flex-wrap: wrap;
        }

        .grid-section__tab {
            min-width: 50%;
            flex: 1;

            & + & {
                margin-left: 0;
                margin-top: 10px;
            }
        }
    }

    @media (max-width: 767px) {
        .grid-section__tab {
            min-width: 100%;
            flex: 1;
        }

        .grid-section__tabs-content {
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>
