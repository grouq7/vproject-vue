webpackJsonp([29],{434:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=o(732),a=o(733),i=o(11),n=i(s.a,a.a,null,null,null);t.default=n.exports},732:function(e,t,o){"use strict";var s=o(139);t.a={name:"pops",components:{cSwitch:s.a},data:function(){return{items:{popName:"",popHostName:"",popDomainName:"",popCtprvnCode:"",popSigCode:"",qualitySolutionTeamCode:"",referrerYn:!1,highReferrerYn:!1,bandwidth:0,popUseYn:!0},code:{popCtprvnCode:[],popSigCode:[],qualitySolutionTeamCode:[]},isLoad:{popCtprvnCode:!0,popSigCode:!0,qualitySolutionTeamCode:!0},isDomainName:!1,state:{popHostName:!0},hostmessage:""}},computed:{popCtprvnCode:{get:function(){var e=this;return this.code.popCtprvnCode.find(function(t){return t.addressCode===e.items.popCtprvnCode})||null},set:function(e){this.items.popCtprvnCode=null!==e?e.addressCode:null}},popSigCode:{get:function(){var e=this;return this.code.popSigCode.find(function(t){return t.addressCode===e.items.popSigCode})||null},set:function(e){this.items.popSigCode=null!==e?e.addressCode:null}},qualitySolutionTeamCode:{get:function(){var e=this;return this.code.qualitySolutionTeamCode.find(function(t){return t.code===e.items.qualitySolutionTeamCode})||null},set:function(e){this.items.qualitySolutionTeamCode=null!==e?e.code:null}}},created:function(){var e=this;this.fetchAddress(),this.$https.get("/system/commonCode",{q:{groupCode:"QUALITY_TEAM"}}).then(function(t){e.isLoad.qualitySolutionTeamCode=!1,e.code.qualitySolutionTeamCode=t.data.items})},methods:{onSubmit:function(){var e=this;this.items.modifyHistReason="등록",this.$https.post("/pops",this.items).then(function(t){e.$router.push({name:"Pop 상세",params:{id:t.data.items}})}).catch(function(e){console.log(e)})},fetchHostExists:function(){var e=this;this.$https.get("/pops/hostName/exists",{hostName:this.items.popHostName}).then(function(t){var o="Success"===t.data.result;e.state.popHostName=o,e.hostmessage=o?"사용하실 수 있습니다.":"Host Name 이 중복입니다.",o||(e.items.popHostName=""),e.showMessage()})},fetchDomain:function(){var e=this;this.$https.get("/pops/domain").then(function(t){e.isDomainName=!0,e.items.popDomainName=t.data.items.domain})},fetchAddress:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.$https.get("/pops/address",{firstDepth:t}).then(function(o){""===t?(e.isLoad.popCtprvnCode=!1,e.code.popCtprvnCode=o.data.items):(e.isLoad.popSigCode=!1,e.code.popSigCode=o.data.items)})},onFirstAddress:function(e){this.fetchAddress(e.addressCode)},showMessage:function(){this.$refs.messageModalRef.show()},hideMessage:function(){this.$refs.messageModalRef.hide()}}}},733:function(e,t,o){"use strict";var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"animated fadeIn"},[o("b-form",[o("b-card",[o("b-form-fieldset",{attrs:{label:"PoP Name *","label-cols":3,horizontal:!0}},[o("b-form-input",{attrs:{type:"text",placeholder:"Enter PoP name"},model:{value:e.items.popName,callback:function(t){e.items.popName=t},expression:"items.popName"}})],1),e._v(" "),o("b-form-fieldset",{attrs:{label:"Host Name(Prefix) *","label-cols":3,horizontal:!0}},[o("b-input-group",[o("b-form-input",{attrs:{type:"text",placeholder:"Enter PoP Host name"},model:{value:e.items.popHostName,callback:function(t){e.items.popHostName=t},expression:"items.popHostName"}}),e._v(" "),o("b-input-group-button",{staticClass:"ml-2",slot:"right"},[o("b-button",{attrs:{variant:"outline-secondary"},on:{click:e.fetchHostExists}},[e._v("중복확인")])],1)],1)],1),e._v(" "),o("b-form-fieldset",{attrs:{label:"Domain *","label-cols":3,horizontal:!0}},[o("b-button",{attrs:{variant:"outline-secondary"},on:{click:e.fetchDomain}},[e._v("생성")]),e._v(" "),e.isDomainName?o("span",{staticClass:"domain-text ml-2"},[e._v("\n          http(s)://[edge].[content type]."),o("strong",{staticClass:"text-danger"},[e._v(e._s(e.items.popDomainName))]),e._v(".[country].[service type].[service name].vessels.com\n        ")]):e._e()],1),e._v(" "),o("b-form-fieldset",{attrs:{label:"구분 *","label-cols":3,horizontal:!0}},[o("b-form-checkbox",{model:{value:e.items.referrerYn,callback:function(t){e.items.referrerYn=t},expression:"items.referrerYn"}},[e._v("Low Referrer")]),e._v(" "),o("b-form-checkbox",{model:{value:e.items.highReferrerYn,callback:function(t){e.items.highReferrerYn=t},expression:"items.highReferrerYn"}},[e._v("High Referrer")])],1),e._v(" "),o("b-form-fieldset",{attrs:{label:"주소 *","label-cols":3,horizontal:!0}},[o("multiselect",{staticClass:"inline",staticStyle:{"min-width":"130px"},attrs:{showLabels:!1,searchable:!1,options:e.code.popCtprvnCode,loading:e.isLoad.popCtprvnCode,label:"addressCodeName",placeholder:"선택"},on:{select:e.onFirstAddress},model:{value:e.popCtprvnCode,callback:function(t){e.popCtprvnCode=t},expression:"popCtprvnCode"}}),e._v(" "),e.popCtprvnCode?o("multiselect",{staticClass:"inline",staticStyle:{"min-width":"130px"},attrs:{showLabels:!1,searchable:!1,options:e.code.popSigCode,loading:e.isLoad.popSigCode,label:"addressCodeName",placeholder:"선택"},model:{value:e.popSigCode,callback:function(t){e.popSigCode=t},expression:"popSigCode"}}):e._e()],1),e._v(" "),o("b-form-fieldset",{attrs:{label:"품질솔루션팀 *","label-cols":3,horizontal:!0}},[o("multiselect",{attrs:{showLabels:!1,searchable:!1,options:e.code.qualitySolutionTeamCode,loading:e.isLoad.qualitySolutionTeamCode,label:"codeName",placeholder:"선택"},model:{value:e.qualitySolutionTeamCode,callback:function(t){e.qualitySolutionTeamCode=t},expression:"qualitySolutionTeamCode"}})],1),e._v(" "),o("b-form-fieldset",{attrs:{label:"Bandwidth *","label-cols":3,horizontal:!0}},[o("b-form-input",{staticClass:"w-25",attrs:{type:"number"},model:{value:e.items.bandwidth,callback:function(t){e.items.bandwidth=t},expression:"items.bandwidth"}})],1),e._v(" "),o("b-form-fieldset",{attrs:{label:"사용여부","label-cols":3,horizontal:!0}},[o("c-switch",e._b({attrs:{type:"icon",variant:"success",pill:!0},model:{value:e.items.popUseYn,callback:function(t){e.items.popUseYn=t},expression:"items.popUseYn"}},"c-switch",{on:"",off:""},!1))],1),e._v(" "),o("div",{staticClass:"form-btn",slot:"footer"},[o("b-button",{attrs:{type:"button",size:"sm",variant:"primary"},on:{click:e.onSubmit}},[o("i",{staticClass:"fa fa-dot-circle-o"}),e._v(" 저장")]),e._v(" "),o("b-button",{attrs:{type:"button",size:"sm",variant:"secondary",to:{name:"Pop 관리"}}},[o("i",{staticClass:"fa fa-ban"}),e._v(" 취소")])],1)],1)],1),e._v(" "),o("b-modal",{ref:"messageModalRef",class:e.state.popHostName?"modal-primary":"modal-danger",attrs:{"hide-footer":"",title:"Message",size:"sm"}},[o("div",{staticClass:"d-block text-center"},[o("h5",[e._v(e._s(e.hostmessage))])]),e._v(" "),o("b-btn",{staticClass:"mt-4",attrs:{variant:e.state.popHostName?"outline-primary":"outline-danger",block:""},on:{click:e.hideMessage}},[e._v("Close")])],1)],1)},a=[],i={render:s,staticRenderFns:a};t.a=i}});