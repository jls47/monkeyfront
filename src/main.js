// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import 'bulma/css/bulma.css'

Vue.config.productionTip = false

Vue.use(Vuetify)

Vue.use(Vuex)



const store = new Vuex.Store({
	state: {
		status: "frontpage",
		edit: false,
		delete: false,
		loggedIn: false,
		editing: [],
		deleting: []
	},
	mutations: {
		SET_USE_CONTEXT(state, context){
			state.status = context;
		},
		SET_LOGIN_STATUS(state, status){
			state.loggedIn = status;
		},
		ADD_EDITING_ITEM(state, item){
			state.editing.push(item);
		},
		ADD_DELETING_ITEM(state, item){
			state.deleting.push(item);
		},
		REMOVE_ALL_ITEMS(state){
			state.editing = [];
			state.deleting = [];
		}
	},
	actions: {
		beginSearch(context){
			context.commit('SET_USE_CONTEXT', 'search')
		},
		frontPage(context){
			context.commit('SET_USE_CONTEXT', 'front')
		},
		login(context){
			context.commit('SET_LOGIN_STATUS', true)
		},
		logout(context){
			context.commit('SET_LOGIN_STATUS', false)
		},
		addEdit(context, item){
			context.commit('ADD_EDITING_ITEM', item)
		},
		addDelete(context, item){
			context.commit('ADD_DELETING_ITEM', item)
		}
	},
	getters: {
		searchStatus(state){
			return state.status;
		},
		loginStatus(state){
			return state.loggedIn;
		},
		editItems(state){
			return state.editing;
		},
		deletingItems(state){
			return state.deleting;
		}
	}

})

export default store;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
