<template>
	<a class="button is-white">
		<span class="icon is-medium">
    		<i class="fas fa-lock fa-stack-2x"></i>
		</span>
	</a>
</template>

<script>
export default {
  name: 'logout',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss" scoped>
a{
	width: 40px;
}
i{
	text-align: center;
}
</style>