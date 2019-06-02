<template>
<div class="addingForm">
  <div class="inputs" v-for="item in data">
    <input class="input" type="text" placeholder="Artist" v-model="item.artist">
  	<input class="input" type="text" placeholder="Song" v-model="item.title">
    <input class="input" type="text" placeholder="Notes (optional)" v-model="item.notes">
    <a class="addByArtist" v-on:click="addByArtist(item.artist)">
      <span class="tag is-primary">Add another song by this artist</span>
    </a>
    <br><br>
  </div>
  <a class="button is-primary" v-on:click="addData"><strong><span class="mdi mdi-12px mdi-plus"></span></strong></a><br><br><br>
  <a class="button is-primary" v-on:click="submitData"><strong>Submit</strong></a>
   <a class="button is-primary"
     v-on:click="cancelAdding">
     Cancel
  </a>
</div>
</template>

<script>
//can't get rid of button if adding another song by artist
//Add index to keep track of which one is the latest by an artist so that you don't have to 
//have the button come up multiple times?
import music from '@/services/requests';
import store from '../main.js';
import { mapActions, mapState } from 'vuex';
//more informative stuff across the board
export default {
  name: 'addingform',
  data () {
    return {
      data: [{artist: "",
      		 title: "", notes: null}],
      artists: []
    }
  },
  methods: {
    addData(){
      this.data.push({artist: "", title: "", notes: null});
    },
    addByArtist(name){
      this.data.push({artist: name, title: "", notes: null});
    },
    submitData(){
      music.createSongs(JSON.stringify(this.data))
      	.then(res => {
      	  this.frontPage();
          console.log(res);
          this.$router.push("./");
      	})
      	.catch(e => {
      	  console.log(e);

      	})
    },
    cancelAdding(){
      this.$router.push('./');
    },
    ...mapActions([
      'frontPage'
    ])
  }
}

</script>

<style lang="scss" scoped>

</style>