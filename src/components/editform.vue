<template>
<div class="edit">
  <h1>Editing Artists/Titles</h1><br>
  <div v-for = "item in items">
  	<div class="field">
		<label class="label">Song ID: {{item.id}}</label>
		<div class="control">
			<input class="input" v-model="item.artist" type="text" placeholder=""><input class="input" v-model="item.title" type="text" placeholder="">
		</div><br>
	</div>
  </div>
  <a class="button is-primary"
     v-on:click="sendEdits(items)">
  	Submit changes on {{items.length}} songs
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
    }
  },
  methods: {
  	sendEdits(data){
      let dataString = JSON.stringify(data);
      console.log(dataString);
      music.editSongs(data)
        .then(res => {
          console.log(res);
          console.log(res.data);
          if(res.data.status == 'success'){
            console.log('success!');
            this.deleteAll();
            this.frontPage();
            this.$router.push('./');
          }
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
		h1{
			font-size: 25px;
		}
	}
</style>