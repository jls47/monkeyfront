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
<div class="notification is-danger" v-if="error == true">
  <button class="delete" v-on:click="error = false"></button>
  Something went wrong.  Try again?
</div>
<div class="results" v-if="results">
<div v-if="results.length > 0 && sParam == 'artist'" 
     v-for="result in results" class="artistResults">
  
    <h1>
    <a class="artistLink" 
      v-on:click="subResults.length == 0 || selected == subResults[0].artist ? getArtistSongs(result.name, result.sid) : clearSubResults()">
      {{result.name}} 
      <span v-if="subResults.length > 0 && subResults[0].artist == result.name" 
            class="mdi mdi-24px mdi-arrow-down-drop-circle"></span>
      <span v-else class="mdi mdi-24px mdi-arrow-right-drop-circle"></span>
      </a>
      <a class="selectAllByArtist"
         v-on:click="addAllArtistSongs(result.name)"
         v-if="selected == result.name && adding == true">
        <span class="mdi mdi-24px mdi-playlist-plus"></span>
      </a>
      <progress v-if="loading == true && selected == result.name" class="progress is-small is-primary" max="100">60%</progress>
    </h1>
  
  
  <transition-group name="slide-fade" tag="p">
    <div class="artistSongs" 
         v-if="subResults.length > 0 && subResults[0].artist == result.name" 
         v-for="subRes in subResults"
         v-bind:key="subRes.title">
      <h2>
        <a class="removebutton"
           v-if="adding == true && addedContains(subRes) == true"
           v-on:click="removeSong(subRes)">
          <span class="mdi mdi-24px mdi-close-circle-outline"></span>
        </a>
        <a class="addbutton" 
           v-else-if="adding == true && addedContains(subRes) != true"
           v-on:click="addSong(subRes)">
          <span class="mdi mdi-24px mdi-checkbox-blank-circle-outline"></span>
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
    <a class="removebutton"
       v-if="adding == true && addedContains(result)"
       v-on:click="removeSong(result)">
      <span class="mdi mdi-24px mdi-close-circle-outline"></span>
    </a>
    <a class="addbutton" 
       v-else-if="adding == true && !(addedContains(result))"
       v-on:click="addSong(result)">
      <span class="mdi mdi-24px mdi-checkbox-blank-circle-outline"></span>
    </a>
    <a v-else>
      <span class = "mdi mdi-12px mdi-microphone-variant"></span>
    </a>
  {{result.title}} - {{result.artist}}
  </h2><br>
</div>
<div class="placeholder2" v-if="results.length == 0 && (this.didSearch == true && this.searching == false)">
  <h1>Couldn't find any {{param}}s with the search term "{{term}}".</h1>
</div>
<div class="placeholder1" v-if="results.length == 0 && (this.didSearch == false && this.searching == true)">
  <progress class="progress is-large is-primary" max="100">60%</progress>
</div>

</div>
</div>
</div>
</div>
</template>

