<template>
<div>
  <nav class="navbar is-dark is-fixed-top" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="http://themonkeypub.com/images/mp-header-logo.png" width="120px">
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
        <a class="button is-light" href="./#/login">
          <strong>Log in <span class="mdi mdi-12px mdi-lock-open"></span></strong>
        </a>
      </div>
      <div class="navbar-item"
           v-if="logged == true">
        <a class="button is-light"
           v-on:click="logout">
          <strong>Log out <span class="mdi mdi-12px mdi-lock"></span></strong>
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
import router from '../router/index.js';
export default {
  name: 'navbar',
  data () {
    return {
      logged: false,
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
      console.log('aaa');
      console.log(this.beginSearch);
      this.burgerToggle();
      this.openSModal();
      this.beginSearch();
    },
    logout: function(){
      localStorage.setItem("loggedIn", false);
      this.logout();
    },
    login: function(){
      console.log('Why')
      router.push("login");
    },
    ...mapActions([
      'beginSearch',
      'openSModal',
      'logout'
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
  mounted: function(){
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