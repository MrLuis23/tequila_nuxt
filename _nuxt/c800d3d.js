(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{285:function(t,e,n){"use strict";var r=n(321);e.a=r.a},286:function(t,e,n){"use strict";var r=n(291);e.a=r.a},291:function(t,e,n){"use strict";n(204),n(300);var r=n(304),o=n(147);e.a=Object(o.a)(r.a).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}})},298:function(t,e,n){var content=n(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(67).default)("1cdf85c7",content,!0,{sourceMap:!1})},299:function(t,e,n){var r=n(66)(!1);r.push([t.i,".theme--light.v-image{color:rgba(0,0,0,.87)}.theme--dark.v-image{color:#fff}.v-image{z-index:0}.v-image__image,.v-image__placeholder{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-image__image{background-repeat:no-repeat}.v-image__image--preload{filter:blur(2px)}.v-image__image--contain{background-size:contain}.v-image__image--cover{background-size:cover}",""]),t.exports=r},300:function(t,e,n){var content=n(301);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(67).default)("2fba213c",content,!0,{sourceMap:!1})},301:function(t,e,n){var r=n(66)(!1);r.push([t.i,".v-responsive{position:relative;overflow:hidden;flex:1 0 auto;max-width:100%;display:flex}.v-responsive__content{flex:1 0 0px;max-width:100%}.v-application--is-ltr .v-responsive__sizer~.v-responsive__content{margin-left:-100%}.v-application--is-rtl .v-responsive__sizer~.v-responsive__content{margin-right:-100%}.v-responsive__sizer{transition:padding-bottom .2s cubic-bezier(.25,.8,.5,1);flex:1 0 0px}",""]),t.exports=r},302:function(t,e,n){t.exports=n.p+"img/bg-dialog.768cfe4.jpg"},303:function(t,e,n){"use strict";var r=n(4),o=n(206);r({target:"String",proto:!0,forced:n(207)("fixed")},{fixed:function(){return o(this,"tt","","")}})},308:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(125);var o=n(151),l=n(102);function d(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||Object(o.a)(t)||Object(l.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},311:function(t,e,n){"use strict";var r=n(32),o=(n(204),n(98),n(209),n(72),n(71),n(298),n(296)),l=n(286),d=n(148),c=n(147),f=n(297),h=n(35),m="undefined"!=typeof window&&"IntersectionObserver"in window;e.a=Object(c.a)(l.a,d.a).extend({name:"v-img",directives:{intersect:o.a},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(r.a)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var image=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[image]):image}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,n){if(!m||n||this.eager){if(this.normalisedSrc.lazySrc){var r=new Image;r.src=this.normalisedSrc.lazySrc,this.pollForSize(r,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,image=new Image;this.image=image,image.onload=function(){image.decode?image.decode().catch((function(e){Object(h.c)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},image.onerror=this.onError,this.hasError=!1,this.sizes&&(image.sizes=this.sizes),this.normalisedSrc.srcset&&(image.srcset=this.normalisedSrc.srcset),image.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(image),this.getSrc()},pollForSize:function(img){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=function n(){var r=img.naturalHeight,o=img.naturalWidth;r||o?(t.naturalWidth=o,t.calculatedAspectRatio=o/r):img.complete||!t.isLoading||t.hasError||null==e||setTimeout(n,e)};n()},genContent:function(){var content=l.a.options.methods.genContent.call(this);return this.naturalWidth&&this._b(content.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),content},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=l.a.options.render.call(this,t),data=Object(f.a)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:m?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,data,e.children)}})},312:function(t,e,n){"use strict";var r=n(4),o=n(84).findIndex,l=n(99),d="findIndex",c=!0;d in[]&&Array(1).findIndex((function(){c=!1})),r({target:"Array",proto:!0,forced:c},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),l(d)},313:function(t,e,n){var content=n(340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(67).default)("5fae62a4",content,!0,{sourceMap:!1})},320:function(t,e,n){"use strict";var r=n(4),o=n(206);r({target:"String",proto:!0,forced:n(207)("small")},{small:function(){return o(this,"small","","")}})},324:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));n(30),n(27),n(38),n(39);var r=n(11),o=(n(204),n(34),n(8),n(70),n(73),n(211),n(26),n(60),n(208),n(312),n(335),n(325)),l=n(148),d=n(147),c=n(35);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var h=Object(d.a)(o.a,l.a).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var t=this;return this.items.filter((function(e,n){return t.toggleMethod(t.getValue(e,n))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.internalValue===e};var e=this.internalValue;return Array.isArray(e)?function(t){return e.includes(t)}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(c.c)("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(t,i){return null==t.value||""===t.value?i:t.value},onClick:function(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register:function(t){var e=this,n=this.items.push(t)-1;t.$on("change",(function(){return e.onClick(t)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,n)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),n=this.getValue(t,e);if(this.items.splice(e,1),!(this.selectedValues.indexOf(n)<0)){if(!this.mandatory)return this.updateInternalValue(n);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==n})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var n=this.getValue(t,e);t.isActive=this.toggleMethod(n)},updateItemsState:function(){var t=this;this.$nextTick((function(){if(t.mandatory&&!t.selectedItems.length)return t.updateMandatory();t.items.forEach(t.updateItem)}))},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=this.items.slice();t&&e.reverse();var n=e.find((function(t){return!t.disabled}));if(n){var r=this.items.indexOf(n);this.updateInternalValue(this.getValue(n,r))}}},updateMultiple:function(t){var e=(Array.isArray(this.internalValue)?this.internalValue:[]).slice(),n=e.findIndex((function(e){return e===t}));this.mandatory&&n>-1&&e.length-1<1||null!=this.max&&n<0&&e.length+1>this.max||(n>-1?e.splice(n,1):e.push(t),this.internalValue=e)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t(this.tag,this.genData(),this.$slots.default)}});h.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}})},326:function(t,e,n){"use strict";n(8),n(26);var r=n(14);function o(t,e){var n=t.changedTouches[0];e.touchendX=n.clientX,e.touchendY=n.clientY,e.end&&e.end(Object.assign(t,e)),function(t){var e=t.touchstartX,n=t.touchendX,r=t.touchstartY,o=t.touchendY;t.offsetX=n-e,t.offsetY=o-r,Math.abs(t.offsetY)<.5*Math.abs(t.offsetX)&&(t.left&&n<e-16&&t.left(t),t.right&&n>e+16&&t.right(t)),Math.abs(t.offsetX)<.5*Math.abs(t.offsetY)&&(t.up&&o<r-16&&t.up(t),t.down&&o>r+16&&t.down(t))}(e)}function l(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return function(t,e){var n=t.changedTouches[0];e.touchstartX=n.clientX,e.touchstartY=n.clientY,e.start&&e.start(Object.assign(t,e))}(t,e)},touchend:function(t){return o(t,e)},touchmove:function(t){return function(t,e){var n=t.changedTouches[0];e.touchmoveX=n.clientX,e.touchmoveY=n.clientY,e.move&&e.move(Object.assign(t,e))}(t,e)}}}var d={inserted:function(t,e,n){var o=e.value,d=o.parent?t.parentElement:t,c=o.options||{passive:!0};if(d){var f=l(e.value);d._touchHandlers=Object(d._touchHandlers),d._touchHandlers[n.context._uid]=f,Object(r.p)(f).forEach((function(t){d.addEventListener(t,f[t],c)}))}},unbind:function(t,e,n){var o=e.value.parent?t.parentElement:t;if(o&&o._touchHandlers){var l=o._touchHandlers[n.context._uid];Object(r.p)(l).forEach((function(t){o.removeEventListener(t,l[t])})),delete o._touchHandlers[n.context._uid]}}};e.a=d},329:function(t,e,n){"use strict";var r=n(4),o=n(206);r({target:"String",proto:!0,forced:n(207)("link")},{link:function(t){return o(this,"a","href",t)}})},335:function(t,e,n){var content=n(336);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(67).default)("73707fd0",content,!0,{sourceMap:!1})},336:function(t,e,n){var r=n(66)(!1);r.push([t.i,".v-item-group{flex:0 1 auto;position:relative;max-width:100%;transition:.3s cubic-bezier(.25,.8,.5,1)}",""]),t.exports=r},338:function(t,e,n){t.exports=n.p+"img/sl1.94bc261.jpg"},339:function(t,e,n){"use strict";n(313)},340:function(t,e,n){var r=n(66)(!1);r.push([t.i,'@media screen and (min-width:1904.1px){.lbl-container[data-v-f50b78e6]{position:relative;z-index:2;width:100vw;top:35%}.slide-1 .lbl-1[data-v-f50b78e6]{width:60vw!important;top:.2em;font-family:"Vani"!important;font-size:4em!important;justify-content:start;padding-left:5vw}.slide-1 .lbl-1[data-v-f50b78e6],.slide-1 .lbl-2[data-v-f50b78e6]{position:relative;left:0!important;align-items:center!important;text-shadow:2px 2px 2px #000}.slide-1 .lbl-2[data-v-f50b78e6]{width:40vw!important;justify-content:end;font-family:"Edwardian"!important;font-size:8em;bottom:0;top:0}.slide-2 .lbl-1[data-v-f50b78e6]{width:25vw!important;font-family:"Vani"!important;font-size:4em!important;justify-content:end;text-transform:unset!important;top:37vh}.slide-2 .lbl-1[data-v-f50b78e6],.slide-2 .lbl-2[data-v-f50b78e6]{position:relative;left:0!important;align-items:center!important;text-shadow:2px 2px 2px #000;padding-left:0}.slide-2 .lbl-2[data-v-f50b78e6]{width:75vw!important;text-transform:lowercase!important;bottom:0;top:35.5vh;justify-content:start}.slide-2 .lbl-2[data-v-f50b78e6],.slide-3 .lbl-1[data-v-f50b78e6]{font-family:"Edwardian"!important;font-size:8em!important}.slide-3 .lbl-1[data-v-f50b78e6]{width:90vw!important;position:relative;left:0!important;align-items:center!important;justify-content:end;top:33vh;text-shadow:2px 2px 2px #000}}@media screen and (max-width:1904px){.lbl-container[data-v-f50b78e6]{position:relative;z-index:2;width:100vw;top:35%}.slide-1 .lbl-1[data-v-f50b78e6]{width:60vw!important;top:2em;font-family:"Vani"!important;font-size:2.7em!important;justify-content:start;padding-left:5vw}.slide-1 .lbl-1[data-v-f50b78e6],.slide-1 .lbl-2[data-v-f50b78e6]{position:relative;left:0!important;align-items:center!important;text-shadow:2px 2px 2px #000}.slide-1 .lbl-2[data-v-f50b78e6]{width:44vw!important;justify-content:end;font-family:"Edwardian"!important;font-size:5.5em;bottom:0;top:.6em}.slide-2 .lbl-1[data-v-f50b78e6]{width:25vw!important;font-family:"Vani"!important;font-size:4em!important;justify-content:end;top:37vh}.slide-2 .lbl-1[data-v-f50b78e6],.slide-2 .lbl-2[data-v-f50b78e6]{position:relative;left:0!important;align-items:center!important;text-shadow:2px 2px 2px #000;padding-left:0}.slide-2 .lbl-2[data-v-f50b78e6]{width:75vw!important;text-transform:lowercase!important;bottom:0;top:35.5vh;justify-content:start}.slide-2 .lbl-2[data-v-f50b78e6],.slide-3 .lbl-1[data-v-f50b78e6]{font-family:"Edwardian"!important;font-size:6em!important}.slide-3 .lbl-1[data-v-f50b78e6]{width:90vw!important;position:relative;left:0!important;align-items:center!important;justify-content:end;top:33vh;text-shadow:2px 2px 2px #000}}@media screen and (max-width:960px){.lbl-container[data-v-f50b78e6]{position:relative;z-index:2;width:100vw;top:35%}.slide-1 .lbl-1[data-v-f50b78e6]{width:60vw!important;top:2em;font-family:"Vani"!important;font-size:2.7em!important;justify-content:start;padding-left:5vw}.slide-1 .lbl-1[data-v-f50b78e6],.slide-1 .lbl-2[data-v-f50b78e6]{position:relative;left:0!important;align-items:center!important;text-shadow:2px 2px 2px #000}.slide-1 .lbl-2[data-v-f50b78e6]{width:57vw!important;justify-content:end;font-family:"Edwardian"!important;font-size:5.5em;bottom:0;top:.5em}.slide-2 .lbl-1[data-v-f50b78e6]{width:25vw!important;font-family:"Vani"!important;font-size:3em!important;justify-content:end;top:37vh}.slide-2 .lbl-1[data-v-f50b78e6],.slide-2 .lbl-2[data-v-f50b78e6]{position:relative;left:0!important;align-items:center!important;text-shadow:2px 2px 2px #000;padding-left:0}.slide-2 .lbl-2[data-v-f50b78e6]{width:75vw!important;font-size:6.8em;text-transform:lowercase!important;bottom:0;top:35.5vh;justify-content:start}.slide-2 .lbl-2[data-v-f50b78e6],.slide-3 .lbl-1[data-v-f50b78e6]{font-family:"Edwardian"!important}.slide-3 .lbl-1[data-v-f50b78e6]{width:90vw!important;position:relative;left:0!important;align-items:center!important;font-size:6em!important;justify-content:end;top:33vh;text-shadow:2px 2px 2px #000}}@media screen and (max-width:810px){.lbl-container[data-v-f50b78e6]{position:relative;z-index:2;width:100vw;top:35%}.slide-1 .lbl-1[data-v-f50b78e6]{top:2em;font-family:"Vani"!important;font-size:2.3em!important;justify-content:start;padding-left:5vw}.slide-1 .lbl-1[data-v-f50b78e6],.slide-1 .lbl-2[data-v-f50b78e6]{width:60vw!important;position:relative;left:0!important;align-items:center!important;text-shadow:2px 2px 2px #000}.slide-1 .lbl-2[data-v-f50b78e6]{justify-content:end;font-family:"Edwardian"!important;font-size:4.7em;bottom:0;top:.5em}.slide-2 .lbl-1[data-v-f50b78e6]{width:100vw!important;font-family:"Vani"!important;font-size:3em!important;justify-content:end;width:40vw!important;top:37vh;padding-left:10vw}.slide-2 .lbl-1[data-v-f50b78e6],.slide-2 .lbl-2[data-v-f50b78e6]{position:relative;left:0!important;align-items:center!important;text-shadow:2px 2px 2px #000}.slide-2 .lbl-2[data-v-f50b78e6]{width:40vw!important;font-size:6.8em;text-transform:lowercase!important;bottom:0;top:36vh;padding-left:0;justify-content:start}.slide-2 .lbl-2[data-v-f50b78e6],.slide-3 .lbl-1[data-v-f50b78e6]{font-family:"Edwardian"!important}.slide-3 .lbl-1[data-v-f50b78e6]{width:90vw!important;position:relative;left:0!important;align-items:center!important;font-size:6em!important;justify-content:end;top:33vh;text-shadow:2px 2px 2px #000}}@media screen and (orientation:portrait){.lbl-container[data-v-f50b78e6]{position:relative;z-index:2;width:100vw;top:35%}.slide-1 .lbl-1[data-v-f50b78e6]{font-family:"Vani"!important;font-size:2.3em!important;top:2em}.slide-1 .lbl-1[data-v-f50b78e6],.slide-1 .lbl-2[data-v-f50b78e6]{width:100vw!important;position:relative;left:0!important;align-items:center!important;justify-content:center;text-shadow:2px 2px 2px #000;padding-left:0}.slide-1 .lbl-2[data-v-f50b78e6]{top:.5em;font-family:"Edwardian"!important;font-size:4.5em;bottom:6vh}.slide-2 .lbl-1[data-v-f50b78e6]{font-family:"Vani"!important;font-size:3em!important;justify-content:end!important;padding-right:0!important;padding-left:0!important}.slide-2 .lbl-1[data-v-f50b78e6],.slide-2 .lbl-2[data-v-f50b78e6]{width:50vw!important;position:relative;left:0!important;top:0;align-items:center!important;text-shadow:2px 2px 2px #000}.slide-2 .lbl-2[data-v-f50b78e6]{font-size:5em;text-transform:lowercase!important;bottom:0;justify-content:start;padding-left:0;margin-right:.2em}.slide-2 .lbl-2[data-v-f50b78e6],.slide-3 .lbl-1[data-v-f50b78e6]{font-family:"Edwardian"!important}.slide-3 .lbl-1[data-v-f50b78e6]{width:100vw!important;position:relative;left:0!important;align-items:center!important;font-size:4em!important;justify-content:center;top:40vh;text-shadow:2px 2px 2px #000}}',""]),t.exports=r},350:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{items:[{src:n(338),labels:{lbl1:"Taste good, the way",lbl2:"Tequila should!"},containerClass:"lbl-container d-flex white--text flex-column slide-1",lblClass1:"lbl-1 slide-1 text-lg-h2 text-md-h2  d-flex ",lblClass2:"pr-lg-16 lbl-2 slide-1 text-lg-h1 text-capitalize d-flex"},{src:n(302),labels:{lbl1:"Creado",lbl2:"para ti"},containerClass:"lbl-container white--text d-flex slide-2",lblClass1:"slide-2 lbl-1  text-lg-h2 text-md-h2  d-flex text-capitalize",lblClass2:"pr-lg-16 slide-2 lbl-2 text-lg-h1 text-capitalize d-flex"}]}}},o=(n(339),n(68)),l=n(97),d=n.n(l),c=n(451),f=n(453),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-carousel",{attrs:{"show-arrows":!1,cycle:"","hide-delimiters":"","hide-delimiter-background":"",interval:"10000",height:"100vh"}},t._l(t.items,(function(e,i){return n("v-carousel-item",{key:i,attrs:{src:e.src,"reverse-transition":"fade-transition",transition:"fade-transition",eager:""}},[n("div",{class:e.containerClass},[e.labels.lbl1?n("div",{class:e.lblClass1},[t._v(" \n          "+t._s(e.labels.lbl1)+"\n        ")]):t._e(),t._v(" "),e.labels.lbl2?n("div",{class:e.lblClass2},[t._v(" \n          "+t._s(e.labels.lbl2)+" \n        ")]):t._e()])])})),1)}),[],!1,null,"f50b78e6",null);e.default=component.exports;d()(component,{VCarousel:c.a,VCarouselItem:f.a})}}]);