<template>
<div class="modal">
  <div class="modal-background"></div>
  <div class="modal-content">
  <div class="control">
  <label class="radio">
    <input type="radio" name="answer" checked>
    Artist
  </label>
  <label class="radio">
    <input type="radio" name="answer">
    Title
  </label>
</div>
<div class="field">
  <div class="control">
    <div class="select is-primary">
      <select>
        <option>Search artists</option>
        <option>Search titles</option>
      </select>
    </div>
  </div>
</div>
  <a class="button is-primary">
    <strong>Search <span class="mdi mdi-12px mdi-magnify"></span></strong>
  </a>
  </div>
  
</div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>