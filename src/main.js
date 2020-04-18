// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/assets/scss/styles.scss'
import DefaultLayout from '~/layouts/Default.vue'
import VueFilterPluralize from 'vue-filter-pluralize'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.use(VueFilterPluralize);
}
