<template>
    <footer class="footer">
        <div class="container footer__container">
            <div class="footer__block">
                <h3 class="text-xl footer__title">Быстрые ссылки</h3>
                <div class="footer__links">
                    <g-link class="footer__link" :to="link.path" v-for="link of links" :key="link.title">
                        {{link.title}}
                    </g-link>
                </div>
            </div>
            <div class="footer__block">
                <h3 class="text-xl footer__title">Контакты</h3>
                <g-link class="footer__link" to="https://taplink.cc/solarlab.sport">Связаться с нами</g-link>
                <br>
                <g-link class="footer__link" to="/activities">Карта мероприятий</g-link>
                <g-link class="footer__button" to="https://taplink.cc/solarlab.sport">связаться</g-link>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer.vue",
        data() {
            return {
                links: [
                    {
                        path: '/',
                        title: 'главная'
                    },
                    {
                        path: 'activities',
                        title: 'Мероприятия'
                    },
                    {
                        path: 'news',
                        title: 'Новости'
                    },
                    {
                        path: 'albums',
                        title: 'Медиа'
                    },
                    {
                        path: 'about',
                        title: 'О нас'
                    },
                    {
                        path: 'contacts',
                        title: 'Контакты'
                    },
                ]
            }
        }
    }
</script>

<style lang="scss">
    .footer {
        background-color: var(--color-primary-dark);
        background-image: url("data:image/svg+xml,%3Csvg width='467' height='212' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)' fill='%23fff' opacity='.2'%3E%3Cpath d='M139.64 162.07l43.61-43.45h235.81l28.48-28.38h16.78v-1.77H446.8l-28.48 28.38H182.5l-43.6 43.45h-28.88c-.29-2.74-2.62-4.88-5.45-4.88-3.03 0-5.49 2.45-5.49 5.47 0 3.02 2.46 5.47 5.49 5.47 2.62 0 4.81-1.83 5.35-4.29h29.72zm-32.11-1.19c0 1.63-1.33 2.95-2.96 2.96a2.981 2.981 0 01-2.97-2.96c0-1.63 1.33-2.95 2.97-2.96 1.63.01 2.96 1.33 2.96 2.96z'/%3E%3Cpath d='M414.61 109.15l32.19-32.07h17.53v-1.77h-18.27l-32.19 32.08h-237.6l-43.61 43.45h-51.4a5.479 5.479 0 00-5.19-3.69c-3.03 0-5.49 2.45-5.49 5.47 0 3.02 2.46 5.47 5.49 5.47 3.03 0 5.49-2.45 5.49-5.47h51.83l43.6-43.45h237.62v-.02zM79.06 152.61c0 1.63-1.33 2.95-2.97 2.96-1.64 0-2.96-1.32-2.97-2.96a2.96 2.96 0 012.97-2.95 2.953 2.953 0 012.97 2.95z'/%3E%3Cpath d='M466.32 58.08v5.77h-20.34l-35.3 35.18H171.02l-39.75 39.61h-19.08a7.47 7.47 0 01-7.03 4.88c-4.13 0-7.49-3.35-7.49-7.47 0-4.12 3.36-7.47 7.49-7.47 2.92 0 5.55 1.73 6.77 4.29h16.95l39.75-39.61H408.3l35.29-35.18h22.73zM104.2 136.05c0 .52.44.96.97.96.52 0 .96-.43.96-.96s-.43-.95-.96-.95a.96.96 0 00-.97.95z'/%3E%3Cpath d='M406.9 57.42l16.49-16.43c.87.57 1.9.9 3.02.9 3.03 0 5.48-2.45 5.48-5.47 0-3.02-2.45-5.47-5.48-5.47-3.03 0-5.49 2.45-5.49 5.47 0 1.27.43 2.43 1.16 3.35l-15.92 15.86H229.44V70.5l8.6 8.56c-.65.9-1.03 2-1.03 3.18 0 3.02 2.46 5.47 5.49 5.47 3.03 0 5.49-2.45 5.49-5.47 0-3.02-2.46-5.47-5.49-5.47-1.19 0-2.3.39-3.2 1.03l-8.08-8.05V57.41h47.46l-.04.04 17.17 17.11h19.58c.43 2.6 2.68 4.58 5.41 4.58 3.03 0 5.49-2.45 5.49-5.47 0-3.02-2.46-5.47-5.49-5.47-2.73 0-4.99 1.98-5.41 4.58h-18.84l-15.42-15.37h57.4l13.11 13.6h39.4c.43 2.6 2.68 4.58 5.41 4.58 3.03 0 5.49-2.45 5.49-5.47 0-3.02-2.46-5.47-5.49-5.47-2.73 0-4.99 1.98-5.41 4.58H352.4L341 57.41h65.9v.01zm-13.42 12.71c0-1.63 1.33-2.95 2.97-2.96 1.63 0 2.96 1.33 2.96 2.96a2.966 2.966 0 01-5.93 0zm-75.64 3.55a2.981 2.981 0 012.97-2.96c1.63.01 2.96 1.33 2.96 2.96s-1.33 2.95-2.96 2.95a2.96 2.96 0 01-2.97-2.95zm-78.31 8.57c0-1.63 1.33-2.95 2.96-2.95 1.64 0 2.96 1.32 2.96 2.95 0 1.63-1.33 2.95-2.96 2.95s-2.95-1.32-2.96-2.95zm186.88-42.86c-1.64 0-2.96-1.32-2.96-2.96 0-1.63 1.33-2.95 2.96-2.95s2.96 1.32 2.97 2.95a2.975 2.975 0 01-2.97 2.96zM434.05 180.98l30.28 30.22h.01l-.03-2.69-29.53-29.3h-29.07l-40.94-40.79H177.76l-41.53 41.38H53.92L6.98 133.02V90.18c2.31-.65 4-2.75 4-5.26 0-3.02-2.45-5.47-5.49-5.47S0 81.9 0 84.92c0 2.92 2.3 5.3 5.19 5.46v43.38l47.99 47.82h83.79l41.53-41.38h185.54l40.93 40.79h29.08v-.01zM5.49 87.87c-1.64 0-2.97-1.33-2.97-2.96a2.96 2.96 0 012.97-2.95c1.63 0 2.96 1.32 2.97 2.95a2.981 2.981 0 01-2.97 2.96z'/%3E%3Cpath d='M247.32 33.26l22.13-22.06h194.87V9.43H268.71l-22.13 22.06h-31.37l-13.12 13.08h-37.82l-66.3 66.07h-44.5l-7.96 7.93c-.95-.8-2.18-1.29-3.53-1.29-3.04 0-5.49 2.45-5.49 5.47 0 3.02 2.45 5.47 5.49 5.47 3.03 0 5.49-2.45 5.49-5.47 0-1.04-.3-2-.8-2.83l7.54-7.52H98.7L165 46.34h37.82l13.13-13.08h31.37zM41.98 119.8a2.96 2.96 0 012.96 2.96c0 1.63-1.33 2.95-2.96 2.95-1.64 0-2.97-1.33-2.97-2.95 0-1.64 1.33-2.96 2.97-2.96z'/%3E%3Cpath d='M242.87 23.28l21.58-21.5h199.88V.01H263.71l-21.58 21.5h-34.26l-11.12 11.08H156.7L90.85 98.21h-40.2L37.36 84.96c.57-.86.91-1.9.91-3.01 0-3.02-2.46-5.47-5.49-5.47-3.03 0-5.49 2.45-5.49 5.47 0 3.02 2.45 5.47 5.49 5.47 1.27 0 2.44-.43 3.37-1.16l13.76 13.71h41.68l65.85-65.62h40.05l11.12-11.08h34.26v.01zM32.78 84.91c-1.64 0-2.96-1.32-2.97-2.95 0-1.63 1.33-2.96 2.97-2.96 1.63 0 2.96 1.33 2.97 2.96a2.966 2.966 0 01-2.97 2.95z'/%3E%3Cpath d='M242.87 23.28l21.58-21.5h199.88V.01H263.71l-21.58 21.5h-34.26l-11.12 11.08H156.7L90.85 98.21h-40.2L37.36 84.96c.57-.86.91-1.9.91-3.01 0-3.02-2.46-5.47-5.49-5.47-3.03 0-5.49 2.45-5.49 5.47 0 3.02 2.45 5.47 5.49 5.47 1.27 0 2.44-.43 3.37-1.16l13.76 13.71h41.68l65.85-65.62h40.05l11.12-11.08h34.26v.01zM32.78 84.91c-1.64 0-2.96-1.32-2.97-2.95 0-1.63 1.33-2.96 2.97-2.96 1.63 0 2.96 1.33 2.97 2.96a2.966 2.966 0 01-2.97 2.95z'/%3E%3Cpath d='M249.99 48.55l27.14-27.05h187.19v-1.77H276.39l-27.14 27.05h-34.34v33.7h-64.44l-41.82 41.68h-26.7l-9.84 9.81c-.83-.5-1.8-.79-2.84-.79-3.03 0-5.49 2.45-5.49 5.47 0 3.02 2.46 5.47 5.49 5.47 3.03 0 5.48-2.45 5.48-5.47 0-1.34-.49-2.57-1.29-3.52l9.22-9.19h26.7l41.82-41.68h65.48v-33.7h33.31v-.01zM69.27 133.69c1.63 0 2.96 1.32 2.96 2.95a2.966 2.966 0 01-5.93 0 2.96 2.96 0 012.97-2.95z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Cpath transform='rotate(-90 0 211.2)' fill='%23fff' d='M0 211.2h211.2v466.32H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right center;
        padding: 90px 0;
        color: var(--color-white);
    }

    .footer__container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .footer__block {
        & + & {
            padding-left: 140px;
            border-left: 5px solid rgba(#FFFFFF, .2);
        }
    }

    .footer__links {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .footer__link {
        color: var(--color-gray-lighten);
        text-decoration: none;
        text-transform: capitalize;
        padding-right: 20px;
        font-size: 18px;
        line-height: 1.5;
        transition: color .3s ease-in-out;

        &:hover {
            color: var(--color-primary-lighter);
        }
    }

    .footer__title {
        margin-bottom: 2em;
    }

    .footer__button {
        margin-top: 30px;
        display: inline-flex;
        height: 40px;
        line-height: 40px;
        font-size: 18px;
        font-weight: 900;
        text-transform: uppercase;
        padding: 0 30px;
        background: #E3E7EB;
        text-decoration: none;
        border-radius: 20px;
        color: var(--color-primary);
        transition: all .3s ease-in-out;
        &:hover {
            background: darken(#E3E7EB, 10%);
        }
    }

    @media (max-width: 899px) {
        .footer__container {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
        }

        .footer__block + .footer__block {
            margin-top: 75px;
            padding-left: 0;
            border-left: none;
        }
    }

    @media (max-width: 767px) {
        .footer__links {
            grid-template-columns: repeat(1, 1fr);
        }

        .footer__title {
            margin-bottom: 2em;
        }
    }
</style>
