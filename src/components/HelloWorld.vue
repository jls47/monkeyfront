<template><div class="container">
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
      this.notifier = false;
    }
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
    }
  },
  mounted: function(){
    this.loggedIn = this.$store.getters.loginStatus;
  }
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
  color: #42b983;
}
.searchHint{
  margin-top: -60px;
  @media only screen and(max-width: 768px){
    margin-top: -150px;
  }
}
.hero{
  background-image: url("https://abload.de/img/teslaszkrt.jpg");
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
.subtitle{
  color: red;
}
.pubInfo{
  background-color: rgba(56, 57, 58, 0.4);
}
</style>
