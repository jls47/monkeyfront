<template>
<div class="frontpage">
	<p>Recently added: </p>
	<div  v-for="song in recentSongs">
		<p>{{song.title}} - {{song.artist}}</p>
	</div>
</div>
</template>

<script>
import music from '@/services/requests';
export default {
  name: 'frontpage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      recentSongs: []
    }
  },
  mounted: function(){
  	music.getRecentSongs()
  		.then(data => {
  			this.recentSongs = data.data;
  		})
  }
}
</script>

<style lang="scss">

</style>