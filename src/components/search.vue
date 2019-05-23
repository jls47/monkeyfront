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
<p>Searching {{this.param}}s for "{{this.term}}"</p>
<div class="results">
<div v-if="results.length > 0 && param == 'artist'" v-for="result in results" class="artistResults">
  <a class="artistLink" v-on:click="getArtistSongs(result.name)"><p>{{result.name}}</p></a>
  <div class="artistSongs" v-if="subResults.length > 0 && subResults[0].artist == result.name" v-for="sub in subResults">
    <p>Songs:</p>
    <p>{{sub.title}}</p>
    <p v-if="sub.notes">{{sub.notes}}</p>
  </div>
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
      results: [],
      subResults: []
    }
  },
  methods: {
    getArtistSongs(name){
      console.log(name);
      music.getSongsByArtist(name)
        .then(result => {
          console.log(result);
          this.subResults = result.data;
        })
    },
    closeModal(){
      this.closeSModal();
    },
    startSearch(){
      this.closeModal();
      if(this.param == 'artist'){

        console.log("Searching by artist")
        music.searchArtist(this.term)
          .then(result => {
            console.log(result);
            this.results = result.data;
          });

      }else{
        music.searchSongs(this.term)
          .then(result => {
            console.log(result);
            this.results = result.data;
          })
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
    },
    param: function(){
      this.results = [];
    }
  }
}
</script>

<style lang="scss" scoped>

</style>