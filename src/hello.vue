<template>
  <div class="hello">
    <h2>
      {{ msg }}
    </h2>
  </div>
</template>

<script>
  module.exports = {
    data: function() {
      return {
        msg: 'We can build Vue now'
      }
    },
    mounted(){ console.log(234234) },
  };
</script>

<style scoped>
  .hello {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: #555;
  }
</style>