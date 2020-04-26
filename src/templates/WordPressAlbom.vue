<template>
  <Layout>
      {{this.$page}}
  </Layout>
</template>

<page-query>
query($path: String!) {
  wordPressAlbom(path: $path) {
    title
    acf {
      media
    }
  }
}
</page-query>

<script>
export default {};
</script>

<style>
</style>