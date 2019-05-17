<template>
<section>
	<b-field label="Username">
		<b-input></b-input>
	</b-field>

	<b-field label="Password">
		<b-input></b-input>
	</b-field>

	<button class="button is-black">Login</button>
</section>
</template>

<script>
//This whole shebang should be opening in a modal when the button is clicked
export default {
  name: 'loginform',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">

</style>