import{d as ie,aE as re,ad as ue,r as i,x as z,o as ce,U as v,S as de,k as f,Z as x,j as e,m as s,n as m,bf as fe,_ as n,a1 as b,F,a6 as N,l as w,W as t,$ as r,al as _e,Q,bg as me,bC as he,O as pe,a4 as ge,b9 as y,bD as ye,bF as j,bQ as ve}from"./utils-d360fd38.js";import{_ as xe}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-5c17211d.js";import{_ as T}from"./UiParentCard.vue_vue_type_script_setup_true_lang-f0de3c2a.js";import{A as be}from"./AlertBlock-f3f39cbb.js";import{_ as I}from"./ConfirmByClick.vue_vue_type_style_index_0_lang-9ff2c807.js";import{_ as we}from"./TaskOverview.vue_vue_type_script_setup_true_lang-df26c66a.js";import{a4 as Ce,V as A,$ as ke,L as Ve,d as De,at as $e,J as Se,H as Le,h as Be,e as Fe,au as Ie}from"./index-8b7fa986.js";import{_ as Me}from"./DialogLog.vue_vue_type_style_index_0_lang-e21d91bc.js";import{t as Pe,d as H}from"./map-71784faf.js";import{_ as Re}from"./TagCorner.vue_vue_type_style_index_0_lang-f0b84080.js";import{V as q}from"./VRow-92b162a6.js";import{V as h}from"./VCol-dc51774a.js";import"./VAlert-24aead77.js";import"./Confirm-dc38596b.js";import"./TextLog-515b059b.js";const ze=["onClick"],Ne={class:"pa-3"},Qe={class:"text-h5"},je={class:"text-subtitle-1 mt-1 text-medium-emphasis text-truncate"},Te={class:"text-subtitle-1 mt-1 text-medium-emphasis text-truncate"},Ae={class:"text-subtitle-2 mt-1 text-medium-emphasis text-truncate"},He={class:"d-flex align-center justify-space-between mt-2",style:{height:"32px"}},qe={class:"flex-1-1 d-flex justify-space-between text-medium-emphasis"},Ee=t("span",{class:"font-weight-bold"},"这是进行一项操作时必须了解的重要信息",-1),Ke=t("br",null,null,-1),Oe=t("span",{class:"text-primary"},"删除",-1),Ue=t("br",null,null,-1),Je={class:"text-primary"},We=t("br",null,null,-1),Ze=t("span",{class:"font-weight-bold"},"这是进行一项操作时必须了解的重要信息",-1),Ge=t("br",null,null,-1),Xe=t("span",{class:"text-primary"},"取消",-1),Ye=t("br",null,null,-1),et={class:"text-primary"},tt=t("br",null,null,-1),st=t("span",{class:"font-weight-bold"},"这是进行一项操作时必须了解的重要信息",-1),at=t("br",null,null,-1),lt=t("span",{class:"text-primary"},"优先合成",-1),ot=t("br",null,null,-1),nt={class:"text-primary"},it=t("br",null,null,-1),kt=ie({name:"DigitalVideoList",__name:"videoList",setup(rt){const M=re(),{getLabels:E,loadDictTree:K}=ue(),O=i({title:"视频合成列表"}),U=i([]),p=z({title:"",status:null}),_=i([]),C=i(0),k=i(),V=i(),D=i(),$=i(),S=i(),c=z({uuid:"",title:""}),P=i(),R=i(),L=i(!1);K(["speak_gender"]);const J=async(l={})=>{L.value=!0;const[a,u]=await y.get({url:"/digitalhuman/synthesis/list",showLoading:P.value.$el,data:{...p,...l}});u?(_.value=u.list||[],C.value=u.total):(_.value=[],C.value=0),L.value=!1,R.value.start()},B=()=>{k.value.query({page:1})},g=()=>{k.value.query()},W=l=>{let a=[];return l!=="waiting"&&a.push({text:"日志",color:"info",icon:ye,key:"log"}),(l==="waiting"||l==="running")&&a.push({text:"取消",color:"error",icon:j,key:"cancel"}),(l==="failed"||l==="cancel"||l==="success")&&a.push({text:"删除",color:"error",icon:j,key:"delete"}),l==="waiting"&&a.push({text:"优速通",color:"info",icon:ve,key:"first"}),a},Z=({id:l},a)=>{c.uuid=a.uuid,c.title=a.title,l==="log"?G():l==="cancel"?D.value.show({width:"400px"}):l==="delete"?$.value.show({width:"400px"}):l==="first"&&S.value.show({width:"400px"})},G=async()=>{V.value.show();let[l,a]=await y.get({url:`/api/digitalhuman/synthesis/${c.uuid}/view`});a&&V.value.setContent(a.synthesisLog)},X=async(l={})=>{const[a,u]=await y.put({...l,showSuccess:!0,url:`/api/digitalhuman/synthesis/${c.uuid}/cancel`});u&&(D.value.hide(),g())},Y=async(l={})=>{const[a,u]=await y.delete({...l,showSuccess:!0,url:`/api/digitalhuman/synthesis/${c.uuid}/delete`});u&&($.value.hide(),g())},ee=async(l={})=>{const[a,u]=await y.put({...l,showSuccess:!0,url:`/digitalhuman/synthesis/${c.uuid}/first`});u&&(S.value.hide(),g())},te=()=>{M.push("/digital-human/video-list/edit")},se=({status:l,uuid:a})=>{M.push(`/digital-human/video-list/detail?uuid=${a}`)};return ce(()=>{g()}),(l,a)=>{const u=v("Select"),ae=v("refresh-button"),le=v("ButtonsInForm"),oe=v("NoData"),ne=de("copy");return f(),x(F,null,[e(xe,{title:O.value.title,breadcrumbs:U.value},null,8,["title","breadcrumbs"]),e(T,{class:"mb-3"},{default:s(()=>[e(we,{config:m(Pe),"request-url":"/digitalhuman/synthesis/count"},null,8,["config"])]),_:1}),e(T,null,{default:s(()=>[e(q,null,{default:s(()=>[e(h,{cols:"12",lg:"3",md:"4",sm:"6"},{default:s(()=>[e(Ce,{density:"compact",modelValue:p.title,"onUpdate:modelValue":a[0]||(a[0]=o=>p.title=o),label:"请输入标题","hide-details":"",clearable:"",variant:"outlined",onKeyup:fe(B,["enter"]),"onClick:clear":B},null,8,["modelValue","onKeyup"])]),_:1}),e(h,{cols:"12",lg:"3",md:"4",sm:"6"},{default:s(()=>[e(u,{onChange:B,label:"请选择状态",mapDictionary:{code:"digitalhuman_synthesis_status"},modelValue:p.status,"onUpdate:modelValue":a[1]||(a[1]=o=>p.status=o)},null,8,["modelValue"])]),_:1}),e(h,{cols:"12",lg:"3",md:"4",sm:"6"},{default:s(()=>[e(le,null,{default:s(()=>[e(A,{color:"primary",onClick:te},{default:s(()=>[n("创建视频")]),_:1}),e(ae,{ref_key:"refreshButtonRef",ref:R,onRefresh:g,disabled:L.value},null,8,["disabled"])]),_:1})]),_:1}),e(h,{cols:"12"},{default:s(()=>[e(be,null,{default:s(()=>[n(" 生成视频的时间可能会比较长，请耐心等待！ ")]),_:1})]),_:1}),e(h,{cols:"12"},{default:s(()=>[e(q,{ref_key:"listContentRef",ref:P,class:b({"justify-center":_.value.length===0})},{default:s(()=>[_.value.length>0?(f(!0),x(F,{key:0},N(_.value,o=>(f(),w(h,{cols:"12",lg:"3",md:"4",sm:"6"},{default:s(()=>[e(ke,{elevation:"10",rounded:"md"},{default:s(()=>[t("a",{class:"card-list-item text-textPrimary text-decoration-none",href:"javascript: void(0)",onClick:d=>se(o)},[e(Re,{class:b(`bg-${m(H)[o.status].color}`)},{default:s(()=>[n(r(m(H)[o.status].text),1)]),_:2},1032,["class"]),e(Ve,{src:o.digitalHumanPerson.cover,height:"180px",cover:"",class:"rounded-t-md align-end text-right"},{default:s(()=>[t("div",Ne,[e(De,{onClick:a[2]||(a[2]=_e(()=>{},["stop"])),class:"bg-surface text-body-2 font-weight-medium",variant:"flat",size:"small",text:`${o.videoDuration||"0s"}/${o.videoSize}`},null,8,["text"])])]),_:2},1032,["src"]),e($e,{class:"pa-5"},{default:s(()=>[t("h5",Qe,r(o.title),1),t("p",je,r(o.ttsText),1),t("p",Te,r(o.synthesisModel),1),Q((f(),x("p",Ae,[n(r(o.uuid),1)])),[[ne,o.uuid]]),t("div",He,[t("div",qe,[t("span",null,r(m(me).dateFromNow(o.createdAt)),1),t("span",null,r(o.digitalHumanPerson.cname)+" ("+r(m(E)([["speak_gender",o.digitalHumanPerson.gender]]))+") ",1)]),e(A,{class:"ml-6",size:"x-small",color:"inherit",icon:"",variant:"text"},{default:s(()=>[e(m(he),{width:"14","stroke-width":"1.5"}),e(Se,{activator:"parent"},{default:s(()=>[e(Le,{density:"compact","onClick:select":d=>Z(d,o)},{default:s(()=>[(f(!0),x(F,null,N(W(o.status),d=>(f(),w(Be,{key:d.key,value:d.key,"hide-details":"","min-height":"38"},{prepend:s(()=>[(f(),w(pe(d.icon),{size:16,class:b(["mr-2",[`text-${d.color}`]])},null,8,["class"]))]),default:s(()=>[e(Fe,{class:b([`text-${d.color}`])},{default:s(()=>[n(r(d.text),1)]),_:2},1032,["class"])]),_:2},1032,["value"]))),128))]),_:2},1032,["onClick:select"])]),_:2},1024)]),_:2},1024)])]),_:2},1024)],8,ze)]),_:2},1024)]),_:2},1024))),256)):(f(),w(oe,{key:1}))]),_:1},8,["class"]),Q(e(Ie,{class:"mt-5",ref_key:"refPager",ref:k,total:C.value,"page-sizes":[12,20,40,60,120],onQuery:J},null,8,["total"]),[[ge,_.value.length>0]])]),_:1})]),_:1})]),_:1}),e(Me,{ref_key:"refDialogLog",ref:V},null,512),e(I,{ref_key:"refConfirmDelete",ref:$,onSubmit:Y},{text:s(()=>[Ee,Ke,n(" 此操作将会"),Oe,n("该视频"),Ue,n(" 标题："),t("span",Je,r(c.title),1),We,n(" 你还要继续吗？ ")]),_:1},512),e(I,{ref_key:"refConfirmCancel",ref:D,onSubmit:X},{text:s(()=>[Ze,Ge,n(" 此操作将会"),Xe,n("该视频"),Ye,n(" 标题："),t("span",et,r(c.title),1),tt,n(" 你还要继续吗？ ")]),_:1},512),e(I,{ref_key:"refConfirmFirst",ref:S,onSubmit:ee},{text:s(()=>[st,at,n(" 此操作将会"),lt,n("该视频"),ot,n(" 标题："),t("span",nt,r(c.title),1),it,n(" 你还要继续吗？ ")]),_:1},512)],64)}}});export{kt as default};