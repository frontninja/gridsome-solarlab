<template>
  <Layout>
    <div class="text-component container container--padding">
      <h1 class="text-xxl">{{$page.wordPressPage.title}}</h1>
      <p v-html="$page.wordPressPage.content"></p>
    </div>
  </Layout>
</template>

<page-query>
  query Page {
  wordPressPage(id: "178") {
  title
  content
  }
  }
</page-query>

<script>
export default {
  metaInfo() {
    return {title: this.$page.wordPressPage.title};
  },
}
</script>
