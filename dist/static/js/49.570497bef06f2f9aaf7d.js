webpackJsonp([49],{611:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(817),i=s(818),o=s(15),r=o(a.a,i.a,null,null,null);e.default=r.exports},817:function(t,e,s){"use strict";var a=s(179),i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a])}return t};e.a={name:"edge",props:["id"],components:{cSwitch:a.a},data:function(){return{name:"Edge 상세",originItems:{},items:{edgeId:null,ip:null,hostName:null,popId:null,edgeRelayYn:null,edgeRelayName:null,serviceTypeCode:[],edgeDomainCode:[],edgeDomainName:null,edgeUseYn:null,modifyHistReason:"Edge 수정"},code:{popId:[]},history:{fields:{createId:{label:"등록/수정자",class:"text-left"},histBeginDateTime:{label:"등록/수정일시"},modifyHistReason:{label:"변경이력",class:"text-left"},histMgmtId:{label:"보기"}},items:[]},isLoad:{popId:!0},isEdit:!1,isModalHistory:!1,isModalMessage:!1,modalMessage:"",isReferrerType:"",deploy:{status:!0,count:11234}}},computed:{popId:{get:function(){var t=this;return this.code.popId.find(function(e){return e.popId===t.items.popId})||null},set:function(t){this.items.popId=null!==t?t.popId:null}}},created:function(){var t=this,e=this.$route.query.histories,s=void 0!==e?"/edges/"+this.id+"/histories/"+e:"/edges/"+this.id;e&&document.querySelector("body.app").classList.add("history-mode"),this.$https.get("/pops").then(function(e){t.isLoad.popId=!1,t.code.popId=e.data.items}),this.$https.get(s).then(function(e){t.items=i({},t.items,e.data.items),t.originItems=JSON.parse(JSON.stringify(t.items))})},methods:{onEdit:function(){this.isEdit=!0},onView:function(){this.isEdit=!1,this.items=JSON.parse(JSON.stringify(this.originItems))},onSubmit:function(){var t=this,e=this.items,s=e.referrerId,a=e.popId,i=e.referrerUseYn,o=e.referrerTypeCode,r=e.modifyHistReason;this.$https.put("/referrers/"+this.id,{referrerId:s,popId:a,referrerUseYn:i,referrerTypeCode:o,modifyHistReason:r}).then(function(){t.$router.go(t.$router.currentRoute)}).catch(function(t){console.log(t)})},onDelete:function(){this.modalMessage="정말 삭제하시겠습니까?",this.isModalMessage=!0},onDeleteData:function(){var t=this;this.$https.delete("/referrers/"+this.id+"?referrerTypeCode="+this.referrerTypeCode).then(function(){t.$router.push({name:"Referrer 관리"})}).catch(function(t){console.log(t)})},getHistoryLink:function(t){return"#/configuration/referrer/"+this.id+"?histories="+t+"&referrerTypeCode="+this.referrerTypeCode},showHistory:function(){var t=this;this.isModalHistory=!this.isModalHistory,this.$https.get("/referrers/"+this.id+"/histories",{referrerTypeCode:this.referrerTypeCode}).then(function(e){t.history.items=e.data.items})}}}},818:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"animated fadeIn"},[s("content-header",{attrs:{title:t.items.hostName,name:t.name}}),t._v(" "),s("div",{staticClass:"collapse-title"},[s("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.formDefault",modifiers:{formDefault:!0}}],attrs:{variant:"secondary",block:!0}},[t._v("\n      기본정보\n      "),s("i",{staticClass:"fa fa-angle-down"})])],1),t._v(" "),s("b-collapse",{attrs:{id:"formDefault",visible:""}},[s("b-card",[s("b-form-fieldset",{attrs:{label:"Edge ID","label-cols":3,horizontal:!0}},[s("b-form-input",{attrs:{type:"text",plaintext:""},model:{value:t.items.edgeId,callback:function(e){t.$set(t.items,"edgeId",e)},expression:"items.edgeId"}})],1),t._v(" "),s("b-form-fieldset",{attrs:{label:"IP","label-cols":3,horizontal:!0}},[s("b-form-input",{attrs:{type:"text",plaintext:""},model:{value:t.items.ip,callback:function(e){t.$set(t.items,"ip",e)},expression:"items.ip"}})],1),t._v(" "),s("b-form-fieldset",{attrs:{label:"Host Name","label-cols":3,horizontal:!0}},[s("b-form-input",{attrs:{value:t.items.hostName,type:"text",plaintext:""}})],1),t._v(" "),s("b-form-fieldset",{attrs:{label:"PoP 선택 *","label-cols":3,horizontal:!0}},[t.isEdit?s("multiselect",{attrs:{allowEmpty:!1,showLabels:!1,searchable:!1,options:t.code.popId,loading:t.isLoad.popId,label:"popName",placeholder:"선택"},model:{value:t.popId,callback:function(e){t.popId=e},expression:"popId"}}):s("b-form-input",{attrs:{value:t.items.popName,type:"text",plaintext:""}})],1),t._v(" "),s("b-form-fieldset",{attrs:{label:"구분 *","label-cols":3,horizontal:!0}},[s("b-form-radio-group",{attrs:{options:[{text:"Edge",value:"Edge"},{text:"Relay",value:"Relay"}]},model:{value:t.items.edgeRelayName,callback:function(e){t.$set(t.items,"edgeRelayName",e)},expression:"items.edgeRelayName"}})],1),t._v(" "),s("b-form-fieldset",{attrs:{label:"사용여부","label-cols":3,horizontal:!0}},[t.isEdit?s("c-switch",t._b({attrs:{type:"icon",variant:"success",pill:!0},model:{value:t.items.referrerUseYn,callback:function(e){t.$set(t.items,"referrerUseYn",e)},expression:"items.referrerUseYn"}},"c-switch",{on:"",off:""},!1)):s("b-badge",{attrs:{pill:"",variant:t.items.referrerUseYn?"success":"secondary"}},[t._v("\n          "+t._s(t.items.referrerUseYn?"사용":"미사용")+"\n        ")])],1),t._v(" "),t.isEdit?s("b-form-fieldset",{attrs:{label:"변경이력","label-cols":3,horizontal:!0}},[s("b-form-textarea",{attrs:{rows:6},model:{value:t.items.modifyHistReason,callback:function(e){t.$set(t.items,"modifyHistReason",e)},expression:"items.modifyHistReason"}})],1):t._e()],1)],1),t._v(" "),t.isEdit?t._e():s("div",{staticClass:"collapse-title"},[s("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.policy",modifiers:{policy:!0}}],attrs:{variant:"secondary",block:!0}},[t._v("\n      Policy\n      "),s("i",{staticClass:"fa fa-angle-down"})])],1),t._v(" "),t.isEdit?t._e():s("b-collapse",{attrs:{id:"policy",visible:""}},["high"===t.isReferrerType?s("b-card",[s("div",{attrs:{slot:"header"},slot:"header"},[s("a",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{href:"#/policy/ip-restriction",target:"_blank"}},[t._v("IP Restriction 설정")]),t._v(" "),s("a",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{href:"#/policy/pop-preference",target:"_blank"}},[t._v("PoP Preference 설정")])]),t._v(" "),s("b-form-fieldset",{attrs:{label:"IP Restriction","label-cols":3,horizontal:!0}},[s("div",{staticClass:"form-in-group"},t._l(t.items.ipRestrictionList,function(e,a){return s("b-form-fieldset",{key:a,attrs:{label:String(a+1),"label-cols":1,horizontal:!0}},[s("span",{staticClass:"domain-text"},[t._v(t._s(e))])])}))]),t._v(" "),s("b-form-fieldset",{attrs:{label:"PoP Preference","label-cols":3,horizontal:!0}},[s("div",{staticClass:"form-in-group"},t._l(t.items.preferenceList,function(e,a){return s("b-form-fieldset",{key:e.popId,attrs:{label:e.serviceName,"label-cols":2,horizontal:!0}},[s("span",{staticClass:"domain-text"},[t._v("\n              "+t._s(e.targetPopIdName1)+" -\n              "+t._s(e.targetPopIdName2)+" -\n              "+t._s(e.targetPopIdName3)+" -\n              "+t._s(e.targetPopIdName4)+" -\n              "+t._s(e.targetPopIdName5)+"\n            ")])])}))])],1):t._e(),t._v(" "),"low"===t.isReferrerType?s("b-card",[s("div",{attrs:{slot:"header"},slot:"header"},[s("a",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{href:"#/policy/onetime-url",target:"_blank"}},[t._v("One-Time URL 설정")])]),t._v(" "),s("b-form-fieldset",{attrs:{label:"One-Time URL","label-cols":3,horizontal:!0}},[s("div",{staticClass:"form-in-group"},[s("b-form-fieldset",{attrs:{label:"expireTime","label-cols":4,horizontal:!0}},[s("b-form-input",{attrs:{value:t.items.oneTimeUrlInfo.expireTime,type:"text",plaintext:""}})],1),t._v(" "),s("b-form-fieldset",{attrs:{label:"ByPass","label-cols":4,horizontal:!0}},[s("b-badge",{attrs:{pill:"",variant:t.items.oneTimeUrlInfo.bypassYn?"success":"secondary"}},[t._v("\n              "+t._s(t.items.oneTimeUrlInfo.bypassYn?"사용":"미사용")+"\n            ")])],1)],1)])],1):t._e()],1),t._v(" "),t.isEdit?t._e():s("div",{staticClass:"collapse-title"},[s("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.history",modifiers:{history:!0}}],attrs:{variant:"secondary",block:!0}},[t._v("\n      처리이력\n      "),s("i",{staticClass:"fa fa-angle-down"})])],1),t._v(" "),t.isEdit?t._e():s("b-collapse",{attrs:{id:"history"}},[s("b-card",[s("b-form-fieldset",{attrs:{label:"등록일","label-cols":3,horizontal:!0}},[s("b-form-input",{attrs:{value:t.items.createDateTime,plaintext:"",type:"text"}})],1),t._v(" "),s("b-form-fieldset",{attrs:{label:"등록자","label-cols":3,horizontal:!0}},[s("b-form-input",{attrs:{value:t.items.createId,plaintext:"",type:"text"}})],1),t._v(" "),t.items.modifyDateTime?s("b-form-fieldset",{attrs:{label:"수정일","label-cols":3,horizontal:!0}},[s("b-form-input",{attrs:{value:t.items.modifyDateTime,plaintext:"",type:"text"}})],1):t._e(),t._v(" "),t.items.modifyDateTime?s("b-form-fieldset",{attrs:{label:"수정자","label-cols":3,horizontal:!0}},[s("b-form-input",{attrs:{value:t.items.modifyId,plaintext:"",type:"text"}})],1):t._e(),t._v(" "),s("b-form-fieldset",{attrs:{label:"배포상태","label-cols":3,horizontal:!0}},[s("b-form-input",{staticStyle:{width:"30px"},attrs:{value:t.deploy.status?"성공":"실패",plaintext:"",type:"text"}}),t._v("\n        ("),s("a",{attrs:{href:"#"}},[t._v(t._s(t.deploy.count))]),t._v(")\n      ")],1)],1)],1),t._v(" "),t.isEdit?s("div",{staticClass:"page-btn"},[s("b-button",{attrs:{type:"button",variant:"outline-secondary"},on:{click:t.onView}},[t._v("취소")]),t._v(" "),s("b-button",{attrs:{type:"button",variant:"primary"},on:{click:t.onSubmit}},[t._v("저장")])],1):s("div",{staticClass:"page-btn"},[s("b-button",{staticClass:"float-left",attrs:{type:"button",variant:"outline-secondary"},on:{click:t.onDelete}},[t._v("삭제")]),t._v(" "),s("b-button",{attrs:{type:"button",variant:"outline-secondary"},on:{click:t.showHistory}},[t._v("이력관리")]),t._v(" "),s("b-button",{attrs:{type:"button",variant:"outline-secondary",to:{name:"Referrer 관리"}}},[t._v("목록")]),t._v(" "),s("b-button",{attrs:{type:"button",variant:"primary"},on:{click:t.onEdit}},[t._v("수정")])],1),t._v(" "),s("b-modal",{attrs:{size:"lg",title:"이력관리"},model:{value:t.isModalHistory,callback:function(e){t.isModalHistory=e},expression:"isModalHistory"}},[s("section",{staticClass:"board"},[s("b-table",{attrs:{striped:"",bordered:"",hover:"","show-empty":"",items:t.history.items,fields:t.history.fields},scopedSlots:t._u([{key:"histMgmtId",fn:function(e){return[s("a",{attrs:{href:t.getHistoryLink(e.value),target:"_blank"}},[t._v("보기")])]}}])})],1),t._v(" "),s("div",{attrs:{slot:"modal-footer"},slot:"modal-footer"},[s("b-button",{attrs:{type:"button",variant:"primary"},on:{click:function(e){t.isModalHistory=!1}}},[s("i",{staticClass:"fa fa-dot-circle-o"}),t._v(" 확인")])],1)]),t._v(" "),s("b-modal",{staticClass:"modal-danger",attrs:{title:"Message",size:"sm"},model:{value:t.isModalMessage,callback:function(e){t.isModalMessage=e},expression:"isModalMessage"}},[s("div",{staticClass:"d-block text-center"},[s("h5",[t._v(t._s(t.modalMessage))])]),t._v(" "),s("div",{attrs:{slot:"modal-footer"},slot:"modal-footer"},[s("b-button",{attrs:{type:"button",variant:"danger"},on:{click:t.onDeleteData}},[s("i",{staticClass:"fa fa-dot-circle-o"}),t._v(" 삭제")]),t._v(" "),s("b-button",{attrs:{type:"button",variant:"secondary"},on:{click:function(e){t.isModalMessage=!1}}},[s("i",{staticClass:"fa fa-ban"}),t._v(" 취소")])],1)])],1)},i=[],o={render:a,staticRenderFns:i};e.a=o}});