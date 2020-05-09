// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/assets/scss/styles.scss'
import DefaultLayout from '~/layouts/Default.vue'
import VueFilterPluralize from 'vue-filter-pluralize'
import VueSilentbox from 'vue-silentbox'
import * as moment from "moment";

export default function (Vue, {router, head, isClient}) {
    // Set default layout as a global component
    head.htmlAttrs = {lang: 'ru'};
    Vue.component('Layout', DefaultLayout);
    Vue.use(VueFilterPluralize);
    Vue.filter('formatDate', (value) => {
        if (value) {
            return moment(String(value)).format('MM.DD.YYYY');
        }
    });
    if (isClient) {
        Vue.use(VueSilentbox);
        Vue.directive('click-outside',
            {
                bind: function (el, binding, vnode) {
                    el.clickOutsideEvent = function (event) {
                        // here I check that click was outside the el and his childrens
                        if (!(el == event.target || el.contains(event.target))) {
                            // and if it did, call method provided in attribute value
                            vnode.context[binding.expression](event);
                        }
                    };
                    document.body.addEventListener('click', el.clickOutsideEvent)
                },
                unbind: function (el) {
                    document.body.removeEventListener('click', el.clickOutsideEvent)
                },
            });
    }
}
