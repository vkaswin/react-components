"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[4908,6471,2800,2967,2849,3816,5369,5025,9718,5013,2746,7331],{14717:function(e,n,r){r.r(n),r.d(n,{useButtonLoader:function(){return u.useButtonLoader},useCookies:function(){return o.useCookies},useForm:function(){return i.useForm},useLocalStorage:function(){return s.useLocalStorage},useObserver:function(){return a.useObserver},useOnClickOutSide:function(){return l.useOnClickOutSide},useRouter:function(){return t.useRouter},useSessionStorage:function(){return c.useSessionStorage},useWindowSize:function(){return d.useWindowSize}});var t=r(7818),a=r(70266),u=r(41700),i=r(33943),o=r(76652),s=r(39843),c=r(12422),l=r(16596),d=r(94397)},41700:function(e,n,r){r.r(n),r.d(n,{useButtonLoader:function(){return u}});var t=r(70885),a=r(72791),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Click Me",n=(0,a.useState)(!1),r=(0,t.Z)(n,2),u=r[0],i=r[1],o=(0,a.useRef)();return(0,a.useEffect)((function(){u?(o.current.disabled=!0,o.current.innerHTML='Loading <i class="fas fa-spinner fa-spin"></i>'):(o.current.disabled=!1,o.current.innerHTML=e)}),[u]),[o,i]}},16596:function(e,n,r){r.r(n),r.d(n,{useOnClickOutSide:function(){return t}});var t=function(e,n){var r=function(){document.removeEventListener("click",t)},t=function(t){var a=t.target;null!==e&&void 0!==e&&e.current&&!e.current.contains(a)&&(r(),n())};return[function(){document.addEventListener("click",t)},r]}},76652:function(e,n,r){r.r(n),r.d(n,{useCookies:function(){return t}});var t=function(){return{setCookie:function(e){var n=e.name,r=e.value,t=e.days,a=new Date;a.setTime(a.getTime()+24*t*60*60*1e3);var u="; expires="+a.toUTCString();document.cookie=n+"="+r+u+"; path=/"},getCookie:function(e){var n=document.cookie.match(new RegExp("(^| )"+e+"=([^;]+)"));return n?n[2]:null},clearCookie:function(e){document.cookie=e+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"}}}},33943:function(e,n,r){r.r(n),r.d(n,{useForm:function(){return i}});var t=r(1413),a=r(70885),u=r(72791),i=function(){var e=(0,u.useRef)([]),n=(0,u.useRef)(!1),r=(0,u.useRef)([]),i=(0,u.useState)({}),o=(0,a.Z)(i,2),s=o[0],c=o[1];(0,u.useEffect)((function(){return document.addEventListener("input",d),function(){return document.removeEventListener("input",d)}}),[]);var l=(0,u.useCallback)((function(n){var t=n.required,a=void 0!==t&&t,u=n.minLength,i=void 0===u?null:u,o=n.maxLength,s=void 0===o?null:o,c=n.isNumber,l=void 0!==c&&c,d=n.pattern,m=void 0===d?null:d;return function(n){(n||null!==n&&void 0!==n&&n.name)&&!r.current.includes(n.name)&&(e.current.push({rules:{required:a,minLength:i,maxLength:s,isNumber:l,pattern:m},ref:n,name:n.name}),r.current.push(n.name))}}),[]),d=function(e){var r=e.target,a=r.name,u=r.value;if(n.current){var i=m({name:a,value:u});0===Object.keys(i).length?c((function(e){return delete e[a],(0,t.Z)({},e)})):c((function(e){return(0,t.Z)((0,t.Z)({},e),i)}))}},m=function(n){var r,t=n.name,a=n.value,u={},i=null!==(r=e.current.find((function(e){return e.name===t})))&&void 0!==r?r:{},o=i.rules,s=(o=void 0===o?{}:o).required,c=void 0===s?null:s,l=o.minLength,d=void 0===l?null:l,m=o.maxLength,f=void 0===m?null:m,v=o.pattern,h=void 0===v?null:v,g=i.ref,p=void 0===g?null:g;if(null!==p)return c&&""==String(a).trim()?(u[t]={type:"required",ref:p},u):d&&String(a.length).trim()<d?(u[t]={type:"minLength",ref:p},u):f&&String(a.length).trim()>f?(u[t]={type:"maxLength",ref:p},u):h&&!RegExp(h).test(a)?(u[t]={type:"pattern",ref:p},u):u};return{errors:s,register:l,handleSubmit:function(r){return function(){n.current=!0;var a=e.current.reduce((function(e,n){var r=n.name,a=n.ref.value;return(0,t.Z)((0,t.Z)({},e),m({name:r,value:a}))}),{});c((function(n){if(0===Object.keys(a).length){var u={};e.current.forEach((function(e){var n=e.rules.isNumber,r=e.ref.value,t=e.name;u[t]=n?parseInt(r):r})),r(u)}return(0,t.Z)((0,t.Z)({},n),a)}))}},getValue:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=e.current.find((function(e){var r=e.name;return n===r}));return r?null===r||void 0===r?void 0:r.ref.value:""},setValue:function(e){console.log(e)},reset:function(){e.current.forEach((function(e){e.ref.value=""}))},setError:function(e){console.log(e)},clearError:function(e){console.log(e)}}}},39843:function(e,n,r){r.r(n),r.d(n,{useLocalStorage:function(){return t}});var t=function(){return{getItem:function(e){return JSON.parse(localStorage.getItem(e))},setItem:function(e){var n=e.key,r=void 0===n?"":n,t=e.value,a=void 0===t?"":t;localStorage.setItem(r,JSON.stringify(a))},removeItem:function(e){localStorage.removeItem(e)},reset:function(){localStorage.clear()}}}},70266:function(e,n,r){r.r(n),r.d(n,{useObserver:function(){return u}});var t=r(70885),a=r(72791),u=function(){var e=(0,a.useRef)(),n=(0,a.useState)(!1),r=(0,t.Z)(n,2),u=r[0],i=r[1],o={root:null,rootMargin:"0px",threshold:1};(0,a.useEffect)((function(){var n=new IntersectionObserver(s,o);return e.current&&n.observe(e.current),function(){e.current&&n.unobserve(e.current)}}),[]);var s=function(e){var n=(0,t.Z)(e,1)[0];i(n.isIntersecting)};return{observerRef:e,isVisible:u}}},7818:function(e,n,r){r.r(n),r.d(n,{useRouter:function(){return i}});var t=r(1413),a=r(16871),u=r(2703),i=function(){var e=(0,a.s0)(),n=(0,a.TH)(),r=(0,a.UO)();return{push:e,goBack:function(){return e(-1)},pathName:n.pathname,query:(0,t.Z)((0,t.Z)({},(0,u.parseQuery)(n.search)),r)}}},12422:function(e,n,r){r.r(n),r.d(n,{useSessionStorage:function(){return t}});var t=function(){return{getItem:function(e){return JSON.parse(sessionStorage.getItem(e))},setItem:function(e){var n=e.key,r=void 0===n?"":n,t=e.value,a=void 0===t?"":t;sessionStorage.setItem(r,JSON.stringify(a))},removeItem:function(e){sessionStorage.removeItem(e)},reset:function(){sessionStorage.clear()}}}},94397:function(e,n,r){r.r(n),r.d(n,{useWindowSize:function(){return i}});var t=r(1413),a=r(70885),u=r(72791),i=function(){var e=window,n=e.innerWidth,r=e.innerHeight,i=(0,u.useState)({width:n,height:r}),o=(0,a.Z)(i,2),s=o[0],c=o[1];(0,u.useEffect)((function(){return window.addEventListener("resize",l),function(){return window.removeEventListener("resize",l)}}),[]);var l=function(e){var n=e.target,r=n.innerWidth,a=n.innerHeight;c((0,t.Z)((0,t.Z)({},s),{},{width:r,height:a}))};return{width:s.width,height:s.height}}},79667:function(e,n,r){r.r(n);var t=r(72791),a=r(14717),u=(r(53529),r(80184)),i={AN:"Andaman and Nicobar Islands",AP:"Andhra Pradesh",AR:"Arunachal Pradesh",AS:"Assam",BR:"Bihar",CG:"Chandigarh",CH:"Chhattisgarh",DN:"Dadra and Nagar Haveli",DD:"Daman and Diu",DL:"Delhi",GA:"Goa",GJ:"Gujarat",HR:"Haryana",HP:"Himachal Pradesh",JK:"Jammu and Kashmir",JH:"Jharkhand",KA:"Karnataka",KL:"Kerala",LA:"Ladakh",LD:"Lakshadweep",MP:"Madhya Pradesh",MH:"Maharashtra",MN:"Manipur",ML:"Meghalaya",MZ:"Mizoram",NL:"Nagaland",OR:"Odisha",PY:"Puducherry",PB:"Punjab",RJ:"Rajasthan",SK:"Sikkim",TN:"Tamil Nadu",TS:"Telangana",TR:"Tripura",UP:"Uttar Pradesh",UK:"Uttarakhand",WB:"West Bengal"};n.default=function(){var e=(0,a.useForm)(),n=e.errors,r=e.register,o=e.handleSubmit,s=e.reset,c=(e.getValue,function(e){var n=e.error,r=e.message;return n?n&&(0,u.jsx)("span",{className:"error-msg",children:r[n.type]}):null});return(0,u.jsxs)(t.Fragment,{children:[(0,u.jsx)("h1",{children:"Form Validation"}),(0,u.jsx)("div",{className:"row",children:(0,u.jsxs)("div",{className:"col-md-4 mb-3",children:[(0,u.jsx)("label",{className:"form-label",children:"Username"}),(0,u.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter username",name:"userName",ref:r({required:!0}),autoComplete:"off"}),(0,u.jsx)(c,{error:null===n||void 0===n?void 0:n.userName,message:{required:"Please enter username"}})]})}),(0,u.jsx)("div",{className:"row",children:(0,u.jsxs)("div",{className:"col-md-4 mb-3",children:[(0,u.jsx)("label",{className:"form-label",children:"Email ID"}),(0,u.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter email id",name:"emailId",ref:r({required:!0,pattern:/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/}),autoComplete:"off"}),(0,u.jsx)(c,{error:null===n||void 0===n?void 0:n.emailId,message:{required:"Please enter email id",pattern:"Invalid email id"}})]})}),(0,u.jsx)("div",{className:"row",children:(0,u.jsxs)("div",{className:"col-md-4 mb-3",children:[(0,u.jsx)("label",{className:"form-label",children:"Phone Number"}),(0,u.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter phone number",name:"phone",maxLength:10,required:!0,ref:r({required:!0,isNumber:!0,pattern:/^[0-9]{10}$/,minLength:10}),autoComplete:"off"}),(0,u.jsx)(c,{error:null===n||void 0===n?void 0:n.phone,message:{required:"Please enter phone number",pattern:"Phone number should contain number only",minLength:"Phone number should contain atleast 10 digit"}})]})}),(0,u.jsx)("div",{className:"row",children:(0,u.jsxs)("div",{className:"col-md-4 mb-3",children:[(0,u.jsx)("label",{className:"form-label",children:"State"}),(0,u.jsxs)("select",{name:"state",ref:r({required:!0}),className:"form-select",defaultValue:"",children:[(0,u.jsx)("option",{value:"",disabled:!0,children:"Select State"}),Object.values(i).map((function(e,n){return(0,u.jsx)("option",{value:e,children:e},n)}))]}),(0,u.jsx)(c,{error:null===n||void 0===n?void 0:n.state,message:{required:"Please select state"}})]})}),(0,u.jsx)("button",{onClick:o((function(e){console.log(e),s()})),children:"Submit"})]})}},53529:function(e,n,r){r.r(n),n.default={}}}]);
//# sourceMappingURL=pages-FormValidation.7094dc77.chunk.js.map