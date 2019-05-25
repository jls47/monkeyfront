<template><div class="container">
<navbar></navbar>
<div v-if="searching == 'search'">
  <search></search>
</div>
<div v-else>
  <frontpage></frontpage>
</div>
<div v-if="loggedIn == true">
  <adminbar></adminbar>
</div>
</div>
</template>

<script>
import search from '@/components/search';
import navbar from '@/components/navbar';
import frontpage from '@/components/frontpage';
import adminbar from '@/components/adminbar';
import store from '../main.js';
import { mapActions, mapState } from 'vuex';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      searching: "",
      loggedIn: false
    }
  },
  components: {
    search: search,
    navbar: navbar,
    frontpage: frontpage,
    adminbar: adminbar
  },
  computed: {
    search(){
      this.searching = this.$store.getters.searchStatus;
    },
    login(){
      this.loggedIn = this.$store.getters.loginStatus;
    }
  },
  watch: {
    search(){
      return this.$store.getters.searchStatus;
    },
    login(){
      return this.$store.getters.loginStatus;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
