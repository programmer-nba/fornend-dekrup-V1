<template>
  <div id="app" >
    <!-- <img alt="Vue logo" src="./assets/img/banner2.jpg"> -->
    <HomeView/>
  </div>
</template>

<script>
import HomeView from './views/HomeView.vue'

export default {
  name: 'App',
  components: {
    HomeView
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300&display=swap');
#app {
  font-family: 'Kanit', sans-serif !important;
}
</style>
