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
           v-on:click = "sendDeletions()"
           v-if="sending == false">
          Delete
        </a>
        <a class="button is-primary is-loading"
          v-else>Loading
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
import music2 from '@/services/requests2';
import music3 from '@/services/requests3';
import music4 from '@/services/requests4';
import music5 from '@/services/requests5';
import music6 from '@/services/requests6';
import store from '../main.js';
import { mapActions, mapState } from 'vuex';
//more informative errors and success messages
//Frontpage is not updating properly
export default {
  name: 'deleteform',
  data () {
    return {
      items: [],
      diffServers: 0,
      successes: 0,
      error: false,
      data: {
        id1: "",
        id2: "",
        id3: "",
        id4: "",
        id5: "",
        id6: ""
      },
      sending: false
    }
  },
  methods: {
  	sendDeletions(){
      this.sending = true;
      if(this.data.id1.length > 0 || this.data.id2.length > 0 || this.data.id3.length > 0 || this.data.id4.length > 0 || this.data.id5.length > 0 || this.data.id6.length > 0){
        music.deleteSongs(this.data)
          .then(res => {
            console.log('success!');
            console.log(res);
            this.deleteAll();
            this.frontPage();
            this.$router.push("./");
          })
          .catch(e => {
            this.sending = false;
            this.error = true;
          })
      }
  	},
  	...mapActions([
  		'deleteAll',
      'frontPage'
  	])
  },
  mounted: function() {
    this.items = this.$store.getters.getItems;
    let songs = this.$store.getters.getItems;

    for(let song of this.items){
      if(song.sid == 1){
        this.data.id1 += song.id + ",";
      }else if(song.sid == 2){
        this.data.id2 += song.id + ",";
      }else if(song.sid == 3){
        this.data.id3 += song.id + ",";
      }else if(song.sid == 4){
        this.data.id4 += song.id + ",";
      }else if(song.sid == 5){
        this.data.id5 += song.id + ",";
      }else{
        this.data.id6 += song.id + ",";
      }
    }
  },
  //get this stuff working
  watch: {
      successes: function(){
        if(this.successes == this.diffServers){
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