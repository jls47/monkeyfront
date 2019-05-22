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
		searchBar: true,
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
		GET_SEARCH_BAR(state){
			state.searchBar = true;
		},
		LEAVE_SEARCH_BAR(state){
			state.searchBar = false;
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
		openSModal(context){
			context.commit('GET_SEARCH_BAR')
		},
		closeSModal(context){
			context.commit('LEAVE_SEARCH_BAR')
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
		},
		deleteAll(context){
			context.commit('REMOVE_ALL_ITEMS')
		}
	},
	getters: {
		searchStatus(state){
			return state.status;
		},
		searchBar(state){
			return state.searchBar;
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
