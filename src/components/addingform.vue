<template>
<div class="addingForm">
  <h1>Add Songs</h1><br>
  <div class="inputs" v-for="item in data">
    <div class="columns inputItem">
      <div class="column inputItem">
        <input class="input" type="text" placeholder="Artist" v-model="item.artist">
      </div>
      <div class="column inputItem">
        <input class="input" type="text" placeholder="Song" v-model="item.title">
      </div>
    </div>
    <div class="columns">
      <div class="column is-half inputItem">
        <input class="input" type="text" placeholder="Notes (optional)" v-model="item.notes">
      </div>
      <div class="column inputItem">
        <a class="addByArtist button is-primary" v-on:click="addByArtist(item.artist)">
          Add another song by this artist
        </a>
      </div>
      <div class="column">
        <a class="removeSong button is-warning" 
           v-on:click="removeSong(item)"
           v-if="data.indexOf(item) > 0">
          Remove Song
        </a>

      </div>
    </div>

    <br><br>
  </div>
  <a class="button is-primary" v-on:click="addData"><strong>Add another Song</strong></a><br><br>
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
      		 title: "", notes: null, new: true}]
    }
  },
  methods: {
    addData(){
      this.data.push({artist: "", title: "", notes: null});
    },
    addByArtist(name){
      this.data.push({artist: name, title: "", notes: null});
    },
    removeSong(item){
      this.data.splice(this.data.indexOf(item), 1);
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
h1{
  font-size: 30px;
  margin-top: -50px;
}
.inputs{
  width: 80vw;
  margin-left: 10vw;
  margin-bottom: -20px;
}
.inputItem{
  @media only screen and (max-width: 768px){
    margin-bottom: -20px;
  }
}
</style>