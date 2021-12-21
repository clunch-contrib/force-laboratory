/******/
/******/  // EtcPack Bootstrap/******/  
/******/  // （ https://etcpack.github.io/api/ ）/******/  
/******/  /******/  
/******/  // 记录bundle的函数源码/******/  
/******/  window.__etcpack__bundleSrc__ = {};/******/  
/******/  /******/  
/******/  // 记录bundle的运行结果/******/  
/******/  window.__etcpack__bundleObj__ = {};/******/  
/******/  /******/  
/******/  // 获取bundle结果/******/  
/******/  window.__etcpack__getBundle = function (bundleName) {/******/  
/******/  /******/  
/******/      // 一个bundle只有第一次导入的时候需要执行/******/  
/******/      if (!(bundleName in window.__etcpack__bundleObj__)) {/******/  
/******/          window.__etcpack__bundleObj__[bundleName] = window.__etcpack__bundleSrc__[bundleName]();/******/  
/******/      }/******/  
/******/  /******/  
/******/      // 返回需要的bundle的结果/******/  
/******/      return window.__etcpack__bundleObj__[bundleName];/******/  
/******/  }/******/  
/******/  /******/  
/******/  window.__etcpack__bundleFile__ = {};/******/  
/******/  /******/  
/******/  // 获取懒加载bundle结果/******/  
/******/  window.__etcpack__getLazyBundle = function (fileName, bundleName) {/******/  
/******/      return new Promise(function (resolve) {/******/  
/******/  /******/  
/******/          // 如果加载过了/******/  
/******/          if (window.__etcpack__bundleFile__[fileName]) {/******/  
/******/              resolve(window.__etcpack__getBundle(bundleName));/******/  
/******/              return;/******/  
/******/          }/******/  
/******/  /******/  
/******/          // 获取head标签/******/  
/******/          var head = document.getElementsByTagName('head')[0];/******/  
/******/  /******/  
/******/          // 创建script/******/  
/******/          var script = document.createElement('script');/******/  
/******/  /******/  
/******/          // 设置属性/******/  
/******/          script.src = fileName;/******/  
/******/  /******/  
/******/          // 追加到页面/******/  
/******/          head.appendChild(script);/******/  
/******/  /******/  
/******/          window.__etcpack__bundleFile__[fileName] = true;/******/  
/******/  /******/  
/******/          script.addEventListener('load', function () {/******/  
/******/              resolve(window.__etcpack__getBundle(bundleName));/******/  
/******/          }, false);/******/  
/******/  /******/  
/******/  /******/  
/******/      });/******/  
/******/  }/******/  
/******/  
/************************************************************************/
/******/

/*************************** [bundle] ****************************/
// Original file:./src/entry.js
/*****************************************************************/
window.__etcpack__bundleSrc__['0']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('1');
var QuickPaper =__etcpack__scope_args__.default;
 // 兼容文件

__etcpack__scope_args__=window.__etcpack__getBundle('3');
 // 引入样式

__etcpack__scope_args__=window.__etcpack__getBundle('16');

__etcpack__scope_args__=window.__etcpack__getBundle('17');

__etcpack__scope_args__=window.__etcpack__getBundle('18');
var App =__etcpack__scope_args__.default;
 //根对象

window.quickPaper = new QuickPaper({
  //挂载点
  el: document.getElementById('root'),
  // 启动页面
  render: function render(createElement) {
    return createElement(App);
  }
});
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/lib/quick-paper.js
/*****************************************************************/
window.__etcpack__bundleSrc__['1']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('2');

__etcpack__scope_bundle__.default= QuickPaper;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/quick-paper/dist/quick-paper.min.js
/*****************************************************************/
window.__etcpack__bundleSrc__['2']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    "use strict";function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){_defineProperty(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*!
* quick-paper v1.2.2
* (c) 2019-2021 你好2007 git+https://github.com/hai2007/quick-paper.git
* License: MIT
*/!function(){var e=Object.prototype.toString;function t(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":e.call(t)}var n=function(e,n){return null!==n&&"object"===_typeof(n)&&e.indexOf(n.nodeType)>-1&&!function(e){if(null===e||"object"!==_typeof(e)||"[object Object]"!=t(e))return!1;if(null===Object.getPrototypeOf(e))return!0;for(var n=e;null!==Object.getPrototypeOf(n);)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(e)===n}(n)},r=function(e){var n=_typeof(e);return"string"===n||"object"===n&&null!=e&&!Array.isArray(e)&&"[object String]"===t(e)},o=function(e){if(!function(e){var t=_typeof(e);return null!=e&&("object"===t||"function"===t)}(e))return!1;var n=t(e);return"[object Function]"===n||"[object AsyncFunction]"===n||"[object GeneratorFunction]"===n||"[object Proxy]"===n};function i(e){/^[_$]/.test(e)&&console.error("The beginning of _ or $ is not allowed："+e)}var s=1;function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o={},i=[];if(!r(e))return{type:"component",options:e,attrs:{},children:[]};for(var s in t)/^@/.test(s)?o[s.replace(/^@/,"q-on:")]=t[s]:/^:/.test(s)?o["q-bind"+s]=t[s]:o[s]=t[s];for(var a,c=0;c<n.length;c++)a=n[c],r(a)?/\{\{[^}]+\}\}/.test(a)?i.push({type:"bindText",content:('" '+a+' "').replace(/\{\{([^}]+)\}\}/g,'"+$1+"')}):i.push({type:"text",content:a}):i.push(a);return{type:"none",tagName:e,attrs:o,children:i}}function c(e){for(var t=(e+"").toLowerCase(),n=(e+"").toUpperCase(),r="",o=!1,i=0;i<e.length;i++)"-"!=e[i]?o?(r+=n[i],o=!1):r+=t[i]:o=!0;return r}var l=Object.prototype.toString;var p=function(e){var t=_typeof(e);return"string"===t||"object"===t&&null!=e&&!Array.isArray(e)&&"[object String]"===function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":l.call(e)}(e)},u=function(e){return Array.isArray(e)},f={blankReg:new RegExp("[\\x20\\t\\r\\n\\f]"),blanksReg:/^[\x20\t\r\n\f]{0,}$/,identifier:/^[a-zA-Z_$][0-9a-zA-Z_$]{0,}$/},d=["+","-","*","/","%","&","|","!","?",":","[","]","(",")",">","<","="],h=["+","-","*","/","%","&","|","!","?",":",">","<","=","<=",">=","==","===","!=","!=="];function v(e,t,n){t=t.trim();var r=-1,o=null,i=function(){return o=r++<t.length-1?t[r]:null},s=function(e){return t.substring(r,e+r>t.length?t.length:e+r)};i();for(var a=[];!(r>=t.length);)if(d.indexOf(o)>-1)if(["&","|","="].indexOf(o)>-1)if(["==="].indexOf(s(3))>-1)a.push(s(3)),r+=2,i();else{if(!(["&&","||","=="].indexOf(s(2))>-1))throw new Error("Illegal expression : "+t+"\nstep='analyseExpress',index="+r);a.push(s(2)),r+=1,i()}else["!=="].indexOf(s(3))>-1?(a.push(s(3)),r+=2,i()):[">=","<=","!="].indexOf(s(2))>-1?(a.push(s(2)),r+=1,i()):(a.push(o),i());else if(['"',"'"].indexOf(o)>-1){var c="",l=o;for(i();o!=l;){if(r>=t.length)throw new Error("String unclosed error : "+t+"\nstep='analyseExpress',index="+r);c+=o,i()}a.push(c+"@string"),i()}else if(/\d/.test(o)){var u="no";c=o;for(i();r<t.length;){if(/\d/.test(o))c+=o,"error"==u&&(u="yes");else{if("."!=o||"no"!=u)break;c+=o,u="error"}i()}"error"==u&&(c+="0"),a.push(+c)}else if(["null","true"].indexOf(s(4))>-1)a.push({null:null,true:!0}[s(4)]),r+=3,i();else if(["false"].indexOf(s(5))>-1)a.push({false:!1}[s(5)]),r+=4,i();else if(["undefined"].indexOf(s(9))>-1)a.push({undefined:void 0}[s(9)]),r+=8,i();else if(f.blankReg.test(o))do{i()}while(f.blankReg.test(o)&&r<t.length);else{var v=!1;if("."==o&&(v=!0,i()),!f.identifier.test(o))throw new Error("Illegal express : "+t+"\nstep='analyseExpress',index="+r);for(var y=1;r+y<=t.length&&f.identifier.test(s(y));)y+=1;if(v)a.push("["),a.push(s(y-1)+"@string"),a.push("]");else{var _=s(y-1),g=_ in n?n[_]:e[_];a.push(p(g)?g+"@string":g)}r+=y-2,i()}for(var b=0,m=0;m<a.length;m++)["+","-"].indexOf(a[m])>-1&&(0==m||h.indexOf(a[b-1])>-1)?(a[b++]=+(a[m]+a[m+1]),m+=1):a[b++]=a[m];return a.length=b,a}var y=function(e){return"string"==typeof e?e.replace(/@string$/,""):e};function _(e){for(var t,n=0,r=0;r<e.length;r++)"!"==e[r]?e[n]=!e[++r]:e[n]=e[r],n+=1;if(1==n)return y(e[0]);for(e.length=n,n=0,r=0;r<e.length;r++)"*"==e[r]?e[n-1]=y(e[n-1])*y(e[++r]):"/"==e[r]?e[n-1]=y(e[n-1])/y(e[++r]):"%"==e[r]?e[n-1]=y(e[n-1])%y(e[++r]):e[n++]=e[r];if(1==n)return y(e[0]);for(e.length=n,n=0,r=0;r<e.length;r++)"+"==e[r]?e[n-1]="string"==typeof(t=y(e[n-1])+y(e[++r]))?t+"@string":t:"-"==e[r]?e[n-1]=y(e[n-1])-y(e[++r]):e[n++]=e[r];if(1==n)return y(e[0]);for(e.length=n,n=0,r=0;r<e.length;r++)">"==e[r]?e[n-1]=y(e[n-1])>y(e[++r]):"<"==e[r]?e[n-1]=y(e[n-1])<y(e[++r]):"<="==e[r]?e[n-1]=y(e[n-1])<=y(e[++r]):">="==e[r]?e[n-1]=y(e[n-1])>=y(e[++r]):e[n++]=e[r];if(1==n)return y(e[0]);for(e.length=n,n=0,r=0;r<e.length;r++)"=="==e[r]?e[n-1]=y(e[n-1])==y(e[++r]):"==="==e[r]?e[n-1]=y(e[n-1])===y(e[++r]):"!="==e[r]?e[n-1]=y(e[n-1])!=y(e[++r]):"!=="==e[r]?e[n-1]=y(e[n-1])!==y(e[++r]):e[n++]=e[r];if(1==n)return y(e[0]);for(e.length=n,n=0,r=0;r<e.length;r++)"&&"==e[r]?(e[n-1]=y(e[n-1])&&y(e[1+r]),r+=1):"||"==e[r]?(e[n-1]=y(e[n-1])||y(e[1+r]),r+=1):e[n++]=e[r];if(1==n)return y(e[0]);for(e.length=n,n=0,r=0;r<e.length;r++)"?"==e[r]?(e[n-1]=y(e[n-1])?y(e[r+1]):y(e[r+3]),r+=3):e[n++]=e[r];if(1==n)return y(e[0]);throw e.length=n,new Error("Unrecognized expression : ["+e.toString()+"]")}var g=function(e){for(var t=!0;t;){t=!1;for(var n=[],r=[],o=!1,i=0;i<e.length;i++)if("["==e[i]&&0!=i&&"]"!=e[i-1]){if(o){n.push("[");for(var s=0;s<r.length;s++)n.push(r[s])}else o=!0;r=[]}else if("]"==e[i]&&o){t=!0;var a=_(r),c=n[n.length-1][a];n[n.length-1]=p(c)?c+"@string":c,o=!1}else o?r.push(e[i]):n.push(e[i]);e=n}return e},b=function(e){for(var t=[],n=[],r=0;r<e.length;r++)"["==e[r]?n=[]:"]"==e[r]?t.push(_(n)):n.push(e[r]);return t};function m(e,t,n){var r,o=function e(t,n,r){if(n.indexOf("(")>-1){for(var o=[],i=[],s=0,a=0;a<n.length;a++)if("("==n[a])s>0&&i.push("("),s+=1;else if(")"==n[a]){if(s>1&&i.push(")"),0==(s-=1)){var c=_(e(t,i));o.push(p(c)?c+"@string":c),i=[]}}else s>0?i.push(n[a]):o.push(n[a]);n=o}return g(n)}(e,t);if("["!=o[0])r=[_(o)];else if("]"==o[o.length-1])r=b(o);else{var i=o.lastIndexOf("]"),s=b(o.slice(0,i+1)),a=o.slice(i+1);a.unshift(function(e,t,n){for(var r=(t[0]in n?n[t[0]]:e[t[0]]),o=1;o<t.length;o++)try{r=r[t[o]]}catch(r){throw console.error({target:e,scope:n,expressArray:t,index:o}),r}return r}(e,s,n)),r=[_(a)]}return r}
/*!
   * 🔪 - 设置或获取指定对象上字符串表达式对应的值
   * https://github.com/hai2007/algorithm.js/blob/master/value.js
   *
   * author hai2007 < https://hai2007.gitee.io/sweethome >
   *
   * Copyright (c) 2020-present hai2007 走一步，再走一步。
   * Released under the MIT license
   */var x=function(e,t,n){arguments.length<3&&(n={});var r=v(e,t,n),o=m(e,r,n);if(o.length>1)throw new Error("Illegal expression : "+t+"\nstep='evalExpress',path="+o+",expressArray="+r);return o[0]};function O(e,t,n){window.attachEvent?e.attachEvent("on"+t,n):e.addEventListener(t,n,!1)}function $(e){if(!(this instanceof $))throw new Error("QuickPaper is a constructor and should be called with the `new` keyword");var t;this._name=e.name||"noname",this.$$lifecycle(e.beforeCreate),this.$$init(e),this.$$lifecycle("created"),t=this._el,n([1,9,11],t)&&this.$$mount()}!function(e){e.prototype.$$init=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var t in this._options=e,this._uid=s++,this._data=o(e.data)?e.data():e.data,this._el=e.el,this.__isMounted=!1,this.__isDestroyed=!1,e.methods)i(t),this[t]=e.methods[t];for(var n in this._data)this[n]=this._data[n];for(var r in this.__componentLib_scope={},e.component)this.__componentLib_scope[r]=e.component[r];for(var a in this.__directiveLib_scope={},e.directive)this.__directiveLib_scope[a]=e.directive[a]}}($),function(e){e.prototype.$$lifecycle=function(e){o(e)?e():["created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed"].indexOf(e)>-1&&o(this._options[e])&&this._options[e].call(this)}}($),function(e){e.prototype.$$mountComponent=function(){this.$$lifecycle("beforeMount"),this._vnode=this.$$render(a),this.__directiveTask=[],this.__componentTask=[],this.__bindTextTask=[],function e(t,n,r,o){var i,s=x(t,n);if(s){if("none"==s.type){var a=c(s.tagName);t.__componentLib[a]||t.__componentLib_scope[a]?(s.options=t.__componentLib[a]||t.__componentLib_scope[a],s.type="component"):s.type="tag"}if("component"==s.type){i=document.createElement("quick-paper-component"),r.appendChild(i),s.options.el=i,"render"in s.options||(s.options.render=function(e){return e("quick-paper-component",{},[])}),s.instance=new o(s.options),s.instance.__parent=t;var l={};for(var p in s.attrs)/^data-quickpaper-/.test(p)||(/^:/.test(p)?l[p.replace("q-bind"+p)]=s.attrs[p]:/^@/.test(p)?l[p.replace(p.replace(/^@/,"q-on:"))]=s.attrs[p]:l[p]=s.attrs[p]);var u={attrs:l,instance:s.instance};if("component"==u.instance._name){var f=u.attrs["q-bind:is"];u.instance.lister(o,t[f])}t.__componentTask.push(u)}else if("tag"==s.type){for(var d in i=document.createElement(s.tagName),"Quick-Paper-COMPONENT"==r.nodeName||"Quick-Paper-COMPONENT"==r._nodeName?(b=i,(g=r).parentNode.replaceChild(b,g),t._el=i):r.appendChild(i),s.attrs){var h=s.attrs[d],v=(d+":").split(":"),y=t.__directiveLib[c(v[0])]||t.__directiveLib_scope[c(v[0])];y?t.__directiveTask.push(_objectSpread(_objectSpread({el:i},y),{},{value:h,type:v[1]})):i.setAttribute(d,h)}for(var _=0;_<s.children.length;_++)e(t,n+".children["+_+"]",i,o)}else"text"==s.type?((i=document.createTextNode("")).textContent=s.content.replace(/↵/g,"\n"),r.appendChild(i)):"bindText"==s.type?((i=document.createTextNode("")).textContent=x(t,s.content).replace(/↵/g,"\n"),r.appendChild(i),t.__bindTextTask.push({el:i,content:s.content})):console.error("Type not expected："+s.type);var g,b}else console.error("vnode is undefined!")}(this,"_vnode",this._el,e);for(var t=0;t<this.__directiveTask.length;t++){var n=this.__directiveTask[t];if(o(n.inserted)){var r=void 0;try{r=x(this,n.value)}catch(e){}n.inserted(n.el,{target:this,exp:n.value,value:r,type:n.type})}}!function(e){var t=function(t){i(t),o(e[t])&&console.error('Data property "'+t+'" has already been defined as a Method.');var n=e._data[t];e[t]=n,Object.defineProperty(e,t,{get:function(){return n},set:function(t){n=t,e.$$updateComponent()}})};for(var n in e._data)t(n)}(this),this.__isMounted=!0,this.$$lifecycle("mounted")},e.prototype.$$updateComponent=function(){this.$$lifecycle("beforeUpdate");for(var t=0;t<this.__directiveTask.length;t++){var n=this.__directiveTask[t];if(o(n.update)){var r=void 0;try{r=x(this,n.value)}catch(e){}n.update(n.el,{target:this,exp:n.value,value:r,type:n.type})}}for(var i=0;i<this.__bindTextTask.length;i++){var s=this.__bindTextTask[i],a=x(this,s.content).replace(/↵/g,"\n");s.el.textContent!=a&&(s.el.textContent=a)}for(var c=0;c<this.__componentTask.length;c++){var l=this.__componentTask[c];if("component"==l.instance._name){var p=l.attrs["q-bind:is"];l.instance.lister(e,this[p])}}this.$$lifecycle("updated")},e.prototype.$$destroyComponent=function(){this.$$lifecycle("beforeDestroy");for(var e=0;e<this.__directiveTask.length;e++){var t=this.__directiveTask[e];o(t.delete)&&t.delete(t.el,{target:this,exp:t.value,value:x(this,t.value),type:t.type})}this.$$lifecycle("destroyed")}}($),function(e){e.prototype.__directiveLib={},e.prototype.__componentLib={},function(e){e.directive=function(t,n){e.prototype.__directiveLib[t]=n},e.component=function(t,n){e.prototype.__componentLib[t]=n}}(e),function(e){e.use=function(t){t.install.call(t,e)}}(e)}($),$.prototype.$$mount=function(){if(!o(this._options.render))throw new Error("options.render needs to be a function");this.$$render=this._options.render,this.$$mountComponent()};var w=function(e,t){r(t.type)&&t.type.length>0?e.getAttribute(t.type)!=t.value&&e.setAttribute(t.type,t.value):e.value==t.value&&e.textContent==t.value||(e.value=e.textContent=t.value)},j={inserted:w,update:w},k={inserted:function(e,t){for(var n=t.type.split("."),r={prevent:!1,stop:!1,once:!1},o=1;o<n.length;o++)r[n[o]]=!0;O(e,n[0],(function o(i){r.stop&&function(e){(e=e||window.event).stopPropagation?e.stopPropagation():e.cancelBubble=!0}(i),r.prevent&&function(e){(e=e||window.event).preventDefault?e.preventDefault():e.returnValue=!1}(i);var s,a,c,l=/^([^(]+)(\([^)]{0,}\)){0,1}/.exec(t.exp),p=[],u=[];if(l[2]){var f=l[2].replace(/^\(/,"").replace(/\)$/,"").trim();f.length>0&&(u=f.split(","))}for(var d=0;d<u.length;d++){var h=u[d];h=x(t.target,h),p.push(h)}p.push(i),t.target[l[1]].apply(t.target,p),r.once&&(s=e,a=n[0],c=o,window.detachEvent?s.detachEvent("on"+a,c):s.removeEventListener(a,c,!1))}))}},T={inserted:function(e,t){e.value=t.value,O(e,"input",(function(){!function(e,t,n,r){arguments.length<3&&(r={});for(var o=v(e,t,r),i=m(e,o,r),s=e,a=0;a<i.length-1;a++)i[a]in s||(s[i[a]]=u(s)?[]:{}),s=s[i[a]];s[i[i.length-1]]=n}(t.target,"."+t.exp,e.value)}))},update:function(e,t){e.value=t.value}};$.directive("qBind",j),$.directive("qOn",k),$.directive("qModel",T),$.component("component",{name:"component",data:function(){return{is:null}},methods:{lister:function(e,t){if(t!=this.is&&null!=t){var n=this._oldComponent;n&&n.$$lifecycle("beforeDestroy"),this.is=t;var r=t;r.el=this._el,r.el._nodeName="Quick-Paper-COMPONENT",this._oldComponent=new e(r),this._el=this._oldComponent._el,n&&(n.$$lifecycle("destroyed"),n=null)}}}}),"object"===("undefined"==typeof module?"undefined":_typeof(module))&&"object"===_typeof(module.exports)?module.exports=$:window.QuickPaper=$}();
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/polyfill/Promise.js
/*****************************************************************/
window.__etcpack__bundleSrc__['3']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /*!
 * ✔️ - Promise
 * https://github.com/hai2007/polyfill.js/blob/master/Promise.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2021-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

__etcpack__scope_args__=window.__etcpack__getBundle('4');
var globalNAMESPACE =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('5');
var isFunction=__etcpack__scope_args__.isFunction;
var isObject=__etcpack__scope_args__.isObject;
var isArray=__etcpack__scope_args__.isArray;

__etcpack__scope_args__=window.__etcpack__getBundle('15');
var doResolve=__etcpack__scope_args__.doResolve;
var changeState=__etcpack__scope_args__.changeState;
var triggerEvent=__etcpack__scope_args__.triggerEvent;


function Promise(doback) {

    if (!(this instanceof Promise)) {

        // 所有的报错方式和内容我们都尽力和原生的保持一致，下同
        throw new TypeError('undefined is not a promise');
    }

    if (!(isFunction(doback))) {
        throw new TypeError('Promise resolver ' + doback + ' is not a function');
    }

    /**
     * 参数初始化
     */

    // 当前的值
    this.__value = undefined;

    // 记录着由于then，catch或finally登记的方法
    // Array<onFulfilled|undefined, onRejected|undefined, callback|undefined>
    this.__hocks = [];

    // 状态
    this.__state = 'pending';

    /**
     * 准备完毕以后，开始处理
     */
    doResolve(doback, this);
}

// 添加辅助方法
Promise.prototype.$$changeState = changeState;
Promise.prototype.$$triggerEvent = triggerEvent;

/**
 * 原型上的方法
 */

// 添加解决(fulfillment)和拒绝(rejection)回调到当前 promise,
// 返回一个新的 promise,
// 将以回调的返回值来resolve。
Promise.prototype.then = function (onFulfilled, onRejected) {

    this.__hocks.push([onFulfilled, onRejected, undefined]);

    if (this.__state != 'pending') { this.$$triggerEvent(); }

    return this;

};

// 添加一个拒绝(rejection) 回调到当前 promise, 返回一个新的promise。
// 当这个回调函数被调用，
// 新 promise 将以它的返回值来resolve，
// 否则如果当前promise 进入fulfilled状态，
// 则以当前promise的完成结果作为新promise的完成结果。
Promise.prototype.catch = function (onRejected) {

    this.__hocks.push([undefined, onRejected, undefined]);

    if (this.__state != 'pending') { this.$$triggerEvent(); }

    return this;

};

// 添加一个事件处理回调于当前promise对象，
// 并且在原promise对象解析完毕后，
// 返回一个新的promise对象。
// 回调会在当前promise运行完毕后被调用，
// 无论当前promise的状态是完成(fulfilled)还是失败(rejected)。
Promise.prototype.finally = function (callback) {

    this.__hocks.push([undefined, undefined, callback]);

    if (this.__state != 'pending') { this.$$triggerEvent(); }

    return this;


};

/**
 * 静态方法
 */

