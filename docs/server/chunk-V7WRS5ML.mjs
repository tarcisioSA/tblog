import './polyfills.server.mjs';
import{A as y,E as _,F as A,I as C,J as k,a as d,b as h,c,d as v,e as m,f as o,g as i,h as p,i as f,j as s,k as g,l,m as O,n as u,u as P,w as b,x as w}from"./chunk-HEBI6XST.mjs";var S=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d({type:t,selectors:[["app-menu-title"]],standalone:!0,features:[l],decls:5,vars:0,consts:[[1,"container-menu-title"],[1,"display-1"]],template:function(e,r){e&1&&(o(0,"div",0),p(1,"hr"),o(2,"h1",1),s(3," TARCISIO BLOG "),i(),p(4,"hr"),i())},styles:[".container-menu-title[_ngcontent-%COMP%]{color:#fff}.container-menu-title[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{margin-top:15px;margin-bottom:15px;display:flex;justify-content:center;font-size:130px;font-weight:700;font-family:segoe UI}.container-menu-title[_ngcontent-%COMP%] > hr[_ngcontent-%COMP%]{margin-top:15px;margin-bottom:15px}@media screen and (max-width:811px){.container-menu-title[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{font-size:30px;color:red}}"]});let n=t;return n})();var M=n=>["content",n],I=(()=>{let t=class t{constructor(){this.title=" ",this.description=" ",this.link=" ",this.photo=" ",this.id="0"}ngOnInit(){}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d({type:t,selectors:[["app-big-card"]],inputs:{title:"title",description:"description",link:"link",photo:"photo",id:"id"},standalone:!0,features:[l],decls:12,vars:12,consts:[[1,"container-bigcard"],[1,"big-card-photo"],[3,"routerLink"],["alt","",3,"src"],[1,"big-card-title"],[1,"big-card-description"]],template:function(e,r){e&1&&(o(0,"div",0)(1,"div",1)(2,"a",2),p(3,"img",3),i()(),o(4,"div",4)(5,"h2")(6,"a",2),s(7),i()()(),o(8,"div",5)(9,"P")(10,"a",2),s(11),i()()()()),e&2&&(c(2),m("routerLink",u(6,M,r.id)),c(),f("src",r.photo,h),c(3),m("routerLink",u(8,M,r.id)),c(),g(r.title),c(3),m("routerLink",u(10,M,r.id)),c(),g(r.description))},dependencies:[C],styles:[".container-bigcard[_ngcontent-%COMP%]{margin-right:25px;width:631px;height:500px;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start}.big-card-title[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{font-size:20pt;margin-top:20PX;margin-bottom:10PX}.big-card-description[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#6e6262}.big-card-description[_ngcontent-%COMP%]{margin-top:20px;font-size:12pt}.big-card-description[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{color:#fd4e4e;transition:.5s}.big-card-photo[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:100%;height:100%}.big-card-photo[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]:hover{-moz-transform:scale(1.03);transition:.5s}.big-card-title[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{transition:.5s}.big-card-title[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{color:red;font-size:23pt}@media only screen and (max-width: 767px){.container-bigcard[_ngcontent-%COMP%]{margin-right:0;width:auto;height:auto;align-items:center}.big-card-title[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{font-size:16pt}.big-card-description[_ngcontent-%COMP%]{font-size:10pt}}"]});let n=t;return n})();var E=n=>["content",n],F=(()=>{let t=class t{constructor(){this.photo=" ",this.description="",this.link=" ",this.id="0"}ngOnInit(){}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d({type:t,selectors:[["app-small-card"]],inputs:{photo:"photo",description:"description",link:"link",id:"id"},standalone:!0,features:[l],decls:9,vars:8,consts:[[1,"container-smallcard"],[1,"container-smallcard-photo"],[3,"routerLink"],["alt","",3,"src"],[1,"container-smallcard-descripition"]],template:function(e,r){e&1&&(o(0,"div",0)(1,"div",1)(2,"a",2),p(3,"img",3),i()(),o(4,"div",4)(5,"p")(6,"a",2),s(7),i()()()(),p(8,"hr")),e&2&&(c(2),m("routerLink",u(4,E,r.id)),c(),f("src",r.photo,h),c(3),m("routerLink",u(6,E,r.id)),c(),g(r.description))},dependencies:[C],styles:[".container-smallcard[_ngcontent-%COMP%]{display:flex;flex-direction:row;margin-bottom:20px;width:747px;height:138px}.container-smallcard-photo[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:262px;min-width:262px;height:138px;margin-bottom:10px;margin-right:10px}.container-smallcard-photo[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]:hover{-moz-transform:scale(1.03);transition:.5s}.container-smallcard-descripition[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:20px;margin-left:20px}.container-smallcard-descripition[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#fff;font-size:20pt}.container-smallcard-descripition[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{transition:.5s;color:#fa5050}hr[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px}@media only screen and (max-width: 767px){.container-smallcard[_ngcontent-%COMP%]{width:auto;height:auto;flex-wrap:wrap}.container-smallcard-photo[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:100%;height:auto;margin-bottom:10px;margin-right:0}.container-smallcard-descripition[_ngcontent-%COMP%]{width:100%;margin-left:0;text-align:center}}"]});let n=t;return n})();var q=()=>["./"],j=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d({type:t,selectors:[["app-menu-bar"]],standalone:!0,features:[l],decls:14,vars:2,consts:[[1,"container-menu-bar"],[3,"routerLink"],["href","https://www.linkedin.com/in/tarcisio10/","target","blank"],["href","https://github.com/tarcisioSA","target","blank"],["href","./content/1"]],template:function(e,r){e&1&&(o(0,"div",0)(1,"ul")(2,"li")(3,"a",1),s(4,"Home"),i()(),o(5,"li")(6,"a",2),s(7,"Linkedin"),i()(),o(8,"li")(9,"a",3),s(10,"GitHub"),i()(),o(11,"li")(12,"a",4),s(13,"Cont\xE9udos"),i()()()()),e&2&&(c(3),m("routerLink",O(1,q)))},dependencies:[C],styles:[".container-menu-bar[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;font-size:15pt}.container-menu-bar[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center}.container-menu-bar[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{margin-left:50px}.container-menu-bar[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{list-style-type:none}@media screen and (max-width:811px){.container-menu-bar[_ngcontent-%COMP%]{font-size:12pt}}@media screen and (max-width: 811px){.container-menu-bar[_ngcontent-%COMP%]{font-size:12pt}.container-menu-bar[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{margin-left:20px}}"]});let n=t;return n})();var T=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d({type:t,selectors:[["app-home"]],standalone:!0,features:[l],decls:8,vars:0,consts:[[1,"article"],[1,"article-main"],["id","1","title","Introducing Angular v17","description","Last month marked the 13th anniversary of Angular\u2019s red shield. AngularJS was the starting point for a new wave of JavaScript frameworks emerging to support the increasing need for rich web experiences. Today with a new look and a set of forward-thinking features we bring everyone along to the future with version 17, setting new standards for performance and developer experience.","link","https://blog.angular.io/introducing-angular-v17-4d7033312e4b","photo","https://i.ytimg.com/vi/mVjYG9TSN88/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGH8gEyhWMA8=&rs=AOn4CLAd8M7O1rK30HRH-9RXrVAjhjqCOA"],[1,"article-others"],["id","2","photo","https://aws-obg-image-lb-3.tcl.com/content/dam/brandsite/region/global/products/smartphones/tcl-40-nxtpaper/ksp-images/12-midnight-blue-pc.jpg","description","TCL 40 NXTPAPER: celular com tela de Kindle colorida chega ao mercado","link","https://canaltech.com.br/smartphone/tcl-40-nxt-paper-celular-com-tela-de-kindle-colorida-chega-ao-mercado-269463/"],["id","3","photo","https://files.tecnoblog.net/wp-content/uploads/2022/04/apple_capa-6-1060x596.jpg","description","Apple foi big tech que mais comprou startups de intelig\xEAncia artificial em 2023","link","https://tecnoblog.net/noticias/2024/02/08/apple-foi-big-tech-que-mais-comprou-startups-de-inteligencia-artificial-em-2023/"],["id","4","photo","https://bmcnews.com.br/wp-content/uploads/2024/02/HRNFIBYWFBQ4SY4YNTX66TZWII-1-1024x576.jpg","description","Mudan\xE7as na dire\xE7\xE3o dos investimentos chineses na Am\xE9rica Latina","link","https://bmcnews.com.br/2024/02/10/china-redireciona-investimentos-na-america-latina-oportunidades-em-tecnologia-e-desafios/"]],template:function(e,r){e&1&&(p(0,"app-menu-title"),o(1,"div",0)(2,"div",1),p(3,"app-big-card",2),i(),o(4,"div",3),p(5,"app-small-card",4)(6,"app-small-card",5)(7,"app-small-card",6),i()())},dependencies:[S,I,F],styles:[".article[_ngcontent-%COMP%]{margin-top:50px;display:flex;flex-direction:row;justify-content:center}@media screen and (max-width: 811px){.article[_ngcontent-%COMP%]{display:flex;flex-direction:column}}"]});let n=t;return n})();var L=(()=>{let t=class t{constructor(){this.title="blog-tcl"}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d({type:t,selectors:[["app-root"]],standalone:!0,features:[l],decls:2,vars:0,template:function(e,r){e&1&&p(0,"app-menu-bar")(1,"router-outlet")},dependencies:[A,j]});let n=t;return n})();var D=[{id:"1",photo:"https://i.ytimg.com/vi/mVjYG9TSN88/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGH8gEyhWMA8=&rs=AOn4CLAd8M7O1rK30HRH-9RXrVAjhjqCOA",title:"Introducing Angular v17",description:"Last month marked the 13th anniversary of Angular\u2019s red shield. AngularJS was the starting point for a new wave of JavaScript frameworks emerging to support the increasing need for rich web experiences. Today with a new look and a set of forward-thinking features we bring everyone along to the future with version 17, setting new standards for performance and developer experience."},{id:"2",photo:"https://aws-obg-image-lb-3.tcl.com/content/dam/brandsite/region/global/products/smartphones/tcl-40-nxtpaper/ksp-images/12-midnight-blue-pc.jpg",title:"TCL 40 NXTPAPER: celular com tela de Kindle colorida chega ao mercado",description:"descri\xE7\xE3o"},{id:"3",photo:"https://files.tecnoblog.net/wp-content/uploads/2022/04/apple_capa-6-1060x596.jpg",title:"Apple foi big tech que mais comprou startups de intelig\xEAncia artificial em 2023",description:"descri\xE7\xE3o"},{id:"4",photo:"https://bmcnews.com.br/wp-content/uploads/2024/02/HRNFIBYWFBQ4SY4YNTX66TZWII-1-1024x576.jpg",title:"Mudan\xE7as na dire\xE7\xE3o dos investimentos chineses na Am\xE9rica Latina",description:"descri\xE7\xE3o"}];var R=(()=>{let t=class t{constructor(a){this.route=a,this.photo="",this.title="",this.description="",this.id="0"}ngOnInit(){this.route.paramMap.subscribe(a=>this.id=a.get("id")),this.setValuesToComponent(this.id)}setValuesToComponent(a){let e=D.filter(r=>r.id==a)[0];this.title=e.title,this.description=e.description,this.photo=e.photo}};t.\u0275fac=function(e){return new(e||t)(v(_))},t.\u0275cmp=d({type:t,selectors:[["app-content"]],inputs:{photo:"photo",title:"title",description:"description"},standalone:!0,features:[l],decls:10,vars:3,consts:[[1,"container-content"],[1,"content-cover"],["alt","",3,"src"],[1,"content-title"],[1,"content-description"]],template:function(e,r){e&1&&(o(0,"div",0)(1,"div",1),p(2,"img",2),i(),o(3,"div",3)(4,"h1"),s(5),i(),p(6,"hr"),i(),o(7,"div",4)(8,"p"),s(9),i()()()),e&2&&(c(2),f("src",r.photo,h),c(3),g(r.title),c(4),g(r.description))},styles:[".container-content[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:20px}.content-cover[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{border:solid rgb(145,145,145) 5px;border-radius:5px;width:100%;max-width:500px;height:auto}.content-description[_ngcontent-%COMP%]{margin-top:25px;width:100%;max-width:900px}.content-description[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:gray}@media screen and (max-width: 900px){.content-description[_ngcontent-%COMP%]{max-width:80%}}@media screen and (max-width: 500px){.content-cover[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{max-width:100%}}"]});let n=t;return n})();var z=[{path:"",component:T},{path:"content/:id",component:R}];var H={providers:[k(z),w()]};var K={providers:[y()]},B=P(H,K);var Y=()=>b(L,B),_t=Y;export{_t as a};