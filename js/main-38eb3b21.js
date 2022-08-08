"use strict";(self.webpackChunkwebpack5_react=self.webpackChunkwebpack5_react||[]).push([[179],{707:function(e,t,n){var r=n(363),a=n.n(r),u=n(745),c=n(711),l=n(998),o=l.v9,i=n(427);function s(e){return void 0===e&&(e=1),new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var m,f=(0,i.oM)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(p.pending,(function(e){e.status="loading"})).addCase(p.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload})).addCase(p.rejected,(function(e){e.status="failed"}))}}),d=(m=f.actions).increment,b=m.decrement,h=m.incrementByAmount,p=(0,i.hg)("counter/incrementByAmount",(function(e){return t=void 0,n=void 0,a=function(){return function(e,t){var n,r,a,u,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return u={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function l(u){return function(l){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(a=2&u[0]?r.return:u[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,u[1])).done)return a;switch(r=0,a&&(u=[2&u[0],a.value]),u[0]){case 0:case 1:a=u;break;case 4:return c.label++,{value:u[1],done:!1};case 5:c.label++,r=u[1],u=[0];continue;case 7:u=c.ops.pop(),c.trys.pop();continue;default:if(!((a=(a=c.trys).length>0&&a[a.length-1])||6!==u[0]&&2!==u[0])){c=0;continue}if(3===u[0]&&(!a||u[1]>a[0]&&u[1]<a[3])){c.label=u[1];break}if(6===u[0]&&c.label<a[1]){c.label=a[1],a=u;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(u);break}a[2]&&c.ops.pop(),c.trys.pop();continue}u=t.call(e,c)}catch(e){u=[6,e],r=0}finally{n=a=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,l])}}}(this,(function(t){switch(t.label){case 0:return[4,s(e)];case 1:return[2,t.sent().data]}}))},new((r=void 0)||(r=Promise))((function(e,u){function c(e){try{o(a.next(e))}catch(e){u(e)}}function l(e){try{o(a.throw(e))}catch(e){u(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(c,l)}o((a=a.apply(t,n||[])).next())}));var t,n,r,a})),v=function(e){return e.counter.value},E=f.reducer,y={row:"Fvt4hs6j",value:"TxdqTQqd",button:"YQROt3eF",textbox:"Z5PhosYO","async-custom-button":"DueGyi3m",asyncCustomButton:"DueGyi3m"};function w(){var e=o(v),t=(0,l.I0)(),n=(0,r.useState)("2"),u=n[0],c=n[1];return a().createElement("div",null,a().createElement("div",{className:y.row},a().createElement("button",{className:y.button,"aria-label":"Increment value",onClick:function(){return t(d())}},"+"),a().createElement("span",{className:y.value},e),a().createElement("button",{className:y.button,"aria-label":"Decrement value",onClick:function(){return t(b())}},"-")),a().createElement("div",{className:y.row},a().createElement("input",{className:y.textbox,"aria-label":"Set increment amount",value:u,onChange:function(e){return c(e.target.value)}}),a().createElement("button",{className:y.button,onClick:function(){return t(h(Number(u)||0))}},"Add Amount"),a().createElement("button",{className:[y["async-custom-button"],y.button].join(" "),onClick:function(){return t(p(Number(u)||0))}},"Add Async")))}var k=n(974),x=[{path:"/",component:function(){return a().createElement("div",null,a().createElement(k.j3,null))},children:[{path:"/",index:!0,component:function(){return a().createElement(a().Fragment,null,a().createElement("main",null,a().createElement("h2",null,"Welcome to the homepage!"),a().createElement("p",null,"You can do this, I believe in you.")),a().createElement("nav",null,a().createElement(c.rU,{to:"/about"},"About")))}},{path:"about",component:(0,r.lazy)((function(){return n.e(793).then(n.bind(n,632))}))}]}],g=function(e){var t=[];return e.forEach((function(e){t.push({path:e.path,element:a().createElement(r.Suspense,{fallback:a().createElement("div",null,"loading...")},a().createElement(e.component,null)),children:e.children&&g(e.children)})})),t},C=function(){return(0,k.V$)(g(x))},N=(0,i.xC)({reducer:{counter:E}});u.createRoot(document.getElementById("root")).render(a().createElement(a().StrictMode,null,a().createElement(l.zt,{store:N},a().createElement(c.UT,null,a().createElement((function(){return a().createElement(a().Fragment,null,a().createElement("h1",null,"Welcome to React Router!"),a().createElement(C,null),a().createElement("hr",null),a().createElement(w,null))}),null)))))},363:function(e){e.exports=React},533:function(e){e.exports=ReactDOM}},function(e){e.O(0,[514,216],(function(){return 707,e(e.s=707)})),e.O()}]);