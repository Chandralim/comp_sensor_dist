(window.webpackJsonp=window.webpackJsonp||[]).push([[47,9,17],{290:function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));var n=r(291),o=r(292),c=r(123),l=r(293);function d(t){return n(t)||o(t)||c(t)||l()}},291:function(t,e,r){var n=r(189);t.exports=function(t){if(Array.isArray(t))return n(t)},t.exports.default=t.exports,t.exports.__esModule=!0},292:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)},t.exports.default=t.exports,t.exports.__esModule=!0},293:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},295:function(t,e,r){var content=r(312);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("a29dd9ea",content,!0,{sourceMap:!1})},296:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(120),r(321),r(13),r(49),r(322),r(323),r(324),r(325),r(326),r(327),r(328),r(329),r(330),r(331),r(332),r(333),r(334),r(335),r(336),r(337),r(338),r(339),r(340),r(341),r(342),r(343),r(344),r(345),r(63),r(191);function n(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:512,n=atob(t),o=[],c=0;c<n.length;c+=r){for(var l=n.slice(c,c+r),d=new Array(l.length),i=0;i<l.length;i++)d[i]=l.charCodeAt(i);var f=new Uint8Array(d);o.push(f)}var v=new Blob(o,{type:e});return v}function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"download";e=t.filename||e;var r=n(t.data,t.contentType),o=URL.createObjectURL(r),c=document.createElement("a");c.href=o,c.download=e,document.body.appendChild(c),c.click(),document.body.removeChild(c)}},303:function(t,e,r){"use strict";r.r(e);r(22);var n=r(4),o=r(10),c=r(12);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={props:["title"],data:function(){return{popup:!1}},methods:d(d(d({},Object(c.b)(["SET_TOGGLE_MENU"])),Object(c.b)(["SET_LOADING"])),{},{logout:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.SET_LOADING(!0),e.prev=1,e.next=4,t.$auth.logout();case 4:e.sent,e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:return e.prev=9,t.SET_LOADING(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[1,7,9,12]])})))()},close_popup:function(t){t.target.classList.contains("btn_pu")||(this.popup=!1)}})},v=(r(311),r(9)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"myHeader",staticStyle:{"background-color":"#437FC7"}},[r("div",{staticClass:"bar-menu-icon",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.SET_TOGGLE_MENU(!0)}}},[r("fa",{staticStyle:{"font-size":"25px"},attrs:{icon:["fas","bars"]}})],1),t._v(" "),r("div",{staticStyle:{"flex-grow":"1","padding-left":"10px"}},[t._v("\n    "+t._s(t.title||"")+"\n  ")]),t._v(" "),r("div",{staticClass:"h-100 d-flex align-items-center",staticStyle:{width:"125px",position:"relative",cursor:"pointer"},on:{click:function(e){t.popup=!t.popup}}},[r("div",{staticClass:"d-flex align-items-center justify-content-center",staticStyle:{border:"solid 2px white","border-radius":"30px",width:"30px",height:"30px"}},[r("fa",{staticStyle:{"font-size":"20px",color:"white"},attrs:{icon:["fas","user"]}})],1),t._v(" "),r("div",{staticStyle:{padding:"0px 5px"}},[t._v("\n      "+t._s(t.$auth.user.username)+"\n    ")])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.popup,expression:"popup"}],staticStyle:{width:"100%",height:"100%",position:"fixed",top:"0px",left:"0px","z-index":"6px"},on:{click:function(e){return t.close_popup(e)}}},[r("ul",{staticStyle:{"margin-top":"39px",cursor:"pointer"}},[r("li",{staticClass:"btn_pu",on:{click:function(e){return t.$router.push("/profile")}}},[t._v("Change Password")]),t._v(" "),r("li",{staticClass:"btn_pu",on:{click:function(e){return t.logout()}}},[t._v("Logout")])])])])}),[],!1,null,"2b16c6a5",null);e.default=component.exports},311:function(t,e,r){"use strict";r(295)},312:function(t,e,r){var n=r(17)(!1);n.push([t.i,".myHeader[data-v-2b16c6a5]{width:100%;min-height:40px;display:flex;align-items:center;background:var(--primary-color);color:#fff;font-size:1.2em}ul[data-v-2b16c6a5]{float:right;padding:0}ul li[data-v-2b16c6a5]{list-style:none;padding:5px;margin:2px 0;background:#353a40}.bar-menu-icon[data-v-2b16c6a5]{padding-left:10px;display:block}",""]),t.exports=n},473:function(t,e,r){var content=r(542);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("af0316aa",content,!0,{sourceMap:!1})},541:function(t,e,r){"use strict";r(473)},542:function(t,e,r){var n=r(17)(!1);n.push([t.i,"table.sticky thead th[data-v-7a5cf47d]:nth-child(2){position:-webkit-sticky;position:sticky;left:0;z-index:2}table.sticky thead tr[data-v-7a5cf47d]{top:0}",""]),t.exports=n},658:function(t,e,r){"use strict";r.r(e);r(79);var n=r(10),o=r(290),c=(r(22),r(4)),l=r(12),d=r(303);r(296);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var v={layout:"staff/defaultSide",middleware:["auth-user",function(t){var e=t.$auth,r=t.redirect;t.store,t.route;e.hasScope("Super_Admin")||r("/dashboard")}],components:{AppHeader:d.default},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.store.commit("SET_LOADING",!0),r=[],e.next=4,t.app.$axios.$get("/air_limbah_sensors",{sort:"updated_at:desc"}).then((function(t){r=t.data})).catch((function(e){t.store.dispatch("error/errAct",e)})).then((function(){}));case 4:return t.store.commit("SET_LOADING",!1),e.abrupt("return",{air_limbah_sensors:r});case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{params:{},id:"",token:"",location_name:"",is_search_form_on:!0,air_limbah_sensors:[],search:"",action:"Tambah",selected:-1,scrolling:{page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0},sort:{field:"",by:"asc"}}},methods:{inject_params:function(){var t,e,r;this.params._TimeZoneOffset=(new Date).getTimezoneOffset(),this.params.sort="",this.sort.field&&(this.params.sort=this.sort.field+":"+this.sort.by),this.params.id=null!==(t=this.id)&&void 0!==t?t:"",this.params.token=null!==(e=this.token)&&void 0!==e?e:"",this.params.location_name=null!==(r=this.location_name)&&void 0!==r?r:""},start:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$store.commit("SET_LOADING",!0),t.scrolling.may_get_data=!1,t.params.page=t.scrolling.page,1==t.params.page&&(t.air_limbah_sensors=[]),e.next=6,t.$axios.$get("/air_limbah_sensors",{params:t.params}).then((function(e){1==t.scrolling.page?(t.air_limbah_sensors=e.data,t.$nextTick((function(){t.$refs.loadRef&&(t.$refs.loadRef.scrollTop=0)}))):t.scrolling.page>1&&(t.air_limbah_sensors=[].concat(Object(o.a)(t.air_limbah_sensors),Object(o.a)(e.data))),0==e.data.length&&(t.scrolling.is_last_record=!0)})).catch((function(e){t.$store.dispatch("error/errAct",e)}));case 6:t.scrolling.may_get_data=!0,t.$store.commit("SET_LOADING",!1);case 8:case"end":return e.stop()}}),e)})))()},searching:function(){this.scrolling.page=1,this.scrolling.is_last_record=!1,this.inject_params(),this.start()},form_add:function(){this.$router.push({name:"staff-air_limbah_sensor-form",query:{id:""}})},form_edit:function(){-1==this.selected?this.$store.commit("alert/SET_ALERT",{show:!0,status:"Gagal",message:"Silahkan Pilih Data Terlebih Dahulu"}):this.$router.push({name:"staff-air_limbah_sensor-form",query:{id:this.air_limbah_sensors[this.selected].id}})},loadMore:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.scrolling.may_get_data){e.next=2;break}return e.abrupt("return");case 2:if((r=t.$refs.loadRef).scrollLeft==t.scrolling.scrollLeft){e.next=6;break}return t.scrolling.scrollLeft=r.scrollLeft,e.abrupt("return");case 6:if(!t.scrolling.is_last_record){e.next=8;break}return e.abrupt("return");case 8:if(Math.round(r.scrollTop)+r.clientHeight>=r.scrollHeight-1){e.next=11;break}return e.abrupt("return");case 11:return t.scrolling.page++,e.next=14,t.start();case 14:case"end":return e.stop()}}),e)})))()}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.c)("error",["errors"]))},_=(r(541),r(9)),component=Object(_.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("AppHeader",{attrs:{title:"List Air Limbah Sensor"}}),t._v(" "),r("div",{staticClass:"w-100 d-flex",staticStyle:{"flex-grow":"1","flex-direction":"column",height:"0px",overflow:"auto"}},[r("div",{staticClass:"w-100 d-flex"},[r("button",{staticStyle:{margin:"4px"},attrs:{type:"button",name:"button"},on:{click:function(e){return t.form_add()}}},[r("fa",{attrs:{icon:["fas","plus"]}})],1),t._v(" "),r("button",{staticStyle:{margin:"4px"},attrs:{type:"button",name:"button"},on:{click:function(e){return t.form_edit()}}},[r("fa",{attrs:{icon:["fas","edit"]}})],1)]),t._v(" "),r("div",{staticClass:"w-100 d-flex",staticStyle:{"flex-flow":"row wrap","align-items":"end"}},[r("div",{staticClass:"d-flex",staticStyle:{"flex-grow":"1",width:"0px","flex-flow":"row wrap"}},[r("div",{staticClass:"col-12 col-xs-3 col-sm-3 col-md-3",staticStyle:{padding:"4px"}},[r("label",[t._v("Token")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.token,expression:"token"}],staticClass:"form-control w-100",attrs:{type:"text",placeholder:"Token"},domProps:{value:t.token},on:{input:function(e){e.target.composing||(t.token=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-12 col-xs-3 col-sm-3 col-md-3",staticStyle:{padding:"4px"}},[r("label",[t._v("Nama Lokasi")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.location_name,expression:"location_name"}],staticClass:"form-control w-100",attrs:{type:"text",placeholder:"Nama Lokasi"},domProps:{value:t.location_name},on:{input:function(e){e.target.composing||(t.location_name=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-12 col-xs-3 col-sm-3 col-md-3",staticStyle:{padding:"4px"}},[r("div",{staticClass:"title"},[t._v(" Sort By ")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.sort.field,expression:"sort.field"}],staticClass:"w-100",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.sort,"field",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}}),t._v(" "),r("option",{attrs:{value:"id"}},[t._v("ID")]),t._v(" "),r("option",{attrs:{value:"token"}},[t._v("Token")]),t._v(" "),r("option",{attrs:{value:"location_is_tenant"}},[t._v(" Location Is Tenant ")]),t._v(" "),r("option",{attrs:{value:"location_grup"}},[t._v(" Location Grup")]),t._v(" "),r("option",{attrs:{value:"location_name"}},[t._v(" Location Name ")])])]),t._v(" "),r("div",{staticClass:"col-12 col-xs-3 col-sm-3 col-md-3",staticStyle:{padding:"4px"}},[r("div",{staticClass:"title"},[t._v(" Sort Order ")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.sort.by,expression:"sort.by"}],staticClass:"w-100",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.sort,"by",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"asc"}},[t._v("Asc")]),t._v(" "),r("option",{attrs:{value:"desc"}},[t._v("Desc")])])])]),t._v(" "),r("button",{staticStyle:{margin:"4px"},attrs:{type:"button",name:"button"},on:{click:function(e){return t.searching()}}},[r("fa",{attrs:{icon:["fas","search"]}})],1)]),t._v(" "),r("div",{staticClass:"d-flex justify-content-center align-items-center",staticStyle:{"flex-grow":"1",height:"0px",padding:"4px"}},[0==t.air_limbah_sensors.length?r("div",{},[t._v("\n        Maaf Tidak Ada Record\n      ")]):r("div",{ref:"loadRef",attrs:{role:"sticky"},on:{scroll:t.loadMore}},[r("table",{staticClass:"sticky"},[t._m(0),t._v(" "),r("tbody",t._l(t.air_limbah_sensors,(function(e,n){return r("tr",{key:n,class:t.selected==n?"active":"",on:{click:function(e){t.selected=n}}},[r("td",[t._v(t._s(n+1)+".")]),t._v(" "),r("th",{staticClass:"bold"},[t._v(t._s(e.id))]),t._v(" "),r("td",{staticStyle:{"white-space":"normal","word-break":"break-all"}},[r("div",{staticStyle:{width:"500px","text-align":"left"}},[t._v(" "+t._s(e.token)+" ")])]),t._v(" "),r("td",[t._v(t._s(e.qmax))]),t._v(" "),r("td",[t._v(t._s(e.location_id))]),t._v(" "),r("td",[t._v(t._s(e.location?e.location.is_tenant?"True":"False":""))]),t._v(" "),r("td",[t._v(t._s(e.location?e.location.grup:""))]),t._v(" "),r("td",[t._v(t._s(e.location?e.location.name:""))]),t._v(" "),r("td",[t._v(t._s(t.$moment(e.created_at).format("DD-MM-Y HH:mm:ss")))]),t._v(" "),r("td",[t._v(t._s(t.$moment(e.updated_at).format("DD-MM-Y HH:mm:ss")))])])})),0)])])])])],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",{staticStyle:{top:"0px"}},[r("th",[t._v("No.")]),t._v(" "),r("th",[t._v("ID ")]),t._v(" "),r("th",[t._v("Token ")]),t._v(" "),r("th",[r("div",{staticStyle:{cursor:"pointer"}},[t._v(" QMax (m3/h)")])]),t._v(" "),r("th",[r("div",{staticStyle:{cursor:"pointer"}},[t._v(" ID Lokasi ")])]),t._v(" "),r("th",[t._v("Is Tenant ")]),t._v(" "),r("th",[t._v("Grup Lokasi ")]),t._v(" "),r("th",[t._v("Nama Lokasi ")]),t._v(" "),r("th",[t._v("Tanggal dibuat")]),t._v(" "),r("th",[t._v("Tanggal diubah")])])])}],!1,null,"7a5cf47d",null);e.default=component.exports;installComponents(component,{AppHeader:r(303).default})}}]);