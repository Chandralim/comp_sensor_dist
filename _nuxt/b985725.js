(window.webpackJsonp=window.webpackJsonp||[]).push([[56,10],{347:function(e,t,r){var content=r(365);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("3125592a",content,!0,{sourceMap:!1})},353:function(e,t,r){"use strict";r.r(t);var n={props:["title","back","fn"],methods:{go_back:function(){this.fn?this.fn():this.$router.go(-1)}}},o=(r(364),r(9)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"myHeader d-flex align-items-center"},[e.back?r("div",{staticClass:"text-center",staticStyle:{width:"40px",cursor:"pointer"},on:{click:function(t){return e.go_back()}}},[r("fa",{staticStyle:{"font-size":"20px",color:"#fff"},attrs:{icon:["fas","chevron-left"]}})],1):e._e(),e._v(" "),r("div",{staticStyle:{"padding-left":"10px"}},[e._v("\n        "+e._s(e.title||" ")+"\n      ")])])}),[],!1,null,"6f0eed21",null);t.default=component.exports},364:function(e,t,r){"use strict";r(347)},365:function(e,t,r){var n=r(17)(!1);n.push([e.i,".myHeader[data-v-6f0eed21]{width:100%;height:40px;display:flex;align-items:center;box-shadow:1px 1px 5px 1px #ccc;background:var(--primary-color);color:#fff}.logo[data-v-6f0eed21]{padding:5px;width:100px;height:100%}.tools[data-v-6f0eed21]{width:calc(100% - 100px)}ul[data-v-6f0eed21]{padding:5px;float:right}ul li[data-v-6f0eed21]{display:inline;margin:5px}",""]),e.exports=n},672:function(e,t,r){"use strict";r.r(t);var n=r(10),o=(r(22),r(4)),c=r(12);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var d={layout:"refresh",middleware:["auth-user",function(e){var t=e.$auth,r=e.redirect;e.store,e.route;t.hasScope("User")&&r("/dashboard")}],components:{CustomHeader:r(353).default},asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.store.commit("error/CLEAR_ERRORS"),e.store.commit("SET_LOADING",!0),r={id:-1,username:"",fullname:"",password:"",role:"User"},""===e.query.id){t.next=6;break}return t.next=6,e.app.$axios.$get("/user",{params:{id:e.query.id}}).then((function(t){r=t.data,null==t.data.id&&e.redirect("/dashboard")})).catch((function(t){e.store.dispatch("error/errAct",t)}));case 6:return e.store.commit("SET_LOADING",!1),t.abrupt("return",{user:r});case 8:case"end":return t.stop()}}),t)})))()},data:function(){return{}},created:function(){},methods:{doSave:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$store.commit("SET_LOADING",!0),e.$store.commit("error/CLEAR_ERRORS"),(r=new FormData).append("username",e.user.username),r.append("password",e.user.password),r.append("fullname",e.user.fullname),r.append("role",e.user.role),""!==e.$route.query.id){t.next=12;break}return t.next=10,e.$axios.$post("/user",r).then((function(t){e.$router.go(-1)})).catch((function(t){e.$store.dispatch("error/errAct",t)}));case 10:t.next=16;break;case 12:return r.append("id",e.$route.query.id),r.append("_method","PUT"),t.next=16,e.$axios.$post("/user",r).then((function(t){e.$router.go(-1)})).catch((function(t){e.$store.dispatch("error/errAct",t)}));case 16:e.$store.commit("SET_LOADING",!1);case 17:case"end":return t.stop()}}),t)})))()}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.c)("error",["errors"])),watch:{}},f=r(9),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("CustomHeader",{attrs:{title:"Form User",back:"Back"}}),e._v(" "),r("div",{staticClass:"w-100 d-flex",staticStyle:{"flex-grow":"1","flex-direction":"column",height:"0px",overflow:"auto",background:"#fff"}},[r("div",{staticClass:"w-100 align-items-center justify-content-center",staticStyle:{"flex-grow":"1",overflow:"auto"}},[r("div",{staticClass:"w-100 d-flex",staticStyle:{"flex-flow":"column wrap",padding:"4px"}},[r("label",{attrs:{for:""}},[e._v("Nama Pengguna")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"},{name:"lowercase",rawName:"v-lowercase"}],attrs:{type:"text"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}}),e._v(" "),r("p",{staticClass:"help-err"},[e._v(e._s(e.errors.username))])]),e._v(" "),r("div",{staticClass:"w-100 d-flex",staticStyle:{"flex-flow":"column wrap",padding:"4px"}},[r("label",{attrs:{for:""}},[e._v("Nama Identitas")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.fullname,expression:"user.fullname"}],attrs:{type:"text"},domProps:{value:e.user.fullname},on:{input:function(t){t.target.composing||e.$set(e.user,"fullname",t.target.value)}}}),e._v(" "),r("p",{staticClass:"help-err"},[e._v(e._s(e.errors.fullname))])]),e._v(" "),r("div",{staticClass:"w-100 d-flex",staticStyle:{"flex-flow":"column wrap",padding:"4px"}},[r("label",{attrs:{for:""}},[e._v("Kata Sandi")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],attrs:{type:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),e._v(" "),r("p",{staticClass:"help-err"},[e._v(e._s(e.errors.password))])]),e._v(" "),e.$auth.hasScope("Super_Admin")?r("div",{staticClass:"w-100 d-flex",staticStyle:{"flex-flow":"column wrap",padding:"4px"}},[r("label",{attrs:{for:""}},[e._v("Jabatan")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.user.role,expression:"user.role"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.user,"role",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"User"}},[e._v("User")]),e._v(" "),r("option",{attrs:{value:"Admin"}},[e._v("Admin")]),e._v(" "),r("option",{attrs:{value:"Super_Admin"}},[e._v("Super Admin")])]),e._v(" "),r("p",{staticClass:"help-err"},[e._v(e._s(e.errors.role))])]):e._e()]),e._v(" "),r("div",{staticClass:"w-100 d-flex align-items-center",staticStyle:{"justify-content":"flex-end"}},[r("button",{staticClass:"btn btn-secondary",staticStyle:{width:"150px",margin:"4px"},attrs:{type:"button",name:"button"},on:{click:function(t){return e.$router.go(-1)}}},[e._v("\n          Cancel\n        ")]),e._v(" "),r("button",{staticClass:"btn btn-primary",staticStyle:{width:"150px",margin:"4px"},attrs:{type:"button",name:"button"},on:{click:function(t){return e.doSave()}}},[e._v("\n          Save\n        ")])])])],1)}),[],!1,null,"2ce9b55b",null);t.default=component.exports;installComponents(component,{CustomHeader:r(353).default})}}]);