// 返回一个状态由给定value决定的Promise对象。
// 如果该值是thenable(即，带有then方法的对象)，
// 返回的Promise对象的最终状态由then方法执行决定；
// 否则的话(该value为空，基本类型或者不带then方法的对象),
// 返回的Promise对象状态为fulfilled，
// 并且将该value传递给对应的then方法。
// 通常而言，如果您不知道一个值是否是Promise对象，使用Promise.resolve(value) 来返回一个Promise对象,
// 这样就能将该value以Promise对象形式使用。
Promise.resolve = function (value) {

    if (isObject(value) && value.constructor === Promise) {
        return value;
    }

    return new Promise(function (resolve) {
        resolve(value);
    });

};

// 返回一个状态为失败的Promise对象，
// 并将给定的失败信息传递给对应的处理方法。
Promise.reject = function (reason) {

    return new Promise(function (resolve, reject) {
        reject(reason);
    });

};

// 这个方法返回一个新的promise对象，
// 该promise对象在iterable参数对象里所有的promise对象都成功的时候才会触发成功，
// 一旦有任何一个iterable里面的promise对象失败则立即触发该promise对象的失败。
// 这个新的promise对象在触发成功状态以后，
// 会把一个包含iterable里所有promise返回值的数组作为成功回调的返回值，
// 顺序跟iterable的顺序保持一致；
// 如果这个新的promise对象触发了失败状态，
// 它会把iterable里第一个触发失败的promise对象的错误信息作为它的失败错误信息。
// Promise.all方法常被用于处理多个promise对象的状态集合.
Promise.all = function (iterable) {

    return new Promise(function (resolve, reject) {

        if (!isArray(iterable)) {
            return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
        }

        var resultData = Array.prototype.slice.call(iterable), num = 0;

        if (resultData.length == 0) resolve([]);

        var doHelp = function (index, item) {
            if (item.__state !== "pending") {

                num += 1;

                if (item.__state == 'rejected') {

                    // 如果遇到第一个失败的，拒绝即可
                    reject(item.__value);
                } else {

                    resultData[index] = item.__value;

                    if (num == resultData.length) {
                        resolve(resultData);
                    }
                }

            } else {
                setTimeout(function () { doHelp(index, item); });
            }
        };

        for (var i = 0; i < resultData.length; i++) {
            doHelp(i, resultData[i]);
        }

    });

};

// 等到所有promises都已敲定（settled）（每个promise都已兑现（fulfilled）或已拒绝（rejected））。
// 返回一个promise，该promise在所有promise完成后完成。并带有一个对象数组，每个对象对应每个promise的结果。
Promise.allSettled = function (iterable) {

    return new Promise(function (resolve, reject) {

        if (!isArray(iterable)) {
            return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
        }

        var resultData = Array.prototype.slice.call(iterable), num = 0;

        if (resultData.length == 0) resolve([]);

        var doHelp = function (index, item) {
            if (item.__state !== "pending") {

                num += 1;

                resultData[index] = {
                    status: item.__state
                };

                if (item.__state == 'fulfilled') {
                    resultData[index].value = item.__value;
                } else {
                    resultData[index].reason = item.__value;
                }

                if (num == resultData.length) {
                    resolve(resultData);
                }

            } else {
                setTimeout(function () { doHelp(index, item); });
            }
        };

        for (var i = 0; i < resultData.length; i++) {
            doHelp(i, resultData[i]);
        }

    });

};
// 收一个Promise对象的集合，
// 当其中的一个 promise 成功，
// 就返回那个成功的promise的值。
Promise.any = function (iterable) {

    return new Promise(function (resolve, reject) {

        if (!isArray(iterable)) {
            return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
        }

        var num = 0;

        if (iterable.length == 0) resolve(undefined);

        var doHelp = function (index, item) {
            if (item.__state !== "pending") {

                num += 1;

                if (item.__state == 'rejected') {

                    if (num == iterable.length) {

                        // 为了兼容性，我们放弃AggregateError
                        return reject(new Error('All promises were rejected'));
                    }

                } else {

                    // 遇到第一个成功的，标记解决即可
                    resolve(item.__value);

                }

            } else {
                setTimeout(function () { doHelp(index, item); });
            }
        };

        for (var i = 0; i < iterable.length; i++) {
            doHelp(i, iterable[i]);
        }

    });
};

// 当iterable参数里的任意一个子promise被成功或失败后，
// 父promise马上也会用子promise的成功返回值或失败详情作为参数调用父promise绑定的相应句柄，
// 并返回该promise对象。
Promise.race = function (iterable) {

    return new Promise(function (resolve, reject) {

        if (!isArray(iterable)) {
            return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
        }

        if (iterable.length == 0) resolve(undefined);

        var doHelp = function (index, item) {
            if (item.__state !== "pending") {

                if (item.__state == 'rejected') {
                    reject(item.__value);
                } else {
                    resolve(item.__value);
                }

            } else {
                setTimeout(function () { doHelp(index, item); });
            }
        };

        for (var i = 0; i < iterable.length; i++) {
            doHelp(i, iterable[i]);
        }

    });
};

// 如果Promise不存在
if (!('Promise' in globalNAMESPACE)) {
    globalNAMESPACE['Promise'] = Promise;
}

// 由于不同浏览器对一些具体的方法兼容不一样
// （比如一些浏览器支持Promise，可是不支持某个方法，需要对该方法进行兼容）
// 需要进一步嗅探
// 推迟支持

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/polyfill/.inner/globalNAMESPACE.js
/*****************************************************************/
window.__etcpack__bundleSrc__['4']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var globalNAMESPACE = (function () {

    // 浏览器环境
    if (typeof window !== 'undefined') return window;

    // nodejs环境
    if (typeof global !== 'undefined') return global;

    throw new Error('The current environment is not known!');

})();

// 获取当前环境的全局变量
__etcpack__scope_bundle__.default= globalNAMESPACE;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/type.js
/*****************************************************************/
window.__etcpack__bundleSrc__['5']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('6');
var _isObject =__etcpack__scope_args__.default;


__etcpack__scope_args__=window.__etcpack__getBundle('7');
var _isBoolean =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('9');
var _isNumber =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('10');
var _isString =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('11');
var _isSymbol =__etcpack__scope_args__.default;


__etcpack__scope_args__=window.__etcpack__getBundle('12');
var _isFunction =__etcpack__scope_args__.default;


__etcpack__scope_args__=window.__etcpack__getBundle('13');
var _isError =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('14');
var _isPlainObject =__etcpack__scope_args__.default;


var domTypeHelp = function (types, value) {
    return value !== null && typeof value === 'object' &&
        types.indexOf(value.nodeType) > -1 &&
        !_isPlainObject(value);
};

/*!
 * 💡 - 值类型判断方法
 * https://github.com/hai2007/tool.js/blob/master/type.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2020-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

__etcpack__scope_bundle__.isObject = _isObject;

// 基本类型
__etcpack__scope_bundle__.isUndefined = function (input) { return input === undefined };
__etcpack__scope_bundle__.isNull = function (input) { return input === null };
__etcpack__scope_bundle__.isBoolean = _isBoolean;
__etcpack__scope_bundle__.isNumber = _isNumber;
__etcpack__scope_bundle__.isString = _isString;
__etcpack__scope_bundle__.isSymbol = _isSymbol;

// 引用类型
__etcpack__scope_bundle__.isFunction = _isFunction;
__etcpack__scope_bundle__.isArray = function (input) { return Array.isArray(input) };
__etcpack__scope_bundle__.isError = _isError;
__etcpack__scope_bundle__.isPlainObject = _isPlainObject;

// 结点类型
__etcpack__scope_bundle__.isElement = function (input) { return domTypeHelp([1, 9, 11], input) };
__etcpack__scope_bundle__.isAttribute = function (input) { return domTypeHelp([2], input) };
__etcpack__scope_bundle__.isText = function (input) { return domTypeHelp([3], input) };
__etcpack__scope_bundle__.isComment = function (input) { return domTypeHelp([8], input) };

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isObject.js
/*****************************************************************/
window.__etcpack__bundleSrc__['6']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /**
 * 判断一个值是不是Object。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是Object返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    var type = typeof value;
    return value != null && (type === 'object' || type === 'function');
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isBoolean.js
/*****************************************************************/
window.__etcpack__bundleSrc__['7']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('8');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是Boolean。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是Boolean返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    return value === true || value === false ||
        (value !== null && typeof value === 'object' && getType(value) === '[object Boolean]');
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/getType.js
/*****************************************************************/
window.__etcpack__bundleSrc__['8']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var toString = Object.prototype.toString;

/**
 * 获取一个值的类型字符串[object type]
 *
 * @param {*} value 需要返回类型的值
 * @returns {string} 返回类型字符串
 */
