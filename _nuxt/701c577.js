(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{490:function(t,e,n){var content=n(628);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("5776c7d0",content,!0,{sourceMap:!1})},627:function(t,e,n){"use strict";n(490)},628:function(t,e,n){var r=n(17)(!1);r.push([t.i,".box[data-v-c81b0a9a]{width:320px;height:50px;background:red;position:fixed;bottom:20px;left:calc(50% - 160px);display:flex;justify-content:center;align-items:center;color:#fff;border:1px solid #ccc;border-radius:5px}",""]),t.exports=r},634:function(t,e,n){"use strict";n.r(e);n(22);var r=n(4);n(27),n(87);function c(t){for(var e=t+"=",n=document.cookie.split(";"),i=0;i<n.length;i++){for(var r=n[i];" "==r.charAt(0);)r=r.substring(1);if(0==r.indexOf(e))return JSON.parse(r.substring(e.length,r.length))}return""}var o={data:function(){return{items:[]}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c("items");case 3:t.items=e.sent,""==t.items&&(t.items=[]),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:return e.prev=9,e.finish(9);case 11:case"end":return e.stop()}}),e,null,[[0,7,9,11]])})))()},computed:{total:function(){return this.items.length>0?this.items.reduce((function(t,e){return t+e.price*e.qty}),0):0}}},l=(n(627),n(9)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{attrs:{to:"/cart"}},[t.items.length>0?n("div",{staticClass:"box"},[n("div",{staticClass:"bold",staticStyle:{padding:"0px 5px"}},[t._v("\n        Keranjang\n     ")]),t._v(" "),n("div",{staticStyle:{padding:"0px 5px"}},[t._v("\n       "+t._s(t.items.length)+" Item\n     ")]),t._v(" "),n("div",{staticClass:"bold",staticStyle:{padding:"0px 5px"}},[t._v("\n       "+t._s(t._f("moneyFormat")(t.total))+"\n     ")])]):t._e()])}),[],!1,null,"c81b0a9a",null);e.default=component.exports}}]);