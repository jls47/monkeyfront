<template>
<div>
  <nav class="navbar is-dark is-fixed-top" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="http://themonkeypub.com/images/mp-header-logo.png" width="120px">
    </a>
    <!--Make this a component!-->
    <a role="button" class="navbar-burger burger" aria-expanded="false" id = "lock">
      <span class="mdi mdi-36px mdi-lock"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Documentation
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
  }
}


</script>

<style lang="scss">
#logo{
	margin-top: 10px;
	width: 100%;
}
nav{
	top: 0;
}
#lock{
	margin-top: -21px;
	margin-right: 10px;
}
</style>