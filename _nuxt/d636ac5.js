(window.webpackJsonp=window.webpackJsonp||[]).push([[4,36],{358:function(t,e,r){"use strict";r.r(e);r(120),r(13),r(41),r(48);var o=r(290),n=(r(22),r(4)),l={props:["data","tampil"],components:{LineChart:r(301).default},data:function(){return{tc_electricity_data:{},tc_electricity_options:{},tc_flow_rate_data:{},tc_flow_rate_options:{},tc_cod_data:{},tc_cod_options:{},tc_ph_data:{},tc_ph_options:{},tc_temp_data:{},tc_temp_options:{},tc_totalizer_data:{},tc_totalizer_options:{},graphs:[],selected:-1,selected_period:"Realtime",scrolling:{page:1,is_last_record:!1,scrollLeft:0},sort:{field:"",by:"asc"},abortRequest:""}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.init_chart();case 2:return e.next=4,t.graphPeriodChange();case 4:case"end":return e.stop()}}),e)})))()},computed:{},methods:{init_chart:function(){var t={responsive:!0,maintainAspectRatio:!1,legend:{display:!1},title:{display:!1,text:"Perbandingan Modal Dan Potongan",fontSize:24,fontColor:"#6b7280"},animation:{duration:0},tooltips:{enabled:!1},elements:{point:{radius:0}},scales:{xAxes:[{gridLines:{display:!1},ticks:{fontSize:10,autoSkip:!1,minRotation:90},weight:100}],yAxes:[{ticks:{beginAtZero:!1},gridLines:{display:!1}}]}},data={labels:[],datasets:[{label:"FlowRate",data:[],borderColor:"#bb86fc",borderWidth:1}]};this.tc_electricity_options=JSON.parse(JSON.stringify(t)),this.tc_flow_rate_options=JSON.parse(JSON.stringify(t)),this.tc_cod_options=JSON.parse(JSON.stringify(t)),this.tc_ph_options=JSON.parse(JSON.stringify(t)),this.tc_temp_options=JSON.parse(JSON.stringify(t)),this.tc_totalizer_options=JSON.parse(JSON.stringify(t)),this.tc_electricity_data=JSON.parse(JSON.stringify(data)),this.tc_flow_rate_data=JSON.parse(JSON.stringify(data)),this.tc_cod_data=JSON.parse(JSON.stringify(data)),this.tc_ph_data=JSON.parse(JSON.stringify(data)),this.tc_temp_data=JSON.parse(JSON.stringify(data)),this.tc_totalizer_data=JSON.parse(JSON.stringify(data))},rerender:function(){var t=this;this.tc_flow_rate_data.labels=[],this.tc_flow_rate_data.datasets[0].data=[],this.tc_totalizer_data.labels=[],this.tc_totalizer_data.datasets[0].data=[],this.tc_electricity_data.labels=[],this.tc_electricity_data.datasets[0].data=[];var e="YYYY-MM-DD HH:mm:ss";switch(this.selected_period){case"Realtime":e="YYYY-MM-DD HH:mm:ss";break;case"Hourly":e="YYYY-MM-DD HH";break;case"Daily":e="YYYY-MM-DD";break;case"Monthly":e="YYYY-MM";break;case"Yearly":e="YYYY"}this.graphs.slice().reverse().forEach((function(r,o){var n=t.$moment(r.created_at).format(e);t.tc_flow_rate_data.labels.push(n),t.tc_flow_rate_data.datasets[0].data.push(r.flow_rate),t.tc_totalizer_data.labels.push(n),t.tc_totalizer_data.datasets[0].data.push(r.totalizer),t.tc_electricity_data.labels.push(n),t.tc_electricity_data.datasets[0].data.push(r.electricity_is_off)})),setTimeout((function(){t.$refs.tc_electricity.renderChart(t.tc_electricity_data,t.tc_electricity_options),t.$refs.tc_flow_rate.renderChart(t.tc_flow_rate_data,t.tc_flow_rate_options),t.$refs.tc_cod.renderChart(t.tc_cod_data,t.tc_cod_options),t.$refs.tc_ph.renderChart(t.tc_ph_data,t.tc_ph_options),t.$refs.tc_temp.renderChart(t.tc_temp_data,t.tc_temp_options),t.$refs.tc_totalizer.renderChart(t.tc_totalizer_data,t.tc_totalizer_options)}),100)},calcData:function(t){var e=Math.max.apply(Math,Object(o.a)(t))||0,r=Math.min.apply(Math,Object(o.a)(t))||0,n=.1*e,l=.1*r;return r-=l,0==(e+=n)&&0==r?(e=1,r=-1):0==e&&0!=r?e+=l:0!=e&&0==r&&(r-=n),{min:r}},graphPeriodChange:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var link,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(""==e.abortRequest){r.next=4;break}return e.abortRequest.cancel("Operation canceled by the user."),r.next=4,new Promise((function(t){return setTimeout(t,100)}));case 4:return e.abortRequest=e.$axios.CancelToken.source(),e.$emit("graphAbortRequest",e.abortRequest),link="","air_limbah"==e.data.type&&(link="/dashboard/detail/graph/air_limbah"),e.selected_period=t||"Realtime",e.$refs.main_spinner.style.display="flex",(o={}).location_id=e.data.location_id,o.period=e.selected_period,r.next=15,e.$axios.$get(link,{params:o,cancelToken:e.abortRequest.token}).then((function(t){e.graphs=t.data,e.rerender()})).catch((function(t){e.$axios.isCancel(t)||e.$store.dispatch("error/errAct",t)}));case 15:e.$refs.main_spinner.style.display="none",e.abortRequest="",e.$emit("graphAbortRequest",e.abortRequest);case 18:case"end":return r.stop()}}),r)})))()}},watch:{value:{handler:function(t,e){},deep:!0},data:{handler:function(t,e){"Realtime"==this.selected_period&&(this.graphs.pop(),this.graphs.unshift({created_at:t.record_created_at,flow_rate:t.flowmeter_flow_rate,totalizer:t.flowmeter_totalizer,electricity_is_off:t.electricity_is_off}),this.rerender())},deep:!0}}},c=(r(402),r(9)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-100"},[r("div",{staticClass:"w-100 bebas_neue",staticStyle:{color:"#090909",padding:"10px 10px 0px 10px","font-size":"1.5rem"}},[t._v("GRAPH")]),t._v(" "),r("div",{staticClass:"w-100 d-flex align-items-center",staticStyle:{color:"#080808",padding:"5px 10px 0px 10px","font-family":"'Arial'","flex-flow":"row wrap"}},[r("div",{staticStyle:{"font-size":"1rem"}},[t._v("Filter :")]),t._v(" "),r("div",{staticClass:"d-flex align-items-center",staticStyle:{"flex-grow":"1","flex-flow":"row wrap"}},[r("button",{staticClass:"l_btn",class:"Realtime"==t.selected_period?"active":"",on:{click:function(e){return t.graphPeriodChange("Realtime")}}},[t._v("Realtime")]),t._v(" "),r("button",{staticClass:"l_btn",class:"Hourly"==t.selected_period?"active":"",on:{click:function(e){return t.graphPeriodChange("Hourly")}}},[t._v("Hourly")]),t._v(" "),r("button",{staticClass:"l_btn",class:"Daily"==t.selected_period?"active":"",on:{click:function(e){return t.graphPeriodChange("Daily")}}},[t._v("Daily")]),t._v(" "),r("button",{staticClass:"l_btn",class:"Monthly"==t.selected_period?"active":"",on:{click:function(e){return t.graphPeriodChange("Monthly")}}},[t._v("Monthly")]),t._v(" "),r("button",{staticClass:"l_btn",class:"Yearly"==t.selected_period?"active":"",on:{click:function(e){return t.graphPeriodChange("Yearly")}}},[t._v("Yearly")])])]),t._v(" "),r("div",{staticClass:"w-100 d-flex",staticStyle:{"flex-flow":"row wrap",padding:"0px 5px",position:"relative"}},[r("div",{ref:"main_spinner",staticClass:"w-100 h-100 d-flex align-items-center justify-content-center",staticStyle:{position:"absolute",top:"0px",left:"0px","background-color":"#eeeeee",display:"none"}},[r("div",[r("fa",{staticStyle:{"margin-right":"5px"},attrs:{icon:["fas","spinner"]}}),t._v("\n                Loading\n            ")],1)]),t._v(" "),r("div",{staticClass:"col-12 col-xs-12 col-sm-6",staticStyle:{padding:"5px"}},[r("div",{staticClass:"d-flex h-100",staticStyle:{"flex-direction":"column"}},[r("div",{staticClass:"d-flex bg_purple",staticStyle:{"min-height":"30px",padding:"5px",color:"white","border-top-left-radius":"5px","border-top-right-radius":"5px"}},[t._v("\n                    Flow Rate\n                ")]),t._v(" "),r("div",{staticStyle:{"background-color":"#ecddf6","flex-grow":"1"}},[r("div",{staticClass:"w-100 text-center bold",staticStyle:{padding:"5px 5px 0px 5px","flex-grow":"1","font-size":"1.8rem"}},[t._v("\n                        "+t._s(t._f("pointFormat")(t.graphs.length>0?Math.floor(1e3*t.graphs.slice(0)[0].flow_rate)/1e3:0,3))+"\n                    ")]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"w-100",staticStyle:{height:"210px"}},[r("line-chart",{ref:"tc_flow_rate",attrs:{"chart-options":t.tc_flow_rate_options,"chart-data":t.tc_flow_rate_data,width:200,height:208}})],1)])])]),t._v(" "),r("div",{staticClass:"col-12 col-xs-12 col-sm-6",staticStyle:{padding:"5px"}},[r("div",{staticClass:"d-flex h-100",staticStyle:{"flex-direction":"column"}},[r("div",{staticClass:"d-flex bg_pink",staticStyle:{"min-height":"30px",padding:"5px",color:"white","border-top-left-radius":"5px","border-top-right-radius":"5px"}},[t._v("\n                    TOTALIZER\n                ")]),t._v(" "),r("div",{staticStyle:{"background-color":"#efdde5","flex-grow":"1"}},[r("div",{staticClass:"w-100 text-center bold",staticStyle:{padding:"5px 5px 0px 5px","flex-grow":"1","font-size":"1.8em"}},[t._v("\n                        "+t._s(t._f("pointFormat")(t.graphs.length>0?Math.floor(100*t.graphs.slice(0)[0].totalizer)/100:0,2))+"\n                    ")]),t._v(" "),t._m(1),t._v(" "),r("div",{staticClass:"w-100",staticStyle:{height:"210px"}},[r("line-chart",{ref:"tc_totalizer",attrs:{"chart-options":t.tc_totalizer_options,"chart-data":t.tc_totalizer_data,width:200,height:208}})],1)])])]),t._v(" "),r("div",{staticClass:"col-12 col-xs-12 col-sm-6",staticStyle:{padding:"5px"}},[r("div",{staticClass:"d-flex h-100",staticStyle:{"flex-direction":"column"}},[r("div",{staticClass:"d-flex bg_blue",staticStyle:{"min-height":"30px",padding:"5px",color:"white","border-top-left-radius":"5px","border-top-right-radius":"5px"}},[t._v("\n                    COD\n                ")]),t._v(" "),r("div",{staticStyle:{"background-color":"#d9d8fb","flex-grow":"1"}},[r("div",{staticClass:"w-100 text-center bold",staticStyle:{padding:"5px 5px 0px 5px","flex-grow":"1","font-size":"1.8em"}},[t._v("\n                        -\n                    ")]),t._v(" "),r("div",{staticClass:"w-100  text-right",staticStyle:{"font-size":"1.1rem",padding:"0px 5px 5px 5px"}},[t._v("\n                        mgL\n                    ")]),t._v(" "),r("div",{staticClass:"w-100",staticStyle:{height:"210px"}},[r("line-chart",{ref:"tc_cod",attrs:{"chart-options":t.tc_cod_options,"chart-data":t.tc_cod_data,width:200,height:208}})],1)])])]),t._v(" "),r("div",{staticClass:"col-12 col-xs-12 col-sm-6",staticStyle:{padding:"5px"}},[r("div",{staticClass:"d-flex h-100",staticStyle:{"flex-direction":"column"}},[r("div",{staticClass:"d-flex bg_cyan",staticStyle:{"min-height":"30px",padding:"5px",color:"white","border-top-left-radius":"5px","border-top-right-radius":"5px"}},[t._v("\n                    PH\n                ")]),t._v(" "),r("div",{staticStyle:{"background-color":"#cfe9ed","flex-grow":"1"}},[r("div",{staticClass:"w-100 text-center bold",staticStyle:{padding:"5px 5px 0px 5px","flex-grow":"1","font-size":"1.8em"}},[t._v("\n                        -\n                    ")]),t._v(" "),r("div",{staticClass:"w-100",staticStyle:{height:"210px"}},[r("line-chart",{ref:"tc_ph",attrs:{"chart-options":t.tc_ph_options,"chart-data":t.tc_ph_data,width:200,height:208}})],1)])])]),t._v(" "),r("div",{staticClass:"col-12 col-xs-12 col-sm-6",staticStyle:{padding:"5px"}},[r("div",{staticClass:"d-flex h-100",staticStyle:{"flex-direction":"column"}},[r("div",{staticClass:"d-flex bg_green",staticStyle:{"min-height":"30px",padding:"5px",color:"white","border-top-left-radius":"5px","border-top-right-radius":"5px"}},[t._v("\n                    TEMPERATURE\n                ")]),t._v(" "),r("div",{staticStyle:{"background-color":"#ddfbf0","flex-grow":"1"}},[r("div",{staticClass:"w-100 text-center bold",staticStyle:{padding:"5px 5px 0px 5px","flex-grow":"1","font-size":"1.8em"}},[t._v("\n                        -\n                    ")]),t._v(" "),r("div",{staticClass:"w-100  text-right",staticStyle:{"font-size":"1.1rem",padding:"0px 5px 5px 5px"}},[t._v("\n                        C\n                    ")]),t._v(" "),r("div",{staticClass:"w-100",staticStyle:{height:"210px"}},[r("line-chart",{ref:"tc_temp",attrs:{"chart-options":t.tc_temp_options,"chart-data":t.tc_temp_data,width:200,height:208}})],1)])])]),t._v(" "),r("div",{staticClass:"col-12 col-xs-12 col-sm-6",staticStyle:{padding:"5px"}},[r("div",{staticClass:"d-flex h-100",staticStyle:{"flex-direction":"column"}},[r("div",{staticClass:"d-flex bg_yellow",staticStyle:{"min-height":"30px",padding:"5px",color:"white","border-top-left-radius":"5px","border-top-right-radius":"5px"}},[t._v("\n                    ELECTRICITY\n                ")]),t._v(" "),r("div",{staticStyle:{"background-color":"#efe4dc","flex-grow":"1"}},[r("div",{staticClass:"w-100 text-center bold",staticStyle:{padding:"5px 5px 0px 5px","flex-grow":"1","font-size":"1.8em"}},[t._v("\n                        "+t._s(t.graphs.length>0?t.graphs.slice(0)[0].electricity_is_off>0?"UPS":0==t.graphs.slice(0)[0].electricity_is_off?"PLN":"-":"-")+"\n                    ")]),t._v(" "),r("div",{staticClass:"w-100",staticStyle:{height:"210px"}},[r("line-chart",{ref:"tc_electricity",attrs:{"chart-options":t.tc_electricity_options,"chart-data":t.tc_electricity_data,width:200,height:208}})],1)])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-100  text-right",staticStyle:{"font-size":"1.1rem",padding:"0px 5px 5px 5px"}},[t._v("\n                        m"),r("sup",[t._v("3")]),t._v("/h\n                    ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-100  text-right",staticStyle:{"font-size":"1.1rem",padding:"0px 5px 5px 5px"}},[t._v("\n                        m"),r("sup",[t._v("3")])])}],!1,null,"e1ea5f2a",null);e.default=component.exports},359:function(t,e,r){"use strict";r.r(e);var o={props:["data","tampil"],watch:{}},n=(r(404),r(9)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-100"},[r("div",{staticClass:"w-100 bebas_neue",staticStyle:{color:"#000000",padding:"5px 10px 0px 10px","font-size":"1.5rem"}},[t._v("REALTIME")]),t._v(" "),r("div",{staticClass:"W-100 bebas_neue d-flex align-items-center",staticStyle:{"flex-flow":"row wrap",padding:"0px 5px","font-size":"1.5rem"}},[r("div",{staticClass:"w-100 d-flex",staticStyle:{"flex-flow":"row wrap","background-color":"#CDBE78",color:"#000000"}},[r("div",{staticClass:"group col-12 col-xs-6 col-sm-4 col-md-4 col-lg-2"},[r("div",[r("div",[t._v("FLOW RATE")]),t._v(" "),r("div",{staticClass:"d-flex",staticStyle:{"flex-grow":"1"}},[r("div",{staticClass:" text-right",staticStyle:{"font-size":"1.5rem","flex-grow":"1"}},[t._v("\n                            "+t._s(t._f("pointFormat")(Math.floor(100*t.data.flowmeter_flow_rate)/100,2))+"\n                        ")]),t._v(" "),t._m(0)])])]),t._v(" "),r("div",{staticClass:"group col-12 col-xs-6 col-sm-4 col-md-4 col-lg-2"},[r("div",[r("div",[t._v("TOTALIZER")]),t._v(" "),r("div",{staticClass:"d-flex",staticStyle:{"flex-grow":"1"}},[r("div",{staticClass:" text-right",staticStyle:{"font-size":"1.5rem","flex-grow":"1"}},[t._v("\n                            "+t._s(t._f("pointFormat")(t.data.flowmeter_totalizer||0))+"\n                        ")]),t._v(" "),t._m(1)])])]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"roboto_regular",staticStyle:{"font-size":"1rem","padding-left":"5px"}},[t._v("\n                            m"),r("sup",[t._v("3")]),t._v("/h\n                        ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"roboto_regular",staticStyle:{"font-size":"1rem","padding-left":"5px"}},[t._v("\n                            m"),r("sup",[t._v("3")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"group col-12 col-xs-6 col-sm-4 col-md-4 col-lg-2"},[r("div",[r("div",[t._v("COD")]),t._v(" "),r("div",{staticClass:"d-flex",staticStyle:{"flex-grow":"1"}},[r("div",{staticClass:" text-right",staticStyle:{"font-size":"1.5rem","flex-grow":"1"}},[t._v("\n                            -\n                        ")]),t._v(" "),r("div",{staticClass:"roboto_regular",staticStyle:{"font-size":"1rem","padding-left":"5px"}},[t._v("\n                            mgL\n                        ")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"group col-12 col-xs-6 col-sm-4 col-md-4 col-lg-2"},[r("div",[r("div",[t._v("PH")]),t._v(" "),r("div",{staticClass:"d-flex",staticStyle:{"flex-grow":"1"}},[r("div",{staticClass:" text-right",staticStyle:{"font-size":"1.5rem","flex-grow":"1"}},[t._v("\n                            -\n                        ")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"group col-12 col-xs-6 col-sm-4 col-md-4 col-lg-2"},[r("div",[r("div",[t._v("TEMPERATURE")]),t._v(" "),r("div",{staticClass:"d-flex",staticStyle:{"flex-grow":"1"}},[r("div",{staticClass:" text-right",staticStyle:{"font-size":"1.5rem","flex-grow":"1"}},[t._v("\n                            -\n                        ")]),t._v(" "),r("div",{staticClass:"roboto_regular",staticStyle:{"font-size":"1rem","padding-left":"5px"}},[t._v("\n                            C\n                        ")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"group col-12 col-xs-6 col-sm-4 col-md-4 col-lg-2"},[r("div",[r("div",[t._v("ELECTRICITY")]),t._v(" "),r("div",{staticClass:"d-flex",staticStyle:{"flex-grow":"1"}},[r("div",{staticClass:" text-right",staticStyle:{"font-size":"1.5rem","flex-grow":"1"}},[t._v("\n                            -\n                        ")])])])])}],!1,null,"7142f888",null);e.default=component.exports},371:function(t,e,r){var content=r(403);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("05f69ada",content,!0,{sourceMap:!1})},372:function(t,e,r){var content=r(405);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("2afa1cd8",content,!0,{sourceMap:!1})},380:function(t,e,r){"use strict";r.r(e);r(79),r(13),r(48);var o=r(10),n=r(290),l=(r(22),r(4)),c=r(12),d=r(358),_=r(359);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={props:["data","tampil"],components:{Graph:d.default,SingleRealTime:_.default,History:x},data:function(){return{mkey:"History",params:{},data_lists:[],date_from:"",date_to:"",showTimePanel:!1,showTimePanel2:!1,action:"Tambah",selected:-1,scrolling:{page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0,list_gap:!0},selected_period:"Monthly",vuepickerkey:0,vuepickerformat:"YYYY-MM",vuepickertype:"month",abortRequest:""}},mounted:function(){this.date_to=new Date;var t=new Date;this.date_from=new Date(t.setMonth(t.getMonth()-1))},methods:{change_period:function(t){var e=t.target.value;this.selected_period=e,"Minutes"==e?(this.vuepickerformat="YYYY-MM-DD HH:mm",this.vuepickertype="datetime"):"Hourly"==e?(this.vuepickerformat="YYYY-MM-DD HH",this.vuepickertype="datetime"):"Daily"==e?(this.vuepickerformat="YYYY-MM-DD",this.vuepickertype="date"):"Monthly"==e?(this.vuepickerformat="YYYY-MM",this.vuepickertype="month"):"Yearly"==e&&(this.vuepickerformat="YYYY",this.vuepickertype="year"),this.vuepickerkey++},toggleTimePanel:function(){this.showTimePanel=!this.showTimePanel},handleOpenChange:function(){this.showTimePanel=!1},toggleTimePanel2:function(){this.showTimePanel2=!this.showTimePanel2},handleOpenChange2:function(){this.showTimePanel2=!1},inject_params:function(){var t;this.params.location_id=this.data.location_id,this.params._TimeZoneOffset=(new Date).getTimezoneOffset(),this.params.period=null!==(t=this.selected_period)&&void 0!==t?t:"",this.params.date_from=this.date_from?this.$moment(this.date_from).format("YYYY-MM-DD HH:mm:ss"):"",this.params.date_to=this.date_to?this.$moment(this.date_to).format("YYYY-MM-DD HH:mm:ss"):""},start:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var link;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""==t.abortRequest){e.next=4;break}return t.abortRequest.cancel("Operation canceled by the user."),e.next=4,new Promise((function(t){return setTimeout(t,100)}));case 4:return t.abortRequest=t.$axios.CancelToken.source(),t.$emit("historyAbortRequest",t.abortRequest),link="","air_limbah"==t.data.type&&(link="/dashboard/detail/history/air_limbah"),t.$store.commit("error/CLEAR_ERROR_WITH_KEYS",t.mkey),1==t.scrolling.page?(t.data_lists=[],t.$refs.history_main_spinner.style.display="flex"):t.$refs.history_line_spinner.style.display="table-row",t.scrolling.may_get_data=!1,t.params.page=t.scrolling.page,e.next=14,t.$axios.$get(link,{params:t.params,cancelToken:t.abortRequest.token}).then((function(e){1==t.scrolling.page?(t.data_lists=e.data,t.$nextTick((function(){t.$refs.loadRef&&(t.$refs.loadRef.scrollTop=0)}))):t.scrolling.page>1&&(t.data_lists=[].concat(Object(n.a)(t.data_lists),Object(n.a)(e.data))),0==e.data.length&&(t.scrolling.is_last_record=!0)})).catch((function(e){t.$axios.isCancel(e)||t.$store.dispatch("error/errWithKeyAct",{error:e,key:t.mkey})}));case 14:t.scrolling.may_get_data=!0,1==t.scrolling.page?t.$refs.history_main_spinner.style.display="none":t.$refs.history_line_spinner.style.display="none",t.abortRequest="",t.$emit("historyAbortRequest",t.abortRequest);case 18:case"end":return e.stop()}}),e)})))()},loadMore:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.scrolling.may_get_data){e.next=2;break}return e.abrupt("return");case 2:if((r=t.$refs.loadRef).scrollLeft==t.scrolling.scrollLeft){e.next=6;break}return t.scrolling.scrollLeft=r.scrollLeft,e.abrupt("return");case 6:if(!t.scrolling.is_last_record){e.next=8;break}return e.abrupt("return");case 8:if(Math.round(r.scrollTop)+r.clientHeight>=r.scrollHeight-1){e.next=11;break}return e.abrupt("return");case 11:return t.scrolling.page++,e.next=14,t.start();case 14:case"end":return e.stop()}}),e)})))()},searching:function(){this.scrolling.page=1,this.scrolling.is_last_record=!1,this.inject_params(),this.start()}},computed:h(h({},Object(c.c)("error",{errors:function(t){return t.error_with_keys[this.mkey]||{}}})),{},{sorted_data_lists:function(){return this.data_lists.sort((function(a,b){return b.created_at-a.created_at}))}}),watch:{value:{handler:function(t,e){},deep:!0},tampil:{handler:function(t,e){},deep:!0}}},m=(r(447),r(9)),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{padding:"10px"}},[r("div",{staticClass:"bebas_neue w-100",staticStyle:{"border-bottom":"solid 1px #ccc",padding:"5px","background-color":"white","border-top-right-radius":"5px","border-top-left-radius":"5px"}},[t._v("DASHBOARD")]),t._v(" "),r("div",{staticClass:"w-100",staticStyle:{"background-color":"#ddf4fc"}},[r("div",{staticClass:"w-100 d-flex",staticStyle:{"flex-flow":"row wrap","align-items":"end"}},[r("div",{staticStyle:{padding:"5px"}},[r("div",{staticClass:"bold",staticStyle:{"font-size":"1rem","margin-right":"5px"}},[t._v("Period")]),t._v(" "),r("div",{staticClass:"period"},[r("label",[r("input",{attrs:{type:"radio",name:"period"},domProps:{checked:"Hourly"==t.selected_period,value:"Hourly"},on:{click:function(e){return t.change_period(e)}}}),t._v(" Hourly ")]),t._v(" "),r("label",[r("input",{attrs:{type:"radio",name:"period"},domProps:{checked:"Daily"==t.selected_period,value:"Daily"},on:{click:function(e){return t.change_period(e)}}}),t._v(" Daily ")]),t._v(" "),r("label",[r("input",{attrs:{type:"radio",name:"period"},domProps:{checked:"Monthly"==t.selected_period,value:"Monthly"},on:{click:function(e){return t.change_period(e)}}}),t._v(" Monthly ")]),t._v(" "),r("label",[r("input",{attrs:{type:"radio",name:"period"},domProps:{checked:"Yearly"==t.selected_period,value:"Yearly"},on:{click:function(e){return t.change_period(e)}}}),t._v(" Yearly ")])])]),t._v(" "),r("div",{staticClass:"d-flex align-items-center"},[r("div",{staticClass:"col-6",staticStyle:{padding:"5px"}},[r("label",{staticClass:"bold",staticStyle:{"font-size":"1rem",display:"block",width:"80px"}},[t._v("From")]),t._v(" "),r("client-only",[r("vue2-datepicker",{key:t.vuepickerkey,staticStyle:{width:"100%"},attrs:{type:t.vuepickertype,format:t.vuepickerformat,placeholder:"Select datetime","show-time-panel":t.showTimePanel},on:{close:t.handleOpenChange},scopedSlots:t._u(["datetime"==t.vuepickertype?{key:"footer",fn:function(){return[r("button",{staticClass:"mx-btn mx-btn-text",on:{click:t.toggleTimePanel}},[t._v("\n                                    "+t._s(t.showTimePanel?"select date":"select time")+"\n                                ")])]},proxy:!0}:null],null,!0),model:{value:t.date_from,callback:function(e){t.date_from=e},expression:"date_from"}})],1),t._v(" "),r("p",{staticClass:"help-err"},[t._v(t._s(t.errors.date_from))])],1),t._v(" "),r("div",{staticClass:"col-6",staticStyle:{padding:"5px"}},[r("label",{staticClass:"bold",staticStyle:{"font-size":"1rem",display:"block",width:"80px"}},[t._v("To")]),t._v(" "),r("client-only",[r("vue2-datepicker",{key:t.vuepickerkey,staticStyle:{width:"100%"},attrs:{type:t.vuepickertype,format:t.vuepickerformat,placeholder:"Select datetime","show-time-panel":t.showTimePanel2},on:{close:t.handleOpenChange2},scopedSlots:t._u(["datetime"==t.vuepickertype?{key:"footer",fn:function(){return[r("button",{staticClass:"mx-btn mx-btn-text",on:{click:t.toggleTimePanel2}},[t._v("\n                                    "+t._s(t.showTimePanel2?"select date":"select time")+"\n                                ")])]},proxy:!0}:null],null,!0),model:{value:t.date_to,callback:function(e){t.date_to=e},expression:"date_to"}})],1),t._v(" "),r("p",{staticClass:"help-err"},[t._v(t._s(t.errors.date_to))])],1)]),t._v(" "),r("button",{staticClass:"btn btn-primary",staticStyle:{height:"40px",margin:"5px",background:"#1010d1"},on:{click:function(e){return t.searching()}}},[t._v(" Search ")])]),t._v(" "),r("div",{staticClass:"d-flex justify-content-center align-items-center",staticStyle:{"min-height":"300px",height:"10vh",padding:"0px 5px 5px 5px"}},[r("div",{staticClass:"w-100 h-100 d-flex",staticStyle:{"flex-direction":"column","background-color":"white",padding:"5px",overflow:"hidden",position:"relative"}},[0==t.data_lists.length?r("div",{staticClass:"h-100 d-flex align-items-center justify-content-center"},[t._v("\n                    No Record\n                ")]):r("div",{ref:"loadRef",staticStyle:{"flex-grow":"1"},attrs:{role:"sticky"},on:{scroll:t.loadMore}},[r("table",{staticClass:"sticky"},[t._m(0),t._v(" "),r("tbody",[t._l(t.sorted_data_lists,(function(dt,e){return r("tr",{key:e,class:t.selected==e?"active":"",on:{click:function(r){t.selected=e}}},[r("td",[t._v(" "+t._s(e+1)+" ")]),t._v(" "),r("td",[t._v(" "+t._s(t.$moment(dt.created_at).format("DD-MM-Y HH:mm:ss"))+" ")]),t._v(" "),r("td",[t._v(" "+t._s(t._f("pointFormat")(Math.floor(1e3*dt.flow_rate)/1e3,3))+" m"),r("sup",[t._v("3")]),t._v("/h ")]),t._v(" "),r("td",[t._v(" "+t._s(t._f("pointFormat")(dt.deviation||0,3))+" m"),r("sup",[t._v("3")])]),t._v(" "),r("td",[t._v(" "+t._s(t._f("pointFormat")(dt.totalizer||0,3))+" m"),r("sup",[t._v("3")])]),t._v(" "),r("td"),t._v(" "),r("td"),t._v(" "),r("td"),t._v(" "),r("td",[t._v(t._s(dt.electricity_is_off))])])})),t._v(" "),r("tr",{ref:"history_line_spinner",staticStyle:{display:"none"}},[r("td",{staticStyle:{height:"37px","background-color":"transparent!important",border:"none",padding:"0px"},attrs:{colspan:"5"}},[r("div",{staticClass:"d-flex align-items-center justify-content-center"},[r("fa",{staticStyle:{"margin-right":"5px"},attrs:{icon:["fas","spinner"]}}),t._v(" \n                                        Loading\n                                    ")],1)])])],2)])]),t._v(" "),r("div",{ref:"history_main_spinner",staticClass:"w-100 h-100 align-items-center justify-content-center",staticStyle:{display:"none",position:"absolute",top:"0px",left:"0px","z-index":"1","background-color":"white"}},[r("fa",{staticStyle:{"margin-right":"5px"},attrs:{icon:["fas","spinner"]}}),t._v(" \n                    Loading\n                ")],1)])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",{staticStyle:{top:"0px"}},[r("th",[t._v("No.")]),t._v(" "),r("th",[t._v("Date")]),t._v(" "),r("th",[t._v("FLOW RATE")]),t._v(" "),r("th",[t._v("DEVIATION")]),t._v(" "),r("th",[t._v("TOTALIZER")]),t._v(" "),r("th",[t._v("COD")]),t._v(" "),r("th",[t._v("PH")]),t._v(" "),r("th",[t._v("TEMPERATURE")]),t._v(" "),r("th",[t._v("ELECTRICITY ( UPS )")])])])}],!1,null,"eea8730e",null),x=e.default=component.exports},402:function(t,e,r){"use strict";r(371)},403:function(t,e,r){var o=r(17)(!1);o.push([t.i,'.l_btn[data-v-e1ea5f2a]{border:none;color:#000;font-weight:700;font-family:"Arial";font-size:20px;margin:5px}.l_btn.active[data-v-e1ea5f2a]{background-color:#437fc7;color:#fff;border-radius:5px}@-webkit-keyframes spinner-data-v-e1ea5f2a{to{transform:rotate(1turn)}}@keyframes spinner-data-v-e1ea5f2a{to{transform:rotate(1turn)}}.fa-spinner[data-v-e1ea5f2a]{-webkit-animation:spinner-data-v-e1ea5f2a 1s linear infinite;animation:spinner-data-v-e1ea5f2a 1s linear infinite}',""]),t.exports=o},404:function(t,e,r){"use strict";r(372)},405:function(t,e,r){var o=r(17)(!1);o.push([t.i,".group[data-v-7142f888]{display:flex;align-items:center;padding:5px 20px}@media only screen and (max-width:599px){.group>div[data-v-7142f888]{width:100%;display:flex;border:none}}@media only screen and (min-width:600px){.group>div[data-v-7142f888]{width:100%;display:block;border-bottom:2px solid #fff}}",""]),t.exports=o},406:function(t,e,r){var content=r(448);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("08f94746",content,!0,{sourceMap:!1})},447:function(t,e,r){"use strict";r(406)},448:function(t,e,r){var o=r(17)(!1);o.push([t.i,"table[data-v-eea8730e]{font-size:80%}tbody tr:nth-child(2n) td[data-v-eea8730e]{background-color:#fff!important}tbody tr:nth-child(odd) td[data-v-eea8730e]{background-color:#caedff!important}table.sticky tbody td[data-v-eea8730e],table.sticky tbody th[data-v-eea8730e],table.sticky thead th[data-v-eea8730e]{border:none;padding:.5rem}thead th[data-v-eea8730e]{background-color:#437fc7!important;color:#fff!important}.period[data-v-eea8730e]{flex-flow:row wrap;flex-grow:1}.period[data-v-eea8730e],.period>label[data-v-eea8730e]{display:flex;align-items:center}.period>label[data-v-eea8730e]{font-size:1rem;height:40px}.period>label[data-v-eea8730e],.period>label>input[data-v-eea8730e]{margin-right:5px}@-webkit-keyframes spinner-data-v-eea8730e{to{transform:rotate(1turn)}}@keyframes spinner-data-v-eea8730e{to{transform:rotate(1turn)}}.fa-spinner[data-v-eea8730e]{-webkit-animation:spinner-data-v-eea8730e 1s linear infinite;animation:spinner-data-v-eea8730e 1s linear infinite}",""]),t.exports=o}}]);