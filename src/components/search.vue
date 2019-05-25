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
<h2 class="searchingNote">Searching {{this.sParam}}s for "{{this.sTerm}}"</h2><br>
<div class="results">
<div v-if="results.length > 0 && sParam == 'artist'" v-for="result in results" class="artistResults">
  <a class="artistLink" v-on:click="subResults.length == 0 || selected == subResults[0].artist ? getArtistSongs(result.name) : clearSubResults()"><h1>{{result.name}} <span v-if="subResults.length > 0 && subResults[0].artist == result.name" class="mdi mdi-24px mdi-arrow-down-drop-circle"></span><span v-else class="mdi mdi-24px mdi-arrow-right-drop-circle"></span></h1></a>

  <div class="artistSongs" v-if="subResults.length > 0 && subResults[0].artist == result.name" v-for="sub in subResults">
    <h2><span class = "mdi mdi-12px mdi-microphone-variant"></span>{{sub.title}} <sub v-if="sub.notes">({{sub.notes}})</sub></h2>
    
  </div><br>
</div>
<div v-if="results.length > 0 && sParam == 'title'" v-for="result in results" class="titleResults">
  <h2>{{result.title}} - {{result.artist}}</h2><br>
</div>
<div class="placeholder" v-if="results.length == 0 && this.searched == true">
  <h1>Couldn't find any {{param}}s with the search term "{{term}}".</h1>
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
      sParam: 'artist',
      selected: '',
      term: "",
      sTerm: "",
      results: [],
      subResults: [],
      showingSub : false,
      searched: false
    }
  },
  methods: {
    getArtistSongs(name){
      console.log('searching');
      if(this.selected != name){
        this.selected = name;
        music.getSongsByArtist(name)
          .then(result => {
            this.subResults = result.data;
          })
      }else{
        this.clearSubResults();
      }
    },
    closeModal(){
      this.closeSModal();
    },
    clearSubResults(){
      this.subResults = [];
      this.selected = '';
    },
    clearInfo(){
      this.results = [];
      this.subResults = [];
    },
    startSearch(){
      this.closeModal();
      this.sParam = this.param;
      this.sTerm = this.term;
      if(this.param == 'artist'){
        this.searched = true;
        music.searchArtist(this.term)
          .then(result => {
            console.log(result);
            this.results = result.data;
          });

      }else{
        this.searched = true;
        music.searchSongs(this.term)
          .then(result => {
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
      //this.results = [];
    },
    show: function(){
      this.searched = false;
    }
  }
}
</script>

<style lang="scss" scoped>
  .searchingNote::before{

  }
  .searchingNote{
    text-align: left;
  }
  .results{
    text-align: left;
    a{
      text-decoration: none;
      color: black;
    }
    h1{
      font-size: 30px;
    }
    h2{
      font-size: 20px;
    }
    sub{
      font-size: 10px;
    }
  }
  
  .search{
    width: 80vw;
    margin-left: 10vw;
  }
  .artistSongs{
    margin-left: 20px;
  }
</style>