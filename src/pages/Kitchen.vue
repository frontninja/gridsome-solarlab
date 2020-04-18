<template>
    <Layout>
        <div class="kitchen-block">
            <a href="#" class="button">Регистрация</a>
            <button type="button" class="button button--accent">Добавить</button>
        </div>
    </Layout>
</template>

<script>
    export default {
        metaInfo: {
            title: 'Кухня'
        }
    }
</script>

<style lang="scss">

    .kitchen-block {
        display: flex;
        padding: 15px;
        background: #444;
        &+& {
            margin-top: 40px;
        }
        &>*+*{
            margin-left: 20px;
        }
    }
</style>
