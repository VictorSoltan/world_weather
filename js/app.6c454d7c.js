(function(e){function t(t){for(var a,c,o=t[0],i=t[1],d=t[2],l=0,f=[];l<o.length;l++)c=o[l],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);u&&u(t);while(f.length)f.shift()();return s.push.apply(s,d||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(a=!1)}a&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},s=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var u=i;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0790":function(e,t,n){},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={class:"main_block"},s=Object(a["g"])("h1",null,"World Weather",-1),c=Object(a["g"])("span",null,"Wath weather in your current location",-1),o={key:0,class:"town_card"},i=Object(a["g"])("span",null,"Your current location",-1),d={class:"info_block"},u=Object(a["g"])("h4",null,"Weather",-1),l=Object(a["g"])("h4",null,"Temperature",-1),f=Object(a["g"])("h4",null,"Humidity",-1);function j(e,t,n,j,b,h){var m=Object(a["y"])("TownWeather"),p=Object(a["y"])("Modal");return Object(a["r"])(),Object(a["f"])("div",{class:Object(a["n"])({modal:b.modalWindow})},[Object(a["g"])("div",r,[s,c,b.userInfo&&b.userWeather?(Object(a["r"])(),Object(a["f"])("div",o,[Object(a["g"])("h2",null,Object(a["z"])(b.userInfo.city)+", "+Object(a["z"])(b.userInfo.country),1),i,Object(a["g"])("div",d,[Object(a["g"])("div",null,[u,Object(a["g"])("h4",null,Object(a["z"])(b.userWeather.weather[0].main),1)]),Object(a["g"])("div",null,[l,Object(a["g"])("h4",null,Object(a["z"])(b.userWeather.main.temp)+"°C",1)]),Object(a["g"])("div",null,[f,Object(a["g"])("h4",null,Object(a["z"])(b.userWeather.main.humidity)+"%",1)])]),Object(a["g"])("footer",null,[Object(a["g"])("span",null,Object(a["z"])(this.timePassed),1),Object(a["g"])("button",{onClick:t[0]||(t[0]=function(){return h.reloadMainInfo&&h.reloadMainInfo.apply(h,arguments)})},"RELOAD")])])):Object(a["e"])("",!0)]),Object(a["g"])("footer",null,[b.weathers?(Object(a["r"])(),Object(a["f"])("div",{key:0,class:"others_cards",style:Object(a["o"])([b.weathers.length>3?{justifyContent:"space-between"}:{justifyContent:"flex-start"}])},[(Object(a["r"])(!0),Object(a["f"])(a["a"],null,Object(a["x"])(b.weathers,(function(e){return Object(a["r"])(),Object(a["d"])(m,{weather:e,key:e.id,onChildToParent:h.deleteCard,moment:h.moment,reloadCard:h.reloadCard},null,8,["weather","onChildToParent","moment","reloadCard"])})),128))],4)):Object(a["e"])("",!0),Object(a["g"])("div",{class:"add_more",style:Object(a["o"])([b.modalWindow?{display:"none"}:null])},[Object(a["g"])("button",{onClick:t[1]||(t[1]=function(e){return b.modalWindow=!b.modalWindow})},"+")],4)]),b.modalWindow?(Object(a["r"])(),Object(a["d"])(p,{key:0,onChildToParent:h.createCard,closeModal:h.closeModal,modalWarning:b.modalWarning},null,8,["onChildToParent","closeModal","modalWarning"])):Object(a["e"])("",!0)],2)}var b=n("1da1"),h=(n("b0c0"),n("c740"),n("a434"),n("96cf"),function(e){return Object(a["u"])("data-v-0a05502d"),e=e(),Object(a["s"])(),e}),m={class:"main_block"},p={class:"town_card"},g={class:"info_block"},O=h((function(){return Object(a["g"])("h4",null,"Weather",-1)})),w=h((function(){return Object(a["g"])("h4",null,"Temperature",-1)})),y=h((function(){return Object(a["g"])("h4",null,"Humidity",-1)})),v={class:"footer_buttons"};function k(e,t,n,r,s,c){var o=this;return Object(a["r"])(),Object(a["f"])("div",m,[Object(a["g"])("div",p,[Object(a["g"])("h2",null,Object(a["z"])(n.weather.name),1),Object(a["g"])("span",null,Object(a["z"])(n.weather.country),1),Object(a["g"])("div",g,[Object(a["g"])("div",null,[O,Object(a["g"])("h4",null,Object(a["z"])(n.weather.weather),1)]),Object(a["g"])("div",null,[w,Object(a["g"])("h4",null,Object(a["z"])(n.weather.temp)+"°C",1)]),Object(a["g"])("div",null,[y,Object(a["g"])("h4",null,Object(a["z"])(n.weather.humidity)+"%",1)])]),Object(a["g"])("footer",null,[Object(a["g"])("span",null,Object(a["z"])(s.timePassed),1),Object(a["g"])("div",v,[Object(a["g"])("button",{onClick:t[0]||(t[0]=function(){return c.emitToParent&&c.emitToParent.apply(c,arguments)})},"REMOVE"),Object(a["g"])("button",{onClick:t[1]||(t[1]=function(e){return n.reloadCard(o.weather.id)})},"RELOAD")])])])])}var C={props:["weather","moment","reloadCard"],data:function(){return{timePassed:this.moment(this.weather.moment).fromNow()}},created:function(){var e=this;setInterval((function(){e.timePassed=e.moment(e.weather.moment).fromNow()}),1e3)},methods:{emitToParent:function(){this.$emit("childToParent",this.weather)}}},x=(n("e256"),n("6b0d")),z=n.n(x);const W=z()(C,[["render",k],["__scopeId","data-v-0a05502d"]]);var _=W,I=function(e){return Object(a["u"])("data-v-50daba1f"),e=e(),Object(a["s"])(),e},P={class:"modal_background"},M={class:"modal_window"},T=I((function(){return Object(a["g"])("h2",null,"Choose a city",-1)})),S=I((function(){return Object(a["g"])("span",null,"To find city start typing and pick one from suggestions",-1)})),E={class:"input_n_warning"},R={key:0},N={key:1};function $(e,t,n,r,s,c){return Object(a["r"])(),Object(a["f"])("div",P,[Object(a["g"])("div",M,[T,S,Object(a["g"])("div",E,[Object(a["D"])(Object(a["g"])("input",{placeholder:"Search city",class:Object(a["n"])({error:s.validationError}),"onUpdate:modelValue":t[0]||(t[0]=function(e){return s.city=e}),ref:"input_city",onKeyup:t[1]||(t[1]=Object(a["E"])((function(){return c.addCity&&c.addCity.apply(c,arguments)}),["enter"]))},null,34),[[a["B"],s.city]]),s.validationError?(Object(a["r"])(),Object(a["f"])("span",R,"Choose a city")):Object(a["e"])("",!0),n.modalWarning?(Object(a["r"])(),Object(a["f"])("span",N,"Wrong city name or too many attempts")):Object(a["e"])("",!0)]),Object(a["g"])("footer",null,[Object(a["g"])("div",null,[Object(a["g"])("button",{onClick:t[2]||(t[2]=function(e){return s.city=""})},"CLEAR")]),Object(a["g"])("div",null,[Object(a["g"])("button",{onClick:t[3]||(t[3]=function(){return n.closeModal&&n.closeModal.apply(n,arguments)})},"CANCEL"),Object(a["g"])("button",{onClick:t[4]||(t[4]=function(){return c.addCity&&c.addCity.apply(c,arguments)})},"ADD")])])])])}var D=n("25a0"),A=n("e3e1"),J={props:["closeModal","modalWarning"],data:function(){return{v$:Object(D["a"])(),city:"",validationError:!1}},validations:{city:{required:A["a"]}},mounted:function(){this.$refs.input_city.focus()},methods:{addCity:function(){this.v$.$validate(),this.v$.$error?this.validationError=!0:(this.validationError=!1,this.emitToParent())},emitToParent:function(){this.$emit("childToParent",this.city),this.city=""}}};n("9b44");const q=z()(J,[["render",$],["__scopeId","data-v-50daba1f"]]);var L=q,U=n("bc3a"),H=n.n(U),V=n("c1df"),B=n.n(V),F={name:"App",components:{TownWeather:_,Modal:L},data:function(){return{modalWindow:!1,modalWarning:!1,weathers:[],userIp:"",userInfo:!1,userWeather:"",timeCreated:"",timePassed:"",info:"",index:0}},mounted:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:null!==localStorage.getItem("weathers")&&(e.weathers=JSON.parse(localStorage.getItem("weathers"))),e.reloadMainInfo();case 2:case"end":return t.stop()}}),t)})))()},created:function(){var e=this;setInterval((function(){e.timePassed=e.moment(e.timeCreated).fromNow()}),6e4)},methods:{moment:function(e){return e?B()(e):B()()},closeModal:function(){this.modalWindow=!1},fetchCityWeather:function(e){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,H.a.get("http://api.openweathermap.org/data/2.5/weather?units=metric&q=".concat(e,"&appid=f096b26d313d10e206868d0f949bc118"));case 3:return t.info=n.sent,t.modalWindow=!1,t.modalWarning=!1,n.abrupt("return",t.info);case 9:n.prev=9,n.t0=n["catch"](0),t.modalWarning=!0;case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))()},createCard:function(e){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.fetchCityWeather(e);case 2:return t.info=n.sent,n.next=5,t.weathers.push({name:t.info.data.name,country:t.info.data.sys.country,weather:t.info.data.weather[0].main,temp:t.info.data.main.temp,humidity:t.info.data.main.humidity,id:t.weathers.length,moment:B()()});case 5:return n.next=7,localStorage.setItem("weathers",JSON.stringify(t.weathers));case 7:case"end":return n.stop()}}),n)})))()},reloadMainInfo:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,H.a.get("https://api.ipify.org?format=json").then((function(t){return e.userIp=t.data.ip}));case 2:return t.next=4,H.a.get("https://ipapi.co/".concat(e.userIp,"/json/")).then((function(t){return e.userInfo=t.data}));case 4:return t.next=6,e.fetchCityWeather(e.userInfo.city);case 6:return t.next=8,H.a.get("http://api.openweathermap.org/data/2.5/weather?units=metric&q=".concat(e.userInfo.city,"&appid=f096b26d313d10e206868d0f949bc118")).then((function(t){return e.userWeather=t.data}));case 8:e.timeCreated=B()(),e.timePassed=e.moment(e.timeCreated).fromNow();case 10:case"end":return t.stop()}}),t)})))()},reloadCard:function(e){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.index=t.weathers.findIndex((function(t){return t.id===e})),console.log(t.weathers[t.index].name),n.next=4,t.fetchCityWeather(t.weathers[t.index].name);case 4:return t.info=n.sent,console.log(t.info),console.log(t.weathers[t.index]),t.weathers[t.index].weather=t.info.data.weather[0].main,t.weathers[t.index].temp=t.info.data.main.temp,t.weathers[t.index].humidity=t.info.data.main.humidity,t.weathers[t.index].moment=B()(),n.next=13,localStorage.setItem("weathers",JSON.stringify(t.weathers));case 13:case"end":return n.stop()}}),n)})))()},deleteCard:function(e){console.log(e),this.index=this.weathers.findIndex((function(t){return t.id===e.id})),0===this.index?this.weathers.splice(0,1):e.id>=this.weathers.length?this.weathers.splice(this.weathers.length-1,this.weathers.length):this.weathers.splice(e.id,1),localStorage.setItem("weathers",JSON.stringify(this.weathers))}}};n("94a4");const K=z()(F,[["render",j]]);var Y=K;Object(a["c"])(Y).mount("#app")},"91d6":function(e,t,n){},"94a4":function(e,t,n){"use strict";n("c752")},"9b44":function(e,t,n){"use strict";n("0790")},c752:function(e,t,n){},e256:function(e,t,n){"use strict";n("91d6")}});
//# sourceMappingURL=app.6c454d7c.js.map