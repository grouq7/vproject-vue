webpackJsonp([17],{623:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(841),s=i(845),o=i(15),a=o(n.a,s.a,null,null,null);t.default=a.exports},841:function(e,t,i){"use strict";var n=i(842),s=i(179),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e};t.a={name:"pop-preference",components:{SelectBox:n.a,cSwitch:s.a},data:function(){return{fields:{popName:{label:"PoP"},targetPopId1:{label:'1<i class="require">*</i>'},targetPopId2:{label:'2<i class="require">*</i>'},targetPopId3:{label:'3<i class="require">*</i>'},targetPopId4:{label:'4<i class="require">*</i>'},targetPopId5:{label:'5<i class="require">*</i>'},popPreferenceUseYn:{label:"사용여부"},action:{label:"관리"}},items:[],originItems:[],code:{serviceId:[],popList:[],serviceTypeCode:[]},isLoad:{serviceTypeCode:!0},history:{fields:{createId:{label:"등록/수정자",class:"text-left"},histBeginDateTime:{label:"등록/수정일시"},preference:{label:"PoP Preference",class:"text-left"},popPreferenceUseYn:{label:"사용여부"}},items:[],pageInfo:{page:1,size:10,totalCount:1}},service:{},isModalHistory:!1,isEdit:!1,serviceTypeCodeVal:[]}},computed:{},created:function(){this.fetchService()},methods:{fetchService:function(){var e=this;this.$https.get("/policy/services").then(function(t){e.code.serviceId=t.data.items,e.fetchPoP(t.data.items[0])})},fetchPoP:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.serviceId;this.service=t,this.$https.get("/policy/services/"+i+"/pops").then(function(t){e.code.popList=t.data.items,e.fetchPreference(i)})},fetchPreference:function(e){var t=this;this.$https.get("/policy/popPreference",{q:{serviceId:e}}).then(function(e){t.items=e.data.items.map(function(e){var i={};return Object.keys(e).forEach(function(n){if(/^targetPopId\d/.test(n)){var s=t.code.popList.find(function(t){return t.popId===parseInt(e[n])});i[n]=s?{popId:s.popId,popName:s.popName}:null}}),o({},e,i,{isEdit:!1})}),t.originItems=JSON.parse(JSON.stringify(t.items))})},onEdit:function(e){this.isEdit=!0,e.item.isEdit=!0},onView:function(e){var t=this.originItems[e.index];Object.keys(t).forEach(function(i){e.item[i]=t[i]}),e.item.isEdit=!1},onSubmit:function(e){var t=this,i={};Object.keys(e.item).forEach(function(t){/^targetPopId\d/.test(t)&&(i[t]=e.item[t]?e.item[t].popId:null)});var n=o({popId:e.item.popId,serviceId:parseInt(this.service.serviceId),popPreferenceUseYn:e.item.popPreferenceUseYn,modifyHistReason:e.item.modifyHistReason||""},i);this.$https.put("/policy/popPreference",n).then(function(){e.item.isEdit=!1,t.items[e.index]=e.item,t.originItems[e.index]=o({},e.item)}).catch(function(i){console.log(i),t.onView(e)})},onOptionSelect:function(e,t,i){var n="targetPopId"+t.split("_")[2],s=this.code.popList.find(function(t){return t.popId===parseInt(e.popId)}),o=s.popId,a=s.popName;i[n]={popId:o,popName:a}},onOptionRemove:function(e,t,i){i["targetPopId"+t.split("_")[2]]=null},isOptionSelected:function(e,t){var i=[];return Object.keys(t).forEach(function(e){if(/^targetPopId\d/.test(e)){var n=t[e]?t[e].popId:null;i.push(n)}}),!!i.length&&i.find(function(t){return t==e.popId})},getPopCodeList:function(e){return this.code.popList.filter(function(t){return t.popId!==e})},showHistory:function(e){var t=this,i=e.item.popId,n=this.service.serviceId;this.isModalHistory=!this.isModalHistory,this.$https.get("/policy/popPreference/hist",{q:{serviceId:n,popId:i}}).then(function(e){t.history.items=e.data.items,t.history.pageInfo.totalCount=e.data.items.length})}}}},842:function(e,t,i){"use strict";var n=i(843),s=i(844),o=i(15),a=o(n.a,s.a,null,null,null);t.a=a.exports},843:function(e,t,i){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function e(t){if(Array.isArray(t))return t.map(e);if(t&&"object"===(void 0===t?"undefined":n(t))){for(var i={},s=Object.keys(t),o=0,a=s.length;o<a;o++){var r=s[o];i[r]=e(t[r])}return i}return t};t.a={name:"multiselect-share",props:{id:{default:null},value:{type:Object,default:null},options:{type:Array,required:!0},placeholder:{type:String,default:"Select"},shareModel:{default:null},trackBy:{type:String},label:{type:String},isSelected:{type:Function,default:function(e,t){var i=this,n=e[this.trackBy],s=t.map(function(e){return e[i.trackBy]});return!!s.length&&s.find(function(e){return e==n})}}},data:function(){return{isOpen:!1}},methods:{onSelect:function(e){this.$emit("select",s(e),this.id,this.shareModel),this.deactivate()},onRemove:function(e){this.$emit("remove",s(e),this.id,this.shareModel),this.deactivate()},getValue:function(){return this.value?this.value[this.label]:""},getOptionLabel:function(e){return e[this.label]},isOptionSelected:function(e){var t=this.shareModel?this.shareModel:this.options;return this.isSelected(e,t)},activate:function(){this.isOpen=!0,this.$el.focus()},deactivate:function(){this.isOpen=!1,this.$el.blur()},toggle:function(){this.isOpen?this.deactivate():this.activate()},contentStyle:function(){return this.options.length?{display:"inline-block"}:{display:"block"}}}}},844:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"multiselect pops",class:{"multiselect--active":e.isOpen},attrs:{tabindex:"0"},on:{focus:function(t){e.activate()},blur:function(t){e.deactivate()},keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"esc",27,t.key,"Escape"))return null;e.deactivate()}}},[e._t("caret",[i("div",{staticClass:"multiselect__select",on:{mousedown:function(t){t.preventDefault(),t.stopPropagation(),e.toggle()}}})],{toggle:e.toggle}),e._v(" "),i("div",{ref:"tags",staticClass:"multiselect__tags"},[i("div",{directives:[{name:"show",rawName:"v-show",value:null!==e.value,expression:"value !== null"}],staticClass:"multiselect__tags-wrap"},[i("span",{staticClass:"multiselect__tag"},[i("span",[e._v(e._s(e.getValue()))]),e._v(" "),i("i",{staticClass:"multiselect__tag-icon",attrs:{"aria-hidden":"true",tabindex:"1"},on:{mousedown:function(t){t.preventDefault(),e.onRemove(e.value)}}})])]),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:null===e.value,expression:"value === null"}],staticClass:"multiselect__single",on:{mousedown:function(t){return t.preventDefault(),e.toggle(t)}}},[e._v("\n        "+e._s(e.placeholder)+"\n      ")])]),e._v(" "),i("transition",{attrs:{name:"multiselect"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"isOpen"}],ref:"list",staticClass:"multiselect__content-wrapper",on:{focus:e.activate,mousedown:function(e){e.preventDefault()}}},[i("ul",{staticClass:"multiselect__content",style:e.contentStyle},e._l(e.options,function(t,n){return i("li",{key:n,staticClass:"multiselect__element"},[i("span",{staticClass:"multiselect__option",class:{"multiselect__option--selected multiselect__option--disabled":e.isOptionSelected(t)},on:{click:function(i){i.stopPropagation(),e.onSelect(t)}}},[e._t("option",[i("span",[e._v(e._s(e.getOptionLabel(t)))])],{option:t})],2)])}))])])],2)},s=[],o={render:n,staticRenderFns:s};t.a=o},845:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"animated fadeIn"},[i("b-form",{staticClass:"searchBox mb-3",attrs:{inline:""}},[i("label",[e._v("Service")]),e._v(" "),i("multiselect",{staticClass:"noEmpty",attrs:{label:"serviceName",value:e.service,allowEmpty:!1,showLabels:!1,searchable:!1,options:e.code.serviceId},on:{select:e.fetchPoP}})],1),e._v(" "),i("section",{staticClass:"board"},[i("b-table",{attrs:{"show-empty":"",items:e.items,fields:e.fields},scopedSlots:e._u([{key:"targetPopId1",fn:function(t){return[t.item.isEdit?i("span",[i("select-box",{attrs:{label:"popName",trackBy:"popId",id:"row_"+t.index+"_1",value:t.value,options:e.getPopCodeList(t.item.popId),shareModel:t.item,isSelected:e.isOptionSelected},on:{select:e.onOptionSelect,remove:e.onOptionRemove}})],1):i("span",[e._v(e._s(t.value?t.value.popName:""))])]}},{key:"targetPopId2",fn:function(t){return[t.item.isEdit?i("span",[i("select-box",{attrs:{label:"popName",trackBy:"popId",id:"row_"+t.index+"_2",value:t.value,options:e.getPopCodeList(t.item.popId),shareModel:t.item,isSelected:e.isOptionSelected},on:{select:e.onOptionSelect,remove:e.onOptionRemove}})],1):i("span",[e._v(e._s(t.value?t.value.popName:""))])]}},{key:"targetPopId3",fn:function(t){return[t.item.isEdit?i("span",[i("select-box",{attrs:{label:"popName",trackBy:"popId",id:"row_"+t.index+"_2",value:t.value,options:e.getPopCodeList(t.item.popId),shareModel:t.item,isSelected:e.isOptionSelected},on:{select:e.onOptionSelect,remove:e.onOptionRemove}})],1):i("span",[e._v(e._s(t.value?t.value.popName:""))])]}},{key:"targetPopId4",fn:function(t){return[t.item.isEdit?i("span",[i("select-box",{attrs:{label:"popName",trackBy:"popId",id:"row_"+t.index+"_2",value:t.value,options:e.getPopCodeList(t.item.popId),shareModel:t.item,isSelected:e.isOptionSelected},on:{select:e.onOptionSelect,remove:e.onOptionRemove}})],1):i("span",[e._v(e._s(t.value?t.value.popName:""))])]}},{key:"targetPopId5",fn:function(t){return[t.item.isEdit?i("span",[i("select-box",{attrs:{label:"popName",trackBy:"popId",id:"row_"+t.index+"_2",value:t.value,options:e.getPopCodeList(t.item.popId),shareModel:t.item,isSelected:e.isOptionSelected},on:{select:e.onOptionSelect,remove:e.onOptionRemove}})],1):i("span",[e._v(e._s(t.value?t.value.popName:""))])]}},{key:"popPreferenceUseYn",fn:function(t){return[t.item.isEdit?i("c-switch",{staticClass:"v-switch",attrs:{type:"text",on:"사용",off:"미사용"},model:{value:t.item.popPreferenceUseYn,callback:function(i){e.$set(t.item,"popPreferenceUseYn",i)},expression:"row.item.popPreferenceUseYn"}}):i("span",{staticClass:"badge ins",class:{primary:t.value}},[e._v(e._s(t.value?"사용":"미사용")+"\n        ")])]}},{key:"action",fn:function(t){return[t.item.isEdit?i("span",[i("b-button",{attrs:{type:"button",variant:"in-table"},on:{click:function(i){e.onView(t)}}},[e._v("취소")]),e._v(" "),i("b-button",{attrs:{type:"button",variant:"in-table"},on:{click:function(i){e.onSubmit(t)}}},[e._v("저장")])],1):i("span",[i("b-button",{attrs:{type:"button",variant:"in-table"},on:{click:function(i){e.showHistory(t)}}},[e._v("이력")]),e._v(" "),i("b-button",{attrs:{type:"button",variant:"in-table"},on:{click:function(i){e.onEdit(t)}}},[e._v("수정")])],1)]}}])})],1),e._v(" "),i("b-modal",{attrs:{size:"lg",title:"이력관리"},model:{value:e.isModalHistory,callback:function(t){e.isModalHistory=t},expression:"isModalHistory"}},[i("section",{staticClass:"board"},[i("b-table",{attrs:{"show-empty":"",items:e.history.items,fields:e.history.fields,"current-page":e.history.pageInfo.page,"per-page":e.history.pageInfo.size},scopedSlots:e._u([{key:"preference",fn:function(t){return[i("span",{staticClass:"badge",staticStyle:{"min-width":"30px"}},[e._v(e._s(t.item.targetPopIdName1||" "))]),e._v(" -\n          "),i("span",{staticClass:"badge",staticStyle:{"min-width":"30px"}},[e._v(e._s(t.item.targetPopIdName2||" "))]),e._v(" -\n          "),i("span",{staticClass:"badge",staticStyle:{"min-width":"30px"}},[e._v(e._s(t.item.targetPopIdName3||" "))]),e._v(" -\n          "),i("span",{staticClass:"badge",staticStyle:{"min-width":"30px"}},[e._v(e._s(t.item.targetPopIdName4||" "))]),e._v(" -\n          "),i("span",{staticClass:"badge",staticStyle:{"min-width":"30px"}},[e._v(e._s(t.item.targetPopIdName5||" "))])]}},{key:"popPreferenceUseYn",fn:function(t){return[e._v("\n          "+e._s(t.value?"사용":"미사용")+"\n        ")]}}])})],1),e._v(" "),i("b-pagination",{staticClass:"mt-2",attrs:{"total-rows":e.history.pageInfo.totalCount,"per-page":e.history.pageInfo.size},model:{value:e.history.pageInfo.page,callback:function(t){e.$set(e.history.pageInfo,"page",t)},expression:"history.pageInfo.page"}}),e._v(" "),i("div",{attrs:{slot:"modal-footer"},slot:"modal-footer"},[i("b-button",{attrs:{type:"button",variant:"primary"},on:{click:function(t){e.isModalHistory=!1}}},[e._v("확인")])],1)],1)],1)},s=[],o={render:n,staticRenderFns:s};t.a=o}});