webpackJsonp([26],{619:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(825),c=s(826),a=s(15),n=a(i.a,c.a,null,null,null);t.default=n.exports},825:function(e,t,s){"use strict";var i=s(179);t.a={name:"bucket",components:{cSwitch:i.a},data:function(){return{items:{s3BucketId:"",name:null,serviceTypeCode:null,description:null,useYn:!1},code:{serviceTypeCode:[]},isLoad:{serviceTypeCode:!0},s3BucketIdExists:null,inValidForm:!1}},computed:{serviceTypeCode:{get:function(){return null!==this.items.serviceTypeCode?this.code.serviceTypeCode.find(function(e){return e.code}):null},set:function(e){this.items.serviceTypeCode=null!==e?e.code:null}},valid:function(){return{s3BucketId:null===this.s3BucketIdExists&&0===this.items.s3BucketId.length?this.s3BucketIdExists:this.items.s3BucketId.length>0&&/^[A-Za-z0-9\-]*$/.test(this.items.s3BucketId)&&"success"===this.s3BucketIdExists,serviceTypeCode:null!==this.items.serviceTypeCode}},feedback:function(){return{s3BucketId:!/^[A-Za-z0-9\-]*$/.test(this.items.s3BucketId)&&this.items.s3BucketId.length>0?'영문, 숫자, "-" 만 입력하십시오.':null===this.s3BucketIdExists&&this.items.s3BucketId.length>0?"중복확인은 필수입니다.":"not"===this.s3BucketIdExists?"입력된 항목이 없습니다.":"fail"===this.s3BucketIdExists?"이미 등록된 S3 BucketId가 있습니다.":0===this.items.s3BucketId.length?this.$valid.msg.require:""}}},created:function(){var e=this;this.$https.get("/system/commonCode",{q:{groupCode:"SERVICE_TYPE"}}).then(function(t){e.isLoad.serviceTypeCode=!1,e.code.serviceTypeCode=t.data.items.filter(function(e){return!(4===e.code.split("_")[2].length)})})},methods:{available:function(){var e=this;if(!this.items.s3BucketId)return void(this.s3BucketIdExists="not");this.$https.get("/origin/bucket",{type:"available",bucket:this.items.s3BucketId}).then(function(t){e.s3BucketIdExists=t.data.items?"success":"fail"})},onSubmit:function(){var e=this,t=this.$valid.all(this.items)&&"success"===this.s3BucketIdExists;this.inValidForm=!t,t&&this.$https.post("/origin/bucket",this.items).then(function(t){e.$router.push({name:"Bucket 상세",params:{id:t.data.items.bucketId}})}).catch(function(e){console.log(e)})}}}},826:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"animated fadeIn"},[s("b-form",{staticClass:"formView",attrs:{validated:e.inValidForm,novalidate:""}},[s("b-form-fieldset",{attrs:{label:"Bucket Name <i class='require'>*</i>","invalid-feedback":e.$valid.msg.require,horizontal:!0}},[s("b-form-input",{attrs:{type:"text",required:"",placeholder:"Enter Bucket Name"},model:{value:e.items.name,callback:function(t){e.$set(e.items,"name",t)},expression:"items.name"}})],1),e._v(" "),s("b-form-fieldset",{attrs:{label:"S3 Bucket ID<i class='require'>*</i>","invalid-feedback":e.feedback.s3BucketId,description:"S3 Bucket ID은 실제 서비스 되는 Origin의 bucket ID 로 도메인에 포함되기 때문에 영문, 숫자만 입력 가능합니다.",horizontal:!0}},[s("b-form-input",{attrs:{type:"text",placeholder:"Enter S3 Bucket Id",state:e.valid.s3BucketId,required:""},on:{input:function(t){e.s3BucketIdExists=null}},model:{value:e.items.s3BucketId,callback:function(t){e.$set(e.items,"s3BucketId",t)},expression:"items.s3BucketId"}}),e._v(" "),s("b-button",{attrs:{variant:"in-table"},on:{click:e.available}},[e._v("중복확인")]),e._v(" "),null!==e.s3BucketIdExists?s("span",{staticClass:"ico ml-2 mid"},["success"===e.s3BucketIdExists?s("i",{staticClass:"fa fa-check-circle"}):e._e(),e._v(" "),"fail"===e.s3BucketIdExists?s("i",{staticClass:"fa fa-times-circle"}):e._e()]):e._e()],1),e._v(" "),s("b-form-fieldset",{attrs:{label:"Service Type<i class='require'>*</i>","invalid-feedback":e.$valid.msg.select,horizontal:!0}},[s("multiselect",{class:{invalid:!e.valid.serviceTypeCode},attrs:{"track-by":"code",label:"codeName",showLabels:!1,options:e.code.serviceTypeCode,loading:e.isLoad.serviceTypeCode,placeholder:"Select service type"},model:{value:e.serviceTypeCode,callback:function(t){e.serviceTypeCode=t},expression:"serviceTypeCode"}})],1),e._v(" "),s("b-form-fieldset",{attrs:{label:"Description",horizontal:!0}},[s("b-form-textarea",{attrs:{type:"text",rows:6},model:{value:e.items.description,callback:function(t){e.$set(e.items,"description",t)},expression:"items.description"}})],1),e._v(" "),s("b-form-fieldset",{attrs:{label:"사용 여부<i class='require'>*</i>",horizontal:!0}},[s("c-switch",{staticClass:"v-switch",attrs:{type:"text",on:"사용",off:"미사용"},model:{value:e.items.useYn,callback:function(t){e.$set(e.items,"useYn",t)},expression:"items.useYn"}})],1)],1),e._v(" "),s("div",{staticClass:"page-btn"},[s("b-button",{attrs:{type:"button",variant:"outline-secondary",to:{name:"Bucket 관리"}}},[e._v("취소")]),e._v(" "),s("b-button",{attrs:{type:"button",variant:"primary"},on:{click:e.onSubmit}},[e._v("저장")])],1)],1)},c=[],a={render:i,staticRenderFns:c};t.a=a}});