(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{29:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var c,a,i,r,l,s,o,d,j,b,u=n(4),O=n.n(u),m=n(52),h=n.n(m),x=(n(61),n(5)),v=n(16),g=n(6),p=n(56),f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=Object(u.useState)(t),c=Object(x.a)(n,2),a=c[0],i=c[1],r=Object(u.useMemo)((function(){var t=Object(p.a)(e);return null!==a&&t.sort((function(e,t){return e[a.key]<t[a.key]?"ascending"===a.direction?-1:1:e[a.key]>t[a.key]?"ascending"===a.direction?1:-1:0})),t}),[e,a]),l=function(e){var t="ascending";a&&a.key===e&&"ascending"===a.direction&&(t="descending"),i({key:e,direction:t})};return{sortedItems:r,requestSort:l}},A=n.p+"static/media/btnedit.987cd358.png",N=(n(62),n(1)),C=function(e){var t=Object(u.useState)(!1),n=Object(x.a)(t,2),c=n[0],a=n[1];return Object(N.jsxs)("div",{className:"btn-edit-container",children:[Object(N.jsx)("img",{className:"btn-edit-container_btn-edit",src:A,width:"32px",height:"32px",alt:"img",onClick:function(){a(!0)}}),c?Object(N.jsxs)("div",{className:"btn-edit-container__prompt-on-btn prompt-on-btn",children:[Object(N.jsx)("div",{className:"prompt-on-btn_mode",onClick:function(){e.openModalEdit(!0,e.id),a(!1)},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"}),Object(N.jsx)("div",{className:"prompt-on-btn_mode",onClick:function(){e.openDelElemConfirm(!0,e.id),a(!1)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]}):null]})},q=(n(29),"data:image/png;base64,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"),M=Object(g.gql)(c||(c=Object(v.a)(["\n  mutation addDirector($name: String!, $age: Int!) {\n    addDirector(name: $name, age:$age) {\n      id\n      name\n    }\n  }\n"]))),k=Object(g.gql)(a||(a=Object(v.a)(["\n  mutation addMovie($name: String!, $genre: String!, $directorId: ID) {\n    addMovie(name: $name, genre:$genre, directorId:$directorId) {\n      id\n      name\n    }\n  }\n"]))),y=Object(g.gql)(i||(i=Object(v.a)(["\n  mutation deleteDirector($id: ID!) {\n    deleteDirector(id: $id) {\n      id\n    }\n  }\n"]))),S=Object(g.gql)(r||(r=Object(v.a)(["\n  mutation deleteMovie($id: ID!) {\n    deleteMovie(id: $id) {\n      id\n    }\n  }\n"]))),I=Object(g.gql)(l||(l=Object(v.a)(["\nquery GetDirector($id: ID!) {\n  director(id: $id) {\n    id\n    name\n    age\n    movies {\n      id\n      name\n    }\n  }\n}\n"]))),Q=Object(g.gql)(s||(s=Object(v.a)(["\nquery GetMovie($id: ID) {\n  movie(id: $id) {\n    id\n    name\n    genre\n    director {\n      id\n      name\n    }\n  }\n}\n"]))),D=Object(g.gql)(o||(o=Object(v.a)(["\nmutation UpdateMovie($id:ID,$name: String!, $genre: String!, $directorId: ID) {\n  updateMovie(id:$id, name: $name, genre: $genre,directorId:$directorId){\n   name\n  }\n}\n"]))),K=Object(g.gql)(d||(d=Object(v.a)(["\nmutation UpdateDirector($id:ID,$name: String!, $age: Int!) {\n  updateDirector(id:$id, name: $name, age: $age){\n   name\n  }\n}\n"]))),E=function(e){var t=Object(u.useState)(""),n=Object(x.a)(t,2),c=n[0],a=n[1],i=Object(u.useState)(""),r=Object(x.a)(i,2),l=r[0],s=r[1],o=Object(g.useMutation)(M),d=Object(x.a)(o,1)[0];return Object(N.jsx)("div",{className:"modal",children:Object(N.jsxs)("div",{className:"modal-container",children:[Object(N.jsxs)("form",{className:"modal-form",onSubmit:function(t){t.preventDefault(),d({variables:{name:c,age:Number(l)},refetchQueries:[{query:H}]}),e.openModalAdd(!1)},children:[Object(N.jsxs)("div",{className:"modal-form__input-block",children:[Object(N.jsx)("label",{children:"\u0420\u0435\u0436\u0438\u0441\u0435\u0440"}),Object(N.jsx)("input",{type:"text",placeholder:"Name",value:c,onChange:function(e){return a(e.target.value)}})]}),Object(N.jsxs)("div",{className:"modal-form__input-block",children:[Object(N.jsx)("label",{children:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442"}),Object(N.jsx)("input",{type:"text",placeholder:"Age",value:l,onChange:function(e){return s(e.target.value)}})]}),Object(N.jsx)("button",{type:"submit",className:"pressed-button",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0440\u0435\u0436\u0438\u0441\u0435\u0440\u0430"})]}),Object(N.jsx)("div",{className:"close",onClick:function(){e.openModalAdd(!1)},children:Object(N.jsx)("img",{src:q,width:"24px",height:"24px",alt:"img"})})]})})},V=(n(71),function(e){return Object(N.jsx)("div",{className:"del-element-container",children:Object(N.jsxs)("div",{className:"del-element-container__content",children:[Object(N.jsx)("p",{children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435"}),Object(N.jsxs)("div",{className:"del-element-container__content_btns",children:[Object(N.jsx)("button",{onClick:function(){return e.openDelConfirm(!1)},children:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"}),Object(N.jsx)("button",{onClick:function(t){return e.handleDelElement(t)},children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c"})]})]})})}),w=function(e){var t=e.data,n=f(t),c=n.sortedItems,a=n.requestSort,i=Object(u.useState)(!1),r=Object(x.a)(i,2),l=r[0],s=r[1],o=Object(u.useState)(!1),d=Object(x.a)(o,2),j=d[0],b=d[1],O=Object(u.useState)(!1),m=Object(x.a)(O,2),h=m[0],v=m[1],p=Object(u.useState)(null),A=Object(x.a)(p,2),q=A[0],M=A[1],k=Object(g.useMutation)(y),S=Object(x.a)(k,1)[0],I=function(e){s(e)},Q=function(e,t){b(e),M(t)},D=function(e,t){v(e),M(t)};return Object(N.jsxs)("div",{className:"content__table-data",children:[Object(N.jsxs)("table",{children:[Object(N.jsx)("caption",{children:e.title}),Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{className:"th7",children:"\u2116"}),Object(N.jsx)("th",{className:"cursor",onClick:function(){return a("name")},children:"\u0420\u0435\u0436\u0438\u0441\u0435\u0440"}),Object(N.jsx)("th",{className:"th20 cursor",onClick:function(){return a("age")},children:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442"}),Object(N.jsx)("th",{className:"cursor",children:"\u0424\u0438\u043b\u044c\u043c\u044b"}),Object(N.jsx)("th",{className:"th10"})]})}),Object(N.jsx)("tbody",{children:c.map((function(e,t){var n=e.movies.map((function(e){return Object(N.jsx)("p",{children:e.name},e.id)}));return Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:t+1}),Object(N.jsx)("td",{children:e.name}),Object(N.jsx)("td",{children:e.age}),Object(N.jsx)("td",{children:n}),Object(N.jsx)("td",{children:Object(N.jsx)(C,{openDelElemConfirm:D,openModalEdit:Q,id:e.id})})]},e.id)}))})]}),Object(N.jsx)("div",{className:"btn-add",onClick:function(){return I(!0)},children:"+"}),l?Object(N.jsx)(E,{openModalAdd:I}):null,j?Object(N.jsx)(P,{openModalEdit:Q,directorId:q}):null,h?Object(N.jsx)(V,{openDelConfirm:D,handleDelElement:function(){S({variables:{id:q},refetchQueries:[{query:H}]}),v(!1)}}):null]})},F=function(e){var t=e.data,n=e.openModalEdit,c=t.id,a=t.name,i=t.age,r=Object(u.useState)(a),l=Object(x.a)(r,2),s=l[0],o=l[1],d=Object(u.useState)(i),j=Object(x.a)(d,2),b=j[0],O=j[1],m=Object(g.useMutation)(K),h=Object(x.a)(m,1)[0];return Object(N.jsx)("div",{className:"modal",children:Object(N.jsxs)("div",{className:"modal-container",children:[Object(N.jsxs)("form",{className:"modal-form",onSubmit:function(e){e.preventDefault(),h({variables:{id:c,name:s,age:b},refetchQueries:[{query:H}]}),n(!1)},children:[Object(N.jsxs)("div",{className:"modal-form__input-block",children:[Object(N.jsx)("label",{children:"\u0418\u043c\u044f \u0440\u0435\u0436\u0438\u0441\u0435\u0440\u0430"}),Object(N.jsx)("input",{type:"text",placeholder:"Name",value:s,onChange:function(e){return o(e.target.value)}})]}),Object(N.jsxs)("div",{className:"modal-form__input-block",children:[Object(N.jsx)("label",{children:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442"}),Object(N.jsx)("input",{type:"text",placeholder:"Genre",value:b,onChange:function(e){return O(Number(e.target.value))}})]}),Object(N.jsx)("button",{type:"submit",className:"pressed-button",children:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435"})]}),Object(N.jsx)("div",{className:"close",onClick:function(){n(!1)},children:Object(N.jsx)("img",{src:q,width:"24px",height:"24px",alt:"img"})})]})})},B=(n(72),function(e){for(var t=e.pagesCount,n=e.changePageHandler,c=e.activePage,a=[],i=1;i<=t;i++)a.push(i);return Object(N.jsx)("div",{className:"paganation",children:Object(N.jsx)("div",{className:"pagination__container",children:a.map((function(e){return Object(N.jsx)("div",{className:"pagination__container_item ".concat(c===e?"activePage":""),onClick:function(){return n(e)},children:e},e)}))})})}),H=Object(g.gql)(j||(j=Object(v.a)(["\n  query GetDirectors {\n    directors {\n      id\n      name\n      age\n      movies {\n        id\n        name\n      }\n    }\n  }\n"]))),U=function(e){var t=Object(g.useQuery)(H),n=t.loading,c=t.error,a=t.data,i=Object(u.useState)(1),r=Object(x.a)(i,2),l=r[0],s=r[1];if(n)return Object(N.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044e..."});if(c)return Object(N.jsx)("p",{children:"Error :("});var o=a.directors.length,d=Math.ceil(o/4),j=l-1,b=a.directors.filter((function(e,t){return t<4*l&&t>=4*j?e:null}));return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(w,{title:e.title,data:b}),Object(N.jsx)("div",{className:"main-component__pagination",children:Object(N.jsx)(B,{pagesCount:d,changePageHandler:function(e){s(e)},activePage:l})})]})},P=function(e){var t=e.openModalEdit,n=e.directorId,c=Object(g.useQuery)(I,{variables:{id:n}}),a=c.loading,i=c.error,r=c.data;return a?Object(N.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044e..."}):i?Object(N.jsx)("p",{children:"Error :("}):Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(F,{data:r.director,openModalEdit:t})})},X=(n(73),function(e){var t=e.handleChange,n=e.movieDirector,c=Object(g.useQuery)(H),a=c.loading,i=c.error,r=c.data;if(a)return Object(N.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044e..."});if(i)return Object(N.jsx)("p",{children:"Error :("});var l=null,s=null;n&&(l=n.id,s=n.name);var o=r.directors;return Object(N.jsxs)("label",{children:[Object(N.jsx)("p",{children:"\u0412\u044b\u0431\u0438\u0440\u0435\u0442\u0435 \u0440\u0435\u0436\u0438\u0441\u0435\u0440\u0430"}),Object(N.jsxs)("select",{name:"directors",onChange:t,children:[Object(N.jsx)("option",{name:"null",value:l,children:s}),o.map((function(e){return Object(N.jsx)("option",{name:e.name,value:e.id,children:e.name},e.id)}))]})]})}),L=function(e){var t=Object(u.useState)(""),n=Object(x.a)(t,2),c=n[0],a=n[1],i=Object(u.useState)(""),r=Object(x.a)(i,2),l=r[0],s=r[1],o=Object(u.useState)(null),d=Object(x.a)(o,2),j=d[0],b=d[1],O=Object(g.useMutation)(k),m=Object(x.a)(O,1)[0];return Object(N.jsx)("div",{className:"modal",children:Object(N.jsxs)("div",{className:"modal-container",children:[Object(N.jsxs)("form",{className:"modal-form",onSubmit:function(t){t.preventDefault(),m({variables:{name:c,genre:l,directorId:j},refetchQueries:[{query:G}]}),e.openModalAdd(!1)},children:[Object(N.jsxs)("div",{className:"modal-form__input-block",children:[Object(N.jsx)("label",{children:"Name"}),Object(N.jsx)("input",{type:"text",placeholder:"Name",value:c,onChange:function(e){return a(e.target.value)}})]}),Object(N.jsxs)("div",{className:"modal-form__input-block",children:[Object(N.jsx)("label",{children:"Genre"}),Object(N.jsx)("input",{type:"text",placeholder:"Genre",value:l,onChange:function(e){return s(e.target.value)}})]}),Object(N.jsx)("div",{className:"modal-form__input-block",children:Object(N.jsx)(X,{handleChange:function(e){b(e.target.value)}})}),Object(N.jsx)("button",{type:"submit",className:"pressed-button",children:"Add movie"})]}),Object(N.jsx)("div",{className:"close",onClick:function(){e.openModalAdd(!1)},children:Object(N.jsx)("img",{src:q,width:"24px",height:"24px",alt:"img"})})]})})},z=function(e){var t=e.dataMovie,n=e.attr,c=t.id,a=Object(u.useState)(t.name),i=Object(x.a)(a,2),r=i[0],l=i[1],s=Object(u.useState)(t.genre),o=Object(x.a)(s,2),d=o[0],j=o[1],b=Object(u.useState)(null),O=Object(x.a)(b,2),m=O[0],h=O[1],v=Object(g.useMutation)(D),p=Object(x.a)(v,1)[0];return Object(N.jsx)("div",{className:"modal",children:Object(N.jsxs)("div",{className:"modal-container",children:[Object(N.jsxs)("form",{className:"modal-form",onSubmit:function(e){e.preventDefault(),p({variables:{id:c,name:r,genre:d,directorId:m},refetchQueries:[{query:G}]}),n.openModalEdit(!1)},children:[Object(N.jsxs)("div",{className:"modal-form__input-block",children:[Object(N.jsx)("label",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0444\u0438\u043b\u044c\u043c\u0430"}),Object(N.jsx)("input",{type:"text",placeholder:"Name",value:r,onChange:function(e){return l(e.target.value)}})]}),Object(N.jsxs)("div",{className:"modal-form__input-block",children:[Object(N.jsx)("label",{children:"\u0416\u0430\u043d\u0440"}),Object(N.jsx)("input",{type:"text",placeholder:"Genre",value:d,onChange:function(e){return j(e.target.value)}})]}),Object(N.jsx)("div",{className:"modal-form__input-block",children:Object(N.jsx)(X,{handleChange:function(e){h(e.target.value)},movieDirector:t.director?t.director:null})}),Object(N.jsx)("button",{type:"submit",className:"pressed-button",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u0438\u043b\u044c\u043c"})]}),Object(N.jsx)("div",{className:"close",onClick:function(){n.openModalEdit(!1)},children:Object(N.jsx)("img",{src:q,width:"24px",height:"24px",alt:"img"})})]})})},W=function(e){var t=Object(g.useQuery)(Q,{variables:{id:e.id}}),n=t.loading,c=t.data;return n?Object(N.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044e..."}):Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(z,{dataMovie:c.movie,attr:e})})},Y=function(e){var t=e.data,n=f(t),c=n.sortedItems,a=n.requestSort,i=Object(u.useState)(!1),r=Object(x.a)(i,2),l=r[0],s=r[1],o=Object(u.useState)(!1),d=Object(x.a)(o,2),j=d[0],b=d[1],O=Object(u.useState)(!1),m=Object(x.a)(O,2),h=m[0],v=m[1],p=Object(u.useState)(null),A=Object(x.a)(p,2),q=A[0],M=A[1],k=Object(g.useMutation)(S),y=Object(x.a)(k,1)[0],I=function(e){s(e)},Q=function(e,t){b(e),M(t)},D=function(e,t){v(e),M(t)};return Object(N.jsxs)("div",{className:"content__table-data",children:[Object(N.jsxs)("table",{children:[Object(N.jsx)("caption",{children:e.title}),Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{className:"th7",children:"\u2116"}),Object(N.jsx)("th",{className:"cursor",onClick:function(){return a("name")},children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(N.jsx)("th",{className:"th20 cursor",onClick:function(){return a("genre")},children:"\u0416\u0430\u043d\u0440"}),Object(N.jsx)("th",{className:"cursor",onClick:function(){return a("directorId")},children:"\u0420\u0435\u0436\u0438\u0441\u0435\u0440"}),Object(N.jsx)("th",{className:"th10"})]})}),Object(N.jsx)("tbody",{children:c.map((function(e,t){return Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:t+1}),Object(N.jsx)("td",{children:e.name}),Object(N.jsx)("td",{children:e.genre}),Object(N.jsx)("td",{children:e.director&&e.director.name}),Object(N.jsx)("td",{children:Object(N.jsx)(C,{openDelElemConfirm:D,openModalEdit:Q,id:e.id})})]},e.id)}))})]}),Object(N.jsx)("div",{className:"btn-add",onClick:function(){return I(!0)},children:"+"}),l?Object(N.jsx)(L,{openModalAdd:I}):null,j?Object(N.jsx)(W,{openModalEdit:Q,id:q}):null,h?Object(N.jsx)(V,{openDelConfirm:D,handleDelElement:function(){y({variables:{id:q},refetchQueries:[{query:G}]}),v(!1)}}):null]})},G=Object(g.gql)(b||(b=Object(v.a)(["\n  query GetMovies {\n    movies {\n      id\n      name\n      genre\n      director {\n        id\n        name\n        age\n      }\n    }\n  }\n"]))),Z=function(e){var t=Object(g.useQuery)(G),n=t.loading,c=t.error,a=t.data,i=Object(u.useState)(1),r=Object(x.a)(i,2),l=r[0],s=r[1];if(n)return Object(N.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044e..."});if(c)return Object(N.jsx)("p",{children:"Error :("});var o=a.movies.length,d=Math.ceil(o/10),j=l-1,b=a.movies.filter((function(e,t){return t<10*l&&t>=10*j?e:null}));return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(Y,{title:e.title,data:b}),Object(N.jsx)("div",{className:"main-component__pagination",children:Object(N.jsx)(B,{pagesCount:d,changePageHandler:function(e){s(e)},activePage:l})})]})},J=(n(74),function(e){return Object(N.jsxs)("div",{className:"nav",children:[Object(N.jsx)("button",{name:"movies",className:"btn btn-nav ".concat("movies"===e.selectContent?"btn-nav-active":""),onClick:function(t){return e.onNavChange(t)},children:"Movies"}),Object(N.jsx)("button",{name:"directors",className:"btn btn-nav ".concat("directors"===e.selectContent?"btn-nav-active":""),onClick:function(t){return e.onNavChange(t)},children:"Directors"})]})}),R=function(){var e=Object(u.useState)("movies"),t=Object(x.a)(e,2),n=t[0],c=t[1];return Object(N.jsxs)("div",{className:"main-component",children:[Object(N.jsx)("header",{className:"header",style:{textAlign:"center",height:"50px"},children:Object(N.jsx)("h1",{children:"React App with GraphQl "})}),Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)("div",{className:"main-component__header",children:Object(N.jsx)(J,{onNavChange:function(e){c(e.target.name)},selectContent:n})}),Object(N.jsx)("div",{className:"main-component__content content",children:"movies"===n?Object(N.jsx)(Z,{title:"\u0424\u0438\u043b\u044c\u043c\u044b"}):Object(N.jsx)(U,{title:"\u0420\u0435\u0436\u0438\u0441\u0435\u0440\u044b"})})]})]})},_=new g.ApolloClient({cache:new g.InMemoryCache,uri:"https://salty-crag-83095.herokuapp.com/graphql"});var T=function(){return Object(N.jsx)(g.ApolloProvider,{client:_,children:Object(N.jsx)("div",{className:"app",children:Object(N.jsx)(R,{})})})};h.a.render(Object(N.jsx)(O.a.StrictMode,{children:Object(N.jsx)(T,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.86c61b80.chunk.js.map