(window.webpackJsonp=window.webpackJsonp||[]).push([[31,16,25,40,41,42,43,44],{297:function(t,l,e){var content=e(314);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(18).default)("3f45fa5e",content,!0,{sourceMap:!1})},300:function(t,l,e){"use strict";e.r(l);var r={props:["data","myMillis"],data:function(){return{rotateVal:17,flowColor:"gray"}},mounted:function(){this.calcRotate(),this.checkColor()},methods:{calcRotate:function(){var t=this.data.als_qmax,l=Math.floor(100*this.data.alfm_real_time_val)/100;this.rotateVal=l/t*146+17,this.rotateVal<17&&(this.rotateVal=17),this.rotateVal>163&&(this.rotateVal=163)},checkColor:function(){if(0!=this.data.als_id){var t="green";this.myMillis-this.data.alfm_created_at>=18e4||this.myMillis-this.data.alfm_min>=432e5?t="red":this.data.alfm_real_time_val<=0&&(t="yellow"),this.flowColor=t}}},watch:{data:{handler:function(t,l){this.calcRotate(),this.checkColor()},deep:!0},myMillis:{handler:function(t,l){this.calcRotate(),this.checkColor()},deep:!0}}},c=(e(313),e(9)),component=Object(c.a)(r,(function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("svg",{ref:"denah_front",staticClass:"mw-100 mh-100",attrs:{version:"1.2",viewBox:"0 0 1080 650",preserveAspectRatio:"xMinYMid meet"}},[e("g",[e("g",[e("path",{staticClass:"cls-1",attrs:{d:"M540,638.51c-3,0-6.13,0-9.87-.17l-2.81-.11c-3.05-.12-5.39-.24-7.57-.39l-.89-.05-1.52-.1c-3.29-.23-6.53-.51-9.7-.83l-1.7-.21c-2.54-.26-5.14-.57-8-1l-.3,0-2.44-.34c-2.67-.38-5.35-.79-8-1.24-.4-.08-.81-.14-1.22-.2l-.44-.07c-3.11-.55-6.27-1.16-9.33-1.8l-1.14-.24-1.16-.25c-2.63-.57-5-1.12-7.32-1.67l-2.5-.59c-6.47-1.63-12.47-3.32-18.29-5.16l-.48-.15c-.58-.19-1.18-.37-1.76-.57-2.74-.88-5.13-1.69-7.36-2.48-.65-.22-1.24-.41-1.82-.62-2.9-1-5.82-2.13-9-3.36l-.34-.15-.84-.34c-2.72-1.08-5.22-2.11-7.62-3.15-.73-.31-1.4-.59-2.06-.89-2.78-1.21-5.43-2.41-7.93-3.58l-.54-.26-.2-.08c-2.55-1.21-5.29-2.57-8.59-4.26-.52-.26-1-.5-1.44-.75-2.58-1.34-4.9-2.58-7.18-3.83l-1.64-.91c-3-1.7-5.8-3.31-8.48-4.93C308.63,551.83,229.94,529.65,151,529.65h-4.6V120.35H151c79.45,0,158-22.09,227.12-63.87A309.44,309.44,0,0,1,514,12.59l2.11-.17,5-.33c1.9-.12,3.79-.2,5.69-.29l3.56-.14c3.61-.12,6.64-.17,9.55-.17h.28c2.91,0,5.94,0,9.53.17l3.59.14c1.89.09,3.78.17,5.68.29l5,.33,2.14.18A309.22,309.22,0,0,1,701.88,56.48C771,98.26,849.57,120.35,929,120.35h4.62v409.3H929c-79,0-157.66,22.18-227.57,64.12C698.77,595.4,696,597,693,598.7l-.8.45c-.29.16-.59.31-.88.48-2.24,1.24-4.56,2.48-7.07,3.77-.54.3-1,.54-1.48.78-3.35,1.72-6.1,3.07-8.67,4.29l-.17.08-.6.28c-2.42,1.14-5.08,2.34-7.81,3.53-.71.32-1.38.6-2.06.88-2.45,1.07-5,2.1-7.68,3.19l-.84.34-.38.16c-3.11,1.21-6,2.3-8.89,3.32-.62.23-1.21.42-1.8.62-2.3.82-4.68,1.62-7.36,2.48l-1.82.59-.49.16c-5.81,1.83-11.81,3.52-18.34,5.16l-2.42.58c-2.3.55-4.71,1.1-7.38,1.68l-1.12.24-1.12.24c-3.08.64-6.23,1.25-9.4,1.81l-.39.06c-.41.06-.81.12-1.22.2-2.64.45-5.32.86-8,1.23-.83.13-1.65.24-2.46.34l-.29,0c-2.88.4-5.48.71-8,1l-1.82.21c-3.1.32-6.34.6-9.58.82-.55.05-1.06.08-1.57.11l-.88.05c-2.19.15-4.53.27-7.6.39l-2.81.11C546.13,638.46,543,638.51,540,638.51Z"}}),t._v(" "),e("path",{attrs:{d:"M540.14,15c2.86,0,5.85.06,9.45.17l3.51.14c1.85.08,3.76.17,5.62.29q2.47.15,4.95.33l1,.08,1.13.09a307.94,307.94,0,0,1,134.3,43.39c69.69,42.11,148.85,64.37,228.93,64.37h1.14V526.17H929c-79.6,0-158.91,22.34-229.38,64.63-2.65,1.6-5.39,3.19-8.38,4.87l-.76.42-.89.49c-2.24,1.24-4.53,2.46-7,3.73l-.08,0-.08,0c-.38.2-.78.42-1.28.67h0l0,0c-3.25,1.66-6,3-8.49,4.2l-.14.06-.67.31c-2.46,1.16-5.06,2.34-7.73,3.5h0l0,0c-.56.25-1.16.51-1.92.82l-.06,0,0,0c-2.37,1-4.83,2-7.49,3.11l-.91.37-.34.14c-3.11,1.21-6,2.28-8.78,3.28h0l-.05,0c-.53.2-1.08.38-1.64.57l-.06,0-.06,0c-2.17.77-4.53,1.56-7.21,2.42l-.06,0-.05,0c-.57.2-1.15.38-1.73.56l-.44.14c-5.75,1.82-11.67,3.49-18.1,5.1l-1.23.29-1.22.3c-2.24.53-4.61,1.07-7.26,1.65l-1.18.25-1.09.23c-3,.63-6.11,1.23-9.2,1.78l-.39.06c-.44.06-.87.13-1.3.21-2.6.44-5.23.85-7.83,1.22h-.06c-.79.12-1.59.23-2.38.33l-.31,0c-2.83.39-5.39.7-7.84.95h-.1l-1.71.21c-3.12.31-6.3.59-9.47.81h-.1l-1.44.09-.92.05c-2.14.15-4.45.27-7.47.39l-2.78.11c-3.71.11-6.81.17-9.76.17s-6-.06-9.72-.17l-2.8-.11c-3-.12-5.35-.24-7.52-.39l-.89-.05-1.44-.09h-.1c-3.17-.22-6.35-.5-9.47-.81l-1.71-.21h-.1c-2.45-.25-5-.56-7.87-.95l-.28,0c-.79-.1-1.59-.21-2.38-.33h-.06c-2.6-.37-5.23-.78-7.83-1.22-.43-.08-.86-.15-1.3-.21l-.39-.06c-3.09-.55-6.19-1.15-9.24-1.79l-1-.22-1.18-.25c-2.65-.58-5-1.12-7.3-1.66l-1.18-.29-1.23-.29c-6.43-1.61-12.35-3.28-18.08-5.09l-.46-.15c-.58-.18-1.16-.36-1.73-.56l-.05,0-.06,0c-2.68-.86-5-1.65-7.21-2.42l-.07,0-.06,0c-.55-.18-1.1-.36-1.63-.56l-.05,0h0c-2.8-1-5.68-2.07-8.78-3.28l-.34-.14-.88-.36c-2.69-1.07-5.15-2.09-7.52-3.12l-.05,0-.06,0c-.76-.31-1.36-.57-1.92-.82l0,0h0c-2.67-1.16-5.27-2.34-7.73-3.49-.23-.12-.45-.22-.67-.32l-.14-.06c-2.54-1.2-5.24-2.54-8.49-4.2l0,0h0c-.5-.25-.9-.47-1.28-.67l-.08,0-.08,0c-2.46-1.27-4.74-2.49-7-3.73l-.89-.49-.78-.43c-3-1.67-5.72-3.26-8.39-4.87C309.88,548.51,230.57,526.17,151,526.17h-1.12V123.83H151c80.08,0,159.24-22.26,228.93-64.37a307.94,307.94,0,0,1,134.3-43.39l1.13-.09,1-.08q2.48-.18,4.95-.33c1.86-.12,3.77-.21,5.61-.29l3.55-.14C534,15,537,15,539.86,15h.28m0-7h-.28c-3.24,0-6.44.07-9.65.17l-3.62.14c-1.92.09-3.83.17-5.75.3l-5,.33-2.14.17A314.9,314.9,0,0,0,376.31,53.5C308.26,94.62,230.5,116.86,151,116.86h-8.1V533.14H151c79.68,0,157.45,22.62,225.78,63.62,2.82,1.71,5.68,3.36,8.57,5l1.67.93c2.37,1.3,4.75,2.57,7.18,3.83.5.28,1,.54,1.53.8,2.89,1.48,5.78,2.92,8.72,4.32l.72.33q3.94,1.86,8,3.6c.69.32,1.39.61,2.1.91q3.84,1.66,7.74,3.2l1.18.49q4.5,1.76,9,3.38c.61.23,1.24.44,1.86.65,2.46.87,4.92,1.68,7.41,2.49.76.26,1.55.5,2.31.75,6.12,1.93,12.3,3.65,18.55,5.22l2.48.59c2.47.59,4.94,1.15,7.43,1.69l2.28.49q4.74,1,9.5,1.83c.54.09,1.06.16,1.58.26q4.05.68,8.1,1.25c.92.14,1.86.27,2.79.39,2.68.36,5.36.69,8.06,1l1.76.21c3.24.33,6.5.61,9.75.84.82.07,1.66.1,2.48.15,2.54.18,5.1.3,7.68.4l2.82.11c3.33.1,6.64.17,10,.17s6.65-.07,10-.17l2.82-.11c2.58-.1,5.14-.22,7.68-.4.82,0,1.66-.08,2.48-.15,3.25-.23,6.51-.51,9.75-.84l1.76-.21c2.7-.28,5.38-.61,8.06-1,.93-.12,1.87-.25,2.79-.39q4-.57,8.1-1.25c.52-.1,1-.17,1.58-.26q4.75-.84,9.5-1.83l2.28-.49c2.49-.54,5-1.1,7.43-1.69l2.48-.59c6.25-1.57,12.43-3.29,18.55-5.22.76-.25,1.55-.49,2.31-.75,2.49-.81,5-1.62,7.41-2.49.62-.21,1.25-.42,1.86-.65q4.54-1.62,9-3.38l1.18-.49q3.9-1.53,7.74-3.2c.71-.3,1.41-.59,2.1-.91q4-1.74,8-3.6l.72-.33c2.94-1.4,5.83-2.84,8.72-4.32.52-.26,1-.52,1.53-.8,2.43-1.26,4.81-2.53,7.18-3.83l1.67-.93c2.89-1.62,5.75-3.27,8.57-5,68.33-41,146.1-63.62,225.78-63.62h8.08V116.86H929c-79.51,0-157.27-22.24-225.32-63.36A314.9,314.9,0,0,0,566.32,9.12L564.18,9l-5-.33c-1.92-.13-3.83-.21-5.75-.3l-3.62-.14c-3.21-.1-6.41-.17-9.65-.17Z"}})]),t._v(" "),e("g",[e("path",{style:{fill:t.flowColor},attrs:{d:"M540,633.28A308.28,308.28,0,0,1,322,107,308.28,308.28,0,0,1,758,543,306.25,306.25,0,0,1,540,633.28Z"}}),t._v(" "),e("path",{staticClass:"cls-3",attrs:{d:"M540,25.42A299.66,299.66,0,0,1,656.6,601,299.66,299.66,0,0,1,423.4,49,297.61,297.61,0,0,1,540,25.42M540,8C364.93,8,223,149.93,223,325S364.93,642,540,642,857,500.07,857,325,715.07,8,540,8Z"}})]),t._v(" "),e("g",[e("path",{staticClass:"cls-4",attrs:{d:"M540,581A256,256,0,0,1,359,144,256,256,0,1,1,721,506,254.34,254.34,0,0,1,540,581Z"}}),t._v(" "),e("path",{staticClass:"cls-3",attrs:{d:"M540,77.68A246.4,246.4,0,1,1,443.74,97.1,245.75,245.75,0,0,1,540,77.68m0-17.42C393.79,60.26,275.26,178.79,275.26,325S393.79,589.74,540,589.74,804.74,471.21,804.74,325,686.21,60.26,540,60.26Z"}})]),t._v(" "),e("g",[e("g",[e("path",{staticClass:"cls-5",attrs:{d:"M540,198.73a11.34,11.34,0,0,1-11.32-11.33V112.51a11.32,11.32,0,0,1,22.64,0V187.4A11.34,11.34,0,0,1,540,198.73Z"}}),t._v(" "),e("path",{attrs:{d:"M540,102.06a10.46,10.46,0,0,1,10.45,10.45V187.4a10.45,10.45,0,0,1-20.9,0V112.51A10.46,10.46,0,0,1,540,102.06m0-1.74a12.19,12.19,0,0,0-12.19,12.19V187.4a12.19,12.19,0,1,0,24.38,0V112.51A12.19,12.19,0,0,0,540,100.32Z"}})]),t._v(" "),e("g",[e("path",{staticClass:"cls-5",attrs:{d:"M481.79,211.3a11.33,11.33,0,0,1-10.39-6.81l-29.87-68.68a11.34,11.34,0,0,1,5.87-14.9,11.19,11.19,0,0,1,4.51-.94,11.32,11.32,0,0,1,10.39,6.81l29.86,68.68a11.33,11.33,0,0,1-10.37,15.84Z"}}),t._v(" "),e("path",{attrs:{d:"M451.91,120.84h0a10.47,10.47,0,0,1,9.59,6.28l29.86,68.69A10.46,10.46,0,0,1,486,209.56a10.44,10.44,0,0,1-13.75-5.42l-29.87-68.68a10.46,10.46,0,0,1,5.42-13.75,10.35,10.35,0,0,1,4.16-.87m0-1.74a12.17,12.17,0,0,0-4.86,1h0a12.2,12.2,0,0,0-6.32,16l29.87,68.69a12.17,12.17,0,0,0,16,6.31h0a12.18,12.18,0,0,0,6.32-16L463.1,126.43a12.2,12.2,0,0,0-11.19-7.33Z"}})]),t._v(" "),e("g",[e("path",{staticClass:"cls-5",attrs:{d:"M430.62,245.23a11.23,11.23,0,0,1-8-3.31l-53-53a11.32,11.32,0,1,1,16-16l53,53a11.32,11.32,0,0,1-8,19.32Z"}}),t._v(" "),e("path",{attrs:{d:"M377.67,170.5a10.38,10.38,0,0,1,7.39,3.07l52.95,53a10.45,10.45,0,0,1,0,14.78,10.44,10.44,0,0,1-14.77,0l-53-53a10.46,10.46,0,0,1,7.39-17.84m0-1.74a12.2,12.2,0,0,0-8.62,20.82L422,242.53a12.2,12.2,0,0,0,17.25,0h0a12.19,12.19,0,0,0,0-17.24l-53-53a12.15,12.15,0,0,0-8.62-3.57Z"}})]),t._v(" "),e("g",[e("path",{staticClass:"cls-5",attrs:{d:"M396.94,295.79a11.3,11.3,0,0,1-4.33-.86l-69.19-28.67a11.32,11.32,0,0,1,4.33-21.78,11.16,11.16,0,0,1,4.33.87L401.27,274a11.32,11.32,0,0,1-4.33,21.78Z"}}),t._v(" "),e("path",{attrs:{d:"M327.75,245.35h0a10.42,10.42,0,0,1,4,.8l69.19,28.66a10.45,10.45,0,1,1-8,19.31l-69.19-28.66a10.45,10.45,0,0,1,4-20.11m0-1.74a12.19,12.19,0,0,0-4.67,23.46l69.2,28.66a12.17,12.17,0,0,0,15.92-6.6h0a12.19,12.19,0,0,0-6.59-15.93l-69.2-28.66a12.15,12.15,0,0,0-4.66-.93Z"}})]),t._v(" "),e("g",[e("path",{staticClass:"cls-5",attrs:{d:"M598.21,211.3a11.33,11.33,0,0,1-10.37-15.84l29.86-68.68A11.32,11.32,0,0,1,628.09,120a11.32,11.32,0,0,1,10.38,15.84L608.6,204.49a11.33,11.33,0,0,1-10.39,6.81Z"}}),t._v(" "),e("path",{attrs:{d:"M628.09,120.84a10.35,10.35,0,0,1,4.16.87,10.46,10.46,0,0,1,5.42,13.75L607.8,204.14a10.45,10.45,0,1,1-19.16-8.33l29.86-68.69a10.47,10.47,0,0,1,9.59-6.28m0-1.74a12.2,12.2,0,0,0-11.19,7.33L587,195.11a12.18,12.18,0,0,0,6.32,16h0a12.17,12.17,0,0,0,16-6.31l29.87-68.69a12.2,12.2,0,0,0-6.32-16h0a12.17,12.17,0,0,0-4.86-1Z"}})]),t._v(" "),e("g",[e("path",{staticClass:"cls-5",attrs:{d:"M649.38,245.23a11.32,11.32,0,0,1-8-19.32l53-53a11.32,11.32,0,0,1,16,16l-53,53A11.23,11.23,0,0,1,649.38,245.23Z"}}),t._v(" "),e("path",{attrs:{d:"M702.33,170.5a10.46,10.46,0,0,1,7.39,17.84l-53,53A10.45,10.45,0,1,1,642,226.52l53-53a10.38,10.38,0,0,1,7.39-3.07m0-1.74a12.15,12.15,0,0,0-8.62,3.57l-53,53a12.19,12.19,0,0,0,0,17.24h0a12.2,12.2,0,0,0,17.25,0l53-52.95a12.19,12.19,0,0,0,0-17.25h0a12.15,12.15,0,0,0-8.62-3.57Z"}})]),t._v(" "),e("g",[e("path",{staticClass:"cls-5",attrs:{d:"M683.06,295.79A11.32,11.32,0,0,1,678.73,274l69.19-28.66a11.16,11.16,0,0,1,4.33-.87,11.32,11.32,0,0,1,4.33,21.78l-69.19,28.67a11.3,11.3,0,0,1-4.33.86Z"}}),t._v(" "),e("path",{attrs:{d:"M752.25,245.35a10.45,10.45,0,0,1,4,20.11l-69.19,28.66a10.45,10.45,0,1,1-8-19.31l69.19-28.66a10.42,10.42,0,0,1,4-.8m0-1.74a12.15,12.15,0,0,0-4.66.93l-69.2,28.66a12.19,12.19,0,0,0-6.59,15.93h0a12.17,12.17,0,0,0,15.92,6.6l69.2-28.66a12.19,12.19,0,0,0-4.67-23.46Z"}})])]),t._v(" "),e("g",[e("text",{attrs:{dx:"775px",dy:"345px","dominant-baseline":"middle","text-anchor":"end"}},[e("tspan",{staticClass:"font-7",staticStyle:{"font-size":"45px"}},[t._v(t._s(t.data.als_qmax||0)+" ")]),t._v(" "),e("tspan",{staticClass:"font-7",staticStyle:{"font-size":"35px"}},[t._v("m/h")]),t._v(" "),e("tspan",{staticStyle:{"font-size":"18px","baseline-shift":"80%"},attrs:{"font-weight":"bold",dx:"-40"}},[t._v("3")])])]),t._v(" "),e("g",[e("rect",{staticClass:"cls-6",attrs:{x:"510.39",y:"408.6",width:"59.22",height:"33.09"}}),t._v(" "),e("rect",{staticClass:"cls-7",attrs:{x:"510.39",y:"441.7",width:"59.22",height:"33.09"}}),t._v(" "),e("rect",{staticClass:"cls-6",attrs:{x:"423.3",y:"408.6",width:"59.22",height:"33.09"}}),t._v(" "),e("rect",{staticClass:"cls-7",attrs:{x:"423.3",y:"441.7",width:"59.22",height:"33.09"}}),t._v(" "),e("rect",{staticClass:"cls-6",attrs:{x:"597.48",y:"408.6",width:"59.22",height:"33.09",transform:"translate(1254.17 850.3) rotate(180)"}}),t._v(" "),e("rect",{staticClass:"cls-7",attrs:{x:"597.48",y:"441.7",width:"59.22",height:"33.09",transform:"translate(1254.17 916.48) rotate(180)"}})]),t._v(" "),e("rect",{staticClass:"cls-1",attrs:{x:"492.97",y:"516.59",width:"94.05",height:"6.97"}}),t._v(" "),e("rect",{staticClass:"cls-1",attrs:{x:"499.94",y:"528.78",width:"80.12",height:"6.97"}}),t._v(" "),e("rect",{staticClass:"cls-1",attrs:{x:"510.39",y:"539.23",width:"59.22",height:"6.97"}}),t._v(" "),e("g",[e("rect",{staticClass:"cls-8",attrs:{x:"937.5",y:"51.94",width:"121.15",height:"546.13"}}),t._v(" "),e("path",{attrs:{d:"M1051.29,59.29V590.71H944.85V59.29h106.44M1066,44.58H930.15V605.42H1066V44.58Z"}})]),t._v(" "),e("g",{ref:"rotate",staticClass:"rotate",style:{transform:"rotate("+t.rotateVal+"deg)"}},[e("polygon",{style:{fill:t.flowColor},attrs:{points:"359.11 325 538.31 290.48 538.31 359.52 359.11 325"}}),t._v(" "),e("path",{attrs:{d:"M536.61,292.53v64.94L368.06,325l168.55-32.47m3.39-4.11L350.15,325,540,361.58V288.42Z"}})]),t._v(" "),e("g",[e("circle",{staticClass:"cls-3",attrs:{cx:"540",cy:"325",r:"53.59",transform:"translate(-71.65 477.03) rotate(-45)"}}),t._v(" "),e("path",{attrs:{d:"M540,273.55A51.45,51.45,0,1,1,488.55,325,51.51,51.51,0,0,1,540,273.55m0-4.29A55.74,55.74,0,1,0,595.74,325,55.75,55.75,0,0,0,540,269.26Z"}})]),t._v(" "),e("g",[e("circle",{style:{fill:t.flowColor},attrs:{cx:"540",cy:"325",r:"21.77"}}),t._v(" "),e("path",{attrs:{d:"M540,304.1A20.9,20.9,0,1,1,519.1,325,20.93,20.93,0,0,1,540,304.1m0-1.74A22.64,22.64,0,1,0,562.64,325,22.63,22.63,0,0,0,540,302.36Z"}})]),t._v(" "),e("g",[e("rect",{staticClass:"cls-8",attrs:{x:"21.35",y:"51.94",width:"121.15",height:"546.13"}}),t._v(" "),e("path",{attrs:{d:"M135.15,59.29V590.71H28.71V59.29H135.15m14.7-14.71H14V605.42H149.85V44.58Z"}})])])])}),[],!1,null,"6698e707",null);l.default=component.exports},301:function(t,l,e){"use strict";e.r(l);var r={extends:e(354).a,props:["opt","dt"],mounted:function(){this.renderChart(this.chartData,this.options)},data:function(){return{options:{responsive:!0,maintainAspectRatio:!1,legend:{display:!1},title:{display:!1,text:"Perbandingan Modal Dan Potongan",fontSize:24,fontColor:"#6b7280"},animation:{duration:0},tooltips:{enabled:!0},elements:{point:{radius:2}},scales:{xAxes:[{gridLines:{display:!1},ticks:{fontSize:10,autoSkip:!1,minRotation:90},weight:100}],yAxes:[{ticks:{beginAtZero:!1},gridLines:{display:!1}}]}},chartData:{labels:[],datasets:[{label:"FlowRate",data:[],borderColor:"#bb86fc",borderWidth:1}]}}},methods:{loadAgain:function(){this.chartData=this.dt,this.options=this.opt,this.renderChart(this.chartData,this.options)}},watch:{}},c=e(9),component=Object(c.a)(r,undefined,undefined,!1,null,null,null);l.default=component.exports},304:function(t,l,e){"use strict";e.r(l);var r=e(9),component=Object(r.a)({},(function(){var t=this.$createElement,l=this._self._c||t;return l("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50"}},[l("g",{attrs:{id:"Layer_2","data-name":"Layer 2"}},[l("g",{attrs:{id:"Layer_2-2","data-name":"Layer 2"}},[l("path",{staticClass:"custome_svg",attrs:{d:"M50,45a1.27,1.27,0,0,1-.5,1l-5,3.75a1.25,1.25,0,1,1-1.49-2l2-1.5H5A1.25,1.25,0,0,1,3.78,45h0V5L2.28,7A1.25,1.25,0,0,1,.22,5.56l.07-.09L4,.47a1.28,1.28,0,0,1,2,0l3.75,5A1.25,1.25,0,1,1,7.78,7h0L6.28,5V43.75H45l-2-1.5a1.25,1.25,0,1,1,1.49-2l5,3.75A1.27,1.27,0,0,1,50,45ZM10,31.24a3.74,3.74,0,0,1,3.74-3.75,3.69,3.69,0,0,1,1.84.48l4.68-4.1a3.74,3.74,0,1,1,7.06-.26l4.34,3.26a3.75,3.75,0,0,1,3.14-.48l5.84-8a3.74,3.74,0,1,1,2,1.47l-5.84,8a3.75,3.75,0,1,1-6.66,1l-4.34-3.26a3.74,3.74,0,0,1-3.91.15l-4.68,4.09a3.75,3.75,0,1,1-7,2.78A3.66,3.66,0,0,1,10,31.24Zm32.48-15A1.25,1.25,0,1,0,43.75,15h0A1.25,1.25,0,0,0,42.51,16.23ZM32.51,30a1.25,1.25,0,1,0,1.25-1.25A1.25,1.25,0,0,0,32.51,30Zm-10-7.5a1.25,1.25,0,1,0,1.25-1.26A1.26,1.26,0,0,0,22.52,22.49Zm-10,8.75A1.25,1.25,0,1,0,13.78,30,1.25,1.25,0,0,0,12.53,31.24Z"}})])])])}),[],!1,null,null,null);l.default=component.exports},305:function(t,l,e){"use strict";e.r(l);var r=e(9),component=Object(r.a)({},(function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 58.27 50"}},[e("g",{attrs:{id:"Layer_2","data-name":"Layer 2"}},[e("g",{attrs:{id:"Layer_2-2","data-name":"Layer 2"}},[e("g",[e("path",{staticClass:"cls-1",attrs:{d:"M15.67,42.68l3.89-3.9a19.21,19.21,0,0,0,15.55,5.57A18.85,18.85,0,0,0,47,38.81,19.44,19.44,0,1,0,13.84,25H22l.11.18-11,11L0,25.18.08,25H8.22A24.81,24.81,0,0,1,17.5,5.62,24.25,24.25,0,0,1,33.1,0,25,25,0,1,1,15.67,42.68Z"}}),t._v(" "),e("path",{staticClass:"cls-1",attrs:{d:"M42.38,34.83l-5.54-3.28c-2-1.18-4-2.34-5.92-3.53a.94.94,0,0,1-.42-.62c0-4.44,0-8.89,0-13.34l0-.11h4.11v.69c0,3.44,0,6.89,0,10.34a1.06,1.06,0,0,0,.59,1.07c3,1.76,6,3.55,9.13,5.41Z"}})])])])])}),[],!1,null,null,null);l.default=component.exports},306:function(t,l,e){"use strict";e.r(l);var r=e(9),component=Object(r.a)({},(function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50"}},[e("g",{attrs:{id:"Layer_2","data-name":"Layer 2"}},[e("g",{attrs:{id:"Layer_2-2","data-name":"Layer 2"}},[e("g",[e("path",{staticClass:"cls-1",attrs:{d:"M27.65,0l.28.11A1.68,1.68,0,0,1,29,1.74c0,1.68,0,3.36,0,5.05a2.44,2.44,0,0,0,1.61,2.36l1.7.7A2.45,2.45,0,0,0,35,9.35c1.2-1.19,2.38-2.39,3.57-3.58a1.69,1.69,0,0,1,2.57,0c1,1,2.09,2.09,3.14,3.14a1.69,1.69,0,0,1,0,2.55l-3.48,3.48a2.43,2.43,0,0,0-.53,2.81c.24.56.48,1.12.71,1.69A2.47,2.47,0,0,0,43.24,21h4.9A1.7,1.7,0,0,1,50,22.83v4.39A1.69,1.69,0,0,1,48.19,29H43.37A2.43,2.43,0,0,0,41,30.64c-.16.42-.34.83-.52,1.28a2.09,2.09,0,0,1-.21-.19L38.12,29.6a.4.4,0,0,1-.12-.46,13.59,13.59,0,0,0-6.68-16.09,13.19,13.19,0,0,0-7.72-1.48,13.62,13.62,0,1,0,5.58,26.5.26.26,0,0,1,.32,0c.76.78,1.53,1.55,2.3,2.32l.09.11-1.35.56A2.42,2.42,0,0,0,29,43.33v4.79A1.71,1.71,0,0,1,27.13,50H22.85A1.7,1.7,0,0,1,21,48.11V43.42a2.48,2.48,0,0,0-1.58-2.34l-1.86-.77a2.41,2.41,0,0,0-2.66.5l-3.43,3.42a1.67,1.67,0,0,1-2.56,0Q7.32,42.68,5.75,41.1a1.66,1.66,0,0,1,0-2.54l3.41-3.41a2.46,2.46,0,0,0,.54-2.79c-.25-.58-.48-1.16-.72-1.75A2.4,2.4,0,0,0,6.67,29c-1.54,0-3.08,0-4.61,0A1.84,1.84,0,0,1,0,27.6V22.35s0,0,0,0A1.7,1.7,0,0,1,1.89,21H6.76a2.49,2.49,0,0,0,2.29-1.54c.24-.59.49-1.16.73-1.74A2.43,2.43,0,0,0,9.27,15l-3.5-3.5a1.68,1.68,0,0,1,0-2.58L8.84,5.8a1.7,1.7,0,0,1,2.64,0C12.65,7,13.81,8.13,15,9.29a2.45,2.45,0,0,0,2.75.53l1.65-.68A2.41,2.41,0,0,0,21,6.8v-5A1.63,1.63,0,0,1,21.65.36,4.71,4.71,0,0,1,22.4,0Z"}}),t._v(" "),e("path",{staticClass:"cls-1",attrs:{d:"M15.81,22.8l1,1.06,2.45,2.55a5.73,5.73,0,0,0,2.31,1.51A4.41,4.41,0,0,0,25,27.76a5.67,5.67,0,0,0,2.83-2.88,4.41,4.41,0,0,0-.48-4.48,7.93,7.93,0,0,0-1-1.22c-1.07-1.11-2.17-2.18-3.25-3.27a2.38,2.38,0,0,1-.18-.22,10.05,10.05,0,0,1,3.47-.42A10.15,10.15,0,0,1,35.18,23a10.27,10.27,0,0,1-.35,5.52c0,.16-.1.33-.14.49A1.14,1.14,0,0,0,35,30.13c.31.35.63.67,1,1l10.14,9.8a3.73,3.73,0,0,1,1.26,2.25,3,3,0,0,1-.09,1.15,3.67,3.67,0,0,1-3,2.63,2.91,2.91,0,0,1-2.54-.86c-1.22-1.15-2.42-2.32-3.62-3.49-2.47-2.4-4.94-4.82-7.41-7.23a1.79,1.79,0,0,0-1.18-.69,3.23,3.23,0,0,0-1,.15,12.28,12.28,0,0,1-3.12.58,9.08,9.08,0,0,1-5.83-1.86,10.09,10.09,0,0,1-4-5.59,10.73,10.73,0,0,1-.12-4.75C15.45,23.06,15.67,22.94,15.81,22.8ZM43.6,44.91A1.59,1.59,0,1,0,42,43.32,1.59,1.59,0,0,0,43.6,44.91Z"}})])])])])}),[],!1,null,null,null);l.default=component.exports},307:function(t,l,e){"use strict";e.r(l);var r=e(9),component=Object(r.a)({},(function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50"}},[e("g",{attrs:{id:"Layer_2","data-name":"Layer 2"}},[e("g",{attrs:{id:"Layer_2-2","data-name":"Layer 2"}},[e("g",[e("path",{staticClass:"cls-1",attrs:{d:"M27.48,49.77V44.85c.85-.18,1.7-.32,2.53-.53a20.07,20.07,0,0,0-.52-39C29,5.22,28.4,5.16,27.87,5c-.16,0-.41-.22-.41-.34,0-1.56,0-3.12,0-4.69C37.45.6,49.18,9.24,50,23.48A24.9,24.9,0,0,1,27.48,49.77Z"}}),t._v(" "),e("path",{staticClass:"cls-1",attrs:{d:"M37.47,32.25l-1.86,3.06c-.19-.11-.34-.18-.48-.27L22.9,27.71a.79.79,0,0,1-.47-.77c0-4.66,0-9.32,0-14a5.36,5.36,0,0,1,0-.55h3.73v.7q0,5.92,0,11.87a.85.85,0,0,0,.49.87c3.42,2,6.83,4,10.25,6.07C37.1,32,37.26,32.13,37.47,32.25Z"}}),t._v(" "),e("path",{staticClass:"cls-1",attrs:{d:"M22.44.06c0,1.55,0,3.12,0,4.68,0,.11-.19.28-.32.31-4.7,1.09-5.52,1.45-9.25,4L9.07,5.63C11.35,3,19-.15,22.44.06Z"}}),t._v(" "),e("path",{staticClass:"cls-1",attrs:{d:"M5.48,9.11l3.57,3.57c-.05.07-.12.2-.21.32a20.23,20.23,0,0,0-3.77,9c0,.17-.2.45-.31.45-1.56,0-3.12,0-4.76,0A24.83,24.83,0,0,1,5.48,9.11Z"}}),t._v(" "),e("path",{staticClass:"cls-1",attrs:{d:"M9.11,37.2,5.5,40.71A25.19,25.19,0,0,1,0,27.42c1.62,0,3.19,0,4.75,0,.1,0,.28.19.3.31A20.34,20.34,0,0,0,9.11,37.2Z"}}),t._v(" "),e("path",{staticClass:"cls-1",attrs:{d:"M9.08,44.34,12.58,41c1.24.74,2.42,1.5,3.67,2.15A18.51,18.51,0,0,0,22,44.93c.17,0,.44.2.44.32,0,1.56,0,3.12,0,4.75A25.24,25.24,0,0,1,9.08,44.34Z"}})])])])])}),[],!1,null,null,null);l.default=component.exports},308:function(t,l,e){"use strict";e.r(l);var r=e(9),component=Object(r.a)({},(function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50"}},[e("g",{attrs:{id:"Layer_2","data-name":"Layer 2"}},[e("g",{attrs:{id:"Layer_2-2","data-name":"Layer 2"}},[e("g",[e("path",{staticClass:"cls-1",attrs:{d:"M36.93,50H0V0H36.93ZM32.58,4.55H4.36V14.71H32.58ZM26.09,45.43h6.49V29.59H26.09ZM4.34,25H10.8V19.34H4.34Zm21.75,0h6.49V19.35H26.09ZM4.34,35.19H10.8V29.58H4.34Zm6.48,4.62H4.36v5.63h6.46ZM21.69,19.35H15.24V25h6.45Zm0,15.86V29.58H15.23v5.63Zm0,10.24V39.83H15.24v5.62Z"}}),t._v(" "),e("path",{staticClass:"cls-1",attrs:{d:"M41.34,38.62v-25H50v25Z"}}),t._v(" "),e("path",{staticClass:"cls-1",attrs:{d:"M50,11.3H41.33C41.3,9.41,41,7.49,42.47,6a4,4,0,0,1,4.66-1.17,4.24,4.24,0,0,1,2.84,4C50,9.59,50,10.42,50,11.3Z"}}),t._v(" "),e("path",{staticClass:"cls-1",attrs:{d:"M41.88,40.94h7.54l-3.77,5.8Z"}})])])])])}),[],!1,null,null,null);l.default=component.exports},313:function(t,l,e){"use strict";e(297)},314:function(t,l,e){var r=e(17)(!1);r.push([t.i,".cls-1[data-v-6698e707]{fill:#4d4d4d}.fill_red[data-v-6698e707]{fill:red}.fill_green[data-v-6698e707]{fill:green}.fill_grey[data-v-6698e707]{fill:grey}.cls-3[data-v-6698e707]{fill:#1a1a1a}.cls-4[data-v-6698e707]{fill:#e6e6e6}.cls-5[data-v-6698e707]{fill:#00b0ff}.cls-6[data-v-6698e707]{fill:#999}.cls-7[data-v-6698e707]{fill:#ccc}.cls-8[data-v-6698e707]{fill:grey}.rotate[data-v-6698e707]{transform-box:fill-box;transform-origin:right center}@media only screen and (max-width:1023px){.part-data[data-v-6698e707],.part-svg[data-v-6698e707]{width:100%}}@media only screen and (min-width:1024px){.tenant .part-data[data-v-6698e707],.tenant .part-svg[data-v-6698e707]{width:100%}.kim .part-data[data-v-6698e707],.kim .part-svg[data-v-6698e707]{width:50%}}",""]),t.exports=r},352:function(t,l){function e(t){var l=new Error("Cannot find module '"+t+"'");throw l.code="MODULE_NOT_FOUND",l}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id=352},510:function(t,l,e){var content=e(655);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(18).default)("64497e44",content,!0,{sourceMap:!1})},654:function(t,l,e){"use strict";e(510)},655:function(t,l,e){var r=e(17)(!1);r.push([t.i,".custome_svg[data-v-3b9e1c7a]{fill:#4d4d4d}table[data-v-3b9e1c7a]{font-size:80%}td[data-v-3b9e1c7a]{background-color:hsla(0,0%,100%,.05)!important}",""]),t.exports=r},678:function(t,l,e){"use strict";e.r(l);e(120),e(41),e(48);var r=e(300),c=e(304),n=e(305),d=e(306),o=e(307),h=e(308),v=e(301),f={props:["data","tampil"],components:{FlowMeterSVG:r.default,SVGLGraph:c.default,SVGLHistory:n.default,SVGLInstalled:d.default,SVGLTime:o.default,SVGLTotalizer:h.default,LineChart:v.default},data:function(){return{barChartData:{labels:[],datasets:[{label:"FlowRate",data:[],borderColor:"#bb86fc",borderWidth:1}]},barChartOptions:{responsive:!0,maintainAspectRatio:!1,legend:{display:!1},title:{display:!1,text:"Perbandingan Modal Dan Potongan",fontSize:24,fontColor:"#6b7280"},animation:{duration:0},tooltips:{enabled:!1},elements:{point:{radius:0}},scales:{xAxes:[{gridLines:{display:!1}}],yAxes:[{ticks:{beginAtZero:!0},gridLines:{display:!1}}]}},barChartData2:{labels:[],datasets:[{label:"Totalizer",data:[],borderColor:"#bb86fc",borderWidth:1}]},barChartOptions2:{responsive:!0,maintainAspectRatio:!1,legend:{display:!1},title:{display:!1,text:"Perbandingan Modal Dan Potongan",fontSize:24,fontColor:"#6b7280"},animation:{duration:0},tooltips:{enabled:!1},elements:{point:{radius:0}},scales:{xAxes:[{gridLines:{display:!1}}],yAxes:[{ticks:{beginAtZero:!1},gridLines:{display:!1}}]}}}},mounted:function(){},computed:{reverse_lists:function(){return this.data.lists.slice().reverse()}},methods:{rerender:function(){var t=this,l=this.reverse_lists;this.barChartOptions.scales.yAxes[0].ticks.max=parseFloat(this.data.als_qmax),this.barChartData.labels=[],this.barChartData.datasets[0].data=[],this.barChartData2.labels=[],this.barChartData2.datasets[0].data=[],l.forEach((function(l,i){t.barChartData.labels.push(new Date(l.date_at).getHours()||24),t.barChartData.datasets[0].data.push(l.flowrate/1e3),t.barChartData2.labels.push(new Date(l.date_at).getHours()||24),t.barChartData2.datasets[0].data.push(parseFloat(l.total_val/1e3))})),setTimeout((function(){t.$refs.thechart.renderChart(t.barChartData,t.barChartOptions),t.$refs.TC_totalizer.renderChart(t.barChartData2,t.barChartOptions2)}),100)}},watch:{value:{handler:function(t,l){},deep:!0},tampil:{handler:function(t,l){this.rerender()},deep:!0}}},_=(e(654),e(9)),component=Object(_.a)(f,(function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.tampil,expression:"tampil"}],staticClass:"w-100 h-100 d-flex align-items-center justify-content-center",staticStyle:{position:"fixed","z-index":"1"}},[e("div",{staticClass:"d-flex",staticStyle:{"background-color":"#1e1e1e",border:"solid 0.5px #808080","border-radius":"10px","min-width":"320px","min-height":"320px","max-width":"90%","max-height":"90%","flex-direction":"column"}},[e("div",{staticClass:"w-100 d-flex align-items-center justify-content-center ",staticStyle:{padding:"5px",gap:"5px","border-bottom":"solid 1px #808080","min-height":"30px"}},[e("div",{staticStyle:{"flex-grow":"1"}},[t._v("\n                "+t._s(t.data.location_name)+"\n            ")]),t._v(" "),e("div",{staticClass:"bold",staticStyle:{"min-width":"45px",color:"#bb86fc","font-size":"0.9em"}},[t._v("\n                ID "+t._s(t._f("padStart")(t.data.sender_id,3,"0"))+"\n            ")]),t._v(" "),e("div",[e("fa",{staticStyle:{"font-size":"20px",color:"#fff",cursor:"pointer"},attrs:{icon:["fas","times"]},on:{click:function(l){return t.$emit("close")}}})],1)]),t._v(" "),e("div",{staticClass:"w-100 d-flex",staticStyle:{padding:"10px","flex-flow":"row wrap","flex-grow":"1",overflow:"auto"}},[e("div",{staticClass:"col-12 col-xs-12 col-sm-6",staticStyle:{height:"auto",padding:"5px"}},[e("div",{staticClass:"h-100",staticStyle:{background:"rgba(255,255,255,0.05)","border-radius":"5px"}},[e("div",{staticClass:"d-flex",staticStyle:{gap:"5px",padding:"5px 10px 0px 10px",color:"#808080","align-items":"flex-end"}},[e("div",{staticStyle:{width:"15px",height:"15px"}},[e("SVGLGraph",{staticStyle:{fill:"#808080"}})],1),t._v(" "),e("div",{staticClass:"text-left",staticStyle:{"font-size":"0.7em"}},[t._v(" \n                            Flow Rate Hourly\n                        ")])]),t._v(" "),e("div",{staticClass:"w-100 text-center bold",staticStyle:{padding:"5px 5px 0px 5px","flex-grow":"1","font-size":"1.8em"}},[t._v("\n                        "+t._s(t._f("pointFormat")(t.data.lists.length>1?Math.floor(t.data.lists[0].flowrate/1e3*100)/100:0,2))+"\n                    ")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"w-100"},[e("line-chart",{ref:"thechart",attrs:{"chart-options":t.barChartOptions,"chart-data":t.barChartData,width:200,height:120}})],1)])]),t._v(" "),e("div",{staticClass:"col-12 col-xs-12 col-sm-6",staticStyle:{height:"auto",padding:"5px"}},[e("div",{staticClass:"h-100",staticStyle:{background:"rgba(255,255,255,0.05)","border-radius":"5px"}},[e("div",{staticClass:"d-flex",staticStyle:{gap:"5px",padding:"5px 10px 0px 10px",color:"#808080","align-items":"flex-end"}},[e("div",{staticStyle:{width:"15px",height:"15px"}},[e("SVGLTotalizer",{staticStyle:{fill:"#808080"}})],1),t._v(" "),e("div",{staticClass:"text-left",staticStyle:{"font-size":"0.7em"}},[t._v(" \n                            Last Totalizer\n                        ")])]),t._v(" "),e("div",{staticClass:"w-100 text-center bold",staticStyle:{padding:"5px 5px 0px 5px","flex-grow":"1","font-size":"1.8em"}},[t._v("\n                        "+t._s(t._f("pointFormat")(t.data.lists.length>1?t.data.lists[0].total_val/1e3:0))+" \n                    ")]),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"w-100"},[e("line-chart",{ref:"TC_totalizer",attrs:{"chart-options":t.barChartOptions2,"chart-data":t.barChartData2,width:200,height:120}})],1)])]),t._v(" "),e("div",{staticClass:"col-12 col-xs-12 col-sm-12",staticStyle:{padding:"5px"}},[e("div",{staticClass:"w-100",staticStyle:{background:"rgba(255,255,255,0.05)","border-radius":"5px","flex-flow":"row wrap"}},[e("div",{staticClass:"d-flex w-100",staticStyle:{gap:"5px",padding:"5px 10px 0px 10px",color:"#808080","align-items":"flex-end"}},[e("div",{staticStyle:{width:"15px",height:"15px"}},[e("SVGLHistory",{staticStyle:{fill:"#808080"}})],1),t._v(" "),e("div",{staticClass:"text-left",staticStyle:{"font-size":"0.7em"}},[t._v(" \n                            History Table\n                        ")])]),t._v(" "),e("div",{staticClass:"w-100 d-flex justify-content-center",staticStyle:{padding:"10px"}},[e("div",{ref:"loadRef",staticStyle:{height:"200px",width:"auto"},attrs:{role:"sticky"}},[e("table",{staticClass:"sticky"},[t._m(2),t._v(" "),e("tbody",t._l(t.data.lists,(function(dt,l){return e("tr",{key:l},[e("td",[t._v(t._s(t.$moment(dt.date_at).format("DD-MM-Y HH:mm:ss")))]),t._v(" "),e("td",[t._v(t._s(t._f("pointFormat")(dt.total_val/1e3||0))+" ")]),t._v(" "),e("td",[t._v(t._s(t._f("pointFormat")(dt.flowrate/1e3||0))+" ")])])})),0)])])])])]),t._v(" "),e("div",{staticClass:"w-100 d-flex",staticStyle:{"justify-content":"end"}},[e("div",{staticClass:" d-flex align-items-center"},[e("div",[e("div",{staticStyle:{"font-size":"0.65em"}},[t._v("Last Data Updated")]),t._v(" "),e("div",{staticStyle:{"font-size":"0.8em"}},[t._v(" "+t._s(t.$moment(t.data.alfm_created_at).format("DD-MM-Y HH:mm:ss"))+" ")])]),t._v(" "),e("div",{staticStyle:{padding:"5px"}},[e("div",{staticStyle:{width:"20px",height:"20px"}},[e("SVGLTime",{staticStyle:{fill:"white"}})],1)])])])])])])}),[function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",{staticClass:"w-100  text-right",staticStyle:{"font-size":"1.1em",padding:"0px 5px 5px 5px"}},[t._v("\n                        m"),e("sup",[t._v("3")]),t._v("/h \n                    ")])},function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",{staticClass:"w-100  text-right",staticStyle:{"font-size":"1.1em",padding:"0px 5px 5px 5px"}},[t._v("\n                        m"),e("sup",[t._v("3")])])},function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("thead",[e("tr",{staticStyle:{top:"0px"}},[e("th",[t._v("Waktu")]),t._v(" "),e("th",[t._v(" Totalizer ")]),t._v(" "),e("th",[t._v(" FlowRate ")])])])}],!1,null,"3b9e1c7a",null);l.default=component.exports}}]);