<template>
<div class="adminFooter">
	<nav class="level is-mobile is-fixed-bottom" 
	  v-if="this.opened == false && this.editing == false && this.deleting == false">
	  <div class="level-item has-text-centered adminButton">
	  	<a class="button is-primary iconButton"
	       v-on:click = "toggleTools">
	  	  <span class="mdi mdi-36px mdi-settings"></span>
	  	</a>
	  </div>
	</nav>
	<nav class="level is-mobile"
		v-if="this.opened == true">
	  <div class="level-item has-text-centered">
	    <div>
	      <a class="button is-primary iconButton"
	         v-on:click="toggleEditing">
	        <span class="mdi mdi-36px mdi-circle-edit-outline"></span>
	      </a>
	    </div>
	  </div>
	  <div class="level-item has-text-centered">
	    <div>
	      <a class="button is-primary iconButton"
	         v-on:click="toggleDeleting">
	      <span class="mdi mdi-36px mdi-delete"></span>
	      </a>
	    </div>
	  </div>
	  <div class="level-item has-text-centered">
	    <div>
	      <a class="button is-primary iconButton"
	         v-on:click="toggleTools">
	      	<span class="mdi mdi-36px mdi-close"></span>
	      </a>
	    </div>
	  </div>
	</nav>
	<nav class="level is-mobile"
		v-if="this.editing == true">
	  <div class="level-item has-text-centered">
	    <div>
	      <a class="button is-primary"
	      v-on:click="editDirect">
	      Edit {{itemCount}} items
	      </a>
	    </div>
	  </div>
	  <div class="level-item has-text-centered">
	    <div>
	      <a class="button is-primary"
	         v-on:click="toggleEditing">
	      	Cancel
	      </a>
	    </div>
	  </div>
	</nav>
	<nav class="level is-mobile"
		v-if="this.deleting == true">
	  <div class="level-item has-text-centered">
	    <div>
	      <a class="button is-primary" href="./#/delete">
	      Delete {{itemCount}} items
	      </a>
	    </div>
	  </div>
	  <div class="level-item has-text-centered">
	    <div>
	      <a class="button is-primary"
	         v-on:click="toggleDeleting">
	      	Cancel
	      </a>
	    </div>
	  </div>
	</nav>
</div>


</template>

<script>
import music from '@/services/requests';
import store from '../main.js';
import { mapActions, mapState } from 'vuex';
import router from '../router/index.js';
export default {
  name: 'adminbar',
  data () {
    return {
      opened: false,
      editing: false,
      deleting: false,
      itemCount: 0
    }
  },
  methods: {
  	toggleTools(){
  	  if(this.opened == false){
  	    this.opened = true;
  	  }else{
  	  	this.opened = false;
  	  	this.editing = false;
  	  	this.deleting = false;
  	  	this.stopSelect();
  	  	this.deleteAll();
  	  }
  	},
  	editDirect(){
  		console.log('test');
  		router.push("edit");
  	},
  	toggleEditing(){
  	  if(this.editing == false){
  	    this.editing = true;
  	    this.opened = false;
  	    this.startSelect();
  	  }else{
  	    this.editing = false;
  	    this.opened = true;
  	    this.stopSelect();
  	  }
  	},
  	toggleDeleting(){
  	  if(this.deleting == false){
  	    this.deleting = true;
  	    this.opened = false;
  	    this.startSelect();
  	  }else{
  	    this.deleting = false;
  	    this.opened = true;
  	    this.stopSelect();
  	  }
  	},
  	...mapActions([
  	  'startSelect',
  	  'stopSelect',
  	  'itemNumber',
  	  'deleteAll'
  	])
  },
  computed: {
  	getNumItems(){
  	  this.itemCount = this.$store.getters.itemNumber;
  	}
  },
  watch: {
    getNumItems(){
  	  return this.$store.getters.itemNumber;
  	}
  }
}
</script>

<style lang="scss">
.adminFooter{
	position: fixed;
	right: 20px;
	bottom: 10px;
	text-align: right;
	.iconButton{
		font-size: 25px;
	}
}
</style>