<template>
<div class="edit">
  <h1>Editing Artists/Titles</h1><br>
  <div class="notification is-danger" v-if="error == true">
    <button class="delete" v-on:click="error = false"></button>
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
     v-on:click="sendEdits(items)">
  	Submit changes on {{items.length}} songs
  </a><br><br>
  <a class="button is-light"
     v-on:click="History.go(-1)">
     Cancel
  </a>
</div>
</template>

<script>
import music from '@/services/requests';
import store from '../main.js';
import { mapActions, mapState } from 'vuex';
export default {
  name: 'editform',
  data () {
    return {
      items: [],
      error: false
    }
  },
  methods: {
  	sendEdits(data){
      let dataString = JSON.stringify(data);
      music.editSongs(data)
        .then(res => {
          if(res.data.status == 'success'){
            this.deleteAll();
            this.frontPage();
            this.$router.push('./');
          }
        })
        .catch(e => {
          this.error = true;
        })
  	},
  	...mapActions([
  		'deleteAll',
      'frontPage'
  	])
  },
  mounted: function() {
  	this.items = this.$store.getters.getItems;
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