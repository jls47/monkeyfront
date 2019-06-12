<template>
<div class="deleting">
  <h1>Are you sure you wish to delete all of these?</h1><br>
  <div class="notification is-danger" v-if="error == true">
    <button class="delete" v-on:click="error = false"></button>
    There was a problem deleting the songs.  Try again?
  </div>
  <div v-for="item in items">
    <h2>{{item.artist}} - {{item.title}}</h2>
  </div><br><br>
  <div class="yesNo">
    <nav class="level is-mobile is-fixed-bottom">
      <div class="level-item has-text-centered">
        <a class="button is-primary yesNoButton"
           v-on:click = "sendDeletions(items)">
          Delete
        </a>
      </div>
      <div class="level-item has-text-centered">
        <a class="button is-light yesNoButton"
           v-on:click = "History.go(-1)">
          Cancel
        </a>
      </div>
    </nav>
  </div>
</div>
</template>

<script>
import music from '@/services/requests';
import store from '../main.js';
import { mapActions, mapState } from 'vuex';
//more informative errors and success messages
//Frontpage is not updating properly
export default {
  name: 'deleteform',
  data () {
    return {
      items: []
    }
  },
  methods: {
  	sendDeletions(items){
      let ids = "";
      for(let song of this.items){
        ids += song.id + ",";
      }
      music.deleteSongs(ids.substring(0, ids.length - 1))
        .then(res => {
          this.deleteAll();
          this.frontPage();
          this.$router.push("./");
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
    let songs = this.$store.getters.getItems;
  	
  }
}

</script>

<style lang="scss" scoped>
.deleting{
  width: 80vw;
  margin-left: 10vw;
  h1{
    color: rgba(224, 225, 226, 1);
  }
  h2{
    color: rgba(224, 225, 226, 1);
  }
}
.yesNo{
  position: fixed;
  width: 40vw;
  margin-left: 20vw;
  @media screen and(max-width: 768px){
    bottom: 10px;
  }
}
</style>