__etcpack__scope_bundle__.default= function (value) {
    if (value == null) {
        return value === undefined ? '[object Undefined]' : '[object Null]';
    }
    return toString.call(value);
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isNumber.js
/*****************************************************************/
window.__etcpack__bundleSrc__['9']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('8');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是number。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是number返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    return typeof value === 'number' || (
        value !== null && typeof value === 'object' &&
        getType(value) === '[object Number]'
    );
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isString.js
/*****************************************************************/
window.__etcpack__bundleSrc__['10']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('8');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是String。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是String返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    var type = typeof value;
    return type === 'string' || (type === 'object' && value != null && !Array.isArray(value) && getType(value) === '[object String]');
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isSymbol.js
/*****************************************************************/
window.__etcpack__bundleSrc__['11']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('8');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是symbol。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是symbol返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    var type = typeof value;
    return type === 'symbol' || (type === 'object' && value !== null && getType(value) === '[object Symbol]');
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isFunction.js
/*****************************************************************/
window.__etcpack__bundleSrc__['12']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('8');
var getType =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('6');
var isObject =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是Function。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是Function返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    if (!isObject(value)) {
        return false;
    }

    var type = getType(value);
    return type === '[object Function]' || type === '[object AsyncFunction]' ||
        type === '[object GeneratorFunction]' || type === '[object Proxy]';
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isError.js
/*****************************************************************/
window.__etcpack__bundleSrc__['13']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('14');
var isPlainObject =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('8');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是错误对象。
 * `Error`, `EvalError`, `RangeError`, `ReferenceError`,`SyntaxError`, `TypeError`, or `URIError`
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是错误对象返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    if (value === null || typeof value !== 'object') {
        return false;
    }

    var type = getType(value);
    return type === '[object Error]' || type === '[object DOMException]' ||
        (typeof value.message === 'string' && typeof value.name === 'string' && !isPlainObject(value));
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isPlainObject.js
/*****************************************************************/
window.__etcpack__bundleSrc__['14']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('8');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是一个朴素的'对象'
 * 所谓"纯粹的对象"，就是该对象是通过"{}"或"new Object"创建的
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是朴素的'对象'返回true，否则返回false
 */

__etcpack__scope_bundle__.default= function (value) {
    if (value === null || typeof value !== 'object' || getType(value) != '[object Object]') {
        return false;
    }

    // 如果原型为null
    if (Object.getPrototypeOf(value) === null) {
        return true;
    }

    var proto = value;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(value) === proto;
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/polyfill/.inner/Promise/doResolve.js
/*****************************************************************/
window.__etcpack__bundleSrc__['15']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('5');
var isFunction=__etcpack__scope_args__.isFunction;
var isObject=__etcpack__scope_args__.isObject;


__etcpack__scope_bundle__.changeState = function (data, state) {

    // 更改状态
    this.__state = state;
    this.__value = data;

    // 由于状态改变了，触发对then，finnaly，catch等的执行更新
    this.$$triggerEvent();

};

__etcpack__scope_bundle__.triggerEvent = function () {

    // 这个方法的任务就是把__hocks中记录的方法依次执行了
    // 什么时候会停止？两种情况：
    // 1.队列执行完了
    // 2.遇到其中一个执行方法返回Promise

    var currentHock = null;

    // 同意状态就去寻找下一个onFulfilled
    // 拒绝状态就去寻找下一个onRejected
    // 数组下标0和1分别记录这两个状态，因此先根据状态确定下标即可
    var index = this.__state == 'fulfilled' ? 0 : 1, i;

    // 可能找到，可能到结尾都没有找到
    while (this.__hocks.length > 0) {

        if (isFunction(this.__hocks[0][index])) {
            currentHock = this.__hocks.shift();
            break;
        }

        // 对于路过的finally执行一下
        else if (isFunction(this.__hocks[0][2])) {
            this.__hocks[0][2]();
        }

        this.__hocks.shift();

    }

    // 如果找到了
    if (currentHock !== null) {
        var result = currentHock[index](this.__value);

        // 如果是Promise
        if (isObject(result) && result.constructor === this.constructor) {
            for (var i = 0; i < this.__hocks.length; i++) {
                result.__hocks.push(this.__hocks[i]);
                if (result.__state != 'pending') result.$$triggerEvent();
            }

            this.then = function (onFulfilled, onRejected) {

                result.then(onFulfilled, onRejected);
            };
            this.catch = function (onRejected) {

                result.catch(onRejected);
            };
            this.finally = function (callback) {

                result.finally(callback);
            };

        }

        // 否则
        else {

            this.__value = result;
            this.__state = "fulfilled";
            this.$$triggerEvent();

        }

    }

};

__etcpack__scope_bundle__.doResolve = function (doback, that) {

    // 防止重复修改状态
    var done = false;

    try {
        doback(function (value) {
            if (done) return; done = true;
            that.$$changeState(value, 'fulfilled');

        }, function (reason) {
            if (done) return; done = true;
            that.$$changeState(reason, 'rejected');

        });
    } catch (error) {
        if (done) return; done = true;
        that.$$changeState(error, 'rejected');
    }

};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/style/normalize.css
/*****************************************************************/
window.__etcpack__bundleSrc__['16']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "/*!\r\n * 👁️ - 统一不同浏览器的基础样式\r\n * https://github.com/hai2007/style.css/blob/master/normalize.css\r\n *\r\n * author hai2007 < https://hai2007.gitee.io/sweethome >\r\n *\r\n * Copyright (c) 2020-present hai2007 走一步，再走一步。\r\n * Released under the MIT license\r\n */\r\n\r\nhtml {\r\n    /* 防止iPhone在坚屏转向横屏时放大文字 */\r\n    -ms-text-size-adjust: 100%;\r\n    -webkit-text-size-adjust: 100%;\r\n    /* 统一行高 */\r\n    line-height: 1.15;\r\n}\r\n\r\nbutton,\r\ninput {\r\n    /* 兼容部分手机下border不显示问题 */\r\n    border: 1px solid #b2b2bd;\r\n}\r\n\r\narticle,\r\nfooter,\r\nheader,\r\nnav,\r\nsection {\r\n    /* 修正旧浏览器未定义的块级元素 */\r\n    display: block;\r\n}\r\n\r\ncanvas,\r\nsvg {\r\n    /* 修正旧浏览器未定义的行内块元素 */\r\n    display: inline-block;\r\n}\r\n\r\n* {\r\n    /* 统一不同浏览器盒子尺寸计算方法 */\r\n    box-sizing: border-box;\r\n}\r\n\r\n::-ms-clear,\r\n::-ms-reveal {\r\n    /* 去掉IE浏览器输入框叉叉和眼睛 */\r\n    display: none;\r\n}\r\n\r\nimg {\r\n    /* 针对火狐浏览器在img标签没有src时候的差异修复 */\r\n    display: inline-block;\r\n}\r\n\r\nhtml {\r\n    /* 设置默认字体为统一的安全字体 */\r\n    font-family: sans-serif;\r\n}\r\n\r\na {\r\n    /* 默认去掉下划线 */\r\n    text-decoration: none;\r\n}\r\n\r\nli {\r\n    /* 去掉前置索引 */\r\n    list-style-type: none;\r\n}\r\n\r\nul,\r\nol,\r\nli,\r\np,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n    /* 去掉不喜欢的间距 */\r\n    -webkit-margin-before: 0;\r\n    -webkit-margin-after: 0;\r\n    -webkit-padding-start: 0;\r\n    /* 去掉不喜欢的间距，针对火狐浏览器等 */\r\n    margin-block-end: 0;\r\n    margin-block-start: 0;\r\n    padding-inline-start: 0;\r\n    /* 修改IE和其它浏览器不一致问题 */\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nbody {\r\n    /* 去掉默认的8px */\r\n    margin: 0;\r\n}\r\n\r\ntable {\r\n    /* 设置默认表格边框合并为一个单一的边框 */\r\n    border-collapse: collapse;\r\n}\r\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/assets/style.scss
/*****************************************************************/
window.__etcpack__bundleSrc__['17']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['18']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('19');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('27');


    script.render=function(createElement){

        return createElement('div',{"quickpaper":"","data-quickpaper-347ecaca":""},[createElement('a',{"href":"https://github.com/clunch-contrib/force-laboratory","target":"_blank","data-quickpaper-347ecaca":""},["Fork Me on Github"]),createElement('h2',{"data-quickpaper-347ecaca":""},["力图实验用例，基于",createElement('a',{"href":"https://hai2007.gitee.io/image2d/","target":"_blank","rel":"noopener noreferrer","data-quickpaper-347ecaca":""},["image2D"]),"开发，用于探索力图算法的最佳实践。"]),createElement('div',{"id":"painter","data-quickpaper-347ecaca":""},[])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App.paper?QuickPaper&type=script&lang=js&hash=347ecaca
/*****************************************************************/
window.__etcpack__bundleSrc__['19']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('20');
var forceLayout =__etcpack__scope_args__.default;

    __etcpack__scope_args__=window.__etcpack__getBundle('23');
var forceData =__etcpack__scope_args__.default;

    __etcpack__scope_args__=window.__etcpack__getBundle('24');
var $ =__etcpack__scope_args__.default;


    __etcpack__scope_args__=window.__etcpack__getBundle('26');
var region =__etcpack__scope_args__.default;

    $$.prototype.region = region;

    __etcpack__scope_bundle__.default= {
        mounted() {
            let force = forceLayout();

            // 配置
            force.config({
                center: 26,//中心力强度
                coulomb: 400,//库仑力缩小倍数
                spring: 200,//软棒系数
                scale: 0.24//组内绳子缩短程度
            });

            let canvas = $$('<canvas>非常抱歉，您的浏览器不支持canvas!</canvas>')
                .appendTo('#painter')
                .attr({
                    'width': 720,
                    'height': 520
                });

            // 获取图层管理对象
            let layer = canvas.layer(),

                // 绘制连线的图层画笔
                plink = layer.painter('link'),

                // 绘制结点的图层画笔
                pnode = layer.painter('node');

            // 准备好的不同类型结点的颜色
            let colors = ['#4CAF50', '#673AB7', '#CDDC39', '#F44336', '#0a4c80', '#9E9E9E',
                '#FF9800', '#795548', '#03A9F4', '#1b290b', '#fbe209'];

            // 建立区域管理对象
            let regionManager = canvas.region();

            plink.config({
                "strokeStyle": '#ccc',
                "lineWidth": 1.5
            });
            pnode.config({
                "strokeStyle": '#fff',
                "lineWidth": 5
            });

            force

                // 分析数据方法
                .bind('analyse', function (initnode) {
                    return [initnode.id, initnode.group];
                }, function (initlink) {
                    return [initlink.source, initlink.target, initlink.value + 240];
                })

                // 绘图方法
                .bind('update', function (node) {
                    pnode.beginPath()
                        .config('fillStyle', colors[node.orgData.group])
                        .arc(node.x * 0.7 + 10, node.y * 0.5 + 10, 5, 0, Math.PI * 2)
                        .stroke()
                        .fill();

                    // 修改区域
                    regionManager.drawer(node.id, function (painter) {
                        painter.arc(node.x * 0.7 + 10, node.y * 0.5 + 10, 5, 0, Math.PI * 2);
                        painter.fill();
                    });
                }, function (source, target, link) {
                    plink
                        .beginPath()
                        .moveTo(source.x * 0.7 + 10, source.y * 0.5 + 10)
                        .lineTo(target.x * 0.7 + 10, target.y * 0.5 + 10)
                        .stroke();
                })

                .bind('live', function () {
                    pnode.clearRect();
                    plink.clearRect();

                    // 擦除全部区域，恢复初始化
                    regionManager.erase(function (painter) {
                        painter.fillRect(0, 0, 720, 520);
                    });

                }, function () {
                    layer.update();
                });

            force(forceData.nodes, forceData.links);

            let region = undefined, p;

            $$('canvas')

                // 鼠标按下
                // 通过区域记录当前按下的是谁
                .bind('mousedown', function (event) {
                    event = event || window.event;

                    let temp = regionManager.getRegion(event);
                    if (temp)
                        region = temp[0];
                })

                // 鼠标放开
                // 当前通过区域标记谁被按下的记录，清空
                .bind('mouseup', function (event) {
                    event = event || window.event;
                    region = undefined;
                })

                // 鼠标移动
                // 不同的修改当前被区域记录下按下的结点
                .bind('mousemove', function (event) {
                    event = event || window.event;
                    if (region) {

                        p = $$('canvas').position(event);

                        // 由于有内容位置改变,需要通知力布局
                        force.update(region, (p.x - 10) / 7 * 10, (p.y - 10) * 2);

                        $$('canvas').css('cursor', 'pointer');
                    } else {
                        $$('canvas').css('cursor', 'default');
                    }
                });

        }
    };
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/force/index.js
/*****************************************************************/
window.__etcpack__bundleSrc__['20']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('21');
var _coulomb_law =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('22');
var _Velocity_Verlet_P=__etcpack__scope_args__._Velocity_Verlet_P;
var _Velocity_Verlet_V=__etcpack__scope_args__._Velocity_Verlet_V;

/**
 * 力布局
 *
 * 采用阻尼衰减
 */

__etcpack__scope_bundle__.default= function () {
  var scope = {
    // 处理方法
    "e": {},
    // 配置参数
    "c": {}
  },
      // 分别用于保存结点和连线，内部存储
  allNode,
      allLink,
      i,
      j,
      k,
      flag,
      source,
      target,
      dx,
      dy,
      d,
      fx,
      fy,
      ax,
      ay,
      dsq,
      // 标记轮播计算是否在运行中
  running = false,
      num = 0,
      // 阻尼衰减
  alpha = 1,
      alphaMin = 0.001,
      // alpha衰减率
  alphaDecay = 1 - Math.pow(alphaMin, 1 / 300),
      alphaTarget = 0,
      // 更新弹簧引力
  updateSpring = function updateSpring() {
    for (i in allLink) {
      for (j in allLink[i]) {
        source = allNode[i];
        target = allNode[j];
        dx = source.x - target.x;
        dy = source.y - target.y; // 如果绳子长度为0，忽略作用力

        if (dx != 0 && dy != 0) {
          d = Math.sqrt(dx * dx + dy * dy); // scope.c.spring表示弹簧系数
          // 同一组之间和别的组之间为了显示的分开，绳子长度进行了统一的缩放

          k = scope.c.spring * (d - (allLink[i][j].isG ? allLink[i][j].l * scope.c.scale : allLink[i][j].l));
          fx = k * dx / d;
          fy = k * dy / d; // 软木棒作用的双方都会受到力

          allNode[i].fx -= fx;
          allNode[i].fy -= fy;
          allNode[j].fx += fx;
          allNode[j].fy += fy;
        }
      }
    }
  },
      // 更新库伦斥力
  updateReplusion = function updateReplusion() {
    k = [];

    for (i in allNode) {
      k.push([allNode[i].x, allNode[i].y]);
    }

    j = _coulomb_law(k);
    k = 0;

    for (i in allNode) {
      allNode[i].fx += j[k][2] / scope.c.coulomb;
      allNode[i].fy += j[k][3] / scope.c.coulomb;
      k += 1;
    }
  },
      // 中心引力，用以聚笼结点
  updateCenter = function updateCenter() {
    for (i in allNode) {
      k = allNode[i].ng > 0 ? allNode[i].ng : -1;
      allNode[i].fx += (500 - allNode[i].x) * scope.c.center * k;
      allNode[i].fy += (500 - allNode[i].y) * scope.c.center * k;
    }
  },
      //持续计算
  tick = function tick() {
    // alpha不断衰减
    alpha += (alphaTarget - alpha) * alphaDecay;
    /**
     * 计算
     */
    // 初始化受力

    for (i in allNode) {
      allNode[i].fx = 0;
      allNode[i].fy = 0;
    } // 更新力，得出加速度


    updateSpring();
    updateReplusion();
    updateCenter(); // 更新位置

    for (i in allNode) {
      // 1.计算新的位置
      dx = _Velocity_Verlet_P(allNode[i].x, allNode[i].vx, allNode[i].ax, 1) - allNode[i].x;
      dy = _Velocity_Verlet_P(allNode[i].y, allNode[i].vy, allNode[i].ay, 1) - allNode[i].y;
      dsq = dx * dx + dy * dy; // 1.1超过一次改变最大程度

      if (dsq > 100) {
        // 如果二次位置（之前和计算后的）绘制的面积大于100，认为这是一次剧烈的改变
        // 剧烈的改变是不友好的用户体验
        k = Math.sqrt(100 / dsq);
        dx *= k;
        dy *= k;
      } // 更新结点位置


      allNode[i].x += dx;
      allNode[i].y += dy; // 1.2 如果结点越界

      if (allNode[i].x < 0) allNode[i].x = 0;
      if (allNode[i].y < 0) allNode[i].y = 0;
      if (allNode[i].x > 1000) allNode[i].x = 1000;
      if (allNode[i].y > 1000) allNode[i].y = 1000; // 2.更新加速度

      ax = allNode[i].ax * alpha;
      ay = allNode[i].ay * alpha;
      allNode[i].ax = allNode[i].fx / 1000 * alpha;
      allNode[i].ay = allNode[i].fy / 1000 * alpha; // 3.更新速度
      // 采用速度verlet算法计算
      // 乘上alpha是为了让结点慢慢停下来
      // 因为理论上来说，结点很大概率会永远停不下来
      // 但这是不需要的，因此添加了阻尼衰减

      allNode[i].vx = _Velocity_Verlet_V(allNode[i].vx, ax, allNode[i].ax, 1) * alpha;
      allNode[i].vy = _Velocity_Verlet_V(allNode[i].vy, ay, allNode[i].ay, 1) * alpha;
    } // 调用钩子


    if (num < 30) {
      num += 1;
    } else {
      // 重新渲染前调用
      if (scope.e.live && typeof scope.e.live[0] === 'function') scope.e.live[0](); // 绘制结点

      for (i in allNode) {
        scope.e.update[0](allNode[i]);
      }

      for (i in allLink) {
        for (j in allLink[i]) {
          // 绘制连线
          scope.e.update[1](allNode[i], allNode[j], allLink[i][j]);
        }
      } // 渲染结束后调用


      if (scope.e.live && typeof scope.e.live[1] === 'function') scope.e.live[1]();
    } // 判断是否需要停止


    if (alpha >= alphaMin) {
        // 计算一定次数以后再开始绘制页面
        // 这是为了加速渲染
        // 我们不希望初始化计算时间过长
        if (num < 30) tick();else window.setTimeout(function () {
          // 每次重新渲染页面不需要太快
          // 一定间隔后渲染依旧不会影响体验
          tick();
        }, 40);
    } else // 标记迭代结束
      running = false;
  },
      // 启动更新
  update = function update() {
    if (!running) {
      // running表示此刻是否在迭代计算
      running = true;
      tick();
      alpha = 1;
    } else {
      // 如果在迭代计算
      // 启动更新等价与保证衰减率不低于0.3
      alpha = alpha < 0.3 ? 0.3 : alpha;
    }
  };
  /**
   * 调用启动布局计算的方法
   * @param {Array} initnodes 全部结点
   * @param {Array} initlinks 全部连线
   *
   * -----------------------------------------
   * 需要分析这些数据的方法需要在绘图前配置好
   * 因此原则上来说，原始数据只要是二个数组
   * 其它没有任何要求
   *
   */


  var force = function force(initnodes, initlinks) {
    allNode = {};
    allLink = {}; // 分析结点
    // 初始化结点被分配在一个10*10的区域
    // 这里的num表示这个区域一行至少需要存放多少个结点
    // sw表示一个结点占据的宽是多少

    var num = Math.ceil(10 / Math.sqrt(100 / initnodes.length)),
        sw = 10 / num;
    j = {
      "p": [],
      "g": {}
    };

    for (i = 0; i < initnodes.length; i++) {
      // k返回一个数组
      // [结点id，结点所在组的名称]
      k = scope.e.analyse[0](initnodes[i]); // 内部存储一个点的结构

      allNode[k[0]] = {
        "orgData": initnodes[i],
        //结点原始数据
        "vx": 0,
        "vy": 0,
        //结点坐标
        "ax": 0,
        "ay": 0,
        //结点加速度
        //记录结点和哪些结点连接在一起
        // t保存的是结点作为source
        // s保存的是结点作为target
        "t": [],
        "s": [],
        "id": k[0],
        //该结点的唯一标识
        "g": k[1],
        //结点所在的组
        "ng": 0,
        //和结点相连却不是一个组的连线个数
        "ig": 0 //和结点相连是一个组的连线个数

      }; // j中的p记录了初始化结点可以存放的位置有哪些
      // j中的g记录了根据组分别保存的结点
      // 这二个记录的目的是在稍晚点的时候初始化点的坐标的时候
      // 把同一组的结点尽力初始化在一起

      j.p.push([i % num * sw + sw * 0.5, Math.ceil((i + 1) / num) * sw - sw * 0.5]);
      j.g[k[1]] = j.g[k[1]] || [];
      j.g[k[1]].push(k[0]);
    }

    flag = 0;

    for (i in j.g) {
      for (k in j.g[i]) {
        // 如同前面描述的，这里把可以存放的点，根据组来一个个分配
        allNode[j.g[i][k]].x = j.p[flag][0] + 495;
        allNode[j.g[i][k]].y = j.p[flag][1] + 495;
        flag += 1;
      }
    } // 分析连线


    for (i = 0; i < initlinks.length; i++) {
      // k返回一个数组
      // [sorce结点，target结点，连线长度]
      k = scope.e.analyse[1](initlinks[i]);
      allLink[k[0]] = allLink[k[0]] || {}; // 内部存储一条线的结构

      allLink[k[0]][k[1]] = {
        "l": k[2],
        //线条长度
        "orgData": initlinks[i],
        //线条元素数据
        // true表示连线的二个结点是一个组的，否则为false
        "isG": allNode[k[0]].g == allNode[k[1]].g ? true : false
      }; // 告诉结点，他连接的点

      allNode[k[0]].t.push(k[1]);
      allNode[k[1]].s.push(k[0]);

      if (allNode[k[0]].g != allNode[k[1]].g) {
        allNode[k[0]].ng += 1;
        allNode[k[1]].ng += 1;
      } else {
        allNode[k[0]].ig += 1;
        allNode[k[1]].ig += 1;
      }
    }

    update();
  }; // 挂载处理事件
  // 结点更新处理方法 update(nodeback(node), linkback(link, sourceNode, targetNode))
  // 分析结点和连线的方法 analyse(nodeback(initnode), linkback(inilink))
  // 生命钩子 live(beforback(),afterback())


  force.bind = function (type, nodeback, linkback) {
    if (typeof nodeback !== 'function') nodeback = function nodeback() {};
    if (typeof linkback !== 'function') linkback = function linkback() {};
    scope.e[type] = [nodeback, linkback];
    return force;
  }; // 更新一个特定结点位置
  // 在页面交互的时候，请使用这个方法更新鼠标拖动的结点的实时位置


  force.update = function (id, x, y) {
    allNode[id].x = x;
    allNode[id].y = y;
    update();
    return force;
  };
  /**
   * 配置方法
   * @param {json} config
   *
   * 下面是全部可配置项的例子
   * config={
   *
   *   center:26,//中心力强度
   *   coulomb:400,//库仑力缩小倍数
   *   spring:200,//软棒系数
   *   scale:0.3//组内绳子缩短程度
   *
   * }
   */


  force.config = function (config) {
    for (k in config) {
      scope.c[k] = config[k];
    }

    return force;
  };

  return force;
}
;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/force/Coulomb-law.js
/*****************************************************************/
window.__etcpack__bundleSrc__['21']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /**
 * 库仑力计算 - 二维
 * -------------------------------
 *
 * 用一棵四叉树来记录结点位置
 * 采用Barnes-Hut加速计算，加速精度0.9
 *
 * 求解步骤：
 * 1.生成四叉树；
 * 2.求解每个点的库仑力，求解中坚持从大区域到小区域的方法：
 *   2.1先检测把目标区域看成一个点是否可行；
 *   2.2如果不可行，划分计算。
 */

/**
 * @param {array} electrons 电子集合
 * 每个电子的保存结构为:
 * [x,y]
 *
 * @return {array} cElectrons 库仑力电子集合
 * 每个电子的保存结构为：
 * [x,y,lawx,lawy]，最后二个参数是计算的x和y方向的库仑力
 */
__etcpack__scope_bundle__.default= function (electrons) {
  var // Barnes-Hut近似精度平方
  theta2 = 0.81,
      // 四叉树
  Q_Tree = {},
      i,
      j; // 求解出坐标最值

  var minX = electrons[0][0],
      minY = electrons[0][1],
      maxX = electrons[0][0],
      maxY = electrons[0][1];

  for (i = 1; i < electrons.length; i++) {
    if (electrons[i][0] < minX) minX = electrons[i][0];else if (electrons[i][0] > maxX) maxX = electrons[i][0];
    if (electrons[i][1] < minY) minY = electrons[i][1];else if (electrons[i][1] > maxY) maxY = electrons[i][1];
  } // 生成四叉树


  (function calc_Q_Tree(nodes, id, ix, ax, iy, ay) {
    var mx = (ix + ax) * 0.5,
        my = (iy + ay) * 0.5;
    Q_Tree[id] = {
      "num": nodes.length,
      "cx": mx,
      "cy": my,
      "w": ax - ix,
      "h": ay - iy,
      // 无法或无需分割，包含的是结点
      "e": [],
      // 分割的子区域，包含的是区域id
      "children": []
    };

    if (nodes.length == 1) {
      Q_Tree[id].e = [nodes[0]];
      return;
    }

    var ltNodes = [],
        rtNodes = [],
        lbNodes = [],
        rbNodes = [];

    for (i = 0; i < nodes.length; i++) {
      // 分割线上的
      if (nodes[i][0] == mx || nodes[i][1] == my || nodes[i][0] == ix || nodes[i][0] == ax || nodes[i][1] == iy || nodes[i][1] == ay) Q_Tree[id].e.push(nodes[i]); // 更小的格子里
      else if (nodes[i][0] < mx) {
        if (nodes[i][1] < my) ltNodes.push(nodes[i]);else lbNodes.push(nodes[i]);
      } else {
        if (nodes[i][1] < my) rtNodes.push(nodes[i]);else rbNodes.push(nodes[i]);
      }
    } // 启动子区域分割


    if (ltNodes.length > 0) {
      Q_Tree[id].children.push(id + "1");
      calc_Q_Tree(ltNodes, id + "1", ix, mx, iy, my);
    }

    if (rtNodes.length > 0) {
      Q_Tree[id].children.push(id + "2");
      calc_Q_Tree(rtNodes, id + "2", mx, ax, iy, my);
    }

    if (lbNodes.length > 0) {
      Q_Tree[id].children.push(id + "3");
      calc_Q_Tree(lbNodes, id + "3", ix, mx, my, ay);
    }

    if (rbNodes.length > 0) {
      Q_Tree[id].children.push(id + "4");
      calc_Q_Tree(rbNodes, id + "4", mx, ax, my, ay);
    }
  })(electrons, 'Q', minX, maxX, minY, maxY); // 求解库仑力


  var treeNode,
      eleNode,
      law = [],
      d2,
      r2,

  /**
   * q1、x1、y1：目标作用电子（或电子团）的电荷、x坐标、y坐标
   * q2、x2、y2：目标计算电子的电荷、x坐标、y坐标
   */
  doLaw = function doLaw(q1, x1, y1, x2, y2) {
    if (x1 == x2 && y1 == y2) // 重叠的点忽略
      return [0, 0];
    var f = q1 / ((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    var d = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    return [f * (x2 - x1) / d, f * (y2 - y1) / d];
  };

  var calc_Coulomb_Law = function calc_Coulomb_Law(treeName, i) {
    treeNode = Q_Tree[treeName];
    eleNode = electrons[i]; // Barnes-Hut加速计算
    // 区域面积

    d2 = treeNode.cx * treeNode.cy; // '质心'间距离平方

    r2 = (eleNode[0] - treeNode.cx) * (eleNode[0] - treeNode.cx) + (eleNode[1] - treeNode.cy) * (eleNode[1] - treeNode.cy);

    if (d2 / r2 <= theta2) {
      // 默认每个电荷数量是1，且都同性
      return doLaw(treeNode.num, treeNode.cx, treeNode.cy, eleNode[0], eleNode[1]);
    } else {
      var result_law = [0, 0],
          temp_law;

      for (j = 0; j < treeNode.e.length; j++) {
        temp_law = doLaw(1, treeNode.e[j][0], treeNode.e[j][1], eleNode[0], eleNode[1]);
        result_law[0] += temp_law[0];
        result_law[1] += temp_law[1];
      }

      for (j = 0; j < treeNode.children.length; j++) {
        temp_law = calc_Coulomb_Law(treeNode.children[j], i);
        result_law[0] += temp_law[0];
        result_law[1] += temp_law[1];
      }

      return result_law;
    }
  };

  for (i = 0; i < electrons.length; i++) {
    law = calc_Coulomb_Law('Q', i);
    electrons[i][2] = law[0];
    electrons[i][3] = law[1];
  }

  return electrons;
}
;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/force/Velocity-Verlet.js
/*****************************************************************/
window.__etcpack__bundleSrc__['22']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /**
 * 启动速度verlet算法需要知道最初时刻的位置、速度和加速度
 *
 * 求解步骤：
 * 1.根据前一时刻的位置，速度和加速度获得此刻的位置；
 * 2.根据此刻的位置，获得此刻的加速度；
 * 3.根据前一时刻的速度和加速度，此刻的加速度，获得此刻的速度。
 */

/**
 * 前一刻位置、速度和加速度，时间间隔
 * 在极其小的时间间隔里，加速度的改变对位置的计算可以忽略不计
 */
__etcpack__scope_bundle__._Velocity_Verlet_P = function _Velocity_Verlet_P(p, v, a, dt) {
  return p + v * dt + a * dt * dt * 0.5;
};
/**
 * 前一刻速度、加速度，此刻加速度，时间间隔
 * 假设加速度的改变在极其小的时间间隔里可以看成线性变化
 */

__etcpack__scope_bundle__._Velocity_Verlet_V = function _Velocity_Verlet_V(v, a, na, dt) {
  return v + (a + na) * dt * 0.5;
};
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/assets/data.json
/*****************************************************************/
window.__etcpack__bundleSrc__['23']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= {
    "nodes": [
        {
            "id": "Myriel",
            "group": 1
        },
        {
            "id": "Napoleon",
            "group": 1
        },
        {
            "id": "Mlle.Baptistine",
            "group": 1
        },
        {
            "id": "Mme.Magloire",
            "group": 1
        },
        {
            "id": "CountessdeLo",
            "group": 1
        },
        {
            "id": "Geborand",
            "group": 1
        },
        {
            "id": "Champtercier",
            "group": 1
        },
        {
            "id": "Cravatte",
            "group": 1
        },
        {
            "id": "Count",
            "group": 1
        },
        {
            "id": "OldMan",
            "group": 1
        },
        {
            "id": "Labarre",
            "group": 2
        },
        {
            "id": "Valjean",
            "group": 2
        },
        {
            "id": "Marguerite",
            "group": 3
        },
        {
            "id": "Mme.deR",
            "group": 2
        },
        {
            "id": "Isabeau",
            "group": 2
        },
        {
            "id": "Gervais",
            "group": 2
        },
        {
            "id": "Tholomyes",
            "group": 3
        },
        {
            "id": "Listolier",
            "group": 3
        },
        {
            "id": "Fameuil",
            "group": 3
        },
        {
            "id": "Blacheville",
            "group": 3
        },
        {
            "id": "Favourite",
            "group": 3
        },
        {
            "id": "Dahlia",
            "group": 3
        },
        {
            "id": "Zephine",
            "group": 3
        },
        {
            "id": "Fantine",
            "group": 3
        },
        {
            "id": "Mme.Thenardier",
            "group": 4
        },
        {
            "id": "Thenardier",
            "group": 4
        },
        {
            "id": "Cosette",
            "group": 5
        },
        {
            "id": "Javert",
            "group": 4
        },
        {
            "id": "Fauchelevent",
            "group": 0
        },
        {
            "id": "Bamatabois",
            "group": 2
        },
        {
            "id": "Perpetue",
            "group": 3
        },
        {
            "id": "Simplice",
            "group": 2
        },
        {
            "id": "Scaufflaire",
            "group": 2
        },
        {
            "id": "Woman1",
            "group": 2
        },
        {
            "id": "Judge",
            "group": 2
        },
        {
            "id": "Champmathieu",
            "group": 2
        },
        {
            "id": "Brevet",
            "group": 2
        },
        {
            "id": "Chenildieu",
            "group": 2
        },
        {
            "id": "Cochepaille",
            "group": 2
        },
        {
            "id": "Pontmercy",
            "group": 4
        },
        {
            "id": "Boulatruelle",
            "group": 6
        },
        {
            "id": "Eponine",
            "group": 4
        },
        {
            "id": "Anzelma",
            "group": 4
        },
        {
            "id": "Woman2",
            "group": 5
        },
        {
            "id": "MotherInnocent",
            "group": 0
        },
        {
            "id": "Gribier",
            "group": 0
        },
        {
            "id": "Jondrette",
            "group": 7
        },
        {
            "id": "Mme.Burgon",
            "group": 7
        },
        {
            "id": "Gavroche",
            "group": 8
        },
        {
            "id": "Gillenormand",
            "group": 5
        },
        {
            "id": "Magnon",
            "group": 5
        },
        {
            "id": "Mlle.Gillenormand",
            "group": 5
        },
        {
            "id": "Mme.Pontmercy",
            "group": 5
        },
        {
            "id": "Mlle.Vaubois",
            "group": 5
        },
        {
            "id": "Lt.Gillenormand",
            "group": 5
        },
        {
            "id": "Marius",
            "group": 8
        },
        {
            "id": "BaronessT",
            "group": 5
        },
        {
            "id": "Mabeuf",
            "group": 8
        },
        {
            "id": "Enjolras",
            "group": 8
        },
        {
            "id": "Combeferre",
            "group": 8
        },
        {
            "id": "Prouvaire",
            "group": 8
        },
        {
            "id": "Feuilly",
            "group": 8
        },
        {
            "id": "Courfeyrac",
            "group": 8
        },
        {
            "id": "Bahorel",
            "group": 8
        },
        {
            "id": "Bossuet",
            "group": 8
        },
        {
            "id": "Joly",
            "group": 8
        },
        {
            "id": "Grantaire",
            "group": 8
        },
        {
            "id": "MotherPlutarch",
            "group": 9
        },
        {
            "id": "Gueulemer",
            "group": 4
        },
        {
            "id": "Babet",
            "group": 4
        },
        {
            "id": "Claquesous",
            "group": 4
        },
        {
            "id": "Montparnasse",
            "group": 4
        },
        {
            "id": "Toussaint",
            "group": 5
        },
        {
            "id": "Child1",
            "group": 10
        },
        {
            "id": "Child2",
            "group": 10
        },
        {
            "id": "Brujon",
            "group": 4
        },
        {
            "id": "Mme.Hucheloup",
            "group": 8
        }
    ],
    "links": [
        {
            "source": "Napoleon",
            "target": "Myriel",
            "value": 1
        },
        {
            "source": "Mlle.Baptistine",
            "target": "Myriel",
            "value": 8
        },
        {
            "source": "Mme.Magloire",
            "target": "Myriel",
            "value": 10
        },
        {
            "source": "Mme.Magloire",
            "target": "Mlle.Baptistine",
            "value": 6
        },
        {
            "source": "CountessdeLo",
            "target": "Myriel",
            "value": 1
        },
        {
            "source": "Geborand",
            "target": "Myriel",
            "value": 1
        },
        {
            "source": "Champtercier",
            "target": "Myriel",
            "value": 1
        },
        {
            "source": "Cravatte",
            "target": "Myriel",
            "value": 1
        },
        {
            "source": "Count",
            "target": "Myriel",
            "value": 2
        },
        {
            "source": "OldMan",
            "target": "Myriel",
            "value": 1
        },
        {
            "source": "Valjean",
            "target": "Labarre",
            "value": 1
        },
        {
            "source": "Valjean",
            "target": "Mme.Magloire",
            "value": 3
        },
        {
            "source": "Valjean",
            "target": "Mlle.Baptistine",
            "value": 3
        },
        {
            "source": "Valjean",
            "target": "Myriel",
            "value": 5
        },
        {
            "source": "Marguerite",
            "target": "Valjean",
            "value": 1
        },
        {
            "source": "Mme.deR",
            "target": "Valjean",
            "value": 1
        },
        {
            "source": "Isabeau",
            "target": "Valjean",
            "value": 1
        },
        {
            "source": "Gervais",
            "target": "Valjean",
            "value": 1
        },
        {
            "source": "Listolier",
            "target": "Tholomyes",
            "value": 4
        },
        {
            "source": "Fameuil",
            "target": "Tholomyes",
            "value": 4
        },
        {
            "source": "Fameuil",
            "target": "Listolier",
            "value": 4
        },
        {
            "source": "Blacheville",
            "target": "Tholomyes",
            "value": 4
        },
        {
            "source": "Blacheville",
            "target": "Listolier",
            "value": 4
        },
        {
            "source": "Blacheville",
            "target": "Fameuil",
            "value": 4
        },
        {
            "source": "Favourite",
            "target": "Tholomyes",
            "value": 3
        },
        {
            "source": "Favourite",
            "target": "Listolier",
            "value": 3
        },
        {
            "source": "Favourite",
            "target": "Fameuil",
            "value": 3
        },
        {
            "source": "Favourite",
            "target": "Blacheville",
            "value": 4
        },
        {
            "source": "Dahlia",
            "target": "Tholomyes",
            "value": 3
        },
        {
            "source": "Dahlia",
            "target": "Listolier",
            "value": 3
        },
        {
            "source": "Dahlia",
            "target": "Fameuil",
            "value": 3
        },
        {
            "source": "Dahlia",
            "target": "Blacheville",
            "value": 3
        },
        {
            "source": "Dahlia",
            "target": "Favourite",
            "value": 5
        },
        {
            "source": "Zephine",
            "target": "Tholomyes",
            "value": 3
        },
        {
            "source": "Zephine",
            "target": "Listolier",
            "value": 3
        },
        {
            "source": "Zephine",
            "target": "Fameuil",
            "value": 3
        },
        {
            "source": "Zephine",
            "target": "Blacheville",
            "value": 3
        },
        {
            "source": "Zephine",
            "target": "Favourite",
            "value": 4
        },
        {
            "source": "Zephine",
            "target": "Dahlia",
            "value": 4
        },
        {
            "source": "Fantine",
            "target": "Tholomyes",
            "value": 3
        },
        {
            "source": "Fantine",
            "target": "Listolier",
            "value": 3
        },
        {
            "source": "Fantine",
            "target": "Fameuil",
            "value": 3
        },
        {
            "source": "Fantine",
            "target": "Blacheville",
            "value": 3
        },
        {
            "source": "Fantine",
            "target": "Favourite",
            "value": 4
        },
        {
            "source": "Fantine",
            "target": "Dahlia",
            "value": 4
        },
        {
            "source": "Fantine",
            "target": "Zephine",
            "value": 4
        },
        {
            "source": "Fantine",
            "target": "Marguerite",
            "value": 2
        },
        {
            "source": "Fantine",
            "target": "Valjean",
            "value": 9
        },
        {
            "source": "Mme.Thenardier",
            "target": "Fantine",
            "value": 2
        },
        {
            "source": "Mme.Thenardier",
            "target": "Valjean",
            "value": 7
        },
        {
            "source": "Thenardier",
            "target": "Mme.Thenardier",
            "value": 13
        },
        {
            "source": "Thenardier",
            "target": "Fantine",
            "value": 1
        },
        {
            "source": "Thenardier",
            "target": "Valjean",
            "value": 12
        },
        {
            "source": "Cosette",
            "target": "Mme.Thenardier",
            "value": 4
        },
        {
            "source": "Cosette",
            "target": "Valjean",
            "value": 31
        },
        {
            "source": "Cosette",
            "target": "Tholomyes",
            "value": 1
        },
        {
            "source": "Cosette",
            "target": "Thenardier",
            "value": 1
        },
        {
            "source": "Javert",
            "target": "Valjean",
            "value": 17
        },
        {
            "source": "Javert",
            "target": "Fantine",
            "value": 5
        },
        {
            "source": "Javert",
            "target": "Thenardier",
            "value": 5
        },
        {
            "source": "Javert",
            "target": "Mme.Thenardier",
            "value": 1
        },
        {
            "source": "Javert",
            "target": "Cosette",
            "value": 1
        },
        {
            "source": "Fauchelevent",
            "target": "Valjean",
            "value": 8
        },
        {
            "source": "Fauchelevent",
            "target": "Javert",
            "value": 1
        },
        {
            "source": "Bamatabois",
            "target": "Fantine",
            "value": 1
        },
        {
            "source": "Bamatabois",
            "target": "Javert",
            "value": 1
        },
        {
            "source": "Bamatabois",
            "target": "Valjean",
            "value": 2
        },
        {
            "source": "Perpetue",
            "target": "Fantine",
            "value": 1
        },
        {
            "source": "Simplice",
            "target": "Perpetue",
            "value": 2
        },
        {
            "source": "Simplice",
            "target": "Valjean",
            "value": 3
        },
        {
            "source": "Simplice",
            "target": "Fantine",
            "value": 2
        },
        {
            "source": "Simplice",
            "target": "Javert",
            "value": 1
        },
        {
            "source": "Scaufflaire",
            "target": "Valjean",
            "value": 1
        },
        {
            "source": "Woman1",
            "target": "Valjean",
            "value": 2
        },
        {
            "source": "Woman1",
            "target": "Javert",
            "value": 1
        },
        {
            "source": "Judge",
            "target": "Valjean",
            "value": 3
        },
        {
            "source": "Judge",
            "target": "Bamatabois",
            "value": 2
        },
        {
            "source": "Champmathieu",
            "target": "Valjean",
            "value": 3
        },
        {
            "source": "Champmathieu",
            "target": "Judge",
            "value": 3
        },
        {
            "source": "Champmathieu",
            "target": "Bamatabois",
            "value": 2
        },
        {
            "source": "Brevet",
            "target": "Judge",
            "value": 2
        },
        {
            "source": "Brevet",
            "target": "Champmathieu",
            "value": 2
        },
        {
            "source": "Brevet",
            "target": "Valjean",
            "value": 2
        },
        {
            "source": "Brevet",
            "target": "Bamatabois",
            "value": 1
        },
        {
            "source": "Chenildieu",
            "target": "Judge",
            "value": 2
        },
        {
            "source": "Chenildieu",
            "target": "Champmathieu",
            "value": 2
        },
        {
            "source": "Chenildieu",
            "target": "Brevet",
            "value": 2
        },
        {
            "source": "Chenildieu",
            "target": "Valjean",
            "value": 2
        },
        {
            "source": "Chenildieu",
            "target": "Bamatabois",
            "value": 1
        },
        {
            "source": "Cochepaille",
            "target": "Judge",
            "value": 2
        },
        {
            "source": "Cochepaille",
            "target": "Champmathieu",
            "value": 2
        },
        {
            "source": "Cochepaille",
            "target": "Brevet",
            "value": 2
        },
        {
            "source": "Cochepaille",
            "target": "Chenildieu",
            "value": 2
        },
        {
            "source": "Cochepaille",
            "target": "Valjean",
            "value": 2
        },
        {
            "source": "Cochepaille",
            "target": "Bamatabois",
            "value": 1
        },
        {
            "source": "Pontmercy",
            "target": "Thenardier",
            "value": 1
        },
        {
            "source": "Boulatruelle",
            "target": "Thenardier",
            "value": 1
        },
        {
            "source": "Eponine",
            "target": "Mme.Thenardier",
            "value": 2
        },
        {
            "source": "Eponine",
            "target": "Thenardier",
            "value": 3
        },
        {
            "source": "Anzelma",
            "target": "Eponine",
            "value": 2
        },
        {
            "source": "Anzelma",
            "target": "Thenardier",
            "value": 2
        },
        {
            "source": "Anzelma",
            "target": "Mme.Thenardier",
            "value": 1
        },
        {
            "source": "Woman2",
            "target": "Valjean",
            "value": 3
        },
        {
            "source": "Woman2",
            "target": "Cosette",
            "value": 1
        },
        {
            "source": "Woman2",
            "target": "Javert",
            "value": 1
        },
        {
            "source": "MotherInnocent",
            "target": "Fauchelevent",
            "value": 3
        },
        {
            "source": "MotherInnocent",
            "target": "Valjean",
            "value": 1
        },
        {
            "source": "Gribier",
            "target": "Fauchelevent",
            "value": 2
        },
        {
            "source": "Mme.Burgon",
            "target": "Jondrette",
            "value": 1
        },
        {
            "source": "Gavroche",
            "target": "Mme.Burgon",
            "value": 2
        },
        {
            "source": "Gavroche",
            "target": "Thenardier",
            "value": 1
        },
        {
            "source": "Gavroche",
            "target": "Javert",
            "value": 1
        },
        {
            "source": "Gavroche",
            "target": "Valjean",
            "value": 1
        },
        {
            "source": "Gillenormand",
            "target": "Cosette",
            "value": 3
        },
        {
            "source": "Gillenormand",
            "target": "Valjean",
            "value": 2
        },
        {
            "source": "Magnon",
            "target": "Gillenormand",
            "value": 1
        },
        {
            "source": "Magnon",
            "target": "Mme.Thenardier",
            "value": 1
        },
        {
            "source": "Mlle.Gillenormand",
            "target": "Gillenormand",
            "value": 9
        },
        {
            "source": "Mlle.Gillenormand",
            "target": "Cosette",
            "value": 2
        },
        {
            "source": "Mlle.Gillenormand",
            "target": "Valjean",
            "value": 2
        },
        {
            "source": "Mme.Pontmercy",
            "target": "Mlle.Gillenormand",
            "value": 1
        },
        {
            "source": "Mme.Pontmercy",
            "target": "Pontmercy",
            "value": 1
        },
        {
            "source": "Mlle.Vaubois",
            "target": "Mlle.Gillenormand",
            "value": 1
        },
        {
            "source": "Lt.Gillenormand",
            "target": "Mlle.Gillenormand",
            "value": 2
        },
        {
            "source": "Lt.Gillenormand",
            "target": "Gillenormand",
            "value": 1
        },
        {
            "source": "Lt.Gillenormand",
            "target": "Cosette",
            "value": 1
        },
        {
            "source": "Marius",
            "target": "Mlle.Gillenormand",
            "value": 6
        },
        {
            "source": "Marius",
            "target": "Gillenormand",
            "value": 12
        },
        {
            "source": "Marius",
            "target": "Pontmercy",
            "value": 1
        },
        {
            "source": "Marius",
            "target": "Lt.Gillenormand",
            "value": 1
        },
        {
            "source": "Marius",
            "target": "Cosette",
            "value": 21
        },
        {
            "source": "Marius",
            "target": "Valjean",
            "value": 19
        },
        {
            "source": "Marius",
            "target": "Tholomyes",
            "value": 1
        },
        {
            "source": "Marius",
            "target": "Thenardier",
            "value": 2
        },
        {
            "source": "Marius",
            "target": "Eponine",
            "value": 5
        },
        {
            "source": "Marius",
            "target": "Gavroche",
            "value": 4
        },
        {
            "source": "BaronessT",
            "target": "Gillenormand",
            "value": 1
        },
        {
            "source": "BaronessT",
            "target": "Marius",
            "value": 1
        },
        {
            "source": "Mabeuf",
            "target": "Marius",
            "value": 1
        },
        {
            "source": "Mabeuf",
            "target": "Eponine",
            "value": 1
        },
        {
            "source": "Mabeuf",
            "target": "Gavroche",
            "value": 1
        },
        {
            "source": "Enjolras",
            "target": "Marius",
            "value": 7
        },
        {
            "source": "Enjolras",
            "target": "Gavroche",
            "value": 7
        },
        {
            "source": "Enjolras",
            "target": "Javert",
            "value": 6
        },
        {
            "source": "Enjolras",
            "target": "Mabeuf",
            "value": 1
        },
        {
            "source": "Enjolras",
            "target": "Valjean",
            "value": 4
        },
        {
            "source": "Combeferre",
            "target": "Enjolras",
            "value": 15
        },
        {
            "source": "Combeferre",
            "target": "Marius",
            "value": 5
        },
        {
            "source": "Combeferre",
            "target": "Gavroche",
            "value": 6
        },
        {
            "source": "Combeferre",
            "target": "Mabeuf",
            "value": 2
        },
        {
            "source": "Prouvaire",
            "target": "Gavroche",
            "value": 1
        },
        {
            "source": "Prouvaire",
            "target": "Enjolras",
            "value": 4
        },
        {
            "source": "Prouvaire",
            "target": "Combeferre",
            "value": 2
        },
        {
            "source": "Feuilly",
            "target": "Gavroche",
            "value": 2
        },
        {
            "source": "Feuilly",
            "target": "Enjolras",
            "value": 6
        },
        {
            "source": "Feuilly",
            "target": "Prouvaire",
            "value": 2
        },
        {
            "source": "Feuilly",
            "target": "Combeferre",
            "value": 5
        },
        {
            "source": "Feuilly",
            "target": "Mabeuf",
            "value": 1
        },
        {
            "source": "Feuilly",
            "target": "Marius",
            "value": 1
        },
        {
            "source": "Courfeyrac",
            "target": "Marius",
            "value": 9
        },
        {
            "source": "Courfeyrac",
            "target": "Enjolras",
            "value": 17
        },
        {
            "source": "Courfeyrac",
            "target": "Combeferre",
            "value": 13
        },
        {
            "source": "Courfeyrac",
            "target": "Gavroche",
            "value": 7
        },
        {
            "source": "Courfeyrac",
            "target": "Mabeuf",
            "value": 2
        },
        {
            "source": "Courfeyrac",
            "target": "Eponine",
            "value": 1
        },
        {
            "source": "Courfeyrac",
            "target": "Feuilly",
            "value": 6
        },
        {
            "source": "Courfeyrac",
            "target": "Prouvaire",
            "value": 3
        },
        {
            "source": "Bahorel",
            "target": "Combeferre",
            "value": 5
        },
        {
            "source": "Bahorel",
            "target": "Gavroche",
            "value": 5
        },
        {
            "source": "Bahorel",
            "target": "Courfeyrac",
            "value": 6
        },
        {
            "source": "Bahorel",
            "target": "Mabeuf",
            "value": 2
        },
        {
            "source": "Bahorel",
            "target": "Enjolras",
            "value": 4
        },
        {
            "source": "Bahorel",
            "target": "Feuilly",
            "value": 3
        },
        {
            "source": "Bahorel",
            "target": "Prouvaire",
            "value": 2
        },
        {
            "source": "Bahorel",
            "target": "Marius",
            "value": 1
        },
        {
            "source": "Bossuet",
            "target": "Marius",
            "value": 5
        },
        {
            "source": "Bossuet",
            "target": "Courfeyrac",
            "value": 12
        },
        {
            "source": "Bossuet",
            "target": "Gavroche",
            "value": 5
        },
        {
            "source": "Bossuet",
            "target": "Bahorel",
            "value": 4
        },
        {
            "source": "Bossuet",
            "target": "Enjolras",
            "value": 10
        },
        {
            "source": "Bossuet",
            "target": "Feuilly",
            "value": 6
        },
        {
            "source": "Bossuet",
            "target": "Prouvaire",
            "value": 2
        },
        {
            "source": "Bossuet",
            "target": "Combeferre",
            "value": 9
        },
        {
            "source": "Bossuet",
            "target": "Mabeuf",
            "value": 1
        },
        {
            "source": "Bossuet",
            "target": "Valjean",
            "value": 1
        },
        {
            "source": "Joly",
            "target": "Bahorel",
            "value": 5
        },
        {
            "source": "Joly",
            "target": "Bossuet",
            "value": 7
        },
        {
            "source": "Joly",
            "target": "Gavroche",
            "value": 3
        },
        {
            "source": "Joly",
            "target": "Courfeyrac",
            "value": 5
        },
        {
            "source": "Joly",
            "target": "Enjolras",
            "value": 5
        },
        {
            "source": "Joly",
            "target": "Feuilly",
            "value": 5
        },
        {
            "source": "Joly",
            "target": "Prouvaire",
            "value": 2
        },
        {
            "source": "Joly",
            "target": "Combeferre",
            "value": 5
        },
        {
            "source": "Joly",
            "target": "Mabeuf",
            "value": 1
        },
        {
            "source": "Joly",
            "target": "Marius",
            "value": 2
        },
        {
            "source": "Grantaire",
            "target": "Bossuet",
            "value": 3
        },
        {
            "source": "Grantaire",
            "target": "Enjolras",
            "value": 3
        },
        {
            "source": "Grantaire",
            "target": "Combeferre",
            "value": 1
        },
        {
            "source": "Grantaire",
            "target": "Courfeyrac",
            "value": 2
        },
        {
            "source": "Grantaire",
            "target": "Joly",
            "value": 2
        },
        {
            "source": "Grantaire",
            "target": "Gavroche",
            "value": 1
        },
        {
            "source": "Grantaire",
            "target": "Bahorel",
            "value": 1
        },
        {
            "source": "Grantaire",
            "target": "Feuilly",
            "value": 1
        },
        {
            "source": "Grantaire",
            "target": "Prouvaire",
            "value": 1
        },
        {
            "source": "MotherPlutarch",
            "target": "Mabeuf",
            "value": 3
        },
        {
            "source": "Gueulemer",
            "target": "Thenardier",
            "value": 5
        },
        {
            "source": "Gueulemer",
            "target": "Valjean",
            "value": 1
        },
        {
            "source": "Gueulemer",
            "target": "Mme.Thenardier",
            "value": 1
        },
        {
            "source": "Gueulemer",
            "target": "Javert",
            "value": 1
        },
        {
            "source": "Gueulemer",
            "target": "Gavroche",
            "value": 1
        },
        {
            "source": "Gueulemer",
            "target": "Eponine",
            "value": 1
        },
        {
            "source": "Babet",
            "target": "Thenardier",
            "value": 6
        },
        {
            "source": "Babet",
            "target": "Gueulemer",
            "value": 6
        },
        {
            "source": "Babet",
            "target": "Valjean",
            "value": 1
        },
        {
            "source": "Babet",
            "target": "Mme.Thenardier",
            "value": 1
        },
        {
            "source": "Babet",
            "target": "Javert",
            "value": 2
        },
        {
            "source": "Babet",
            "target": "Gavroche",
            "value": 1
        },
        {
            "source": "Babet",
            "target": "Eponine",
            "value": 1
        },
        {
            "source": "Claquesous",
            "target": "Thenardier",
            "value": 4
        },
        {
            "source": "Claquesous",
            "target": "Babet",
            "value": 4
        },
        {
            "source": "Claquesous",
            "target": "Gueulemer",
            "value": 4
        },
        {
            "source": "Claquesous",
            "target": "Valjean",
            "value": 1
        },
        {
            "source": "Claquesous",
            "target": "Mme.Thenardier",
            "value": 1
        },
        {
            "source": "Claquesous",
            "target": "Javert",
            "value": 1
        },
        {
            "source": "Claquesous",
            "target": "Eponine",
            "value": 1
        },
        {
            "source": "Claquesous",
            "target": "Enjolras",
            "value": 1
        },
        {
            "source": "Montparnasse",
            "target": "Javert",
            "value": 1
        },
        {
            "source": "Montparnasse",
            "target": "Babet",
            "value": 2
        },
        {
            "source": "Montparnasse",
            "target": "Gueulemer",
            "value": 2
        },
        {
            "source": "Montparnasse",
            "target": "Claquesous",
            "value": 2
        },
        {
            "source": "Montparnasse",
            "target": "Valjean",
            "value": 1
        },
        {
            "source": "Montparnasse",
            "target": "Gavroche",
            "value": 1
        },
        {
            "source": "Montparnasse",
            "target": "Eponine",
            "value": 1
        },
        {
            "source": "Montparnasse",
            "target": "Thenardier",
            "value": 1
        },
        {
            "source": "Toussaint",
            "target": "Cosette",
            "value": 2
        },
        {
            "source": "Toussaint",
            "target": "Javert",
            "value": 1
        },
        {
            "source": "Toussaint",
            "target": "Valjean",
            "value": 1
        },
        {
            "source": "Child1",
            "target": "Gavroche",
            "value": 2
        },
        {
            "source": "Child2",
            "target": "Gavroche",
            "value": 2
        },
        {
            "source": "Child2",
            "target": "Child1",
            "value": 3
        },
        {
            "source": "Brujon",
            "target": "Babet",
            "value": 3
        },
        {
            "source": "Brujon",
            "target": "Gueulemer",
            "value": 3
        },
        {
            "source": "Brujon",
            "target": "Thenardier",
            "value": 3
        },
        {
            "source": "Brujon",
            "target": "Gavroche",
            "value": 1
        },
        {
            "source": "Brujon",
            "target": "Eponine",
            "value": 1
        },
        {
            "source": "Brujon",
            "target": "Claquesous",
            "value": 1
        },
        {
            "source": "Brujon",
            "target": "Montparnasse",
            "value": 1
        },
        {
            "source": "Mme.Hucheloup",
            "target": "Bossuet",
            "value": 1
        },
        {
            "source": "Mme.Hucheloup",
            "target": "Joly",
            "value": 1
        },
        {
            "source": "Mme.Hucheloup",
            "target": "Grantaire",
            "value": 1
        },
        {
            "source": "Mme.Hucheloup",
            "target": "Bahorel",
            "value": 1
        },
        {
            "source": "Mme.Hucheloup",
            "target": "Courfeyrac",
            "value": 1
        },
        {
            "source": "Mme.Hucheloup",
            "target": "Gavroche",
            "value": 1
        },
        {
            "source": "Mme.Hucheloup",
            "target": "Enjolras",
            "value": 1
        }
    ]
}

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/lib/image2d.js
/*****************************************************************/
window.__etcpack__bundleSrc__['24']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('25');

__etcpack__scope_bundle__.default= image2D;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/image2d/build/image2D.js
/*****************************************************************/
window.__etcpack__bundleSrc__['25']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /*!
* image2D - 🍇 使用ECMAScript绘制二维图片。Drawing Two-Dimensional Pictures Using ECMAScript.
* git+https://github.com/hai2007/image2D.git
*
* For online documents, please visit
* https://hai2007.gitee.io/image2d/index.html
*
* author 你好2007
*
* version 1.14.3
*
* build Thu Apr 11 2019
*
* Copyright hai2007 < https://hai2007.gitee.io/sweethome/ >
* Released under the MIT license
*
* Date:Mon Aug 16 2021 14:14:18 GMT+0800 (中国标准时间)
*/

"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
    'use strict';

    /**
     * 初始化配置文件
     * @param {Json} init 默认值
     * @param {Json} data
     * @return {Json}
     */

    var initConfig = function initConfig(init, data) {
        for (var key in data) {
            try {
                init[key] = data[key];
            } catch (e) {
                throw new Error("Illegal property value！");
            }
        }return init;
    };

    // 命名空间路径
    var NAMESPACE = {
        "svg": "http://www.w3.org/2000/svg",
        "xhtml": "http://www.w3.org/1999/xhtml",
        "xlink": "http://www.w3.org/1999/xlink",
        "xml": "http://www.w3.org/XML/1998/namespace",
        "xmlns": "http://www.w3.org/2000/xmlns/"
    };

    // 正则表达式
    var REGEXP = {

        // 空白字符:http://www.w3.org/TR/css3-selectors/#whitespace
        "whitespace": "[\\x20\\t\\r\\n\\f]",

        // 空格外的空白字符
        "blank": "[\\n\\f\\r]",

        // 标志符:http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
        "identifier": "(?:\\\\.|[\\w-]|[^\0-\\xa0])+"
    };

    // 记录需要使用xlink命名空间常见的xml属性
    var XLINK_ATTRIBUTE = ["href", "title", "show", "type", "role", "actuate"];

    /**
     * 判断一个值是不是Object。
     *
     * @param {*} value 需要判断类型的值
     * @returns {boolean} 如果是Object返回true，否则返回false
     */
    function _isObject(value) {
        var type = typeof value === "undefined" ? "undefined" : _typeof(value);
        return value != null && (type === 'object' || type === 'function');
    }

    var toString = Object.prototype.toString;

    /**
     * 获取一个值的类型字符串[object type]
     *
     * @param {*} value 需要返回类型的值
     * @returns {string} 返回类型字符串
     */
    function getType(value) {
        if (value == null) {
            return value === undefined ? '[object Undefined]' : '[object Null]';
        }
        return toString.call(value);
    }

    /**
     * 判断一个值是不是number。
     *
     * @param {*} value 需要判断类型的值
     * @returns {boolean} 如果是number返回true，否则返回false
     */
    function _isNumber(value) {
        return typeof value === 'number' || value !== null && (typeof value === "undefined" ? "undefined" : _typeof(value)) === 'object' && getType(value) === '[object Number]';
    }

    /**
     * 判断一个值是不是String。
     *
     * @param {*} value 需要判断类型的值
     * @returns {boolean} 如果是String返回true，否则返回false
     */
    function _isString(value) {
        var type = typeof value === "undefined" ? "undefined" : _typeof(value);
        return type === 'string' || type === 'object' && value != null && !Array.isArray(value) && getType(value) === '[object String]';
    }

    /**
     * 判断一个值是不是Function。
     *
     * @param {*} value 需要判断类型的值
     * @returns {boolean} 如果是Function返回true，否则返回false
     */
    function _isFunction(value) {
        if (!_isObject(value)) {
            return false;
        }

        var type = getType(value);
        return type === '[object Function]' || type === '[object AsyncFunction]' || type === '[object GeneratorFunction]' || type === '[object Proxy]';
    }

    /**
     * 判断一个值是不是一个朴素的'对象'
     * 所谓"纯粹的对象"，就是该对象是通过"{}"或"new Object"创建的
     *
     * @param {*} value 需要判断类型的值
     * @returns {boolean} 如果是朴素的'对象'返回true，否则返回false
     */

    function _isPlainObject(value) {
        if (value === null || (typeof value === "undefined" ? "undefined" : _typeof(value)) !== 'object' || getType(value) != '[object Object]') {
            return false;
        }

        // 如果原型为null
        if (Object.getPrototypeOf(value) === null) {
            return true;
        }

        var proto = value;
        while (Object.getPrototypeOf(proto) !== null) {
            proto = Object.getPrototypeOf(proto);
        }
        return Object.getPrototypeOf(value) === proto;
    }

    var domTypeHelp = function domTypeHelp(types, value) {
        return value !== null && (typeof value === "undefined" ? "undefined" : _typeof(value)) === 'object' && types.indexOf(value.nodeType) > -1 && !_isPlainObject(value);
    };

    /*!
     * 💡 - 值类型判断方法
     * https://github.com/hai2007/tool.js/blob/master/type.js
     *
     * author hai2007 < https://hai2007.gitee.io/sweethome >
     *
     * Copyright (c) 2020-present hai2007 走一步，再走一步。
     * Released under the MIT license
     */

    var isObject = _isObject;
    var isNumber = _isNumber;
    var isString = _isString;

    // 引用类型
    var isFunction = _isFunction;
    var isArray = function isArray(input) {
        return Array.isArray(input);
    };

    // 结点类型
    var isElement = function isElement(input) {
        return domTypeHelp([1, 9, 11], input);
    };
    var isText = function isText(input) {
        return domTypeHelp([3], input);
    };

    /**
     * 设置svg字符串
     * @param {dom} target
     * @param {string} svgstring
     */
    var setSVG = function setSVG(target, svgstring) {
        if ('innerHTML' in SVGElement.prototype === false || 'innerHTML' in SVGSVGElement.prototype === false) {

            // 创建一个非svg结点，用例帮助解析
            // 这样比直接解析字符串简单
            var frame = document.createElement("div");
            frame.innerHTML = svgstring;

            var toSvgNode = function toSvgNode(htmlNode) {

                // 创建svg结点，并挂载属性
                var svgNode = document.createElementNS(NAMESPACE.svg, htmlNode.tagName.toLowerCase());
                var attrs = htmlNode.attributes;

                for (var i = 0; attrs && i < attrs.length; i++) {

                    // 是否是特殊属性目前靠手工登记
                    if (XLINK_ATTRIBUTE.indexOf(attrs[i].nodeName) >= 0) {

                        // 针对特殊的svg属性，追加命名空间
                        svgNode.setAttributeNS(NAMESPACE.xlink, 'xlink:' + attrs[i].nodeName, htmlNode.getAttribute(attrs[i].nodeName));
                    } else {
                        svgNode.setAttribute(attrs[i].nodeName, htmlNode.getAttribute(attrs[i].nodeName));
                    }
                }
                return svgNode;
            };

            var rslNode = toSvgNode(frame.firstChild);

            (function toSVG(pnode, svgPnode) {
                var node = pnode.firstChild;

                // 如果是文本结点
                if (isText(node)) {
                    svgPnode.textContent = pnode.innerText;
                    return;
                }

                // 不是文本结点，就拼接
                while (node) {
                    var svgNode = toSvgNode(node);
                    svgPnode.appendChild(svgNode);
                    if (node.firstChild) toSVG(node, svgNode);
                    node = node.nextSibling;
                }
            })(frame.firstChild, rslNode);

            // 拼接
            target.appendChild(rslNode);
        } else {

            // 如果当前浏览器提供了svg类型结点的innerHTML,我们还是使用浏览器提供的
            target.innerHTML = svgstring;
        }
    };

    // 变成指定类型的结点
    // type可以取：
    // 1.'HTML'，html结点
    // 2.'SVG'，svg结点(默认值)
    var toNode = function toNode(template, type) {
        var frame = void 0,
            childNodes = void 0,
            frameTagName = 'div';
        if (type === 'html' || type === 'HTML') {

            // 大部分的标签可以直接使用div作为容器
            // 部分特殊的需要特殊的容器标签

            if (/^<tr[> ]/.test(template)) {

                frameTagName = "tbody";
            } else if (/^<th[> ]/.test(template) || /^<td[> ]/.test(template)) {

                frameTagName = "tr";
            } else if (/^<thead[> ]/.test(template) || /^<tbody[> ]/.test(template)) {

                frameTagName = "table";
            }

            frame = document.createElement(frameTagName);
            frame.innerHTML = template;

            // 比如tr标签，它应该被tbody或thead包含
            // 如果采用别的标签，比如div,这类标签无法生成
            // 为了方便校对，这里给出提示
            if (!/</.test(frame.innerHTML)) {
                throw new Error('This template cannot be generated using div as a container:' + template + "\nPlease contact us: https://github.com/hai2007/image2D/issues");
            }
        } else {
            frame = document.createElementNS(NAMESPACE.svg, 'svg');
            // 部分浏览器svg元素没有innerHTML
            setSVG(frame, template);
        }
        childNodes = frame.childNodes;
        for (var i = 0; i < childNodes.length; i++) {
            if (isElement(childNodes[i])) return childNodes[i];
        }
    };

    /**
     * 变成结点
     * @param {string} template
     * @param {string} type
     * @return {dom} 返回结点
     */
    function toNode$1(template, type) {

        // 把传递元素类型和标记进行统一处理
        if (new RegExp("^" + REGEXP.identifier + "$").test(template)) template = "<" + template + "></" + template + ">";

        var mark = /^<([^(>| )]+)/.exec(template)[1];

        // 画布canvas特殊知道，一定是html
        if ("canvas" === mark.toLowerCase()) type = 'HTML';

        // 此外，如果没有特殊设定，规定一些标签是html标签
        if (!isString(type) && [

        // 三大display元素
        "div", "span", "p",

        // 小元素
        "em", "i",

        // 关系元素
        "table", "ul", "ol", "dl", "dt", "li", "dd",

        // 表单相关
        "form", "input", "button", "textarea",

        // H5结构元素
        "header", "footer", "article", "section",

        // 标题元素
        "h1", "h2", "h3", "h4", "h5", "h6",

        // 替换元素
        "image", "video", "iframe", "object",

        // 资源元素
        "style", "script", "link",

        // table系列
        "tr", "td", "th", "tbody", "thead"].indexOf(mark.toLowerCase()) >= 0) type = 'HTML';

        return toNode(template, type);
    }

    /**
     * 在指定上下文查找结点
     * @param {string|dom|array|function|image2D} selector 选择器，必输
     * @param {dom|'html'|'svg'} context 查找上下文，或标签类型，必输
     * @return {array|image2D} 结点数组
     *
     * 特别注意：
     *  1.id选择器或者传入的是维护的结点，查找上下文会被忽略
     *  2.如果selector传入的是一个字符串模板，context可选，其表示模板类型
     */
    function sizzle(selector, context) {

        // 如果是字符串
        // context如果是字符串（应该是'html'或'svg'）表示这是生成结点，也走这条路线
        if (isString(context) || isString(selector)) {
            selector = selector.trim().replace(new RegExp(REGEXP.blank, 'g'), '');

            // 如果以'<'开头表示是字符串模板
            if (typeof context == 'string' || /^</.test(selector)) {
                var node = toNode$1(selector, context);
                if (isElement(node)) return [node];else return [];
            }

            // *表示查找全部
            else if (selector === '*') {
                    return context.getElementsByTagName('*');
                }

            var id = selector.match(new RegExp('#' + REGEXP.identifier, 'g'));
            // ID选择器
            // 此选择器会忽略上下文
            if (id) {
                var _node = document.getElementById(id[0].replace('#', ''));
                if (isElement(_node)) return [_node];else return [];
            }

            var cls = selector.match(new RegExp('\\.' + REGEXP.identifier, 'g')),
                tag = selector.match(new RegExp('^' + REGEXP.identifier));

            // 结点和class混合选择器
            if (tag || cls) {
                var allNodes = context.getElementsByTagName(tag ? tag[0] : "*"),
                    temp = [];
                for (var i = 0; i < allNodes.length; i++) {
                    var clazz = " " + allNodes[i].getAttribute('class') + " ",
                        flag = true;
                    for (var j = 0; cls && j < cls.length; j++) {
                        if (!clazz.match(" " + cls[j].replace('.', '') + " ")) {
                            flag = false;
                            break;
                        }
                    }
                    if (flag) temp.push(allNodes[i]);
                }
                return temp;
            }

            // 未知情况，报错
            else {
                    throw new Error('Unsupported selector:' + selector);
                }
        }

        // 如果是结点
        else if (isElement(selector)) {
                return [selector];
            }

            // 如果是数组
            // 数组中的内容如果不是结点会直接被忽略
            else if (selector && (selector.constructor === Array || selector.constructor === HTMLCollection || selector.constructor === NodeList)) {
                    var _temp = [];
                    for (var _i = 0; _i < selector.length; _i++) {

                        // 如果是结点
                        if (isElement(selector[_i])) _temp.push(selector[_i]);

                        // 如果是image2D对象
                        else if (selector[_i] && selector[_i].constructor === image2D) {
                                for (var _j = 0; _j < selector[_i].length; _j++) {
                                    _temp.push(selector[_i][_j]);
                                }
                            }
                    }
                    return _temp;
                }

                // 如果是image2D对象
                else if (selector && selector.constructor === image2D) {
                        return selector;
                    }

                    // 如果是函数
                    else if (isFunction(selector)) {
                            var _allNodes = context.getElementsByTagName('*'),
                                _temp2 = [];
                            for (var _i2 = 0; _i2 < _allNodes.length; _i2++) {
                                // 如果选择器函数返回true，表示当前面对的结点被接受
                                if (selector(_allNodes[_i2])) _temp2.push(_allNodes[_i2]);
                            }
                            return _temp2;
                        }

                        // 未知情况，报错
                        else {
                                throw new Error('Unknown selector:' + selector);
                            }
    }

    /**
     * 设计需求是：
     * image2D和image2D(selector[, context])
     * 分别表示绘图类和绘图对象
     *
     * 题外：为什么不选择image2D和new image2D(selector[, context])?
     * 只是感觉没有前面的写法用起来简洁
     *
     * 为了实现需求，第一反应是：
     * let image2D=function(selector,context){
     *      return new image2D();
     * };
     *
     * 在image2D上挂载静态方法，在image2D.prototype上挂载对象方法，
     * 看起来稳的很，其实这明显是一个死循环。
     *
     * 为了解决这个问题，我们在image2D的原型上定义了一个方法：
     * image2D.prototype.init=function(selector,context){
     *      return this;
     * };
     *
     *  执行下面的方法：
     *  let temp=image2D.prototype.init(selector, context);
     *  上面返回的temp很明显就是image2D.prototype，其实就是image2D对象
     * （例如：new A()，其实就是取A.prototype，这样对比就很好理解了）
     *
     * 因此可以改造代码如下：
     *
     * 这样image2D和new image2D(selector[, context])就分别表示类和对象。
     *
     * 问：看起来是不是实现了？
     * 答：是的，实现了。
     * 问：可是总感觉有点不好，说不出为什么。
     * 答：是不是感觉image2D()打印出来的东西有点多？
     * 问：是的。
     *
     * 事实上，因为直接取image2D.prototype作为new image2D(),
     * 理论上说，使用上区别不大，唯一不足的是，
     * 挂载在image2D.prototype上的方法会在打印image2D对象的时候看见，不舒服。
     *
     * 为了看起来好看些，代码再次改造：
     * let image2D = function (selector, context) {
     *      return new image2D.prototype.init(selector, context);
     * };
     *
     * 为了让image2D(selector, context)返回的是image2D对象，需要修改image2D.prototype.init的原型：
     * image2D.prototype.init.prototype = image2D.prototype;
     *
     * 这样：
     *      image2D(selector, context) ==
     *      return new image2D.prototype.init(selector, context) ==
     *      image2D.prototype.init.prototype ==
     *      image2D.prototype ==
     *      new image2D(selector, context)
     *
     * 此时需求就实现了，
     * 而且打印image2D(selector, context)的时候，
     * 对象上的方法都在原型上，看起来就比较舒服了。
     */

    var image2D = function image2D(selector, context) {
        return new image2D.prototype.init(selector, context);
    };

    image2D.prototype.init = function (selector, context) {

        // 如果没有传递，默认使用document作为上下文
        this.context = context = context || document;

        // 使用sizzle获取需要维护的结点，并把结点维护到image2D对象中
        var nodes = sizzle(selector, context),
            flag = void 0;
        for (flag = 0; flag < nodes.length; flag++) {
            this[flag] = nodes[flag];
        }

        // 设置结点个数
        this.length = nodes.length;
        return this;
    };

    // 扩展方法
    // 在image2D和image2D.prototype上分别调用extend方法就可以在类和对象上扩展方法了
    image2D.prototype.extend = image2D.extend = function () {

        var target = arguments[0] || {};
        var source = arguments[1] || {};
        var length = arguments.length;

        /*
         * 确定复制目标和源
         */
        if (length === 1) {
            //如果只有一个参数，目标对象是自己
            source = target;
            target = this;
        }
        if (!isObject(target)) {
            //如果目标不是对象或函数，则初始化为空对象
            target = {};
        }

        /*
         * 复制属性到对象上面
         */
        for (var key in source) {
            try {
                target[key] = source[key];
            } catch (e) {

                // 为什么需要try{}catch(e){}？
                // 一些对象的特殊属性不允许覆盖，比如name
                // 执行：image2D.extend({'name':'新名称'})
                // 会抛出TypeError
                throw new Error("Illegal property key：" + key + "！");
            }
        }

        return target;
    };

    image2D.prototype.init.prototype = image2D.prototype;

    /*!
     * 🔪 - 基本的树结构位置生成算法
     * https://github.com/hai2007/algorithm.js/blob/master/tree.js
     *
     * author hai2007 < https://hai2007.gitee.io/sweethome >
     *
     * Copyright (c) 2020-present hai2007 走一步，再走一步。
     * Released under the MIT license
     */

    function treeLayout(_config) {

        /**
         * 无论绘制的树结构是什么样子的
         * 计算时都假想目标树的样子如下：
         *  1.根结点在最左边，且上下居中
         *  2.树是从左往右生长的结构
         *  3.每个结点都是一块1*1的正方形，top和left分别表示正方形中心的位置
         */

        var config = _config || {},

        // 维护的树
        alltreedata,

        // 根结点ID
        rootid;

        /**
         * 把内部保存的树结点数据
         * 计算结束后会调用配置的绘图方法
         */
        var update = function update() {

            var beforeDis = [],
                size = 0,
                maxDeep = 0;
            (function positionCalc(pNode, deep) {

                if (deep > maxDeep) maxDeep = deep;
                var flag;
                for (flag = 0; flag < pNode.children.length; flag++) {
                    // 因为全部的子结点的位置确定了，父结点的y位置就是子结点的中间位置
                    // 因此有子结点的，先计算子结点
                    positionCalc(alltreedata[pNode.children[flag]], deep + 1);
                } // left的位置比较简单，deep从0开始编号
                // 比如deep=0，第一层，left=0+0.5=0.5，也就是根结点
                alltreedata[pNode.id].left = deep + 0.5;
                if (flag == 0) {

                    // beforeDis是一个数组，用以记录每一层此刻top下边缘（每一层是从上到下）
                    // 比如一层的第一个，top值最小可以取top=0.5
                    // 为了方便计算，beforeDis[deep] == undefined的时候表示现在准备计算的是这层的第一个结点
                    // 因此设置最低上边缘为-0.5
                    if (beforeDis[deep] == undefined) beforeDis[deep] = -0.5;
                    // 父边缘同意的进行初始化
                    if (beforeDis[deep - 1] == undefined) beforeDis[deep - 1] = -0.5;

                    // 添加的新结点top值第一种求法：本层上边缘+1（比如上边缘是-0.5，那么top最小是top=-0.5+1=0.5）
                    alltreedata[pNode.id].top = beforeDis[deep] + 1;

                    var pTop = beforeDis[deep] + 1 + (alltreedata[pNode.pid].children.length - 1) * 0.5;
                    // 计算的原则是：如果第一种可行，选择第一种，否则必须选择第二种
                    // 判断第一种是否可行的方法就是：如果第一种计算后确定的孩子上边缘不对导致孩子和孩子的前兄弟重合就是可行的
                    if (pTop - 1 < beforeDis[deep - 1])
                        // 必须保证父亲结点和父亲的前一个兄弟保存1的距离，至少
                        // 添加的新结点top值的第二种求法：根据孩子取孩子结点的中心top
                        alltreedata[pNode.id].top = beforeDis[deep - 1] + 1 - (alltreedata[pNode.pid].children.length - 1) * 0.5;
                } else {

                    // 此刻flag!=0
                    // 意味着结点有孩子，那么问题就解决了，直接取孩子的中间即可
                    // 其实，flag==0的分支计算的就是孩子，是没有孩子的叶结点，那是关键
                    alltreedata[pNode.id].top = (alltreedata[pNode.children[0]].top + alltreedata[pNode.children[flag - 1]].top) * 0.5;
                }

                // 因为计算孩子的时候
                // 无法掌握父辈兄弟的情况
                // 可能会出现父亲和兄弟重叠问题
                if (alltreedata[pNode.id].top <= beforeDis[deep]) {
                    var needUp = beforeDis[deep] + 1 - alltreedata[pNode.id].top;
                    (function doUp(_pid, _deep) {
                        alltreedata[_pid].top += needUp;
                        if (beforeDis[_deep] < alltreedata[_pid].top) beforeDis[_deep] = alltreedata[_pid].top;
                        var _flag;
                        for (_flag = 0; _flag < alltreedata[_pid].children.length; _flag++) {
                            doUp(alltreedata[_pid].children[_flag], _deep + 1);
                        }
                    })(pNode.id, deep);
                }

                // 计算好一个结点后，需要更新此刻该层的上边缘
                beforeDis[deep] = alltreedata[pNode.id].top;

                // size在每次计算一个结点后更新，是为了最终绘图的时候知道树有多宽（此处应该叫高）
                if (alltreedata[pNode.id].top + 0.5 > size) size = alltreedata[pNode.id].top + 0.5;
            })(alltreedata[rootid], 0);

            // 传递的参数分别表示：记录了位置信息的树结点集合、根结点ID和树的宽
            return {
                "node": alltreedata,
                "root": rootid,
                "size": size,
                "deep": maxDeep + 1
            };
        };

        /**
         * 根据配置的层次关系（配置的id,child,root）把原始数据变成内部结构，方便后期位置计算
         * @param {any} initTree
         *
         * tempTree[id]={
         *  "data":原始数据,
         *  "pid":父亲ID,
         *  "id":唯一标识ID,
         *  "children":[cid1、cid2、...]
         * }
         */
        var toInnerTree = function toInnerTree(initTree) {

            var tempTree = {};
            // 根结点
            var temp = config.root(initTree),
                id,
                rid;
            id = rid = config.id(temp);
            tempTree[id] = {
                "data": temp,
                "pid": null,
                "id": id,
                "children": []
            };

            var num = 1;
            // 根据传递的原始数据，生成内部统一结构
            (function createTree(pdata, pid) {
                var children = config.child(pdata, initTree),
                    flag;
                num += children ? children.length : 0;
                for (flag = 0; children && flag < children.length; flag++) {
                    id = config.id(children[flag]);
                    tempTree[pid].children.push(id);
                    tempTree[id] = {
                        "data": children[flag],
                        "pid": pid,
                        "id": id,
                        "children": []
                    };
                    createTree(children[flag], id);
                }
            })(temp, id);

            return {
                value: [rid, tempTree],
                num: num
            };
        };

        // 可以传递任意格式的树原始数据
        // 只要配置对应的解析方法即可
        var tree = function tree(initTree) {

            var treeData = toInnerTree(initTree);
            alltreedata = treeData.value[1];
            rootid = treeData.value[0];

            if (treeData.num == 1) {
                alltreedata[rootid].left = 0.5;
                alltreedata[rootid].top = 0.5;
                return {
                    deep: 1,
                    node: alltreedata,
                    root: rootid,
                    size: 1
                };
            }

            return update();
        };

        // 获取根结点的方法:root(initTree)
        tree.root = function (rootback) {
            config.root = rootback;
            return tree;
        };

        // 获取子结点的方法:child(parentTree,initTree)
        tree.child = function (childback) {
            config.child = childback;
            return tree;
        };

        // 获取结点ID方法:id(treedata)
        tree.id = function (idback) {
            config.id = idback;
            return tree;
        };

        return tree;
    }

    /**
     * 点（x,y）围绕中心（cx,cy）旋转deg度
     */
    var _rotate2 = function _rotate2(cx, cy, deg, x, y) {
        var cos = Math.cos(deg),
            sin = Math.sin(deg);
        return [+((x - cx) * cos - (y - cy) * sin + cx).toFixed(7), +((x - cx) * sin + (y - cy) * cos + cy).toFixed(7)];
    };

    /**
     * 点（x,y）沿着向量（ax,ay）方向移动距离d
     */
    var _move2 = function _move2(ax, ay, d, x, y) {
        var sqrt = Math.sqrt(ax * ax + ay * ay);
        return [+(ax * d / sqrt + x).toFixed(7), +(ay * d / sqrt + y).toFixed(7)];
    };

    /**
     * 点（x,y）围绕中心（cx,cy）缩放times倍
     */
    var _scale2 = function _scale2(cx, cy, times, x, y) {
        return [+(times * (x - cx) + cx).toFixed(7), +(times * (y - cy) + cy).toFixed(7)];
    };

    var dot = function dot(config) {

        config = initConfig({
            // 前进方向
            d: [1, 1],
            // 中心坐标
            c: [0, 0],
            // 当前位置
            p: [0, 0]
        }, config);

        var dotObj = {

            // 前进方向以当前位置为中心，旋转deg度
            "rotate": function rotate(deg) {
                var dPx = config.d[0] + config.p[0],
                    dPy = config.d[1] + config.p[1];
                var dP = _rotate2(config.p[0], config.p[1], deg, dPx, dPy);
                config.d = [dP[0] - config.p[0], dP[1] - config.p[1]];
                return dotObj;
            },

            // 沿着当前前进方向前进d
            "move": function move(d) {
                config.p = _move2(config.d[0], config.d[1], d, config.p[0], config.p[1]);
                return dotObj;
            },

            // 围绕中心坐标缩放
            "scale": function scale(times) {
                config.p = _scale2(config.c[0], config.c[1], times, config.p[0], config.p[1]);
                return dotObj;
            },

            // 当前位置
            "value": function value() {
                return config.p;
            }

        };

        return dotObj;
    };

    function treeLayout$1(config) {

        config = initConfig({

            // 类型：如果不是下面五种之一，就认为是原始类型
            // type:LR|RL|BT|TB|circle

            // 如果类型是LR|RL|BT|TB需要设置如下参数
            // width,height:宽和高

            // 如果类型是circle需要设置如下参数
            // 1.cx,cy：圆心；2.radius:半径；3.begin-deg,deg：开始和跨越弧度（可选）
            "begin-deg": 0,
            "deg": Math.PI * 2

        }, config);

        var treeCalc = treeLayout()
        // 配置数据格式
        .root(config.root).child(config.child).id(config.id);

        var treeObj = function treeObj(initData) {

            // 计算初始坐标
            var orgData = treeCalc(initData);

            // 计算deep
            for (var key in orgData.node) {
                orgData.node[key].deep = orgData.node[key].left - 0.5;
            }

            if (config.type === 'LR' || config.type === 'RL') {

                // 每层间隔
                var dis1 = config.width / orgData.deep;
                if ("RL" === config.type) dis1 *= -1;
                // 兄弟间隔
                var dis2 = config.height / (orgData.size - -0.5);
                for (var i in orgData.node) {
                    var node = orgData.node[i];
                    orgData.node[i].left = +(("RL" == config.type ? config.width : 0) - -node.left * dis1).toFixed(7);
                    orgData.node[i].top = +(node.top * dis2).toFixed(7);
                }
            } else if (config.type === 'TB' || config.type === 'BT') {

                // 每层间隔
                var _dis = config.height / orgData.deep;
                if ("BT" == config.type) _dis *= -1;
                // 兄弟间隔
                var _dis2 = config.width / (orgData.size - -0.5);
                var _left = void 0,
                    _top = void 0;
                for (var _i3 in orgData.node) {
                    var _node2 = orgData.node[_i3];
                    _left = _node2.left;
                    _top = _node2.top;
                    orgData.node[_i3].top = +(("BT" == config.type ? config.height : 0) - -_left * _dis).toFixed(7);
                    orgData.node[_i3].left = +(_top * _dis2).toFixed(7);
                }
            } else if (config.type === 'circle') {

                // 如果只有一个结点
                if (orgData.deep == 1 && orgData.size == 1) {
                    orgData.node[orgData.root].left = config.cx;
                    orgData.node[orgData.root].top = config.cy;
                }

                // 如果有多个结点
                else {

                        // 每层间距
                        var _dis3 = config.radius / (orgData.deep - 1);
                        // 兄弟间隔弧度
                        var _dis4 = config.deg / (orgData.size - -0.5);
                        for (var _i4 in orgData.node) {
                            var _node3 = orgData.node[_i4];
                            orgData.node[_i4].deg = (config['begin-deg'] - -_dis4 * _node3.top) % (Math.PI * 2);
                            var pos = _rotate2(config.cx, config.cy, orgData.node[_i4].deg, config.cx - -_dis3 * (_node3.left - 0.5), config.cy);
                            orgData.node[_i4].left = +pos[0];
                            orgData.node[_i4].top = +pos[1];
                        }
                    }
            }

            // 启动绘图
            if (isFunction(config.drawer)) {

                // 如果配置了绘图方法，就调用绘图方法
                config.drawer(orgData);
                return treeObj;
            } else {

                // 否则返回数据
                return orgData;
            }
        };

        // 配置
        treeObj.config = function (_config) {
            config = initConfig(config, _config);
            return treeObj;
        };

        // 设置绘图方法
        treeObj.drawer = function (drawerback) {
            config.drawer = drawerback;
            return treeObj;
        };

        return treeObj;
    }

    function pieLayout(config) {

        config = initConfig({

            // 饼图的开始和跨域角度[可选]
            "begin-deg": -Math.PI / 2,
            "deg": Math.PI * 2,

            // 饼图中一个瓣的中心参考半径，可以有多个[可选]
            "radius": []
            // "cx": "",
            // "cy": "",

            // 设置数据结构[必选]
            // "value": function (data, key, index) { }

        }, config);

        if (!isFunction(config.value)) {
            throw new Error('config.value must be a function!');
        }

        var pieObj = function pieObj(initData) {

            var i = 0,
                innerData = [],
                allData = 0;
            for (var key in initData) {
                innerData.push({
                    "value": config.value(initData[key], key, i),
                    "data": initData[key],
                    "key": key,
                    "index": i,
                    "dots": []
                });
                allData += innerData[i].value;
                i += 1;
            }

            for (i = 0; i < innerData.length; i++) {

                // 起始弧度
                innerData[i].beginDeg = i === 0 ? config['begin-deg'] : innerData[i - 1].beginDeg + innerData[i - 1].deg;

                // 百分比
                var percent = innerData[i].value / allData;

                // 跨越弧度
                innerData[i].deg = percent * config.deg;

                innerData[i].percent = new Number(percent * 100).toFixed(2);
            }

            // 中心点（用于辅助绘制折线）
            if (isNumber(config.cx) && isNumber(config.cy)) {
                for (i = 0; i < config.radius.length; i++) {

                    for (var j = 0; j < innerData.length; j++) {
                        innerData[j].dots.push(_rotate2(config.cx, config.cy, innerData[j].beginDeg + innerData[j].deg * 0.5, config.cx + config.radius[i], config.cy));
                    }
                }
            }

            // 启动绘图
            if (isFunction(config.drawer)) {
                config.drawer(innerData);
                return pieObj;
            } else {
                return innerData;
            }
        };

        // 配置
        pieObj.config = function (_config) {
            config = initConfig(config, _config);
            return pieObj;
        };

        // 设置绘图方法
        pieObj.drawer = function (drawerback) {
            config.drawer = drawerback;
            return pieObj;
        };

        return pieObj;
    }

    /**
     * 在(a,b,c)方向位移d
     */
    function _move(d, a, b, c) {
        c = c || 0;
        var sqrt = Math.sqrt(a * a + b * b + c * c);
        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, a * d / sqrt, b * d / sqrt, c * d / sqrt, 1];
    }

    /**
     * 围绕0Z轴旋转
     * 其它的旋转可以借助transform实现
     * 旋转角度单位采用弧度制
     */
    function _rotate(deg) {
        var sin = Math.sin(deg),
            cos = Math.cos(deg);
        return [cos, sin, 0, 0, -sin, cos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    }

    /**
     * 围绕圆心x、y和z分别缩放xTimes, yTimes和zTimes倍
     */
    function _scale(xTimes, yTimes, zTimes, cx, cy, cz) {
        cx = cx || 0;cy = cy || 0;cz = cz || 0;
        return [xTimes, 0, 0, 0, 0, yTimes, 0, 0, 0, 0, zTimes, 0, cx - cx * xTimes, cy - cy * yTimes, cz - cz * zTimes, 1];
    }

    /**
     * 针对任意射线(a1,b1,c1)->(a2,b2,c2)
     * 计算出二个变换矩阵
     * 分别为：任意射线变成OZ轴变换矩阵 + OZ轴变回原来的射线的变换矩阵
     */
    function _transform(a1, b1, c1, a2, b2, c2) {

        if (typeof a1 === 'number' && typeof b1 === 'number') {

            // 如果设置二个点
            // 表示二维上围绕某个点旋转
            if (typeof c1 !== 'number') {
                c1 = 0;a2 = a1;b2 = b1;c2 = 1;
            }
            // 只设置三个点(设置不足六个点都认为只设置了三个点)
            // 表示围绕从原点出发的射线旋转
            else if (typeof a2 !== 'number' || typeof b2 !== 'number' || typeof c2 !== 'number') {
                    a2 = a1;b2 = b1;c2 = c1;a1 = 0;b1 = 0;c1 = 0;
                }

            if (a1 == a2 && b1 == b2 && c1 == c2) throw new Error('It\'s not a legitimate ray!');

            var sqrt1 = Math.sqrt((a2 - a1) * (a2 - a1) + (b2 - b1) * (b2 - b1)),
                cos1 = sqrt1 != 0 ? (b2 - b1) / sqrt1 : 1,
                sin1 = sqrt1 != 0 ? (a2 - a1) / sqrt1 : 0,
                b = (a2 - a1) * sin1 + (b2 - b1) * cos1,
                c = c2 - c1,
                sqrt2 = Math.sqrt(b * b + c * c),
                cos2 = sqrt2 != 0 ? c / sqrt2 : 1,
                sin2 = sqrt2 != 0 ? b / sqrt2 : 0;

            return [

            // 任意射线变成OZ轴变换矩阵
            [cos1, cos2 * sin1, sin1 * sin2, 0, -sin1, cos1 * cos2, cos1 * sin2, 0, 0, -sin2, cos2, 0, b1 * sin1 - a1 * cos1, c1 * sin2 - a1 * sin1 * cos2 - b1 * cos1 * cos2, -a1 * sin1 * sin2 - b1 * cos1 * sin2 - c1 * cos2, 1],

            // OZ轴变回原来的射线的变换矩阵
            [cos1, -sin1, 0, 0, cos2 * sin1, cos2 * cos1, -sin2, 0, sin1 * sin2, cos1 * sin2, cos2, 0, a1, b1, c1, 1]];
        } else {
            throw new Error('a1 and b1 is required!');
        }
    }

    // 二个4x4矩阵相乘
    // 或矩阵和齐次坐标相乘
    var _multiply = function _multiply(matrix4, param) {
        var newParam = [];
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < param.length / 4; j++) {
                newParam[j * 4 + i] = matrix4[i] * param[j * 4] + matrix4[i + 4] * param[j * 4 + 1] + matrix4[i + 8] * param[j * 4 + 2] + matrix4[i + 12] * param[j * 4 + 3];
            }
        }return newParam;
    };

    /*!
     * 💡 - 列主序存储的4x4矩阵
     * https://github.com/hai2007/tool.js/blob/master/Matrix4.js
     *
     * author hai2007 < https://hai2007.gitee.io/sweethome >
     *
     * Copyright (c) 2020-present hai2007 走一步，再走一步。
     * Released under the MIT license
     */

    function Matrix4(initMatrix4) {

        var matrix4 = initMatrix4 || [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

        var matrix4Obj = {

            // 移动
            "move": function move(dis, a, b, c) {
                matrix4 = _multiply(_move(dis, a, b, c), matrix4);
                return matrix4Obj;
            },

            // 旋转
            "rotate": function rotate(deg, a1, b1, c1, a2, b2, c2) {
                var matrix4s = _transform(a1, b1, c1, a2, b2, c2);
                matrix4 = _multiply(_multiply(_multiply(matrix4s[1], _rotate(deg)), matrix4s[0]), matrix4);
                return matrix4Obj;
            },

            // 缩放
            "scale": function scale(xTimes, yTimes, zTimes, cx, cy, cz) {
                matrix4 = _multiply(_scale(xTimes, yTimes, zTimes, cx, cy, cz), matrix4);
                return matrix4Obj;
            },

            // 乘法
            // 可以传入一个矩阵(matrix4,flag)
            "multiply": function multiply(newMatrix4, flag) {
                matrix4 = flag ? _multiply(matrix4, newMatrix4) : _multiply(newMatrix4, matrix4);
                return matrix4Obj;
            },

            // 对一个坐标应用变换
            // 齐次坐标(x,y,z,w)
            "use": function use(x, y, z, w) {
                // w为0表示点位于无穷远处，忽略
                z = z || 0;w = w || 1;
                var temp = _multiply(matrix4, [x, y, z, w]);
                temp[0] = +temp[0].toFixed(7);
                temp[1] = +temp[1].toFixed(7);
                temp[2] = +temp[2].toFixed(7);
                temp[3] = +temp[3].toFixed(7);
                return temp;
            },

            // 矩阵的值
            "value": function value() {
                return matrix4;
            }

        };

        return matrix4Obj;
    }

    //当前正在运动的动画的tick函数堆栈
    var $timers = [];
    //唯一定时器的定时间隔
    var $interval = 13;
    //指定了动画时长duration默认值
    var $speeds = 400;
    //定时器ID
    var $timerId = null;

    /*!
     * 💡 - 动画轮播
     * https://github.com/hai2007/tool.js/blob/master/animation.js
     *
     * author hai2007 < https://hai2007.gitee.io/sweethome >
     *
     * Copyright (c) 2020-present hai2007 走一步，再走一步。
     * Released under the MIT license
     */

    /**
     * @param {function} doback 轮询函数，有一个形参deep，0-1，表示执行进度
     * @param {number} duration 动画时长，可选
     * @param {function} callback 动画结束回调，可选，有一个形参deep，0-1，表示执行进度
     *
     * @returns {function} 返回一个函数，调用该函数，可以提前结束动画
     */
    function animation(doback, duration, callback) {

        // 如果没有传递时间，使用内置默认值
        if (arguments.length < 2) duration = $speeds;

        var clock = {
            //把tick函数推入堆栈
            "timer": function timer(tick, duration, callback) {
                if (!tick) {
                    throw new Error('Tick is required!');
                }
                var id = new Date().valueOf() + "_" + (Math.random() * 1000).toFixed(0);
                $timers.push({
                    "id": id,
                    "createTime": new Date(),
                    "tick": tick,
                    "duration": duration,
                    "callback": callback
                });
                clock.start();
                return id;
            },

            //开启唯一的定时器timerId
            "start": function start() {
                if (!$timerId) {
                    $timerId = setInterval(clock.tick, $interval);
                }
            },

            //被定时器调用，遍历timers堆栈
            "tick": function tick() {
                var createTime,
                    flag,
                    tick,
                    callback,
                    timer,
                    duration,
                    passTime,
                    timers = $timers;
                $timers = [];
                $timers.length = 0;
                for (flag = 0; flag < timers.length; flag++) {
                    //初始化数据
                    timer = timers[flag];
                    createTime = timer.createTime;
                    tick = timer.tick;
                    duration = timer.duration;
                    callback = timer.callback;

                    //执行
                    passTime = (+new Date() - createTime) / duration;
                    passTime = passTime > 1 ? 1 : passTime;
                    tick(passTime);
                    if (passTime < 1 && timer.id) {
                        //动画没有结束再添加
                        $timers.push(timer);
                    } else if (callback) {
                        callback(passTime);
                    }
                }
                if ($timers.length <= 0) {
                    clock.stop();
                }
            },

            //停止定时器，重置timerId=null
            "stop": function stop() {
                if ($timerId) {
                    clearInterval($timerId);
                    $timerId = null;
                }
            }
        };

        var id = clock.timer(function (deep) {
            //其中deep为0-1，表示改变的程度
            doback(deep);
        }, duration, callback);

        // 返回一个函数
        // 用于在动画结束前结束动画
        return function () {
            var i;
            for (i in $timers) {
                if ($timers[i].id == id) {
                    $timers[i].id = undefined;
                    return;
                }
            }
        };
    }

    /**
     * 初始化配置文件
     *
     * @param {Json} init 默认值
     * @param {Json} data
     * @return {Json}
     */
    function initConfig$1(init, data) {
        for (var key in data) {
            try {
                init[key] = data[key];
            } catch (e) {
                throw new Error("Illegal property value！");
            }
        }return init;
    }

    /*!
     * 💡 - Hermite三次插值
     * https://github.com/hai2007/tool.js/blob/master/Hermite.js
     *
     * author hai2007 < https://hai2007.gitee.io/sweethome >
     *
     * Copyright (c) 2020-present hai2007 走一步，再走一步。
     * Released under the MIT license
     */

    function hermite(config) {

        config = initConfig$1({
            // 张弛系数
            "u": 0.5
        }, config);

        var MR, a, b;

        /**
         * 根据x值返回y值
         * @param {Number} x
         */
        var hermite = function hermite(x) {
            if (MR) {
                var sx = (x - a) / (b - a),
                    sx2 = sx * sx,
                    sx3 = sx * sx2;
                var sResult = sx3 * MR[0] + sx2 * MR[1] + sx * MR[2] + MR[3];
                return sResult * (b - a);
            } else throw new Error('You shoud first set the position!');
        };

        /**
         * 设置点的位置
         * @param {Number} x1 左边点的位置
         * @param {Number} y1
         * @param {Number} x2 右边点的位置
         * @param {Number} y2
         * @param {Number} s1 二个点的斜率
         * @param {Number} s2
         */
        hermite.setP = function (x1, y1, x2, y2, s1, s2) {
            if (x1 < x2) {
                // 记录原始尺寸
                a = x1;b = x2;
                var p3 = config.u * s1,
                    p4 = config.u * s2;
                // 缩放到[0,1]定义域
                y1 /= x2 - x1;
                y2 /= x2 - x1;
                // MR是提前计算好的多项式通解矩阵
                // 为了加速计算
                // 如上面说的
                // 统一在[0,1]上计算后再通过缩放和移动恢复
                // 避免了动态求解矩阵的麻烦
                MR = [2 * y1 - 2 * y2 + p3 + p4, 3 * y2 - 3 * y1 - 2 * p3 - p4, p3, y1];
            } else throw new Error('The point x-position should be increamented!');
            return hermite;
        };

        return hermite;
    }

    /**
     * 轮询动画
     * @param {function} doback 轮询触发方法
     * @param {number} time 动画时长，可选
     * @param {function} callback 动画结束回调，可选
     * @param {array|string} timing 动画进度控制参数，可选
     *
     * @return {function} stop函数，可以提前停止动画
     */
    function animation$1(doback, time, callback, timing) {

        if (!isFunction(callback)) {
            timing = callback;
            callback = false;
        }

        // 获取插值计算参数
        var transition_timing = {
            "ease": [0.25, 0.1, 0.5, 1],
            "ease-in": [0.5, 0.0, 0.75, 0.6],
            "ease-in-out": [0.43, 0.01, 0.58, 1],
            "ease-out": [0.25, 0.6, 0.5, 1],
            "linear": "default"
        }[timing] || timing;

        var transition_timing_function = function transition_timing_function(deep) {
            return deep;
        };
        if (transition_timing && isArray(transition_timing) && transition_timing.length == 4) {
            transition_timing_function = hermite({
                "u": 1
            }).setP(0, 0, 1, 1, transition_timing[1] / transition_timing[0], (1 - transition_timing[3]) / (1 - transition_timing[2]));
        }

        return animation(function (deep) {
            doback(transition_timing_function(deep));
        }, time, function (deep) {
            if (isFunction(callback)) {
                if (deep != 1) deep = transition_timing_function(deep);
                callback(deep);
            }
        });
    }

    /**
     * Cardinal三次插值
     * ----------------------------
     * Hermite拟合的计算是，确定二个点和二个点的斜率
     * 用一个y=ax(3)+bx(2)+cx+d的三次多项式来求解
     * 而Cardinal是建立在此基础上
     * 给定需要拟合的二个点和第一个点的前一个点+最后一个点的后一个点
     * 第一个点的斜率由第一个点的前一个点和第二个点的斜率确定
     * 第二个点的斜率由第一个点和第二个点的后一个点的斜率确定
     */

    function cardinal(config) {

        config = initConfig({
            // 该参数用于调整曲线走势，默认数值t=0，分水岭t=-1，|t-(-1)|的值越大，曲线走势调整的越严重
            "t": 0
        }, config);

        var HS = void 0,
            i = void 0;

        // 根据x值返回y值
        var cardinal = function cardinal(x) {

            if (HS) {
                i = -1;
                // 寻找记录x实在位置的区间
                // 这里就是寻找对应的拟合函数
                while (i + 1 < HS.x.length && (x > HS.x[i + 1] || i == -1 && x >= HS.x[i + 1])) {
                    i += 1;
                }
                if (i == -1 || i >= HS.h.length) throw new Error('Coordinate crossing!');
                return HS.h[i](x);
            } else {
                throw new Error('You shoud first set the position!');
            }
        };

        // 设置张弛系数【应该在点的位置设置前设置】
        cardinal.setT = function (t) {

            if (typeof t === 'number') {
                config.t = t;
            } else {
                throw new Error('Expecting a figure!');
            }
            return cardinal;
        };

        // 设置点的位置
        // 参数格式：[[x,y],[x,y],...]
        // 至少二个点
        cardinal.setP = function (points) {

            HS = {
                "x": [],
                "h": []
            };
            var flag = void 0,
                slope = (points[1][1] - points[0][1]) / (points[1][0] - points[0][0]),
                temp = void 0;
            HS.x[0] = points[0][0];
            for (flag = 1; flag < points.length; flag++) {
                if (points[flag][0] <= points[flag - 1][0]) throw new Error('The point position should be increamented!');
                HS.x[flag] = points[flag][0];
                // 求点斜率
                temp = flag < points.length - 1 ? (points[flag + 1][1] - points[flag - 1][1]) / (points[flag + 1][0] - points[flag - 1][0]) : (points[flag][1] - points[flag - 1][1]) / (points[flag][0] - points[flag - 1][0]);
                // 求解二个点直接的拟合方程
                // 第一个点的前一个点直接取第一个点
                // 最后一个点的后一个点直接取最后一个点
                HS.h[flag - 1] = hermite({
                    "u": (1 - config.t) * 0.5
                }).setP(points[flag - 1][0], points[flag - 1][1], points[flag][0], points[flag][1], slope, temp);
                slope = temp;
            }
            return cardinal;
        };

        return cardinal;
    }

    /**
     * 返回渲染后的CSS样式值
     * @param {DOM} dom 目标结点
     * @param {String} name 属性名称（可选）
     * @return {String}
     */
    function getStyle(dom, name) {

        // 获取结点的全部样式
        var allStyle = document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(dom, null) : dom.currentStyle;

        // 如果没有指定属性名称，返回全部样式
        return isString(name) ? allStyle.getPropertyValue(name) : allStyle;
    }

    // 把颜色统一转变成rgba(x,x,x,x)格式
    // 返回数字数组[r,g,b,a]
    var formatColor = function formatColor(color) {
        var colorNode = document.getElementsByTagName('head')[0];
        colorNode.style['color'] = color;
        var rgba = getStyle(colorNode, 'color');
        var rgbaArray = rgba.replace(/^rgba?\(([^)]+)\)$/, '$1').split(new RegExp('\\,' + REGEXP.whitespace));
        return [+rgbaArray[0], +rgbaArray[1], +rgbaArray[2], rgbaArray[3] == undefined ? 1 : +rgbaArray[3]];
    };

    // 获取一组随机色彩
    var getRandomColors = function getRandomColors(num, alpha) {
        if (!(alpha && alpha >= 0 && alpha <= 1)) alpha = 1;
        var temp = [];
        for (var flag = 1; flag <= num; flag++) {
            temp.push('rgba(' + (Math.random(1) * 230 + 20).toFixed(0) + ',' + (Math.random(1) * 230 + 20).toFixed(0) + ',' + (Math.random(1) * 230 + 20).toFixed(0) + ',' + alpha + ')');
        }
        return temp;
    };

    // 获取一组循环色彩
    var getLoopColors = function getLoopColors(num, alpha) {
        if (!(alpha && alpha >= 0 && alpha <= 1)) alpha = 1;
        // 颜色集合
        var colorList = ['rgba(84,112,198,' + alpha + ")", 'rgba(145,204,117,' + alpha + ")", 'rgba(250,200,88,' + alpha + ")", 'rgba(238,102,102,' + alpha + ")", 'rgba(115,192,222,' + alpha + ")", 'rgba(59,162,114,' + alpha + ")", 'rgba(252,132,82,' + alpha + ")", 'rgba(154,96,180,' + alpha + ")", 'rgba(234,124,204,' + alpha + ")"];

        var colors = [];

        // 根据情况返回颜色数组
        if (num <= colorList.length) {
            // 这种情况就不需要任何处理
            return colorList;
        } else {
            // 如果正好是集合长度的倍数
            if (num % colorList.length == 0) {
                // 将颜色数组循环加入后再返回
                for (var i = 0; i < num / colorList.length; i++) {
                    colors = colors.concat(colorList);
                }
            } else {
                for (var j = 1; j < num / colorList.length; j++) {
                    colors = colors.concat(colorList);
                }
                // 防止最后一个颜色和第一个颜色重复
                if (num % colorList.length == 1) {
                    colors = colors.concat(colorList[4]);
                } else {
                    for (var k = 0; k < num % colorList.length; k++) {
                        colors = colors.concat(colorList[k]);
                    }
                }
            }
        }

        // 返回结果
        return colors;
    };

    /**
     * 绑定事件
     * @param {string} eventType
     * @param {function} callback
     */
    var bind = function bind(eventType, callback) {

        if (window.attachEvent) {
            for (var flag = 0; flag < this.length; flag++) {
                this[flag].attachEvent("on" + eventType, callback);
            } // 后绑定的先执行
        } else {
            for (var _flag2 = 0; _flag2 < this.length; _flag2++) {
                this[_flag2].addEventListener(eventType, callback, false);
            } // 捕获
        }

        return this;
    };

    /**
     * 解除绑定事件
     * @param {string} eventType
     * @param {function} handler
     */
    var unbind = function unbind(eventType, handler) {

        if (window.detachEvent) {
            for (var flag = 0; flag < this.length; flag++) {
                this[flag].detachEvent("on" + eventType, handler);
            }
        } else {
            for (var _flag3 = 0; _flag3 < this.length; _flag3++) {
                this[_flag3].removeEventListener(eventType, handler, false);
            }
        }

        return this;
    };

    /**
     * 获取鼠标相对特定元素左上角位置
     * @param {Event} event
     */
    var position = function position(event) {

        // 返回元素的大小及其相对于视口的位置
        var bounding = this[0].getBoundingClientRect();

        if (!event || !event.clientX) throw new Error('Event is necessary!');
        return {

            // 鼠标相对元素位置 = 鼠标相对窗口坐标 - 元素相对窗口坐标
            "x": event.clientX - bounding.left,
            "y": event.clientY - bounding.top
        };
    };

    /**
     * 阻止冒泡
     * @param {Event} event 
     */
    var stopPropagation = function stopPropagation(event) {
        event = event || window.event;
        if (event.stopPropagation) {
            //这是其他非IE浏览器
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
        return this;
    };

    /**
     * 阻止默认事件
     * @param {Event} event 
     */
    var preventDefault = function preventDefault(event) {
        event = event || window.event;
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
        return this;
    };

    /* 等角斜方位投影 */

    var
    // 围绕X轴旋转
    _rotateX = function _rotateX(deg, x, y, z) {
        var cos = Math.cos(deg),
            sin = Math.sin(deg);
        return [x, y * cos - z * sin, y * sin + z * cos];
    },

    // 围绕Y轴旋转
    _rotateY = function _rotateY(deg, x, y, z) {
        var cos = Math.cos(deg),
            sin = Math.sin(deg);
        return [z * sin + x * cos, y, z * cos - x * sin];
    },

    // 围绕Z轴旋转
    _rotateZ = function _rotateZ(deg, x, y, z) {
        var cos = Math.cos(deg),
            sin = Math.sin(deg);
        return [x * cos - y * sin, x * sin + y * cos, z];
    };

    var p = [];

    function eoap(config, longitude, latitude) {
        /**
         * 通过旋转的方法
         * 先旋转出点的位置
         * 然后根据把地心到旋转中心的这条射线变成OZ这条射线的变换应用到初始化点上
         * 这样求的的点的x,y就是最终结果
         *
         *  计算过程：
         *  1.初始化点的位置是p（x,0,0）,其中x的值是地球半径除以缩放倍速
         *  2.根据点的纬度对p进行旋转，旋转后得到的p的坐标纬度就是目标纬度
         *  3.同样的对此刻的p进行经度的旋转，这样就获取了极点作为中心点的坐标
         *  4.接着想象一下为了让旋转中心移动到极点需要进行旋转的经纬度是多少，记为lo和la
         *  5.然后再对p进行经度度旋转lo获得新的p
         *  6.然后再对p进行纬度旋转la获得新的p
         *  7.旋转结束
         *
         * 特别注意：第5和第6步顺序一定不可以调换，原因来自经纬度定义上
         * 【除了经度为0的位置，不然纬度的旋转会改变原来的经度值，反过来不会】
         *
         */
        p = _rotateY((360 - latitude) / 180 * Math.PI, 100 * config.scale, 0, 0);
        p = _rotateZ(longitude / 180 * Math.PI, p[0], p[1], p[2]);
        p = _rotateZ((90 - config.center[0]) / 180 * Math.PI, p[0], p[1], p[2]);
        p = _rotateX((90 - config.center[1]) / 180 * Math.PI, p[0], p[1], p[2]);

        return [-p[0], //加-号是因为浏览器坐标和地图不一样
        p[1], p[2]];
    }

    function map(_config) {

        var config = initConfig({

            // 默认使用「等角斜方位投影」
            type: 'eoap',

            // 缩放比例
            scale: 1,

            // 投影中心经纬度
            center: [107, 36]

        }, _config);

        var map = function map(longitude, latitude) {

            switch (config.type) {
                case 'eoap':
                    {
                        return eoap(config, longitude, latitude);
                    }
                default:
                    {
                        throw new Error('Map type configuration error!');
                    }
            }
        };

        // 修改配置
        map.config = function (_config) {
            config = initConfig(config, _config);
            return map;
        };

        return map;
    }

    /*!
     * 💡 - 刻度尺刻度求解
     * https://github.com/hai2007/tool.js/blob/master/ruler.js
     *
     * author hai2007 < https://hai2007.gitee.io/sweethome >
     *
     * Copyright (c) 2021-present hai2007 走一步，再走一步。
     * Released under the MIT license
     */

    // 需要注意的是，实际的间距个数可能是 num-1 或 num 或 num+1 或 1
    function ruler(maxValue, minValue, num) {

        // 如果最大值最小值反了
        if (maxValue < minValue) {
            var temp = minValue;
            minValue = maxValue;
            maxValue = temp;
        }

        // 如果相等
        else if (maxValue == minValue) {
                return [maxValue];
            }

        // 计算最终小数点应该保留的位数
        var dotMaxNum = (maxValue + ".").split('.')[1].length;
        var dotMinNum = (minValue + ".").split('.')[1].length;
        var dotNum = dotMaxNum > dotMinNum ? dotMaxNum : dotMinNum;

        // 为了变成 -100 ~ 100 需要放大或者缩小的倍数
        var times100 = function (_value) {

            // 先确定基调，是放大还是缩小
            var _times100_base = _value < 100 && _value > -100 ? 10 : 0.1;

            // 记录当前缩放倍数
            var _times100 = 1,
                _tiemsValue = _value;

            while (_times100_base == 10 ?
            // 如果是放大，超过 -100 ~ 100 就应该停止
            _tiemsValue >= -100 && _tiemsValue <= 100 :
            // 如果是缩小，进入 -100 ~ 100 就应该停止
            _tiemsValue <= -100 || _tiemsValue >= 100) {

                _times100 *= _times100_base;
                _tiemsValue *= _times100_base;
            }

            return _times100;
        }(

        // 根据差值来缩放
        maxValue - minValue);

        // 求解出 -100 ~ 100 的最佳间距值 后直接转换原来的倍数
        var distance = Math.ceil((maxValue - minValue) * times100 / num) / times100;

        // 最小值，也就是起点
        var begin = Math.floor(minValue / distance) * distance;

        var rulerArray = [],
            index;
        // 获取最终的刻度尺数组
        rulerArray.push(begin);
        for (index = 1; rulerArray[rulerArray.length - 1] < maxValue; index++) {
            rulerArray.push(+(begin + distance * index).toFixed(dotNum));
        }
        rulerArray[0] = +begin.toFixed(dotNum);

        // 最后，进行校对
        var _rulerArray = [rulerArray[0]];
        for (var i = 1; i < rulerArray.length; i++) {
            if (_rulerArray[_rulerArray.length - 1] != rulerArray[i]) {
                _rulerArray.push(rulerArray[i]);
            }
        }
        return _rulerArray;
    }

    // 刻度计算
    function ruler$1(maxValue, minValue) {
        var num = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;


        var rulerArray = ruler(maxValue, minValue, num);

        return {
            min: rulerArray[0],
            max: rulerArray[rulerArray.length - 1],
            distance: rulerArray.length <= 1 ? 0 : rulerArray[1] - rulerArray[0],
            num: rulerArray.length - 1,
            ruler: rulerArray
        };
    }

    /**
     * 把当前维护的结点加到目标结点内部的结尾
     * @param {selector} target
     * @return {image2D}
     */
    var appendTo = function appendTo(target, context) {
        var nodes = sizzle(target, context || document);
        if (nodes.length > 0) {
            for (var i = 0; i < this.length; i++) {
                nodes[0].appendChild(this[i]);
            }
        } else {
            throw new Error('Target empty!');
        }
        return this;
    };

    /**
     * 把当前维护的结点加到目标结点内部的开头
     * @param {selector} target
     * @return {image2D}
     */
    var prependTo = function prependTo(target, context) {
        var nodes = sizzle(target, context || document);
        if (nodes.length > 0) {
            for (var i = 0; i < this.length; i++) {
                nodes[0].insertBefore(this[i], nodes[0].childNodes[0]);
            }
        } else {
            throw new Error('Target empty!');
        }
        return this;
    };

    /**
     * 把当前维护的结点加到目标结点之后
     * @param {selector} target
     * @return {image2D}
     */
    var afterTo = function afterTo(target, context) {
        var nodes = sizzle(target, context || document);
        if (nodes.length > 0) {
            for (var i = 0; i < this.length; i++) {
                //如果第二个参数undefined,在结尾追加，目的一样达到
                nodes[0].parentNode.insertBefore(this[i], nodes[0].nextSibling);
            }
        } else {
            throw new Error('Target empty!');
        }
        return this;
    };

    /**
     * 把当前维护的结点加到目标结点之前
     * @param {selector} target
     * @return {image2D}
     */
    var beforeTo = function beforeTo(target, context) {
        var nodes = sizzle(target, context || document);
        if (nodes.length > 0) {
            for (var i = 0; i < this.length; i++) {
                nodes[0].parentNode.insertBefore(this[i], nodes[0]);
            }
        } else {
            throw new Error('Target empty!');
        }
        return this;
    };

    // 删除当前维护的结点
    var remove = function remove() {
        for (var i = 0; i < this.length; i++) {
            this[i].parentNode.removeChild(this[i]);
        }return this;
    };

    // 筛选当前结点
    var filter = function filter(filterback) {
        var temp = [];
        for (var i = 0; i < this.length; i++) {
            if (filterback(i, image2D(this[i]))) temp.push(this[i]);
        }
        return image2D(temp);
    };

    // 修改文本或获取结点文本
    var text = function text(content) {
        if (arguments.length > 0) {
            for (var i = 0; i < this.length; i++) {
                this[i].textContent = content;
            }return this;
        }
        if (this.length <= 0) throw new Error('Target empty!');
        return this[0].textContent;
    };

    // 设置或获取结点中的xhtml字符串模板（相当于innerHTML）
    var html = function html(xhtmlString) {
        if (arguments.length > 0) {
            for (var i = 0; i < this.length; i++) {

                // 如果是SVG标签
                if (/[a-z]/.test(this[i].tagName)) {
                    setSVG(this[i], xhtmlString);
                }

                // 否则是普通html标签
                else {
                        this[i].innerHTML = xhtmlString;
                    }
            }
            return this;
        }
        if (this.length <= 0) throw new Error('Target empty!');
        return this[0].innerHTML;
    };

    // 获取元素大小
    var size = function size(type) {
        if (this.length <= 0) throw new Error('Target empty!');

        var elemHeight = void 0,
            elemWidth = void 0,
            dom = this[0];

        if (type == 'content') {
            //内容
            elemWidth = dom.clientWidth - (getStyle(dom, 'padding-left') + "").replace('px', '') - (getStyle(dom, 'padding-right') + "").replace('px', '');
            elemHeight = dom.clientHeight - (getStyle(dom, 'padding-top') + "").replace('px', '') - (getStyle(dom, 'padding-bottom') + "").replace('px', '');
        } else if (type == 'padding') {
            //内容+内边距
            elemWidth = dom.clientWidth;
            elemHeight = dom.clientHeight;
        } else if (type == 'border') {
            //内容+内边距+边框
            elemWidth = dom.offsetWidth;
            elemHeight = dom.offsetHeight;
        } else if (type == 'scroll') {
            //包含滚动的尺寸（不包括border）
            elemWidth = dom.scrollWidth;
            elemHeight = dom.scrollHeight;
        } else {
            elemWidth = dom.offsetWidth;
            elemHeight = dom.offsetHeight;
        }
        return {
            width: elemWidth,
            height: elemHeight
        };
    };

    /**
     * 设置或获取样式
     * @arguments(key):获取指定样式
     * @arguments(key,value):设置指定样式
     * @arguments():获取全部样式
     * @arguments(json):设置大量样式
     */
    function style() {

        // 获取样式
        if (arguments.length <= 1 && (arguments.length <= 0 || _typeof(arguments[0]) !== 'object')) {
            if (this.length <= 0) throw new Error('Target empty!');

            // 为了获取非style定义的样式，需要使用特殊的方法获取
            return getStyle(this[0], arguments[0]);
        }

        // 设置样式
        for (var i = 0; i < this.length; i++) {
            if (arguments.length === 1) {
                for (var key in arguments[0]) {
                    this[i].style[key] = arguments[0][key];
                }
            } else this[i].style[arguments[0]] = arguments[1];
        }

        return this;
    }

    var setAttribute = function setAttribute(dom, attr, val) {
        if (/[a-z]/.test(dom.tagName) && XLINK_ATTRIBUTE.indexOf(attr) >= 0) {
            // 如果是xml元素
            // 针对xlink使用特殊方法赋值
            dom.setAttributeNS(NAMESPACE.xlink, 'xlink:' + attr, val);
        } else dom.setAttribute(attr, val);
    };

    /**
     * 设置或获取属性
     * @arguments(attr):获取属性
     * @arguments(attr,value):设置指定属性值
     * @arguments(json):设置大量属性
     */
    function attribute() {

        // 获取属性值
        if (arguments.length === 1 && _typeof(arguments[0]) !== 'object') {
            if (this.length <= 0) throw new Error('Target empty!');
            return this[0].getAttribute(arguments[0]);
        }

        // 设置属性值
        else if (arguments.length > 0) {
                for (var i = 0; i < this.length; i++) {
                    if (arguments.length === 1) {
                        for (var key in arguments[0]) {
                            setAttribute(this[i], key, arguments[0][key]);
                        }
                    } else setAttribute(this[i], arguments[0], arguments[1]);
                }
            }

        return this;
    }

    // 用于把数据绑定到一组结点或返回第一个结点数据
    // 可以传递函数对数据处理
    var datum = function datum(data, calcback) {

        // 获取数据
        if (arguments.length <= 0) {
            if (this.length <= 0) throw new Error('Target empty!');
            return this[0].__data__;
        }

        // 设置数据
        for (var i = 0; i < this.length; i++) {
            this[i].__data__ = typeof calcback === 'function' ? calcback(data, i) : data;
        }return this;
    };

    // 用于把一组数据绑定到一组结点或返回一组结点数据
    // 可以传递函数对数据处理
    var data = function data(datas, calcback) {

        // 获取数据
        if (arguments.length <= 0) {
            var _temp3 = [];
            for (var _i5 = 0; _i5 < this.length; _i5++) {
                _temp3[_i5] = this[_i5].__data__;
            }return _temp3;
        }

        // 设置数据
        var temp = [],
            i = void 0;
        for (i = 0; i < this.length && i < datas.length; i++) {
            this[i].__data__ = typeof calcback === 'function' ? calcback(datas[i], i) : datas[i];
            temp.push(this[i]);
        }
        var newImage2D = image2D(temp);

        // 记录需要去平衡的数据
        newImage2D.__enter__ = [];
        for (; i < datas.length; i++) {
            newImage2D.__enter__.push(typeof calcback === 'function' ? calcback(datas[i], i) : datas[i]);
        } // 记录需要去平衡的结点
        newImage2D.__exit__ = [];
        for (; i < this.length; i++) {
            newImage2D.__exit__.push(this[i]);
        }return newImage2D;
    };

    // 把过滤出来多于结点的数据部分变成结点返回
    // 需要传递一个字符串来标明新创建元素是什么
    var enter = function enter(template, type) {

        if (!this.__enter__ || this.__enter__.constructor !== Array) throw new Error('Not a data node object to be balanced!');

        var temp = [];
        for (var i = 0; i < this.__enter__.length; i++) {
            temp[i] = toNode$1(template, type);
            temp[i].__data__ = this.__enter__[i];
        }

        delete this.__enter__;
        return image2D(temp);
    };

    // 把过滤出来多于数据的结点部分返回
    var exit = function exit() {

        if (!this.__exit__ || this.__exit__.constructor !== Array) throw new Error('Not a data node object to be balanced!');

        var exitImage2D = image2D(this.__exit__);
        delete this.__exit__;
        return exitImage2D;
    };

    // 在维护的结点上轮询执行传入的方法
    // doback(data,index,image2D)
    var loop = function loop(doback) {

        for (var i = 0; i < this.length; i++) {
            doback(this[i].__data__, i, image2D(this[i]));
        }return this;
    };

    // r1和r2，内半径和外半径
    // beginA起点弧度，rotateA旋转弧度式
    function arc(beginA, rotateA, cx, cy, r1, r2, doback) {

        // 有了前置的判断，这里可以省略了
        // if (rotateA > Math.PI * 2) rotateA = Math.PI * 2;
        // if (rotateA < -Math.PI * 2) rotateA = -Math.PI * 2;

        // 保证逆时针也是可以的
        if (rotateA < 0) {
            beginA += rotateA;
            rotateA *= -1;
        }

        var temp = [],
            p = void 0;

        // 内部
        p = _rotate2(0, 0, beginA, r1, 0);
        temp[0] = p[0];
        temp[1] = p[1];
        p = _rotate2(0, 0, rotateA, p[0], p[1]);
        temp[2] = p[0];
        temp[3] = p[1];

        // 外部
        p = _rotate2(0, 0, beginA, r2, 0);
        temp[4] = p[0];
        temp[5] = p[1];
        p = _rotate2(0, 0, rotateA, p[0], p[1]);
        temp[6] = p[0];
        temp[7] = p[1];

        doback(beginA, beginA + rotateA, temp[0] + cx, temp[1] + cy, temp[4] + cx, temp[5] + cy, temp[2] + cx, temp[3] + cy, temp[6] + cx, temp[7] + cy, (r2 - r1) * 0.5);
    }

    // 文字统一设置方法
    var initText = function initText(painter, config, x, y, deg) {

        painter.beginPath();
        painter.translate(x, y);
        painter.rotate(deg);
        painter.font = config['font-size'] + "px " + config['font-family'];
        return painter;
    };

    // 画弧统一设置方法
    var initArc = function initArc(painter, config, cx, cy, r1, r2, beginDeg, deg) {

        if (r1 > r2) {
            var temp = r1;
            r1 = r2;
            r2 = temp;
        }

        beginDeg = beginDeg % (Math.PI * 2);

        // 当|deg|>=2π的时候都认为是一个圆环
        // 为什么不取2π比较，是怕部分浏览器浮点不精确，同时也是为了和svg保持一致
        if (deg >= Math.PI * 1.999999 || deg <= -Math.PI * 1.999999) {
            deg = Math.PI * 2;
        } else {
            deg = deg % (Math.PI * 2);
        }

        arc(beginDeg, deg, cx, cy, r1, r2, function (beginA, endA, begInnerX, begInnerY, begOuterX, begOuterY, endInnerX, endInnerY, endOuterX, endOuterY, r) {
            if (r < 0) r = -r;
            painter.beginPath();
            painter.moveTo(begInnerX, begInnerY);
            painter.arc(
            // (圆心x，圆心y，半径，开始角度，结束角度，true逆时针/false顺时针)
            cx, cy, r1, beginA, endA, false);
            // 结尾
            if (config["arc-end-cap"] != 'round') painter.lineTo(endOuterX, endOuterY);else painter.arc((endInnerX + endOuterX) * 0.5, (endInnerY + endOuterY) * 0.5, r, endA - Math.PI, endA, true);
            painter.arc(cx, cy, r2, endA, beginA, true);
            // 开头
            if (config["arc-start-cap"] != 'round') painter.lineTo(begInnerX, begInnerY);else painter.arc((begInnerX + begOuterX) * 0.5, (begInnerY + begOuterY) * 0.5, r, beginA, beginA - Math.PI, true);
        });
        if (config["arc-start-cap"] == 'butt') painter.closePath();
        return painter;
    };

    // 画圆统一设置方法
    var initCircle = function initCircle(painter, cx, cy, r) {
        painter.beginPath();
        painter.moveTo(cx + r, cy);
        painter.arc(cx, cy, r, 0, Math.PI * 2);
        return painter;
    };

    // 画矩形统一设置方法
    var initRect = function initRect(painter, x, y, width, height) {
        painter.beginPath();
        painter.rect(x, y, width, height);
        return painter;
    };

    // 线性渐变
    var linearGradient = function linearGradient(painter, x0, y0, x1, y1) {
        var gradient = painter.createLinearGradient(x0, y0, x1, y1);
        var enhanceGradient = {
            "value": function value() {
                return gradient;
            },
            "addColorStop": function addColorStop(stop, color) {
                gradient.addColorStop(stop, color);
                return enhanceGradient;
            }
        };
        return enhanceGradient;
    };

    // 环形渐变
    var radialGradient = function radialGradient(painter, cx, cy, r) {
        var gradient = painter.createRadialGradient(cx, cy, 0, cx, cy, r);
        var enhanceGradient = {
            "value": function value() {
                return gradient;
            },
            "addColorStop": function addColorStop(stop, color) {
                gradient.addColorStop(stop, color);
                return enhanceGradient;
            }
        };
        return enhanceGradient;
    };

    // 加强版本的画笔
    function painter_canvas2D(canvas, noHiddenWarn) {

        // 获取canvas2D画笔
        var painter = canvas.getContext("2d");

        var isLayer = canvas.__image2D__layer__ == 'yes';

        // 图层是内部的，明确获取方法
        // 对外的一律使用clientXXX，区分是否显示
        var width = isLayer ? canvas.getAttribute('width') : canvas.clientWidth,
            //内容+内边距
        height = isLayer ? canvas.getAttribute('height') : canvas.clientHeight;

        if (width == 0 || height == 0) {

            if (!noHiddenWarn) console.warn('Canvas is hidden or size is zero!');

            if (canvas.__image2D__noLayer_getSize__ == 'yes') {

                width = canvas.width / 2;
                height = canvas.height / 2;
            } else {

                width = canvas.width;
                height = canvas.height;

                // 标记已经特殊获取大小了
                canvas.__image2D__noLayer_getSize__ = 'yes';
            }
        }

        // 设置显示大小
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";

        // 设置画布大小（画布大小设置为显示的二倍，使得显示的时候更加清晰）
        canvas.setAttribute('width', width * 2);
        canvas.setAttribute('height', height * 2);

        // 通过缩放实现模糊问题
        painter.scale(2, 2);

        // 默认配置canvas2D对象已经存在的属性
        painter.textBaseline = 'middle';
        painter.textAlign = 'left';

        // 默认配置不应该有canvas2D对象已经存在的属性
        // 这里是为了简化或和svg统一接口而自定义的属性
        var config = {
            "font-size": "16", // 文字大小
            "font-family": "sans-serif", // 字体
            "arc-start-cap": "butt", // 弧开始闭合方式
            "arc-end-cap": "butt" // 弧结束闭合方式
        };

        // 配置生效方法
        var useConfig = function useConfig(key, value) {

            /**
             * -----------------------------
             * 特殊的设置开始
             * -----------------------------
             */

            if (key == 'lineDash') {
                painter.setLineDash(value);
            }

            /**
             * -----------------------------
             * 常规的配置开始
             * -----------------------------
             */

            // 如果已经存在默认配置中，说明只需要缓存起来即可
            else if (config[key]) {
                    config[key] = value;
                }

                // 其它情况直接生效即可
                else {
                        painter[key] = value;
                    }
        };

        // 画笔
        var enhancePainter = {

            // 属性设置或获取
            "config": function config() {
                if (arguments.length === 1) {
                    if (_typeof(arguments[0]) !== 'object') return painter[arguments[0]];
                    for (var key in arguments[0]) {
                        useConfig(key, arguments[0][key]);
                    }
                } else if (arguments.length === 2) {
                    useConfig(arguments[0], arguments[1]);
                }
                return enhancePainter;
            },

            // 文字
            "fillText": function fillText(text, x, y, deg) {
                painter.save();
                initText(painter, config, x, y, deg || 0).fillText(text, 0, 0);
                painter.restore();
                return enhancePainter;
            },
            "strokeText": function strokeText(text, x, y, deg) {
                painter.save();
                initText(painter, config, x, y, deg || 0).strokeText(text, 0, 0);
                painter.restore();
                return enhancePainter;
            },
            "fullText": function fullText(text, x, y, deg) {
                painter.save();
                initText(painter, config, x, y, deg || 0);
                painter.fillText(text, 0, 0);
                painter.strokeText(text, 0, 0);
                painter.restore();
                return enhancePainter;
            },

            // 路径
            "beginPath": function beginPath() {
                painter.beginPath();return enhancePainter;
            },
            "closePath": function closePath() {
                painter.closePath();return enhancePainter;
            },
            "moveTo": function moveTo(x, y) {
                painter.moveTo(x, y);return enhancePainter;
            },
            "lineTo": function lineTo(x, y) {
                painter.lineTo(x, y);return enhancePainter;
            },
            "arc": function arc(x, y, r, beginDeg, deg) {
                painter.arc(x, y, r, beginDeg, beginDeg + deg, deg < 0);
                return enhancePainter;
            },
            "fill": function fill() {
                painter.fill();return enhancePainter;
            },
            "stroke": function stroke() {
                painter.stroke();return enhancePainter;
            },
            "full": function full() {
                painter.fill();painter.stroke();return enhancePainter;
            },

            "save": function save() {
                painter.save();return enhancePainter;
            },
            "restore": function restore() {
                painter.restore();return enhancePainter;
            },

            // 路径 - 贝塞尔曲线
            "quadraticCurveTo": function quadraticCurveTo(cpx, cpy, x, y) {
                painter.quadraticCurveTo(cpx, cpy, x, y);return enhancePainter;
            },
            "bezierCurveTo": function bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
                painter.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);return enhancePainter;
            },

            // 擦除画面
            "clearRect": function clearRect(x, y, width, height) {
                painter.clearRect(x || 0, y || 0, width || canvas.getAttribute('width') / 2, height || canvas.getAttribute('height') / 2);return enhancePainter;
            },

            // 地址图片
            "toDataURL": function toDataURL() {
                return canvas.toDataURL();
            },

            // image
            // v1.5.0开始，做了参数调整（非向下兼容）
            "drawImage": function drawImage(img, sx, sy, sw, sh, x, y, w, h) {
                sx = sx || 0;
                sy = sy || 0;
                x = x || 0;
                y = y || 0;
                w = w ? w * 2 : canvas.getAttribute('width');
                h = h ? h * 2 : canvas.getAttribute('height');

                if (img.nodeName == 'CANVAS') {
                    // 我们不考虑别的canvas，我们认为我们面对的canvas都是自己控制的
                    // 如果有必要，未来可以对任意canvas进行向下兼容
                    w = w / 2;
                    h = h / 2;
                    sw = sw ? sw * 2 : canvas.getAttribute('width');
                    sh = sh ? sh * 2 : canvas.getAttribute('height');
                } else {
                    // 默认类型是图片
                    sw = (sw || img.width) * 2;
                    sh = (sh || img.height) * 2;
                }

                painter.drawImage(img, sx, sy, sw, sh, x, y, w, h);
                return enhancePainter;
            },

            // 弧
            "fillArc": function fillArc(cx, cy, r1, r2, beginDeg, deg) {
                initArc(painter, config, cx, cy, r1, r2, beginDeg, deg).fill();return enhancePainter;
            },
            "strokeArc": function strokeArc(cx, cy, r1, r2, beginDeg, deg) {
                initArc(painter, config, cx, cy, r1, r2, beginDeg, deg).stroke();return enhancePainter;
            },
            "fullArc": function fullArc(cx, cy, r1, r2, beginDeg, deg) {
                initArc(painter, config, cx, cy, r1, r2, beginDeg, deg);
                painter.fill();
                painter.stroke();
                return enhancePainter;
            },

            // 圆形
            "fillCircle": function fillCircle(cx, cy, r) {
                initCircle(painter, cx, cy, r).fill();return enhancePainter;
            },
            "strokeCircle": function strokeCircle(cx, cy, r) {
                initCircle(painter, cx, cy, r).stroke();return enhancePainter;
            },
            "fullCircle": function fullCircle(cx, cy, r) {
                initCircle(painter, cx, cy, r);
                painter.fill();
                painter.stroke();
                return enhancePainter;
            },

            // 矩形
            "fillRect": function fillRect(x, y, width, height) {
                initRect(painter, x, y, width, height).fill();return enhancePainter;
            },
            "strokeRect": function strokeRect(x, y, width, height) {
                initRect(painter, x, y, width, height).stroke();return enhancePainter;
            },
            "fullRect": function fullRect(x, y, width, height) {
                initRect(painter, x, y, width, height);
                painter.fill();
                painter.stroke();
                return enhancePainter;
            },

            /**
            * 渐变
            * -------------
            */

            //  线性渐变
            "createLinearGradient": function createLinearGradient(x0, y0, x1, y1) {
                return linearGradient(painter, x0, y0, x1, y1);
            },

            // 环形渐变
            "createRadialGradient": function createRadialGradient(cx, cy, r) {
                return radialGradient(painter, cx, cy, r);
            },

            /**
             * 变换
             * --------------
             */

            //  移动
            // 用来移动 canvas 的原点到指定的位置
            "translate": function translate(x, y) {
                painter.translate(x, y);return enhancePainter;
            },

            //  旋转
            "rotate": function rotate(deg) {
                painter.rotate(deg);return enhancePainter;
            },

            // 缩放
            "scale": function scale(x, y) {
                y = y || x;painter.scale(x, y);return enhancePainter;
            }
        };

        return enhancePainter;
    }

    function normalConfig(key, value) {

        // 文字水平对齐方式
        if (key === 'textAlign') {
            return {
                "left": "start",
                "right": "end",
                "center": "middle"
            }[value] || value;
        }

        return value;
    }
    // 文字统一设置方法
    var initText$1 = function initText$1(painter, config, x, y, deg) {
        if (!painter || painter.length <= 0 || painter[0].nodeName.toLowerCase() !== 'text') throw new Error('Need a <text> !');

        deg = deg % (Math.PI * 2);

        // 垂直对齐采用dy实现
        painter.attr('dy', {
            "top": config['font-size'] * 0.5,
            "middle": 0,
            "bottom": -config['font-size'] * 0.5
        }[config.textBaseline]).css({

            // 文字对齐方式
            "text-anchor": config.textAlign,
            "dominant-baseline": "central",

            // 文字大小和字体设置
            "font-size": config['font-size'] + "px",
            "font-family": config['font-family']
        }).attr({ "x": x, "y": y });

        return {
            "transform": "rotate(" + deg * 180 / Math.PI + "," + x + "," + y + ")"
        };
    };

    // 画弧统一设置方法
    var initArc$1 = function initArc$1(painter, config, cx, cy, r1, r2, beginDeg, deg) {

        if (!painter || painter.length <= 0 || painter[0].nodeName.toLowerCase() !== 'path') throw new Error('Need a <path> !');

        beginDeg = beginDeg % (Math.PI * 2);

        if (r1 > r2) {
            var temp = r1;
            r1 = r2;
            r2 = temp;
        }

        // 当|deg|>=2π的时候都认为是一个圆环
        if (deg >= Math.PI * 1.999999 || deg <= -Math.PI * 1.999999) {
            deg = Math.PI * 1.999999;
        } else {
            deg = deg % (Math.PI * 2);
        }

        arc(beginDeg, deg, cx, cy, r1, r2, function (beginA, endA, begInnerX, begInnerY, begOuterX, begOuterY, endInnerX, endInnerY, endOuterX, endOuterY, r) {
            var f = endA - beginA > Math.PI ? 1 : 0,
                d = "M" + begInnerX + " " + begInnerY;
            if (r < 0) r = -r;
            d +=
            // 横半径 竖半径 x轴偏移角度 0小弧/1大弧 0逆时针/1顺时针 终点x 终点y
            "A" + r1 + " " + r1 + " 0 " + f + " 1 " + endInnerX + " " + endInnerY;
            // 结尾
            if (config["arc-end-cap"] != 'round') d += "L" + endOuterX + " " + endOuterY;else d += "A" + r + " " + r + " " + " 0 1 0 " + endOuterX + " " + endOuterY;
            d += "A" + r2 + " " + r2 + " 0 " + f + " 0 " + begOuterX + " " + begOuterY;
            // 开头
            if (config["arc-start-cap"] != 'round') d += "L" + begInnerX + " " + begInnerY;else d += "A" + r + " " + r + " " + " 0 1 0 " + begInnerX + " " + begInnerY;
            if (config["arc-start-cap"] == 'butt') d += "Z";
            painter.attr('d', d);
        });
        return painter;
    };

    // 画圆统一设置方法
    var initCircle$1 = function initCircle$1(painter, cx, cy, r) {
        if (!painter || painter.length <= 0 || painter[0].nodeName.toLowerCase() !== 'circle') throw new Error('Need a <circle> !');
        painter.attr({
            "cx": cx,
            "cy": cy,
            "r": r
        });
        return painter;
    };

    // 路径统一设置方法
    var initPath = function initPath(painter, path) {
        if (!painter || painter.length <= 0 || painter[0].nodeName.toLowerCase() !== 'path') throw new Error('Need a <path> !');
        painter.attr('d', path);
        return painter;
    };

    // 画矩形统一设置方法
    var initRect$1 = function initRect$1(painter, x, y, width, height) {
        if (!painter || painter.length <= 0 || painter[0].nodeName.toLowerCase() !== 'rect') throw new Error('Need a <rect> !');

        // 由于height和宽不可以是负数，校对一下

        if (height < 0) {
            height *= -1;y -= height;
        }

        if (width < 0) {
            width *= -1;x -= width;
        }

        painter.attr({
            "x": x,
            "y": y,
            "width": width,
            "height": height
        });
        return painter;
    };

    var initDefs = function initDefs(target) {
        var defs = target.getElementsByTagName('defs');
        if (defs.length <= 0) {
            defs = [toNode$1("<defs>", "SVG")];
            target.appendChild(defs[0]);
        }
        return defs[0];
    };

    // 线性渐变
    var linearGradient$1 = function linearGradient$1(painter, target, x0, y0, x1, y1) {
        var defs = initDefs(target);
        var gradientId = "image2D-lg-" + new Date().valueOf() + "-" + Math.random();
        var gradientDom = toNode$1('<linearGradient id="' + gradientId + '" x1="' + x0 + '%" y1="' + y0 + '%" x2="' + x1 + '%" y2="' + y1 + '%"></linearGradient>');
        defs.appendChild(gradientDom);
        var enhanceGradient = {
            "value": function value() {
                return "url(#" + gradientId + ")";
            },
            "addColorStop": function addColorStop(stop, color) {
                gradientDom.appendChild(toNode$1('<stop offset="' + stop * 100 + '%" style="stop-color:' + color + ';" />'));
                return enhanceGradient;
            }
        };
        return enhanceGradient;
    };

    // 环形渐变
    var radialGradient$1 = function radialGradient$1(painter, target, cx, cy, r) {
        var defs = initDefs(target);
        var gradientId = "image2D-rg-" + new Date().valueOf() + "-" + Math.random();
        var gradientDom = toNode$1('<radialGradient id="' + gradientId + '" cx="' + cx + '%" cy="' + cy + '%" r="' + r + '%"></radialGradient>');
        defs.appendChild(gradientDom);
        var enhanceGradient = {
            "value": function value() {
                return "url(#" + gradientId + ")";
            },
            "addColorStop": function addColorStop(stop, color) {
                gradientDom.appendChild(toNode$1('<stop offset="' + stop * 100 + '%" style="stop-color:' + color + ';" />'));
                return enhanceGradient;
            }
        };
        return enhanceGradient;
    };

    function painter_svg(target, selector) {

        var painter = void 0;
        if (selector) painter = image2D(selector, target);

        // 类似canvas画笔的属性
        var _config2 = {

            // 基本设置
            "fillStyle": "#000",
            "strokeStyle": "#000",
            "lineWidth": 1,

            // 文字对齐方式
            "textAlign": "start",
            "textBaseline": "middle",

            // 文字设置
            "font-size": "16",
            "font-family": "sans-serif",

            // arc二端闭合方式['butt':直线闭合,'round':圆帽闭合]
            "arc-start-cap": "butt",
            "arc-end-cap": "butt",

            // 虚线设置
            "lineDash": []

        };

        // 路径(和canvas2D的类似)
        var path = "",
            currentPosition = [];

        // 变换（和canvas2D的类似，内部维护了用于记录）
        var transform_history = [],
            transform_current = "";

        // 画笔
        var enhancePainter = {

            // 属性设置或获取
            "config": function config() {
                if (arguments.length === 1) {
                    if (_typeof(arguments[0]) !== 'object') return _config2[arguments[0]];
                    for (var key in arguments[0]) {
                        _config2[key] = normalConfig(key, arguments[0][key]);
                    }
                } else if (arguments.length === 2) _config2[arguments[0]] = normalConfig(arguments[0], arguments[1]);
                return enhancePainter;
            },

            // 基础方法
            "bind": function bind(selector) {
                painter = image2D(selector, target);return enhancePainter;
            },
            "appendTo": function appendTo(selector) {
                painter.appendTo(selector || target, target);return enhancePainter;
            },
            "prependTo": function prependTo(selector) {
                painter.prependTo(selector || target, target);return enhancePainter;
            },
            "afterTo": function afterTo(selector) {
                painter.afterTo(selector || target, target);return enhancePainter;
            },
            "beforeTo": function beforeTo(selector) {
                painter.beforeTo(selector || target, target);return enhancePainter;
            },

            // 路径
            "beginPath": function beginPath() {
                path = "";currentPosition = [];return enhancePainter;
            },
            "closePath": function closePath() {
                path += "Z";return enhancePainter;
            },
            "moveTo": function moveTo(x, y) {
                path += "M" + x + " " + y;currentPosition = [x, y];return enhancePainter;
            },
            "lineTo": function lineTo(x, y) {
                path += (path == "" ? "M" : "L") + x + " " + y;currentPosition = [x, y];return enhancePainter;
            },
            "arc": function arc(x, y, r, beginDeg, deg) {
                var begPosition = _rotate2(x, y, beginDeg, x + r, y);
                var endPosition = _rotate2(x, y, beginDeg + deg, x + r, y);
                beginDeg = beginDeg / Math.PI * 180;
                deg = deg / Math.PI * 180;
                // 如果当前没有路径，说明是开始的，就移动到正确位置
                if (path == '') {
                    path += "M" + begPosition[0] + "," + begPosition[1];
                }
                // 如果当前有路径，位置不正确，应该画到正确位置（和canvas保持一致）
                else if (begPosition[0] != currentPosition[0] || begPosition[1] != currentPosition[1]) {
                        path += "L" + begPosition[0] + "," + begPosition[1];
                    }
                path += "A" + r + "," + r + " 0 " + (deg > 180 || deg < -180 ? 1 : 0) + "," + (deg > 0 ? 1 : 0) + " " + endPosition[0] + "," + endPosition[1];
                return enhancePainter;
            },
            "fill": function fill() {
                initPath(painter, path).attr('transform', transform_current).attr("fill", _config2.fillStyle);
                return enhancePainter;
            },
            "stroke": function stroke() {
                initPath(painter, path).attr('transform', transform_current).attr({
                    "stroke-width": _config2.lineWidth,
                    "stroke": _config2.strokeStyle,
                    "fill": "none",
                    "stroke-dasharray": _config2.lineDash.join(',')
                });
                return enhancePainter;
            },
            "full": function full() {
                initPath(painter, path).attr('transform', transform_current).attr({
                    "stroke-width": _config2.lineWidth,
                    "stroke": _config2.strokeStyle,
                    "fill": _config2.fillStyle,
                    "stroke-dasharray": _config2.lineDash.join(',')
                });
                return enhancePainter;
            },

            "save": function save() {
                transform_history.push(transform_current);
                return enhancePainter;
            },
            "restore": function restore() {
                if (transform_history.length > 0) transform_current = transform_history.pop();
                return enhancePainter;
            },

            // 路径 - 贝塞尔曲线
            "quadraticCurveTo": function quadraticCurveTo(cpx, cpy, x, y) {
                path += "Q" + cpx + " " + cpy + "," + x + " " + y;return enhancePainter;
            },
            "bezierCurveTo": function bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
                path += "C" + cp1x + " " + cp1y + "," + cp2x + " " + cp2y + "," + x + " " + y;return enhancePainter;
            },

            // 文字
            "fillText": function fillText(text, x, y, deg) {
                var returnJSon = initText$1(painter, _config2, x, y, deg || 0);
                painter.attr('transform', transform_current + returnJSon.transform).attr("fill", _config2.fillStyle)[0].textContent = text;
                return enhancePainter;
            },
            "strokeText": function strokeText(text, x, y, deg) {
                var returnJSon = initText$1(painter, _config2, x, y, deg || 0);
                painter.attr('transform', transform_current + returnJSon.transform).attr({
                    "stroke": _config2.strokeStyle,
                    "fill": "none",
                    "stroke-dasharray": _config2.lineDash.join(',')
                })[0].textContent = text;
                return enhancePainter;
            },
            "fullText": function fullText(text, x, y, deg) {
                var returnJSon = initText$1(painter, _config2, x, y, deg || 0);
                painter.attr('transform', transform_current + returnJSon.transform).attr({
                    "stroke": _config2.strokeStyle,
                    "fill": _config2.fillStyle,
                    "stroke-dasharray": _config2.lineDash.join(',')
                })[0].textContent = text;
                return enhancePainter;
            },

            // 弧
            "fillArc": function fillArc(cx, cy, r1, r2, beginDeg, deg) {
                initArc$1(painter, _config2, cx, cy, r1, r2, beginDeg, deg).attr('transform', transform_current).attr("fill", _config2.fillStyle);
                return enhancePainter;
            },
            "strokeArc": function strokeArc(cx, cy, r1, r2, beginDeg, deg) {
                initArc$1(painter, _config2, cx, cy, r1, r2, beginDeg, deg).attr('transform', transform_current).attr({
                    "stroke-width": _config2.lineWidth,
                    "stroke": _config2.strokeStyle,
                    "fill": "none",
                    "stroke-dasharray": _config2.lineDash.join(',')
                });
                return enhancePainter;
            },
            "fullArc": function fullArc(cx, cy, r1, r2, beginDeg, deg) {
                initArc$1(painter, _config2, cx, cy, r1, r2, beginDeg, deg).attr('transform', transform_current).attr({
                    "stroke-width": _config2.lineWidth,
                    "stroke": _config2.strokeStyle,
                    "fill": _config2.fillStyle,
                    "stroke-dasharray": _config2.lineDash.join(',')
                });
                return enhancePainter;
            },

            // 圆形
            "fillCircle": function fillCircle(cx, cy, r) {
                initCircle$1(painter, cx, cy, r).attr('transform', transform_current).attr("fill", _config2.fillStyle);return enhancePainter;
            },
            "strokeCircle": function strokeCircle(cx, cy, r) {
                initCircle$1(painter, cx, cy, r).attr('transform', transform_current).attr({
                    "stroke-width": _config2.lineWidth,
                    "stroke": _config2.strokeStyle,
                    "fill": "none",
                    "stroke-dasharray": _config2.lineDash.join(',')
                });return enhancePainter;
            },
            "fullCircle": function fullCircle(cx, cy, r) {
                initCircle$1(painter, cx, cy, r).attr('transform', transform_current).attr({
                    "stroke-width": _config2.lineWidth,
                    "stroke": _config2.strokeStyle,
                    "fill": _config2.fillStyle,
                    "stroke-dasharray": _config2.lineDash.join(',')
                });return enhancePainter;
            },

            // 矩形
            "fillRect": function fillRect(x, y, width, height) {
                initRect$1(painter, x, y, width, height).attr('transform', transform_current).attr("fill", _config2.fillStyle);return enhancePainter;
            },
            "strokeRect": function strokeRect(x, y, width, height) {
                initRect$1(painter, x, y, width, height).attr('transform', transform_current).attr({
                    "stroke-width": _config2.lineWidth,
                    "stroke": _config2.strokeStyle,
                    "fill": "none",
                    "stroke-dasharray": _config2.lineDash.join(',')
                });return enhancePainter;
            },
            "fullRect": function fullRect(x, y, width, height) {
                initRect$1(painter, x, y, width, height).attr('transform', transform_current).attr({
                    "stroke-width": _config2.lineWidth,
                    "stroke": _config2.strokeStyle,
                    "fill": _config2.fillStyle,
                    "stroke-dasharray": _config2.lineDash.join(',')
                });return enhancePainter;
            },

            /**
             * 渐变
             * -------------
             */

            //  线性渐变
            "createLinearGradient": function createLinearGradient(x0, y0, x1, y1) {
                return linearGradient$1(painter, target, x0, y0, x1, y1);
            },

            // 环形渐变
            "createRadialGradient": function createRadialGradient(cx, cy, r) {
                return radialGradient$1(painter, target, cx, cy, r);
            },

            /**
             * 变换
             * --------------
             */

            //  移动
            "translate": function translate(x, y) {
                transform_current += ' translate(' + x + ',' + y + ')';
                return enhancePainter;
            },

            //  旋转
            "rotate": function rotate(deg) {
                deg = deg % (Math.PI * 2);
                transform_current += ' rotate(' + deg / Math.PI * 180 + ')';
                return enhancePainter;
            },

            // 缩放
            "scale": function scale(x, y) {
                y = y || x;
                transform_current += ' scale(' + x + ',' + y + ')';
                return enhancePainter;
            }

        };

        return enhancePainter;
    }

    // 统一画笔
    // 负责启动具体的绘图对象
    function painter() {

        // 因为绘图画布是必须的，因此在判断画布类型前，如果压根没有结点，肯定是非法的
        if (!isElement(this[0])) throw new Error('Target empty!');

        var target = this[0],
            nodeName = target.nodeName.toLowerCase();

        // canvas2D
        if (nodeName === 'canvas') return painter_canvas2D(target, arguments[0]);

        // svg
        if (nodeName === 'svg') return painter_svg(target, arguments[0]);

        throw new Error('Painter is not a function!');
    }

    function layer() {

        if (!isElement(this[0])) throw new Error('Target empty!');

        if (this[0].nodeName.toLowerCase() !== 'canvas') throw new Error('Layer is not a function!');

        // 画笔
        var painter = this.painter(),

        // 图层集合
        layer = {},
            layer_index = [];
        var width = this[0].clientWidth,
            //内容+内边距
        height = this[0].clientHeight;

        var layerManager = {

            // 获取指定图层画笔
            "painter": function painter(id) {
                if (!layer[id]) {
                    // 初始化的图层都可见
                    layer[id] = { "visible": true };

                    // 后期可以考虑使用离线画布offScreenCanvas提高效率
                    layer[id].canvas = document.createElement('canvas');
                    // 设置大小才会避免莫名其妙的错误
                    layer[id].canvas.setAttribute('width', width);
                    layer[id].canvas.setAttribute('height', height);

                    // 标记是图层
                    layer[id].canvas.__image2D__layer__ = 'yes';

                    layer[id].painter = image2D(layer[id].canvas).painter();

                    layer_index.push(id);
                }
                return layer[id].painter;
            },

            // 删除图层
            "delete": function _delete(id) {
                // 删除索引
                for (var i = 0; i < layer_index.length; i++) {
                    if (layer_index[i] === id) {
                        layer_index.splice(i, 1);
                        break;
                    }
                } // 删除图层
                delete layer[id];
                return layerManager;
            },

            // 更新内容到画布
            "update": function update() {
                painter.clearRect(0, 0, width, height);
                painter.save();

                for (var i = 0; i < layer_index.length; i++) {
                    if (layer[layer_index[i]].visible) painter.drawImage(layer[layer_index[i]].canvas, 0, 0, width, height, 0, 0, width, height);
                }
                painter.restore();
                return layerManager;
            },

            // 隐藏图层
            "hidden": function hidden(id) {
                layer[id].visible = false;
                return layerManager;
            },

            // 显示图层
            "show": function show(id) {
                layer[id].visible = true;
                return layerManager;
            }
        };

        return layerManager;
    }

    image2D.extend({

        // 布局
        treeLayout: treeLayout$1, pieLayout: pieLayout,

        // 矩阵变换
        Matrix4: Matrix4,

        // 二维简单变换
        rotate: _rotate2, move: _move2, scale: _scale2, dot: dot,

        // 动画类
        animation: animation$1,

        // 插值类计算
        cardinal: cardinal,

        // 色彩类
        formatColor: formatColor, getRandomColors: getRandomColors, getLoopColors: getLoopColors,

        // 事件相关
        stopPropagation: stopPropagation, preventDefault: preventDefault,

        // 地图映射
        map: map,

        // 刻度尺辅助计算
        ruler: ruler$1

    });
    image2D.prototype.extend({

        // 结点操作
        appendTo: appendTo, prependTo: prependTo, afterTo: afterTo, beforeTo: beforeTo, remove: remove, filter: filter, text: text, html: html, size: size,

        // 结点属性或样式操作
        css: style, attr: attribute,

        // 结点和数据绑定
        datum: datum, data: data, enter: enter, exit: exit, loop: loop,

        // 结点事件
        bind: bind, unbind: unbind, position: position,

        // 自定义画笔
        painter: painter,

        // 图层
        layer: layer

    });

    image2D.fn = image2D.prototype;

    // 判断当前环境，如果不是浏览器环境
    if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
        module.exports = image2D;
    }
    // 浏览器环境下
    // 因为浏览器下挂载到window对象上
    // 为了防止覆盖，额外提供一个noConflict方法，用以在覆盖的时候恢复
    else {
            var
            // 保存之前的image2D，防止直接覆盖
            _image2D = window.image2D,


            // 保存之前的$$，防止直接覆盖
            _$$ = window.$$;

            image2D.noConflict = function (deep) {

                // 如果当前的$$是被最新的image2D覆盖的
                // 恢复之前的
                if (window.$$ === image2D) {
                    window.$$ = _$$;
                }

                // 如果当前的image2D是被最新的image2D覆盖的
                // 且标记需要恢复
                // 恢复之前的
                if (deep && window.image2D === image2D) {
                    window.image2D = _image2D;
                }

                // 返回当前image2D
                // 因为调用这个方法以后
                // 全局window下的image2D和$$是什么
                // 已经不一定了
                return image2D;
            };
            // 挂载库对象到根
            window.image2D = window.$$ = image2D;
        }
})();

