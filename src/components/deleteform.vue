<template>
<div class="deleting">
  <h1>Are you sure you wish to delete all of these?</h1><br>
  <div v-for="item in items">
    <h2>{{item.artist}} - {{item.title}}</h2>
  </div><br><br>
  <div class="yesNo">
    <nav class="level is-mobile is-fixed-bottom">
      <div class="level-item has-text-centered">
        <a class="button is-primary yesNoButton"
           v-on:click = "sendDeletions(items)">
          Yes
        </a>
      </div>
      <div class="level-item has-text-centered">
        <a class="button is-primary yesNoButton"
           v-on:click = "cancelDeletions(items)">
          No
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
        console.log(song.id);
        ids += song.id + ",";
      }
      console.log(ids);
      music.deleteSongs(ids.substring(0, ids.length - 1))
        .then(res => {
          this.deleteAll();
          this.frontPage();
          console.log(res);
          this.$router.push("./");
        })
        .catch(e => {
          console.log(e);
        })
  	},
    cancelDeletions(items){
      this.frontPage();
      this.$router.push("./");

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