import{a as k,r as U,u as j,b as v,o as B,c as r,d as y,e as $,f as t,w as u,g as _,A as T,h as V,i as d,j as m,t as L,F as z,k as q,l as E,m as N,v as F,n as D,p as K,q as R,s as G,S as H,x as J,y as W,z as X}from"./vendor.b978b34e.js";const Y=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const e of n)if(e.type==="childList")for(const f of e.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function a(n){const e={};return n.integrity&&(e.integrity=n.integrity),n.referrerpolicy&&(e.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?e.credentials="include":n.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(n){if(n.ep)return;n.ep=!0;const e=a(n);fetch(n.href,e)}};Y();const O="https://api.github.com/repos/mewcoder/FE-Qu";k.interceptors.request.use(function(s){let o=window.localStorage.getItem("token");return o?s.headers.authorization=`Bearer ${atob(o)}`:!o&&s.method=="post"&&(s.headers.authorization="Bearer xxxxxxxxx"),s},function(s){return Promise.reject(s)});var w={getLabels(){return k.get(`${O}/labels`)},getOneQuestion(s){return k.get(`${O}/issues/${s}`)},getAllQuestion(s){return k.get(`${O}/issues`,{params:s})},addOneQuestion(s){return k.post(`${O}/issues`,s)}};const Q=U({total:0}),Z=m("\u6765\u4E00\u9898"),ee=m("\u52A0\u4E00\u9898"),te={style:{"margin-top":"50px","font-size":"16px"}},ne={setup(s){const o=j();v(0);let a=v([]);const i=v(!1),n=v(!1),e=U({input:"",label:""});B(async()=>{f();const c=await w.getLabels();c.status===200&&(a.value=c.data.map(l=>({label:l.name,value:l.name})))});const f=async()=>{let c=await w.getAllQuestion({per_page:100});c.status===200&&(Q.total=c.data.length||0)},p=async()=>{const c=Math.floor(Math.random()*Q.total+1),l=await w.getOneQuestion(c);l.status===200&&(e.input=l.data.title,e.label=l.data.labels[0].name),n.value=!0},h=async()=>{e.input="",e.label="",i.value=!0},x=async()=>{i.value=!1;const c={title:e.input,labels:[e.label]},l=await w.addOneQuestion(c);l.status&&l.status===201?o.success("\u6DFB\u52A0\u6210\u529F"):o.error("\u6DFB\u52A0\u5931\u8D25"),f()};return(c,l)=>{const S=r("n-icon"),A=r("n-button"),C=r("n-space"),M=r("n-input"),g=r("n-select"),I=r("n-modal"),P=r("n-tag");return y(),$(z,null,[t(C,{justify:"center"},{default:u(()=>[t(A,{type:"info",onClick:p,size:"large"},{default:u(()=>[t(S,null,{default:u(()=>[t(_(T))]),_:1}),Z]),_:1}),t(A,{onClick:h,size:"large"},{default:u(()=>[t(S,null,{default:u(()=>[t(_(V))]),_:1}),ee]),_:1})]),_:1}),t(I,{show:i.value,"onUpdate:show":l[2]||(l[2]=b=>i.value=b),preset:"dialog",title:"\u52A0\u4E00\u9898","positive-text":"\u786E\u8BA4","negative-text":"\u53D6\u6D88",onPositiveClick:x,style:{width:"600px"}},{default:u(()=>[t(M,{value:_(e).input,"onUpdate:value":l[0]||(l[0]=b=>_(e).input=b),type:"textarea",placeholder:"\u8F93\u5165\u9898\u76EE",rows:"2"},null,8,["value"]),t(g,{value:_(e).label,"onUpdate:value":l[1]||(l[1]=b=>_(e).label=b),options:_(a),placeholder:"\u9009\u62E9\u5206\u7C7B",style:{width:"150px","margin-top":"10px"}},null,8,["value","options"])]),_:1},8,["show"]),t(I,{class:"custom-card",show:n.value,"onUpdate:show":l[3]||(l[3]=b=>n.value=b),preset:"dialog",title:"\u6765\u4E00\u9898",style:{width:"600px",height:"200px"}},{default:u(()=>[d("div",te,[t(P,{size:"medium",type:"info",style:{"margin-right":"5px"}},{default:u(()=>[m(L(_(e).label),1)]),_:1}),m(L(_(e).input),1)])]),_:1},8,["show"])],64)}}};var se=(s,o)=>{const a=s.__vccOpts||s;for(const[i,n]of o)a[i]=n;return a};const oe=s=>(R("data-v-4bcb5d45"),s=s(),G(),s),ae={class:"table"},le=m(" \u5171 "),ue=m("\u9898"),ie=oe(()=>d("thead",null,[d("tr",null,[d("th",null,"\u9898\u76EE"),d("th",null,"\u5206\u7C7B"),d("th",null,"\u94FE\u63A5")])],-1)),re=["href"],ce={setup(s){const o=v([]),a=v(!1),i=v(""),n=v([]),e=v(!1);q(()=>i.value,async()=>{const p=await w.getAllQuestion({labels:i.value,per_page:100});p.status===200&&(o.value=p.data,Q.total=p.data.length||0)}),B(async()=>{e.value=!0;let p=await w.getAllQuestion({per_page:100});p.status===200&&(o.value=p.data,Q.total=p.data.length||0),e.value=!1,p=await w.getLabels(),p.status===200&&(n.value=p.data.map(h=>({label:h.name,value:h.name})))});const f=()=>{a.value&&(i.value=""),a.value=!a.value};return(p,h)=>{const x=r("n-icon"),c=r("n-statistic"),l=r("n-spin"),S=r("n-select"),A=r("n-button"),C=r("n-tag"),M=r("n-table");return y(),$("div",ae,[t(l,{show:e.value},{default:u(()=>[t(c,{value:_(Q).total},{prefix:u(()=>[t(x,null,{default:u(()=>[t(_(E))]),_:1}),le]),suffix:u(()=>[ue]),_:1},8,["value"])]),_:1},8,["show"]),N(t(S,{value:i.value,"onUpdate:value":h[0]||(h[0]=g=>i.value=g),options:n.value,placeholder:"\u8BF7\u9009\u62E9",clearable:"",style:{width:"150px",float:"left"}},null,8,["value","options"]),[[F,a.value]]),t(A,{style:{float:"right"},onClick:f},{icon:u(()=>[t(x,null,{default:u(()=>[t(_(D))]),_:1})]),_:1}),N(t(M,{"single-line":!1},{default:u(()=>[ie,d("tbody",null,[(y(!0),$(z,null,K(o.value,g=>(y(),$("tr",{key:g.number},[d("td",null,L(g.title),1),d("td",null,[t(C,null,{default:u(()=>[m(L(g.labels[0].name),1)]),_:2},1024)]),d("td",null,[d("a",{href:g.html_url,target:"_blank"},"\u67E5\u770B",8,re)])]))),128))])]),_:1},512),[[F,a.value]])])}}};var pe=se(ce,[["__scopeId","data-v-4bcb5d45"]]);const _e=m(" \u63D0\u4EA4\u9898\u76EE\u9700\u8981 github \u7684 token "),de={setup(s){const o=v(!1),a=v(""),i=async()=>{o.value=!1,a.value.trim()!==""&&localStorage.setItem("token",btoa(a.value)),a.value=""};return(n,e)=>{const f=r("n-icon"),p=r("n-button"),h=r("n-input"),x=r("n-modal");return y(),$(z,null,[t(p,{style:{position:"fixed",right:"40px",bottom:"40px"},onClick:e[0]||(e[0]=c=>o.value=!0)},{icon:u(()=>[t(f,null,{default:u(()=>[t(_(H))]),_:1})]),_:1}),t(x,{show:o.value,"onUpdate:show":e[2]||(e[2]=c=>o.value=c),preset:"dialog",title:"token\u8BBE\u7F6E","positive-text":"\u786E\u8BA4","negative-text":"\u53D6\u6D88",onPositiveClick:i,style:{width:"600px"}},{default:u(()=>[_e,t(h,{value:a.value,"onUpdate:value":e[1]||(e[1]=c=>a.value=c),type:"text",placeholder:"\u8BF7\u8F93\u5165"},null,8,["value"])]),_:1},8,["show"])],64)}}};const ve=d("h1",{class:"title"},"\u2694\uFE0F\u524D\u7AEF\u767E\u9898\u65A9",-1),fe=m(),me=m(),he={setup(s){return(o,a)=>{const i=r("n-message-provider");return y(),J(i,null,{default:u(()=>[ve,t(ne),fe,t(pe),me,t(de)]),_:1})}}};W(he).use(X).mount("#app");
