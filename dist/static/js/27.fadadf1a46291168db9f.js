webpackJsonp([27],{640:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(883),o=s(884),a=s(15),r=a(i.a,o.a,null,null,null);e.default=r.exports},883:function(t,e,s){"use strict";var i=s(180),o=s(179),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i])}return t};e.a={name:"service",props:["id"],components:{ContentHeader:i.a,cSwitch:o.a},data:function(){return{name:"Service 상세",serviceName:"",servicePopList:[],deploy:{modifyDateTime:null,modifyId:null,popDeployStateCode:null,popDeployStateCodeName:null},isModalMessage:!1,isModalHistory:!1,history:{fields:{modifyId:{label:"배포자",class:"text-left"},modifyDateTime:{label:"배포일시"},popDeployStateCodeName:{label:"상태"},popDeployReason:{label:"배포내용",class:"text-left"}},items:[]}}},computed:{popItems:function(){return this.servicePopList.length>0?this.servicePopList.map(function(t){return t.servicePopTypeList.forEach(function(e){var s=e.serviceTypeCodeName,i=e.serviceTypeQty;t[s]=i}),a({},t)}):[]},popFields:function(){var t={popName:{label:"PoP"},edgeQty:{label:"Edge",class:"text-right"}};if(this.servicePopList.length>0){this.servicePopList[0].servicePopTypeList.forEach(function(e){var s=e.serviceTypeCodeName;t[s]={label:s,class:"text-right"}})}return t}},created:function(){var t=this;this.$https.get("/services/"+this.id).then(function(e){t.serviceName=e.data.items.serviceName}),this.$https.get("/services/"+this.id+"/pops").then(function(e){t.servicePopList=e.data.items.servicePopList}),this.$https.get("/services/"+this.id+"/pops/deploy").then(function(e){t.deploy=e.data.items.servicePopDeployHistory})},methods:{onSubmit:function(){var t=this;this.$https.post("/services/"+this.id+"/pops/deploy").then(function(){t.$router.go(t.$router.currentRoute)})},showHistory:function(){var t=this;this.isModalHistory=!this.isModalHistory,this.$https.get("/services/"+this.id+"/pops/deploy/histories").then(function(e){t.history.items=e.data.items})}}}},884:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"animated fadeIn"},[s("content-header",{attrs:{title:t.serviceName,name:t.name}}),t._v(" "),s("div",{staticClass:"collapse-title"},[s("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.formDefault",modifiers:{formDefault:!0}}],staticClass:"btn-collapse"},[s("i",{staticClass:"fa"}),t._v("\n      PoP\n    ")])],1),t._v(" "),s("b-collapse",{attrs:{id:"formDefault",visible:""}},[s("section",{staticClass:"board"},[s("b-table",{attrs:{"show-empty":"",fields:t.popFields,items:t.popItems}})],1)]),t._v(" "),t._e(),t._v(" "),t._e(),t._v(" "),s("div",{staticClass:"page-btn"},[s("b-button",{attrs:{type:"button",variant:"outline-secondary",to:{name:"Service 관리"}}},[t._v("목록")]),t._v(" "),t._e()],1),t._v(" "),s("b-modal",{attrs:{size:"lg",title:"이력관리"},model:{value:t.isModalHistory,callback:function(e){t.isModalHistory=e},expression:"isModalHistory"}},[s("section",{staticClass:"board"},[s("b-table",{attrs:{"show-empty":"",items:t.history.items,fields:t.history.fields},scopedSlots:t._u([{key:"histMgmtId",fn:function(e){return[s("a",{attrs:{href:t.getHistoryLink(e.value),target:"_blank"}},[t._v("보기")])]}}])})],1),t._v(" "),s("div",{attrs:{slot:"modal-footer"},slot:"modal-footer"},[s("b-button",{attrs:{type:"button",size:"sm",variant:"primary"},on:{click:function(e){t.isModalHistory=!1}}},[s("i",{staticClass:"fa fa-dot-circle-o"}),t._v(" 확인")])],1)]),t._v(" "),s("b-modal",{staticClass:"modal-primary",attrs:{title:"Message",size:"sm"},model:{value:t.isModalMessage,callback:function(e){t.isModalMessage=e},expression:"isModalMessage"}},[s("div",{staticClass:"d-block text-center"},[s("h5",[t._v("PoP 정보를 정말 배포하시겠습니까?")])]),t._v(" "),s("div",{attrs:{slot:"modal-footer"},slot:"modal-footer"},[s("b-button",{attrs:{type:"button",variant:"primary"},on:{click:t.onSubmit}},[t._v("확인")]),t._v(" "),s("b-button",{attrs:{type:"button",variant:"outline-secondary"},on:{click:function(e){t.isModalMessage=!1}}},[t._v("취소")])],1)])],1)},o=[],a={render:i,staticRenderFns:o};e.a=a}});