(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(34)},27:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(17),o=n.n(r),l=(n(27),n(21)),u=n(6),i=n(1),s=n(8),d=n(11),m=n.n(d),f=n(18),p=function(){var e=Object(f.a)(m.a.mark(function e(t,n){var a,c;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://mate-api.herokuapp.com").concat(t),n);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Failed to load data ".concat(t));case 5:return e.next=7,a.json();case 7:return c=e.sent,e.abrupt("return",c.data||c);case 9:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),b=function(){return p("/todos").then(function(e){return e.filter(function(e){return 1182===e.userId})})},h=function(e){return p("/todos/".concat(e),{method:"DELETE"})},E=function(e){var t=e.addTodo,n=Object(a.useState)(""),r=Object(u.a)(n,2),o=r[0],l=r[1];return c.a.createElement("form",{onSubmit:function(e){var n;e.preventDefault(),(n={userId:1182,title:o,completed:!1},p("/todos",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(n)})).then(t),l("")}},c.a.createElement("input",{type:"text",className:"new-todo",value:o,placeholder:"What needs to be done?",onChange:function(e){l(e.target.value)},required:!0}))},v=n(19),N=n.n(v),j=function(e){var t=e.todo,n=e.deleteItem,r=e.setStatus,o=e.setNewTitle,l=Object(a.useState)(t.completed),i=Object(u.a)(l,2),s=i[0],d=i[1],m=Object(a.useState)(!1),f=Object(u.a)(m,2),b=f[0],E=f[1],v=Object(a.useState)(t.title),j=Object(u.a)(v,2),O=j[0],y=j[1],g=Object(a.useRef)(null),k=function(e,t){var n,a;d(t.target.checked),(n=e,a=t.target.checked,p("/todos/".concat(n),{method:"PATCH",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({completed:a})})).catch(function(){d(!t.target.checked)}),r(e,t.target.checked)};return c.a.createElement("li",{className:N()({completed:t.completed,editing:b})},c.a.createElement("div",{className:"view"},c.a.createElement("input",{type:"checkbox",className:"toggle",checked:s,onChange:function(e){return k(t.id,e)}}),c.a.createElement("label",null,t.title),c.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return e=t.id,void h(e).then(function(e){return n(e.id)});var e}}),c.a.createElement("button",{type:"button",className:"editInput",title:"Edit title",onClick:function(){E(!0),setTimeout(function(){g.current.focus()})}})),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),E(!1),y(t.title),function(e,t){p("/todos/".concat(e),{method:"PATCH",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({title:t})})}(t.id,O),o(t.id,O)}},c.a.createElement("input",{type:"text",className:"edit",value:O,onChange:function(e){y(e.target.value)},ref:g,onBlur:function(){return E(!1)}})))},O=function(e){var t=e.items,n=e.deleteItem,a=e.setStatus,r=e.setNewTitle,o=t.sort(function(e,t){return t.id-e.id});return c.a.createElement("ul",{className:"todo-list"},o.map(function(e){return c.a.createElement(j,{key:e.id,todo:e,deleteItem:n,setStatus:a,setNewTitle:r})}))};O.defaultProp={completed:!1,title:"No title"};var y=function(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(""),d=Object(u.a)(o,2),m=d[0],f=d[1],p=Object(i.d)().pathname;Object(a.useEffect)(function(){b().then(r)},[]);var v=Object(a.useCallback)(function(e){if(null!==n)switch(e){case"/completed":return n.filter(function(e){return e.completed});case"/active":return n.filter(function(e){return!e.completed});default:return n}},[n]),N=Object(a.useMemo)(function(){return v(p)},[p,v]);Object(a.useEffect)(function(){if(null!==n){var e=n.filter(function(e){return!e.completed}).length;f(e)}},[n]);var j=Object(a.useCallback)(function(e){r(function(t){return[].concat(Object(l.a)(t),[e])})},[]),y=Object(a.useCallback)(function(e){r(function(t){return t.filter(function(t){return t.id!==e})})},[]);return null===n?c.a.createElement("div",{className:"loading"},"Loading..."):c.a.createElement("section",{className:"todoapp"},c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,"todos"),c.a.createElement(E,{addTodo:j})),c.a.createElement("section",{className:"main"},c.a.createElement(O,{items:N,deleteItem:y,setStatus:function(e,t){r(function(n){return n.map(function(n){return n.id===e&&(n.completed=t),n})})},setNewTitle:function(e,t){r(function(n){return n.map(function(n){return n.id===e&&(n.title=t),n})})}})),n.length>0&&c.a.createElement("footer",{className:"footer"},c.a.createElement("span",{className:"todo-count"},m," items left"),c.a.createElement("ul",{className:"filters"},c.a.createElement("li",null,c.a.createElement(s.b,{to:"/",activeClassName:"selected",exact:!0},"All")),c.a.createElement("li",null,c.a.createElement(s.b,{to:"/active",activeClassName:"selected"},"Active")),c.a.createElement("li",null,c.a.createElement(s.b,{to:"/completed",activeClassName:"selected"},"Completed"))),n.some(function(e){return e.completed})&&c.a.createElement("button",{type:"button",className:"clear-completed",onClick:function(){var e=n.filter(function(e){return e.completed}),t=!0,a=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(t=(o=l.next()).done);t=!0){var u=o.value;h(u.id)}}catch(i){a=!0,c=i}finally{try{t||null==l.return||l.return()}finally{if(a)throw c}}r(function(e){return e.filter(function(e){return!e.completed})})}},"Clear completed")))};o.a.render(c.a.createElement(s.a,null,c.a.createElement(y,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.3d72375f.chunk.js.map