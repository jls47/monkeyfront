<template>
<div class="inventoryModal modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Edit Inventory</p>
      <button class="delete" aria-label="close" v-on:click="closeEditing"></button>
    </header>
    <section class="modal-card-body">
      <div class="editingInventory"
           v-for="item in items">
        <h2>
          <a class="removebutton"
             v-on:click="targetForRemoval(item)">
            <span class="mdi mdi-24px mdi-minus-circle-outline"></span>
          </a>
          {{item.title}} - {{item.artist}} <sub v-if="item.notes">({{item.notes}})</sub>
        </h2>
      </div> 
    </section>
    <footer class="modal-card-foot">
      <button class="button is-primary" v-on:click="finishEditing"><strong>Save</strong></button>
      <button class="button is-light" v-on:click="clearInventory">Clear All</button>
    </footer>
  </div>
</div>
</template>

<script>
import music from '@/services/requests';
import store from '../main.js';
import { mapActions, mapState } from 'vuex';
//more informative stuff across the board
export default {
  name: 'inventoryModal',
  data () {
    return {
      items: [],
      toBeRemoved: []
    }
  },
  methods: {
    targetForRemoval(item){
      this.toBeRemoved.push(item);
      this.removeItem(item);
    },
    finishEditing(){
      this.toggleInvEdit();
    },
    closeEditing(){
      for(let item of this.toBeRemoved){
        this.addItem(item);
      };
      this.toggleInvEdit();
    },
    clearInventory(){
      this.deleteAll();
      this.toggleInvEdit();
    },
    ...mapActions([
      'isSelect',
      'removeItem',
      'getItems',
      'toggleInvEdit',
      'deleteAll',
      'addItem'
    ])
  },
  computed: {
    
  },
  watch: {
    items(){
      this.items = this.$store.getters.getItems;
    }
  },
  mounted: function(){
    this.items = this.$store.getters.getItems;
  }
}

</script>

<style lang="scss" scoped>
p{
  color: rgba(224, 225, 226, 1)
}
h2{
  color: rgba(224, 225, 226, 1)
}
span{
  color: rgba(224, 225, 226, 1)
}
</style>