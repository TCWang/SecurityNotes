import{_ as m}from"./nuxt-link.BdUAzwKn.js";import{u as g}from"./vue.f36acd1f.CTn6G2Mc.js";import{u as f,q as C}from"./query.ALK7voOt.js";import{_ as x,f as v,g as w,c as l,a as e,F as S,r as b,h as k,o as i,b as A,w as I,p as O,e as q,n as B,t as u}from"./entry.C_tyHBrC.js";import"./preview.BVVKz_GL.js";const d=a=>(O("data-v-488e4001"),a=a(),q(),a),D={class:"w-full max-w-6xl not-prose"},F=d(()=>e("h2",null,"What is Security Operations Center, SOC?",-1)),N=d(()=>e("div",{class:"column space-x-12 ml-6"},[e("div",null,"Category"),e("div",null,"Title"),e("div",null,"PublishAt")],-1)),L={class:"pl-6"},V={class:"pl-6"},z={__name:"index",async setup(a){let o,_;g({title:"SOC",meta:[{name:"description",content:"Security Operations Center, SOC Introduction "}]});const{data:p}=([o,_]=v(()=>f("soc-list",()=>C("/soc").where({_path:{$ne:"/soc"}}).only(["_path","title","publishedAt","category","sequence"]).sort({category:1}).find())),o=await o,_(),o),y=w(()=>{if(!p.value)return[];const n=[];let r=null;for(const s of p.value){const t=new Date(s.publishedAt).getFullYear(),c=s.category,h=c!==r;s.displayCategory=h,s.categorykeep=c,s.year=t,n.push(s),r=c}return n});return(n,r)=>{const s=m;return i(),l("section",D,[F,N,e("ul",null,[(i(!0),l(S,null,b(k(y),t=>(i(),l("li",{style:{"list-style":"none"},key:t._path},[A(s,{to:t._path,class:"column hover:bg-gray-100 dark:hover:bg-gray-800"},{default:I(()=>[e("div",{class:B({"text-white ":!t.displayCategory,"text-gray-900":t.displayCategory})},u(t.category),3),e("div",L,u(t.title),1),e("div",V,u(t.year),1)]),_:2},1032,["to"])]))),128))])])}}},Y=x(z,[["__scopeId","data-v-488e4001"]]);export{Y as default};