webpackJsonp([33],{633:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(869),a=s(870),o=s(15),r=o(i.a,a.a,null,null,null);t.default=r.exports},869:function(e,t,s){"use strict";var i=s(179),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i])}return e};t.a={name:"detail",props:["id"],components:{cSwitch:i.a},data:function(){return{name:"Bucket 상세",originItems:{},items:{bucketId:null,s3BucketId:null,name:null,description:null,serviceTypeCode:null,serviceTypeName:null,useYn:null,createDatetime:null,modifyDateTime:null,reason:null,policies:null},history:{fields:{modifyId:{label:"등록/수정자",class:"text-left"},modifyDateTime:{label:"등록/수정일시"},description:{label:"변경 이력",class:"text-left"},reason:{label:"변경 사유"}},items:[],pageInfo:{page:1,size:10,totalCount:1}},policies:{fields:{index:{label:"&nbsp;"},s3UserId:{label:"Login ID",class:"text-left"},createId:{label:"등록/수정자",class:"text-left"},createDateTime:{label:"등록/수정일시"}},items:[]},code:{serviceTypeCode:[]},isLoad:{companyCode:!0,serviceTypeCode:!0},users:{code:{companyCode:[]},fields:{companyName:{label:"회사",class:"text-left"},loginId:{label:"ID",class:"text-left"},operatorName:{label:"관리자",class:"text-left"},email:{label:"E-mail",class:"text-left"}},searchItem:{companyCode:null,searchKeyword:null,bucketId:null},pageInfo:{page:1,size:5,resultCount:1,totalCount:1},queryParams:{},items:[],isModalMessage:!1,modalMessage:""},isEdit:!1,isUserAdd:!1,isModalHistory:!1,isModalUserFind:!1,isModalMessage:!1,modalMessage:"",modalService:{serviceTypeCode:[],history:""},state:{deleted:!1},inValidForm:!1}},computed:{companyCode:{get:function(){var e=this;return this.users.code.companyCode.find(function(t){return t.code===e.users.searchItem.companyCode})||null},set:function(e){this.users.searchItem.companyCode=null!==e?e.code:null}},serviceTypeCode:{get:function(){var e=this;return this.code.serviceTypeCode.find(function(t){return t.code===e.items.serviceTypeCode})||null},set:function(e){console.log(e),this.items.serviceTypeCode=null!==e?e.code:null}}},created:function(){var e=this,t="/origin/bucket/"+this.id;this.$https.get(t,{history:!0,policy:!0}).then(function(t){e.items=a({},e.items,t.data.items),e.originItems=JSON.parse(JSON.stringify(e.items)),e.history.items=t.data.items.histories,e.policies.items=t.data.items.policies}),this.$https.get("/system/commonCode",{q:{groupCode:"COMPANY"}}).then(function(t){e.isLoad.companyCode=!1,e.users.code.companyCode=t.data.items}),this.userList(),this.$https.get("/system/commonCode",{q:{groupCode:"SERVICE_TYPE"}}).then(function(t){e.isLoad.serviceTypeCode=!1,e.code.serviceTypeCode=t.data.items.filter(function(e){var t=e.code;e.codeName,e.codeValChar1;return!(4===t.split("_")[2].length)})})},methods:{onEdit:function(){this.isEdit=!0},onView:function(){this.isEdit=!1,this.items=JSON.parse(JSON.stringify(this.originItems))},onSubmit:function(){var e=this,t="/origin/bucket/"+this.id,s=this.items,i=s.name,a=s.serviceTypeCode,o=s.description,r=s.reason,l=s.useYn,n=this.$valid.all({name:i,serviceTypeCode:a,description:o,reason:r,useYn:l});this.inValidForm=!n,n&&this.$https.put(t,{name:i,serviceTypeCode:a,description:o,reason:r,useYn:l}).then(function(){e.$router.go(e.$router.currentRoute)}).catch(function(e){console.log(e)})},onDelete:function(){var e=this,t="/origin/bucket/"+this.id;this.$https.delete(t).then(function(t){200===t.status&&e.$router.push({name:"Bucket 관리"})})},showHistory:function(){this.isModalHistory=!0},showUserFind:function(){this.isModalUserFind=!0},userList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.users.queryParams.bucketId=""+this.id;var s={page:this.users.pageInfo.page,size:this.users.pageInfo.size,q:this.users.queryParams};this.$https.get("/setting/operators",a({},s,t)).then(function(t){e.users.items=t.data.items,e.users.pageInfo=t.data.pageInfo})},onSearch:function(){var e=this;this.users.queryParams={},Object.keys(this.users.searchItem).forEach(function(t){null!==e.users.searchItem[t]&&""!==e.users.searchItem[t]&&(e.users.queryParams[t]=e.users.searchItem[t])}),this.userList({page:1})},onReset:function(){var e=this;Object.keys(this.users.searchItem).forEach(function(t){e.users.searchItem[t]=null}),this.users.queryParams={},this.userList({page:1})},addModal:function(e){this.isUserAdd=!0,this.users.modalMessage="관리자를 추가 하시겠습니까?",this.users.isModalMessage=!0,this.users.queryParams.loginId=e.loginId},closeModal:function(){this.users.isModalMessage=!1,this.users.modalMessage="",this.users.queryParams.loginId=null},addPolicy:function(){var e=this,t=this.users.queryParams.loginId,s="/origin/bucket/"+this.id+"/user/"+t;this.$https.put(s).then(function(t){e.policies.items=t.data.items,e.users.isModalMessage=!1,e.isUserAdd=!1})},removeModal:function(e){this.isUserAdd=!1,this.users.modalMessage="관리자를 삭제 하시겠습니까?",this.users.isModalMessage=!0,this.users.queryParams.loginId=e},removePolicy:function(){var e=this,t=this.users.queryParams.loginId,s="/origin/bucket/"+this.id+"/user/"+t;this.$https.delete(s).then(function(t){e.policies.items=t.data.items,e.users.isModalMessage=!1})}}}},870:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"animated fadeIn"},[s("div",{staticClass:"collapse-title"},[s("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.formDefault",modifiers:{formDefault:!0}}],staticClass:"btn-collapse"},[s("i",{staticClass:"fa"}),e._v("\n      기본정보\n    ")])],1),e._v(" "),s("b-collapse",{attrs:{id:"formDefault",visible:""}},[s("b-form",{staticClass:"formView",attrs:{validated:e.inValidForm,novalidate:""}},[s("b-form-fieldset",{attrs:{label:"ID",horizontal:!0}},[s("b-form-input",{attrs:{value:e.id,type:"text",plaintext:""}})],1),e._v(" "),s("b-form-fieldset",{attrs:{"invalid-feedback":e.$valid.msg.require,horizontal:!0}},[s("template",{slot:"label"},[e._v("\n          Bucket Name"),e.isEdit?s("i",{staticClass:"require"},[e._v("*")]):e._e()]),e._v(" "),s("b-form-input",{attrs:{type:"text",plaintext:!e.isEdit,required:""},model:{value:e.items.name,callback:function(t){e.$set(e.items,"name",t)},expression:"items.name"}})],2),e._v(" "),s("b-form-fieldset",{attrs:{label:"S3 Bucket ID",horizontal:!0}},[s("b-form-input",{attrs:{value:e.items.s3BucketId,type:"text",plaintext:""}})],1),e._v(" "),e.isEdit?s("b-form-fieldset",{attrs:{horizontal:!0}},[s("template",{slot:"label"},[e._v("\n          Service Type"),e.isEdit?s("i",{staticClass:"require"},[e._v("*")]):e._e()]),e._v(" "),e.isEdit?s("multiselect",{staticClass:"noEmpty",attrs:{"track-by":"code",label:"codeName",showLabels:!1,allowEmpty:!1,options:e.code.serviceTypeCode,loading:e.isLoad.serviceTypeCode,placeholder:"Select service type"},model:{value:e.serviceTypeCode,callback:function(t){e.serviceTypeCode=t},expression:"serviceTypeCode"}}):s("span",{staticClass:"badge"},[e._v(e._s(e.items.serviceTypeName)+"\n        ")])],2):e._e(),e._v(" "),s("b-form-fieldset",{attrs:{label:"Description",horizontal:!0}},[s("b-form-textarea",{attrs:{rows:6,"no-resize":!e.isEdit,disabled:!e.isEdit,plaintext:!e.isEdit},model:{value:e.items.description,callback:function(t){e.$set(e.items,"description",t)},expression:"items.description"}})],1),e._v(" "),s("b-form-fieldset",{attrs:{horizontal:!0}},[s("template",{slot:"label"},[e._v("\n          사용 여부"),e.isEdit?s("i",{staticClass:"require"},[e._v("*")]):e._e()]),e._v(" "),e.isEdit?s("c-switch",{staticClass:"v-switch",attrs:{type:"text",on:"사용",off:"미사용"},model:{value:e.items.useYn,callback:function(t){e.$set(e.items,"useYn",t)},expression:"items.useYn"}}):s("span",{staticClass:"badge",class:{primary:e.items.useYn}},[e._v(e._s(e.items.useYn?"사용":"미사용")+"\n        ")])],2),e._v(" "),e.isEdit?s("b-form-fieldset",{attrs:{label:"변경이력<i class='require'>*</i>","invalid-feedback":e.$valid.msg.require,horizontal:!0}},[s("b-form-textarea",{attrs:{rows:6,required:""},model:{value:e.items.reason,callback:function(t){e.$set(e.items,"reason",t)},expression:"items.reason"}})],1):e._e()],1)],1),e._v(" "),e.isEdit?e._e():s("div",{staticClass:"collapse-title"},[s("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.authorize",modifiers:{authorize:!0}}],staticClass:"btn-collapse"},[s("i",{staticClass:"fa"}),e._v("\n      Bucket 사용자 권한\n    ")])],1),e._v(" "),e.isEdit?e._e():s("b-collapse",{attrs:{id:"authorize",visible:""}},[s("b-table",{staticClass:"sub",attrs:{"show-empty":"",items:e.policies.items,fields:e.policies.fields},scopedSlots:e._u([{key:"HEAD_index",fn:function(t){return[s("span",{staticClass:"ico"},[s("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{type:"button",title:"관리자 추가"},on:{click:e.showUserFind}},[s("i",{staticClass:"fa fa-plus-circle"})])])]}},{key:"index",fn:function(t){return[s("span",{staticClass:"ico"},[s("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{type:"button",title:"관리자 삭제"},on:{click:function(s){e.removeModal(t.item.s3UserId)}}},[s("i",{staticClass:"fa fa-times-circle"})])])]}}])})],1),e._v(" "),e.isEdit?e._e():s("div",{staticClass:"collapse-title"},[s("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.formHistory",modifiers:{formHistory:!0}}],staticClass:"btn-collapse"},[s("i",{staticClass:"fa"}),e._v("\n      처리이력\n    ")])],1),e._v(" "),e.isEdit?e._e():s("b-collapse",{attrs:{id:"formHistory",visible:""}},[s("b-form",{staticClass:"formView"},[s("div",{staticClass:"form-row"},[s("b-form-fieldset",{attrs:{label:"등록일시",horizontal:!0}},[s("b-form-input",{attrs:{value:e.items.createDateTime,plaintext:"",type:"text"}})],1),e._v(" "),s("b-form-fieldset",{attrs:{label:"등록자",horizontal:!0}},[s("b-form-input",{attrs:{value:e.items.createId,plaintext:"",type:"text"}})],1)],1),e._v(" "),s("div",{staticClass:"form-row"},[e.items.modifyDateTime?s("b-form-fieldset",{attrs:{label:"수정일시",horizontal:!0}},[s("b-form-input",{attrs:{value:e.items.modifyDateTime,plaintext:"",type:"text"}})],1):e._e(),e._v(" "),s("b-form-fieldset",{attrs:{label:"수정자",horizontal:!0}},[s("b-form-input",{attrs:{value:e.items.modifyId,plaintext:"",type:"text"}})],1)],1)])],1),e._v(" "),e.isEdit?s("div",{staticClass:"page-btn"},[s("b-button",{attrs:{type:"button",variant:"outline-secondary"},on:{click:e.onView}},[e._v("취소")]),e._v(" "),s("b-button",{attrs:{type:"button",variant:"primary"},on:{click:e.onSubmit}},[e._v("저장")])],1):s("div",{staticClass:"page-btn"},[s("b-button",{staticClass:"float-left",attrs:{type:"button",variant:"outline-secondary"},on:{click:function(t){e.isModalMessage=!0}}},[e._v("삭제")]),e._v(" "),s("b-button",{attrs:{type:"button",variant:"outline-secondary"},on:{click:e.showHistory}},[e._v("이력관리")]),e._v(" "),s("b-button",{attrs:{type:"button",variant:"outline-secondary",to:{name:"Bucket 관리"}}},[e._v("목록")]),e._v(" "),s("b-button",{attrs:{type:"button",variant:"primary"},on:{click:e.onEdit}},[e._v("수정")])],1),e._v(" "),s("b-modal",{attrs:{size:"lg",title:"사용자 검색"},model:{value:e.isModalUserFind,callback:function(t){e.isModalUserFind=t},expression:"isModalUserFind"}},[s("b-form",{staticClass:"searchBox",attrs:{inline:""},on:{reset:e.onReset}},[s("label",[e._v("검색어")]),e._v(" "),s("multiselect",{attrs:{label:"codeName",showLabels:!1,searchable:!1,options:e.users.code.companyCode,placeholder:"전체"},model:{value:e.companyCode,callback:function(t){e.companyCode=t},expression:"companyCode"}}),e._v(" "),s("b-form-input",{staticClass:"keyword ml-1",attrs:{type:"text",placeholder:"Enter Search text"},model:{value:e.users.searchItem.searchKeyword,callback:function(t){e.$set(e.users.searchItem,"searchKeyword",t)},expression:"users.searchItem.searchKeyword"}}),e._v(" "),s("div",{staticClass:"search-btn"},[s("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{type:"reset",variant:"outline-secondary",title:"초기화"}},[s("i",{staticClass:"icon-reload"})]),e._v(" "),s("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{type:"button",variant:"primary",title:"검색"},on:{click:e.onSearch}},[s("i",{staticClass:"icon-magnifier"})])],1)],1),e._v(" "),s("section",{staticClass:"board"},[s("b-table",{attrs:{"show-empty":"",items:e.users.items,fields:e.users.fields,"current-page":e.users.pageInfo.page,"per-page":e.users.pageInfo.size},on:{"row-clicked":e.addModal}})],1),e._v(" "),s("b-pagination",{staticClass:"mt-2",attrs:{"total-rows":e.users.pageInfo.totalCount,"per-page":e.users.pageInfo.size},model:{value:e.users.pageInfo.page,callback:function(t){e.$set(e.users.pageInfo,"page",t)},expression:"users.pageInfo.page"}}),e._v(" "),s("div",{attrs:{slot:"modal-footer"},slot:"modal-footer"},[s("b-button",{attrs:{type:"button",variant:"primary"},on:{click:function(t){e.isModalUserFind=!1}}},[e._v("확인")])],1)],1),e._v(" "),s("b-modal",{attrs:{size:"lg",title:"이력관리"},model:{value:e.isModalHistory,callback:function(t){e.isModalHistory=t},expression:"isModalHistory"}},[s("section",{staticClass:"board"},[s("b-table",{attrs:{hover:"","show-empty":"",items:e.history.items,fields:e.history.fields,"current-page":e.history.pageInfo.page,"per-page":e.history.pageInfo.size},scopedSlots:e._u([{key:"histMgmtId",fn:function(t){return[s("a",{attrs:{href:e.getHistoryLink(t.value),target:"_blank"}},[e._v("보기")])]}}])})],1),e._v(" "),s("b-pagination",{staticClass:"mt-2",attrs:{"total-rows":e.history.pageInfo.totalCount,"per-page":e.history.pageInfo.size},model:{value:e.history.pageInfo.page,callback:function(t){e.$set(e.history.pageInfo,"page",t)},expression:"history.pageInfo.page"}}),e._v(" "),s("div",{attrs:{slot:"modal-footer"},slot:"modal-footer"},[s("b-button",{attrs:{type:"button",variant:"primary"},on:{click:function(t){e.isModalHistory=!1}}},[e._v("확인")])],1)],1),e._v(" "),s("b-modal",{class:{"modal-error":!e.isUserAdd},attrs:{title:"Message",size:"sm"},model:{value:e.users.isModalMessage,callback:function(t){e.$set(e.users,"isModalMessage",t)},expression:"users.isModalMessage"}},[s("div",{staticClass:"d-block text-center"},[s("p",[e._v(e._s(e.users.modalMessage))])]),e._v(" "),s("div",{attrs:{slot:"modal-footer"},slot:"modal-footer"},[e.isUserAdd?s("b-button",{attrs:{type:"button",variant:"primary"},on:{click:e.addPolicy}},[e._v("추가")]):s("b-button",{attrs:{type:"button",variant:"danger"},on:{click:e.removePolicy}},[e._v("삭제")]),e._v(" "),s("b-button",{attrs:{type:"button",variant:"outline-secondary"},on:{click:e.closeModal}},[e._v("취소")])],1)]),e._v(" "),s("b-modal",{staticClass:"modal-error",attrs:{title:"Message",size:"sm"},model:{value:e.isModalMessage,callback:function(t){e.isModalMessage=t},expression:"isModalMessage"}},[s("div",{staticClass:"d-block text-center"},[s("p",[e._v("정말 삭제 하시겠습니까?")])]),e._v(" "),s("div",{staticClass:"mx-auto",attrs:{slot:"modal-footer"},slot:"modal-footer"},[s("b-button",{attrs:{type:"button",variant:"danger"},on:{click:e.onDelete}},[e._v("삭제")]),e._v(" "),s("b-button",{attrs:{type:"button",variant:"outline-secondary"},on:{click:function(t){e.isModalMessage=!1}}},[e._v("취소")])],1)])],1)},a=[],o={render:i,staticRenderFns:a};t.a=o}});