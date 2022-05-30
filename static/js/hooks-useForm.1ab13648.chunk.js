"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[3816],{33943:function(e,n,r){r.r(n),r.d(n,{useForm:function(){return o}});var t=r(1413),u=r(70885),i=r(72791),o=function(){var e=(0,i.useRef)([]),n=(0,i.useRef)(!1),r=(0,i.useRef)([]),o=(0,i.useState)({}),a=(0,u.Z)(o,2),l=a[0],c=a[1];(0,i.useEffect)((function(){return document.addEventListener("input",v),function(){return document.removeEventListener("input",v)}}),[]);var f=(0,i.useCallback)((function(n){var t=n.required,u=void 0!==t&&t,i=n.minLength,o=void 0===i?null:i,a=n.maxLength,l=void 0===a?null:a,c=n.isNumber,f=void 0!==c&&c,v=n.pattern,s=void 0===v?null:v;return function(n){(n||null!==n&&void 0!==n&&n.name)&&!r.current.includes(n.name)&&(e.current.push({rules:{required:u,minLength:o,maxLength:l,isNumber:f,pattern:s},ref:n,name:n.name}),r.current.push(n.name))}}),[]),v=function(e){var r=e.target,u=r.name,i=r.value;if(n.current){var o=s({name:u,value:i});0===Object.keys(o).length?c((function(e){return delete e[u],(0,t.Z)({},e)})):c((function(e){return(0,t.Z)((0,t.Z)({},e),o)}))}},s=function(n){var r,t=n.name,u=n.value,i={},o=null!==(r=e.current.find((function(e){return e.name===t})))&&void 0!==r?r:{},a=o.rules,l=(a=void 0===a?{}:a).required,c=void 0===l?null:l,f=a.minLength,v=void 0===f?null:f,s=a.maxLength,m=void 0===s?null:s,d=a.pattern,g=void 0===d?null:d,h=o.ref,p=void 0===h?null:h;if(null!==p)return c&&""==String(u).trim()?(i[t]={type:"required",ref:p},i):v&&String(u.length).trim()<v?(i[t]={type:"minLength",ref:p},i):m&&String(u.length).trim()>m?(i[t]={type:"maxLength",ref:p},i):g&&!RegExp(g).test(u)?(i[t]={type:"pattern",ref:p},i):i};return{errors:l,register:f,handleSubmit:function(r){return function(){n.current=!0;var u=e.current.reduce((function(e,n){var r=n.name,u=n.ref.value;return(0,t.Z)((0,t.Z)({},e),s({name:r,value:u}))}),{});c((function(n){if(0===Object.keys(u).length){var i={};e.current.forEach((function(e){var n=e.rules.isNumber,r=e.ref.value,t=e.name;i[t]=n?parseInt(r):r})),r(i)}return(0,t.Z)((0,t.Z)({},n),u)}))}},getValue:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=e.current.find((function(e){var r=e.name;return n===r}));return r?null===r||void 0===r?void 0:r.ref.value:""},setValue:function(e){console.log(e)},reset:function(){e.current.forEach((function(e){e.ref.value=""}))},setError:function(e){console.log(e)},clearError:function(e){console.log(e)}}}}}]);
//# sourceMappingURL=hooks-useForm.1ab13648.chunk.js.map