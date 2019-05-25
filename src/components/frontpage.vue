<template>
<div class="frontpage">
	<h2>Recently added: </h2><br>
	<div  v-for="song in recentSongs">
		<h1>{{song.title}} - {{song.artist}}</h1><br>
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
//Need media queries to make things less awkward
</script>

<style lang="scss">
.frontpage{
  width: 80vw;
  margin-left: 10vw;
  text-align: left;
  p::before{
    margin-left: 20px;
  }
  @media only screen and (max-width: 768px){
    h1{
      font-size: 28px;
    }
    h2{
      font-size: 20px;
    }
  }
  @media only screen and (min-width: 768px){
    h1{
      font-size: 40px;
    }
    h2{
    font-size: 30px;
    }
  }
}
</style>