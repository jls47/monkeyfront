webpackJsonp([1],{"/2Cr":function(t,e){},"0Pez":function(t,e){},"4Rr5":function(t,e){},Eqdu:function(t,e){},GK12:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n=s("NYxO"),r=s("3EgV"),i=s.n(r),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var c=s("VU/8")({name:"App"},o,!1,function(t){s("evzb")},null,null).exports,l=s("/ocq"),u=s("Dd8w"),d=s.n(u),h=s("Zrlr"),m=s.n(h),g=s("wxAW"),p=s.n(g),v=s("mtWM"),f=s.n(v),_=function(){function t(){m()(this,t)}return p()(t,null,[{key:"createSong",value:function(t){return console.log(t),f.a.post("https://monkey-back.herokuapp.com/api/songs",t).then(function(t){console.log(t)}).catch(function(t){console.log(t)})}},{key:"getSongsById",value:function(t){var e=this;return f.a.get("https://monkey-back.herokuapp.com",form).then(function(t){return e.song=t.data.data,e.song}).catch(function(t){console.log(t)})}},{key:"getRecentSongs",value:function(){var t=this;return f.a.get("https://monkey-back.herokuapp.com/api/songs/r/").then(function(e){return t.songs=e,t.songs.data}).catch(function(t){return t})}},{key:"getSongsByArtist",value:function(t){var e=this;return f.a.get("https://monkey-back.herokuapp.com/api/songs/a/"+t).then(function(t){return e.songs=t,e.songs.data}).catch(function(t){return t})}},{key:"searchSongs",value:function(t){var e=this;return f.a.get("https://monkey-back.herokuapp.com/api/songs/s/"+t).then(function(t){return e.songs=t,e.songs.data}).catch(function(t){return t})}},{key:"editSong",value:function(t){}},{key:"searchArtist",value:function(t){var e=this;return f.a.get("https://monkey-back.herokuapp.com/api/artists/s/"+t).then(function(t){return e.artists=t,e.artists.data}).catch(function(t){return t})}},{key:"deleteSongs",value:function(t){return f.a.get("https://monkey-back.herokuapp.com/api/songs/",t).then(function(t){return t}).catch(function(t){return t})}},{key:"adminLog",value:function(t){return f.a.get("https://monkey-back.herokuapp.com/api/user",{params:{name:t.username,password:t.password}}).then(function(t){return t}).catch(function(t){return t})}}]),t}(),b={name:"search",data:function(){return{msg:"Welcome to Your Vue.js App",show:!0,param:"artist",sParam:"artist",selected:"",term:"",sTerm:"",results:[],subResults:[],showingSub:!1,searched:!1}},methods:d()({getArtistSongs:function(t){var e=this;console.log("searching"),this.selected!=t?(this.selected=t,_.getSongsByArtist(t).then(function(t){e.subResults=t.data})):this.clearSubResults()},closeModal:function(){this.closeSModal()},clearSubResults:function(){this.subResults=[],this.selected=""},clearInfo:function(){this.results=[],this.subResults=[]},startSearch:function(){var t=this;this.closeModal(),this.sParam=this.param,this.sTerm=this.term,"artist"==this.param?(this.searched=!0,_.searchArtist(this.term).then(function(e){console.log(e),t.results=e.data})):(this.searched=!0,_.searchSongs(this.term).then(function(e){t.results=e.data}))}},Object(n.b)(["closeSModal"])),computed:{search:function(){this.show=this.$store.getters.searchBar}},watch:{search:function(){return this.$store.getters.searchBar},param:function(){},show:function(){this.searched=!1}}},C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search"},[1==t.show?s("div",{staticClass:"modal is-active"},[s("div",{staticClass:"modal-background"}),t._v(" "),s("div",{staticClass:"modal-card"},[s("header",{staticClass:"modal-card-head"},[s("p",{staticClass:"modal-card-title"},[t._v("Search")]),t._v(" "),s("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:t.closeModal}})]),t._v(" "),s("section",{staticClass:"modal-card-body"},[s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("div",{staticClass:"select is-dark"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.param,expression:"param"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.param=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"artist"}},[t._v("Search artists")]),t._v(" "),s("option",{attrs:{value:"title"}},[t._v("Search titles")])])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.term,expression:"term"}],staticClass:"input",attrs:{type:"text",placeholder:"Search"},domProps:{value:t.term},on:{input:function(e){e.target.composing||(t.term=e.target.value)}}})])])]),t._v(" "),s("a",{staticClass:"button is-primary",on:{click:t.startSearch}},[t._m(0)])])]):t._e(),t._v(" "),s("h2",{staticClass:"searchingNote"},[t._v("Searching "+t._s(this.sParam)+'s for "'+t._s(this.sTerm)+'"')]),s("br"),t._v(" "),s("div",{staticClass:"results"},[t._l(t.results,function(e){return t.results.length>0&&"artist"==t.sParam?s("div",{staticClass:"artistResults"},[s("a",{staticClass:"artistLink",on:{click:function(s){0==t.subResults.length||t.selected==t.subResults[0].artist?t.getArtistSongs(e.name):t.clearSubResults()}}},[s("h1",[t._v(t._s(e.name)+" "),t.subResults.length>0&&t.subResults[0].artist==e.name?s("span",{staticClass:"mdi mdi-24px mdi-arrow-down-drop-circle"}):s("span",{staticClass:"mdi mdi-24px mdi-arrow-right-drop-circle"})])]),t._v(" "),t._l(t.subResults,function(a){return t.subResults.length>0&&t.subResults[0].artist==e.name?s("div",{staticClass:"artistSongs"},[s("h2",[s("span",{staticClass:"mdi mdi-12px mdi-microphone-variant"}),t._v(t._s(a.title)+" "),a.notes?s("sub",[t._v("("+t._s(a.notes)+")")]):t._e()])]):t._e()}),s("br")],2):t._e()}),t._v(" "),t._l(t.results,function(e){return t.results.length>0&&"title"==t.sParam?s("div",{staticClass:"titleResults"},[s("h2",[t._v(t._s(e.title)+" - "+t._s(e.artist))]),s("br")]):t._e()}),t._v(" "),0==t.results.length&&1==this.searched?s("div",{staticClass:"placeholder"},[s("h1",[t._v("Couldn't find any "+t._s(t.param)+'s with the search term "'+t._s(t.term)+'".')])]):t._e()],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("strong",[this._v("Search "),e("span",{staticClass:"mdi mdi-12px mdi-magnify"})])}]};var S=s("VU/8")(b,C,!1,function(t){s("4Rr5")},"data-v-146dd7a8",null).exports,E={name:"navbar",data:function(){return{logged:!1,toggled:!1,msg:"Welcome to Your Vue.js App"}},methods:d()({burgerToggle:function(){0==this.toggled?this.toggled=!0:this.toggled=!1},startSearch:function(){console.log("aaa"),console.log(this.beginSearch),this.burgerToggle(),this.openSModal(),this.beginSearch()}},Object(n.b)(["beginSearch","openSModal"])),components:{}},k={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("nav",{staticClass:"navbar is-dark is-fixed-top",attrs:{role:"navigation","aria-label":"main navigation"}},[s("div",{staticClass:"navbar-brand"},[t._m(0),t._v(" "),s("a",{staticClass:"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},on:{click:t.burgerToggle}},[s("span",{attrs:{"aria-hidden":"true"}}),t._v(" "),s("span",{attrs:{"aria-hidden":"true"}}),t._v(" "),s("span",{attrs:{"aria-hidden":"true"}})])]),t._v(" "),s("div",{staticClass:"navbar-menu",class:{"is-active":t.toggled},attrs:{id:"navbarBasicExample"}},[t.logged?s("div",{staticClass:"navbar-start admin-tools"},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)]):t._e(),t._v(" "),s("div",{staticClass:"navbar-end"},[s("div",{staticClass:"navbar-item"},[s("a",{staticClass:"button is-primary",on:{click:t.startSearch}},[t._m(4)])])]),t._v(" "),t._m(5)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"navbar-item",attrs:{href:"https://bulma.io"}},[e("img",{attrs:{src:"http://themonkeypub.com/images/mp-header-logo.png",width:"120px"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar-item"},[e("a",{staticClass:"button is-light"},[this._v("\n        Edit "),e("span",{staticClass:"mdi mdi-12px mdi-border-color"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar-item"},[e("a",{staticClass:"button is-light"},[this._v("\n        Delete "),e("span",{staticClass:"mdi mdi-12px mdi-delete"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar-item"},[e("a",{staticClass:"button is-light"},[this._v("\n        Create "),e("span",{staticClass:"mdi mdi-12px mdi-plus"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("strong",[this._v("Search "),e("span",{staticClass:"mdi mdi-12px mdi-magnify"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar-item"},[e("a",{staticClass:"button is-light",attrs:{href:"./#/login"}},[e("strong",[this._v("Log in "),e("span",{staticClass:"mdi mdi-12px mdi-lock"})])])])}]};var R={name:"frontpage",data:function(){return{msg:"Welcome to Your Vue.js App",recentSongs:[]}},mounted:function(){var t=this;_.getRecentSongs().then(function(e){t.recentSongs=e.data})}},T={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"frontpage"},[s("h2",[t._v("Recently added: ")]),s("br"),t._v(" "),t._l(t.recentSongs,function(e){return s("div",[s("h1",[t._v(t._s(e.title)+" - "+t._s(e.artist))]),s("br")])})],2)},staticRenderFns:[]};var y={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App",searching:""}},components:{search:S,navbar:s("VU/8")(E,k,!1,function(t){s("fULM")},null,null).exports,frontpage:s("VU/8")(R,T,!1,function(t){s("/2Cr")},null,null).exports},computed:{search:function(){this.searching=this.$store.getters.searchStatus}},watch:{search:function(){return this.$store.getters.searchStatus}}},A={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("navbar"),this._v(" "),"search"==this.searching?e("div",[e("search")],1):e("div",[e("frontpage")],1)],1)},staticRenderFns:[]};var w=s("VU/8")(y,A,!1,function(t){s("0Pez")},null,null).exports,x={name:"login",data:function(){return{msg:"Welcome to Your Vue.js App",data:{username:"",password:""}}},methods:d()({log:function(t){var e=this;_.adminLog(t).then(function(t){console.log(t),"failure"==t.data.status?console.log("nope"):(e.login(),e.$router.push(e.$route.query.redirect||"./"))})}},Object(n.b)(["login"]))},I={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Username")]),t._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.data.username,expression:"data.username"}],staticClass:"input",attrs:{type:"text",placeholder:""},domProps:{value:t.data.username},on:{input:function(e){e.target.composing||t.$set(t.data,"username",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Password")]),t._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.data.password,expression:"data.password"}],staticClass:"input",attrs:{type:"password",placeholder:""},domProps:{value:t.data.password},on:{input:function(e){e.target.composing||t.$set(t.data,"password",e.target.value)}}})])]),t._v(" "),s("a",{staticClass:"button is-primary",on:{click:function(e){return t.log(t.data)}}},[s("b",[t._v("Login")])])])},staticRenderFns:[]};var M=s("VU/8")(x,I,!1,function(t){s("Eqdu")},null,null).exports;a.default.use(l.a);var $=new l.a({routes:[{path:"/",name:"HelloWorld",component:w},{path:"/login",name:"login",component:M}]});s("GK12");a.default.config.productionTip=!1,a.default.use(i.a),a.default.use(n.a);var L=new n.a.Store({state:{status:"frontpage",searchBar:!0,edit:!1,delete:!1,loggedIn:!1,editing:[],deleting:[]},mutations:{SET_USE_CONTEXT:function(t,e){t.status=e},GET_SEARCH_BAR:function(t){t.searchBar=!0},LEAVE_SEARCH_BAR:function(t){t.searchBar=!1},SET_LOGIN_STATUS:function(t,e){t.loggedIn=e},ADD_EDITING_ITEM:function(t,e){t.editing.push(e)},ADD_DELETING_ITEM:function(t,e){t.deleting.push(e)},REMOVE_ALL_ITEMS:function(t){t.editing=[],t.deleting=[]}},actions:{beginSearch:function(t){t.commit("SET_USE_CONTEXT","search")},openSModal:function(t){t.commit("GET_SEARCH_BAR")},closeSModal:function(t){t.commit("LEAVE_SEARCH_BAR")},frontPage:function(t){t.commit("SET_USE_CONTEXT","front")},login:function(t){t.commit("SET_LOGIN_STATUS",!0)},logout:function(t){t.commit("SET_LOGIN_STATUS",!1)},addEdit:function(t,e){t.commit("ADD_EDITING_ITEM",e)},addDelete:function(t,e){t.commit("ADD_DELETING_ITEM",e)},deleteAll:function(t){t.commit("REMOVE_ALL_ITEMS")}},getters:{searchStatus:function(t){return t.status},searchBar:function(t){return t.searchBar},loginStatus:function(t){return t.loggedIn},editItems:function(t){return t.editing},deletingItems:function(t){return t.deleting}}});e.default=L;new a.default({el:"#app",router:$,components:{App:c},template:"<App/>",store:L})},evzb:function(t,e){},fULM:function(t,e){}},["NHnr"]);