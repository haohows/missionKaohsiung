(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{205:function(e,t,o){"use strict";(function(e){o(6),o(4),o(3),o(1),o(5);var r=o(0),n=o(75);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a={data:function(){return{theAnimalImg:""}},computed:c({},Object(n.c)(["clueData","score"])),methods:c({changeAnimalImg:function(e){this.theAnimalImg=e.animalName},showAnimalImg:function(){e(".clueButton").click((function(){console.log(123);var t=e(this).attr("id");e("#modal-container").removeAttr("class").addClass(t),e("body").addClass("modal-active")})),e("#modal-container").click((function(){e(this).addClass("out"),e("body").removeClass("modal-active")}))}},Object(n.b)(["getVlueData"])),mounted:function(){var e=this;this.getVlueData(),setTimeout((function(){e.showAnimalImg()}),50)}}}).call(this,o(210))},206:function(e,t,o){var content=o(216);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(41).default)("2ebaf462",content,!0,{sourceMap:!1})},215:function(e,t,o){"use strict";var r=o(206);o.n(r).a},216:function(e,t,o){(t=o(40)(!1)).push([e.i,"#modal-container[data-v-f79fde40]{position:fixed;display:table;height:100vh;width:100vw;top:0;left:0;-webkit-transform:scale(0);transform:scale(0);z-index:100}#modal-container.clueModalEffect[data-v-f79fde40]{-webkit-transform:scaleY(.01) scaleX(0);transform:scaleY(.01) scaleX(0);-webkit-animation:unfoldIn-data-v-f79fde40 1s cubic-bezier(.165,.84,.44,1) forwards;animation:unfoldIn-data-v-f79fde40 1s cubic-bezier(.165,.84,.44,1) forwards}#modal-container.clueModalEffect .modal-background .modal[data-v-f79fde40]{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:zoomIn-data-v-f79fde40 .5s cubic-bezier(.165,.84,.44,1) .8s forwards;animation:zoomIn-data-v-f79fde40 .5s cubic-bezier(.165,.84,.44,1) .8s forwards}#modal-container.clueModalEffect.out[data-v-f79fde40]{-webkit-transform:scale(1);transform:scale(1);-webkit-animation:unfoldOut-data-v-f79fde40 1s cubic-bezier(.165,.84,.44,1) .3s forwards;animation:unfoldOut-data-v-f79fde40 1s cubic-bezier(.165,.84,.44,1) .3s forwards}#modal-container.clueModalEffect.out .modal-background .modal[data-v-f79fde40]{-webkit-animation:zoomOut-data-v-f79fde40 .5s cubic-bezier(.165,.84,.44,1) forwards;animation:zoomOut-data-v-f79fde40 .5s cubic-bezier(.165,.84,.44,1) forwards}#modal-container .modal-background[data-v-f79fde40]{display:table-cell;background:rgba(0,0,0,.8);text-align:center;vertical-align:middle}#modal-container .modal-background .modal[data-v-f79fde40]{width:90vw;height:90vh;padding:10px;display:inline-block;border-radius:3px;font-weight:300;position:relative}#modal-container .modal-background .modal h2[data-v-f79fde40]{font-size:25px;line-height:25px;margin-bottom:15px}#modal-container .modal-background .modal p[data-v-f79fde40]{font-size:18px;line-height:22px}@-webkit-keyframes unfoldIn-data-v-f79fde40{0%{-webkit-transform:scaleY(.005) scaleX(0);transform:scaleY(.005) scaleX(0)}50%{-webkit-transform:scaleY(.005) scaleX(1);transform:scaleY(.005) scaleX(1)}to{-webkit-transform:scaleY(1) scaleX(1);transform:scaleY(1) scaleX(1)}}@keyframes unfoldIn-data-v-f79fde40{0%{-webkit-transform:scaleY(.005) scaleX(0);transform:scaleY(.005) scaleX(0)}50%{-webkit-transform:scaleY(.005) scaleX(1);transform:scaleY(.005) scaleX(1)}to{-webkit-transform:scaleY(1) scaleX(1);transform:scaleY(1) scaleX(1)}}@-webkit-keyframes unfoldOut-data-v-f79fde40{0%{-webkit-transform:scaleY(1) scaleX(1);transform:scaleY(1) scaleX(1)}50%{-webkit-transform:scaleY(.005) scaleX(1);transform:scaleY(.005) scaleX(1)}to{-webkit-transform:scaleY(.005) scaleX(0);transform:scaleY(.005) scaleX(0)}}@keyframes unfoldOut-data-v-f79fde40{0%{-webkit-transform:scaleY(1) scaleX(1);transform:scaleY(1) scaleX(1)}50%{-webkit-transform:scaleY(.005) scaleX(1);transform:scaleY(.005) scaleX(1)}to{-webkit-transform:scaleY(.005) scaleX(0);transform:scaleY(.005) scaleX(0)}}@-webkit-keyframes zoomIn-data-v-f79fde40{0%{-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes zoomIn-data-v-f79fde40{0%{-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes zoomOut-data-v-f79fde40{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}@keyframes zoomOut-data-v-f79fde40{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}.fossil-noll-container[data-v-f79fde40]{width:100%;height:calc(100vh - 260px);display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.fossil-noll-text[data-v-f79fde40]{font-size:20px;color:#d5d5d5;font-weight:700}.fossil-list[data-v-f79fde40]{display:-webkit-box;display:flex;flex-wrap:wrap;padding:2%}.fossil-item[data-v-f79fde40]{width:46%;height:120px;margin:3% 2% 1%;border-radius:12px}.animalImgStyle[data-v-f79fde40],.fossil-item[data-v-f79fde40]{background-position:50%;background-size:contain;background-repeat:no-repeat}.animalImgStyle[data-v-f79fde40]{height:90vh}",""]),e.exports=t},228:function(e,t,o){"use strict";o.r(t);var r=o(205).a,n=(o(215),o(29)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{directives:[{name:"show",rawName:"v-show",value:0==e.score,expression:"score == 0"}],staticClass:"fossil-noll-container"},[o("div",{staticClass:"fossil-noll-text"},[e._v("尚未取得化石")])]),e._v(" "),o("div",{staticClass:"fossil-list"},[e._l(e.clueData,(function(t,r){return o("div",{directives:[{name:"show",rawName:"v-show",value:t.pass,expression:"item.pass"}],key:r,staticClass:"fossil-item clueButton",style:"background-image: url("+t.animalImg+");",attrs:{id:"clueModalEffect"},on:{click:function(o){return e.changeAnimalImg(t)}}})})),e._v(" "),o("div",{attrs:{id:"modal-container"}},[o("div",{staticClass:"modal-background"},[o("div",{staticClass:"modal"},[o("div",{staticClass:"animalImgStyle",style:"background-image: url(/missionKaohsiung/_nuxt/assets/img/animal/"+e.theAnimalImg+".png);"})])])])],2)])}),[],!1,null,"f79fde40",null);t.default=component.exports}}]);