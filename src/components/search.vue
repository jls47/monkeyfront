<template>
<div class="search">
<div v-if="editingInv == true">
  <inventoryModal></inventoryModal>
</div>
<div v-if="show == true && editing == false" class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
  <header class="modal-card-head">
    <p class="modal-card-title">Find Songs</p>
    <button class="delete" aria-label="close" v-on:click="closeModal"></button>
  </header>
  <section class="modal-card-body">
<div class="field">
  <div class="control">
    <div class="columns">
      <div class="column">
        <div class="select is-dark">
          <select v-model="param">
            <option value="song">By song title</option>
            <option value="artist">By artist name</option>
          </select>
        </div>
      </div>
      <div class="column is-two-thirds">
        <input class="input" type="text" :placeholder = "this.param[0].toUpperCase() + this.param.slice(1, this.param.length) +  ' name'" v-model="term">
      </div>
    </div>
  </div>
</div>
  </section>
  <a class="button is-primary searchButton" v-on:click="startSearch">
    <strong>Search <span class="mdi mdi-12px mdi-magnify"></span></strong>
  </a>
  </div>
  
</div>
<h2 class="searchingNote" v-if="editing == false">Searching {{this.sParam}}s for "{{this.sTerm}}"</h2><br>
<div class="results" v-if="results">
<div v-if="results.length > 0 && sParam == 'artist'" 
     v-for="result in results" class="artistResults">
  
    <h1>
    <a class="artistLink" 
      v-on:click="subResults.length == 0 || selected == subResults[0].artist ? getArtistSongs(result.name) : clearSubResults()">
      {{result.name}} 
      <span v-if="subResults.length > 0 && subResults[0].artist == result.name" 
            class="mdi mdi-24px mdi-arrow-down-drop-circle"></span>
      <span v-else class="mdi mdi-24px mdi-arrow-right-drop-circle"></span>
      </a>
      <a class="selectAllByArtist"
         v-on:click="addAllArtistSongs(result.name)"
         v-if="(subResults.length != 0 && selected == subResults[0].artist) && adding == true">
        <span class="mdi mdi-24px mdi-playlist-plus"></span>
      </a>
    </h1>
  
  
  <transition-group name="slide-fade" tag="p">
    <div class="artistSongs" 
         v-if="subResults.length > 0 && subResults[0].artist == result.name" 
         v-for="subRes in subResults"
         v-bind:key="subRes.title">
      <h2>
        <a class="addbutton" 
           v-if="adding == true && !(added.includes(subRes))"
           v-on:click="addSong(subRes)">
          <span class="mdi mdi-24px mdi-plus-circle-outline"></span>
        </a>
        <a class="removebutton"
           v-else-if="adding == true && added.includes(subRes)"
           v-on:click="removeSong(subRes)">
          <span class="mdi mdi-24px mdi-minus-circle-outline"></span>
        </a>
        <a v-else>
          <span class = "mdi mdi-12px mdi-microphone-variant"></span>
        </a>
        {{subRes.title}} 
        <sub v-if="subRes.notes">({{subRes.notes}})</sub>
      </h2>
      
    </div>
  </transition-group><br>
</div>
<div v-if="results.length > 0 && sParam == 'song'" v-for="result in results" class="titleResults">
  <h2>
    <a class="addbutton" 
       v-if="adding == true && !(added.includes(sub))"
       v-on:click="addSong(result)">
      <span class="mdi mdi-24px mdi-plus-circle-outline"></span>
    </a>
    <a class="removebutton"
       v-else-if="adding == true && added.includes(sub)"
       v-on:click="removeSong(sub)">
      <span class="mdi mdi-24px mdi-minus-circle-outline"></span>
    </a>
  {{result.title}} - {{result.artist}}
  </h2><br>
</div>
<div class="placeholder" v-if="results.length == 0 && this.searched == true">
  <h1>Couldn't find any {{param}}s with the search term "{{term}}".</h1>
</div>
</div>
</div>
</div>
</div>
</template>

<script>
import inventoryModal from '@/components/inventoryModal';
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
      searched: false,
      loggedIn: false,
      adding: false,
      added: [],
      editingInv: false,
      editing: false
    }
  },
  components: {
    inventoryModal: inventoryModal
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
    addAllArtistSongs(artist){
      console.log(artist);
      for(let result of this.subResults){
        this.addItem(result);
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
        this.setTerm(this.term);
        this.setParam(this.param);
        music.searchArtist(this.term)
          .then(result => {
            console.log(result);
            this.results = result.data;
          });

      }else{
        this.searched = true;
        console.log(this.term);
        music.searchSongs(this.term)
          .then(result => {
            this.results = result.data;
          })
      }
    },
    addSong(item){
      console.log(item);
      this.addItem(item);
    },
    removeSong(item){
      this.removeItem(item);
    },
    ...mapActions([
      'closeSModal',
      'addItem',
      'isSelect',
      'removeItem',
      'setTerm',
      'setParam',
      'getItems'
    ])
  },
  mounted: function(){
    this.editing = false;
    if(this.$store.getters.searchTerm && this.$store.getters.searchParam){
      this.sTerm = this.$store.getters.searchTerm;
      if(this.$store.getters.searchParam == 'artist'){
        music.searchArtist(this.$store.getters.searchTerm)
          .then(result => {
            this.results = result.data;
          })
      }else if(this.$store.getters.searchParam == 'song'){
        music.searchSongs(this.$store.getters.searchTerm)
          .then(result => {
            this.results = result.data;
          })
      }
    }
  },
  computed: {
    search(){
      this.show = this.$store.getters.searchBar;
    },
    checkLogin(){
      this.loggedIn = this.$store.getters.loginStatus;
    },
    select(){
      this.adding = this.$store.getters.isSelect;
    },
    getAdded(){
      this.added = this.$store.getters.getItems;
    },
    checkEditing(){
      this.editing = this.$store.getters.isEditing;
    },
    editInv(){
      this.editingInv = this.$store.getters.isEditing;
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
    },
    checkLogin(){
      this.loggedIn = this.$store.getters.loginStatus;
    },
    select(){
      this.adding = this.$store.getters.isSelect;
    },
    getAdded(){
      this.added = this.$stores.getters.getItems;
    },
    checkEditing(){
      this.editing = this.$store.getters.isEditing;
    },
    editInv(){
      this.editingInv = this.$store.getters.isEditing;
    }
  }
}
</script>

<style lang="scss" scoped>
  .searchingNote::before{

  }
  a{
    text-decoration: none;
    color: black;
  }
  .searchingNote{
    text-align: left;
  }
  .results{
    text-align: left;
    
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

  .searchButton{
    height: 50px;
    font-size: 20px;
  }
  
  .search{
    width: 80vw;
    margin-left: 10vw;
  }
  .artistSongs{
    margin-left: 20px;
  }
  .slide-fade-enter-active {
    transition: all .3s ease-in-out;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(0, 1, 0.5, 1);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(-10px);
    opacity: 0;
  }
</style>