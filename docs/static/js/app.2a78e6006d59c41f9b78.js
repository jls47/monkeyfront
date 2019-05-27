webpackJsonp([1],{"/2Cr":function(t,e){},"/A4r":function(t,e){},"84Ku":function(t,e){},AcKk:function(t,e){},"Ct+f":function(t,e){},GK12:function(t,e){},M3k8:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),i=s("NYxO"),a=s("3EgV"),o=s.n(a),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var c=s("VU/8")({name:"App"},r,!1,function(t){s("evzb")},null,null).exports,l=s("/ocq"),u=s("Dd8w"),d=s.n(u),m=s("Zrlr"),g=s.n(m),h=s("wxAW"),v=s.n(h),p=s("mtWM"),f=s.n(p),_=function(){function t(){g()(this,t)}return v()(t,null,[{key:"createSong",value:function(t){return console.log(t),f.a.post("https://monkey-back.herokuapp.com/api/songs",t).then(function(t){console.log(t)}).catch(function(t){console.log(t)})}},{key:"getSongsById",value:function(t){var e=this;return f.a.get("https://monkey-back.herokuapp.com",form).then(function(t){return e.song=t.data.data,e.song}).catch(function(t){console.log(t)})}},{key:"getRecentSongs",value:function(){var t=this;return f.a.get("https://monkey-back.herokuapp.com/api/songs/r/").then(function(e){return t.songs=e,t.songs.data}).catch(function(t){return t})}},{key:"getSongsByArtist",value:function(t){var e=this;return f.a.get("https://monkey-back.herokuapp.com/api/songs/a/"+t).then(function(t){return e.songs=t,e.songs.data}).catch(function(t){return t})}},{key:"searchSongs",value:function(t){var e=this;return f.a.get("https://monkey-back.herokuapp.com/api/songs/s/"+t).then(function(t){return e.songs=t,e.songs.data}).catch(function(t){return t})}},{key:"editSong",value:function(t){}},{key:"searchArtist",value:function(t){var e=this;return f.a.get("https://monkey-back.herokuapp.com/api/artists/s/"+t).then(function(t){return e.artists=t,e.artists.data}).catch(function(t){return t})}},{key:"deleteSongs",value:function(t){return f.a.get("https://monkey-back.herokuapp.com/api/songs/",t).then(function(t){return t}).catch(function(t){return t})}},{key:"adminLog",value:function(t){return f.a.get("https://monkey-back.herokuapp.com/api/user",{params:{name:t.username,password:t.password}}).then(function(t){return t}).catch(function(t){return t})}}]),t}(),b={name:"search",data:function(){return{msg:"Welcome to Your Vue.js App",show:!0,param:"artist",sParam:"artist",selected:"",term:"",sTerm:"",results:[],subResults:[],showingSub:!1,searched:!1,loggedIn:!1,adding:!1,added:[]}},methods:d()({getArtistSongs:function(t){var e=this;console.log("searching"),this.selected!=t?(this.selected=t,_.getSongsByArtist(t).then(function(t){e.subResults=t.data})):this.clearSubResults()},closeModal:function(){this.closeSModal()},clearSubResults:function(){this.subResults=[],this.selected=""},clearInfo:function(){this.results=[],this.subResults=[]},startSearch:function(){var t=this;this.closeModal(),this.sParam=this.param,this.sTerm=this.term,"artist"==this.param?(this.searched=!0,_.searchArtist(this.term).then(function(e){console.log(e),t.results=e.data})):(this.searched=!0,_.searchSongs(this.term).then(function(e){t.results=e.data}))},addSong:function(t){console.log(t),this.addItem(t)},removeSong:function(t){this.removeItem(t)}},Object(i.b)(["closeSModal","addItem","isSelect","removeItem"])),computed:{search:function(){this.show=this.$store.getters.searchBar},checkLogin:function(){this.loggedIn=this.$store.getters.loginStatus},select:function(){this.adding=this.$store.getters.isSelect},getAdded:function(){this.added=this.$store.getters.getItems}},watch:{search:function(){return this.$store.getters.searchBar},param:function(){},show:function(){this.searched=!1},checkLogin:function(){this.loggedIn=this.$store.getters.loginStatus},select:function(){this.adding=this.$store.getters.isSelect},getAdded:function(){this.added=this.$stores.getters.getItems}}},C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search"},[1==t.show?s("div",{staticClass:"modal is-active"},[s("div",{staticClass:"modal-background"}),t._v(" "),s("div",{staticClass:"modal-card"},[s("header",{staticClass:"modal-card-head"},[s("p",{staticClass:"modal-card-title"},[t._v("Search")]),t._v(" "),s("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:t.closeModal}})]),t._v(" "),s("section",{staticClass:"modal-card-body"},[s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("div",{staticClass:"select is-dark"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.param,expression:"param"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.param=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"artist"}},[t._v("Search artists")]),t._v(" "),s("option",{attrs:{value:"title"}},[t._v("Search titles")])])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.term,expression:"term"}],staticClass:"input",attrs:{type:"text",placeholder:"Search"},domProps:{value:t.term},on:{input:function(e){e.target.composing||(t.term=e.target.value)}}})])])]),t._v(" "),s("a",{staticClass:"button is-primary",on:{click:t.startSearch}},[t._m(0)])])]):t._e(),t._v(" "),s("h2",{staticClass:"searchingNote"},[t._v("Searching "+t._s(this.sParam)+'s for "'+t._s(this.sTerm)+'"')]),s("br"),t._v(" "),s("div",{staticClass:"results"},[t._l(t.results,function(e){return t.results.length>0&&"artist"==t.sParam?s("div",{staticClass:"artistResults"},[s("a",{staticClass:"artistLink",on:{click:function(s){0==t.subResults.length||t.selected==t.subResults[0].artist?t.getArtistSongs(e.name):t.clearSubResults()}}},[s("h1",[t._v("\n      "+t._s(e.name)+" \n      "),t.subResults.length>0&&t.subResults[0].artist==e.name?s("span",{staticClass:"mdi mdi-24px mdi-arrow-down-drop-circle"}):s("span",{staticClass:"mdi mdi-24px mdi-arrow-right-drop-circle"})])]),t._v(" "),t._l(t.subResults,function(n){return t.subResults.length>0&&t.subResults[0].artist==e.name?s("div",{staticClass:"artistSongs"},[s("h2",[1!=t.adding||t.added.includes(n)?1==t.adding&&t.added.includes(n)?s("a",{staticClass:"removebutton",on:{click:function(e){return t.removeSong(n)}}},[s("span",{staticClass:"mdi mdi-24px mdi-minus-circle-outline"})]):s("a",[s("span",{staticClass:"mdi mdi-12px mdi-microphone-variant"})]):s("a",{staticClass:"addbutton",on:{click:function(e){return t.addSong(n)}}},[s("span",{staticClass:"mdi mdi-24px mdi-plus-circle-outline"})]),t._v("\n      "+t._s(n.title)+" \n      "),n.notes?s("sub",[t._v("("+t._s(n.notes)+")")]):t._e()])]):t._e()}),s("br")],2):t._e()}),t._v(" "),t._l(t.results,function(e){return t.results.length>0&&"title"==t.sParam?s("div",{staticClass:"titleResults"},[s("h2",[1!=t.adding||t.added.includes(t.sub)?1==t.adding&&t.added.includes(t.sub)?s("a",{staticClass:"removebutton",on:{click:function(e){return t.removeSong(t.sub)}}},[s("span",{staticClass:"mdi mdi-24px mdi-minus-circle-outline"})]):t._e():s("a",{staticClass:"addbutton",on:{click:function(s){return t.addSong(e)}}},[s("span",{staticClass:"mdi mdi-24px mdi-plus-circle-outline"})]),t._v("\n  "+t._s(e.title)+" - "+t._s(e.artist)+"\n  ")]),s("br")]):t._e()}),t._v(" "),0==t.results.length&&1==this.searched?s("div",{staticClass:"placeholder"},[s("h1",[t._v("Couldn't find any "+t._s(t.param)+'s with the search term "'+t._s(t.term)+'".')])]):t._e()],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("strong",[this._v("Search "),e("span",{staticClass:"mdi mdi-12px mdi-magnify"})])}]};var S=s("VU/8")(b,C,!1,function(t){s("XABV")},"data-v-4fbb1ff0",null).exports,E={name:"navbar",data:function(){return{logged:!1,toggled:!1,items:0}},methods:d()({burgerToggle:function(){0==this.toggled?this.toggled=!0:this.toggled=!1},startSearch:function(){console.log("aaa"),console.log(this.beginSearch),this.burgerToggle(),this.openSModal(),this.beginSearch()},logout:function(){localStorage.setItem("loggedIn",!1),this.logout()},login:function(){console.log("Why"),G.push("login")}},Object(i.b)(["beginSearch","openSModal","logout"])),components:{},computed:{checkStatus:function(){this.logged=this.$store.getters.loginStatus}},watch:{checkLogin:function(){this.logged=this.$store.getters.loginStatus}},mounted:function(){this.logged=this.$store.getters.loginStatus}},k={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("nav",{staticClass:"navbar is-dark is-fixed-top",attrs:{role:"navigation","aria-label":"main navigation"}},[s("div",{staticClass:"navbar-brand"},[t._m(0),t._v(" "),s("a",{staticClass:"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},on:{click:t.burgerToggle}},[s("span",{attrs:{"aria-hidden":"true"}}),t._v(" "),s("span",{attrs:{"aria-hidden":"true"}}),t._v(" "),s("span",{attrs:{"aria-hidden":"true"}})])]),t._v(" "),s("div",{staticClass:"navbar-menu",class:{"is-active":t.toggled},attrs:{id:"navbarBasicExample"}},[s("div",{staticClass:"navbar-end"},[s("div",{staticClass:"navbar-item"},[s("a",{staticClass:"button is-primary",on:{click:t.startSearch}},[t._m(1)])])]),t._v(" "),0==t.logged?s("div",{staticClass:"navbar-item"},[t._m(2)]):t._e(),t._v(" "),1==t.logged?s("div",{staticClass:"navbar-item"},[s("a",{staticClass:"button is-light",on:{click:t.logout}},[t._m(3)])]):t._e()])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"navbar-item",attrs:{href:"https://bulma.io"}},[e("img",{attrs:{src:"http://themonkeypub.com/images/mp-header-logo.png",width:"120px"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("strong",[this._v("Search "),e("span",{staticClass:"mdi mdi-12px mdi-magnify"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"button is-light",attrs:{href:"./#/login"}},[e("strong",[this._v("Log in "),e("span",{staticClass:"mdi mdi-12px mdi-lock-open"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("strong",[this._v("Log out "),e("span",{staticClass:"mdi mdi-12px mdi-lock"})])}]};var x=s("VU/8")(E,k,!1,function(t){s("Ct+f")},null,null).exports,y={name:"frontpage",data:function(){return{msg:"Welcome to Your Vue.js App",recentSongs:[]}},mounted:function(){var t=this;_.getRecentSongs().then(function(e){t.recentSongs=e.data})}},A={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"frontpage"},[s("h2",[t._v("Recently added: ")]),s("br"),t._v(" "),t._l(t.recentSongs,function(e){return s("div",[s("h1",[t._v(t._s(e.title)+" - "+t._s(e.artist))]),s("br")])})],2)},staticRenderFns:[]};var T=s("VU/8")(y,A,!1,function(t){s("/2Cr")},null,null).exports,I={name:"adminbar",data:function(){return{opened:!1,editing:!1,deleting:!1,itemCount:0}},methods:d()({toggleTools:function(){0==this.opened?this.opened=!0:(this.opened=!1,this.editing=!1,this.deleting=!1,this.stopSelect(),this.deleteAll())},editDirect:function(){console.log("test"),G.push("edit")},toggleEditing:function(){0==this.editing?(this.editing=!0,this.opened=!1,this.startSelect()):(this.editing=!1,this.opened=!0,this.stopSelect())},toggleDeleting:function(){0==this.deleting?(this.deleting=!0,this.opened=!1,this.startSelect()):(this.deleting=!1,this.opened=!0,this.stopSelect())},goAdd:function(){G.push("add")}},Object(i.b)(["startSelect","stopSelect","itemNumber","deleteAll"])),computed:{getNumItems:function(){this.itemCount=this.$store.getters.itemNumber}},watch:{getNumItems:function(){return this.$store.getters.itemNumber}}},R={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"adminFooter"},[0==this.opened&&0==this.editing&&0==this.deleting?s("nav",{staticClass:"level is-mobile is-fixed-bottom"},[s("div",{staticClass:"level-item has-text-centered adminButton"},[s("a",{staticClass:"button is-primary iconButton",on:{click:t.toggleTools}},[s("span",{staticClass:"mdi mdi-36px mdi-settings"})])])]):t._e(),t._v(" "),1==this.opened?s("nav",{staticClass:"level is-mobile"},[s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("a",{staticClass:"button is-primary iconButton",on:{click:t.goAdd}},[s("span",{staticClass:"mdi mdi-36px mdi-plus"})])])]),t._v(" "),s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("a",{staticClass:"button is-primary iconButton",on:{click:t.toggleEditing}},[s("span",{staticClass:"mdi mdi-36px mdi-circle-edit-outline"})])])]),t._v(" "),s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("a",{staticClass:"button is-primary iconButton",on:{click:t.toggleDeleting}},[s("span",{staticClass:"mdi mdi-36px mdi-delete"})])])]),t._v(" "),s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("a",{staticClass:"button is-primary iconButton",on:{click:t.toggleTools}},[s("span",{staticClass:"mdi mdi-36px mdi-close"})])])])]):t._e(),t._v(" "),1==this.editing?s("nav",{staticClass:"level is-mobile"},[s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("a",{staticClass:"button is-primary",on:{click:t.editDirect}},[t._v("\n\t      Edit "+t._s(t.itemCount)+" items\n\t      ")])])]),t._v(" "),s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("a",{staticClass:"button is-primary",on:{click:t.toggleEditing}},[t._v("\n\t      \tCancel\n\t      ")])])])]):t._e(),t._v(" "),1==this.deleting?s("nav",{staticClass:"level is-mobile"},[s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("a",{staticClass:"button is-primary",attrs:{href:"./#/delete"}},[t._v("\n\t      Delete "+t._s(t.itemCount)+" items\n\t      ")])])]),t._v(" "),s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("a",{staticClass:"button is-primary",on:{click:t.toggleDeleting}},[t._v("\n\t      \tCancel\n\t      ")])])])]):t._e()])},staticRenderFns:[]};var $=s("VU/8")(I,R,!1,function(t){s("TR3x")},null,null).exports,w={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App",searching:"",loggedIn:!1}},methods:d()({},Object(i.b)(["login"])),components:{search:S,navbar:x,frontpage:T,adminbar:$},computed:{search:function(){this.searching=this.$store.getters.searchStatus},log:function(){this.loggedIn=this.$store.getters.loginStatus}},watch:{search:function(){return this.$store.getters.searchStatus},log:function(){return this.$store.getters.loginStatus}},mounted:function(){this.loggedIn=this.$store.getters.loginStatus},created:function(){1==localStorage.getItem("loggedIn")&&this.login()}},M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("navbar"),this._v(" "),"search"==this.searching?e("div",[e("search")],1):e("div",[e("frontpage")],1),this._v(" "),1==this.loggedIn?e("div",[e("adminbar")],1):this._e()],1)},staticRenderFns:[]};var B=s("VU/8")(w,M,!1,function(t){s("AcKk")},null,null).exports,V={name:"login",data:function(){return{msg:"Welcome to Your Vue.js App",data:{username:"",password:""}}},methods:d()({log:function(t){var e=this;_.adminLog(t).then(function(t){console.log(t),"failure"==t.data.status?console.log("nope"):(localStorage.setItem("loggedIn",!0),console.log("aaa"),e.login(),e.$router.push(e.$route.query.redirect||"./"))})}},Object(i.b)(["login","logout"]))},N={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Username")]),t._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.data.username,expression:"data.username"}],staticClass:"input",attrs:{type:"text",placeholder:""},domProps:{value:t.data.username},on:{input:function(e){e.target.composing||t.$set(t.data,"username",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Password")]),t._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.data.password,expression:"data.password"}],staticClass:"input",attrs:{type:"password",placeholder:""},domProps:{value:t.data.password},on:{input:function(e){e.target.composing||t.$set(t.data,"password",e.target.value)}}})])]),t._v(" "),s("a",{staticClass:"button is-primary",on:{click:function(e){return t.log(t.data)}}},[s("b",[t._v("Login")])])])},staticRenderFns:[]};var L=s("VU/8")(V,N,!1,function(t){s("iFfZ")},null,null).exports,O={name:"deleteform",data:function(){return{items:[]}},methods:d()({sendDeletions:function(){}},Object(i.b)(["deleteAll"])),mounted:function(){this.items=this.$store.getters.getItems}},U={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\nDeleting\n")])},staticRenderFns:[]};var D=s("VU/8")(O,U,!1,function(t){s("/A4r")},"data-v-06fdfcc6",null).exports,F={name:"editform",data:function(){return{items:[]}},methods:d()({sendEdits:function(){}},Object(i.b)(["deleteAll"])),mounted:function(){this.items=this.$store.getters.getItems}},P={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"edit"},[s("h1",[t._v("Editing Artists/Titles")]),s("br"),t._v(" "),t._l(t.items,function(e){return s("div",[s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Song ID: "+t._s(e.id))]),t._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.artist,expression:"item.artist"}],staticClass:"input",attrs:{type:"text",placeholder:""},domProps:{value:e.artist},on:{input:function(s){s.target.composing||t.$set(e,"artist",s.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"item.title"}],staticClass:"input",attrs:{type:"text",placeholder:""},domProps:{value:e.title},on:{input:function(s){s.target.composing||t.$set(e,"title",s.target.value)}}})]),s("br")])])}),t._v(" "),s("a",{staticClass:"button is-primary"},[t._v("\n  \tSubmit changes on "+t._s(t.items.length)+" songs\n  ")])],2)},staticRenderFns:[]};var j=s("VU/8")(F,P,!1,function(t){s("84Ku")},"data-v-229998a0",null).exports,W={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\nAdding\n")])},staticRenderFns:[]};var H=s("VU/8")({name:"addingform",data:function(){return{items:[]}},methods:{}},W,!1,function(t){s("M3k8")},"data-v-430a7ac6",null).exports;n.default.use(l.a);var G=new l.a({routes:[{path:"/",name:"HelloWorld",component:B},{path:"/login",name:"login",component:L},{path:"/delete",name:"delete",component:D},{path:"/edit",name:"edit",component:j},{path:"/add",name:"add",component:H}]});s("GK12");n.default.config.productionTip=!1,n.default.use(o.a),n.default.use(i.a);var K=new i.a.Store({state:{status:"frontpage",searchBar:!0,selecting:!1,loggedIn:!1,items:[]},mutations:{SET_USE_CONTEXT:function(t,e){t.status=e},GET_SEARCH_BAR:function(t){t.searchBar=!0},LEAVE_SEARCH_BAR:function(t){t.searchBar=!1},SET_LOGIN_STATUS:function(t,e){t.loggedIn=e},ADD_ITEM:function(t,e){t.items.push(e)},REMOVE_ITEM:function(t,e){t.items.splice(t.items.indexOf(e),1)},SELECT_ITEMS:function(t,e){t.selecting=e},REMOVE_ALL_ITEMS:function(t){t.items=[]}},actions:{beginSearch:function(t){t.commit("SET_USE_CONTEXT","search")},openSModal:function(t){t.commit("GET_SEARCH_BAR")},closeSModal:function(t){t.commit("LEAVE_SEARCH_BAR")},frontPage:function(t){t.commit("SET_USE_CONTEXT","front")},login:function(t){t.commit("SET_LOGIN_STATUS",!0)},logout:function(t){t.commit("SET_LOGIN_STATUS",!1)},startSelect:function(t){t.commit("SELECT_ITEMS",!0)},stopSelect:function(t){t.commit("SELECT_ITEMS",!1)},addItem:function(t,e){t.commit("ADD_ITEM",e)},removeItem:function(t,e){t.commit("REMOVE_ITEM",e)},deleteAll:function(t){t.commit("REMOVE_ALL_ITEMS")}},getters:{searchStatus:function(t){return t.status},searchBar:function(t){return t.searchBar},loginStatus:function(t){return t.loggedIn},getItems:function(t){return t.items},itemNumber:function(t){return t.items.length},isSelect:function(t){return t.selecting}}});e.default=K;new n.default({el:"#app",router:G,components:{App:c},template:"<App/>",store:K})},TR3x:function(t,e){},XABV:function(t,e){},evzb:function(t,e){},iFfZ:function(t,e){}},["NHnr"]);