(window.webpackJsonp=window.webpackJsonp||[]).push([[3,17,19],{290:function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));var n=r(291),o=r(292),l=r(123),c=r(293);function d(t){return n(t)||o(t)||l(t)||c()}},291:function(t,e,r){var n=r(189);t.exports=function(t){if(Array.isArray(t))return n(t)},t.exports.default=t.exports,t.exports.__esModule=!0},292:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)},t.exports.default=t.exports,t.exports.__esModule=!0},293:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},386:function(t,e,r){"use strict";r.r(e);var n={props:["data","tampil"],watch:{}},o=(r(441),r(9)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-100"},[r("div",{staticClass:"w-100 bebas_neue",staticStyle:{color:"#000000",padding:"5px 10px 0px 10px","font-size":"1.5rem"}},[t._v("REALTIME")]),t._v(" "),r("div",{staticClass:"W-100 bebas_neue d-flex align-items-center",staticStyle:{"flex-flow":"row wrap",padding:"0px 5px","font-size":"1.5rem"}},[r("div",{staticClass:"w-100 d-flex",staticStyle:{"flex-flow":"row wrap","background-color":"#a3cdff",color:"#000000"}},t._l(t.data.lists,(function(dt,e){return r("div",{staticClass:"group col-12 col-xs-6 col-sm-4 col-md-4 col-lg-2"},[r("div",[r("div",[t._v(t._s(dt.sensor_list_name))]),t._v(" "),r("div",{staticClass:"d-flex",staticStyle:{"flex-grow":"1"}},[r("div",{staticClass:" text-right",staticStyle:{"font-size":"1.5rem","flex-grow":"1"}},[t._v("\n                            "+t._s(t._f("pointFormat")(dt.value,0))+"\n                        ")]),t._v(" "),r("div",{staticClass:"roboto_regular",staticStyle:{"font-size":"1rem","padding-left":"5px"}},[t._v("\n                            "+t._s(dt.sensor_list_unit_name)+"\n                        ")])])])])})),0)])])}),[],!1,null,"6c377f26",null);e.default=component.exports},395:function(t,e,r){var content=r(442);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("49d37072",content,!0,{sourceMap:!1})},423:function(t,e,r){"use strict";r.r(e);r(79),r(13),r(48);var n=r(10),o=r(290),l=(r(22),r(4)),c=r(12),d=r(352),f=r(386);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={props:["data","tampil"],components:{Graph:d.default,SingleRealTime:f.default,History:y},data:function(){return{mkey:"History",params:{},data_lists:[],date_from:"",date_to:"",showTimePanel:!1,showTimePanel2:!1,action:"Tambah",selected:-1,scrolling:{page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0,list_gap:!0},selected_period:"Monthly",vuepickerkey:0,vuepickerformat:"YYYY-MM",vuepickertype:"month",abortRequest:""}},mounted:function(){this.date_to=new Date;var t=new Date;this.date_from=new Date(t.setMonth(t.getMonth()-1))},methods:{change_period:function(t){var e=t.target.value;this.selected_period=e,"Minutes"==e?(this.vuepickerformat="YYYY-MM-DD HH:mm",this.vuepickertype="datetime"):"Hourly"==e?(this.vuepickerformat="YYYY-MM-DD HH",this.vuepickertype="datetime"):"Daily"==e?(this.vuepickerformat="YYYY-MM-DD",this.vuepickertype="date"):"Monthly"==e?(this.vuepickerformat="YYYY-MM",this.vuepickertype="month"):"Yearly"==e&&(this.vuepickerformat="YYYY",this.vuepickertype="year"),this.vuepickerkey++},toggleTimePanel:function(){this.showTimePanel=!this.showTimePanel},handleOpenChange:function(){this.showTimePanel=!1},toggleTimePanel2:function(){this.showTimePanel2=!this.showTimePanel2},handleOpenChange2:function(){this.showTimePanel2=!1},inject_params:function(){var t;this.params.location_id=this.data.location_id,this.params._TimeZoneOffset=(new Date).getTimezoneOffset(),this.params.period=null!==(t=this.selected_period)&&void 0!==t?t:"",this.params.date_from=this.date_from?this.$moment(this.date_from).format("YYYY-MM-DD HH:mm:ss"):"",this.params.date_to=this.date_to?this.$moment(this.date_to).format("YYYY-MM-DD HH:mm:ss"):""},start:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var link;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""==t.abortRequest){e.next=4;break}return t.abortRequest.cancel("Operation canceled by the user."),e.next=4,new Promise((function(t){return setTimeout(t,100)}));case 4:return t.abortRequest=t.$axios.CancelToken.source(),t.$emit("historyAbortRequest",t.abortRequest),link="","air_limbah"==t.data.type&&(link="/dashboard/detail/history/air_limbah"),t.$store.commit("error/CLEAR_ERROR_WITH_KEYS",t.mkey),1==t.scrolling.page?(t.data_lists=[],t.$refs.history_main_spinner.style.display="flex"):t.$refs.history_line_spinner.style.display="table-row",t.scrolling.may_get_data=!1,t.params.page=t.scrolling.page,e.next=14,t.$axios.$get(link,{params:t.params,cancelToken:t.abortRequest.token}).then((function(e){1==t.scrolling.page?(t.data_lists=e.data,t.$nextTick((function(){t.$refs.loadRef&&(t.$refs.loadRef.scrollTop=0)}))):t.scrolling.page>1&&(t.data_lists=[].concat(Object(o.a)(t.data_lists),Object(o.a)(e.data))),0==e.data.length&&(t.scrolling.is_last_record=!0)})).catch((function(e){t.$axios.isCancel(e)||t.$store.dispatch("error/errWithKeyAct",{error:e,key:t.mkey})}));case 14:t.scrolling.may_get_data=!0,1==t.scrolling.page?t.$refs.history_main_spinner.style.display="none":t.$refs.history_line_spinner.style.display="none",t.abortRequest="",t.$emit("historyAbortRequest",t.abortRequest);case 18:case"end":return e.stop()}}),e)})))()},loadMore:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.scrolling.may_get_data){e.next=2;break}return e.abrupt("return");case 2:if((r=t.$refs.loadRef).scrollLeft==t.scrolling.scrollLeft){e.next=6;break}return t.scrolling.scrollLeft=r.scrollLeft,e.abrupt("return");case 6:if(!t.scrolling.is_last_record){e.next=8;break}return e.abrupt("return");case 8:if(Math.round(r.scrollTop)+r.clientHeight>=r.scrollHeight-1){e.next=11;break}return e.abrupt("return");case 11:return t.scrolling.page++,e.next=14,t.start();case 14:case"end":return e.stop()}}),e)})))()},searching:function(){this.scrolling.page=1,this.scrolling.is_last_record=!1,this.inject_params(),this.start()}},computed:m(m({},Object(c.c)("error",{errors:function(t){return t.error_with_keys[this.mkey]||{}}})),{},{sorted_data_lists:function(){return this.data_lists.sort((function(a,b){return b.created_at-a.created_at}))}}),watch:{value:{handler:function(t,e){},deep:!0},tampil:{handler:function(t,e){},deep:!0}}},h=(r(591),r(9)),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{padding:"10px"}},[r("div",{staticClass:"bebas_neue w-100",staticStyle:{"border-bottom":"solid 1px #ccc",padding:"5px","background-color":"white","border-top-right-radius":"5px","border-top-left-radius":"5px"}},[t._v("DASHBOARD")]),t._v(" "),r("div",{staticClass:"w-100",staticStyle:{"background-color":"#ddf4fc"}},[r("div",{staticClass:"w-100 d-flex",staticStyle:{"flex-flow":"row wrap","align-items":"end"}},[r("div",{staticStyle:{padding:"5px"}},[r("div",{staticClass:"bold",staticStyle:{"font-size":"1rem","margin-right":"5px"}},[t._v("Period")]),t._v(" "),r("div",{staticClass:"period"},[r("label",[r("input",{attrs:{type:"radio",name:"period"},domProps:{checked:"Hourly"==t.selected_period,value:"Hourly"},on:{click:function(e){return t.change_period(e)}}}),t._v(" Hourly ")]),t._v(" "),r("label",[r("input",{attrs:{type:"radio",name:"period"},domProps:{checked:"Daily"==t.selected_period,value:"Daily"},on:{click:function(e){return t.change_period(e)}}}),t._v(" Daily ")]),t._v(" "),r("label",[r("input",{attrs:{type:"radio",name:"period"},domProps:{checked:"Monthly"==t.selected_period,value:"Monthly"},on:{click:function(e){return t.change_period(e)}}}),t._v(" Monthly ")]),t._v(" "),r("label",[r("input",{attrs:{type:"radio",name:"period"},domProps:{checked:"Yearly"==t.selected_period,value:"Yearly"},on:{click:function(e){return t.change_period(e)}}}),t._v(" Yearly ")])])]),t._v(" "),r("div",{staticClass:"d-flex align-items-center"},[r("div",{staticClass:"col-6",staticStyle:{padding:"5px"}},[r("label",{staticClass:"bold",staticStyle:{"font-size":"1rem",display:"block",width:"80px"}},[t._v("From")]),t._v(" "),r("client-only",[r("vue2-datepicker",{key:t.vuepickerkey,staticStyle:{width:"100%"},attrs:{type:t.vuepickertype,format:t.vuepickerformat,placeholder:"Select datetime","show-time-panel":t.showTimePanel},on:{close:t.handleOpenChange},scopedSlots:t._u(["datetime"==t.vuepickertype?{key:"footer",fn:function(){return[r("button",{staticClass:"mx-btn mx-btn-text",on:{click:t.toggleTimePanel}},[t._v("\n                                    "+t._s(t.showTimePanel?"select date":"select time")+"\n                                ")])]},proxy:!0}:null],null,!0),model:{value:t.date_from,callback:function(e){t.date_from=e},expression:"date_from"}})],1),t._v(" "),r("p",{staticClass:"help-err"},[t._v(t._s(t.errors.date_from))])],1),t._v(" "),r("div",{staticClass:"col-6",staticStyle:{padding:"5px"}},[r("label",{staticClass:"bold",staticStyle:{"font-size":"1rem",display:"block",width:"80px"}},[t._v("To")]),t._v(" "),r("client-only",[r("vue2-datepicker",{key:t.vuepickerkey,staticStyle:{width:"100%"},attrs:{type:t.vuepickertype,format:t.vuepickerformat,placeholder:"Select datetime","show-time-panel":t.showTimePanel2},on:{close:t.handleOpenChange2},scopedSlots:t._u(["datetime"==t.vuepickertype?{key:"footer",fn:function(){return[r("button",{staticClass:"mx-btn mx-btn-text",on:{click:t.toggleTimePanel2}},[t._v("\n                                    "+t._s(t.showTimePanel2?"select date":"select time")+"\n                                ")])]},proxy:!0}:null],null,!0),model:{value:t.date_to,callback:function(e){t.date_to=e},expression:"date_to"}})],1),t._v(" "),r("p",{staticClass:"help-err"},[t._v(t._s(t.errors.date_to))])],1)]),t._v(" "),r("button",{staticClass:"btn btn-primary",staticStyle:{height:"40px",margin:"5px",background:"#1010d1"},on:{click:function(e){return t.searching()}}},[t._v(" Search ")])]),t._v(" "),r("div",{staticClass:"d-flex justify-content-center align-items-center",staticStyle:{"min-height":"300px",height:"10vh",padding:"0px 5px 5px 5px"}},[r("div",{staticClass:"w-100 h-100 d-flex",staticStyle:{"flex-direction":"column","background-color":"white",padding:"5px",overflow:"hidden",position:"relative"}},[0==t.data_lists.length?r("div",{staticClass:"h-100 d-flex align-items-center justify-content-center"},[t._v("\n                    No Record\n                ")]):r("div",{ref:"loadRef",staticStyle:{"flex-grow":"1"},attrs:{role:"sticky"},on:{scroll:t.loadMore}},[r("table",{staticClass:"sticky"},[t._m(0),t._v(" "),r("tbody",[t._l(t.sorted_data_lists,(function(dt,e){return r("tr",{key:e,class:t.selected==e?"active":"",on:{click:function(r){t.selected=e}}},[r("td",[t._v(" "+t._s(e+1)+" ")]),t._v(" "),r("td",[t._v(" "+t._s(t.$moment(dt.created_at).format("DD-MM-Y HH:mm:ss"))+" ")]),t._v(" "),r("td",[t._v(" "+t._s(t._f("pointFormat")(Math.floor(1e3*dt.flow_rate)/1e3,3))+" m"),r("sup",[t._v("3")]),t._v("/h ")]),t._v(" "),r("td",[t._v(" "+t._s(t._f("pointFormat")(dt.deviation||0,3))+" m"),r("sup",[t._v("3")])]),t._v(" "),r("td",[t._v(" "+t._s(t._f("pointFormat")(dt.totalizer||0,3))+" m"),r("sup",[t._v("3")])]),t._v(" "),r("td"),t._v(" "),r("td"),t._v(" "),r("td"),t._v(" "),r("td",[t._v(t._s(dt.electricity_is_off))])])})),t._v(" "),r("tr",{ref:"history_line_spinner",staticStyle:{display:"none"}},[r("td",{staticStyle:{height:"37px","background-color":"transparent!important",border:"none",padding:"0px"},attrs:{colspan:"5"}},[r("div",{staticClass:"d-flex align-items-center justify-content-center"},[r("fa",{staticStyle:{"margin-right":"5px"},attrs:{icon:["fas","spinner"]}}),t._v(" \n                                        Loading\n                                    ")],1)])])],2)])]),t._v(" "),r("div",{ref:"history_main_spinner",staticClass:"w-100 h-100 align-items-center justify-content-center",staticStyle:{display:"none",position:"absolute",top:"0px",left:"0px","z-index":"1","background-color":"white"}},[r("fa",{staticStyle:{"margin-right":"5px"},attrs:{icon:["fas","spinner"]}}),t._v(" \n                    Loading\n                ")],1)])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",{staticStyle:{top:"0px"}},[r("th",[t._v("No.")]),t._v(" "),r("th",[t._v("Date")]),t._v(" "),r("th",[t._v("FLOW RATE")]),t._v(" "),r("th",[t._v("DEVIATION")]),t._v(" "),r("th",[t._v("TOTALIZER")]),t._v(" "),r("th",[t._v("COD")]),t._v(" "),r("th",[t._v("PH")]),t._v(" "),r("th",[t._v("TEMPERATURE")]),t._v(" "),r("th",[t._v("ELECTRICITY ( UPS )")])])])}],!1,null,"10a81249",null),y=e.default=component.exports},441:function(t,e,r){"use strict";r(395)},442:function(t,e,r){var n=r(17)(!1);n.push([t.i,".group[data-v-6c377f26]{display:flex;align-items:center;padding:5px 20px}@media only screen and (max-width:599px){.group>div[data-v-6c377f26]{width:100%;display:flex;border:none}}@media only screen and (min-width:600px){.group>div[data-v-6c377f26]{width:100%;display:block;border-bottom:2px solid #fff}}",""]),t.exports=n},477:function(t,e,r){var content=r(592);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("dc4ed0d0",content,!0,{sourceMap:!1})},591:function(t,e,r){"use strict";r(477)},592:function(t,e,r){var n=r(17)(!1);n.push([t.i,"table[data-v-10a81249]{font-size:80%}tbody tr:nth-child(2n) td[data-v-10a81249]{background-color:#fff!important}tbody tr:nth-child(odd) td[data-v-10a81249]{background-color:#caedff!important}table.sticky tbody td[data-v-10a81249],table.sticky tbody th[data-v-10a81249],table.sticky thead th[data-v-10a81249]{border:none;padding:.5rem}thead th[data-v-10a81249]{background-color:#437fc7!important;color:#fff!important}.period[data-v-10a81249]{flex-flow:row wrap;flex-grow:1}.period[data-v-10a81249],.period>label[data-v-10a81249]{display:flex;align-items:center}.period>label[data-v-10a81249]{font-size:1rem;height:40px}.period>label[data-v-10a81249],.period>label>input[data-v-10a81249]{margin-right:5px}@-webkit-keyframes spinner-data-v-10a81249{to{transform:rotate(1turn)}}@keyframes spinner-data-v-10a81249{to{transform:rotate(1turn)}}.fa-spinner[data-v-10a81249]{-webkit-animation:spinner-data-v-10a81249 1s linear infinite;animation:spinner-data-v-10a81249 1s linear infinite}",""]),t.exports=n}}]);