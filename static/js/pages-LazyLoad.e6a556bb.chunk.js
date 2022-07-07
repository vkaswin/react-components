"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[2820,2298,7079,9945,1304],{51722:function(t,e,n){n.r(e);var r=n(88214),s=n(15861),c=n(70885),o=n(72791),a=n(83906),i=n(2703),u=n(59930),l=(n(52901),n(80184));e.default=function(){var t=(0,o.useState)([]),e=(0,c.Z)(t,2),n=e[0],d=e[1],p={root:null,rootMargin:"-70px",threshold:1};(0,o.useEffect)((function(){if(0!==n.length){var t=document.querySelectorAll("[data-src]"),e=new IntersectionObserver((function(t){t.forEach((function(t){var n=t.isIntersecting,r=t.target;n&&(r.src=r.getAttribute("data-src"),e.unobserve(r))}))}),p);return 0!==t.length&&t.forEach((function(t){return e.observe(t)})),function(){0!==t.length&&t.forEach((function(t){return e.unobserve(t)}))}}}),[n]),(0,o.useEffect)((function(){f()}),[]);var f=function(){var t=(0,s.Z)((0,r.Z)().mark((function t(){var e,n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,a.getAllProducts)();case 3:e=t.sent,n=e.data.products,d(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),(0,i.toast)({type:"error",message:t.t0.message});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return 0===n.length?null:(0,l.jsx)(o.Fragment,{children:(0,l.jsx)("div",{className:"product-wrapper",children:n.map((function(t,e){var n=t.title,r=t.description,s=t.price,c=t.thumbnail,o=t.rating;return(0,l.jsxs)("div",{className:"product-card",children:[(0,l.jsxs)("div",{className:"product-info",children:[(0,l.jsx)("div",{className:"product-img",children:(0,l.jsx)("img",{"data-src":c})}),(0,l.jsxs)("div",{className:"rating",children:[(0,l.jsx)(u.Rating,{rating:+o.toFixed(0),color:"#fa9f43",size:"15"}),(0,l.jsx)("b",{children:Number(s).toLocaleString("en-US",{style:"currency",currency:"USD"})})]}),(0,l.jsxs)("div",{className:"product-title",children:[(0,l.jsx)("b",{children:n}),(0,l.jsx)("span",{children:r})]})]}),(0,l.jsxs)("div",{className:"product-btn",children:[(0,l.jsxs)("button",{className:"wishlist-btn",children:[(0,l.jsx)("i",{className:"far fa-heart"})," Wishlist"]}),(0,l.jsxs)("button",{className:"cart-btn",children:[(0,l.jsx)("i",{className:"fas fa-shopping-cart"})," View In Cart"]})]})]},e)}))})})}},83906:function(t,e,n){n.r(e),n.d(e,{fileUpload:function(){return c},getAllPosts:function(){return a},getAllProducts:function(){return o},getProductList:function(){return i}});var r=n(8176),s=n(37938),c=function(t){var e=t.data,n=t.onUploadProgress;return(0,r.axiosIntance)({method:"post",url:s.endpoints.FILE_UPLOAD,data:e,onUploadProgress:n})},o=function(){return(0,r.axiosIntance)({method:"get",url:s.endpoints.GET_ALL_PRODUCTS})},a=function(t){var e=t.params;return(0,r.axiosIntance)({method:"get",url:s.endpoints.GET_ALL_POSTS,params:e})},i=function(){return(0,r.axiosIntance)({method:"get",url:s.endpoints.PRODUCT_LIST})}},8176:function(t,e,n){n.r(e),n.d(e,{axiosIntance:function(){return s}});var r=n(74569),s=n.n(r)().create();s.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),s.interceptors.response.use((function(t){return t}),(function(t){return 401===t.response.status&&(localStorage.clear(),window.location.href="/"),Promise.reject(t.response)}))},37938:function(t,e,n){n.r(e),n.d(e,{endpoints:function(){return r}});var r={FILE_UPLOAD:"http://doodlebluelive.com:2319/api/v1/upload/uploadFile",GET_ALL_PRODUCTS:"https://dummyjson.com/products",GET_ALL_POSTS:"https://dummyjson.com/posts",PRODUCT_LIST:"https://fakestoreapi.com/products"}},52901:function(t,e,n){n.r(e),e.default={}}}]);
//# sourceMappingURL=pages-LazyLoad.e6a556bb.chunk.js.map