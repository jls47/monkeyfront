<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import store from './main.js';
import { mapActions, mapState } from 'vuex';
import music from '@/services/requests';
export default {
  name: 'App',
  methods: {
    ...mapActions([
      'login'
    ])
  },
  mounted: function(){
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  height: 100%;
}
</style>
