import{a as k,u as N,r as f,b as F,o as I,c as r,d as x,e as $,f as t,w as u,g as d,A as P,h as j,i as _,j as m,t as Q,F as z,k as V,l as q,m as U,v as B,n as E,p as T,q as D,s as K,S as R,x as G,y as H,z as J}from"./vendor.00897ec1.js";const W=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const e of n)if(e.type==="childList")for(const v of e.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&i(v)}).observe(document,{childList:!0,subtree:!0});function c(n){const e={};return n.integrity&&(e.integrity=n.integrity),n.referrerpolicy&&(e.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?e.credentials="include":n.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(n){if(n.ep)return;n.ep=!0;const e=c(n);fetch(n.href,e)}};W();const L="https://api.github.com/repos/mewcoder/FE-Qu";k.interceptors.request.use(function(o){let a=window.localStorage.getItem("token");return a?o.headers.authorization=`Bearer ${atob(a)}`:!a&&o.method=="post"&&(o.headers.authorization="Bearer xxxxxxxxx"),o},function(o){return Promise.reject(o)});var w={getLabels(){return k.get(`${L}/labels`)},getOneQuestion(o){return k.get(`${L}/issues/${o}`)},getAllQuestion(o){return k.get(`${L}/issues`,{params:o})},addOneQuestion(o){return k.post(`${L}/issues`,o)}};const X=m("\u6765\u4E00\u9898"),Y=m("\u52A0\u4E00\u9898"),Z={style:{"margin-top":"50px","font-size":"16px"}},ee={setup(o){const a=N();let c=f([]);const i=f(!1),n=f(!1),e=F({input:"",label:""});I(async()=>{const l=await w.getLabels();l.status===200&&(c.value=l.data.map(s=>({label:s.name,value:s.name})))});const v=async()=>{let l=await w.getAllQuestion(),s=0;l.status===200&&(s=l.data.length||0);const g=Math.floor(Math.random()*s+1);console.log(g),l=await w.getOneQuestion(g),l.status===200&&(e.input=l.data.title,e.label=l.data.labels[0].name),n.value=!0},y=async()=>{e.input="",e.label="",i.value=!0},p=async()=>{i.value=!1;const l={title:e.input,labels:[e.label]},s=await w.addOneQuestion(l);s.status&&s.status===201?a.success("\u6DFB\u52A0\u6210\u529F"):a.error("\u6DFB\u52A0\u5931\u8D25")};return(l,s)=>{const g=r("n-icon"),S=r("n-button"),O=r("n-space"),C=r("n-input"),M=r("n-select"),A=r("n-modal"),h=r("n-tag");return x(),$(z,null,[t(O,{justify:"center"},{default:u(()=>[t(S,{type:"info",onClick:v,size:"large"},{default:u(()=>[t(g,null,{default:u(()=>[t(d(P))]),_:1}),X]),_:1}),t(S,{onClick:y,size:"large"},{default:u(()=>[t(g,null,{default:u(()=>[t(d(j))]),_:1}),Y]),_:1})]),_:1}),t(A,{show:i.value,"onUpdate:show":s[2]||(s[2]=b=>i.value=b),preset:"dialog",title:"\u52A0\u4E00\u9898","positive-text":"\u786E\u8BA4","negative-text":"\u53D6\u6D88",onPositiveClick:p,style:{width:"600px"}},{default:u(()=>[t(C,{value:d(e).input,"onUpdate:value":s[0]||(s[0]=b=>d(e).input=b),type:"textarea",placeholder:"\u8F93\u5165\u9898\u76EE",rows:"2"},null,8,["value"]),t(M,{value:d(e).label,"onUpdate:value":s[1]||(s[1]=b=>d(e).label=b),options:d(c),placeholder:"\u9009\u62E9\u5206\u7C7B",style:{width:"150px","margin-top":"10px"}},null,8,["value","options"])]),_:1},8,["show"]),t(A,{class:"custom-card",show:n.value,"onUpdate:show":s[3]||(s[3]=b=>n.value=b),preset:"dialog",title:"\u6765\u4E00\u9898",style:{width:"600px",height:"200px"}},{default:u(()=>[_("div",Z,[t(h,{size:"medium",type:"info",style:{"margin-right":"5px"}},{default:u(()=>[m(Q(d(e).label),1)]),_:1}),m(Q(d(e).input),1)])]),_:1},8,["show"])],64)}}};var te=(o,a)=>{const c=o.__vccOpts||o;for(const[i,n]of a)c[i]=n;return c};const ne=o=>(D("data-v-cc3fb5b6"),o=o(),K(),o),se={class:"table"},oe=m(" \u5171 "),ae=m("\u9898"),le=ne(()=>_("thead",null,[_("tr",null,[_("th",null,"\u9898\u76EE"),_("th",null,"\u5206\u7C7B"),_("th",null,"\u5E8F\u53F7"),_("th",null,"\u94FE\u63A5")])],-1)),ue=["href"],ie={setup(o){const a=f(0),c=f([]),i=f(!1),n=f(""),e=f([]),v=f(!1);V(()=>n.value,async()=>{const p=await w.getAllQuestion({labels:n.value});p.status===200&&(c.value=p.data,a.value=p.data.length||0)}),I(async()=>{v.value=!0;let p=await w.getAllQuestion();p.status===200&&(c.value=p.data,a.value=p.data.length||0),v.value=!1,p=await w.getLabels(),p.status===200&&(e.value=p.data.map(l=>({label:l.name,value:l.name})))});const y=()=>{i.value&&(n.value=""),i.value=!i.value};return(p,l)=>{const s=r("n-icon"),g=r("n-statistic"),S=r("n-spin"),O=r("n-select"),C=r("n-button"),M=r("n-tag"),A=r("n-table");return x(),$("div",se,[t(S,{show:v.value},{default:u(()=>[t(g,{value:a.value},{prefix:u(()=>[t(s,null,{default:u(()=>[t(d(q))]),_:1}),oe]),suffix:u(()=>[ae]),_:1},8,["value"])]),_:1},8,["show"]),U(t(O,{value:n.value,"onUpdate:value":l[0]||(l[0]=h=>n.value=h),options:e.value,placeholder:"\u8BF7\u9009\u62E9",clearable:"",style:{width:"150px",float:"left"}},null,8,["value","options"]),[[B,i.value]]),t(C,{style:{float:"right"},onClick:y},{icon:u(()=>[t(s,null,{default:u(()=>[t(d(E))]),_:1})]),_:1}),U(t(A,{"single-line":!1},{default:u(()=>[le,_("tbody",null,[(x(!0),$(z,null,T(c.value,h=>(x(),$("tr",{key:h.number},[_("td",null,Q(h.title),1),_("td",null,[t(M,null,{default:u(()=>[m(Q(h.labels[0].name),1)]),_:2},1024)]),_("td",null,Q(h.number),1),_("td",null,[_("a",{href:h.html_url,target:"_blank"},"\u67E5\u770B",8,ue)])]))),128))])]),_:1},512),[[B,i.value]])])}}};var re=te(ie,[["__scopeId","data-v-cc3fb5b6"]]);const ce=m(" \u63D0\u4EA4\u9898\u76EE\u9700\u8981 github \u7684 token "),pe={setup(o){const a=f(!1),c=f(""),i=async()=>{a.value=!1,c.value.trim()!==""&&localStorage.setItem("token",btoa(c.value)),c.value=""};return(n,e)=>{const v=r("n-icon"),y=r("n-button"),p=r("n-input"),l=r("n-modal");return x(),$(z,null,[t(y,{style:{position:"fixed",right:"40px",bottom:"40px"},onClick:e[0]||(e[0]=s=>a.value=!0)},{icon:u(()=>[t(v,null,{default:u(()=>[t(d(R))]),_:1})]),_:1}),t(l,{show:a.value,"onUpdate:show":e[2]||(e[2]=s=>a.value=s),preset:"dialog",title:"token\u8BBE\u7F6E","positive-text":"\u786E\u8BA4","negative-text":"\u53D6\u6D88",onPositiveClick:i,style:{width:"600px"}},{default:u(()=>[ce,t(p,{value:c.value,"onUpdate:value":e[1]||(e[1]=s=>c.value=s),type:"text",placeholder:"\u8BF7\u8F93\u5165"},null,8,["value"])]),_:1},8,["show"])],64)}}};const _e=_("h1",{class:"title"},"\u2694\uFE0F \u6765\u9053\u524D\u7AEF\u9898",-1),de=m(),ve=m(),fe={setup(o){return(a,c)=>{const i=r("n-message-provider");return x(),G(i,null,{default:u(()=>[_e,t(ee),de,t(re),ve,t(pe)]),_:1})}}};H(fe).use(J).mount("#app");