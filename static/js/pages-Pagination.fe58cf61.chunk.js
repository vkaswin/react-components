"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[6480,7120,7079,9945,1304],{21155:function(t,e,n){n.r(e);var r=n(74165),o=n(15861),a=n(70885),s=n(72791),c=n(59930),u=n(83906),i=n(2703),l=(n(30407),n(14717)),p=n(80184);e.default=function(){var t=(0,l.useRouter)(),e=t.query.page,n=(0,s.useState)([]),d=(0,a.Z)(n,2),f=d[0],m=d[1],h=(0,s.useState)(1),v=(0,a.Z)(h,2),g=v[0],P=v[1];(0,s.useEffect)((function(){x()}),[e]);var x=function(){var t=(0,o.Z)((0,r.Z)().mark((function t(){var n,o,a,s,c,l;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={page:e,limit:10},t.prev=1,t.next=4,(0,u.getAllPosts)({params:n});case 4:o=t.sent,a=o.data,s=a.posts,c=a.total,l=a.limit,m(s),P(Math.ceil(c/l)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),(0,i.toast)({type:"error",message:t.t0.message});case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(){return t.apply(this,arguments)}}();return 0===f.length?null:(0,p.jsxs)(s.Fragment,{children:[(0,p.jsx)("div",{className:"row",children:(0,p.jsx)("div",{className:"col-md-6",children:f.map((function(t,e){var n=t.title,r=t.body;return(0,p.jsx)(c.Accordain,{title:n,content:r},e)}))})}),g>1&&(0,p.jsx)("div",{className:"d-flex justify-content-start py-4",children:(0,p.jsx)(c.Pagination,{activePage:parseInt(null!==e&&void 0!==e?e:1),totalPages:g,onPageChange:function(e){t.push({search:"?page=".concat(e)})}})})]})}},83906:function(t,e,n){n.r(e),n.d(e,{fileUpload:function(){return a},getAllPosts:function(){return c},getAllProducts:function(){return s}});var r=n(8176),o=n(37938),a=function(t){var e=t.data,n=t.onUploadProgress;return(0,r.axiosIntance)({method:"post",url:o.endpoints.FILE_UPLOAD,data:e,onUploadProgress:n})},s=function(){return(0,r.axiosIntance)({method:"get",url:o.endpoints.GET_ALL_PRODUCTS})},c=function(t){var e=t.params;return(0,r.axiosIntance)({method:"get",url:o.endpoints.GET_ALL_POSTS,params:e})}},8176:function(t,e,n){n.r(e),n.d(e,{axiosIntance:function(){return o}});var r=n(74569),o=n.n(r)().create();o.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),o.interceptors.response.use((function(t){return t}),(function(t){return 401===t.response.status&&(localStorage.clear(),window.location.href="/"),Promise.reject(t.response)}))},37938:function(t,e,n){n.r(e),n.d(e,{endpoints:function(){return r}});var r={FILE_UPLOAD:"http://doodlebluelive.com:2319/api/v1/upload/uploadFile",GET_ALL_PRODUCTS:"https://dummyjson.com/products",GET_ALL_POSTS:"https://dummyjson.com/posts"}},30407:function(t,e,n){n.r(e),e.default={}}}]);
//# sourceMappingURL=pages-Pagination.fe58cf61.chunk.js.map