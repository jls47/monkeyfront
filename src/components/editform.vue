<template>
<div class="edit">
  <h1>Editing Artists/Titles</h1><br>
  <div class="notification is-danger" v-if="addError == true">
    <button class="delete" v-on:click="addError = false"></button>
    There was a problem editing the songs.  Try again?
  </div>
  <div v-for = "item in items">
  	<div class="field">
		<label class="label">Song ID: {{item.id}}</label>
		<div class="control">
			<input class="input" v-model="item.artist" type="text" placeholder="">
      <input class="input" v-model="item.title" type="text" placeholder="">
      <input class="input" v-model="item.notes" type="text" placeholder="Add notes?">
		</div><br>
	</div>
  </div>
  <a class="button is-primary"
     v-on:click="startProcess"
     v-if="sending == false">
  	Submit changes on {{items.length}} songs
  </a>
  <a class="button is-primary is-loading"
     v-else>Loading
  </a>

  <br><br>
  <a class="button is-light"
     v-on:click="History.go(-1)">
     Cancel
  </a>
</div>
</template>

<script>
import music from '@/services/requests';
import music2 from '@/services/requests2';
import music3 from '@/services/requests3';
import music4 from '@/services/requests4';
import music5 from '@/services/requests5';
import music6 from '@/services/requests6';
import store from '../main.js';
import { mapActions, mapState } from 'vuex';
//add double apostrophes for apostrophes
export default {
  name: 'editform',
  data () {
    return {
      items: [],
      oldItems: [],
      edits: [[], [], [], [], [], []],
      adds: [[], [], [], [], [], []],
      deletes: ["", "", "", "", "", ""],
      editError: false,
      deleteError: false,
      addError: false,
      mistakes: [],
      delMistakes: "",
      addMistakes: [],
      itemsToSend: 0,
      successes: 0,
      sending: false
    }
  },
  methods: {
  	sendEdits(){
      //check if any forms are populated
      if(this.edits[0].length > 0){
        music.editSongs(this.edits)
          .then(res => {
            if(res.data.status == 'success'){
              this.successes += 1;
            }
          })
          .catch(e => {
            this.editError = true;
            this.mistakes = this.mistakes.concat(this.edits[0]);
          })
      }
  	},
    sendAdds(){
      if(this.adds[0].length > 0){
        music.createSongs(JSON.stringify(this.adds[0]))
          .then(res => {
            this.successes += 1;
            this.adds[0] = [];
          })
          .catch(e => {
            this.addError = true;
            this.addMistakes = this.addMistakes.concat(this.adds[0]);
          })
      }
    },
    //Need to make this match the deletion form
    sendDeletions(){
      if(this.deletes[0].length > 0){
        music.deleteSongs(this.deletes[0].substring(0, this.deletes[0].length - 1))
          .then(res => {
            this.deletes[0] = "";
            console.log(res);
            this.successes += 1;
          })
          .catch(e => {
            this.deleteError = true;
          })
      }
    },
    //Get a function to compare items and check if items need to be sent to a different server
    changeSID(){
      for(let i = 0; i < this.items.length; i++){
        let item = this.items[i];
        let artistPost = item.artist.indexOf("'");
        let songPost = item.title.indexOf("'");
        if(artistPost != -1){
          item.artist = item.artist.slice(0, artistPost) + "'" + item.artist.slice(artistPost);
        }

        if(songPost != -1){
          item.title = item.title.slice(0, songPost) + "'" + item.title.slice(songPost);
        }

        if(item.notes == null){
          item.notes = "";
        }

        let propercaps = item.artist.charAt(0).toUpperCase() + item.artist.slice(1);
        let oldItem = this.oldItems[i];
        if(propercaps < "Cliff Richard"){
          item.sid = 1;
        }else if(propercaps < "Hank Williams"){
          item.sid = 2;
        }else if(propercaps < "Leonard Cohen"){
          item.sid = 3;
        }else if(propercaps < "Peter Gabriel"){
          item.sid = 4;
        }else if(propercaps < "Tara Lyn Hart"){
          item.sid = 5;
        }else{  
          item.sid = 6;
        }
        this.sortItem(i);
      }
      this.deleteAll();
    },
    sortItem(n){//Set the bloody adds and deletions to arrays!
      if(this.items[n].sid != this.oldItems[n].sid){
        this.adds[this.items[n].sid - 1].push(this.items[n]);
        this.deletes[this.oldItems[n].sid - 1] += this.oldItems[n].id + ",";

      }else{

        this.edits[this.items[n].sid - 1].push(this.items[n]);
        console.log(this.edits);
      }
    },
    startProcess(){
      this.sending = true;
      this.changeSID();
      this.sendEdits();
      this.sendAdds();
      this.sendDeletions();
    },  
  	...mapActions([
  		'deleteAll',
      'frontPage'
  	])
  },
  mounted: function() {
  	this.items = this.$store.getters.getItems;
    this.oldItems = JSON.parse(JSON.stringify(this.items));
  },
  watch: {
      successes: function(){
        if(this.successes == this.itemsToSend){
          console.log('success!');
          this.deleteAll();
          this.frontPage();
          this.$router.push("./");
        }
      }
    }
}

</script>

<style lang="scss" scoped>
	.edit{
		margin-top: -80px;
    margin-left: 10vw;
    width: 80vw;
		h1{
			font-size: 25px;
      color: rgba(224, 225, 226, 1);
		}
    label{
      color: rgba(224, 225, 226, 1);
    }
	}
</style>