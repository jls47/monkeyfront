<template><div>
<navbar></navbar>

    <br><login></login>
    <br><logout></logout><br>
    <br><search></search>
    <br><loginform></loginform>
</div>
</template>

<script>
import search from '@/components/search';
import loginform from '@/components/loginform';
import navbar from '@/components/navbar';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    search: search,
    loginform: loginform,
    navbar: navbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{

}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
