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
    <div class="select is-dark">
      <select v-model="param">
        <option value="artist">Search artists</option>
        <option value="title">Search titles</option>
      </select>
    </div>
    <input class="input" type="text" placeholder="Search" v-model="term">
  </div>
</div>
  </section>
  <a class="button is-primary" v-on:click="startSearch">
    <strong>Search <span class="mdi mdi-12px mdi-magnify"></span></strong>
  </a>
  </div>
  
</div>
<p>Results</p>
<div class="results">
<div v-if="results.length > 0 && param == 'artist'" v-for="result in results" class="artistResults">
  <p>{{result.name}}</p>
</div>
<div v-else-if="results.length > 0 && param == 'title'" v-for="result in results" class="titleResults">
  <p>{{result.title}}</p>
</div>
<div v-else class="placeholder">
  <p>Awaiting Results...</p>
</div>
</div>
</div>
</template>

<script>
import music from '@/services/requests';
import store from '../main.js';
import { mapActions, mapState } from 'vuex';
export default {
  name: 'search',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: true,
      param: 'artist',
      term: "",
      results: []
    }
  },
  methods: {
    closeModal(){
      this.closeSModal();
    },
    startSearch(){
      if(this.param == 'artist'){

        console.log("Searching by artist")
        music.searchArtist(this.term)
          .then(result => {
            console.log(result);
            this.results = result.data;
          });

      }else{
        console.log("Searching by title")
      }
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