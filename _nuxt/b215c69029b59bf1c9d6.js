(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{202:function(t,n,e){var content=e(212);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(41).default)("48a665f4",content,!0,{sourceMap:!1})},211:function(t,n,e){"use strict";var c=e(202);e.n(c).a},212:function(t,n,e){(n=e(40)(!1)).push([t.i,".card-body.card-body-box[data-v-a4c23d74]{height:calc(100vh - 150px);width:calc(100vw - 40px);padding:15px 0;border-bottom:15px solid #fff3cd}.nav-box[data-v-a4c23d74]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}.card-nav-bg-c[data-v-a4c23d74]{width:90%;background-color:rgba(0,0,0,.055);margin:0 auto;border-radius:8px 8px 0 0}.nav-item[data-v-a4c23d74]{width:28%;text-align:center;cursor:pointer}.Mission-content[data-v-a4c23d74]{width:90%;background-color:#fff;margin:0 auto;height:calc(100vh - 240px);overflow:auto}",""]),t.exports=n},223:function(t,n,e){"use strict";e.r(n);e(6),e(4),e(3),e(1),e(5),e(12);var c=e(0),o=e(75);function r(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(n){Object(c.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}var d={layout:"wrap",computed:l({},Object(o.c)(["pagination"])),methods:l({changePage:function(t){t!=this.pagination&&(this.changePagination(t),this.$router.replace({name:"main-MissionContent-".concat(this.pagination)}))}},Object(o.b)(["changePagination","initialPagination"])),mounted:function(){this.initialPagination()}},v=(e(211),e(29)),component=Object(v.a)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"card"},[e("h5",{staticClass:"card-header text-center"},[t._v("尋找幽靈船的龍化石")]),t._v(" "),e("div",{staticClass:"card-body card-body-box alert-warning"},[e("div",{staticClass:"card-nav-bg-c"},[e("ul",{staticClass:"nav nav-tabs nav-box pt-3"},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",class:{active:"MissionClue"==t.pagination},on:{click:function(n){return t.changePage("MissionClue")}}},[t._v("線索")])]),t._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",class:{active:"MissionFossil"==t.pagination},on:{click:function(n){return t.changePage("MissionFossil")}}},[t._v("化石")])]),t._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",class:{active:"MissionScore"==t.pagination},on:{click:function(n){return t.changePage("MissionScore")}}},[t._v("得分")])])])]),t._v(" "),e("div",{staticClass:"Mission-content"},[e("nuxt-child")],1)]),t._v(" "),e("div",{staticClass:"card-footer text-muted text-center"},[t._v("高雄 x 駁二特區")])])])])}),[],!1,null,"a4c23d74",null);n.default=component.exports}}]);