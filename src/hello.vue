<template>
  <div class="hello">
    <h2>
      {{ msg }}
      <br>
      <img :src="logo" alt="">
    </h2>
  </div>
</template>

<script>
  import logo from './img/logo.png'
  // import './scss/main.scss';

  module.exports = {
    data: function() {
      return {
        msg: 'We can build Vue now',
        logo: logo
      }
    },
    mounted(){ console.log(234234) },
  };
</script>

<style scoped src="./scss/hello.scss">
</style>