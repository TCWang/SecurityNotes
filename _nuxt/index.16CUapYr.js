import{_ as h}from"./nuxt-link.B4XfNU7a.js";import{u as m}from"./vue.f36acd1f.Ccl5FSW1.js";import{u as f,q as x}from"./query.BoAjzmPc.js";import{_ as v,f as b,g as w,c,a as e,F as C,r as k,h as F,o as i,b as A,w as S,p as I,e as N,n as q,t as u}from"./entry.CNNmctIy.js";import"./preview.PyHucAyC.js";const p=a=>(I("data-v-1b1645e5"),a=a(),N(),a),B={class:"w-full max-w-6xl not-prose"},D=p(()=>e("h2",null,"Job Functions",-1)),J=p(()=>e("div",{class:"column space-x-12 ml-6"},[e("div",null,"Category"),e("div",null,"Title"),e("div",null,"PublishAt")],-1)),L={class:"pl-6"},V={class:"pl-6"},z={__name:"index",async setup(a){let o,_;m({title:"Job Functions",meta:[{name:"description",content:"Security Notes: Job Functions "}]});const{data:d}=([o,_]=b(()=>f("engineer-list",()=>x("/eng").where({_path:{$ne:"/eng"}}).only(["_path","title","publishedAt","category","sequence"]).sort({category:1}).find())),o=await o,_(),o),y=w(()=>{if(!d.value)return[];const n=[];let r=null;for(const s of d.value){const t=new Date(s.publishedAt).getFullYear(),l=s.category,g=l!==r;s.displayCategory=g,s.categorykeep=l,s.year=t,n.push(s),r=l}return n});return(n,r)=>{const s=h;return i(),c("section",B,[D,J,e("ul",null,[(i(!0),c(C,null,k(F(y),t=>(i(),c("li",{style:{"list-style":"none"},key:t._path},[A(s,{to:t._path,class:"column hover:bg-gray-100 dark:hover:bg-gray-800"},{default:S(()=>[e("div",{class:q({"text-white ":!t.displayCategory,"text-gray-900":t.displayCategory})},u(t.category),3),e("div",L,u(t.title),1),e("div",V,u(t.year),1)]),_:2},1032,["to"])]))),128))])])}}},$=v(z,[["__scopeId","data-v-1b1645e5"]]);export{$ as default};