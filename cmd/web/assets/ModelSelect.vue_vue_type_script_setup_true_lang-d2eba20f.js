import{av as f,ag as c}from"./index-e3ddd1e6.js";import{d as v,r as V,o as b,k as g,l as j,V as y,m as k,X as B,L as M,n as O,f as S,b9 as _}from"./utils-380ae8e1.js";const s="modelName",w=v({__name:"ModelSelect",props:{modelValue:{default:null},defaultFirstValue:{type:Boolean,default:!1},returnObject:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(r,{emit:u}){const n=r,d=u,l=V([]),a=f(n,"modelValue",d),m=async()=>{const[e,t]=await _.get({url:"/channels/models",data:{modelType:"text-generation"}});t&&(l.value=t.list,i())},i=()=>{const{modelValue:e,defaultFirstValue:t,returnObject:o}=n;e?o&&(a.value=l.value.find(p=>p[s]===e.modelName)||e):t&&(o?a.value=l.value[0]:a.value=l.value[0][s])};return b(()=>{m()}),(e,t)=>(g(),j(c,M({modelValue:O(a),"onUpdate:modelValue":t[0]||(t[0]=o=>S(a)?a.value=o:null)},e.$attrs,{placeholder:"请选择模型",items:l.value,"item-title":s,"item-value":s,variant:"outlined","return-object":n.returnObject}),y({_:2},[e.$slots.prepend?{name:"prepend",fn:k(()=>[B(e.$slots,"prepend")]),key:"0"}:void 0]),1040,["modelValue","items","return-object"]))}});export{w as _};
