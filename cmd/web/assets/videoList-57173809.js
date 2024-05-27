import{d as ie,aE as re,ad as ue,r as i,x as z,o as ce,U as v,S as de,k as f,Z as x,j as e,m as s,n as m,bf as fe,_ as n,a1 as b,F,a6 as N,l as w,W as t,$ as r,al as _e,Q as j,bg as me,bB as he,O as pe,a4 as ge,b9 as y,bC as ye,bE as Q,bF as ve}from"./utils-380ae8e1.js";import{_ as xe}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-d3ad82eb.js";import{_ as T}from"./UiParentCard.vue_vue_type_script_setup_true_lang-aa11bf62.js";import{A as be}from"./AlertBlock-bac6615a.js";import{_ as I}from"./ConfirmByClick.vue_vue_type_style_index_0_lang-ccdf5c87.js";import{_ as we}from"./TaskOverview.vue_vue_type_script_setup_true_lang-23b8f79e.js";import{a4 as Ce,V as A,$ as ke,L as Ve,d as $e,at as De,J as Se,H as Le,h as Be,e as Fe,au as Ie}from"./index-e3ddd1e6.js";import{_ as Me}from"./DialogLog.vue_vue_type_style_index_0_lang-85c14e4a.js";import{t as Pe,d as E}from"./map-d338dd5f.js";import{_ as Re}from"./TagCorner.vue_vue_type_style_index_0_lang-a34e1130.js";import{V as H}from"./VRow-fc36e79d.js";import{V as h}from"./VCol-ac87f973.js";import"./VAlert-1533433c.js";import"./Confirm-3cd730c8.js";import"./TextLog-3e0acb24.js";const ze=["onClick"],Ne={class:"pa-3"},je={class:"text-h5"},Qe={class:"text-subtitle-1 mt-1 text-medium-emphasis text-truncate"},Te={class:"text-subtitle-1 mt-1 text-medium-emphasis text-truncate"},Ae={class:"text-subtitle-2 mt-1 text-medium-emphasis text-truncate"},Ee={class:"d-flex align-center justify-space-between mt-2",style:{height:"32px"}},He={class:"flex-1-1 d-flex justify-space-between text-medium-emphasis"},qe=t("span",{class:"font-weight-bold"},"这是进行一项操作时必须了解的重要信息",-1),Ke=t("br",null,null,-1),Oe=t("span",{class:"text-primary"},"删除",-1),Ue=t("br",null,null,-1),Je={class:"text-primary"},We=t("br",null,null,-1),Ze=t("span",{class:"font-weight-bold"},"这是进行一项操作时必须了解的重要信息",-1),Ge=t("br",null,null,-1),Xe=t("span",{class:"text-primary"},"取消",-1),Ye=t("br",null,null,-1),et={class:"text-primary"},tt=t("br",null,null,-1),st=t("span",{class:"font-weight-bold"},"这是进行一项操作时必须了解的重要信息",-1),at=t("br",null,null,-1),lt=t("span",{class:"text-primary"},"优先合成",-1),ot=t("br",null,null,-1),nt={class:"text-primary"},it=t("br",null,null,-1),kt=ie({name:"DigitalVideoList",__name:"videoList",setup(rt){const M=re(),{getLabels:q,loadDictTree:K}=ue(),O=i({title:"视频合成列表"}),U=i([]),p=z({title:"",status:null}),_=i([]),C=i(0),k=i(),V=i(),$=i(),D=i(),S=i(),c=z({uuid:"",title:""}),P=i(),R=i(),L=i(!1);K(["speak_gender"]);const J=async(l={})=>{L.value=!0;const[a,u]=await y.get({url:"/digitalhuman/synthesis/list",showLoading:P.value.$el,data:{...p,...l}});u?(_.value=u.list||[],C.value=u.total):(_.value=[],C.value=0),L.value=!1,R.value.start()},B=()=>{k.value.query({page:1})},g=()=>{k.value.query()},W=l=>{let a=[];return l!=="waiting"&&a.push({text:"日志",color:"info",icon:ye,key:"log"}),(l==="waiting"||l==="running")&&a.push({text:"取消",color:"error",icon:Q,key:"cancel"}),(l==="failed"||l==="cancel"||l==="success")&&a.push({text:"删除",color:"error",icon:Q,key:"delete"}),l==="waiting"&&a.push({text:"优速通",color:"info",icon:ve,key:"first"}),a},Z=({id:l},a)=>{c.uuid=a.uuid,c.title=a.title,l==="log"?G():l==="cancel"?$.value.show({width:"400px"}):l==="delete"?D.value.show({width:"400px"}):l==="first"&&S.value.show({width:"400px"})},G=async()=>{V.value.show();let[l,a]=await y.get({url:`/api/digitalhuman/synthesis/${c.uuid}/view`});a&&V.value.setContent(a.synthesisLog)},X=async(l={})=>{const[a,u]=await y.put({...l,showSuccess:!0,url:`/api/digitalhuman/synthesis/${c.uuid}/cancel`});u&&($.value.hide(),g())},Y=async(l={})=>{const[a,u]=await y.delete({...l,showSuccess:!0,url:`/api/digitalhuman/synthesis/${c.uuid}/delete`});u&&(D.value.hide(),g())},ee=async(l={})=>{const[a,u]=await y.put({...l,showSuccess:!0,url:`/digitalhuman/synthesis/${c.uuid}/first`});u&&(S.value.hide(),g())},te=()=>{M.push("/digital-human/video-list/edit")},se=({status:l,uuid:a})=>{M.push(`/digital-human/video-list/detail?uuid=${a}`)};return ce(()=>{g()}),(l,a)=>{const u=v("Select"),ae=v("refresh-button"),le=v("ButtonsInForm"),oe=v("NoData"),ne=de("copy");return f(),x(F,null,[e(xe,{title:O.value.title,breadcrumbs:U.value},null,8,["title","breadcrumbs"]),e(T,{class:"mb-3"},{default:s(()=>[e(we,{config:m(Pe),"request-url":"/digitalhuman/synthesis/count"},null,8,["config"])]),_:1}),e(T,null,{default:s(()=>[e(H,null,{default:s(()=>[e(h,{cols:"12",lg:"3",md:"4",sm:"6"},{default:s(()=>[e(Ce,{density:"compact",modelValue:p.title,"onUpdate:modelValue":a[0]||(a[0]=o=>p.title=o),label:"请输入标题","hide-details":"",clearable:"",variant:"outlined",onKeyup:fe(B,["enter"]),"onClick:clear":B},null,8,["modelValue","onKeyup"])]),_:1}),e(h,{cols:"12",lg:"3",md:"4",sm:"6"},{default:s(()=>[e(u,{onChange:B,label:"请选择状态",mapDictionary:{code:"digitalhuman_synthesis_status"},modelValue:p.status,"onUpdate:modelValue":a[1]||(a[1]=o=>p.status=o)},null,8,["modelValue"])]),_:1}),e(h,{cols:"12",lg:"3",md:"4",sm:"6"},{default:s(()=>[e(le,null,{default:s(()=>[e(A,{color:"primary",onClick:te},{default:s(()=>[n("创建视频")]),_:1}),e(ae,{ref_key:"refreshButtonRef",ref:R,onRefresh:g,disabled:L.value},null,8,["disabled"])]),_:1})]),_:1}),e(h,{cols:"12"},{default:s(()=>[e(be,null,{default:s(()=>[n(" 生成视频的时间可能会比较长，请耐心等待！ ")]),_:1})]),_:1}),e(h,{cols:"12"},{default:s(()=>[e(H,{ref_key:"listContentRef",ref:P,class:b({"justify-center":_.value.length===0})},{default:s(()=>[_.value.length>0?(f(!0),x(F,{key:0},N(_.value,o=>(f(),w(h,{cols:"12",lg:"3",md:"4",sm:"6"},{default:s(()=>[e(ke,{elevation:"10",rounded:"md"},{default:s(()=>[t("a",{class:"card-list-item text-textPrimary text-decoration-none",href:"javascript: void(0)",onClick:d=>se(o)},[e(Re,{class:b(`bg-${m(E)[o.status].color}`)},{default:s(()=>[n(r(m(E)[o.status].text),1)]),_:2},1032,["class"]),e(Ve,{src:o.digitalHumanPerson.cover,height:"180px",cover:"",class:"rounded-t-md align-end text-right"},{default:s(()=>[t("div",Ne,[e($e,{onClick:a[2]||(a[2]=_e(()=>{},["stop"])),class:"bg-surface text-body-2 font-weight-medium",variant:"flat",size:"small",text:`${o.videoDuration||"0s"}/${o.videoSize}`},null,8,["text"])])]),_:2},1032,["src"]),e(De,{class:"pa-5"},{default:s(()=>[t("h5",je,r(o.title),1),t("p",Qe,r(o.ttsText),1),t("p",Te,r(o.synthesisModel),1),j((f(),x("p",Ae,[n(r(o.uuid),1)])),[[ne,o.uuid]]),t("div",Ee,[t("div",He,[t("span",null,r(m(me).dateFromNow(o.createdAt)),1),t("span",null,r(o.digitalHumanPerson.cname)+" ("+r(m(q)([["speak_gender",o.digitalHumanPerson.gender]]))+") ",1)]),e(A,{class:"ml-6",size:"x-small",color:"inherit",icon:"",variant:"text"},{default:s(()=>[e(m(he),{width:"14","stroke-width":"1.5"}),e(Se,{activator:"parent"},{default:s(()=>[e(Le,{density:"compact","onClick:select":d=>Z(d,o)},{default:s(()=>[(f(!0),x(F,null,N(W(o.status),d=>(f(),w(Be,{key:d.key,value:d.key,"hide-details":"","min-height":"38"},{prepend:s(()=>[(f(),w(pe(d.icon),{size:16,class:b(["mr-2",[`text-${d.color}`]])},null,8,["class"]))]),default:s(()=>[e(Fe,{class:b([`text-${d.color}`])},{default:s(()=>[n(r(d.text),1)]),_:2},1032,["class"])]),_:2},1032,["value"]))),128))]),_:2},1032,["onClick:select"])]),_:2},1024)]),_:2},1024)])]),_:2},1024)],8,ze)]),_:2},1024)]),_:2},1024))),256)):(f(),w(oe,{key:1}))]),_:1},8,["class"]),j(e(Ie,{class:"mt-5",ref_key:"refPager",ref:k,total:C.value,"page-sizes":[12,20,40,60,120],onQuery:J},null,8,["total"]),[[ge,_.value.length>0]])]),_:1})]),_:1})]),_:1}),e(Me,{ref_key:"refDialogLog",ref:V},null,512),e(I,{ref_key:"refConfirmDelete",ref:D,onSubmit:Y},{text:s(()=>[qe,Ke,n(" 此操作将会"),Oe,n("该视频"),Ue,n(" 标题："),t("span",Je,r(c.title),1),We,n(" 你还要继续吗？ ")]),_:1},512),e(I,{ref_key:"refConfirmCancel",ref:$,onSubmit:X},{text:s(()=>[Ze,Ge,n(" 此操作将会"),Xe,n("该视频"),Ye,n(" 标题："),t("span",et,r(c.title),1),tt,n(" 你还要继续吗？ ")]),_:1},512),e(I,{ref_key:"refConfirmFirst",ref:S,onSubmit:ee},{text:s(()=>[st,at,n(" 此操作将会"),lt,n("该视频"),ot,n(" 标题："),t("span",nt,r(c.title),1),it,n(" 你还要继续吗？ ")]),_:1},512)],64)}}});export{kt as default};
