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
    <div class="navbar-start admin-tools" v-if="logged">
      <div class="navbar-item">
      <a class="button is-light">
        Edit <span class="mdi mdi-12px mdi-border-color"></span>
      </a>
      </div>
      <div class="navbar-item">
      <a class="button is-light">
        Delete <span class="mdi mdi-12px mdi-delete"></span>
      </a>
      </div>
      <div class="navbar-item">
      <a class="button is-light">
        Create <span class="mdi mdi-12px mdi-plus"></span>
      </a>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
          <a class="button is-primary" v-on:click="startSearch">
            <strong>Search <span class="mdi mdi-12px mdi-magnify"></span></strong>
          </a>
          
        </div>
      </div>
      <div class="navbar-item">
        <a class="button is-light">
            <strong>Log in <span class="mdi mdi-12px mdi-lock"></span></strong>
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
export default {
  name: 'navbar',
  data () {
    return {
      logged: false,
      toggled: false,
      msg: 'Welcome to Your Vue.js App'
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
    ...mapActions([
      'beginSearch',
      'openSModal'
    ])
  },
  components: {
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