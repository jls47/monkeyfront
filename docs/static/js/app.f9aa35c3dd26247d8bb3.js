webpackJsonp([1],{"/Nmo":function(t,e){},GK12:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),n=a("NYxO"),i=a("3EgV"),r=a.n(i),c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=a("VU/8")({name:"App"},c,!1,function(t){a("gsu9")},null,null).exports,l=a("/ocq"),u=a("Dd8w"),d=a.n(u),m={name:"search",data:function(){return{msg:"Welcome to Your Vue.js App",show:!0}},methods:d()({closeModal:function(){this.closeSModal()}},Object(n.b)(["closeSModal"])),computed:{search:function(){this.show=this.$store.getters.searchBar}},watch:{search:function(){return this.$store.getters.searchBar}}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search"},[1==t.show?a("div",{staticClass:"modal is-active"},[a("div",{staticClass:"modal-background"}),t._v(" "),a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("Search")]),t._v(" "),a("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:t.closeModal}})]),t._v(" "),t._m(0),t._v(" "),t._m(1)])]):t._e(),t._v(" "),a("p",[t._v("Results")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"modal-card-body"},[e("div",{staticClass:"field"},[e("div",{staticClass:"control"},[e("div",{staticClass:"select is-primary"},[e("select",[e("option",[this._v("Search artists")]),this._v(" "),e("option",[this._v("Search titles")])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"button is-primary"},[e("strong",[this._v("Search "),e("span",{staticClass:"mdi mdi-12px mdi-magnify"})])])}]};var f=a("VU/8")(m,h,!1,function(t){a("c4kJ")},"data-v-7e7ea063",null).exports,_={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var v=a("VU/8")({name:"loginform",data:function(){return{msg:"Welcome to Your Vue.js App"}}},_,!1,function(t){a("tu0J")},null,null).exports,g={name:"navbar",data:function(){return{logged:!1,toggled:!1,msg:"Welcome to Your Vue.js App"}},methods:d()({burgerToggle:function(){0==this.toggled?this.toggled=!0:this.toggled=!1},startSearch:function(){console.log("aaa"),console.log(this.beginSearch),this.burgerToggle(),this.openSModal(),this.beginSearch()}},Object(n.b)(["beginSearch","openSModal"])),components:{}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar is-dark is-fixed-top",attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"navbar-brand"},[t._m(0),t._v(" "),a("a",{staticClass:"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},on:{click:t.burgerToggle}},[a("span",{attrs:{"aria-hidden":"true"}}),t._v(" "),a("span",{attrs:{"aria-hidden":"true"}}),t._v(" "),a("span",{attrs:{"aria-hidden":"true"}})])]),t._v(" "),a("div",{staticClass:"navbar-menu",class:{"is-active":t.toggled},attrs:{id:"navbarBasicExample"}},[t.logged?a("div",{staticClass:"navbar-start admin-tools"},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)]):t._e(),t._v(" "),a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item"},[a("a",{staticClass:"button is-primary",on:{click:t.startSearch}},[t._m(4)])])]),t._v(" "),t._m(5)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"navbar-item",attrs:{href:"https://bulma.io"}},[e("img",{attrs:{src:"http://themonkeypub.com/images/mp-header-logo.png",width:"120px"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar-item"},[e("a",{staticClass:"button is-light"},[this._v("\n        Edit "),e("span",{staticClass:"mdi mdi-12px mdi-border-color"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar-item"},[e("a",{staticClass:"button is-light"},[this._v("\n        Delete "),e("span",{staticClass:"mdi mdi-12px mdi-delete"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar-item"},[e("a",{staticClass:"button is-light"},[this._v("\n        Create "),e("span",{staticClass:"mdi mdi-12px mdi-plus"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("strong",[this._v("Search "),e("span",{staticClass:"mdi mdi-12px mdi-magnify"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar-item"},[e("a",{staticClass:"button is-light"},[e("strong",[this._v("Log in "),e("span",{staticClass:"mdi mdi-12px mdi-lock"})])])])}]};var E={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"frontpage"},[e("p",[this._v("FrontPage")])])}]};var b={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App",searching:""}},components:{search:f,loginform:v,navbar:a("VU/8")(g,p,!1,function(t){a("b8Ts")},null,null).exports,frontpage:a("VU/8")({name:"frontpage",data:function(){return{msg:"Welcome to Your Vue.js App"}}},E,!1,function(t){a("jmHz")},null,null).exports},computed:{search:function(){this.searching=this.$store.getters.searchStatus}},watch:{search:function(){return this.$store.getters.searchStatus}}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("navbar"),this._v(" "),"search"==this.searching?e("div",[e("search")],1):e("div",[e("frontpage")],1)],1)},staticRenderFns:[]};var S=a("VU/8")(b,C,!1,function(t){a("/Nmo")},"data-v-3911dcf7",null).exports;s.default.use(l.a);var T=new l.a({routes:[{path:"/",name:"HelloWorld",component:S}]});a("GK12");s.default.config.productionTip=!1,s.default.use(r.a),s.default.use(n.a);var A=new n.a.Store({state:{status:"frontpage",searchBar:!0,edit:!1,delete:!1,loggedIn:!1,editing:[],deleting:[]},mutations:{SET_USE_CONTEXT:function(t,e){t.status=e},GET_SEARCH_BAR:function(t){t.searchBar=!0},LEAVE_SEARCH_BAR:function(t){t.searchBar=!1},SET_LOGIN_STATUS:function(t,e){t.loggedIn=e},ADD_EDITING_ITEM:function(t,e){t.editing.push(e)},ADD_DELETING_ITEM:function(t,e){t.deleting.push(e)},REMOVE_ALL_ITEMS:function(t){t.editing=[],t.deleting=[]}},actions:{beginSearch:function(t){t.commit("SET_USE_CONTEXT","search")},openSModal:function(t){t.commit("GET_SEARCH_BAR")},closeSModal:function(t){t.commit("LEAVE_SEARCH_BAR")},frontPage:function(t){t.commit("SET_USE_CONTEXT","front")},login:function(t){t.commit("SET_LOGIN_STATUS",!0)},logout:function(t){t.commit("SET_LOGIN_STATUS",!1)},addEdit:function(t,e){t.commit("ADD_EDITING_ITEM",e)},addDelete:function(t,e){t.commit("ADD_DELETING_ITEM",e)},deleteAll:function(t){t.commit("REMOVE_ALL_ITEMS")}},getters:{searchStatus:function(t){return t.status},searchBar:function(t){return t.searchBar},loginStatus:function(t){return t.loggedIn},editItems:function(t){return t.editing},deletingItems:function(t){return t.deleting}}});e.default=A;new s.default({el:"#app",router:T,components:{App:o},template:"<App/>",store:A})},b8Ts:function(t,e){},c4kJ:function(t,e){},gsu9:function(t,e){},jmHz:function(t,e){},tu0J:function(t,e){}},["NHnr"]);