(this.webpackJsonpgitsearch=this.webpackJsonpgitsearch||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/Search.29d553f3.svg"},18:function(e,t,a){e.exports=a.p+"static/media/Github.e06e4c14.png"},21:function(e,t,a){e.exports=a(46)},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(14),c=a.n(r),u=a(4),s=a.n(u),m=a(19),i=a(15),o=a(20),p=a(16),E=a.n(p).a.create({baseURL:"https://api.github.com/users/"}),f=a(17),d=a.n(f),h=a(18),b=a.n(h);a(44);var g=function(){var e=Object(l.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(l.useRef)();function u(){return(u=Object(i.a)(s.a.mark((function e(){var t,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get("".concat(c.current.value));case 2:t=e.sent,l=t.data,r([].concat(Object(m.a)(a),[l]));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=document.getElementsByClassName("favoritar");console.log(p);var f=document.getElementsByClassName("cards");return console.log(f),Object(l.useEffect)((function(){}),[a]),n.a.createElement("div",null,n.a.createElement("img",{className:"github",src:b.a,alt:""}),n.a.createElement("span",{className:"search"},n.a.createElement("input",{type:"text",placeholder:"Digite para pesquisar...",ref:c}),n.a.createElement("button",{onClick:function(){return function(){return u.apply(this,arguments)}()}},n.a.createElement("img",{src:d.a,alt:""}))),n.a.createElement("div",{className:"cards"},a.map((function(e){return n.a.createElement("ul",{key:e.id},n.a.createElement("span",{className:"Head"},n.a.createElement("img",{src:e.avatar_url,alt:""}),n.a.createElement("h2",null,e.name)),n.a.createElement("li",null,n.a.createElement("p",null,"Localiza\xe7\xe3o:")," ",n.a.createElement("small",null,e.location)),n.a.createElement("li",null,n.a.createElement("p",null,"Tipo:")," ",n.a.createElement("small",null,e.type)),n.a.createElement("li",null,n.a.createElement("p",null,"Reposit\xf3rios: ")," ",n.a.createElement("small",null,e.public_repos))," ",n.a.createElement("li",null,n.a.createElement("p",null,"E-mail: ")," ",n.a.createElement("small",null,e.email))," ",n.a.createElement("li",null,n.a.createElement("p",null,"Criado em: ")," ",n.a.createElement("small",null,e.created_at.split("T")[0]))," ",n.a.createElement("li",null,n.a.createElement("p",null,"Atualizado em: ")," ",n.a.createElement("small",null,e.updated_at.split("T")[0])),n.a.createElement("a",{href:e.html_url,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("button",{className:"favoritar"},"Exibir no Github")))}))))};a(45);var v=function(){return n.a.createElement(g,null)};c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(v,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.f9ca195b.chunk.js.map