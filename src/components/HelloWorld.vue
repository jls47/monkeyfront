<template><div class="container">
<navbar></navbar>
<div v-if="searching == 'search'">
  <search></search>
</div>
<div v-else>
  <frontpage></frontpage>
</div>
</div>
</template>

<script>
import search from '@/components/search';
import navbar from '@/components/navbar';
import frontpage from '@/components/frontpage';
import store from '../main.js';
import { mapActions, mapState } from 'vuex';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      searching: ""
    }
  },
  components: {
    search: search,
    navbar: navbar,
    frontpage: frontpage
  },
  computed: {
    search(){
      this.searching = this.$store.getters.searchStatus;
    }
  },
  watch: {
    search(){
      return this.$store.getters.searchStatus;
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
