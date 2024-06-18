import{p as W,ao as X,aG as Y,aH as Z,g as ee,a8 as le,z as te,aI as ne,aJ as M,b as ae,aK as oe,ar as ue,ad as $,aL as ie,aM as se,d as re,aN as ce,aO as de}from"./index-8b7fa986.js";import{c as s,r as h,w as fe,j as o,L as C,F as g,P as ve}from"./utils-d360fd38.js";const pe=W({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(e)},...X({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:e=>Y(e).every(f=>f!=null&&typeof f=="object")},...Z({clearable:!0})},"VFileInput"),Ce=ee()({name:"VFileInput",inheritAttrs:!1,props:pe(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,f){let{attrs:N,emit:V,slots:n}=f;const{t:k}=le(),a=te(e,"modelValue"),{isFocused:v,focus:D,blur:j}=ne(e),I=s(()=>typeof e.showSize!="boolean"?e.showSize:void 0),F=s(()=>(a.value??[]).reduce((l,t)=>{let{size:r=0}=t;return l+r},0)),P=s(()=>M(F.value,I.value)),m=s(()=>(a.value??[]).map(l=>{const{name:t="",size:r=0}=l;return e.showSize?`${t} (${M(r,I.value)})`:t})),x=s(()=>{var t;const l=((t=a.value)==null?void 0:t.length)??0;return e.showSize?k(e.counterSizeString,l,P.value):k(e.counterString,l)}),S=h(),b=h(),i=h(),L=s(()=>v.value||e.active),z=s(()=>["plain","underlined"].includes(e.variant));function y(){var l;i.value!==document.activeElement&&((l=i.value)==null||l.focus()),v.value||D()}function E(l){w(l)}function O(l){V("mousedown:control",l)}function w(l){var t;(t=i.value)==null||t.click(),V("click:control",l)}function U(l){l.stopPropagation(),y(),ve(()=>{a.value=[],de(e["onClick:clear"],l)})}return fe(a,l=>{(!Array.isArray(l)||!l.length)&&i.value&&(i.value.value="")}),ae(()=>{const l=!!(n.counter||e.counter),t=!!(l||n.details),[r,G]=ue(N),{modelValue:me,...H}=$.filterProps(e),J=ie(e);return o($,C({ref:S,modelValue:a.value,"onUpdate:modelValue":c=>a.value=c,class:["v-file-input",{"v-file-input--chips":!!e.chips,"v-input--plain-underlined":z.value},e.class],style:e.style,"onClick:prepend":E},r,H,{centerAffix:!z.value,focused:v.value}),{...n,default:c=>{let{id:p,isDisabled:d,isDirty:R,isReadonly:A,isValid:K}=c;return o(se,C({ref:b,"prepend-icon":e.prependIcon,onMousedown:O,onClick:w,"onClick:clear":U,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},J,{id:p.value,active:L.value||R.value,dirty:R.value,disabled:d.value,focused:v.value,error:K.value===!1}),{...n,default:T=>{var B;let{props:{class:_,...q}}=T;return o(g,null,[o("input",C({ref:i,type:"file",readonly:A.value,disabled:d.value,multiple:e.multiple,name:e.name,onClick:u=>{u.stopPropagation(),A.value&&u.preventDefault(),y()},onChange:u=>{if(!u.target)return;const Q=u.target;a.value=[...Q.files??[]]},onFocus:y,onBlur:j},q,G),null),o("div",{class:_},[!!((B=a.value)!=null&&B.length)&&(n.selection?n.selection({fileNames:m.value,totalBytes:F.value,totalBytesReadable:P.value}):e.chips?m.value.map(u=>o(re,{key:u,size:"small",color:e.color},{default:()=>[u]})):m.value.join(", "))])])}})},details:t?c=>{var p,d;return o(g,null,[(p=n.details)==null?void 0:p.call(n,c),l&&o(g,null,[o("span",null,null),o(ce,{active:!!((d=a.value)!=null&&d.length),value:x.value},n.counter)])])}:void 0})}),oe({},S,b,i)}});export{Ce as V};