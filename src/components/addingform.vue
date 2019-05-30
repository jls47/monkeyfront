<template>
<div class="addingForm">
  <div class="inputs" v-for="item in data">
    <input class="input" type="text" placeholder="Artist" v-model="item.artist">
  	<input class="input" type="text" placeholder="Song" v-model="item.title"><br><br>
  </div><br>
  <a class="button is-primary" v-on:click="addData"><strong><span class="mdi mdi-12px mdi-plus"></span></strong></a><br><br>
  <a class="button is-primary" v-on:click="submitData"><strong>Submit</strong></a>
</div>
</template>

<script>
import music from '@/services/requests';
import store from '../main.js';
import { mapActions, mapState } from 'vuex';
//more informative stuff across the board
export default {
  name: 'addingform',
  data () {
    return {
      data: [{artist: "",
      		 title: ""}]
    }
  },
  methods: {
    addData(){
      this.data.push({artist: "", title: ""});
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
    ...mapActions([
      'frontPage'
    ])
  }
}

</script>

<style lang="scss" scoped>

</style>