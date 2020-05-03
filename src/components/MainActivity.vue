<template>
    <div class="main-activity">
        <div class="container main-activity__container">
            {{activity}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainActivity.vue",
        props: ['activity'],
    }
</script>

<style scoped lang="scss">
    .main-activity {
        height: 437px;
    }
</style>
