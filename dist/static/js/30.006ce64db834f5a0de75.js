webpackJsonp([30],{626:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e(825),o=e(826),a=e(13),n=a(s.a,o.a,null,null,null);i.default=n.exports},825:function(t,i,e){"use strict";var s=e(182);i.a={name:"policy",components:{cSwitch:s.a},data:function(){return{originItems:{},submitItems:{},items:{ipRestrictUseYn:!1,ipRestrictGlobal:[{ipRestrictId:null,ipRestrictGlobalSeq:null,ip:null}],modifyHistReason:null,processStateCodeName:null,processStateCode:null,processId:null},code:{ipRestriction:[]},history:{fields:{createId:{label:"등록/수정자",class:"text-left"},histBeginDateTime:{label:"등록/수정일시"},modifyHistReason:{label:"변경이력",class:"text-left"},histMgmtId:{label:"보기"}},items:[],pageInfo:{page:1,size:10,totalCount:1}},isEdit:!1,isModalHistory:!1,inValidForm:!1,modal:{open:!1,msg:"",action:function(){}}}},created:function(){var t=this,i=this.$route.query.histories,e=void 0!==i?"/policy/ipRestriction/hist/"+i:"/policy/ipRestriction";i&&document.querySelector("body.app").classList.add("history-mode"),this.$https.get(e).then(function(i){t.items=i.data.items,t.originItems=JSON.parse(JSON.stringify(t.items))})},methods:{onEdit:function(){this.isEdit=!0},onView:function(){this.isEdit=!1,this.items=JSON.parse(JSON.stringify(this.originItems))},onAddRow:function(){this.items.ipRestrictGlobal.push({ip:""})},onDelRow:function(t){this.items.ipRestrictGlobal.splice(t,1)},onSubmit:function(){var t=this.items.ipRestrictGlobal.map(function(t){return{ip:t.ip}}),i=this.items,e=i.ipRestrictUseYn,s=i.modifyHistReason,o={ipRestrictUseYn:e,ipRestrictGlobal:t,modifyHistReason:s},a=this.$valid.all(o);this.inValidForm=!a,a&&this.$https.put("/policy/ipRestriction",o).then(this.onSubmitComplete).catch(function(t){console.log(t)})},onSubmitComplete:function(){var t=this.$router;this.modal={open:!0,msg:"수정이 완료되었습니다",action:function(){t.go(t.currentRoute)}}},getHistoryLink:function(t){return"#/policy/ipRestriction?histories="+t},showHistory:function(){var t=this;this.isModalHistory=!this.isModalHistory,this.$https.get("/policy/ipRestriction/hist").then(function(i){t.history.items=i.data.items})}}}},826:function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"animated fadeIn"},[e("b-form",{staticClass:"formView",attrs:{validated:t.inValidForm,novalidate:""}},[e("b-form-fieldset",{attrs:{label:"사용여부",horizontal:!0}},[t.isEdit?e("c-switch",{staticClass:"v-switch",attrs:{type:"text",on:"사용",off:"미사용"},model:{value:t.items.ipRestrictUseYn,callback:function(i){t.items.ipRestrictUseYn=i},expression:"items.ipRestrictUseYn"}}):e("span",{staticClass:"badge",class:{primary:t.items.ipRestrictUseYn}},[t._v("\n        "+t._s(t.items.ipRestrictUseYn?"사용":"미사용")+"\n      ")])],1),t._v(" "),t.items.ipRestrictUseYn?e("b-form-fieldset",{attrs:{description:"※ 192.168.0.* 또는 172.16.0.0/12<br>\n      ※ 2001:db8::1 또는 2001:db8::/64",horizontal:!0}},[e("template",{slot:"label"},[t._v("\n        IP 주소"),t.isEdit?e("i",{staticClass:"require"},[t._v("*")]):t._e()]),t._v(" "),e("b-table",{staticClass:"sub",attrs:{"show-empty":"",items:t.items.ipRestrictGlobal,fields:{index:{label:"번호",class:"index"},ip:{label:"서버 IP 주소",class:"text-left"}}},scopedSlots:t._u([{key:"index",fn:function(i){return[t._v("\n          "+t._s(i.index+1)+"\n        ")]}},{key:"ip",fn:function(i){return[t.isEdit?e("span",[e("b-form-input",{attrs:{type:"text",required:""},model:{value:i.item.ip,callback:function(t){i.item.ip=t},expression:"row.item.ip"}}),t._v(" "),e("span",{staticClass:"ico"},[0===i.index?e("button",{attrs:{type:"button"},on:{click:t.onAddRow}},[e("i",{staticClass:"fa fa-plus-circle"})]):t._e(),t._v(" "),i.index>0?e("button",{attrs:{type:"button"},on:{click:function(e){t.onDelRow(i.index)}}},[e("i",{staticClass:"fa fa-times-circle"})]):t._e()]),t._v(" "),e("div",{staticClass:"invalid-tooltip"},[t._v(t._s(t.$valid.msg.require))])],1):e("span",[t._v(t._s(i.value))])]}}])})],2):t._e(),t._v(" "),t.isEdit?e("b-form-fieldset",{attrs:{"invalid-feedback":t.$valid.msg.require,horizontal:!0}},[e("template",{slot:"label"},[t._v("\n        변경이력 "),t.isEdit?e("i",{staticClass:"require"},[t._v("*")]):t._e()]),t._v(" "),e("b-form-textarea",{attrs:{rows:6,required:""},model:{value:t.items.modifyHistReason,callback:function(i){t.items.modifyHistReason=i},expression:"items.modifyHistReason"}})],2):t._e()],1),t._v(" "),t.isEdit?t._e():e("div",{staticClass:"collapse-title"},[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.formHistory",modifiers:{formHistory:!0}}],staticClass:"btn-collapse"},[e("i",{staticClass:"fa"}),t._v("\n      처리이력\n    ")])],1),t._v(" "),t.isEdit?t._e():e("b-collapse",{attrs:{id:"formHistory",visible:""}},[e("b-form",{staticClass:"formView"},[e("div",{staticClass:"form-row"},[e("b-form-fieldset",{attrs:{label:"등록일시",horizontal:!0}},[e("b-form-input",{attrs:{value:t.items.createDateTime,plaintext:"",type:"text"}})],1),t._v(" "),e("b-form-fieldset",{attrs:{label:"등록자",horizontal:!0}},[e("b-form-input",{attrs:{value:t.items.createId,plaintext:"",type:"text"}})],1)],1),t._v(" "),e("div",{staticClass:"form-row"},[t.items.modifyDateTime?e("b-form-fieldset",{attrs:{label:"수정일",horizontal:!0}},[e("b-form-input",{attrs:{value:t.items.modifyDateTime,plaintext:"",type:"text"}})],1):t._e(),t._v(" "),e("b-form-fieldset",{attrs:{label:"수정자",horizontal:!0}},[e("b-form-input",{attrs:{value:t.items.modifyId,plaintext:"",type:"text"}})],1)],1),t._v(" "),e("b-form-fieldset",{attrs:{label:"배포상태",horizontal:!0}},[e("input",{staticClass:"form-control-plaintext",staticStyle:{width:"50px"},attrs:{type:"text",readonly:"readonly"},domProps:{value:t.items.processStateCodeName}}),t._v(" "),e("a",{staticClass:"btn btn-in-table",attrs:{href:"#/workflow/service/"+t.items.processId,target:"_blank"}},[t._v(t._s(t.items.processId))])])],1)],1),t._v(" "),t.isEdit?e("div",{staticClass:"page-btn"},[e("b-button",{attrs:{type:"button",variant:"outline-secondary"},on:{click:t.onView}},[t._v("취소")]),t._v(" "),e("b-button",{attrs:{type:"button",variant:"primary"},on:{click:t.onSubmit}},[t._v("저장")])],1):e("div",{staticClass:"page-btn"},[e("b-button",{attrs:{type:"button",variant:"outline-secondary"},on:{click:t.showHistory}},[t._v("이력관리")]),t._v(" "),"PROCESS_STATE_02"===t.items.processStateCode?e("b-button",{attrs:{type:"button",variant:"primary"},on:{click:t.onEdit}},[t._v("수정")]):t._e()],1),t._v(" "),e("b-modal",{attrs:{size:"lg",title:"이력관리"},model:{value:t.isModalHistory,callback:function(i){t.isModalHistory=i},expression:"isModalHistory"}},[e("section",{staticClass:"board"},[e("b-table",{attrs:{"show-empty":"",items:t.history.items,fields:t.history.fields,"current-page":t.history.pageInfo.page,"per-page":t.history.pageInfo.size},scopedSlots:t._u([{key:"histMgmtId",fn:function(i){return[e("a",{attrs:{href:t.getHistoryLink(i.value),target:"_blank"}},[t._v("보기")])]}}])})],1),t._v(" "),e("b-pagination",{staticClass:"mt-2",attrs:{"total-rows":t.history.pageInfo.totalCount,"per-page":t.history.pageInfo.size},model:{value:t.history.pageInfo.page,callback:function(i){t.history.pageInfo.page=i},expression:"history.pageInfo.page"}}),t._v(" "),e("div",{slot:"modal-footer"},[e("b-button",{attrs:{type:"button",variant:"primary"},on:{click:function(i){t.isModalHistory=!1}}},[t._v("확인")])],1)],1),t._v(" "),e("b-modal",{attrs:{title:"Message",size:"sm"},model:{value:t.modal.open,callback:function(i){t.modal.open=i},expression:"modal.open"}},[e("div",{staticClass:"d-block text-center"},[e("p",[t._v(t._s(t.modal.msg))])]),t._v(" "),e("div",{staticClass:"mx-auto",slot:"modal-footer"},[e("b-button",{attrs:{type:"button",variant:"primary"},on:{click:t.modal.action}},[t._v("확인")])],1)])],1)},o=[],a={render:s,staticRenderFns:o};i.a=a}});