/*!

    我还惊讶地意识到， 在我生命中有很多时刻， 每当我遇到一个遥不可及、令人害怕的情境，
    并感到惊慌失措时， 我都能够应付——因为我回想起了很久以前自己上过的那一课。
    我提醒自己不要看下面遥远的岩石， 而是注意相对轻松、容易的第一小步， 迈出一小步、再一小步，
    就这样体会每一步带来的成就感， 直到完成了自己想要完成的， 达到了自己的目标，
    然后再回头看时， 不禁对自己走过的这段漫漫长路感到惊讶和自豪。

                                            ———— 摘自 莫顿·亨特《走一步，再走一步》

*/
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/region.js
/*****************************************************************/
window.__etcpack__bundleSrc__['26']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    // 用特定色彩绘制区域
var _drawerRegion = function _drawerRegion(pen, color, drawback, regionManger) {
  pen.beginPath();
  pen.fillStyle = color;
  pen.strokeStyle = color;
  if (typeof drawback != "function") return pen;
  drawback(pen);
  return regionManger;
}; // 区域对象，用于存储区域信息
// 初衷是解决类似canvas交互问题
// 可以用于任何标签的区域控制
// 由于实验的画布是canvas，特地为image2D扩展了区域，方便获取当前鼠标拖拽的结点是谁


