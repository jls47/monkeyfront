<template>
<div class="login">
  <h1>Admin Login</h1>
  <div class="notification is-danger" v-if="error == true">
    <button class="delete" v-on:click="error = false"></button>
    Looks like there's a problem with that username or password.
  </div>
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
	<a class="button is-primary" v-on:click="log(data)"><b>Login</b></a><br><br>
  <a class="button is-light" v-on:click="window.history.go(-1)">Cancel</a>
  
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
      	password: '',
        error: false
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
            this.error = true;
  					console.log('nope');
  				}else{
            if(this.checked == true){
              localStorage.setItem("loginStatus", 'true');
            };
            console.log('aaa');
  					this.login()
                .then(() => {
                  this.$router.push(this.$route.query.redirect || './');
                })
  					
  				}
  			})
        .catch(e => {
          this.error = true;
        })
  	},
  	...mapActions([
  		'login',
      'logout'
  	])
  }
  
}
</script>

<style lang="scss" scoped>
h1{
  font-size: 30px;
  color: rgba(224, 225, 226, 1);
}
label{
  color: rgba(224, 225, 226, 1);
}
.login{
  width: 80vw;
  margin-left: 10vw;
}
</style>