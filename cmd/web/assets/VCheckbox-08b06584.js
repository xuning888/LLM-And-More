import{p as g,ao as A,ap as F,b6 as I,g as B,z as U,aM as M,aa as R,b as $,ar as j,ad as t,b7 as l}from"./index-e3ddd1e6.js";import{c as z,j as u,L as r}from"./utils-380ae8e1.js";const D=g({...A(),...F(I(),["inline"])},"VCheckbox"),q=B()({name:"VCheckbox",inheritAttrs:!1,props:D(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,c){let{attrs:d,slots:a}=c;const s=U(e,"modelValue"),{isFocused:n,focus:i,blur:m}=M(e),b=R(),V=z(()=>e.id||`checkbox-${b}`);return $(()=>{const[p,k]=j(d),v=t.filterProps(e),x=l.filterProps(e);return u(t,r({class:["v-checkbox",e.class]},p,v,{modelValue:s.value,"onUpdate:modelValue":o=>s.value=o,id:V.value,focused:n.value,style:e.style}),{...a,default:o=>{let{id:f,messagesId:h,isDisabled:P,isReadonly:C}=o;return u(l,r(x,{id:f.value,"aria-describedby":h.value,disabled:P.value,readonly:C.value},k,{modelValue:s.value,"onUpdate:modelValue":y=>s.value=y,onFocus:i,onBlur:m}),a)}})}),{}}});export{q as V};