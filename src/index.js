import * as Vue from 'vue'
import hello from './hello.vue'


Vue.createApp({
  mounted(){ console.log(123123) },
  components: { hello },
  template: '<hello/>'
}).mount('#app');

// console.log(123);