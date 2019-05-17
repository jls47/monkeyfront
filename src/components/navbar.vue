<template>
<nav class="navbar is-dark">
    <div class="navbar-start">
      <a href="https://www.jlukes.com/tfind">
        <img id = "logo" src="../assets/monkey.png"/>
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <div v-if="this.loginStatus == true && this.TOstatus == true">
            <router-link tag="a" to="/create"><button class="button is-danger is-inverted">Create Tournament</button></router-link>
          </div>
        </div>
      </div>
      <div class="navbar-item">
        <div class="buttons">
          <div v-if="this.loginStatus == false">
            <login @log="onLog"></login>
            <button class="button is-danger is-inverted" @click = "openModal">Sign Up</button>
          </div>
          <div v-else>
            <logout @out="onLog"></logout>
          </div>
        </div>
      </div>
    </div>  
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#logo{
	margin-top: 10px;
}
</style>