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
  <label class="checkbox">
    <input type="checkbox" v-model="checked">
    Remember me
  </label><br>
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
      	name: '',
      	password: ''
        
      },
      checked: false,
      error: false
    }
  },
  methods: {
  	log(data){
  		music.adminLog(data)
  			.then(res => {
  				console.log(res);
  				if(res.data.status == 'failure'){
            //needs more informative error message
  					console.log('nope');
  				}else{
            if(this.checked == true){
              localStorage.setItem("loginDetails", JSON.stringify(this.data));
              localStorage.setItem("loginStatus", 'true');
            };
            console.log('aaa');
  					this.login()
                .then(() => {
                  this.$router.push(this.$route.query.redirect || './');
                })
  					
  				}
  			})
  	},
  	...mapActions([
  		'login',
      'logout'
  	])
  }
  
}
</script>

<style lang="scss">
</style>