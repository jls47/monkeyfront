<template>
<div class="addingForm">
  <h1>Add Songs</h1><br>
  <div class="notification is-danger" v-if="error == true">
    <button class="delete" v-on:click="error = false"></button>
    There was a problem submitting the songs.  Try again?
  </div>
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
        <a class="removeSong button is-danger" 
           v-on:click="removeSong(item)"
           v-if="data.length > 1">
          Remove Song
        </a>

      </div>
    </div>

    <br><br>
  </div>
  <a class="button is-primary" v-on:click="addData"><strong>Add another Song</strong></a><br><br>
  <a class="button is-primary" v-on:click="submitData" v-if="sending == false"><strong>Submit</strong></a>
  <a class="button is-primary is-loading"
     v-else>Loading
  </a>
   <a class="button is-light"
     v-on:click="History.go(-1)">
     Cancel
  </a>
</div>
</template>

<script>
//Have all errored songs pop up
//Figure out what to do in case of errors and how to track everything
//if number of successes == number of data arrays return to homepage?
import music from '@/services/requests';
import music2 from '@/services/requests2';
import music3 from '@/services/requests3';
import music4 from '@/services/requests4';
import music5 from '@/services/requests5';
import music6 from '@/services/requests6';
import store from '../main.js';
import { mapActions, mapState } from 'vuex';
//more informative stuff across the board
//add double quotes for apostrophes
export default {
  name: 'addingform',
  data () {
    return {
      data: [{artist: "",
      		 title: "", notes: null, new: true}],
      data1: [[], [], [], [], [], []],
      error: false,
      successes: 0,
      mistakes: [],
      arrays: 0,
      sending: false
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
    sortData(){
      for(let item of this.data){
        let artistPost = item.artist.indexOf("'");
        let songPost = item.title.indexOf("'");
        if(artistPost != -1){
          item.artist = item.artist.slice(0, artistPost) + "'" + item.artist.slice(artistPost);
        }

        if(songPost != -1){
          item.title = item.title.slice(0, songPost) + "'" + item.title.slice(songPost);
        }

        if(item.artist.toLowerCase() < 'cliff richard'){
          this.data1[0].push(item);
        }else if(item.artist.toLowerCase() < 'hank williams'){
          this.data1[1].push(item);
        }else if(item.artist.toLowerCase() < 'leonard cohen'){
          this.data1[2].push(item);
        }else if(item.artist.toLowerCase() < 'peter gabriel'){
          this.data1[3].push(item);
        }else if(item.artist.toLowerCase() < 'tara lyn hart'){
          this.data1[4].push(item);
        }else{
          this.data1[5].push(item);
        }
      }
    },
    passData(){
       if(this.data1.length > 0){
        music.createSongs(JSON.stringify(this.data1))
          .then(res => {
            this.successes += 1;
          })
          .catch(e => {
            this.sending = false;
            this.error = true;
            this.mistakes = this.mistakes.concat(this.data1);
          })
      }

    },
    submitData(){
      this.sending = true;
      this.sortData();
      this.passData();
    },
    ...mapActions([
      'frontPage'
    ])
  },
  watch: {
      successes: function(){
        if(this.successes == this.arrays){
          console.log('success!');
          this.frontPage();
          this.$router.push("./");
        }
      }
    }
}

</script>

<style lang="scss" scoped>
h1{
  font-size: 30px;
  margin-top: -50px;
  color: rgba(224, 225, 226, 1);
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
.addingForm{
  margin-top: -115px;
  margin-bottom: 290px;
  @media only screen and (min-width: 768px){
    margin-bottom: 650px;
  }
}
</style>