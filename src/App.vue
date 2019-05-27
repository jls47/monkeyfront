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
    if(localStorage.getItem("loginDetails") != 'undefined' && localStorage.getItem("loginDetails").length > 1){
      let data = JSON.parse(localStorage.getItem("loginDetails"));
      console.log(data);
      music.adminLog(data)
        .then(res => {
          console.log(res);
          if(res.data.status == 'failure'){
            console.log('nope');
          }else{
            console.log('aaa');
            this.login();
            this.$router.push(this.$route.query.redirect || './');
          }
        })
    }
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
