import{d as me,aE as ge,r as m,U as j,k as c,l as b,m as e,j as t,W as n,$ as V,_ as i,n as s,bg as U,b9 as Q,x as W,z as be,w as Ve,a9 as de,V as ne,Q as pe,a4 as fe,a1 as B,Z as T,Y as R,F as H,bA as xe,am as _e,an as ve,ad as ke,o as we,bf as Ie,a6 as ie,bh as re,bB as $e,O as De,bC as Fe,bD as Te,bE as Ce}from"./utils-380ae8e1.js";import{_ as Ue}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-d3ad82eb.js";import{_ as te}from"./UiParentCard.vue_vue_type_script_setup_true_lang-aa11bf62.js";import{_ as Pe}from"./ConfirmByClick.vue_vue_type_style_index_0_lang-ccdf5c87.js";import{ad as D,I as ae,V as S,_ as he,ae as ue,L as le,ab as Se,a4 as J,$ as Le,at as Me,J as Ae,H as Ne,h as qe,e as Ee,au as ze}from"./index-e3ddd1e6.js";import{V as P}from"./VCol-ac87f973.js";import{V as oe}from"./VRow-fc36e79d.js";import{_ as Ye}from"./DialogLog.vue_vue_type_style_index_0_lang-85c14e4a.js";import{_ as Be}from"./TagCorner.vue_vue_type_style_index_0_lang-a34e1130.js";import{_ as X}from"./Explain.vue_vue_type_style_index_0_lang-ed4ae5bc.js";import{_ as ee}from"./UploadFile.vue_vue_type_script_setup_true_lang-35803e26.js";import{V as ce}from"./VAlert-1533433c.js";import{V as Re}from"./VTextarea-d585bc21.js";import{V as He}from"./VForm-bacf8b83.js";import"./Confirm-3cd730c8.js";import"./TextLog-3e0acb24.js";import"./VFileInput-858a0d07.js";const je={style:{"aspect-ratio":"1"}},Qe=["src","poster"],Oe={class:"my-form"},Ke={class:"text-h3 my-2"},Ze=n("label",null,"头像：",-1),Je={class:"d-flex align-center"},We=["src"],Ge=n("label",null,"时长：",-1),Xe=n("label",null,"大小：",-1),et=n("label",null,"创建时间：",-1),tt=n("label",null,"更新时间：",-1),at=n("label",null,"备注：",-1),lt=me({__name:"Detail",setup(x,{expose:M}){const A=ge(),C=m(),r=m(""),l=m({digitalHumanPerson:{},voiceSpeak:{}}),_=async()=>{let[w,v]=await Q.get({url:`/api/digitalhuman/synthesis/${r.value}/view`});v&&(l.value=v||{})},u=()=>{A.push("/digital-human/edit")};return M({show({title:w,uuid:v}){r.value=v,C.value.show({width:1e3,showActions:!1,title:w}),_()}}),(w,v)=>{const I=j("Pane");return c(),b(I,{ref_key:"refPane",ref:C},{default:e(()=>[t(oe,null,{default:e(()=>[t(P,{cols:"12",md:"6"},{default:e(()=>[t(te,null,{default:e(()=>[n("div",je,[n("video",{class:"w-100 h-100",src:(l.value.video,l.value.video),controls:"",poster:l.value.digitalHumanPerson.cover},null,8,Qe)])]),_:1})]),_:1}),t(P,{cols:"12",md:"6"},{default:e(()=>[t(te,null,{default:e(()=>[n("div",Oe,[n("h3",Ke,V(l.value.cname),1),t(D,{"hide-details":""},{prepend:e(()=>[Ze]),default:e(()=>[n("div",Je,[t(ae,{size:"80",class:"mr-2",rounded:"0"},{default:e(()=>[n("img",{src:l.value.cover,class:"w-100"},null,8,We)]),_:1})])]),_:1}),t(D,{"hide-details":""},{prepend:e(()=>[Ge]),default:e(()=>[i(" 15s ")]),_:1}),t(D,{"hide-details":""},{prepend:e(()=>[Xe]),default:e(()=>[i(" 1.0 ")]),_:1}),t(D,{"hide-details":""},{prepend:e(()=>[et]),default:e(()=>[i(" "+V(s(U).dateFormat(l.value.createdAt,"YYYY-MM-DD HH:mm:ss")),1)]),_:1}),t(D,{"hide-details":""},{prepend:e(()=>[tt]),default:e(()=>[i(" "+V(s(U).dateFormat(l.value.updatedAt,"YYYY-MM-DD HH:mm:ss")),1)]),_:1}),t(D,{"hide-details":""},{prepend:e(()=>[at]),default:e(()=>[i(" "+V(l.value.remark),1)]),_:1}),t(S,{flat:"",color:"secondary",onClick:u},{default:e(()=>[i("去合成视频 >")]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},512)}}});const L=x=>(_e("data-v-e75bc997"),x=x(),ve(),x),ot={class:"mx-auto mt-10",style:{width:"500px"}},st=L(()=>n("label",{class:"required"},"预览图片",-1)),dt=L(()=>n("label",{class:"required"},"资源类型 ",-1)),nt=["src"],it={class:"required"},rt={key:1,style:{"margin-left":"24%",width:"75%"}},ut=L(()=>n("label",{class:"required"},"姓名 ",-1)),ct=L(()=>n("label",{class:"required"},"标识 ",-1)),mt=L(()=>n("label",{class:"required"},"性别 ",-1)),pt={class:"required"},ft={class:"required"},_t={class:"required"},vt=L(()=>n("label",null,"备注",-1)),ht={__name:"PaneModelEstimate",props:{modelName:String},emits:["submit"],setup(x,{expose:M,emit:A}){const C=x,r=W({operateType:"",maxTokens:4096,file:"",formData:{mediaType:"",coverFileId:"",videoFileId:"",name:"",cname:"",gender:null,resolution:"",remark:"",posture:"",pads:"0,0,0,0"},upLoading:!1}),{formData:l}=be(r),_=m(null),u=m(null),w=A,v=m(),I=m(),N=m(),G=/^[a-zA-Z0-9-]+$/,k=W({coverFileId:[o=>!!o||"请上传预览图片"],videoFileId:[o=>o&&o.length>0?!0:r.formData.mediaType=="image"?"请上传图片":r.formData.mediaType=="video"?"请上传视频文件":"请上传"],resolution:[o=>!!o||"请选择分辨率"],posture:[o=>!!o||"请选择姿势"],mediaType:[o=>!!o||"请选择资源类型"],gender:[o=>!!o||"请选择性别"],name:[o=>o&&o.length>0?(o.length>1||o.length<=30)&&G.test(o)?!0:"请输入正确标识：数字、字母、-":"请输入标识"],cname:[o=>o&&o.length>0&&o.length<30?!0:"请输入姓名"],pads:[o=>{if(o&&o.length>0){o=o.split(",");let a=/^(?!0)\d{1,4}$|^0$/,p=o.every(Y=>a.test(Y));return o.length==4&&p?!0:"请输入正整数边框充填值，比如:top,bottom,left,right"}else return"请输入边框充填"}]});Ve(()=>r.formData.mediaType,()=>{var o;xe.scaleIn((o=N.value)==null?void 0:o.$el)});const q=async(o={})=>{r.formData={...r.formData};const[a,p]=await Q.post({...o,showSuccess:!0,url:"/api/digitalhuman/person/create",data:{...r.formData,modelName:C.modelName}});p&&(v.value.hide(),w("submit"))},E=async(o={})=>{const[a,p]=await Q.put({...o,showSuccess:!0,url:`/api/digitalhuman/person/${r.formData.name}/update`,data:{...r.formData}});p&&(v.value.hide(),w("submit"))},K=({valid:o,showLoading:a})=>{o&&(r.operateType=="add"?q({showLoading:a}):E({showLoading:a}))},h=o=>{let{operateType:a}=r;if(a=="view")return!0;if(a=="edit")return!!["mediaType","name"].includes(o);if(a=="add")return!1};M({show({title:o,infos:a={coverFileId:"",videoFileId:"",name:"",cname:"",mediaType:null,gender:null,resolution:null,posture:null,remark:"",pads:"0,0,0,0"},operateType:p}){v.value.show({title:o,refForm:I,showActions:p!="view"}),r.formData=de.pick(de.cloneDeep(a),["mediaType","videoFileId","name","cname","gender","resolution","remark","posture","pads","coverFileId"]),console.log("infos",a.mediaType),r.operateType=p,p=="add"?(_.value=null,u.value=null,r.upLoading=!1):(_.value={s3Url:a.cover},u.value={s3Url:a.video})}});const z=()=>{l.value.coverFileId="",_.value=null},Z=()=>{l.value.videoFileId="",u.value=null};return(o,a)=>{const p=j("Select"),Y=j("Pane");return c(),b(Y,{ref_key:"refPane",ref:v,class:"",onSubmit:K},{default:e(()=>[n("div",ot,[t(He,{ref_key:"refForm",ref:I,class:"my-form"},{default:e(()=>[t(D,{rules:k.coverFileId,modelValue:s(l).coverFileId,"onUpdate:modelValue":a[2]||(a[2]=d=>s(l).coverFileId=d),"hide-details":"auto",style:{position:"relative"},disabled:h("avatar")},{prepend:e(()=>[st]),default:e(()=>[_.value&&_.value.s3Url?(c(),b(ce,{key:0,color:"borderColor",variant:"text",density:"compact",style:{flex:"none"}},ne({default:e(()=>[t(ae,{size:"80",rounded:"0"},{default:e(()=>[t(le,{transition:!1,src:_.value.s3Url,alt:"上传成功后的头像",cover:""},null,8,["src"])]),_:1})]),_:2},[h("avatar")?void 0:{name:"close",fn:e(()=>[t(ue,{class:"text-24 opacity-50 cursor-pointer",color:"textPrimary",onClick:z},{default:e(()=>[i("mdi-close-circle")]),_:1})]),key:"0"}]),1024)):(c(),b(S,{key:1,color:"info",variant:"outlined","prepend-icon":"mdi-plus",stacked:""},{default:e(()=>[i("上传 "),t(ee,{accept:"image/*",modelValue:s(l).coverFileId,"onUpdate:modelValue":a[0]||(a[0]=d=>s(l).coverFileId=d),infos:_.value,"onUpdate:infos":a[1]||(a[1]=d=>_.value=d),style:{width:"114px",height:"102px",position:"absolute",top:"0",left:"-55%",opacity:"0"}},null,8,["modelValue","infos"])]),_:1}))]),_:1},8,["rules","modelValue","disabled"]),t(p,{density:"compact",variant:"outlined",placeholder:"请选择资源类型","hide-details":"auto",rules:k.mediaType,modelValue:s(l).mediaType,"onUpdate:modelValue":a[3]||(a[3]=d=>s(l).mediaType=d),clearable2:!1,mapDictionary:{code:"digitalhuman_media_type"},disabled:h("mediaType")},{prepend:e(()=>[dt]),_:1},8,["rules","modelValue","disabled"]),s(l).mediaType?pe((c(),b(D,{key:0,ref_key:"refVideoFileId",ref:N,rules:k.videoFileId,modelValue:s(l).videoFileId,"onUpdate:modelValue":a[9]||(a[9]=d=>s(l).videoFileId=d),"hide-details":"auto",style:{position:"relative",width:"100%"},disabled:h("video")},{prepend:e(()=>[n("label",it,V(s(l).mediaType=="video"?"视频文件":"图片"),1)]),default:e(()=>[u.value&&u.value.s3Url?(c(),b(ce,{key:0,color:"borderColor",variant:"text",density:"compact",class:B(["flex-none max-h-[40vh]",{"w-full":s(l).mediaType=="video"}]),style1:"flex: none; width: 94%; max-height: 40vh"},ne({default:e(()=>[s(l).mediaType=="video"?(c(),T("video",{key:0,src:u.value.s3Url,controls:"",style:{height:"100%",width:"100%"}},null,8,nt)):s(l).mediaType=="image"?(c(),b(ae,{key:1,size:"80",rounded:"0"},{default:e(()=>[t(le,{transition:!1,src:u.value.s3Url,alt:"上传成功后的图片",cover:""},null,8,["src"])]),_:1})):R("",!0)]),_:2},[h("video")?void 0:{name:"close",fn:e(()=>[t(ue,{class:"text-24 opacity-50 cursor-pointer",color:"textPrimary",onClick:Z},{default:e(()=>[i("mdi-close-circle")]),_:1})]),key:"0"}]),1032,["class"])):(c(),T(H,{key:1},[s(l).mediaType=="video"?(c(),b(S,{key:0,color:"info",variant:"outlined","prepend-icon":"mdi-tray-arrow-up ",disabled:r.upLoading},{default:e(()=>[i(V(r.upLoading?"上传中...":"上传视频")+" ",1),t(ee,{accept:"video/*",modelValue:s(l).videoFileId,"onUpdate:modelValue":a[4]||(a[4]=d=>s(l).videoFileId=d),infos:u.value,"onUpdate:infos":a[5]||(a[5]=d=>u.value=d),onLoading:a[6]||(a[6]=d=>r.upLoading=d),style:{width:"146px",position:"absolute",top:"0",left:"-31%",opacity:"0"}},null,8,["modelValue","infos"])]),_:1},8,["disabled"])):s(l).mediaType=="image"?(c(),b(S,{key:1,color:"info",variant:"outlined","prepend-icon":"mdi-plus",stacked:""},{default:e(()=>[i("上传 "),t(ee,{accept:"image/*",modelValue:s(l).videoFileId,"onUpdate:modelValue":a[7]||(a[7]=d=>s(l).videoFileId=d),infos:u.value,"onUpdate:infos":a[8]||(a[8]=d=>u.value=d),style:{width:"114px",height:"102px",position:"absolute",top:"0",left:"-55%",opacity:"0"}},null,8,["modelValue","infos"])]),_:1})):R("",!0)],64))]),_:1},8,["rules","modelValue","disabled"])),[[fe,s(l).mediaType]]):R("",!0),r.upLoading?(c(),T("div",rt,[t(Se,{indeterminate:""})])):R("",!0),t(J,{type:"text",placeholder:"请输入姓名","hide-details":"auto",clearable:"",modelValue:s(l).cname,"onUpdate:modelValue":a[10]||(a[10]=d=>s(l).cname=d),rules:k.cname,disabled:h("cname")},{prepend:e(()=>[ut]),_:1},8,["modelValue","rules","disabled"]),t(J,{type:"text",placeholder:"请输入标识","hide-details":"auto",clearable:"",modelValue:s(l).name,"onUpdate:modelValue":a[11]||(a[11]=d=>s(l).name=d),rules:k.name,disabled:h("name")},{prepend:e(()=>[ct]),_:1},8,["modelValue","rules","disabled"]),t(p,{density:"compact",variant:"outlined",placeholder:"请选择性别","hide-details":"auto",rules:k.gender,modelValue:s(l).gender,"onUpdate:modelValue":a[12]||(a[12]=d=>s(l).gender=d),clearable:!1,mapDictionary:{code:"speak_gender"},disabled:h("gender")},{prepend:e(()=>[mt]),_:1},8,["rules","modelValue","disabled"]),t(p,{density:"compact",variant:"outlined",placeholder:"请选择姿势","hide-details":"auto",rules:k.posture,modelValue:s(l).posture,"onUpdate:modelValue":a[13]||(a[13]=d=>s(l).posture=d),clearable:!1,mapDictionary:{code:"digitalhuman_posture"},disabled:h("posture")},{prepend:e(()=>[n("label",pt,[i("姿势 "),t(X,null,{default:e(()=>[i("数字人形象的姿势 ")]),_:1})])]),_:1},8,["rules","modelValue","disabled"]),t(p,{density:"compact",variant:"outlined",placeholder:"请选择分辨","hide-details":"auto",rules:k.resolution,modelValue:s(l).resolution,"onUpdate:modelValue":a[14]||(a[14]=d=>s(l).resolution=d),clearable:!1,mapDictionary:{code:"digitalhuman_resolution"},disabled:h("resolution")},{prepend:e(()=>[n("label",ft,[i("分辨率 "),t(X,null,{default:e(()=>[i("上传视频的分辨率")]),_:1})])]),_:1},8,["rules","modelValue","disabled"]),t(J,{type:"text",placeholder:"请输入eg: top,bottom,left,right","hide-details":"auto",clearable:"",modelValue:s(l).pads,"onUpdate:modelValue":a[15]||(a[15]=d=>s(l).pads=d),rules:k.pads,disabled:h("pads")},{prepend:e(()=>[n("label",_t,[i("边框充填 "),t(X,null,{default:e(()=>[i("算法截取面部时的边框:上,下,左,右")]),_:1})])]),_:1},8,["modelValue","rules","disabled"]),t(Re,{modelValue:s(l).remark,"onUpdate:modelValue":a[16]||(a[16]=d=>s(l).remark=d),modelModifiers:{trim:!0},placeholder:"请输入",disabled:h("remark")},{prepend:e(()=>[vt]),_:1},8,["modelValue","disabled"])]),_:1},512)])]),_:1},512)}}},yt=he(ht,[["__scopeId","data-v-e75bc997"]]),O=x=>(_e("data-v-444ef567"),x=x(),ve(),x),gt={class:"card-list-item text-textPrimary text-decoration-none",href:"javascript: void(0)"},bt=["onClick"],Vt={class:"text-subtitle-1 mt-1 text-medium-emphasis text-truncate",style:{height:"15px"}},xt={class:"d-flex align-center justify-space-between mt-2",style:{height:"32px"}},kt={class:"flex-1-1 d-flex justify-space-between text-medium-emphasis"},wt=O(()=>n("span",{class:"font-weight-bold"},"这是进行一项操作时必须了解的重要信息",-1)),It=O(()=>n("br",null,null,-1)),$t=O(()=>n("span",{class:"text-primary"},"删除",-1)),Dt=O(()=>n("br",null,null,-1)),Ft={class:"text-primary"},Tt=O(()=>n("br",null,null,-1)),Ct=me({__name:"characterList",setup(x){const M=ke(),{loadDictTree:A,getLabels:C}=M,r=m({title:"人物形象列表"}),l=m([]),_=W({name:""}),u=m([]),w=m(0),v=m(),I=m(),N=m(!1),G=m(),k=m(),q=m(),E=W({name:""}),K=m(),h=async(y={})=>{await A(["speak_gender","digitalhuman_posture"]);const[$,F]=await Q.get({url:"/api/digitalhuman/person/list",showLoading:K.value.$el,data:{..._,...y}});F?(u.value=F.list||[],w.value=F.total):(u.value=[],w.value=0),N.value=!0},z=()=>{v.value.query({page:1})},Z=()=>{v.value.query()},o=()=>[{text:"编辑",color:"info",icon:Fe,key:"view"},{text:"下载",color:"success",icon:Te,key:"download"},{text:"删除",color:"error",icon:Ce,key:"delete"}],a=y=>{window.open(y.video)},p=({id:y},$)=>{E.name=$.name,y==="view"?I.value.show({title:"形象编辑",operateType:"edit",infos:$}):y==="download"?a($):y==="delete"&&q.value.show({width:"400px"})},Y=async(y={})=>{const[$,F]=await Q.delete({...y,showSuccess:!0,url:`/api/digitalhuman/person/${E.name}/delete`});F&&(q.value.hide(),Z())},d=()=>{I.value.show({title:"形象添加",operateType:"add"})},se=y=>{I.value.show({title:"形象详情",operateType:"view",infos:y})};return we(()=>{Z()}),(y,$)=>{const F=j("ButtonsInForm"),ye=j("NoData");return c(),T(H,null,[t(Ue,{title:r.value.title,breadcrumbs:l.value},null,8,["title","breadcrumbs"]),t(te,null,{default:e(()=>[t(oe,null,{default:e(()=>[t(P,{cols:"12",lg:"3",md:"4",sm:"6"},{default:e(()=>[t(J,{density:"compact",modelValue:_.name,"onUpdate:modelValue":$[0]||($[0]=f=>_.name=f),label:"请输入姓名","hide-details":"",clearable:"",variant:"outlined",onKeyup:Ie(z,["enter"]),"onClick:clear":z},null,8,["modelValue","onKeyup"])]),_:1}),t(P,{cols:"12",lg:"3",md:"4",sm:"6"},{default:e(()=>[t(F,null,{default:e(()=>[t(S,{color:"primary",onClick:d},{default:e(()=>[i("添加形象")]),_:1})]),_:1})]),_:1}),t(P,{cols:"12"},{default:e(()=>[t(oe,{ref_key:"listContentRef",ref:K,class:B(["min-h-[200px]",{"justify-center":u.value.length===0}])},{default:e(()=>[N.value?(c(),T(H,{key:0},[u.value.length>0?(c(!0),T(H,{key:0},ie(u.value,f=>(c(),b(P,{cols:"12",lg:"3",md:"4",sm:"6"},{default:e(()=>[t(Le,{elevation:"10",rounded:"md"},{default:e(()=>[t(Be,{class:B(s(re).mediaType[f.mediaType].className)},{default:e(()=>[i(V(s(re).mediaType[f.mediaType].text),1)]),_:2},1032,["class"]),n("a",gt,[t(le,{src:f.cover,height:"180px",cover:"",class:"rounded-t-md align-end text-right",onClick:g=>se(f)},null,8,["src","onClick"]),t(Me,{class:"pa-5"},{default:e(()=>[n("h5",{class:"text-h5 text-truncate",onClick:g=>se(f)},V(f.cname)+" （ "+V(s(C)([["speak_gender",f.gender],["digitalhuman_posture",f.posture]],g=>g.length?g.join("-"):"未知"))+"） ",9,bt),n("p",Vt,V(f.remark),1),n("div",xt,[n("div",kt,[n("span",null,V(s(U).dateFromNow(f.updatedAt).indexOf("后")==-1?s(U).dateFromNow(f.updatedAt):s(U).dateFromNow(f.updatedAt).substr(0,s(U).dateFromNow(f.updatedAt).length-1)+"前"),1)]),t(S,{class:"ml-6",size:"x-small",color:"inherit",icon:"",variant:"text"},{default:e(()=>[t(s($e),{width:"14","stroke-width":"1.5"}),t(Ae,{activator:"parent"},{default:e(()=>[t(Ne,{density:"compact","onClick:select":g=>p(g,f)},{default:e(()=>[(c(!0),T(H,null,ie(o(),g=>(c(),b(qe,{key:g.key,value:g.key,"hide-details":"","min-height":"38"},{prepend:e(()=>[(c(),b(De(g.icon),{size:16,class:B(["mr-2",[`text-${g.color}`]])},null,8,["class"]))]),default:e(()=>[t(Ee,{class:B([`text-${g.color}`])},{default:e(()=>[i(V(g.text),1)]),_:2},1032,["class"])]),_:2},1032,["value"]))),128))]),_:2},1032,["onClick:select"])]),_:2},1024)]),_:2},1024)])]),_:2},1024)])]),_:2},1024)]),_:2},1024))),256)):(c(),b(ye,{key:1}))],64)):R("",!0)]),_:1},8,["class"]),pe(t(ze,{class:"mt-5",ref_key:"refPager",ref:v,"page-sizes":[12,20,40,60,120],total:w.value,onQuery:h},null,8,["total"]),[[fe,u.value.length>0]])]),_:1})]),_:1})]),_:1}),t(Ye,{ref_key:"refDialogLog",ref:k},null,512),t(lt,{ref_key:"refDetail",ref:G},null,512),t(Pe,{ref_key:"refConfirmDelete",ref:q,onSubmit:Y},{text:e(()=>[wt,It,i(" 此操作将会"),$t,i("该形象"),Dt,i(" 形象姓名："),n("span",Ft,V(E.name),1),Tt,i(" 你还要继续吗？ ")]),_:1},512),t(yt,{ref_key:"refPaneModelEstimate",ref:I,onSubmit:z},null,512)],64)}}});const Kt=he(Ct,[["__scopeId","data-v-444ef567"]]);export{Kt as default};
