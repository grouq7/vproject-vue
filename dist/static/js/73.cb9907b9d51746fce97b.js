webpackJsonp([73],{1062:function(e,t,o){"use strict";var s=o(180);t.a={name:"pops",components:{cSwitch:s.a},data:function(){return{items:{popName:"",popHostName:"",geoCode:"",qualitySolutionTeamCode:null,dataCenterCode:null,bandwidth:0,popUseYn:!0,referrerYn:!1,highReferrerYn:!1},code:{qualitySolutionTeamCode:[],dataCenterCode:[],geoCode:[]},isLoad:{qualitySolutionTeamCode:!0,dataCenterCode:!0,geoCode:!0},popHostNameExists:null,inValidForm:!1}},computed:{popCtprvnCode:{get:function(){var e=this;return this.code.popCtprvnCode.find(function(t){return t.addressCode===e.items.popCtprvnCode})||null},set:function(e){this.items.popCtprvnCode=null!==e?e.addressCode:null}},popSigCode:{get:function(){var e=this;return this.code.popSigCode.find(function(t){return t.addressCode===e.items.popSigCode})||null},set:function(e){this.items.popSigCode=null!==e?e.addressCode:null}},qualitySolutionTeamCode:{get:function(){var e=this;return this.code.qualitySolutionTeamCode.find(function(t){return t.code===e.items.qualitySolutionTeamCode})||null},set:function(e){this.items.qualitySolutionTeamCode=null!==e?e.code:null}},dataCenterCode:{get:function(){var e=this;return this.code.dataCenterCode.find(function(t){return t.code===e.items.dataCenterCode})||null},set:function(e){this.items.dataCenterCode=null!==e?e.code:null}},geoCode:{get:function(){var e=this;return this.code.geoCode.find(function(t){return t.code===e.items.geoCode})||null},set:function(e){this.items.geoCode=null!==e?e.code:null}},isReInputed:function(){return"success"===this.popHostNameExists},valid:function(){return{popHostName:null===this.popHostNameExists&&0===this.items.popHostName.length?this.popHostNameExists:this.items.popHostName.length>0&&/^[A-Za-z0-9]*$/.test(this.items.popHostName)&&"success"===this.popHostNameExists,referrer:!(!this.items.referrerYn&&!this.items.highReferrerYn),qualitySolutionTeamCode:null!==this.items.qualitySolutionTeamCode,dataCenterCode:null!==this.items.dataCenterCode,geoCode:null!==this.items.geoCode}},feedback:function(){return{popHostName:!/^[A-Za-z0-9]*$/.test(this.items.popHostName)&&this.items.popHostName.length>0?"영문, 숫자만 입력하십시오.":null===this.popHostNameExists&&this.items.popHostName.length>0?"중복확인은 필수입니다.":"not"===this.popHostNameExists?"입력된 항목이 없습니다.":"fail"===this.popHostNameExists?"이미 등록된 Host Name이 있습니다.":0===this.items.popHostName.length?this.$valid.msg.require:""}}},created:function(){var e=this;this.$https.get("/system/commonCode",{q:{groupCode:"QUALITY_TEAM"}}).then(function(t){e.isLoad.qualitySolutionTeamCode=!1,e.code.qualitySolutionTeamCode=t.data.items}),this.$https.get("/system/commonCode",{q:{groupCode:"DATACENTER"}}).then(function(t){e.isLoad.dataCenterCode=!1,e.code.dataCenterCode=t.data.items}),this.$https.get("/system/commonCode",{q:{groupCode:"GEO"}}).then(function(t){e.isLoad.geoCode=!1,e.code.geoCode=t.data.items})},methods:{onSubmit:function(){var e=this;console.log("Class: methods, Function: onSubmit, Line 356 (): "),this.items.modifyHistReason="등록";var t=this.$valid.all(this.items)&&"success"===this.popHostNameExists;this.inValidForm=!t,t&&this.$https.post("/pops",this.items).then(function(t){e.$router.push({name:"Pop 상세",params:{id:t.data.items}})}).catch(function(e){console.log(e)})},fetchNameExists:function(){var e=this;if(!this.items.popHostName)return void(this.popHostNameExists="not");this.$https.get("/pops/hostName/exists",{hostName:this.items.popHostName}).then(function(t){e.popHostNameExists="Success"===t.data.result?"success":"fail"})}}}},1063:function(e,t,o){"use strict";var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"animated fadeIn"},[o("b-form",{staticClass:"formView",attrs:{validated:e.inValidForm,novalidate:""}},[o("b-form-fieldset",{attrs:{label:"PoP Name<i class='require'>*</i>","invalid-feedback":e.$valid.msg.require,horizontal:!0}},[o("b-form-input",{attrs:{type:"text",placeholder:"Enter PoP name",required:""},model:{value:e.items.popName,callback:function(t){e.$set(e.items,"popName",t)},expression:"items.popName"}})],1),e._v(" "),o("div",{staticClass:"form-row"},[o("b-form-fieldset",{attrs:{label:"Host Name(Prefix)<i class='require'>*</i>","invalid-feedback":e.feedback.popHostName,horizontal:!0}},[o("b-form-input",{staticStyle:{width:"156px"},attrs:{type:"text",placeholder:"Enter PoP Host name",state:e.valid.popHostName,disabled:this.isReInputed,required:""},on:{input:function(t){e.popHostNameExists=null}},model:{value:e.items.popHostName,callback:function(t){e.$set(e.items,"popHostName",t)},expression:"items.popHostName"}}),e._v(" "),this.isReInputed?e._e():o("b-button",{attrs:{variant:"in-table"},on:{click:e.fetchNameExists}},[e._v("중복확인")]),e._v(" "),this.isReInputed?o("b-button",{attrs:{variant:"in-table"},on:{click:function(t){e.popHostNameExists=!1}}},[e._v("재입력")]):e._e(),e._v(" "),null!==e.popHostNameExists?o("span",{staticClass:"ico ml-2 mid"},["success"===e.popHostNameExists?o("i",{staticClass:"fa fa-check-circle"}):e._e(),e._v(" "),"fail"===e.popHostNameExists?o("i",{staticClass:"fa fa-times-circle"}):e._e()]):e._e()],1),e._v(" "),o("b-form-fieldset",{attrs:{label:"지역 <i class='require'>*</i>","invalid-feedback":e.$valid.msg.select,horizontal:!0}},[o("multiselect",{class:{invalid:!e.valid.geoCode},staticStyle:{width:"156px"},attrs:{showLabels:!1,options:e.code.geoCode,loading:e.isLoad.geoCode,"track-by":"code",label:"codeName",placeholder:"선택"},model:{value:e.geoCode,callback:function(t){e.geoCode=t},expression:"geoCode"}})],1)],1),e._v(" "),o("b-form-fieldset",{attrs:{label:"Data Center<i class='require'>*</i>","invalid-feedback":e.$valid.msg.select,horizontal:!0}},[o("multiselect",{class:{invalid:!e.valid.dataCenterCode},staticStyle:{width:"156px"},attrs:{showLabels:!1,options:e.code.dataCenterCode,loading:e.isLoad.dataCenterCode,"track-by":"code",label:"codeName",placeholder:"선택"},model:{value:e.dataCenterCode,callback:function(t){e.dataCenterCode=t},expression:"dataCenterCode"}})],1),e._v(" "),o("b-form-fieldset",{attrs:{label:"품질솔루션팀<i class='require'>*</i>","invalid-feedback":e.$valid.msg.select,horizontal:!0}},[o("multiselect",{class:{invalid:!e.valid.qualitySolutionTeamCode},attrs:{showLabels:!1,options:e.code.qualitySolutionTeamCode,loading:e.isLoad.qualitySolutionTeamCode,"track-by":"code",label:"codeName",placeholder:"선택"},model:{value:e.qualitySolutionTeamCode,callback:function(t){e.qualitySolutionTeamCode=t},expression:"qualitySolutionTeamCode"}})],1),e._v(" "),o("b-form-fieldset",{attrs:{label:"Bandwidth<i class='require'>*</i>","invalid-feedback":e.$valid.msg.require,horizontal:!0}},[o("cleave",{staticClass:"form-control",staticStyle:{width:"156px"},attrs:{options:{numeral:!0,numeralPositiveOnly:!0,numeralDecimalScale:0},required:""},model:{value:e.items.bandwidth,callback:function(t){e.$set(e.items,"bandwidth",t)},expression:"items.bandwidth"}})],1),e._v(" "),o("b-form-fieldset",{attrs:{label:"사용여부",horizontal:!0}},[o("c-switch",{staticClass:"v-switch",attrs:{type:"text",on:"사용",off:"미사용"},model:{value:e.items.popUseYn,callback:function(t){e.$set(e.items,"popUseYn",t)},expression:"items.popUseYn"}})],1)],1),e._v(" "),o("div",{staticClass:"page-btn"},[o("b-button",{attrs:{type:"button",variant:"outline-secondary",to:{name:"Pop 관리"}}},[e._v("취소")]),e._v(" "),o("b-button",{attrs:{type:"button",variant:"primary"},on:{click:e.onSubmit}},[e._v("저장")])],1)],1)},i=[],a={render:s,staticRenderFns:i};t.a=a},619:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=o(1062),i=o(1063),a=o(15),n=a(s.a,i.a,null,null,null);t.default=n.exports}});