<script>
import inventoryModal from '@/components/inventoryModal';
import music from '@/services/requests';
import music2 from '@/services/requests2';
import music3 from '@/services/requests3';
import music4 from '@/services/requests4';
import music5 from '@/services/requests5';
import music6 from '@/services/requests6';
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
      didSearch: false,
      loggedIn: false,
      adding: false,
      added: [],
      editingInv: false,
      editing: false,
      searching: false,
      error: false,
      loading: false
    }
  },
  components: {
    inventoryModal: inventoryModal
  },
  methods: {
    addedContains(res){
      for(let addedItem of this.added){ 
        let aKeys = Object.keys(addedItem);
        let bKeys = Object.keys(res);
        let errors = [];
        if(aKeys.length != bKeys.length){
          errors.push('a')
        }
        for(let key of aKeys){
          if(addedItem[key] != res[key]){
            errors.push('b')
          }
        }
        if(errors.length == 0){
          return true;
        }else{
          continue;
        }
        
      }
    },
    getArtistSongs(name, SID){
      this.loading = true;
      //Target by SID
      if(this.selected != name){
        this.clearSubResults();
        this.selected = name;
        if(SID == 1){
          music.getSongsByArtist(name)
            .then(result => {
              this.subResults = result.data;
              this.loading = false;
            })
            .catch(e => {
              this.error = true;
              this.loading = false;
            })
        }else if(SID == 2){
          music2.getSongsByArtist(name)
            .then(result => {
              this.subResults = result.data;
              this.loading = false;
            })
            .catch(e => {
              this.error = true;
              this.loading = false;
            })
        }else if(SID == 3){
          music3.getSongsByArtist(name)
            .then(result => {
              this.subResults = result.data;
              this.loading = false;
            })
            .catch(e => {
              this.error = true;
              this.loading = false;
            })
        }else if(SID == 4){
          music4.getSongsByArtist(name)
            .then(result => {
              this.subResults = result.data;
              this.loading = false;
            })
            .catch(e => {
              this.error = true;
              this.loading = false;
            })
        }else if(SID == 5){
          music5.getSongsByArtist(name)
            .then(result => {
              this.subResults = result.data;
              this.loading = false;
            })
            .catch(e => {
              this.error = true;
              this.loading = false;
            })
        }else{
          music6.getSongsByArtist(name)
            .then(result => {
              this.subResults = result.data;
              this.loading = false;
            })
            .catch(e => {
              this.error = true;
              this.loading = false;
            })
        }
        
      }else{
        this.clearSubResults();
      }
    },
    //now figure out how to get x's to disappear easily - get a state function to do something?
    addAllArtistSongs(artist){
      for(let result of this.subResults){
        this.addSong(result);
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
      this.clearInfo();
      this.searching = true;
      this.closeModal();
      this.sParam = this.param;
      this.sTerm = this.term;
      //Search all six servers
      if(this.param == 'artist'){
        this.setTerm(this.term);
        this.setParam(this.param);

        music.searchArtist(this.term)
          .then(result => {
            this.results = this.results.concat(result.data);
            if(this.results.length > 0){
              this.results = this.quickSort(this.results).reverse();
            }
          })
          .catch(e => {
            this.error = true;
            console.log(1);
            console.log(e);
          })
        music2.searchArtist(this.term)
          .then(result2 => {
            this.results = this.results.concat(result2.data);
            if(this.results.length > 0){
              this.results = this.quickSort(this.results).reverse();
            }
          })
          .catch(e => {
            this.error = true;
            console.log(2);
            console.log(e);
           })
        music3.searchArtist(this.term)
         .then(result3 => {
           this.results = this.results.concat(result3.data);
           if(this.results.length > 0){
            this.results = this.quickSort(this.results).reverse();
           }
         })
         .catch(e => {
           this.error = true;
            console.log(3);
            console.log(e);
         })
        music4.searchArtist(this.term)
           .then(result4 => {
             this.results = this.results.concat(result4.data);
             if(this.results.length > 0){
              this.results = this.quickSort(this.results).reverse();
             }
           })
          .catch(e => {
            this.error = true;
            console.log(4);
            console.log(e);
          })
        music5.searchArtist(this.term)
         .then(result5 => {
           this.results = this.results.concat(result5.data);
           if(this.results.length > 0){
            this.results = this.quickSort(this.results).reverse();
           }
         })
         .catch(e => {
            this.error = true;
            console.log(5);
            console.log(e);
         })
        music6.searchArtist(this.term)
          .then(result6 => {
            this.searching = false;
            this.didSearch = true;
            this.results = this.results.concat(result6.data);
            if(this.results.length > 0){
              this.results = this.quickSort(this.results).reverse();
            }
          })
          .catch(e => {
            this.error = true;
            console.log(6);
            console.log(e);
          })
      }else{
        music.searchSongs(this.term)
          .then(result => {
            this.results = result.data;
            music2.searchSongs(this.term)
              .then(result2 => {
                this.results = this.results.concat(result2.data);
                music3.searchSongs(this.term)
                  .then(result3 => {
                    this.results = this.results.concat(result3.data);
                    music4.searchSongs(this.term)
                      .then(result4 => {
                        this.results = this.results.concat(result4.data);
                        music5.searchSongs(this.term)
                          .then(result5 => {
                            this.results = this.results.concat(result5.data);
                            music6.searchSongs(this.term)
                              .then(result6 => {
                                this.results = this.results.concat(result6.data);
                                this.searching = false;
                                this.didSearch = true;
                              })
                              .catch(e => {
                                this.error = true;
                              })
                          })
                          .catch(e => {
                            this.error = true;
                          })
                      })
                      .catch(e => {
                        this.error = true;
                      })
                  })
                  .catch(e => {
                    this.error = true;
                  })
              })
              .catch(e => {
                this.error = true;
              })
          })
          .catch(e => {
            this.error = true;
          })
      }
    },
    addSong(item){
      this.addItem(item);
    },
    removeSong(item){
      this.removeItem(item);
    },
    quickSort(arr){
      let ppoint = Math.floor(Math.random() * arr.length);
      let pnum = arr[ppoint].numsongs;
      let left = [];
      let right = [];
      let middle = [];
      for(let i = 0; i < arr.length; i++){
        if(arr[i].numsongs > pnum){
          right.push(arr[i]);
        }else if(arr[i].numsongs < pnum){
          left.push(arr[i]);
        }else{
          middle.push(arr[i]);
        }
      }
      
      if(left.length > 1 && right.length > 1){
        return this.quickSort(left).concat(middle.concat(this.quickSort(right)))
      }else if(left.length <= 1 && right.length > 1){
        return left.concat(middle.concat(this.quickSort(right)))
      }else if(left.length > 1 && right.length <= 1){
        return this.quickSort(left).concat(middle.concat(right))
      }else{
        return left.concat(middle.concat(right))
      }
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
    this.added = this.$store.getters.getItems;
    
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
    },
    subResults: function(){
      for(let result of this.subResults){
        if(this.addedContains(result)){
          console.log(true);
        
        }
      }
    },
    results: function(){
      for(let result of this.results){
        if(this.addedContains(result)){
          console.log(true);
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>  
  .searchingNote::before{

  }
  a{
    text-decoration: none;
    color: rgba(224, 225, 226, 1);
  }
  .searchingNote{
    text-align: left;
  }
  h2{
    color: rgba(224, 225, 226, 1);
  }
  .results{
    text-align: left;
    
    h1{
      font-size: 30px;
      color: rgba(224, 225, 226, 1);
    }
    h2{
      font-size: 20px;
    }
    sub{
      font-size: 10px;
      color: rgba(224, 225, 226, 1);
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