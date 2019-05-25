<template>
<div class="login">
	<div class="field">
		<label class="label">Username</label>
		<div class="control">
			<input class="input" v-model="data.username" type="text" placeholder="">
		</div>
	</div>
	<div class="field">
		<label class="label">Password</label>
		<div class="control">
			<input class="input" v-model="data.password" type="password" placeholder="">
		</div>
	</div>
	<a class="button is-primary" v-on:click="log(data)"><b>Login</b></a>
</div>
</template>

<script>
//This whole shebang should be opening in a modal when the button is clicked
import music from '@/services/requests';
import store from '../main.js';
import { mapActions } from 'vuex';

export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      data: {
      	username: '',
      	password: ''
      }
    }
  },
  methods: {
  	log(data){
  		music.adminLog(data)
  			.then(res => {
  				console.log(res);
  				if(res.data.status == 'failure'){
  					console.log('nope');
  				}else{
  					this.login();
  					this.$router.push(this.$route.query.redirect || '/');
  				}
  			})
  	},
  	...mapActions([
  		'login'
  	])
  }
  
}
</script>

<style lang="scss">
</style>