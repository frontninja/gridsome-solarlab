<template>
  <Layout>
    <ActivityTop :title="this.$page.wordPressNews.acf.acitivty.title" />
    {{this.$page}}
  </Layout>
</template>

<page-query>
query($path: String!) {
  wordPressNews(path: $path) {
    title
    acf {
      acitivty {
        title
      }
    }
  }
}
</page-query>

<script>
import ActivityTop from "../components/ActivitiyTop";

export default {
  components: {
    ActivityTop
  }
};
</script>

<style>
</style>