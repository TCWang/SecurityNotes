import{_ as g}from"./nuxt-link.DyMI4gzZ.js";import{u as m,q as f}from"./query.DbpuVccQ.js";import{_ as x,f as b,g as v,c,a as e,F as C,r as w,h as k,o as i,b as A,w as S,p as q,e as I,n as B,t as _}from"./entry.DGvN_kM5.js";import"./preview.BahxzDBg.js";const p=s=>(q("data-v-66b37bfb"),s=s(),I(),s),D={class:"w-full max-w-6xl not-prose"},F=p(()=>e("h2",null,"Certification for Cyber Security",-1)),N=p(()=>e("div",{class:"column space-x-12 ml-6"},[e("div",null,"Category"),e("div",null,"Title"),e("div",null,"PublishAt")],-1)),L={class:"pl-6"},V={class:"pl-6"},z={__name:"index",async setup(s){let o,u;const{data:d}=([o,u]=b(()=>m("certification-list",()=>f("/cer").where({_path:{$ne:"/cer"}}).only(["_path","title","publishedAt","category","sequence"]).sort({sequence:1}).find())),o=await o,u(),o),y=v(()=>{if(!d.value)return[];const r=[];let n=null;for(const a of d.value){const t=new Date(a.publishedAt).getFullYear(),l=a.category,h=l!==n;a.displayCategory=h,a.categorykeep=l,a.year=t,r.push(a),n=l}return r});return(r,n)=>{const a=g;return i(),c("section",D,[F,N,e("ul",null,[(i(!0),c(C,null,w(k(y),t=>(i(),c("li",{style:{"list-style":"none"},key:t._path},[A(a,{to:t._path,class:"column hover:bg-gray-100 dark:hover:bg-gray-800"},{default:S(()=>[e("div",{class:B({"text-white ":!t.displayCategory,"text-gray-900":t.displayCategory})},_(t.category),3),e("div",L,_(t.title),1),e("div",V,_(t.year),1)]),_:2},1032,["to"])]))),128))])])}}},$=x(z,[["__scopeId","data-v-66b37bfb"]]);export{$ as default};