<template>
<div class="adminFooter">
	<nav class="level is-mobile is-fixed-bottom" 
	  v-if="this.opened == false && this.editing == false && this.deleting == false">
	  <div class="level-item has-text-centered adminButton">
	  	<a class="button is-primary"
	       v-on:click = "toggleTools">
	  	  <span class="mdi mdi-24px mdi-settings"></span>
	  	</a>
	  </div>
	</nav>
	<nav class="level is-mobile"
		v-if="this.opened == true">
	  <div class="level-item has-text-centered">
	    <div>
	      <a class="button is-primary"
	         v-on:click="toggleEditing">
	        <span class="mdi mdi-24px mdi-circle-edit-outline"></span>
	      </a>
	    </div>
	  </div>
	  <div class="level-item has-text-centered">
	    <div>
	      <a class="button is-primary"
	         v-on:click="toggleDeleting">
	      <span class="mdi mdi-24px mdi-delete"></span>
	      </a>
	    </div>
	  </div>
	  <div class="level-item has-text-centered">
	    <div>
	      <a class="button is-primary"
	         v-on:click="toggleTools">
	      	<span class="mdi mdi-24px mdi-close"></span>
	      </a>
	    </div>
	  </div>
	</nav>
	<nav class="level is-mobile"
		v-if="this.editing == true">
	  <div class="level-item has-text-centered">
	    <div>
	      <a class="button is-primary">
	        Edit 12 items
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
	      <a class="button is-primary">
	      Delete 12 items
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
export default {
  name: 'adminbar',
  data () {
    return {
      opened: false,
      editing: false,
      deleting: false
    }
  },
  methods: {
  	toggleTools(){
  	  if(this.opened == false){
  	    this.opened = true;
  	  }else{
  	  	this.opened = false;
  	  }
  	},
  	toggleEditing(){
  	  if(this.editing == false){
  	    this.editing = true;
  	    this.opened = false;
  	  }else{
  	    this.editing = false;
  	    this.opened = true;
  	  }
  	},
  	toggleDeleting(){
  	  if(this.deleting == false){
  	    this.deleting = true;
  	    this.opened = false;
  	  }else{
  	    this.deleting = false;
  	    this.opened = true;
  	  }
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
}
</style>