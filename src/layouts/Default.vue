<template>
  <div class="layout">
    <Sidebar class="layout__sidebar"/>
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
    display: grid;
    grid-template-columns: 126px 1fr;
  }
  .layout__content {
    grid-column-start: 2;
    grid-column-end: -1;
  }
</style>