__etcpack__scope_bundle__.default= function () {
  var regions = {},
      //区域映射表
  canvas = document.createElement('canvas'),
      rgb = [0, 0, 0],
      //区域标识色彩,rgb(0,0,0)表示空白区域
  p = 'r'; //色彩增值位置

  canvas.setAttribute('width', this[0].offsetWidth); //内容+内边距+边框

  canvas.setAttribute('height', this[0].offsetHeight);

  var _this = this; // 用于计算包含关系的画板


  var canvas2D = canvas.getContext("2d"),
      regionManger = {
    // 绘制（添加）区域范围

    /**
     * region_id：区域唯一标识（一个标签上可以维护多个区域）
     * type：扩展区域类型
     * data：区域位置数据
     */
    "drawer": function drawer(region_id, drawback) {
      if (regions[region_id] == undefined) regions[region_id] = {
        'r': function r() {
          rgb[0] += 1;
          p = 'g';
          return 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
        },
        'g': function g() {
          rgb[1] += 1;
          p = 'b';
          return 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
        },
        'b': function b() {
          rgb[2] += 1;
          p = 'r';
          return 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
        }
      }[p]();
      return _drawerRegion(canvas2D, regions[region_id], drawback, regionManger);
    },
    // 擦除区域范围
    "erase": function erase(drawback) {
      return _drawerRegion(canvas2D, 'rgb(0,0,0)', drawback, regionManger);
    },
    // 获取此刻鼠标所在区域
    "getRegion": function getRegion(event) {
      var pos = _this.position(event),
          i;

      pos.x -= _this.css('border-left-width').replace('px', '');
      pos.y -= _this.css('border-top-width').replace('px', '');
      var currentRGBA = canvas2D.getImageData(pos.x - 0.5, pos.y - 0.5, 1, 1).data;

      for (i in regions) {
        if ("rgb(" + currentRGBA[0] + "," + currentRGBA[1] + "," + currentRGBA[2] + ")" == regions[i]) {
          return [i, pos.x, pos.y];
        }
      }

      return undefined;
    }
  };
  return regionManger;
}
;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App.paper?QuickPaper&type=style&lang=css&hash=347ecaca
/*****************************************************************/
window.__etcpack__bundleSrc__['27']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "\n div[data-quickpaper-347ecaca]{\n\noutline: 1px solid red;\n\ndisplay: inline-block;\n\nmargin: 10px;\n\n}\n\n [quickpaper][data-quickpaper-347ecaca]{\n\nposition: relative;\n\n}\n\n [quickpaper] h2[data-quickpaper-347ecaca]{\n\nposition: absolute;\n\nbackground-color: #cec8c8;\n\ncolor: white;\n\npadding: 5px 10px;\n\nfont-size: 14px;\n\nright: 20px;\n\ntop: 20px;\n\nuser-select: none;\n\nbox-shadow: -4px 4px 5px 1px #2b2828;\n\n}\n\n [quickpaper] h2>a[data-quickpaper-347ecaca]{\n\ntext-decoration: underline;\n\ncolor: rgb(65, 121, 243);\n\npadding: 0 10px;\n\n}\n\n [quickpaper]>a[data-quickpaper-347ecaca]{\n\nuser-select: none;\n\nposition: fixed;\n\ntransform: rotate(45deg);\n\nline-height: 1.6em;\n\ntransform-origin: 150px 23px;\n\ntext-align: center;\n\nfont-family: sans-serif;\n\ndisplay: inline-block;\n\nbottom: 53px;\n\nleft: -91px;\n\nwidth: 300px;\n\nbackground-color: #03a9f4;\n\noutline: 4px solid #03a9f4;\n\nborder: 2px dashed #ffffff;\n\ncolor: #ffffff;\n\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}

window.__etcpack__bundleSrc__['0']();