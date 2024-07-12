(()=>{"use strict";var e={82:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(601),s=n.n(r),o=n(314),a=n.n(o)()(s());a.push([e.id,"element-divider hr{margin:15px 0}element-divider hr.transparent{opacity:0}",""]);const i=a},60:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(601),s=n.n(r),o=n(314),a=n.n(o)()(s());a.push([e.id,"element-button{margin-bottom:15px}element-button button{cursor:pointer;width:100%;height:40px}",""]);const i=a},636:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(601),s=n.n(r),o=n(314),a=n.n(o)()(s());a.push([e.id,"element-card-message{width:100%;max-width:300px;background-color:#f5f5f5;padding:30px;border-radius:5px;box-shadow:rgba(99,99,99,.2) 0px 2px 8px 0px}element-card-message.success{border:solid green 1px}element-card-message.error{border:solid red 1px}",""]);const i=a},782:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(601),s=n.n(r),o=n(314),a=n.n(o)()(s());a.push([e.id,"element-input{display:flex;flex-direction:column}element-input span{font-size:18px}element-input input{height:40px;padding:0 15px;margin:0 0 15px 0;width:calc(100% - 30px);border-radius:5px;font-size:18px}",""]);const i=a},954:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(601),s=n.n(r),o=n(314),a=n.n(o)()(s());a.push([e.id,"element-notification{position:fixed;top:0;left:0;right:0;width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;gap:30px}",""]);const i=a},711:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(601),s=n.n(r),o=n(314),a=n.n(o)()(s());a.push([e.id,"structure-card{box-shadow:rgba(50,50,93,.25) 0px 6px 12px -2px,rgba(0,0,0,.3) 0px 3px 7px -3px;max-width:400px;width:100%;padding:30px 15px;border-radius:5px}",""]);const i=a},103:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(601),s=n.n(r),o=n(314),a=n.n(o)()(s());a.push([e.id,"structure-center-display{position:fixed;top:0;bottom:0;left:0;right:0;display:flex;align-items:center;justify-content:center;flex-direction:column}",""]);const i=a},565:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(601),s=n.n(r),o=n(314),a=n.n(o)()(s());a.push([e.id,"structure-container{width:100%;display:flex;flex-direction:column}structure-container .content{max-width:991.98px;width:100%;margin:0 auto;padding:0 12px;display:flex;flex-direction:column}structure-container .content.align-start{align-items:start}structure-container .content.align-end{align-items:end}structure-container .content.align-center{align-items:center}",""]);const i=a},67:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(601),s=n.n(r),o=n(314),a=n.n(o)()(s());a.push([e.id,"structure-form form{display:flex;flex-direction:column}",""]);const i=a},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,s,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),s&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=s):d[4]="".concat(s)),t.push(d))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},a=[],i=0;i<e.length;i++){var c=e[i],l=r.base?c[0]+r.base:c[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var p=n(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var h=s(m,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var o=r(e=e||[],s=s||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var i=n(o[a]);t[i].references--}for(var c=r(e,s),l=0;l<o.length;l++){var d=n(o[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=c}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,s&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,n.d({},{E:()=>V,Q:()=>W});var r=n(72),s=n.n(r),o=n(825),a=n.n(o),i=n(659),c=n.n(i),l=n(56),d=n.n(l),u=n(540),p=n.n(u),m=n(113),h=n.n(m),f=n(954),x={};x.styleTagTransform=h(),x.setAttributes=d(),x.insert=c().bind(null,"head"),x.domAPI=a(),x.insertStyleElement=p(),s()(f.A,x),f.A&&f.A.locals&&f.A.locals;class v extends HTMLElement{constructor(e){super()}add(e){this.appendChild(e),setTimeout((()=>{this.removeChild(e)}),3500)}}customElements.define("element-notification",v);class g extends HTMLElement{constructor(e){super(),this.innerHTML="Chat"}}customElements.define("page-chat",g);class y extends HTMLElement{constructor(e){super(),this.innerHTML="Log In"}}customElements.define("page-log-in",y);const A=new class{constructor(e,t){this.url=e,this.isHttps=t}signIn(e,t){return n=this,r=void 0,o=function*(){const n=yield fetch(`http${this.isHttps?"s":""}://${this.url}/api/user`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:e,password:t})});if(!n.ok)throw yield n.text();return yield n.text()},new((s=void 0)||(s=Promise))((function(e,t){function a(e){try{c(o.next(e))}catch(e){t(e)}}function i(e){try{c(o.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(a,i)}c((o=o.apply(n,r||[])).next())}));var n,r,s,o}}("localhost:80",!1);var b=n(82),w={};w.styleTagTransform=h(),w.setAttributes=d(),w.insert=c().bind(null,"head"),w.domAPI=a(),w.insertStyleElement=p(),s()(b.A,w),b.A&&b.A.locals&&b.A.locals;class E extends HTMLElement{constructor(e){super();const t=document.createElement("hr");e.transparent&&(t.className="transparent"),this.appendChild(t)}}customElements.define("element-divider",E);var T=n(60),C={};C.styleTagTransform=h(),C.setAttributes=d(),C.insert=c().bind(null,"head"),C.domAPI=a(),C.insertStyleElement=p(),s()(T.A,C),T.A&&T.A.locals&&T.A.locals;class M extends HTMLElement{constructor(e){super();const t=document.createElement("button");switch(e.type){case"submit":t.type="submit";break;case"primary":case"secondary":t.type="button"}if(void 0!==e.text){const n=document.createElement("span");n.innerHTML=e.text,t.appendChild(n)}void 0!==e.onClick&&t.addEventListener("click",e.onClick),this.appendChild(t)}}customElements.define("element-button",M);var L=n(782),H={};H.styleTagTransform=h(),H.setAttributes=d(),H.insert=c().bind(null,"head"),H.domAPI=a(),H.insertStyleElement=p(),s()(L.A,H),L.A&&L.A.locals&&L.A.locals;class P extends HTMLElement{constructor(e){super();const t=document.createElement("input");switch(t.name=e.name,e.type){case"text":t.type="text";break;case"password":t.type="password"}if(void 0!==e.label){const t=document.createElement("span");t.innerHTML=e.label,this.appendChild(t)}this.appendChild(t)}}customElements.define("element-input",P);class S extends HTMLElement{constructor(e){super();const t=document.createElement(e.level);t.innerHTML=e.text,t.style.textAlign=e.align,this.appendChild(t)}}customElements.define("element-title",S);var I=n(711),N={};N.styleTagTransform=h(),N.setAttributes=d(),N.insert=c().bind(null,"head"),N.domAPI=a(),N.insertStyleElement=p(),s()(I.A,N),I.A&&I.A.locals&&I.A.locals;class k extends HTMLElement{constructor(e){super(),e.childrens.forEach((e=>this.appendChild(e)))}}customElements.define("structure-card",k);var j=n(103),O={};O.styleTagTransform=h(),O.setAttributes=d(),O.insert=c().bind(null,"head"),O.domAPI=a(),O.insertStyleElement=p(),s()(j.A,O),j.A&&j.A.locals&&j.A.locals;class $ extends HTMLElement{constructor(e){super(),this.appendChild(e.children)}}customElements.define("structure-center-display",$);var J=n(565),z={};z.styleTagTransform=h(),z.setAttributes=d(),z.insert=c().bind(null,"head"),z.domAPI=a(),z.insertStyleElement=p(),s()(J.A,z),J.A&&J.A.locals&&J.A.locals;class D extends HTMLElement{constructor(e){super();const t=document.createElement("div");t.className=`content align-${e.align}`,e.childrens.forEach((e=>t.appendChild(e))),this.appendChild(t)}}customElements.define("structure-container",D);var F=n(636),R={};R.styleTagTransform=h(),R.setAttributes=d(),R.insert=c().bind(null,"head"),R.domAPI=a(),R.insertStyleElement=p(),s()(F.A,R),F.A&&F.A.locals&&F.A.locals;class U extends HTMLElement{constructor(e){super(),this.className=`${e.success?"success":""} ${e.error?"error":""}`;const t=document.createElement("p");t.innerHTML=e.text,this.appendChild(t)}}customElements.define("element-card-message",U);var _=n(67),q={};q.styleTagTransform=h(),q.setAttributes=d(),q.insert=c().bind(null,"head"),q.domAPI=a(),q.insertStyleElement=p(),s()(_.A,q),_.A&&_.A.locals&&_.A.locals;class B extends HTMLElement{constructor(e){super();const t=document.createElement("form");e.childrens.forEach((e=>t.appendChild(e))),t.addEventListener("submit",(t=>{return n=this,r=void 0,o=function*(){t.preventDefault();const n=new Map;e.inputsName.forEach((e=>{const{value:r}=t.target[e];n.set(e,r)}));try{const t=yield e.onSubmit(n);V.add(new U({text:t,success:!0})),console.log(t),void 0!==e.onSuccess&&e.onSuccess()}catch(e){V.add(new U({text:`${e}`,error:!0})),console.error(e)}},new((s=void 0)||(s=Promise))((function(e,t){function a(e){try{c(o.next(e))}catch(e){t(e)}}function i(e){try{c(o.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(a,i)}c((o=o.apply(n,r||[])).next())}));var n,r,s,o})),this.appendChild(t)}}customElements.define("structure-form",B);class Q extends HTMLElement{constructor(e){super(),this.appendChild(new $({children:new D({align:"center",childrens:[new k({childrens:[new B({inputsName:["name","password"],onSubmit:e=>{return t=this,n=void 0,s=function*(){const t=e.get("name"),n=e.get("password");return yield A.signIn(t,n)},new((r=void 0)||(r=Promise))((function(e,o){function a(e){try{c(s.next(e))}catch(e){o(e)}}function i(e){try{c(s.throw(e))}catch(e){o(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(a,i)}c((s=s.apply(t,n||[])).next())}));var t,n,r,s},onSuccess:()=>{W.setPage("log-in")},childrens:[new S({text:"Criar Conta !",align:"center",level:"h2"}),new P({type:"text",name:"name",label:"Nome"}),new P({type:"password",name:"password",label:"Senha"}),new E({transparent:!0}),new M({text:"Criar",type:"submit"}),new M({text:"Já tenho conta",type:"primary",onClick:()=>W.setPage("log-in")})]})]})]})}))}}customElements.define("page-sign-in",Q);class G extends HTMLElement{constructor(e){super(),this.pages=new Map}addPage(e,t){this.pages.set(e,t)}setPage(e){const t=this.pages.get(e);void 0!==t?(this.innerHTML="",this.appendChild(t)):console.error("Page not found !")}}customElements.define("structure-router",G);const K=document.getElementById("App");if(null===K)throw"App not found !";const V=new v({}),W=new G({});W.addPage("sign-in",new Q({})),W.addPage("log-in",new y({})),W.addPage("chat",new g({})),K.appendChild(V),K.appendChild(W),W.setPage("sign-in")})();