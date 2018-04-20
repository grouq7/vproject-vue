webpackJsonp([56],{602:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(799),a=i(800),o=i(15),n=o(s.a,a.a,null,null,null);e.default=n.exports},799:function(t,e,i){"use strict";var s=i(180),a=i(179),o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t};e.a={name:"service",props:["id"],components:{ContentHeader:s.a,cSwitch:a.a},data:function(){return{name:"Application 상세",originItems:{},items:{createId:null,modifyId:null,appName:null,appDesc:null,appUseYn:null,appKey:null,serviceNames:[],serviceCode:[],appServiceList:[],modifyHistReason:""},code:{serviceCode:[]},history:{fields:{createId:{label:"등록/수정자",class:"text-left"},histBeginDateTime:{label:"등록/수정일시"},modifyHistReason:{label:"변경이력",class:"text-left"},histMgmtId:{label:"보기"}},items:[],pageInfo:{page:1,size:10,totalCount:1}},isLoad:{serviceCode:!0},isEdit:!1,isModalHistory:!1,modal:{open:!1,type:"done",msg:"",action:function(){}},inValidForm:!1}},computed:{valid:function(){return{appName:null!==this.items.appName,serviceCode:this.code.serviceCode.length&&this.items.serviceCode.length,appServiceList:null!==this.items.appServiceList,appDesc:null!==this.items.appDesc,appUseYn:null!==this.items.appUseYn,modifyHistReason:null!=this.items.modifyHistReason}}},created:function(){var t=this,e=this.$route.query.histories,i=void 0!==e?"/apiManagement/apps/"+this.id+"/histories/"+e:"/apiManagement/apps/"+this.id;e&&document.querySelector("body.app").classList.add("history-mode"),this.$https.get(i).then(function(e){t.items=o({},t.items,e.data.items),t.items.serviceNames=t.items.serviceNames.split(",");var i=[];t.items.appServiceList.forEach(function(t){i.push({code:t.serviceCode,codeName:t.serviceName})}),t.items.serviceCode=i,t.originItems=JSON.parse(JSON.stringify(t.items))}),this.$https.get("/system/commonCode",{q:{groupCode:"API_SERVICE"}}).then(function(e){t.isLoad.serviceCode=!1,t.code.serviceCode=e.data.items})},methods:{fetchDetail:function(t){},onEdit:function(){this.isEdit=!0},onView:function(){this.isEdit=!1,this.items=JSON.parse(JSON.stringify(this.originItems))},onSubmit:function(){var t=this,e={appName:this.items.appName,appServiceList:this.items.appServiceList,appUseYn:this.items.appUseYn,modifyHistReason:this.items.modifyHistReason},i=this.$valid.all(e);this.inValidForm=!i,i&&this.$https.put("/apiManagement/apps/"+this.id,this.items).then(function(){t.$router.go(t.$router.currentRoute)}).catch(function(t){console.log(t)})},onDelete:function(){this.modal={open:!0,type:"error",msg:"정말로 삭제하시겠습니까?",action:this.onDeleteData}},onDeleteData:function(){var t=this;this.$https.delete("/apiManagement/apps/"+this.id).then(function(){t.$router.push({name:"Application 관리"})}).catch(function(t){console.log(t)})},onReissue:function(){this.modal={open:!0,type:"error",msg:"키를 재발급하면 기존 키로는 서비스를 사용할 수 없습니다.\n재발급 하시겠습니까?",action:this.onReissueData}},onReissueData:function(){var t=this;this.$https.post("/apiManagement/apps/"+this.id+"/key").then(function(e){t.items.appKey=e.data.items,t.originItems.appKey=e.data.items,t.modal={open:!1}}).catch(function(t){console.log(t)})},validate:function(t){},getHistoryLink:function(t){return"#/apis/application/"+this.id+"?histories="+t},showHistory:function(){var t=this;this.isModalHistory=!this.isModalHistory,this.$https.get("/apiManagement/apps/"+this.id+"/histories").then(function(e){t.history.items=e.data.items})},onSelectType:function(t){var e=t.code;this.items.appServiceList.push({serviceCode:e})},onRemoveType:function(t){var e=t.code;this.items.appServiceList=this.items.appServiceList.filter(function(t){return t.serviceCode!==e})}}}},800:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"animated fadeIn"},[i("div",{staticClass:"collapse-title"},[i("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.formDefault",modifiers:{formDefault:!0}}],staticClass:"btn-collapse"},[i("i",{staticClass:"fa"}),t._v("\n      기본정보\n    ")])],1),t._v(" "),i("b-collapse",{attrs:{id:"formDefault",visible:""}},[i("b-form",{staticClass:"formView",attrs:{validated:t.inValidForm,novalidate:""}},[t.isEdit?t._e():i("b-form-fieldset",{attrs:{label:"ID",horizontal:!0}},[i("b-form-input",{attrs:{type:"text",value:t.id,plaintext:""}})],1),t._v(" "),i("b-form-fieldset",{attrs:{"invalid-feedback":t.$valid.msg.require,horizontal:!0}},[i("template",{slot:"label"},[t._v("\n          Application Name"),t.isEdit?i("i",{staticClass:"require"},[t._v("*")]):t._e()]),t._v(" "),i("b-form-input",{attrs:{type:"text",placeholder:"Enter application name",plaintext:!t.isEdit,required:""},model:{value:t.items.appName,callback:function(e){t.$set(t.items,"appName",e)},expression:"items.appName"}})],2),t._v(" "),i("b-form-fieldset",{attrs:{"invalid-feedback":t.$valid.msg.select,horizontal:!0}},[i("template",{slot:"label"},[t._v("\n          Service 선택"),t.isEdit?i("i",{staticClass:"require"},[t._v("*")]):t._e()]),t._v(" "),t.isEdit?i("multiselect",{staticClass:"multiple",class:{invalid:!t.valid.serviceCode},attrs:{"track-by":"code",label:"codeName",multiple:!0,showLabels:!1,options:t.code.serviceCode,loading:t.isLoad.serviceCode,placeholder:"Select service type"},on:{select:t.onSelectType,remove:t.onRemoveType},model:{value:t.items.serviceCode,callback:function(e){t.$set(t.items,"serviceCode",e)},expression:"items.serviceCode"}}):i("div",{staticClass:"badge-list"},t._l(t.items.serviceNames,function(e){return i("span",{staticClass:"badge sm"},[t._v("\n            "+t._s(e)+"\n          ")])}))],2),t._v(" "),i("b-form-fieldset",{attrs:{label:"설명",horizontal:!0}},[i("b-form-textarea",{attrs:{rows:6,plaintext:!t.isEdit},model:{value:t.items.appDesc,callback:function(e){t.$set(t.items,"appDesc",e)},expression:"items.appDesc"}})],1),t._v(" "),t.isEdit?t._e():i("b-form-fieldset",{attrs:{label:"Key",horizontal:!0}},[i("span",{staticClass:"form-text-alone"},[t._v(t._s(t.items.appKey))]),t._v(" "),i("b-button",{attrs:{variant:"in-table"},on:{click:t.onReissue}},[t._v("재발급")])],1),t._v(" "),i("b-form-fieldset",{attrs:{label:"사용여부",horizontal:!0}},[t.isEdit?i("c-switch",{staticClass:"v-switch",attrs:{type:"text",on:"사용",off:"미사용"},model:{value:t.items.appUseYn,callback:function(e){t.$set(t.items,"appUseYn",e)},expression:"items.appUseYn"}}):i("span",{staticClass:"badge",class:{primary:t.items.appUseYn}},[t._v(t._s(t.items.appUseYn?"사용":"미사용")+"\n        ")])],1),t._v(" "),t.isEdit?i("b-form-fieldset",{attrs:{label:"변경이력<i class='require'>*</i>","invalid-feedback":t.$valid.msg.require,horizontal:!0}},[i("b-form-textarea",{attrs:{rows:6,required:""},model:{value:t.items.modifyHistReason,callback:function(e){t.$set(t.items,"modifyHistReason",e)},expression:"items.modifyHistReason"}})],1):t._e()],1)],1),t._v(" "),t.isEdit?t._e():i("div",{staticClass:"collapse-title"},[i("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.formHistory",modifiers:{formHistory:!0}}],staticClass:"btn-collapse"},[i("i",{staticClass:"fa"}),t._v("\n      처리이력\n    ")])],1),t._v(" "),t.isEdit?t._e():i("b-collapse",{attrs:{id:"formHistory",visible:""}},[i("b-form",{staticClass:"formView"},[i("div",{staticClass:"form-row"},[i("b-form-fieldset",{attrs:{label:"등록일시",horizontal:!0}},[i("b-form-input",{attrs:{value:t.items.createDateTime,plaintext:"",type:"text"}})],1),t._v(" "),i("b-form-fieldset",{attrs:{label:"등록자",horizontal:!0}},[i("b-form-input",{attrs:{value:t.items.createId,plaintext:"",type:"text"}})],1)],1),t._v(" "),i("div",{staticClass:"form-row"},[i("b-form-fieldset",{attrs:{label:"수정일시",horizontal:!0}},[i("b-form-input",{attrs:{value:t.items.modifyDateTime,plaintext:"",type:"text"}})],1),t._v(" "),i("b-form-fieldset",{attrs:{label:"수정자",horizontal:!0}},[i("b-form-input",{attrs:{value:t.items.modifyId,plaintext:"",type:"text"}})],1)],1)])],1),t._v(" "),t.isEdit?i("div",{staticClass:"page-btn"},[i("b-button",{attrs:{type:"button",variant:"outline-secondary"},on:{click:t.onView}},[t._v("취소")]),t._v(" "),i("b-button",{attrs:{type:"button",variant:"primary"},on:{click:t.onSubmit}},[t._v("저장")])],1):i("div",{staticClass:"page-btn"},[i("b-button",{staticClass:"float-left",attrs:{type:"button",variant:"outline-secondary"},on:{click:t.onDelete}},[t._v("삭제")]),t._v(" "),i("b-button",{attrs:{type:"button",variant:"outline-secondary"},on:{click:t.showHistory}},[t._v("이력관리")]),t._v(" "),i("b-button",{attrs:{type:"button",variant:"outline-secondary",to:{name:"Application 관리"}}},[t._v("목록")]),t._v(" "),i("b-button",{attrs:{type:"button",variant:"primary"},on:{click:t.onEdit}},[t._v("수정")])],1),t._v(" "),i("b-modal",{attrs:{size:"lg",title:"이력관리"},model:{value:t.isModalHistory,callback:function(e){t.isModalHistory=e},expression:"isModalHistory"}},[i("section",{staticClass:"board"},[i("b-table",{attrs:{hover:"","show-empty":"",items:t.history.items,fields:t.history.fields,"current-page":t.history.pageInfo.page,"per-page":t.history.pageInfo.size},scopedSlots:t._u([{key:"histMgmtId",fn:function(e){return[i("a",{attrs:{href:t.getHistoryLink(e.value),target:"_blank"}},[t._v("보기")])]}}])})],1),t._v(" "),i("b-pagination",{staticClass:"mt-2",attrs:{"total-rows":t.history.pageInfo.totalCount,"per-page":t.history.pageInfo.size},model:{value:t.history.pageInfo.page,callback:function(e){t.$set(t.history.pageInfo,"page",e)},expression:"history.pageInfo.page"}}),t._v(" "),i("div",{attrs:{slot:"modal-footer"},slot:"modal-footer"},[i("b-button",{attrs:{type:"button",variant:"primary"},on:{click:function(e){t.isModalHistory=!1}}},[t._v("확인")])],1)],1),t._v(" "),i("b-modal",{class:"modal-"+t.modal.type,attrs:{title:"Message",size:"sm"},model:{value:t.modal.open,callback:function(e){t.$set(t.modal,"open",e)},expression:"modal.open"}},[i("div",{staticClass:"d-block text-center"},[i("p",[t._v(t._s(t.modal.msg))])]),t._v(" "),i("div",{staticClass:"mx-auto",attrs:{slot:"modal-footer"},slot:"modal-footer"},[i("b-button",{attrs:{type:"button",variant:"primary"},on:{click:t.modal.action}},[t._v("확인")]),t._v(" "),i("b-button",{attrs:{type:"button",variant:"outline-secondary"},on:{click:function(e){t.modal.open=!1}}},[t._v("취소")])],1)])],1)},a=[],o={render:s,staticRenderFns:a};e.a=o}});