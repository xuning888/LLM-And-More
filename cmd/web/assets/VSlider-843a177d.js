import{c as s,H as L,s as le,r as Q,D as he,i as ie,j as n,Q as ae,S as ke,a3 as ye,F as Se,L as pe}from"./utils-5a8267ef.js";import{p as X,q as ge,o as Ve,b2 as se,u as W,aa as we,P as oe,m as ue,g as G,as as Ce,aU as _e,b as J,k as I,w as Te,b3 as xe,b4 as Fe,y as Pe,v as re,b5 as Le,al as Me,A as Re,aA as ze,ae as ne,a4 as Ee}from"./index-bdfe8eaa.js";const Z=Symbol.for("vuetify:v-slider");function Ne(e,t,a){const i=a==="vertical",o=t.getBoundingClientRect(),h="touches"in e?e.touches[0]:e;return i?h.clientY-(o.top+o.height/2):h.clientX-(o.left+o.width/2)}function Be(e,t){return"touches"in e&&e.touches.length?e.touches[0][t]:"changedTouches"in e&&e.changedTouches.length?e.changedTouches[0][t]:e[t]}const De=X({disabled:{type:Boolean,default:null},error:Boolean,readonly:{type:Boolean,default:null},max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:0},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:e=>typeof e=="boolean"||e==="always"},thumbSize:{type:[Number,String],default:20},showTicks:{type:[Boolean,String],default:!1,validator:e=>typeof e=="boolean"||e==="always"},ticks:{type:[Array,Object]},tickSize:{type:[Number,String],default:2},color:String,trackColor:String,trackFillColor:String,trackSize:{type:[Number,String],default:4},direction:{type:String,default:"horizontal",validator:e=>["vertical","horizontal"].includes(e)},reverse:Boolean,...ge(),...Ve({elevation:2}),ripple:{type:Boolean,default:!0}},"Slider"),qe=e=>{const t=s(()=>parseFloat(e.min)),a=s(()=>parseFloat(e.max)),i=s(()=>+e.step>0?parseFloat(e.step):0),o=s(()=>Math.max(se(i.value),se(t.value)));function h(k){if(k=parseFloat(k),i.value<=0)return k;const c=oe(k,t.value,a.value),g=t.value%i.value,C=Math.round((c-g)/i.value)*i.value+g;return parseFloat(Math.min(C,a.value).toFixed(o.value))}return{min:t,max:a,step:i,decimals:o,roundValue:h}},Ae=e=>{let{props:t,steps:a,onSliderStart:i,onSliderMove:o,onSliderEnd:h,getActiveThumb:k}=e;const{isRtl:c}=W(),g=L(t,"reverse"),C=s(()=>t.direction==="vertical"),T=s(()=>C.value!==g.value),{min:f,max:V,step:x,decimals:E,roundValue:M}=a,q=s(()=>parseInt(t.thumbSize,10)),N=s(()=>parseInt(t.tickSize,10)),R=s(()=>parseInt(t.trackSize,10)),F=s(()=>(V.value-f.value)/x.value),B=L(t,"disabled"),_=s(()=>t.error||t.disabled?void 0:t.thumbColor??t.color),u=s(()=>t.error||t.disabled?void 0:t.trackColor??t.color),w=s(()=>t.error||t.disabled?void 0:t.trackFillColor??t.color),v=le(!1),m=le(0),y=Q(),S=Q();function r(l){var te;const d=t.direction==="vertical",de=d?"top":"left",ce=d?"height":"width",ve=d?"clientY":"clientX",{[de]:me,[ce]:be}=(te=y.value)==null?void 0:te.$el.getBoundingClientRect(),fe=Be(l,ve);let H=Math.min(Math.max((fe-me-m.value)/be,0),1)||0;return(d?T.value:T.value!==c.value)&&(H=1-H),M(f.value+H*(V.value-f.value))}const P=l=>{h({value:r(l)}),v.value=!1,m.value=0},O=l=>{S.value=k(l),S.value&&(S.value.focus(),v.value=!0,S.value.contains(l.target)?m.value=Ne(l,S.value,t.direction):(m.value=0,o({value:r(l)})),i({value:r(l)}))},z={passive:!0,capture:!0};function $(l){o({value:r(l)})}function j(l){l.stopPropagation(),l.preventDefault(),P(l),window.removeEventListener("mousemove",$,z),window.removeEventListener("mouseup",j)}function b(l){var d;P(l),window.removeEventListener("touchmove",$,z),(d=l.target)==null||d.removeEventListener("touchend",b)}function p(l){var d;O(l),window.addEventListener("touchmove",$,z),(d=l.target)==null||d.addEventListener("touchend",b,{passive:!1})}function D(l){l.preventDefault(),O(l),window.addEventListener("mousemove",$,z),window.addEventListener("mouseup",j,{passive:!1})}const A=l=>{const d=(l-f.value)/(V.value-f.value)*100;return oe(isNaN(d)?0:d,0,100)},K=L(t,"showTicks"),U=s(()=>K.value?t.ticks?Array.isArray(t.ticks)?t.ticks.map(l=>({value:l,position:A(l),label:l.toString()})):Object.keys(t.ticks).map(l=>({value:parseFloat(l),position:A(parseFloat(l)),label:t.ticks[l]})):F.value!==1/0?we(F.value+1).map(l=>{const d=f.value+l*x.value;return{value:d,position:A(d)}}):[]:[]),Y=s(()=>U.value.some(l=>{let{label:d}=l;return!!d})),ee={activeThumbRef:S,color:L(t,"color"),decimals:E,disabled:B,direction:L(t,"direction"),elevation:L(t,"elevation"),hasLabels:Y,isReversed:g,indexFromEnd:T,min:f,max:V,mousePressed:v,numTicks:F,onSliderMousedown:D,onSliderTouchstart:p,parsedTicks:U,parseMouseMove:r,position:A,readonly:L(t,"readonly"),rounded:L(t,"rounded"),roundValue:M,showTicks:K,startOffset:m,step:x,thumbSize:q,thumbColor:_,thumbLabel:L(t,"thumbLabel"),ticks:L(t,"ticks"),tickSize:N,trackColor:u,trackContainerRef:y,trackFillColor:w,trackSize:R,vertical:C};return he(Z,ee),ee},Ie=X({focused:Boolean,max:{type:Number,required:!0},min:{type:Number,required:!0},modelValue:{type:Number,required:!0},position:{type:Number,required:!0},ripple:{type:[Boolean,Object],default:!0},...ue()},"VSliderThumb"),Oe=G()({name:"VSliderThumb",directives:{Ripple:Ce},props:Ie(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a,emit:i}=t;const o=ie(Z),{isRtl:h,rtlClasses:k}=W();if(!o)throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");const{thumbColor:c,step:g,disabled:C,thumbSize:T,thumbLabel:f,direction:V,isReversed:x,vertical:E,readonly:M,elevation:q,mousePressed:N,decimals:R,indexFromEnd:F}=o,{textColorClasses:B,textColorStyles:_}=_e(c),{pageup:u,pagedown:w,end:v,home:m,left:y,right:S,down:r,up:P}=Fe,O=[u,w,v,m,y,S,r,P],z=s(()=>g.value?[1,2,3]:[1,5,10]);function $(b,p){if(!O.includes(b.key))return;b.preventDefault();const D=g.value||.1,A=(e.max-e.min)/D;if([y,S,r,P].includes(b.key)){const U=(E.value?[h.value?y:S,x.value?r:P]:F.value!==h.value?[y,P]:[S,P]).includes(b.key)?1:-1,Y=b.shiftKey?2:b.ctrlKey?1:0;p=p+U*D*z.value[Y]}else if(b.key===m)p=e.min;else if(b.key===v)p=e.max;else{const K=b.key===w?1:-1;p=p-K*D*(A>100?A/10:10)}return Math.max(e.min,Math.min(e.max,p))}function j(b){const p=$(b,e.modelValue);p!=null&&i("update:modelValue",p)}return J(()=>{const b=I(F.value?100-e.position:e.position,"%"),{elevationClasses:p}=Te(s(()=>C.value?void 0:q.value));return n("div",{class:["v-slider-thumb",{"v-slider-thumb--focused":e.focused,"v-slider-thumb--pressed":e.focused&&N.value},e.class,k.value],style:[{"--v-slider-thumb-position":b,"--v-slider-thumb-size":I(T.value)},e.style],role:"slider",tabindex:C.value?-1:0,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.modelValue,"aria-readonly":!!M.value,"aria-orientation":V.value,onKeydown:M.value?void 0:j},[n("div",{class:["v-slider-thumb__surface",B.value,p.value],style:{..._.value}},null),ae(n("div",{class:["v-slider-thumb__ripple",B.value],style:_.value},null),[[ke("ripple"),e.ripple,null,{circle:!0,center:!0}]]),n(xe,{origin:"bottom center"},{default:()=>{var D;return[ae(n("div",{class:"v-slider-thumb__label-container"},[n("div",{class:["v-slider-thumb__label"]},[n("div",null,[((D=a["thumb-label"])==null?void 0:D.call(a,{modelValue:e.modelValue}))??e.modelValue.toFixed(g.value?R.value:1)])])]),[[ye,f.value&&e.focused||f.value==="always"]])]}})])}),{}}});const $e=X({start:{type:Number,required:!0},stop:{type:Number,required:!0},...ue()},"VSliderTrack"),Ke=G()({name:"VSliderTrack",props:$e(),emits:{},setup(e,t){let{slots:a}=t;const i=ie(Z);if(!i)throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");const{color:o,parsedTicks:h,rounded:k,showTicks:c,tickSize:g,trackColor:C,trackFillColor:T,trackSize:f,vertical:V,min:x,max:E,indexFromEnd:M}=i,{roundedClasses:q}=Pe(k),{backgroundColorClasses:N,backgroundColorStyles:R}=re(T),{backgroundColorClasses:F,backgroundColorStyles:B}=re(C),_=s(()=>`inset-${V.value?"block":"inline"}-${M.value?"end":"start"}`),u=s(()=>V.value?"height":"width"),w=s(()=>({[_.value]:"0%",[u.value]:"100%"})),v=s(()=>e.stop-e.start),m=s(()=>({[_.value]:I(e.start,"%"),[u.value]:I(v.value,"%")})),y=s(()=>c.value?(V.value?h.value.slice().reverse():h.value).map((r,P)=>{var z;const O=r.value!==x.value&&r.value!==E.value?I(r.position,"%"):void 0;return n("div",{key:r.value,class:["v-slider-track__tick",{"v-slider-track__tick--filled":r.position>=e.start&&r.position<=e.stop,"v-slider-track__tick--first":r.value===x.value,"v-slider-track__tick--last":r.value===E.value}],style:{[_.value]:O}},[(r.label||a["tick-label"])&&n("div",{class:"v-slider-track__tick-label"},[((z=a["tick-label"])==null?void 0:z.call(a,{tick:r,index:P}))??r.label])])}):[]);return J(()=>n("div",{class:["v-slider-track",q.value,e.class],style:[{"--v-slider-track-size":I(f.value),"--v-slider-tick-size":I(g.value)},e.style]},[n("div",{class:["v-slider-track__background",F.value,{"v-slider-track__background--opacity":!!o.value||!T.value}],style:{...w.value,...B.value}},null),n("div",{class:["v-slider-track__fill",N.value],style:{...m.value,...R.value}},null),c.value&&n("div",{class:["v-slider-track__ticks",{"v-slider-track__ticks--always-show":c.value==="always"}]},[y.value])])),{}}}),je=X({...Le(),...De(),...Me(),modelValue:{type:[Number,String],default:0}},"VSlider"),Ye=G()({name:"VSlider",props:je(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,start:e=>!0,end:e=>!0},setup(e,t){let{slots:a,emit:i}=t;const o=Q(),{rtlClasses:h}=W(),k=qe(e),c=Re(e,"modelValue",void 0,u=>k.roundValue(u??k.min.value)),{min:g,max:C,mousePressed:T,roundValue:f,onSliderMousedown:V,onSliderTouchstart:x,trackContainerRef:E,position:M,hasLabels:q,readonly:N}=Ae({props:e,steps:k,onSliderStart:()=>{i("start",c.value)},onSliderEnd:u=>{let{value:w}=u;const v=f(w);c.value=v,i("end",v)},onSliderMove:u=>{let{value:w}=u;return c.value=f(w)},getActiveThumb:()=>{var u;return(u=o.value)==null?void 0:u.$el}}),{isFocused:R,focus:F,blur:B}=ze(e),_=s(()=>M(c.value));return J(()=>{const u=ne.filterProps(e),w=!!(e.label||a.label||a.prepend);return n(ne,pe({class:["v-slider",{"v-slider--has-labels":!!a["tick-label"]||q.value,"v-slider--focused":R.value,"v-slider--pressed":T.value,"v-slider--disabled":e.disabled},h.value,e.class],style:e.style},u,{focused:R.value}),{...a,prepend:w?v=>{var m,y;return n(Se,null,[((m=a.label)==null?void 0:m.call(a,v))??(e.label?n(Ee,{id:v.id.value,class:"v-slider__label",text:e.label},null):void 0),(y=a.prepend)==null?void 0:y.call(a,v)])}:void 0,default:v=>{let{id:m,messagesId:y}=v;return n("div",{class:"v-slider__container",onMousedown:N.value?void 0:V,onTouchstartPassive:N.value?void 0:x},[n("input",{id:m.value,name:e.name||m.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:c.value},null),n(Ke,{ref:E,start:0,stop:_.value},{"tick-label":a["tick-label"]}),n(Oe,{ref:o,"aria-describedby":y.value,focused:R.value,min:g.value,max:C.value,modelValue:c.value,"onUpdate:modelValue":S=>c.value=S,position:_.value,elevation:e.elevation,onFocus:F,onBlur:B,ripple:e.ripple},{"thumb-label":a["thumb-label"]})])}})}),{}}});export{Ye as V,Ae as a,Ke as b,Oe as c,Ne as g,De as m,qe as u};