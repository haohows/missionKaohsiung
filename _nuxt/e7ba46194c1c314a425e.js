(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{205:function(t,e,o){"use strict";(function(t){o(6),o(4),o(3),o(1),o(5);var c=o(0),r=o(75);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a={data:function(){return{theAnimalImg:""}},computed:l({},Object(r.c)(["clueData","score"])),methods:l({changeAnimalImg:function(t){this.theAnimalImg=t.animalImg},showAnimalImg:function(){t(".clueButton").click((function(){console.log(123);var e=t(this).attr("id");t("#modal-container").removeAttr("class").addClass(e),t("body").addClass("modal-active")})),t("#modal-container").click((function(){t(this).addClass("out"),t("body").removeClass("modal-active")}))}},Object(r.b)(["getVlueData"])),mounted:function(){var t=this;this.getVlueData(),setTimeout((function(){t.showAnimalImg()}),50)}}}).call(this,o(210))},206:function(t,e,o){var content=o(216);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(41).default)("49112fcc",content,!0,{sourceMap:!1})},215:function(t,e,o){"use strict";var c=o(206);o.n(c).a},216:function(t,e,o){(e=o(40)(!1)).push([t.i,"#modal-container[data-v-fbac49f4]{position:fixed;display:table;height:100vh;width:100vw;top:0;left:0;-webkit-transform:scale(0);transform:scale(0);z-index:100}#modal-container.clueModalEffect[data-v-fbac49f4]{-webkit-transform:scaleY(.01) scaleX(0);transform:scaleY(.01) scaleX(0);-webkit-animation:unfoldIn-data-v-fbac49f4 1s cubic-bezier(.165,.84,.44,1) forwards;animation:unfoldIn-data-v-fbac49f4 1s cubic-bezier(.165,.84,.44,1) forwards}#modal-container.clueModalEffect .modal-background .modal[data-v-fbac49f4]{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:zoomIn-data-v-fbac49f4 .5s cubic-bezier(.165,.84,.44,1) .8s forwards;animation:zoomIn-data-v-fbac49f4 .5s cubic-bezier(.165,.84,.44,1) .8s forwards}#modal-container.clueModalEffect.out[data-v-fbac49f4]{-webkit-transform:scale(1);transform:scale(1);-webkit-animation:unfoldOut-data-v-fbac49f4 1s cubic-bezier(.165,.84,.44,1) .3s forwards;animation:unfoldOut-data-v-fbac49f4 1s cubic-bezier(.165,.84,.44,1) .3s forwards}#modal-container.clueModalEffect.out .modal-background .modal[data-v-fbac49f4]{-webkit-animation:zoomOut-data-v-fbac49f4 .5s cubic-bezier(.165,.84,.44,1) forwards;animation:zoomOut-data-v-fbac49f4 .5s cubic-bezier(.165,.84,.44,1) forwards}#modal-container .modal-background[data-v-fbac49f4]{display:table-cell;background:rgba(0,0,0,.8);text-align:center;vertical-align:middle}#modal-container .modal-background .modal[data-v-fbac49f4]{width:90vw;height:90vh;padding:10px;display:inline-block;border-radius:3px;font-weight:300;position:relative}#modal-container .modal-background .modal h2[data-v-fbac49f4]{font-size:25px;line-height:25px;margin-bottom:15px}#modal-container .modal-background .modal p[data-v-fbac49f4]{font-size:18px;line-height:22px}@-webkit-keyframes unfoldIn-data-v-fbac49f4{0%{-webkit-transform:scaleY(.005) scaleX(0);transform:scaleY(.005) scaleX(0)}50%{-webkit-transform:scaleY(.005) scaleX(1);transform:scaleY(.005) scaleX(1)}to{-webkit-transform:scaleY(1) scaleX(1);transform:scaleY(1) scaleX(1)}}@keyframes unfoldIn-data-v-fbac49f4{0%{-webkit-transform:scaleY(.005) scaleX(0);transform:scaleY(.005) scaleX(0)}50%{-webkit-transform:scaleY(.005) scaleX(1);transform:scaleY(.005) scaleX(1)}to{-webkit-transform:scaleY(1) scaleX(1);transform:scaleY(1) scaleX(1)}}@-webkit-keyframes unfoldOut-data-v-fbac49f4{0%{-webkit-transform:scaleY(1) scaleX(1);transform:scaleY(1) scaleX(1)}50%{-webkit-transform:scaleY(.005) scaleX(1);transform:scaleY(.005) scaleX(1)}to{-webkit-transform:scaleY(.005) scaleX(0);transform:scaleY(.005) scaleX(0)}}@keyframes unfoldOut-data-v-fbac49f4{0%{-webkit-transform:scaleY(1) scaleX(1);transform:scaleY(1) scaleX(1)}50%{-webkit-transform:scaleY(.005) scaleX(1);transform:scaleY(.005) scaleX(1)}to{-webkit-transform:scaleY(.005) scaleX(0);transform:scaleY(.005) scaleX(0)}}@-webkit-keyframes zoomIn-data-v-fbac49f4{0%{-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes zoomIn-data-v-fbac49f4{0%{-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes zoomOut-data-v-fbac49f4{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}@keyframes zoomOut-data-v-fbac49f4{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}.fossil-noll-container[data-v-fbac49f4]{width:100%;height:calc(100vh - 260px);display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.fossil-noll-text[data-v-fbac49f4]{font-size:20px;color:#d5d5d5;font-weight:700}.fossil-list[data-v-fbac49f4]{display:-webkit-box;display:flex;flex-wrap:wrap;padding:2%}.fossil-item[data-v-fbac49f4]{width:46%;height:120px;margin:3% 2% 1%;border-radius:12px}.animalImgStyle[data-v-fbac49f4],.fossil-item[data-v-fbac49f4]{background-position:50%;background-size:contain;background-repeat:no-repeat}.animalImgStyle[data-v-fbac49f4]{height:90vh}",""]),t.exports=e},228:function(t,e,o){"use strict";o.r(e);var c=o(205).a,r=(o(215),o(29)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{directives:[{name:"show",rawName:"v-show",value:0==t.score,expression:"score == 0"}],staticClass:"fossil-noll-container"},[o("div",{staticClass:"fossil-noll-text"},[t._v("尚未取得化石")])]),t._v(" "),o("div",{staticClass:"fossil-list"},[t._l(t.clueData,(function(e,c){return o("div",{directives:[{name:"show",rawName:"v-show",value:e.pass,expression:"item.pass"}],key:c,staticClass:"fossil-item clueButton",style:"background-image: url("+e.animalImg+");",attrs:{id:"clueModalEffect"},on:{click:function(o){return t.changeAnimalImg(e)}}})})),t._v(" "),o("div",{attrs:{id:"modal-container"}},[o("div",{staticClass:"modal-background"},[o("div",{staticClass:"modal"},[o("div",{staticClass:"animalImgStyle",style:"background-image: url("+t.theAnimalImg+");"})])])])],2)])}),[],!1,null,"fbac49f4",null);e.default=component.exports}}]);