webpackJsonp([40],{612:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(795),o=i(796),a=i(13),n=a(s.a,o.a,null,null,null);e.default=n.exports},795:function(t,e,i){"use strict";var s=i(183),o=i(182),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t};e.a={name:"edge",props:["id"],components:{ContentHeader:s.a,cSwitch:o.a},data:function(){return{name:"Edge 상세",hostName:"",ip:"",originItems:{},items:{edgeCoreConfigId:1,edgeId:5,edgeCoreConfigRequestData:"",coreConfigCompList:[{diskMountSize:0}],diskSize:1e3,edgeCoreConfigApplyYn:!1,modifyHistReason:"",processStateCodeName:null,processStateCode:null,processId:null},code:{popId:[],serviceTypeCode:[]},history:{fields:{createId:{label:"등록/수정자",class:"text-left"},histBeginDateTime:{label:"등록/수정일시"},modifyHistReason:{label:"변경이력",class:"text-left"},histMgmtId:{label:"보기"}},items:[]},isLoad:{popId:!0,serviceTypeCode:!0},isEdit:!1,isCreate:!1,isModalHistory:!1,deploy:{status:!0,count:11234},inValidForm:!1}},computed:{total:function(){return this.items.coreConfigCompList.map(function(t){var e=t.diskMountSize;return parseInt(e)}).reduce(function(t,e){return t+e})},isProcessComplete:function(){return null!==this.items.processStateCode&&""!==this.items.processStateCode&&"PROCESS_STATE_02"===this.items.processStateCode}},created:function(){var t=this,e=this.$route.query.histories,i=void 0!==e?"/edges/"+this.id+"/cores/histories/"+e:"/edges/"+this.id+"/cores";e&&document.querySelector("body.app").classList.add("history-mode"),this.$https.get("/edges/"+this.id).then(function(e){var i=e.data.items,s=i.hostName,o=i.ip;t.hostName=s,t.ip=o}),this.$https.get(i).then(function(e){var i=JSON.parse(e.data.items.edgeCoreConfigRequestData);t.items=a({},t.items,e.data.items,{edgeCoreConfigRequestData:JSON.stringify(i,null,4)}),t.originItems=JSON.parse(JSON.stringify(t.items))}).catch(function(){t.isCreate=!0,t.isEdit=!0})},methods:{onEdit:function(){this.isEdit=!0},onView:function(){this.isEdit=!1,this.items=JSON.parse(JSON.stringify(this.originItems))},onSubmit:function(){var t=this,e=this.items.coreConfigCompList.map(function(t){return{diskMountPath:t.diskMountPath,diskMountSize:t.diskMountSize}}),i=this.items.modifyHistReason;this.isCreate?this.$https.post("/edges/"+this.id+"/cores",{coreConfigCompList:e,modifyHistReason:i}).then(function(){t.$router.go(t.$router.currentRoute)}).catch(function(t){console.log(t)}):this.$https.put("/edges/"+this.id+"/cores",{coreConfigCompList:e,modifyHistReason:i}).then(function(){t.$router.go(t.$router.currentRoute)}).catch(function(t){console.log(t)})},onDeploy:function(){var t=this;this.$https.post("/edges/"+this.id+"/cores/apply").then(function(e){t.$router.go(t.$router.currentRoute)}).catch(function(t){console.log(t)})},onAddList:function(){this.items.coreConfigCompList.push({edgeCoreConfigCompSeq:this.items.coreConfigCompList.length,diskMountPath:"",diskMountSize:0})},onDelList:function(t){this.items.coreConfigCompList.splice(t,1)},getHistoryLink:function(t){return"#/configuration/edge/"+this.id+"/core?histories="+t},showHistory:function(){var t=this;this.isModalHistory=!this.isModalHistory,this.$https.get("/edges/"+this.id+"/histories").then(function(e){t.history.items=e.data.items})}}}},796:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"animated fadeIn"},[i("content-header",{attrs:{title:t.hostName,small:t.ip,name:t.name}}),t._v(" "),i("div",{staticClass:"collapse-title"},[i("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.formDefault",modifiers:{formDefault:!0}}],staticClass:"btn-collapse"},[i("i",{staticClass:"fa"}),t._v("\n      기본정보\n    ")])],1),t._v(" "),i("b-collapse",{attrs:{id:"formDefault",visible:""}},[i("b-form",{staticClass:"formView",attrs:{validated:t.inValidForm,novalidate:""}},[i("b-form-fieldset",{attrs:{label:"Disk size","label-cols":3,horizontal:!0}},[i("b-form-input",{staticClass:"inline",staticStyle:{width:"80px"},attrs:{type:"text",plaintext:""},model:{value:t.items.diskSize,callback:function(e){t.items.diskSize=e},expression:"items.diskSize"}}),t._v("\n        GB\n      ")],1),t._v(" "),i("b-form-fieldset",{attrs:{label:"&nbsp;","label-cols":3,horizontal:!0}},[t.isEdit?i("b-button",{staticClass:"mt-2 mb-2",attrs:{type:"button",size:"sm",variant:"outline-primary"},on:{click:t.onAddList}},[i("i",{staticClass:"fa fa-plus"}),t._v(" 추가\n        ")]):t._e(),t._v(" "),i("ul",{staticClass:"icons-list"},[t._l(t.items.coreConfigCompList,function(e,s){return i("li",[i("i",{staticClass:"bg-primary"},[t._v(t._s(e.edgeCoreConfigCompSeq))]),t._v(" "),i("div",{staticClass:"desc edge"},[i("small",[t._v("Disk mounts path")]),t._v(" "),i("div",{staticClass:"title"},[i("b-form-input",{staticClass:"sm",attrs:{type:"text",plaintext:!t.isEdit},model:{value:e.diskMountPath,callback:function(t){e.diskMountPath=t},expression:"comp.diskMountPath"}})],1)]),t._v(" "),i("div",{staticClass:"value text-left",staticStyle:{width:"145px"}},[i("div",{staticClass:"small text-muted"},[t._v("Disk Size")]),t._v(" "),i("b-form-input",{staticClass:"inline sm",staticStyle:{width:"80px"},attrs:{type:"text",plaintext:!t.isEdit},model:{value:e.diskMountSize,callback:function(t){e.diskMountSize=t},expression:"comp.diskMountSize"}}),t._v("\n              GB\n              "),t.isEdit&&s>0?i("b-button",{staticClass:"list-del",attrs:{type:"button",size:"sm",variant:"outline-danger"},on:{click:function(e){t.onDelList(s)}}},[i("i",{staticClass:"fa fa-trash"})]):t._e()],1)])}),t._v(" "),i("li",{staticStyle:{"min-height":"59px"}},[i("div",{staticClass:"value text-left",staticStyle:{width:"145px"}},[i("div",{staticClass:"small text-muted"},[t._v("Total")]),t._v(" "),i("b-form-input",{staticClass:"inline sm",staticStyle:{width:"80px"},attrs:{value:t.total,type:"text",plaintext:""}}),t._v("\n              GB\n            ")],1)])],2)],1),t._v(" "),t.isEdit?t._e():i("b-form-fieldset",{attrs:{label:"적용여부","label-cols":3,horizontal:!0}},[i("b-badge",{attrs:{pill:"",variant:t.items.edgeCoreConfigApplyYn?"success":"secondary"}},[t._v("\n          "+t._s(t.items.edgeCoreConfigApplyYn?"적용":"미적용")+"\n        ")])],1),t._v(" "),t.isEdit?t._e():i("b-form-fieldset",{attrs:{label:"JSON","label-cols":3,horizontal:!0}},[i("pre",{staticClass:"code",staticStyle:{height:"200px"}},[t._v(t._s(t.items.edgeCoreConfigRequestData))])]),t._v(" "),t.isEdit?i("b-form-fieldset",{attrs:{label:"변경이력","label-cols":3,horizontal:!0}},[i("b-form-textarea",{attrs:{rows:6},model:{value:t.items.modifyHistReason,callback:function(e){t.items.modifyHistReason=e},expression:"items.modifyHistReason"}})],1):t._e()],1)],1),t._v(" "),t.isEdit?t._e():i("div",{staticClass:"collapse-title"},[i("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.formHistory",modifiers:{formHistory:!0}}],staticClass:"btn-collapse"},[i("i",{staticClass:"fa"}),t._v("\n      처리이력\n    ")])],1),t._v(" "),t.isEdit?t._e():i("b-collapse",{attrs:{id:"formHistory",visible:""}},[i("b-form",{staticClass:"formView"},[i("div",{staticClass:"form-row"},[i("b-form-fieldset",{attrs:{label:"등록일시",horizontal:!0}},[i("b-form-input",{attrs:{value:t.items.createDateTime,plaintext:"",type:"text"}})],1),t._v(" "),i("b-form-fieldset",{attrs:{label:"등록자",horizontal:!0}},[i("b-form-input",{attrs:{value:t.items.createId,plaintext:"",type:"text"}})],1)],1),t._v(" "),i("div",{staticClass:"form-row"},[t.items.modifyDateTime?i("b-form-fieldset",{attrs:{label:"수정일",horizontal:!0}},[i("b-form-input",{attrs:{value:t.items.modifyDateTime,plaintext:"",type:"text"}})],1):t._e(),t._v(" "),i("b-form-fieldset",{attrs:{label:"수정자",horizontal:!0}},[i("b-form-input",{attrs:{value:t.items.modifyId,plaintext:"",type:"text"}})],1)],1),t._v(" "),i("b-form-fieldset",{attrs:{label:"배포상태",horizontal:!0}},[i("input",{staticClass:"form-control-plaintext",staticStyle:{width:"50px"},attrs:{type:"text",readonly:"readonly"},domProps:{value:t.items.processStateCodeName}}),t._v(" "),i("a",{staticClass:"btn btn-in-table",attrs:{href:"#/workflow/service/"+t.items.processId,target:"_blank"}},[t._v(t._s(t.items.processId))])])],1)],1),t._v(" "),t.isEdit?i("div",{staticClass:"page-btn"},[i("b-button",{attrs:{type:"button",variant:"outline-secondary"},on:{click:t.onView}},[t._v("취소")]),t._v(" "),i("b-button",{attrs:{type:"button",variant:"primary"},on:{click:t.onSubmit}},[t._v("저장")])],1):i("div",{staticClass:"page-btn"},[t.isProcessComplete?i("span",[i("b-button",{attrs:{type:"button",variant:"outline-secondary"},on:{click:t.onDeploy}},[t._v("배포")]),t._v(" "),i("b-button",{attrs:{type:"button",variant:"outline-secondary"},on:{click:t.showHistory}},[t._v("이력관리")]),t._v(" "),i("b-button",{attrs:{type:"button",variant:"primary"},on:{click:t.onEdit}},[t._v("수정")])],1):i("span",[i("b-button",{attrs:{type:"button",variant:"outline-secondary"},on:{click:t.showHistory}},[t._v("이력관리")])],1)]),t._v(" "),i("b-modal",{attrs:{size:"lg",title:"이력관리"},model:{value:t.isModalHistory,callback:function(e){t.isModalHistory=e},expression:"isModalHistory"}},[i("section",{staticClass:"board"},[i("b-table",{attrs:{striped:"",bordered:"",hover:"","show-empty":"",items:t.history.items,fields:t.history.fields},scopedSlots:t._u([{key:"histMgmtId",fn:function(e){return[i("a",{attrs:{href:t.getHistoryLink(e.value),target:"_blank"}},[t._v("보기")])]}}])})],1),t._v(" "),i("div",{slot:"modal-footer"},[i("b-button",{attrs:{type:"button",size:"sm",variant:"primary"},on:{click:function(e){t.isModalHistory=!1}}},[i("i",{staticClass:"fa fa-dot-circle-o"}),t._v(" 확인")])],1)])],1)},o=[],a={render:s,staticRenderFns:o};e.a=a}});