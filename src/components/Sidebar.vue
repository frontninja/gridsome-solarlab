<template>
    <div class="sidebar" v-click-outside="hide">
        <div class="sidebar__content">
            <button class="icon-button" @click="toggle()">
                <MenuIcon/>
            </button>
            <g-link to="/" class="logo-link">
                <Logo/>
            </g-link>
        </div>
        <div class="sidebar__expanded" :class="{ 'sidebar__expanded--visible': isExpandedVisible}" >
<!--            <div class="sidebar__auth-links">-->
<!--                <a href="#" class="sidebar__auth-link">Вход</a>-->
<!--                <a href="#" class="sidebar__auth-link">Рег</a>-->
<!--            </div>-->
            <nav class="sidebar__nav nav">
                <ul class="nav__ul">
                    <li class="nav__li" @click="hide()">
                        <g-link to="/activities" class="nav__link">Мероприятия</g-link>
                    </li>
                    <li class="nav__li" @click="hide()">
                        <g-link to="/news" class="nav__link">Новости</g-link>
                    </li>
<!--                    <li class="nav__li" @click="hide()">-->
<!--                        <g-link to="/" class="nav__link">Участники</g-link>-->
<!--                    </li>-->
                    <li class="nav__li" @click="hide()">
                        <g-link to="/albums" class="nav__link">Медиа</g-link>
                    </li>
                    <li class="nav__li" @click="hide()">
                        <g-link to="/about" class="nav__link">О нас</g-link>
                    </li>
<!--                    <li class="nav__li" @click="hide()">-->
<!--                        <g-link to="/" class="nav__link">Аналитика</g-link>-->
<!--                    </li>-->
<!--                    <li class="nav__li" @click="hide()">-->
<!--                        <g-link to="/" class="nav__link">Музей</g-link>-->
<!--                    </li>-->
                    <li class="nav__li" @click="hide()">
                        <g-link to="/kitchen" class="nav__link">Кухня</g-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
    import MenuIcon from '../assets/svg/menu-icon.svg';
    import Logo from '../assets/svg/logo.svg';

    export default {
        name: "Sidebar",
        data: () => {
            return {
                isExpandedVisible: false
            }
        },
        methods: {
            toggle() {
                this.isExpandedVisible = !this.isExpandedVisible
            },

            hide() {
                if (this.isExpandedVisible) {
                    console.log(this.isExpandedVisible);
                    this.isExpandedVisible = false
                }
            }
        },
        components: {
            MenuIcon,
            Logo
        }
    }
</script>

<style scoped lang="scss">

    .logo-link {
        margin-top: 35px;
    }

    .sidebar {
        display: flex;
        position: fixed;
        z-index: 10;
        top: 0;
        left: 0;
        min-height: 100vh;
        flex-shrink: 0;
        background: var(--color-primary-dark);
    }

    .sidebar__content {
        width: 126px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 96px 0;
    }

    .sidebar__expanded {
        max-width: 0;
        overflow: hidden;
        padding: 78px 0;
        transition: all .5s cubic-bezier(.8, 0, .33, 1);
    }

    .sidebar__expanded--visible {
        padding-right: 15px;
        max-width: 257px;
    }

    .sidebar__auth-links {
        display: flex;
        margin-bottom: 50px;
        margin-right: 34px;
    }

    .sidebar__auth-link {
        display: inline-flex;
        font-weight: 800;
        font-size: 21px;
        letter-spacing: 0.11em;
        text-transform: uppercase;
        color: var(--color-white);
        text-decoration: none;
        transition: color .28s ease-in-out;

        & + & {
            margin-left: 50px;
        }

        &:hover {
            color: var(--color-primary-lighter);
        }
    }

    .icon-button {
        background: transparent;
        border: none;

        svg {
            transition: fill .28s ease-in-out;
        }

        &:hover {
            svg {
                fill: var(--color-primary-lighter);
            }
        }
    }

    .nav__ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .nav__link {
        display: inline-flex;
        font-weight: 600;
        font-size: 18px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        white-space: nowrap;
        color: var(--color-white);
        text-decoration: none;
        transition: color .28s ease-in-out;

        &:hover {
            color: var(--color-primary-lighter);
        }
    }

    .nav__li {
        & + & {
            margin-top: 28px;
        }
    }

    @media (max-width: 767px) {
        .sidebar__content {
            width: 56px;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 15px 0;
        }

        .logo-link {
            margin-top: 20px;
        }

        .logo-link svg {
            width: 30px;
        }
    }

</style>
