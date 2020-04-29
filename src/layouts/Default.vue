<template>
    <div class="layout">
        <Sidebar class="layout__sidebar"/>
        <div class="layout__wrapper">
            <div class="layout__content">
                <slot/>
            </div>
            <Footer class="layout__footer"/>
        </div>
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
    import Sidebar from "../components/Sidebar";
    import Footer from "../components/Footer";

    export default {
        components: {Sidebar, Footer}
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


</style>
