<template>
<div class="frontpage">
	<h2>Recently added: </h2><br>
	<div  v-for="song in recentSongs">
    <h1>
    <a class="addbutton" 
       v-if="adding == true && !(added.includes(song))"
       v-on:click="addSong(song)">
      <span class="mdi mdi-24px mdi-plus-circle-outline"></span>
    </a>
    <a class="removebutton"
       v-else-if="adding == true && added.includes(song)"
       v-on:click="removeSong(song)">
      <span class="mdi mdi-24px mdi-minus-circle-outline"></span>
    </a>
    <a v-else>
      <span class = "mdi mdi-12px mdi-microphone-variant"></span>
    </a>
		{{song.title}} - {{song.artist}}</h1><br>
	</div>
</div>
</template>

<script>
import music from '@/services/requests';
import store from '../main.js';
import { mapActions, mapState } from 'vuex';
export default {
  name: 'frontpage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      recentSongs: [],
      adding: false,
      added: []
    }
  },
  methods: {
    addSong(item){
      console.log(item);
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
  	music.getRecentSongs()
  		.then(data => {
  			this.recentSongs = data.data;
  		})
  },
  computed: {
    select(){
      this.adding = this.$store.getters.isSelect;
    },
    getAdded(){
      this.added = this.$store.getters.getItems;
    }
  },
  watch: {
    select(){
      this.adding = this.$store.getters.isSelect;
    },
    getAdded(){
      this.added = this.$stores.getters.getItems;
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
  @media only screen and (max-width: 768px){
    h1{
      font-size: 28px;
    }
    h2{
      font-size: 20px;
    }
  }
  @media only screen and (min-width: 768px){
    h1{
      font-size: 40px;
    }
    h2{
    font-size: 30px;
    }
  }
}
</style>