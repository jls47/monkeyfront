<template><div class="container main-container">
<div>
  <navbar></navbar>
</div>
<div v-if="searching == 'search'">
  <search></search>
</div>
<div v-else>
  <div class="columns searchHint">
    <div class="column is-three-fifths">
    </div>
    <div class="column">
      <div class="notification is-primary" v-if="notifier == true">
        <button class="delete" v-on:click="closeNotifier"></button>
        <h3>Search for songs here <i class="mdi mdi-24px mdi-chevron-up"></i></h3>
      </div>
    </div>
  </div>
  <section class="hero is-primary">
  <div class="hero-body">
    <div class="container pubInfo">
      <h1 class="title">
        Welcome to the Monkey Pub
      </h1>
      <h2 class="subtitle">
        Check out the recently added songs or go hunting for your favorites!  Search by artist or song title.
      </h2>
    </div>
  </div>
</section><br>
  <frontpage></frontpage>
</div>
<div v-if="loggedIn == true">
  <adminbar></adminbar>
</div>
</div>
</template>

<script>
import search from '@/components/search';
import navbar from '@/components/navbar';
import frontpage from '@/components/frontpage';
import adminbar from '@/components/adminbar';
import inventoryModal from '@/components/inventoryModal';
import store from '../main.js';
import { mapActions, mapState } from 'vuex';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      searching: "",
      loggedIn: "",
      dataLoaded: false,
      editingInv: false,
      notifier: true
    }
  },
  components: {
    search: search,
    navbar: navbar,
    frontpage: frontpage,
    adminbar: adminbar,
    inventoryModal: inventoryModal
  },
  methods: {
    closeNotifier(){
      this.closeHint();
      this.notifier = false;
    },
    ...mapActions([
      'closeHint'
    ])
  },
  computed: {
    search(){
      this.searching = this.$store.getters.searchStatus;
    },
    login(){
      this.loggedIn = this.$store.getters.loginStatus;
    },
    editInv(){
      this.editingInv = this.$store.getters.isEditing;
    },
    hintClosed(){
      this.notifier = this.$store.getters.isHintClosed;
    }
  },
  watch: {
    search(){
      return this.$store.getters.searchStatus;
    },
    login(){
      return this.$store.getters.loginStatus;
    },
    editInv(){
      return this.$store.getters.isEditing;
    },
    hintClosed(){
      return this.$store.getters.isHintClosed;
    }
  },
  mounted: function(){
    this.loggedIn = this.$store.getters.loginStatus;
    this.notifier = this.$store.getters.isHintClosed;
  }//https://abload.de/img/nikolagalaxynnk77.png
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  text-decoration: none;
}
.notification.is-primary{
  margin-top: -30px;
  @media only screen and(max-width: 768px){
    margin-top: -80px;
    margin-bottom: -20px;
  }

}
.hero{
  background-image: url("../assets/nikolagalaxy.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  
}
.indicator{
  height: 40px;
  h3{
    font-size: 20px;
  }
  @media only screen and (max-width: 768px){

  }
}

.modal-card-head{
  background-color: rgba(65, 65, 65, 1);
}

.modal-card-title{
  color: rgba(224, 225, 226, 1);
}

.modal-card-body{
  background-color: rgba(45, 45, 45, 1);
}

.modal-background{
  background-color: rgba(45, 45, 45, 0.5);
}

.subtitle{
  color: red;
}
.pubInfo{
  background-color: rgba(56, 57, 58, 0.4);
}
</style>
