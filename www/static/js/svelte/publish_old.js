!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define("svelte/publish_old",t):e.publish=t()}(this,function(){"use strict";function e(){}function t(e,t){for(var n in t)e[n]=t[n];return e}function n(e,t){t.appendChild(e)}function s(e,t,n){t.insertBefore(e,n)}function i(e){e.parentNode.removeChild(e)}function r(e){for(;e.nextSibling;)e.parentNode.removeChild(e.nextSibling)}function a(e){for(var t=0;t<e.length;t+=1)e[t]&&e[t].d()}function u(){return document.createDocumentFragment()}function o(e){return document.createElement(e)}function l(e){return document.createTextNode(e)}function c(e,t,n){e.addEventListener(t,n,!1)}function h(e,t,n){e.removeEventListener(t,n,!1)}function d(e,t,n){e.setAttribute(t,n)}function p(e,t,n){e.style.setProperty(t,n)}function f(){return Object.create(null)}function _(t){this.destroy=e,this.fire("destroy"),this.set=this.get=e,!1!==t&&this._fragment.u(),this._fragment.d(),this._fragment=this._state=null}function m(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function b(e,t){return e!=e?t==t:e!==t}function v(e,t){var n=e in this._handlers&&this._handlers[e].slice();if(n)for(var s=0;s<n.length;s+=1){var i=n[s];i.__calling||(i.__calling=!0,i.call(this,t),i.__calling=!1)}}function g(e){return e?this._state[e]:this._state}function w(e,t){e._handlers=f(),e._bind=t._bind,e.options=t,e.root=t.root||e,e.store=e.root.store||t.store}function y(e,t,n){var s=t.bind(this);return n&&!1===n.init||s(this.get()[e],void 0),this.on(n&&n.defer?"update":"state",function(t){t.changed[e]&&s(t.current[e],t.previous&&t.previous[e])})}function N(e,t){if("teardown"===e)return this.on("destroy",t);var n=this._handlers[e]||(this._handlers[e]=[]);return n.push(t),{cancel:function(){var e=n.indexOf(t);~e&&n.splice(e,1)}}}function x(e){for(;e&&e.length;)e.shift()()}var T={destroy:_,get:g,fire:v,observe:y,on:N,set:function(e){this._set(t({},e)),this.root._lock||(this.root._lock=!0,x(this.root._beforecreate),x(this.root._oncreate),x(this.root._aftercreate),this.root._lock=!1)},teardown:_,_recompute:e,_set:function(e){var n=this._state,s={},i=!1;for(var r in e)this._differs(e[r],n[r])&&(s[r]=i=!0);i&&(this._state=t(t({},n),e),this._recompute(s,this._state),this._bind&&this._bind(s,this._state),this._fragment&&(this.fire("state",{changed:s,current:this._state,previous:n}),this._fragment.p(s,this._state),this.fire("update",{changed:s,current:this._state,previous:n})))},_mount:function(e,t){this._fragment[this._fragment.i?"i":"m"](e,t||null)},_unmount:function(){this._fragment&&this._fragment.u()},_differs:m};var k={show:function(){var e=this,t=setTimeout(function(){e.set({visible:!0})},400);this.set({t:t})},hide:function(){var e=this.get().t;clearTimeout(e),this.set({visible:!1})}};function L(t,n){var r;return{c:function(){r=o("i"),this.h()},h:function(){r.className="im im-graduation-hat svelte-1mkn8ur"},m:function(e,t){s(r,e,t)},u:function(){i(r)},d:e}}function M(t,n){var r;return{c:function(){r=l("?")},m:function(e,t){s(r,e,t)},u:function(){i(r)},d:e}}function H(t,r){var a,u=t._slotted.default;return{c:function(){a=o("div"),this.h()},h:function(){a.className="content svelte-1mkn8ur"},m:function(e,t){s(a,e,t),u&&n(u,a)},u:function(){i(a),u&&function(e,t){for(;e.firstChild;)t.appendChild(e.firstChild)}(a,u)},d:e}}function C(e){w(this,e),this._state=t({visible:!1},e.data),this._slotted=e.slots||{},this.slots={},this._fragment=function(e,t){var r,a,u;function d(e){return e.visible?L:M}var p=d(t),f=p(e,t),_=t.visible&&H(e);function m(t){e.show()}function b(t){e.hide()}return{c:function(){r=o("div"),a=o("span"),f.c(),u=l("\n    "),_&&_.c(),this.h()},h:function(){a.className="svelte-1mkn8ur",c(r,"mouseenter",m),c(r,"mouseleave",b),r.className="help svelte-1mkn8ur"},m:function(e,t){s(r,e,t),n(a,r),f.m(a,null),n(u,r),_&&_.m(r,null)},p:function(t,n){p!==(p=d(n))&&(f.u(),f.d(),(f=p(e,n)).c(),f.m(a,null)),n.visible?_||((_=H(e)).c(),_.m(r,null)):_&&(_.u(),_.d(),_=null)},u:function(){i(r),f.u(),_&&_.u()},d:function(){f.d(),_&&_.d(),h(r,"mouseenter",m),h(r,"mouseleave",b)}}}(this,this._state),e.target&&(this._fragment.c(),this._mount(e.target,e.anchor))}function U(e,t){var n=arguments;if(void 0===t&&(t="core"),e=e.trim(),!dw.backend.__messages[t])return"MISSING:"+e;var s=dw.backend.__messages[t][e]||dw.backend.__messages.core[e]||e;if(arguments.length>2)for(var i=2;i<arguments.length;i++){var r=i-1;s=s.replace("$"+r,n[i])}return s}function S(e,t,n,s,i){var r={method:t,body:s,mode:"cors",credentials:n};window.fetch(e,r).then(function(e){return 200!=e.status?new Error(e.statusText):e.text()}).then(function(e){try{return JSON.parse(e)}catch(t){return console.warn("malformed json input",e),e}}).then(i).catch(function(e){console.error(e)})}t(C.prototype,T),t(C.prototype,k);var j=[100,200,300,400,500,700,800,900,1e3];var G=0,P=!0;var A={publish:function(){var e=this;if(window.chart.save){var t,n,s,i,r,a=e.get().chart;e.set({publishing:!0,progress:0,publish_error:!1}),a.metadata.publish["embed-heights"]=(e.get("embed_templates"),t={},n=window.$,s=n(n("#iframe-vis")[0].contentDocument),i=n("h1",s).height()+n(".chart-intro",s).height()+n(".dw-chart-notes",s).height(),r=n("#iframe-vis").height(),j.forEach(function(e){s.find("h1,.chart-intro,.dw-chart-notes").css("width",e+"px");var a=n("h1",s).height()+n(".chart-intro",s).height()+n(".dw-chart-notes",s).height();t[e]=r+(a-i)}),s.find("h1,.chart-intro,.dw-chart-notes").css("width","auto"),t),e.set({chart:a}),window.chart.attributes(a).save().then(function(t){S("/api/charts/"+a.id+"/publish","POST","include",null,function(t){"ok"==t.status?e.publishFinished(t.data):e.set({publish_error:t.message})}),G=0,e.updateStatus()})}else setTimeout(function(){e.publish()},100)},updateProgressBar:function(e){this.refs.bar&&(this.refs.bar.style.width=(100*e).toFixed()+"%")},updateStatus:function(){var e=this,t=e.get().chart;G+=.05,function(e,t,n){2==arguments.length&&(n=t,t="include"),S(e,"GET",t,null,n)}("/api/charts/"+t.id+"/publish/status",function(t){t&&(t=+t/100+G,e.set({progress:Math.min(1,t)})),e.get().publishing&&setTimeout(function(){e.updateStatus()},400)})},publishFinished:function(e){var t=this;this.set({progress:1,published:!0,needs_republish:!1}),setTimeout(function(){return t.set({publishing:!1})},500),this.set({chart:e}),window.chart.attributes(e)},copy:function(e){var t=this;console.log("COPY",e),t.refs.embedInput.select();try{document.execCommand("copy")&&(t.set({copy_success:!0}),setTimeout(function(){return t.set({copy_success:!1})},300))}catch(e){}}};function E(e){var t=e.changed,n=e.current,s=window.dw&&window.dw.backend&&window.dw.backend.setUserData;if(t.publishing&&n.publishing&&this.updateProgressBar(n.progress),t.progress&&this.updateProgressBar(n.progress),t.embed_type&&s){var i=window.dw.backend.__userData;if(!n.embed_type||!i)return;i.embed_type=n.embed_type,window.dw.backend.setUserData(i)}if(t.shareurl_type&&s){var r=window.dw.backend.__userData;if(!n.shareurl_type||!r)return;r.shareurl_type=n.shareurl_type,window.dw.backend.setUserData(r)}t.published&&window.document.querySelector(".dw-create-publish .publish-step").classList[n.published?"add":"remove"]("is-published"),t.auto_publish&&n.auto_publish&&P&&(this.publish(),P=!1,window.history.replaceState("","",location.pathname))}function O(t,n){var r,a=U("publish / republish-intro");return{c:function(){r=o("p")},m:function(e,t){s(r,e,t),r.innerHTML=a},u:function(){r.innerHTML="",i(r)},d:e}}function D(t,n){var r,a=U("publish / publish-intro");return{c:function(){r=o("p"),this.h()},h:function(){p(r,"margin-bottom","20px")},m:function(e,t){s(r,e,t),r.innerHTML=a},u:function(){r.innerHTML="",i(r)},d:e}}function I(t,r){var a,u,c,h,d,p,f=U("publish / republish-btn");return{c:function(){a=o("span"),u=o("i"),h=l(" "),d=o("span"),p=l(f),this.h()},h:function(){u.className=c="fa fa-fw fa-refresh "+(r.publishing?"fa-spin":"")+" svelte-178xnhw",d.className="title svelte-178xnhw",a.className="re-publish"},m:function(e,t){s(a,e,t),n(u,a),n(h,a),n(d,a),n(p,d)},p:function(e,t){e.publishing&&c!==(c="fa fa-fw fa-refresh "+(t.publishing?"fa-spin":"")+" svelte-178xnhw")&&(u.className=c)},u:function(){i(a)},d:e}}function B(t,r){var a,u,c,h,d,p,f=U("publish / publish-btn");return{c:function(){a=o("span"),u=o("i"),h=l(" "),d=o("span"),p=l(f),this.h()},h:function(){u.className=c="fa fa-fw "+(r.publishing?"fa-refresh fa-spin":"fa-cloud-upload")+" svelte-178xnhw",d.className="title svelte-178xnhw",a.className="publish"},m:function(e,t){s(a,e,t),n(u,a),n(h,a),n(d,a),n(p,d)},p:function(e,t){e.publishing&&c!==(c="fa fa-fw "+(t.publishing?"fa-refresh fa-spin":"fa-cloud-upload")+" svelte-178xnhw")&&(u.className=c)},u:function(){i(a)},d:e}}function F(t,r){var a,u,c,h,d=U("publish / publish-btn-intro");return{c:function(){a=o("div"),(u=o("div")).innerHTML='<i class="fa fa-chevron-left"></i>',c=l("\n    "),h=o("div"),this.h()},h:function(){u.className="arrow svelte-178xnhw",h.className="text svelte-178xnhw",a.className="publish-intro svelte-178xnhw"},m:function(e,t){s(a,e,t),n(u,a),n(c,a),n(h,a),h.innerHTML=d},u:function(){h.innerHTML="",i(a)},d:e}}function $(t,n){var r,a=U("publish / republish-alert");return{c:function(){r=o("div"),this.h()},h:function(){r.className="btn-aside alert svelte-178xnhw"},m:function(e,t){s(r,e,t),r.innerHTML=a},u:function(){r.innerHTML="",i(r)},d:e}}function q(t,n){var r,a=U("publish / publish-success");return{c:function(){r=o("div"),this.h()},h:function(){r.className="alert alert-success"},m:function(e,t){s(r,e,t),r.innerHTML=a},u:function(){r.innerHTML="",i(r)},d:e}}function J(t,n){var r;return{c:function(){r=o("div"),this.h()},h:function(){r.className="alert alert-error"},m:function(e,t){s(r,e,t),r.innerHTML=n.publish_error},p:function(e,t){e.publish_error&&(r.innerHTML=t.publish_error)},u:function(){r.innerHTML="",i(r)},d:e}}function Y(e,t){var r,a,u,c,h,d,p,f=U("publish / progress / please-wait");return{c:function(){r=o("div"),a=l(f),u=l("\n    "),c=o("div"),h=o("div"),this.h()},h:function(){h.className=d="bar "+(t.progress<1?"":"bar-success")+" svelte-178xnhw",c.className="progress progress-striped active svelte-178xnhw",r.className=p="alert "+(t.progress<1?"alert-info":"alert-success")+" publishing svelte-178xnhw"},m:function(t,i){s(r,t,i),n(a,r),n(u,r),n(c,r),n(h,c),e.refs.bar=h},p:function(e,t){e.progress&&d!==(d="bar "+(t.progress<1?"":"bar-success")+" svelte-178xnhw")&&(h.className=d),e.progress&&p!==(p="alert "+(t.progress<1?"alert-info":"alert-success")+" publishing svelte-178xnhw")&&(r.className=p)},u:function(){i(r)},d:function(){e.refs.bar===h&&(e.refs.bar=null)}}}function z(e,t){var a,u,p,f,_,m=t.tpl,b=(t.each_value,t.tpl_index,m.name);function v(){e.set({shareurl_type:u.__value})}return{c:function(){a=o("label"),u=o("input"),f=l(" "),_=o("noscript"),this.h()},h:function(){e._bindingGroups[0].push(u),c(u,"change",v),u.__value=p=m.id,u.value=u.__value,d(u,"type","radio"),u.name="url-type",u.className="svelte-178xnhw",a.className="radio"},m:function(e,i){s(a,e,i),n(u,a),u.checked=u.__value===t.shareurl_type,n(f,a),n(_,a),_.insertAdjacentHTML("afterend",b)},p:function(e,t){m=t.tpl,t.each_value,t.tpl_index,u.checked=u.__value===t.shareurl_type,e.plugin_shareurls&&p!==(p=m.id)&&(u.__value=p),u.value=u.__value,e.plugin_shareurls&&b!==(b=m.name)&&(r(_),_.insertAdjacentHTML("afterend",b))},u:function(){r(_),i(a)},d:function(){e._bindingGroups[0].splice(e._bindingGroups[0].indexOf(u),1),h(u,"change",v)}}}function K(e,t){var a,u,p,f,_,m=t.tpl,b=(t.each_value_1,t.tpl_index_1,m.title);function v(){e.set({embed_type:u.__value})}return{c:function(){a=o("label"),u=o("input"),f=l(" "),_=o("noscript"),this.h()},h:function(){e._bindingGroups[1].push(u),c(u,"change",v),d(u,"type","radio"),u.__value=p=m.id,u.value=u.__value,u.className="svelte-178xnhw",a.className="radio"},m:function(e,i){s(a,e,i),n(u,a),u.checked=u.__value===t.embed_type,n(f,a),n(_,a),_.insertAdjacentHTML("afterend",b)},p:function(e,t){m=t.tpl,t.each_value_1,t.tpl_index_1,u.checked=u.__value===t.embed_type,e.embed_templates&&p!==(p=m.id)&&(u.__value=p),u.value=u.__value,e.embed_templates&&b!==(b=m.title)&&(r(_),_.insertAdjacentHTML("afterend",b))},u:function(){r(_),i(a)},d:function(){e._bindingGroups[1].splice(e._bindingGroups[1].indexOf(u),1),h(u,"change",v)}}}function Q(t,a){var u,c,h,d,p,f,_=a.tpl,m=(a.each_value_2,a.tpl_index_2,_.title),b=_.text;return{c:function(){u=o("div"),c=o("b"),h=l(m),d=l(":"),p=l(" "),f=o("noscript")},m:function(e,t){s(u,e,t),n(c,u),n(h,c),n(d,c),n(p,u),n(f,u),f.insertAdjacentHTML("afterend",b)},p:function(e,t){_=t.tpl,t.each_value_2,t.tpl_index_2,e.embed_templates&&m!==(m=_.title)&&(h.data=m),e.embed_templates&&b!==(b=_.text)&&(r(f),f.insertAdjacentHTML("afterend",b))},u:function(){r(f),i(u)},d:e}}function R(e){w(this,e),this.refs={},this._state=t({chart:{id:""},embed_templates:[],plugin_shareurls:[],published:!1,publishing:!1,needs_republish:!1,publish_error:!1,auto_publish:!1,progress:0,shareurl_type:"default",embed_type:"responsive",copy_success:!1},e.data),this._recompute({shareurl_type:1,chart:1,plugin_shareurls:1,published:1,embed_type:1},this._state),this._bindingGroups=[[],[]],this._handlers.state=[E];var f=this;e.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=function(e,f){var _,m,b,v,g,w,y,N,x,T,k,L,M,H,S,j,G,P,A,E,R,V,W,X,Z,ee,te,ne,se,ie,re,ae,ue,oe,le,ce,he,de,pe,fe,_e,me,be,ve,ge,we,ye,Ne,xe,Te,ke,Le,Me,He,Ce,Ue,Se,je,Ge,Pe,Ae,Ee=U("publish / share-embed"),Oe=U("publish / share-url"),De=U("publish / share-url / fullscreen"),Ie=U("publish / help / share-url"),Be=U("publish / embed"),Fe=U("publish / copy"),$e=U("publish / copy-success"),qe=U("publish / embed / help");function Je(e){return e.published?O:D}var Ye=Je(f),ze=Ye(e,f);function Ke(e){return e.published?I:B}var Qe=Ke(f),Re=Qe(e,f);function Ve(t){e.publish()}var We=!f.published&&F(),Xe=f.needs_republish&&!f.publishing&&$(),Ze=f.published&&!f.needs_republish&&1==f.progress&&!f.publishing&&q(),et=f.publish_error&&J(0,f),tt=f.publishing&&Y(e,f);function nt(){e.set({shareurl_type:V.__value})}for(var st=f.plugin_shareurls,it=[],rt=0;rt<st.length;rt+=1)it[rt]=z(e,t(t({},f),{each_value:st,tpl:st[rt],tpl_index:rt}));var at=new C({root:e.root,slots:{default:u()}}),ut=f.embed_templates,ot=[];for(rt=0;rt<ut.length;rt+=1)ot[rt]=K(e,t(t({},f),{each_value_1:ut,tpl:ut[rt],tpl_index_1:rt}));function lt(t){var n=e.get();e.copy(n.embedCode)}var ct=f.embed_templates.slice(2),ht=[];for(rt=0;rt<ct.length;rt+=1)ht[rt]=Q(0,t(t({},f),{each_value_2:ct,tpl:ct[rt],tpl_index_2:rt}));var dt=new C({root:e.root,slots:{default:u()}});return{c:function(){ze.c(),_=l("\n\n"),m=o("button"),Re.c(),v=l("\n\n\n"),We&&We.c(),g=l("\n\n\n"),Xe&&Xe.c(),w=l("\n"),Ze&&Ze.c(),y=l("\n\n"),et&&et.c(),N=l("\n\n"),tt&&tt.c(),x=l("\n\n"),T=o("div"),k=o("h2"),L=l("\n    "),M=o("div"),H=o("i"),S=l("\n        "),j=o("div"),G=o("div"),P=o("b"),A=l("\n                "),E=o("div"),R=o("label"),V=o("input"),W=l(" "),X=o("noscript"),Z=l("\n                    ");for(var e=0;e<it.length;e+=1)it[e].c();for(ee=l("\n            "),te=o("div"),ne=o("a"),se=l(f.shareUrl),ie=l("\n        "),re=l("\n            "),ae=o("div"),ue=l("\n        "),at._fragment.c(),oe=l("\n\n    "),le=o("div"),ce=o("i"),he=l("\n        "),de=o("div"),pe=o("div"),fe=o("b"),_e=l("\n                "),me=o("div"),e=0;e<ot.length;e+=1)ot[e].c();for(be=l("\n            "),ve=o("div"),ge=o("input"),we=l(" "),ye=o("button"),Ne=o("i"),xe=l(" "),Te=l(Fe),ke=l("\n                "),Le=o("div"),Me=l($e),Ce=l("\n        "),Ue=l("\n            "),Se=o("div"),je=o("noscript"),Ge=l("\n                "),e=0;e<ht.length;e+=1)ht[e].c();Pe=l("\n        "),dt._fragment.c(),this.h()},h:function(){c(m,"click",Ve),m.disabled=f.publishing,m.className=b="btn-publish btn btn-primary btn-large "+(f.published?"":"btn-first-publish")+" svelte-178xnhw",H.className="icon fa fa-link fa-fw",e._bindingGroups[0].push(V),c(V,"change",nt),V.__value="default",V.value=V.__value,d(V,"type","radio"),V.name="url-type",V.className="svelte-178xnhw",R.className="radio",E.className="embed-options svelte-178xnhw",G.className="h",ne.target="_blank",ne.className="share-url svelte-178xnhw",ne.href=f.shareUrl,te.className="inpt",j.className="ctrls",M.className="block",ce.className="icon fa fa-code fa-fw",me.className="embed-options svelte-178xnhw",pe.className="h",d(ge,"type","text"),ge.className="input embed-code",ge.readOnly=!0,ge.value=f.embedCode,Ne.className="fa fa-copy",c(ye,"click",lt),ye.className="btn btn-copy",ye.title="copy",Le.className=He="copy-success "+(f.copy_success?"show":"")+" svelte-178xnhw",ve.className="inpt",de.className="ctrls",le.className="block",p(T,"margin-top","20px"),T.className=Ae=f.published?"":"inactive"},m:function(t,i){ze.m(t,i),s(_,t,i),s(m,t,i),Re.m(m,null),s(v,t,i),We&&We.m(t,i),s(g,t,i),Xe&&Xe.m(t,i),s(w,t,i),Ze&&Ze.m(t,i),s(y,t,i),et&&et.m(t,i),s(N,t,i),tt&&tt.m(t,i),s(x,t,i),s(T,t,i),n(k,T),k.innerHTML=Ee,n(L,T),n(M,T),n(H,M),n(S,M),n(j,M),n(G,j),n(P,G),P.innerHTML=Oe,n(A,G),n(E,G),n(R,E),n(V,R),V.checked=V.__value===f.shareurl_type,n(W,R),n(X,R),X.insertAdjacentHTML("afterend",De),n(Z,E);for(var r=0;r<it.length;r+=1)it[r].m(E,null);for(n(ee,j),n(te,j),n(ne,te),n(se,ne),n(ie,M),n(re,at._slotted.default),n(ae,at._slotted.default),ae.innerHTML=Ie,n(ue,at._slotted.default),at._mount(M,null),n(oe,T),n(le,T),n(ce,le),n(he,le),n(de,le),n(pe,de),n(fe,pe),fe.innerHTML=Be,n(_e,pe),n(me,pe),r=0;r<ot.length;r+=1)ot[r].m(me,null);for(n(be,de),n(ve,de),n(ge,ve),e.refs.embedInput=ge,n(we,ve),n(ye,ve),n(Ne,ye),n(xe,ye),n(Te,ye),n(ke,ve),n(Le,ve),n(Me,Le),n(Ce,le),n(Ue,dt._slotted.default),n(Se,dt._slotted.default),n(je,Se),je.insertAdjacentHTML("beforebegin",qe),n(Ge,Se),r=0;r<ht.length;r+=1)ht[r].m(Se,null);n(Pe,dt._slotted.default),dt._mount(le,null)},p:function(n,s){Ye!==(Ye=Je(s))&&(ze.u(),ze.d(),(ze=Ye(e,s)).c(),ze.m(_.parentNode,_)),Qe===(Qe=Ke(s))&&Re?Re.p(n,s):(Re.u(),Re.d(),(Re=Qe(e,s)).c(),Re.m(m,null)),n.publishing&&(m.disabled=s.publishing),n.published&&b!==(b="btn-publish btn btn-primary btn-large "+(s.published?"":"btn-first-publish")+" svelte-178xnhw")&&(m.className=b),s.published?We&&(We.u(),We.d(),We=null):We||((We=F()).c(),We.m(g.parentNode,g)),s.needs_republish&&!s.publishing?Xe||((Xe=$()).c(),Xe.m(w.parentNode,w)):Xe&&(Xe.u(),Xe.d(),Xe=null),!s.published||s.needs_republish||1!=s.progress||s.publishing?Ze&&(Ze.u(),Ze.d(),Ze=null):Ze||((Ze=q()).c(),Ze.m(y.parentNode,y)),s.publish_error?et?et.p(n,s):((et=J(0,s)).c(),et.m(N.parentNode,N)):et&&(et.u(),et.d(),et=null),s.publishing?tt?tt.p(n,s):((tt=Y(e,s)).c(),tt.m(x.parentNode,x)):tt&&(tt.u(),tt.d(),tt=null),V.checked=V.__value===s.shareurl_type;var i=s.plugin_shareurls;if(n.shareurl_type||n.plugin_shareurls){for(var r=0;r<i.length;r+=1){var a=t(t({},s),{each_value:i,tpl:i[r],tpl_index:r});it[r]?it[r].p(n,a):(it[r]=z(e,a),it[r].c(),it[r].m(E,null))}for(;r<it.length;r+=1)it[r].u(),it[r].d();it.length=i.length}n.shareUrl&&(se.data=s.shareUrl,ne.href=s.shareUrl);var u=s.embed_templates;if(n.embed_type||n.embed_templates){for(r=0;r<u.length;r+=1){var o=t(t({},s),{each_value_1:u,tpl:u[r],tpl_index_1:r});ot[r]?ot[r].p(n,o):(ot[r]=K(e,o),ot[r].c(),ot[r].m(me,null))}for(;r<ot.length;r+=1)ot[r].u(),ot[r].d();ot.length=u.length}n.embedCode&&(ge.value=s.embedCode),n.copy_success&&He!==(He="copy-success "+(s.copy_success?"show":"")+" svelte-178xnhw")&&(Le.className=He);var l=s.embed_templates.slice(2);if(n.embed_templates){for(r=0;r<l.length;r+=1){var c=t(t({},s),{each_value_2:l,tpl:l[r],tpl_index_2:r});ht[r]?ht[r].p(n,c):(ht[r]=Q(0,c),ht[r].c(),ht[r].m(Se,null))}for(;r<ht.length;r+=1)ht[r].u(),ht[r].d();ht.length=l.length}n.published&&Ae!==(Ae=s.published?"":"inactive")&&(T.className=Ae)},u:function(){k.innerHTML="",P.innerHTML="",r(X),ae.innerHTML="",fe.innerHTML="",function(e){for(;e.previousSibling;)e.parentNode.removeChild(e.previousSibling)}(je),ze.u(),i(_),i(m),Re.u(),i(v),We&&We.u(),i(g),Xe&&Xe.u(),i(w),Ze&&Ze.u(),i(y),et&&et.u(),i(N),tt&&tt.u(),i(x),i(T);for(var e=0;e<it.length;e+=1)it[e].u();for(e=0;e<ot.length;e+=1)ot[e].u();for(e=0;e<ht.length;e+=1)ht[e].u()},d:function(){ze.d(),Re.d(),h(m,"click",Ve),We&&We.d(),Xe&&Xe.d(),Ze&&Ze.d(),et&&et.d(),tt&&tt.d(),e._bindingGroups[0].splice(e._bindingGroups[0].indexOf(V),1),h(V,"change",nt),a(it),at.destroy(!1),a(ot),e.refs.embedInput===ge&&(e.refs.embedInput=null),h(ye,"click",lt),a(ht),dt.destroy(!1)}}}(this,this._state),this.root._oncreate.push(function(){var e={shareurl_type:1,chart:1,plugin_shareurls:1,published:1,embed_type:1,publishing:1,needs_republish:1,progress:1,publish_error:1,shareUrl:1,embed_templates:1,embedCode:1,copy_success:1};E.call(f,{changed:e,current:f._state}),f.fire("update",{changed:e,current:f._state})}),e.target&&(this._fragment.c(),this._mount(e.target,e.anchor),this._lock=!0,x(this._beforecreate),x(this._oncreate),x(this._aftercreate),this._lock=!1)}function V(e,n){this._observers={pre:f(),post:f()},this._handlers={},this._dependents=[],this._computed=f(),this._sortedComputedProperties=[],this._state=t({},e),this._differs=n&&n.immutable?b:m}t(R.prototype,T),t(R.prototype,A),R.prototype._recompute=function(e,t){var n,s,i;(e.shareurl_type||e.chart||e.plugin_shareurls||e.published)&&this._differs(t.shareUrl,t.shareUrl=function(e){var t=e.shareurl_type,n=e.chart,s=e.plugin_shareurls;if(!e.published)return"https://www.datawrapper.de/...";if("default"==t)return n.publicUrl;var i="";return s.forEach(function(e){e.id==t&&(i=e.url.replace(/%chart_id%/g,n.id))}),i}(t))&&(e.shareUrl=!0),(e.embed_type||e.chart)&&this._differs(t.embedCode,t.embedCode=(s=(n=t).embed_type,(i=n.chart).metadata?i.metadata.publish&&!i.metadata.publish["embed-codes"]?'<iframe src="'+i.publicUrl+'" width="100%" height="'+i.metadata.publish["embed-height"]+'" scrolling="no" frameborder="0" allowtransparency="true"></iframe>':i.metadata.publish["embed-codes"]["embed-method-"+s]:""))&&(e.embedCode=!0)},t(V.prototype,{_add:function(e,t){this._dependents.push({component:e,props:t})},_init:function(e){for(var t={},n=0;n<e.length;n+=1){var s=e[n];t["$"+s]=this._state[s]}return t},_remove:function(e){for(var t=this._dependents.length;t--;)if(this._dependents[t].component===e)return void this._dependents.splice(t,1)},_sortComputedProperties:function(){var e,t=this._computed,n=this._sortedComputedProperties=[],s=f();function i(r){if(e[r])throw new Error("Cyclical dependency detected");if(!s[r]){s[r]=!0;var a=t[r];a&&(e[r]=!0,a.deps.forEach(i),n.push(a))}}for(var r in this._computed)e=f(),i(r)},compute:function(e,t,n){var s,i=this,r={deps:t,update:function(r,a,u){var o=t.map(function(e){return e in a&&(u=!0),r[e]});if(u){var l=n.apply(null,o);i._differs(l,s)&&(s=l,a[e]=!0,r[e]=s)}}};r.update(this._state,{},!0),this._computed[e]=r,this._sortComputedProperties()},fire:v,get:g,observe:y,on:N,onchange:function(e){return console.warn("store.onchange is deprecated in favour of store.on('state', event => {...})"),this.on("state",function(t){e(t.current,t.changed)})},set:function(e){var n=this._state,s=this._changed={},i=!1;for(var r in e){if(this._computed[r])throw new Error("'"+r+"' is a read-only property");this._differs(e[r],n[r])&&(s[r]=i=!0)}if(i){this._state=t(t({},n),e);for(var a=0;a<this._sortedComputedProperties.length;a+=1)this._sortedComputedProperties[a].update(this._state,s);this.fire("state",{changed:s,current:this._state,previous:n});var u=this._dependents.slice();for(a=0;a<u.length;a+=1){var o=u[a],l={};i=!1;for(var c=0;c<o.props.length;c+=1){var h=o.props[c];h in s&&(l["$"+h]=this._state[h],i=!0)}i&&o.component.set(l)}this.fire("update",{changed:s,current:this._state,previous:n})}}});return{App:R,store:new V({}),data:{chart:{id:""},embed_templates:[],plugin_shareurls:[],published:!1,publishing:!1,needs_republish:!1,publish_error:!1,auto_publish:!1,progress:0,shareurl_type:"default",embed_type:"responsive",copy_success:!1}}});