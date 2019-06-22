<template>
<div v-on:mouseover="checkLogged">
  <nav class="navbar is-dark is-fixed-top" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" v-on:click="goFrontPage">
      <img src="https://abload.de/img/mp-header-logo1kjt7.png" width="120px">
    </a>
    <a role="button" v-on:click="burgerToggle" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu" v-bind:class="{'is-active': toggled}" >
   
    <div class="navbar-end">
      <div class="navbar-item">
          <a class="button is-primary" v-on:click="startSearch">
            <strong>Search <span class="mdi mdi-12px mdi-magnify"></span></strong>
          </a>
          
        </div>
      </div>
      <div class="navbar-item"
           v-if="logged == false">
        <a class="button is-light" 
           v-on:click="loginClick">
          <strong>Log in <span class="mdi mdi-12px mdi-lock-open"></span></strong>
        </a>
      </div>
      <div class="navbar-item"
           v-else>
        <a class="button is-light"
           v-on:click="logoutOnClick">
          <strong>Log out <span class="mdi mdi-12px mdi-lock"></span></strong>
        </a>
      </div>
      <div class="navbar-item">
        <a class="button is-light" 
           href="http://www.themonkeypub.com/">
          <strong>Back to the Pub <span class="mdi mdi-12px mdi-home-outline"></span></strong>
        </a>
      </div>
  </div>
</nav>
<!-- span class="mdi mdi-36px mdi-lock"></span> -->
</div>
</template>

<script>
import { mapActions } from 'vuex';
import store from '../main.js';
import music from '../services/requests.js'
import router from '../router/index.js';
export default {
  name: 'navbar',
  data () {
    return {
      logged: "",
      toggled: false,
      items: 0
    }
  },
  methods: {
    burgerToggle: function(){
      if(this.toggled == false){
        this.toggled = true;
      }else{
        this.toggled = false;
      }
    },
    startSearch: function(){
      this.burgerToggle();
      this.openSModal();
      this.beginSearch();
    },
    logoutOnClick: function(){
      localStorage.setItem("loginDetails", "");
      localStorage.setItem("loginStatus", 'false');
      this.stopSelect();
      this.deleteAll();
      this.logged = false;
      this.logout();
    },
    loginClick: function(){
      router.push("login");
    },
    goFrontPage: function(){
      this.burgerToggle();
      this.frontPage();
    },
    checkLogged: function(){
      if(this.logged == false && localStorage.getItem("loginDetails")){
        if(localStorage.getItem("loginStatus") != 'false'){
          this.logged = true;
        }
      }else if(this.logged == false && this.$store.getters.loginStatus == true){
        this.logged = true;
      }
    },
    ...mapActions([
      'beginSearch',
      'openSModal',
      'logout',
      'login',
      'frontPage',
      'stopSelect',
      'deleteAll'
    ])
  },
  components: {
  },
  computed: {
    checkStatus(){
      this.logged = this.$store.getters.loginStatus;
    },
  },
  watch: {
    checkLogin(){
      this.logged = this.$store.getters.loginStatus;
    },
  },
  //this could be updated to work on desktop too, I'm sure.
  mounted: function(){
    this.checkLogged();
    if(localStorage.getItem("loginStatus") && localStorage.getItem("loginStatus") == 'true'){
      this.login();
      this.logged = true;
    }
    
  },
  updated: function(){
    this.logged = this.$store.getters.loginStatus;
  }

}


</script>

<style lang="scss">
#logo{
	margin-top: 10px;
	width: 100%;
}
nav{
	top: 0;
}
#lock{
	margin-top: -21px;
	margin-right: 10px;
}
</style>