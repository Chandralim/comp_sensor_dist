(window.webpackJsonp=window.webpackJsonp||[]).push([[54,9],{295:function(t,e,r){var content=r(312);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("9790e248",content,!0,{sourceMap:!1})},296:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(120),r(321),r(13),r(49),r(322),r(323),r(324),r(325),r(326),r(327),r(328),r(329),r(330),r(331),r(332),r(333),r(334),r(335),r(336),r(337),r(338),r(339),r(340),r(341),r(342),r(343),r(344),r(345),r(63),r(191);function n(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:512,n=atob(t),o=[],c=0;c<n.length;c+=r){for(var l=n.slice(c,c+r),d=new Array(l.length),i=0;i<l.length;i++)d[i]=l.charCodeAt(i);var f=new Uint8Array(d);o.push(f)}var m=new Blob(o,{type:e});return m}function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"download";e=t.filename||e;var r=n(t.data,t.contentType),o=URL.createObjectURL(r),c=document.createElement("a");c.href=o,c.download=e,document.body.appendChild(c),c.click(),document.body.removeChild(c)}},303:function(t,e,r){"use strict";r.r(e);r(22);var n=r(4),o=r(10),c=r(12);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={props:["title"],data:function(){return{popup:!1}},methods:d(d(d({},Object(c.b)(["SET_TOGGLE_MENU"])),Object(c.b)(["SET_LOADING"])),{},{logout:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.SET_LOADING(!0),e.prev=1,e.next=4,t.$auth.logout();case 4:e.sent,e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:return e.prev=9,t.SET_LOADING(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[1,7,9,12]])})))()},close_popup:function(t){t.target.classList.contains("btn_pu")||(this.popup=!1)}})},m=(r(311),r(9)),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"myHeader",staticStyle:{"background-color":"#000080"}},[r("div",{staticClass:"bar-menu-icon",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.SET_TOGGLE_MENU(!0)}}},[r("fa",{staticStyle:{"font-size":"25px"},attrs:{icon:["fas","bars"]}})],1),t._v(" "),r("div",{staticStyle:{"flex-grow":"1","padding-left":"10px"}},[t._v("\n    "+t._s(t.title||"")+"\n  ")]),t._v(" "),r("div",{staticClass:"h-100 d-flex align-items-center",staticStyle:{width:"125px",position:"relative",cursor:"pointer"},on:{click:function(e){t.popup=!t.popup}}},[r("div",{staticClass:"d-flex align-items-center justify-content-center",staticStyle:{border:"solid 2px white","border-radius":"30px",width:"30px",height:"30px"}},[r("fa",{staticStyle:{"font-size":"20px",color:"white"},attrs:{icon:["fas","user"]}})],1),t._v(" "),r("div",{staticStyle:{padding:"0px 5px"}},[t._v("\n      "+t._s(t.$auth.user.username)+"\n    ")])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.popup,expression:"popup"}],staticStyle:{width:"100%",height:"100%",position:"fixed",top:"0px",left:"0px","z-index":"6px"},on:{click:function(e){return t.close_popup(e)}}},[r("ul",{staticStyle:{"margin-top":"39px",cursor:"pointer"}},[r("li",{staticClass:"btn_pu",on:{click:function(e){return t.$router.push("/profile")}}},[t._v("Change Password")]),t._v(" "),r("li",{staticClass:"btn_pu",on:{click:function(e){return t.logout()}}},[t._v("Logout")])])])])}),[],!1,null,"69ffba9b",null);e.default=component.exports},311:function(t,e,r){"use strict";r(295)},312:function(t,e,r){var n=r(17)(!1);n.push([t.i,".myHeader[data-v-69ffba9b]{width:100%;min-height:40px;display:flex;align-items:center;background:var(--primary-color);color:#fff;font-size:1.2em}ul[data-v-69ffba9b]{float:right;padding:0}ul li[data-v-69ffba9b]{list-style:none;padding:5px;margin:2px 0;background:#353a40}.bar-menu-icon[data-v-69ffba9b]{padding-left:10px;display:block}",""]),t.exports=n},482:function(t,e,r){var content=r(602);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("2be57675",content,!0,{sourceMap:!1})},601:function(t,e,r){"use strict";r(482)},602:function(t,e,r){var n=r(17)(!1);n.push([t.i,"",""]),t.exports=n},663:function(t,e,r){"use strict";r.r(e);var n=r(10),o=(r(22),r(4)),c=r(12),l=r(303);r(296);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var f={layout:"staff/defaultSide",middleware:["auth-user"],components:{AppHeader:l.default},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.store.commit("SET_LOADING",!0),r={},e.next=4,t.app.$axios.$get("/admin/getInfo").then((function(t){r=t.user})).catch((function(e){t.store.dispatch("error/errAct",e)})).then((function(){}));case 4:return t.store.commit("SET_LOADING",!1),e.abrupt("return",{frm_0:r});case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{frm_1:{old_password:"",password:"",password_confirmation:""}}},created:function(){},methods:{update_password:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$store.commit("error/CLEAR_ERRORS"),t.$store.commit("SET_LOADING",!0),(r=new FormData).append("old_password",t.frm_1.old_password),r.append("password",t.frm_1.password),r.append("password_confirmation",t.frm_1.password_confirmation),r.append("_method","PUT"),e.next=9,t.$axios.$post("/admin/change_password",r).then((function(e){t.$store.commit("alert/SET_ALERT",{show:!0,status:"Berhasil",message:e.message}),t.frm_1={old_password:"",password:"",password_confirmation:""}})).catch((function(e){t.$store.dispatch("error/errAct",e)})).then((function(){t.$store.commit("SET_LOADING",!1)}));case 9:case"end":return e.stop()}}),e)})))()},update_fullname:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$store.commit("error/CLEAR_ERRORS"),t.$store.commit("SET_LOADING",!0),(r=new FormData).append("fullname",t.frm_0.fullname),r.append("_method","PUT"),e.next=7,t.$axios.$post("/admin/change_fullname",r).then((function(e){t.$store.commit("alert/SET_ALERT",{show:!0,status:"Berhasil",message:e.message})})).catch((function(e){t.$store.dispatch("error/errAct",e)})).then((function(){t.$store.commit("SET_LOADING",!1)}));case 7:case"end":return e.stop()}}),e)})))()}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)("error",["errors"]))},m=(r(601),r(9)),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("AppHeader",{attrs:{title:"List Pengguna"}}),t._v(" "),r("div",{staticClass:"w-100",staticStyle:{"flex-grow":"1",overflow:"auto"}},[r("div",{staticStyle:{width:"auto",background:"#fff",margin:"10px"}},[r("div",{staticClass:"w-100 font-weight-bold",staticStyle:{padding:"10px","font-size":"20px",background:"var(--primary-color)",color:"white"}},[t._v("\n        Ubah Nama Identitas\n      ")]),t._v(" "),r("div",{staticStyle:{padding:"10px"}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[t._v("Nama Identitas")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.frm_0.fullname,expression:"frm_0.fullname"}],staticClass:"w-100",attrs:{type:"text",placeholder:""},domProps:{value:t.frm_0.fullname},on:{input:function(e){e.target.composing||t.$set(t.frm_0,"fullname",e.target.value)}}}),t._v(" "),r("p",{staticClass:"help-err"},[t._v(" "+t._s(t.errors.fullname)+" ")])]),t._v(" "),r("div",{staticClass:"form-group d-flex"},[r("button",{staticClass:"btn btn-primary",staticStyle:{"margin-left":"auto"},attrs:{type:"button",name:"button"},on:{click:function(e){return t.update_fullname()}}},[t._v(" Ubah Nama Identitas ")])])])]),t._v(" "),r("div",{staticStyle:{width:"auto",background:"#fff",margin:"10px"}},[r("div",{staticClass:"w-100 font-weight-bold",staticStyle:{padding:"10px","font-size":"20px",background:"var(--primary-color)",color:"white"}},[t._v("\n        Ubah Kata Sandi\n      ")]),t._v(" "),r("div",{staticStyle:{padding:"10px"}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[t._v("Kata Sandi Lama")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.frm_1.old_password,expression:"frm_1.old_password"}],staticClass:"w-100",attrs:{type:"password",placeholder:""},domProps:{value:t.frm_1.old_password},on:{input:function(e){e.target.composing||t.$set(t.frm_1,"old_password",e.target.value)}}}),t._v(" "),r("p",{staticClass:"help-err"},[t._v(" "+t._s(t.errors.old_password)+" ")])]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[t._v("Kata Sandi Baru")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.frm_1.password,expression:"frm_1.password"}],staticClass:"w-100",attrs:{type:"password",placeholder:""},domProps:{value:t.frm_1.password},on:{input:function(e){e.target.composing||t.$set(t.frm_1,"password",e.target.value)}}}),t._v(" "),r("p",{staticClass:"help-err"},[t._v(" "+t._s(t.errors.password)+" ")])]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[t._v("Ulangi Kata Sandi Baru")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.frm_1.password_confirmation,expression:"frm_1.password_confirmation"}],staticClass:"w-100",attrs:{type:"password",placeholder:""},domProps:{value:t.frm_1.password_confirmation},on:{input:function(e){e.target.composing||t.$set(t.frm_1,"password_confirmation",e.target.value)}}}),t._v(" "),r("p",{staticClass:"help-err"},[t._v(" "+t._s(t.errors.password_confirmation)+" ")])]),t._v(" "),r("div",{staticClass:"form-group d-flex"},[r("button",{staticClass:"btn btn-primary",staticStyle:{"margin-left":"auto"},attrs:{type:"button",name:"button"},on:{click:function(e){return t.update_password()}}},[t._v(" Ubah Kata Sandi ")])])])])])],1)}),[],!1,null,"382839b0",null);e.default=component.exports;installComponents(component,{AppHeader:r(303).default})}}]);