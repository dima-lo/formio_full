(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{jvjA:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),r=u("Yi/Q"),i=u("rxJI"),o=u("pMnS"),c=u("O2im"),a=u("//LL"),s=u("GPOe"),b=u("9c/x"),f=u("8CNj"),p=u("StRJ"),h=u("Ip0R"),v=u("lIz8"),d=u("qza0"),m=u("HPOf"),k=u("PLeI"),g=u("r6Rv"),y=u("GDim"),q=u("KzPs"),L=e.ob({encapsulation:0,styles:[".formio-grid[_ngcontent-%COMP%] { position: relative; width: 100%; } .grid-refresh[_ngcontent-%COMP%] { height: 400px; width: 100%; }"],data:{}});function S(l){return e.Fb(0,[(l()(),e.hb(0,null,null,0))],null,null)}function w(l){return e.Fb(0,[(l()(),e.hb(0,null,null,0))],null,null)}function C(l){return e.Fb(0,[(l()(),e.hb(0,null,null,0))],null,null)}function E(l){return e.Fb(0,[(l()(),e.qb(0,16777216,null,null,1,null,null,null,null,null,null,null)),e.pb(1,540672,null,0,h.n,[e.P],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(l()(),e.hb(0,null,null,0))],function(l,n){l(n,1,0,n.component.header.template)},null)}function F(l){return e.Fb(0,[(l()(),e.qb(0,16777216,null,null,1,null,null,null,null,null,null,null)),e.pb(1,540672,null,0,h.n,[e.P],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(l()(),e.hb(0,null,null,0))],function(l,n){l(n,1,0,n.component.body.template)},null)}function P(l){return e.Fb(0,[(l()(),e.qb(0,16777216,null,null,1,null,null,null,null,null,null,null)),e.pb(1,540672,null,0,h.n,[e.P],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(l()(),e.hb(0,null,null,0))],function(l,n){l(n,1,0,n.component.footer.template)},null)}function A(l){return e.Fb(0,[e.Cb(402653184,1,{headerElement:0}),e.Cb(402653184,2,{bodyElement:0}),e.Cb(402653184,3,{footerElement:0}),(l()(),e.hb(16777216,[[1,3],["headerTemplate",2]],null,0,null,S)),(l()(),e.hb(16777216,[[2,3],["bodyTemplate",2]],null,0,null,w)),(l()(),e.hb(16777216,[[3,3],["footerTemplate",2]],null,0,null,C)),(l()(),e.qb(6,0,null,null,11,"div",[["class","formio-grid"]],null,null,null,null,null)),(l()(),e.qb(7,0,null,null,1,"formio-alerts",[],null,null,null,v.b,v.a)),e.pb(8,114688,null,0,d.a,[],{alerts:[0,"alerts"]},null),(l()(),e.qb(9,0,null,null,8,"table",[["class","table table-bordered table-striped table-hover"]],null,null,null,null,null)),(l()(),e.hb(16777216,null,null,1,null,E)),e.pb(11,16384,null,0,h.j,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(12,0,null,null,1,"formio-loader",[],null,null,null,m.b,m.a)),e.pb(13,49152,null,0,k.a,[g.a],null,null),(l()(),e.hb(16777216,null,null,1,null,F)),e.pb(15,16384,null,0,h.j,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(l()(),e.hb(16777216,null,null,1,null,P)),e.pb(17,16384,null,0,h.j,[e.P,e.M],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,8,0,u.alerts),l(n,11,0,u.initialized),l(n,15,0,u.initialized),l(n,17,0,u.initialized)},null)}var O=u("mrSG"),x=u("kVPD"),T=u("Yt1J"),_=u("WBsH"),z=function(l){function n(){return null!==l&&l.apply(this,arguments)||this}return O.__extends(n,l),n}(_.d),I=function(l){function n(){return null!==l&&l.apply(this,arguments)||this}return O.__extends(n,l),n.prototype.getMethod=function(l){switch(l){case"POST":return"Create";case"PUT":return"Update";case"DELETE":return"Delete"}},n}(_.b),M=function(l){function n(){return null!==l&&l.apply(this,arguments)||this}return O.__extends(n,l),n}(_.c),j=function(l){function n(n,u,t,r,i){var o=l.call(this,n,u,t,r)||this;return o.service=n,o.route=u,o.router=t,o.config=r,o.offlineService=i,o.refreshGrid=new e.m,o.gridComps={header:z,body:I,footer:M},o}return O.__extends(n,l),n.prototype.emptyQueue=function(){var l=this;window.confirm("This will delete all queued offline tasks. Are you sure?")&&this.offlineService.emptyQueue().then(function(){return l.refreshGrid.emit({})})},n}(x.d),K=u("XF9X"),Q=u("ZYCi"),R=u("D6yi"),D=e.ob({encapsulation:0,styles:[[""]],data:{}});function H(l){return e.Fb(0,[(l()(),e.qb(0,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["Offline Tasks"])),(l()(),e.qb(2,0,null,null,1,"formio-grid",[["createText",""]],null,[[null,"rowSelect"],[null,"error"]],function(l,n,u){var e=!0,t=l.component;return"rowSelect"===n&&(e=!1!==t.onSelect(u)&&e),"error"===n&&(e=!1!==t.service.onError(u)&&e),e},A,L)),e.pb(3,4833280,null,0,y.a,[g.a,q.a,e.j,e.h],{src:[0,"src"],items:[1,"items"],onForm:[2,"onForm"],query:[3,"query"],refresh:[4,"refresh"],components:[5,"components"],createText:[6,"createText"]},{rowSelect:"rowSelect",error:"error"}),(l()(),e.qb(4,0,null,null,4,"button",[["class","btn btn-warning mr-3"],["type","button"]],[[1,"disabled",0]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.offlineService.dequeueSubmissions()&&e),e},null,null)),(l()(),e.qb(5,0,null,null,2,"i",[["class","fa mr-1"]],null,null,null,null,null)),e.pb(6,278528,null,0,h.h,[e.t,e.u,e.k,e.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Ab(7,{"fa-spin fa-refresh":0,"fa-send":1}),(l()(),e.Eb(-1,null,[" Process Tasks\n"])),(l()(),e.qb(9,0,null,null,2,"button",[["class","btn btn-light"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.emptyQueue()&&e),e},null,null)),(l()(),e.qb(10,0,null,null,0,"i",[["class","fa fa-trash mr-2"]],null,null,null,null,null)),(l()(),e.Eb(-1,null,[" Empty Queue"]))],function(l,n){var u=n.component;l(n,3,0,u.gridSrc,u.offlineService.offlineSubmissions,u.service.formLoaded,u.gridQuery,u.refreshGrid,u.gridComps,"");var e=l(n,7,0,u.offlineService.sync,!u.offlineService.sync);l(n,6,0,"fa mr-1",e)},function(l,n){l(n,4,0,n.component.offlineService.isOnline?null:"")})}function W(l){return e.Fb(0,[(l()(),e.qb(0,0,null,null,1,"app-offline",[],null,null,null,H,D)),e.pb(1,114688,null,0,j,[K.a,Q.a,Q.k,R.a,T.a],null,null)],function(l,n){l(n,1,0)},null)}var G=e.mb("app-offline",j,W,{},{},[]),Y=u("OLPT"),J=function(l){function n(){return null!==l&&l.apply(this,arguments)||this}return O.__extends(n,l),n}(x.a),U=u("LWLj"),N=e.ob({encapsulation:0,styles:[[""]],data:{}});function X(l){return e.Fb(0,[(l()(),e.qb(0,0,null,null,34,"ul",[["class","nav nav-tabs"],["style","margin-bottom: 10px"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,3,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),e.qb(2,0,null,null,2,"a",[["class","nav-link"],["routerLink","../"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.zb(l,3).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e.pb(3,671744,null,0,Q.m,[Q.k,Q.a,h.g],{routerLink:[0,"routerLink"]},null),(l()(),e.qb(4,0,null,null,0,"i",[["class","fa fa-chevron-left glyphicon glyphicon-chevron-left"]],null,null,null,null,null)),(l()(),e.qb(5,0,null,null,9,"li",[["class","nav-item"],["routerLinkActive","active"]],null,null,null,null,null)),e.pb(6,1720320,null,2,Q.l,[Q.k,e.k,e.E,e.h],{routerLinkActive:[0,"routerLinkActive"]},null),e.Cb(603979776,1,{links:1}),e.Cb(603979776,2,{linksWithHrefs:1}),(l()(),e.qb(9,0,null,null,5,"a",[["class","nav-link"],["routerLink","view"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.zb(l,10).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e.pb(10,671744,[[4,4],[2,4]],0,Q.m,[Q.k,Q.a,h.g],{routerLink:[0,"routerLink"]},null),e.pb(11,1720320,null,2,Q.l,[Q.k,e.k,e.E,e.h],{routerLinkActive:[0,"routerLinkActive"]},null),e.Cb(603979776,3,{links:1}),e.Cb(603979776,4,{linksWithHrefs:1}),(l()(),e.Eb(-1,null,["View"])),(l()(),e.qb(15,0,null,null,9,"li",[["class","nav-item"],["routerLinkActive","active"]],null,null,null,null,null)),e.pb(16,1720320,null,2,Q.l,[Q.k,e.k,e.E,e.h],{routerLinkActive:[0,"routerLinkActive"]},null),e.Cb(603979776,5,{links:1}),e.Cb(603979776,6,{linksWithHrefs:1}),(l()(),e.qb(19,0,null,null,5,"a",[["class","nav-link"],["routerLink","edit"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.zb(l,20).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e.pb(20,671744,[[8,4],[6,4]],0,Q.m,[Q.k,Q.a,h.g],{routerLink:[0,"routerLink"]},null),e.pb(21,1720320,null,2,Q.l,[Q.k,e.k,e.E,e.h],{routerLinkActive:[0,"routerLinkActive"]},null),e.Cb(603979776,7,{links:1}),e.Cb(603979776,8,{linksWithHrefs:1}),(l()(),e.Eb(-1,null,["Edit"])),(l()(),e.qb(25,0,null,null,9,"li",[["class","nav-item"],["routerLinkActive","active"]],null,null,null,null,null)),e.pb(26,1720320,null,2,Q.l,[Q.k,e.k,e.E,e.h],{routerLinkActive:[0,"routerLinkActive"]},null),e.Cb(603979776,9,{links:1}),e.Cb(603979776,10,{linksWithHrefs:1}),(l()(),e.qb(29,0,null,null,5,"a",[["class","nav-link"],["routerLink","delete"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.zb(l,30).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e.pb(30,671744,[[12,4],[10,4]],0,Q.m,[Q.k,Q.a,h.g],{routerLink:[0,"routerLink"]},null),e.pb(31,1720320,null,2,Q.l,[Q.k,e.k,e.E,e.h],{routerLinkActive:[0,"routerLinkActive"]},null),e.Cb(603979776,11,{links:1}),e.Cb(603979776,12,{linksWithHrefs:1}),(l()(),e.qb(34,0,null,null,0,"span",[["class","fa fa-trash glyphicon glyphicon-trash"]],null,null,null,null,null)),(l()(),e.qb(35,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),e.pb(36,212992,null,0,Q.o,[Q.b,e.P,e.j,[8,null],e.h],null,null)],function(l,n){l(n,3,0,"../"),l(n,6,0,"active"),l(n,10,0,"view"),l(n,11,0,"active"),l(n,16,0,"active"),l(n,20,0,"edit"),l(n,21,0,"active"),l(n,26,0,"active"),l(n,30,0,"delete"),l(n,31,0,"active"),l(n,36,0)},function(l,n){l(n,2,0,e.zb(n,3).target,e.zb(n,3).href),l(n,9,0,e.zb(n,10).target,e.zb(n,10).href),l(n,19,0,e.zb(n,20).target,e.zb(n,20).href),l(n,29,0,e.zb(n,30).target,e.zb(n,30).href)})}function $(l){return e.Fb(0,[(l()(),e.qb(0,0,null,null,1,"app-resource",[],null,null,null,X,N)),e.pb(1,114688,null,0,J,[K.a,Q.a,U.a],null,null)],function(l,n){l(n,1,0)},null)}var V=e.mb("app-resource",J,$,{},{},[]),B=u("S8Yu"),Z=u("rJcy"),ll=function(l){function n(n,u,e){var t=l.call(this,n,u)||this;return t.service=n,t.config=u,t.offlineService=e,t}return O.__extends(n,l),n}(x.f),nl=e.ob({encapsulation:2,styles:[],data:{}});function ul(l){return e.Fb(0,[(l()(),e.qb(0,0,null,null,1,"formio",[],null,null,null,r.c,r.b)),e.pb(1,638976,null,0,B.a,[g.a,[2,Z.a]],{form:[0,"form"],submission:[1,"submission"],readOnly:[2,"readOnly"],hideComponents:[3,"hideComponents"],refresh:[4,"refresh"]},null)],function(l,n){var u=n.component;l(n,1,0,u.service.form,u.service.resource.request.data,!0,u.config.parents,u.service.refresh)},null)}function el(l){return e.Fb(0,[(l()(),e.qb(0,0,null,null,11,"div",[["class","card card-body bg-light"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["Offline Queue Information"])),(l()(),e.qb(3,0,null,null,8,"ul",[],null,null,null,null,null)),(l()(),e.qb(4,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Eb(5,null,["Created: ",""])),(l()(),e.qb(6,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Eb(7,null,["Request ID: ",""])),(l()(),e.qb(8,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Eb(9,null,["Method: ",""])),(l()(),e.qb(10,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Eb(11,null,["URL: ",""])),(l()(),e.hb(16777216,null,null,1,null,ul)),e.pb(13,16384,null,0,h.j,[e.P,e.M],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,13,0,n.component.service.resource.request)},function(l,n){var u=n.component;l(n,5,0,null==u.service.resource?null:null==u.service.resource.request?null:null==u.service.resource.request.data?null:u.service.resource.request.data.created),l(n,7,0,null==u.service.resource?null:null==u.service.resource.request?null:u.service.resource.request._id),l(n,9,0,null==u.service.resource?null:null==u.service.resource.request?null:u.service.resource.request.method),l(n,11,0,null==u.service.resource?null:null==u.service.resource.request?null:u.service.resource.request.url)})}function tl(l){return e.Fb(0,[(l()(),e.qb(0,0,null,null,1,"app-view",[],null,null,null,el,nl)),e.pb(1,49152,null,0,ll,[K.a,R.a,T.a],null,null)],null,null)}var rl=e.mb("app-view",ll,tl,{},{},[]),il=function(l){function n(){return null!==l&&l.apply(this,arguments)||this}return O.__extends(n,l),n.prototype.onSubmit=function(l){var n=this;this.service.save(l).then(function(){n.router.navigate(["../","view"],{relativeTo:n.route})}).catch(function(l){return n.triggerError.emit(l)})},n}(x.c),ol=e.ob({encapsulation:2,styles:[],data:{}});function cl(l){return e.Fb(0,[(l()(),e.qb(0,0,null,null,9,"div",[["class","card card-body bg-light"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["Offline Information"])),(l()(),e.qb(3,0,null,null,6,"ul",[],null,null,null,null,null)),(l()(),e.qb(4,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Eb(5,null,["Request ID: ",""])),(l()(),e.qb(6,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Eb(7,null,["Method: ",""])),(l()(),e.qb(8,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Eb(9,null,["URL: ",""])),(l()(),e.qb(10,0,null,null,1,"formio",[],null,[[null,"submit"]],function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==l.component.onSubmit(u)&&e),e},r.c,r.b)),e.pb(11,638976,null,0,B.a,[g.a,[2,Z.a]],{form:[0,"form"],submission:[1,"submission"],refresh:[2,"refresh"],error:[3,"error"]},{submit:"submit"})],function(l,n){var u=n.component;l(n,11,0,u.service.form,null==u.service.resource?null:null==u.service.resource.request?null:u.service.resource.request.data,u.service.refresh,u.triggerError)},function(l,n){var u=n.component;l(n,5,0,null==u.service.resource?null:null==u.service.resource.request?null:u.service.resource.request._id),l(n,7,0,null==u.service.resource?null:null==u.service.resource.request?null:u.service.resource.request.method),l(n,9,0,null==u.service.resource?null:null==u.service.resource.request?null:u.service.resource.request.url)})}function al(l){return e.Fb(0,[(l()(),e.qb(0,0,null,null,1,"app-edit",[],null,null,null,cl,ol)),e.pb(1,49152,null,0,il,[K.a,Q.a,Q.k,R.a],null,null)],null,null)}var sl=e.mb("app-edit",il,al,{},{},[]),bl=u("rbuc"),fl=e.ob({encapsulation:2,styles:[],data:{}});function pl(l){return e.Fb(0,[(l()(),e.qb(0,0,null,null,7,"thead",[],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e.qb(2,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["Created"])),(l()(),e.qb(4,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["Operation"])),(l()(),e.qb(6,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["Url"]))],null,null)}function hl(l){return e.Fb(0,[e.Cb(402653184,1,{template:0}),(l()(),e.hb(0,[[1,2]],null,0,null,pl))],null,null)}function vl(l){return e.Fb(0,[(l()(),e.qb(0,0,null,null,1,"app-header",[],null,null,null,hl,fl)),e.pb(1,49152,null,0,z,[],null,null)],null,null)}var dl=e.mb("app-header",z,vl,{actionAllowed:"actionAllowed"},{sort:"sort"},[]),ml=e.ob({encapsulation:2,styles:[],data:{}});function kl(l){return e.Fb(0,[(l()(),e.qb(0,0,null,null,6,"tr",[],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onRowSelect(u,l.context.$implicit)&&e),e},null,null)),(l()(),e.qb(1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Eb(2,null,["",""])),(l()(),e.qb(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Eb(4,null,["",""])),(l()(),e.qb(5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Eb(6,null,["",""]))],null,function(l,n){var u=n.component;l(n,2,0,n.context.$implicit.created),l(n,4,0,u.getMethod(n.context.$implicit.method)),l(n,6,0,n.context.$implicit.url)})}function gl(l){return e.Fb(0,[(l()(),e.qb(0,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),e.hb(16777216,[[1,2]],null,1,null,kl)),e.pb(2,278528,null,0,h.i,[e.P,e.M,e.t],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,2,0,n.component.rows)},null)}function yl(l){return e.Fb(0,[e.Cb(671088640,1,{template:0}),(l()(),e.hb(0,[[1,2]],null,0,null,gl))],null,null)}function ql(l){return e.Fb(0,[(l()(),e.qb(0,0,null,null,1,"app-body",[],null,null,null,yl,ml)),e.pb(1,49152,null,0,I,[],null,null)],null,null)}var Ll=e.mb("app-body",I,ql,{header:"header",actionAllowed:"actionAllowed"},{rowSelect:"rowSelect",rowAction:"rowAction"},[]),Sl=e.ob({encapsulation:2,styles:[],data:{}});function wl(l){return e.Fb(0,[(l()(),e.qb(0,0,null,null,0,"tfoot",[["class","formio-grid-footer"]],null,null,null,null,null))],null,null)}function Cl(l){return e.Fb(0,[e.Cb(402653184,1,{template:0}),(l()(),e.hb(0,[[1,2]],null,0,null,wl))],null,null)}function El(l){return e.Fb(0,[(l()(),e.qb(0,0,null,null,1,"app-footer",[],null,null,null,Cl,Sl)),e.pb(1,49152,null,0,M,[],null,null)],null,null)}var Fl=e.mb("app-footer",M,El,{header:"header",body:"body",createText:"createText",size:"size",actionAllowed:"actionAllowed"},{pageChanged:"pageChanged",createItem:"createItem"},[]),Pl=u("gIcY"),Al=u("dXze"),Ol=u("Vx+w"),xl=function(l){function n(n){var u=l.call(this)||this;return u.config=n,u}return O.__extends(n,l),Object.defineProperty(n.prototype,"name",{get:function(){return this.config.formName},set:function(l){},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"form",{get:function(){return this.config.formPath},set:function(l){},enumerable:!0,configurable:!0}),n}(x.b),Tl=(u("htdP"),function(l){function n(n,u,e,t,r){var i=l.call(this,n,u,e,t)||this;return i.appConfig=n,i.config=u,i.loader=e,i.resourcesService=t,i.offlineService=r,i}return O.__extends(n,l),n.prototype.loadResource=function(l){var n=this;return this.setContext(l),this.loader.loading=!0,this.resourceLoading=this.resourceLoaded=new Promise(function(u,e){l.params.subscribe(function(l){n.offlineService.offlinePlugin.ready.then(function(){var t=n.offlineService.offlinePlugin.getSubmissionQueueSubmission(l.form,l.id);t?(n.resource=t,n.loader.loading=!1,n.refresh.emit({property:"submission",value:n.resource}),u(t)):(n.onSubmissionError("Submission not found"),e("Submission not found"))})})}),this.resourceLoading},n.prototype.save=function(l){var n=this;return this.offlineService.offlinePlugin.ready.then(function(){return n.offlineService.offlinePlugin.updateSubmissionQueueSubmission(l)})},n.prototype.remove=function(){var l=this;return this.offlineService.offlinePlugin.ready.then(function(){return l.offlineService.offlinePlugin.removeSubmissionQueueSubmission(l.resource.request)})},n}(x.e)),_l=u("Di7c"),zl=u("ikog"),Il=u("YCyN"),Ml=u("pP+O"),jl=u("QMXP"),Kl=u("5YvF");u.d(n,"OfflineModuleNgFactory",function(){return Ql});var Ql=e.nb(t,[],function(l){return e.xb([e.yb(512,e.j,e.cb,[[8,[r.a,i.a,o.a,c.a,a.a,s.a,b.a,f.a,p.a,G,Y.a,V,rl,sl,bl.a,dl,Ll,Fl]],[3,e.j],e.y]),e.yb(4608,h.l,h.k,[e.v,[2,h.t]]),e.yb(4608,g.a,g.a,[]),e.yb(4608,q.a,q.a,[]),e.yb(4608,Pl.g,Pl.g,[]),e.yb(4608,Al.c,Al.c,[]),e.yb(4608,R.a,xl,[Ol.a]),e.yb(4608,K.a,Tl,[Ol.a,R.a,g.a,[2,_l.a],T.a]),e.yb(1073742336,h.b,h.b,[]),e.yb(1073742336,zl.a,zl.a,[]),e.yb(1073742336,Pl.f,Pl.f,[]),e.yb(1073742336,Pl.a,Pl.a,[]),e.yb(1073742336,Q.n,Q.n,[[2,Q.t],[2,Q.k]]),e.yb(1073742336,Al.d,Al.d,[]),e.yb(1073742336,Il.a,Il.a,[]),e.yb(1073742336,Ml.a,Ml.a,[]),e.yb(1073742336,t,t,[]),e.yb(1024,Q.i,function(){return[[{path:"",component:j},{path:"new",component:jl.a},{path:":id",component:J,children:[{path:"",redirectTo:"view",pathMatch:"full"},{path:"view",component:ll},{path:"edit",component:il},{path:"delete",component:Kl.a}]}]]},[])])})}}]);