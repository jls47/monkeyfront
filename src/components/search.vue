<template>
<div class="search">
<div v-if="show == true" class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
  <header class="modal-card-head">
    <p class="modal-card-title">Search</p>
    <button class="delete" aria-label="close" v-on:click="closeModal"></button>
  </header>
  <section class="modal-card-body">
<div class="field">
  <div class="control">
    <div class="select is-primary">
      <select>
        <option>Search artists</option>
        <option>Search titles</option>
      </select>
    </div>
  </div>
</div>
  </section>
  <a class="button is-primary">
    <strong>Search <span class="mdi mdi-12px mdi-magnify"></span></strong>
  </a>
  </div>
  
</div>
<p>Results</p>
</div>
</template>

<script>
import store from '../main.js';
import { mapActions, mapState } from 'vuex';
export default {
  name: 'search',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: true
    }
  },
  methods: {
    closeModal(){
      this.closeSModal();
    },
    ...mapActions([
      'closeSModal'
    ])
  },
  computed: {
    search(){
      this.show = this.$store.getters.searchBar;
    }
  },
  watch: {
    search(){
      return this.$store.getters.searchBar;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>