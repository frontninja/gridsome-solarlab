<template>
  <div class="layout">
    <Sidebar/>
    <div class="layout__content">
      <slot/>
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
  export default {
    components: {Sidebar}
  }
</script>

<style scoped lang="scss">
  .layout {
    display: flex;
  }
  .layout__content {
    width: 100%;
    padding-left: 126px;
  }
</style>
