<template>
<div class="frontpage">
  <div v-if="editingInv == true">
    <inventoryModal></inventoryModal>
  </div>
	<h2>Recently added: </h2><br>
  <div class="notification is-danger" v-if="error == true">
    <button class="delete" v-on:click="error = false"></button>
    The server's not responding.
  </div>
	<div v-if="recentSongs.length == 15"
  v-for="song in recentSongs">
    <h1>
    <a class="removebutton"
       v-if="adding == true && (song.added || added.includes(song))"
       v-on:click="removeSong(song)">
      <span class="mdi mdi-24px mdi-close-circle-outline"></span>
    </a>
    <a class="addbutton" 
       v-else-if="adding == true && (!song.added)"
       v-on:click="addSong(song)">
      <span class="mdi mdi-24px mdi-checkbox-blank-circle-outline"></span>
    </a>
    
    <a v-else>
      <span class = "mdi mdi-12px mdi-microphone-variant"></span>
    </a>
		{{song.title}} - {{song.artist}} <sub v-if="song.notes">({{song.notes}})</sub></h1><br>
	</div>
  <div v-else>
    <progress class="progress is-large is-primary" max="100">60%</progress>
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
  name: 'frontpage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      recentSongs: [],
      adding: false,
      added: [],
      editingInv: false,
      error: false
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
          errors.push('a');
        }
        for(let key of aKeys){
          if(addedItem[key] != res[key]){
            errors.push('b');
          }
        }
        if(errors.length == 0){
          return true;
        }else{
          continue;
        }
      }
    },
    addSong(item){
      this.addItem(item);
    },
    removeSong(item){
      this.removeItem(item);
    },
    ...mapActions([
      'addItem',
      'removeItem',
      'deleteAll'
    ])
  },
  mounted: function(){
    if(performance.navigation.type == 2){
      this.adding = false;
    }
  	music.getRecentSongs()
  		.then(data => {
  			this.recentSongs = data.data;
        music2.getRecentSongs()
          .then(data => {
            this.recentSongs = this.recentSongs.concat(data.data);
            music3.getRecentSongs()
              .then(data => {
                this.recentSongs = this.recentSongs.concat(data.data);
                music4.getRecentSongs()
                  .then(data => {
                    this.recentSongs = this.recentSongs.concat(data.data);
                    music5.getRecentSongs()
                      .then(data => {
                        this.recentSongs = this.recentSongs.concat(data.data);
                        music6.getRecentSongs()
                          .then(data => {
                            this.recentSongs = this.recentSongs.concat(data.data);
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
  },
  computed: {
    select(){
      this.adding = this.$store.getters.isSelect;
    },
    getAdded(){
      this.added = this.$store.getters.getItems;
    },
    editInv(){
      this.editingInv = this.$store.getters.isEditing;
    }
  },
  watch: {
    select(){
      this.adding = this.$store.getters.isSelect;
    },
    getAdded(){
      this.added = this.$stores.getters.getItems;
    },
    editInv(){
      this.editingInv = this.$store.getters.isEditing;
    },
    recentSongs: function(){
      for(let result of this.recentSongs){
        if(this.addedContains(result)){
          result.added = true;
        }
      }
    }
  }
}
//Need media queries to make things less awkward
</script>

<style lang="scss">
.frontpage{
  width: 80vw;
  margin-left: 10vw;
  text-align: left;
  p::before{
    margin-left: 20px;
  }
  
  a{
    color: black;
  }
  sub{
      font-size: 10px;
    }

  h3{
    font-size: 20px;
    color: rgba(224, 225, 226, 1);
  }
  .indicator{
    height: 35px;
  }
  span{
    color: rgba(224, 225, 226, 1);
  }
  @media only screen and (max-width: 768px){
    h1{
      font-size: 28px;
      color: rgba(224, 225, 226, 1);
    }
    h2{
      font-size: 20px;
      color: rgba(224, 225, 226, 1);
    }
  }
  @media only screen and (min-width: 768px){
    h1{
      font-size: 40px;
      color: rgba(224, 225, 226, 1);
    }
    h2{
    font-size: 30px;
    color: rgba(224, 225, 226, 1);
    }
  }
}
</style>