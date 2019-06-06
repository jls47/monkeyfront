webpackJsonp([1],{"0UbK":function(t,e){},1628:function(t,e){},"2UEi":function(t,e){},"2wAp":function(t,e){},DhQs:function(t,e){},FNn4:function(t,e){},GK12:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),n=s("NYxO"),a=s("3EgV"),o=s.n(a),r=s("Dd8w"),c=s.n(r),l=s("Zrlr"),d=s.n(l),u=s("wxAW"),m=s.n(u),g=s("mtWM"),h=s.n(g),v=function(){function t(){d()(this,t)}return m()(t,null,[{key:"createSongs",value:function(t){return console.log(t),h.a.post("https://monkey-back.herokuapp.com/api/songs/",{data:t}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})}},{key:"getRecentSongs",value:function(){var t=this;return h.a.get("https://monkey-back.herokuapp.com/api/songs/r/").then(function(e){return t.songs=e,t.songs.data}).catch(function(t){return t})}},{key:"getSongsByArtist",value:function(t){var e=this;return h.a.get("https://monkey-back.herokuapp.com/api/songs/a/"+t).then(function(t){return e.songs=t,e.songs.data}).catch(function(t){return t})}},{key:"searchSongs",value:function(t){var e=this;return h.a.get("https://monkey-back.herokuapp.com/api/songs/s/"+t).then(function(t){return e.songs=t,e.songs.data}).catch(function(t){return t})}},{key:"editSongs",value:function(t){var e=this;return h.a.put("https://monkey-back.herokuapp.com/api/songs/",t).then(function(t){return e.res=t,e.res}).catch(function(t){return t})}},{key:"searchArtist",value:function(t){var e=this;return h.a.get("https://monkey-back.herokuapp.com/api/artists/s/"+t).then(function(t){return e.artists=t,e.artists.data}).catch(function(t){return t})}},{key:"deleteSongs",value:function(t){return h.a.delete("https://monkey-back.herokuapp.com/api/songs/"+t).then(function(t){return t}).catch(function(t){return t})}},{key:"adminLog",value:function(t){return h.a.get("https://monkey-back.herokuapp.com/api/user",{params:{name:t.username,password:t.password}}).then(function(t){return t}).catch(function(t){return t})}}]),t}(),f={name:"App",methods:c()({},Object(n.b)(["login"])),mounted:function(){console.log("aa")}},p=s("XyMi");var _=function(t){s("0UbK")},b=Object(p.a)(f,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},[],!1,_,null,null).exports,C=s("/ocq"),S=s("BO1k"),E=s.n(S),k={name:"inventoryModal",data:function(){return{items:[]}},methods:c()({removeSong:function(t){this.removeItem(t)},finishEditing:function(){this.toggleInvEdit()},clearInventory:function(){this.deleteAll(),this.toggleInvEdit()}},Object(n.b)(["isSelect","removeItem","getItems","toggleInvEdit","deleteAll"])),computed:{},watch:{items:function(){this.items=this.$store.getters.getItems}},mounted:function(){this.items=this.$store.getters.getItems}};var y=function(t){s("io2D")},I=Object(p.a)(k,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"inventoryModal modal is-active"},[s("div",{staticClass:"modal-background"}),t._v(" "),s("div",{staticClass:"modal-card"},[s("header",{staticClass:"modal-card-head"},[s("p",{staticClass:"modal-card-title"},[t._v("Edit Inventory")]),t._v(" "),s("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:t.finishEditing}})]),t._v(" "),s("section",{staticClass:"modal-card-body"},t._l(t.items,function(e){return s("div",{staticClass:"editingInventory"},[s("h2",[s("a",{staticClass:"removebutton",on:{click:function(s){return t.removeSong(e)}}},[s("span",{staticClass:"mdi mdi-24px mdi-minus-circle-outline"})]),t._v("\n          "+t._s(e.title)+" - "+t._s(e.artist)+" "),e.notes?s("sub",[t._v("("+t._s(e.notes)+")")]):t._e()])])}),0),t._v(" "),s("footer",{staticClass:"modal-card-foot"},[s("button",{staticClass:"button is-primary",on:{click:t.finishEditing}},[s("strong",[t._v("Save")])]),t._v(" "),s("button",{staticClass:"button is-light",on:{click:t.clearInventory}},[t._v("Clear All")])])])])},[],!1,y,"data-v-354faa64",null).exports,A={name:"search",data:function(){return{msg:"Welcome to Your Vue.js App",show:!0,param:"artist",sParam:"artist",selected:"",term:"",sTerm:"",results:[],subResults:[],showingSub:!1,searched:!1,loggedIn:!1,adding:!1,added:[],editingInv:!1,editing:!1}},components:{inventoryModal:I},methods:c()({getArtistSongs:function(t){var e=this;console.log("searching"),this.selected!=t?(this.selected=t,v.getSongsByArtist(t).then(function(t){e.subResults=t.data})):this.clearSubResults()},addAllArtistSongs:function(t){console.log(t);var e=!0,s=!1,i=void 0;try{for(var n,a=E()(this.subResults);!(e=(n=a.next()).done);e=!0){var o=n.value;this.addItem(o)}}catch(t){s=!0,i=t}finally{try{!e&&a.return&&a.return()}finally{if(s)throw i}}},closeModal:function(){this.closeSModal()},clearSubResults:function(){this.subResults=[],this.selected=""},clearInfo:function(){this.results=[],this.subResults=[]},startSearch:function(){var t=this;this.closeModal(),this.sParam=this.param,this.sTerm=this.term,"artist"==this.param?(this.searched=!0,this.setTerm(this.term),this.setParam(this.param),v.searchArtist(this.term).then(function(e){console.log(e),t.results=e.data})):(this.searched=!0,console.log(this.term),v.searchSongs(this.term).then(function(e){t.results=e.data}))},addSong:function(t){console.log(t),this.addItem(t)},removeSong:function(t){this.removeItem(t)}},Object(n.b)(["closeSModal","addItem","isSelect","removeItem","setTerm","setParam","getItems"])),mounted:function(){var t=this;this.editing=!1,this.$store.getters.searchTerm&&this.$store.getters.searchParam&&(this.sTerm=this.$store.getters.searchTerm,"artist"==this.$store.getters.searchParam?v.searchArtist(this.$store.getters.searchTerm).then(function(e){t.results=e.data}):"song"==this.$store.getters.searchParam&&v.searchSongs(this.$store.getters.searchTerm).then(function(e){t.results=e.data}))},computed:{search:function(){this.show=this.$store.getters.searchBar},checkLogin:function(){this.loggedIn=this.$store.getters.loginStatus},select:function(){this.adding=this.$store.getters.isSelect},getAdded:function(){this.added=this.$store.getters.getItems},checkEditing:function(){this.editing=this.$store.getters.isEditing},editInv:function(){this.editingInv=this.$store.getters.isEditing}},watch:{search:function(){return this.$store.getters.searchBar},param:function(){},show:function(){this.searched=!1},checkLogin:function(){this.loggedIn=this.$store.getters.loginStatus},select:function(){this.adding=this.$store.getters.isSelect},getAdded:function(){this.added=this.$stores.getters.getItems},checkEditing:function(){this.editing=this.$store.getters.isEditing},editInv:function(){this.editingInv=this.$store.getters.isEditing}}};var $=function(t){s("DhQs")},x=Object(p.a)(A,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search"},[1==t.editingInv?s("div",[s("inventoryModal")],1):t._e(),t._v(" "),1==t.show&&0==t.editing?s("div",{staticClass:"modal is-active"},[s("div",{staticClass:"modal-background"}),t._v(" "),s("div",{staticClass:"modal-card"},[s("header",{staticClass:"modal-card-head"},[s("p",{staticClass:"modal-card-title"},[t._v("Find Songs")]),t._v(" "),s("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:t.closeModal}})]),t._v(" "),s("section",{staticClass:"modal-card-body"},[s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("div",{staticClass:"select is-dark"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.param,expression:"param"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.param=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"song"}},[t._v("By song title")]),t._v(" "),s("option",{attrs:{value:"artist"}},[t._v("By artist name")])])])]),t._v(" "),s("div",{staticClass:"column is-two-thirds"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.term,expression:"term"}],staticClass:"input",attrs:{type:"text",placeholder:this.param[0].toUpperCase()+this.param.slice(1,this.param.length)+" name"},domProps:{value:t.term},on:{input:function(e){e.target.composing||(t.term=e.target.value)}}})])])])])]),t._v(" "),s("a",{staticClass:"button is-primary searchButton",on:{click:t.startSearch}},[t._m(0)])])]):t._e(),t._v(" "),0==t.editing?s("h2",{staticClass:"searchingNote"},[t._v("Searching "+t._s(this.sParam)+'s for "'+t._s(this.sTerm)+'"')]):t._e(),s("br"),t._v(" "),t.results?s("div",{staticClass:"results"},[t._l(t.results,function(e){return t.results.length>0&&"artist"==t.sParam?s("div",{staticClass:"artistResults"},[s("h1",[s("a",{staticClass:"artistLink",on:{click:function(s){0==t.subResults.length||t.selected==t.subResults[0].artist?t.getArtistSongs(e.name):t.clearSubResults()}}},[t._v("\n      "+t._s(e.name)+" \n      "),t.subResults.length>0&&t.subResults[0].artist==e.name?s("span",{staticClass:"mdi mdi-24px mdi-arrow-down-drop-circle"}):s("span",{staticClass:"mdi mdi-24px mdi-arrow-right-drop-circle"})]),t._v(" "),0!=t.subResults.length&&t.selected==t.subResults[0].artist&&1==t.adding?s("a",{staticClass:"selectAllByArtist",on:{click:function(s){return t.addAllArtistSongs(e.name)}}},[s("span",{staticClass:"mdi mdi-24px mdi-playlist-plus"})]):t._e()]),t._v(" "),s("transition-group",{attrs:{name:"slide-fade",tag:"p"}},t._l(t.subResults,function(i){return t.subResults.length>0&&t.subResults[0].artist==e.name?s("div",{key:i.title,staticClass:"artistSongs"},[s("h2",[1!=t.adding||t.added.includes(i)?1==t.adding&&t.added.includes(i)?s("a",{staticClass:"removebutton",on:{click:function(e){return t.removeSong(i)}}},[s("span",{staticClass:"mdi mdi-24px mdi-minus-circle-outline"})]):s("a",[s("span",{staticClass:"mdi mdi-12px mdi-microphone-variant"})]):s("a",{staticClass:"addbutton",on:{click:function(e){return t.addSong(i)}}},[s("span",{staticClass:"mdi mdi-24px mdi-plus-circle-outline"})]),t._v("\n        "+t._s(i.title)+" \n        "),i.notes?s("sub",[t._v("("+t._s(i.notes)+")")]):t._e()])]):t._e()}),0),s("br")],1):t._e()}),t._v(" "),t._l(t.results,function(e){return t.results.length>0&&"song"==t.sParam?s("div",{staticClass:"titleResults"},[s("h2",[1!=t.adding||t.added.includes(t.sub)?1==t.adding&&t.added.includes(t.sub)?s("a",{staticClass:"removebutton",on:{click:function(e){return t.removeSong(t.sub)}}},[s("span",{staticClass:"mdi mdi-24px mdi-minus-circle-outline"})]):t._e():s("a",{staticClass:"addbutton",on:{click:function(s){return t.addSong(e)}}},[s("span",{staticClass:"mdi mdi-24px mdi-plus-circle-outline"})]),t._v("\n  "+t._s(e.title)+" - "+t._s(e.artist)+"\n  ")]),s("br")]):t._e()}),t._v(" "),0==t.results.length&&1==this.searched?s("div",{staticClass:"placeholder"},[s("h1",[t._v("Couldn't find any "+t._s(t.param)+'s with the search term "'+t._s(t.term)+'".')])]):t._e()],2):t._e()])},[function(){var t=this.$createElement,e=this._self._c||t;return e("strong",[this._v("Search "),e("span",{staticClass:"mdi mdi-12px mdi-magnify"})])}],!1,$,"data-v-e7efb698",null).exports,T={name:"navbar",data:function(){return{logged:"",toggled:!1,items:0}},methods:c()({burgerToggle:function(){0==this.toggled?this.toggled=!0:this.toggled=!1},startSearch:function(){console.log("aaa"),console.log(this.beginSearch),this.burgerToggle(),this.openSModal(),this.beginSearch()},logoutOnClick:function(){console.log("logging out"),localStorage.setItem("loginDetails",""),localStorage.setItem("loginStatus","false"),this.logged=!1,this.logout()},loginClick:function(){console.log("Why"),tt.push("login")},checkLogged:function(){0==this.logged&&localStorage.getItem("loginDetails")?"false"!=localStorage.getItem("loginStatus")&&(this.logged=!0):0==this.logged&&1==this.$store.getters.loginStatus&&(this.logged=!0)}},Object(n.b)(["beginSearch","openSModal","logout","login"])),components:{},computed:{checkStatus:function(){this.logged=this.$store.getters.loginStatus}},watch:{checkLogin:function(){this.logged=this.$store.getters.loginStatus}},mounted:function(){this.checkLogged(),console.log(localStorage.getItem("loginDetails")),localStorage.getItem("loginStatus")&&"true"==localStorage.getItem("loginStatus")&&(console.log(localStorage.getItem("loginDetails")),this.login(),this.logged=!0)},updated:function(){this.logged=this.$store.getters.loginStatus}};var w=function(t){s("zZ7V")},R=Object(p.a)(T,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{on:{mouseover:t.checkLogged}},[s("nav",{staticClass:"navbar is-dark is-fixed-top",attrs:{role:"navigation","aria-label":"main navigation"}},[s("div",{staticClass:"navbar-brand"},[t._m(0),t._v(" "),s("a",{staticClass:"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},on:{click:t.burgerToggle}},[s("span",{attrs:{"aria-hidden":"true"}}),t._v(" "),s("span",{attrs:{"aria-hidden":"true"}}),t._v(" "),s("span",{attrs:{"aria-hidden":"true"}})])]),t._v(" "),s("div",{staticClass:"navbar-menu",class:{"is-active":t.toggled},attrs:{id:"navbarBasicExample"}},[s("div",{staticClass:"navbar-end"},[s("div",{staticClass:"navbar-item"},[s("a",{staticClass:"button is-primary",on:{click:t.startSearch}},[t._m(1)])])]),t._v(" "),0==t.logged?s("div",{staticClass:"navbar-item"},[s("a",{staticClass:"button is-light",on:{click:t.loginClick}},[t._m(2)])]):s("div",{staticClass:"navbar-item"},[s("a",{staticClass:"button is-light",on:{click:t.logoutOnClick}},[t._m(3)])]),t._v(" "),t._m(4)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"navbar-item",attrs:{href:"http://www.themonkeypub.com/"}},[e("img",{attrs:{src:"https://abload.de/img/mp-header-logo1kjt7.png",width:"120px"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("strong",[this._v("Search "),e("span",{staticClass:"mdi mdi-12px mdi-magnify"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("strong",[this._v("Log in "),e("span",{staticClass:"mdi mdi-12px mdi-lock-open"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("strong",[this._v("Log out "),e("span",{staticClass:"mdi mdi-12px mdi-lock"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar-item"},[e("a",{staticClass:"button is-light",attrs:{href:"./"}},[e("strong",[this._v("Home "),e("span",{staticClass:"mdi mdi-12px mdi-home-outline"})])])])}],!1,w,null,null).exports,M={name:"frontpage",data:function(){return{msg:"Welcome to Your Vue.js App",recentSongs:[],adding:!1,added:[],editingInv:!1}},components:{inventoryModal:I},methods:c()({addSong:function(t){console.log(t),this.addItem(t)},removeSong:function(t){this.removeItem(t)}},Object(n.b)(["addItem","removeItem","deleteAll"])),mounted:function(){var t=this;2==performance.navigation.type&&(this.adding=!1),v.getRecentSongs().then(function(e){t.recentSongs=e.data})},computed:{select:function(){this.adding=this.$store.getters.isSelect},getAdded:function(){this.added=this.$store.getters.getItems},editInv:function(){this.editingInv=this.$store.getters.isEditing}},watch:{select:function(){this.adding=this.$store.getters.isSelect},getAdded:function(){this.added=this.$stores.getters.getItems},editInv:function(){this.editingInv=this.$store.getters.isEditing}}};var O=function(t){s("2UEi")},N=Object(p.a)(M,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"frontpage"},[1==t.editingInv?s("div",[s("inventoryModal")],1):t._e(),t._v(" "),s("h2",[t._v("Recently added: ")]),s("br"),t._v(" "),t._l(t.recentSongs,function(e){return s("div",[s("h1",[1!=t.adding||t.added.includes(e)?1==t.adding&&t.added.includes(e)?s("a",{staticClass:"removebutton",on:{click:function(s){return t.removeSong(e)}}},[s("span",{staticClass:"mdi mdi-24px mdi-minus-circle-outline"})]):s("a",[s("span",{staticClass:"mdi mdi-12px mdi-microphone-variant"})]):s("a",{staticClass:"addbutton",on:{click:function(s){return t.addSong(e)}}},[s("span",{staticClass:"mdi mdi-24px mdi-plus-circle-outline"})]),t._v("\n\t\t"+t._s(e.title)+" - "+t._s(e.artist)+" "),e.notes?s("sub",[t._v("("+t._s(e.notes)+")")]):t._e()]),s("br")])})],2)},[],!1,O,null,null).exports,P={name:"adminbar",data:function(){return{editing:!1,deleting:!1,itemCount:0}},methods:c()({editDirect:function(){console.log("test"),tt.push("edit")},deleteDirect:function(){tt.push("delete")},toggleEditing:function(){0==this.editing?(this.editing=!0,this.opened=!1,this.startSelect()):(this.editing=!1,this.opened=!0,this.stopSelect())},toggleDeleting:function(){0==this.deleting?(this.deleting=!0,this.opened=!1,this.startSelect()):(this.deleting=!1,this.opened=!0,this.stopSelect())},goAdd:function(){tt.push("add")},editSelectedItems:function(){console.log("aaa"),this.toggleInvEdit(!0)}},Object(n.b)(["startSelect","stopSelect","itemNumber","deleteAll","toggleInvEdit","beginSearch"])),mounted:function(){this.$store.getters.itemNumber>0&&(this.opened=!0)},computed:{getNumItems:function(){this.itemCount=this.$store.getters.itemNumber}},watch:{getNumItems:function(){return this.$store.getters.itemNumber}}};var D=function(t){s("2wAp")},j={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App",searching:"",loggedIn:"",dataLoaded:!1,editingInv:!1,notifier:!0}},components:{search:x,navbar:R,frontpage:N,adminbar:Object(p.a)(P,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"adminFooter"},[t.itemCount>=1&&0==this.deleting&&0==this.editing?s("div",{staticClass:"adminFooterL1"},[s("a",{staticClass:"changeItems",on:{click:t.editSelectedItems}},[s("span",{staticClass:"tag is-primary"},[t._v(t._s(t.itemCount)+" item(s) in inventory")])])]):t._e(),t._v(" "),s("div",{staticClass:"adminFooterL2"},[0==this.editing&&0==this.deleting?s("nav",{staticClass:"level is-mobile"},[s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("a",{staticClass:"button is-primary iconButton",on:{click:t.goAdd}},[s("span",{staticClass:"mdi mdi-36px mdi-plus"})])])]),t._v(" "),s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("a",{staticClass:"button is-primary iconButton",on:{click:t.toggleEditing}},[s("span",{staticClass:"mdi mdi-36px mdi-circle-edit-outline"})])])]),t._v(" "),s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("a",{staticClass:"button is-primary iconButton",on:{click:t.toggleDeleting}},[s("span",{staticClass:"mdi mdi-36px mdi-delete"})])])])]):t._e(),t._v(" "),1==this.editing?s("nav",{staticClass:"level is-mobile"},[s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("a",{staticClass:"button is-primary",on:{click:t.editDirect}},[t._v("\n\t      Edit "+t._s(t.itemCount)+" items\n\t      ")])])]),t._v(" "),s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("a",{staticClass:"button is-primary",on:{click:t.toggleEditing}},[t._v("\n\t      \tCancel\n\t      ")])])])]):t._e(),t._v(" "),1==this.deleting?s("nav",{staticClass:"level is-mobile"},[s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("a",{staticClass:"button is-primary",attrs:{href:"./#/delete"}},[t._v("\n\t      Delete "+t._s(t.itemCount)+" items\n\t      ")])])]),t._v(" "),s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("a",{staticClass:"button is-primary",on:{click:t.toggleDeleting}},[t._v("\n\t      \tCancel\n\t      ")])])])]):t._e()])])},[],!1,D,null,null).exports,inventoryModal:I},methods:{closeNotifier:function(){this.notifier=!1}},computed:{search:function(){this.searching=this.$store.getters.searchStatus},login:function(){this.loggedIn=this.$store.getters.loginStatus},editInv:function(){this.editingInv=this.$store.getters.isEditing}},watch:{search:function(){return this.$store.getters.searchStatus},login:function(){return this.$store.getters.loginStatus},editInv:function(){return this.$store.getters.isEditing}},mounted:function(){this.loggedIn=this.$store.getters.loginStatus}};var B=function(t){s("S+66")},L=Object(p.a)(j,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",[s("navbar")],1),t._v(" "),"search"==t.searching?s("div",[s("search")],1):s("div",[s("div",{staticClass:"columns searchHint"},[s("div",{staticClass:"column is-three-fifths"}),t._v(" "),s("div",{staticClass:"column"},[1==t.notifier?s("div",{staticClass:"notification is-primary"},[s("button",{staticClass:"delete",on:{click:t.closeNotifier}}),t._v(" "),t._m(0)]):t._e()])]),t._v(" "),t._m(1),s("br"),t._v(" "),s("frontpage")],1),t._v(" "),1==t.loggedIn?s("div",[s("adminbar")],1):t._e()])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[this._v("Search for songs here "),e("i",{staticClass:"mdi mdi-24px mdi-chevron-up"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"hero is-primary"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container pubInfo"},[e("h1",{staticClass:"title"},[this._v("\n        Welcome to the Monkey Pub\n      ")]),this._v(" "),e("h2",{staticClass:"subtitle"},[this._v("\n        Check out the recently added songs or go hunting for your favorites!  Search by artist or song title.\n      ")])])])])}],!1,B,null,null).exports,H=s("mvHQ"),V=s.n(H),U={name:"login",data:function(){return{msg:"Welcome to Your Vue.js App",data:{name:"",password:""},checked:!1,error:!1}},methods:c()({log:function(t){var e=this;v.adminLog(t).then(function(t){console.log(t),"failure"==t.data.status?console.log("nope"):(1==e.checked&&(localStorage.setItem("loginDetails",V()(e.data)),localStorage.setItem("loginStatus","true")),console.log("aaa"),e.login().then(function(){e.$router.push(e.$route.query.redirect||"./")}))})}},Object(n.b)(["login","logout"]))};var W=function(t){s("1628")},F=Object(p.a)(U,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[s("h1",[t._v("Admin Login")]),t._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Username")]),t._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.data.username,expression:"data.username"}],staticClass:"input",attrs:{type:"text",placeholder:""},domProps:{value:t.data.username},on:{input:function(e){e.target.composing||t.$set(t.data,"username",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Password")]),t._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.data.password,expression:"data.password"}],staticClass:"input",attrs:{type:"password",placeholder:""},domProps:{value:t.data.password},on:{input:function(e){e.target.composing||t.$set(t.data,"password",e.target.value)}}})])]),t._v(" "),s("label",{staticClass:"checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"checked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.checked)?t._i(t.checked,null)>-1:t.checked},on:{change:function(e){var s=t.checked,i=e.target,n=!!i.checked;if(Array.isArray(s)){var a=t._i(s,null);i.checked?a<0&&(t.checked=s.concat([null])):a>-1&&(t.checked=s.slice(0,a).concat(s.slice(a+1)))}else t.checked=n}}}),t._v("\n    Remember me\n  ")]),s("br"),t._v(" "),s("a",{staticClass:"button is-primary",on:{click:function(e){return t.log(t.data)}}},[s("b",[t._v("Login")])])])},[],!1,W,"data-v-69dce98f",null).exports,G={name:"deleteform",data:function(){return{items:[]}},methods:c()({sendDeletions:function(t){var e=this,s="",i=!0,n=!1,a=void 0;try{for(var o,r=E()(this.items);!(i=(o=r.next()).done);i=!0){var c=o.value;console.log(c.id),s+=c.id+","}}catch(t){n=!0,a=t}finally{try{!i&&r.return&&r.return()}finally{if(n)throw a}}console.log(s),v.deleteSongs(s.substring(0,s.length-1)).then(function(t){e.deleteAll(),e.frontPage(),console.log(t),e.$router.push("./")}).catch(function(t){console.log(t)})},cancelDeletions:function(t){this.frontPage(),this.$router.push("./")}},Object(n.b)(["deleteAll","frontPage"])),mounted:function(){this.items=this.$store.getters.getItems;this.$store.getters.getItems}};var Y=function(t){s("ZwVj")},Z=Object(p.a)(G,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"deleting"},[s("h1",[t._v("Are you sure you wish to delete all of these?")]),s("br"),t._v(" "),t._l(t.items,function(e){return s("div",[s("h2",[t._v(t._s(e.artist)+" - "+t._s(e.title))])])}),s("br"),s("br"),t._v(" "),s("div",{staticClass:"yesNo"},[s("nav",{staticClass:"level is-mobile is-fixed-bottom"},[s("div",{staticClass:"level-item has-text-centered"},[s("a",{staticClass:"button is-primary yesNoButton",on:{click:function(e){return t.sendDeletions(t.items)}}},[t._v("\n          Delete\n        ")])]),t._v(" "),s("div",{staticClass:"level-item has-text-centered"},[s("a",{staticClass:"button is-primary yesNoButton",on:{click:function(e){return t.cancelDeletions(t.items)}}},[t._v("\n          Cancel\n        ")])])])])],2)},[],!1,Y,"data-v-30d3ec96",null).exports,K={name:"editform",data:function(){return{items:[]}},methods:c()({sendEdits:function(t){var e=this,s=V()(t);console.log(s),v.editSongs(t).then(function(t){console.log(t),console.log(t.data),"success"==t.data.status&&(console.log("success!"),e.deleteAll(),e.frontPage(),e.$router.push("./"))})},cancelEdits:function(){this.$router.push("./")}},Object(n.b)(["deleteAll","frontPage"])),mounted:function(){this.items=this.$store.getters.getItems}};var X=function(t){s("FNn4")},Q=Object(p.a)(K,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"edit"},[s("h1",[t._v("Editing Artists/Titles")]),s("br"),t._v(" "),t._l(t.items,function(e){return s("div",[s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Song ID: "+t._s(e.id))]),t._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.artist,expression:"item.artist"}],staticClass:"input",attrs:{type:"text",placeholder:""},domProps:{value:e.artist},on:{input:function(s){s.target.composing||t.$set(e,"artist",s.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"item.title"}],staticClass:"input",attrs:{type:"text",placeholder:""},domProps:{value:e.title},on:{input:function(s){s.target.composing||t.$set(e,"title",s.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.notes,expression:"item.notes"}],staticClass:"input",attrs:{type:"text",placeholder:"Add notes?"},domProps:{value:e.notes},on:{input:function(s){s.target.composing||t.$set(e,"notes",s.target.value)}}})]),s("br")])])}),t._v(" "),s("a",{staticClass:"button is-primary",on:{click:function(e){return t.sendEdits(t.items)}}},[t._v("\n  \tSubmit changes on "+t._s(t.items.length)+" songs\n  ")]),t._v(" "),s("a",{staticClass:"button is-primary",on:{click:t.cancelEdits}},[t._v("\n     Cancel\n  ")])],2)},[],!1,X,"data-v-849874d2",null).exports,q={name:"addingform",data:function(){return{data:[{artist:"",title:"",notes:null,new:!0}]}},methods:c()({addData:function(){this.data.push({artist:"",title:"",notes:null})},addByArtist:function(t){this.data.push({artist:t,title:"",notes:null})},removeSong:function(t){this.data.splice(this.data.indexOf(t),1)},submitData:function(){var t=this;v.createSongs(V()(this.data)).then(function(e){t.frontPage(),console.log(e),t.$router.push("./")}).catch(function(t){console.log(t)})},cancelAdding:function(){this.$router.push("./")}},Object(n.b)(["frontPage"]))};var z=function(t){s("you0")},J=Object(p.a)(q,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"addingForm"},[s("h1",[t._v("Add Songs")]),s("br"),t._v(" "),t._l(t.data,function(e){return s("div",{staticClass:"inputs"},[s("div",{staticClass:"columns inputItem"},[s("div",{staticClass:"column inputItem"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.artist,expression:"item.artist"}],staticClass:"input",attrs:{type:"text",placeholder:"Artist"},domProps:{value:e.artist},on:{input:function(s){s.target.composing||t.$set(e,"artist",s.target.value)}}})]),t._v(" "),s("div",{staticClass:"column inputItem"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"item.title"}],staticClass:"input",attrs:{type:"text",placeholder:"Song"},domProps:{value:e.title},on:{input:function(s){s.target.composing||t.$set(e,"title",s.target.value)}}})])]),t._v(" "),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-half inputItem"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.notes,expression:"item.notes"}],staticClass:"input",attrs:{type:"text",placeholder:"Notes (optional)"},domProps:{value:e.notes},on:{input:function(s){s.target.composing||t.$set(e,"notes",s.target.value)}}})]),t._v(" "),s("div",{staticClass:"column inputItem"},[s("a",{staticClass:"addByArtist button is-primary",on:{click:function(s){return t.addByArtist(e.artist)}}},[t._v("\n          Add another song by this artist\n        ")])]),t._v(" "),s("div",{staticClass:"column"},[t.data.indexOf(e)>0?s("a",{staticClass:"removeSong button is-danger",on:{click:function(s){return t.removeSong(e)}}},[t._v("\n          Remove Song\n        ")]):t._e()])]),t._v(" "),s("br"),s("br")])}),t._v(" "),s("a",{staticClass:"button is-primary",on:{click:t.addData}},[s("strong",[t._v("Add another Song")])]),s("br"),s("br"),t._v(" "),s("a",{staticClass:"button is-primary",on:{click:t.submitData}},[s("strong",[t._v("Submit")])]),t._v(" "),s("a",{staticClass:"button is-primary",on:{click:t.cancelAdding}},[t._v("\n     Cancel\n  ")])],2)},[],!1,z,"data-v-c6baf162",null).exports;i.default.use(C.a);var tt=new C.a({routes:[{path:"/",name:"HelloWorld",component:L},{path:"/login",name:"login",component:F},{path:"/delete",name:"delete",component:Z},{path:"/edit",name:"edit",component:Q},{path:"/add",name:"add",component:J}]});s("GK12");i.default.config.productionTip=!1,i.default.use(o.a),i.default.use(n.a);var et=new n.a.Store({state:{status:"frontpage",searchBar:!0,selecting:!1,loggedIn:!1,items:[],searchingFor:"",searchParam:"",editingItems:!1},mutations:{SET_USE_CONTEXT:function(t,e){t.status=e},GET_SEARCH_BAR:function(t){t.searchBar=!0},LEAVE_SEARCH_BAR:function(t){t.searchBar=!1},SET_LOGIN_STATUS:function(t,e){t.loggedIn=e},ADD_ITEM:function(t,e){t.items.push(e)},REMOVE_ITEM:function(t,e){t.items.splice(t.items.indexOf(e),1)},SELECT_ITEMS:function(t,e){t.selecting=e},REMOVE_ALL_ITEMS:function(t){t.items=[]},SET_SEARCH_TERM:function(t,e){t.searchingFor=e},SET_SEARCH_PARAM:function(t,e){t.searchParam=e},SET_ITEM_EDITING:function(t,e){t.editingItems=e}},actions:{beginSearch:function(t){t.commit("SET_USE_CONTEXT","search")},openSModal:function(t){t.commit("GET_SEARCH_BAR")},closeSModal:function(t){t.commit("LEAVE_SEARCH_BAR")},frontPage:function(t){t.commit("SET_USE_CONTEXT","front")},login:function(t){t.commit("SET_LOGIN_STATUS",!0)},logout:function(t){t.commit("SET_LOGIN_STATUS",!1)},startSelect:function(t){t.commit("SELECT_ITEMS",!0)},stopSelect:function(t){t.commit("SELECT_ITEMS",!1)},addItem:function(t,e){t.commit("ADD_ITEM",e)},removeItem:function(t,e){t.commit("REMOVE_ITEM",e)},deleteAll:function(t){t.commit("REMOVE_ALL_ITEMS")},setTerm:function(t,e){t.commit("SET_SEARCH_TERM",e)},setParam:function(t,e){t.commit("SET_SEARCH_PARAM",e)},toggleInvEdit:function(t,e){t.commit("SET_ITEM_EDITING",e)}},getters:{searchStatus:function(t){return t.status},searchBar:function(t){return t.searchBar},loginStatus:function(t){return t.loggedIn},getItems:function(t){return t.items},itemNumber:function(t){return t.items.length},isSelect:function(t){return t.selecting},searchTerm:function(t){return t.searchingFor},searchParam:function(t){return t.searchParam},isEditing:function(t){return t.editingItems}}});e.default=et;new i.default({el:"#app",router:tt,components:{App:b},template:"<App/>",store:et})},"S+66":function(t,e){},ZwVj:function(t,e){},io2D:function(t,e){},you0:function(t,e){},zZ7V:function(t,e){}},["NHnr"]);