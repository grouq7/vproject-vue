webpackJsonp([41],{620:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(835),s=a(836),n=a(15),i=n(o.a,s.a,null,null,null);e.default=i.exports},835:function(t,e,a){"use strict";e.a={name:"geoIp",data:function(){return{fields:{index:{label:"번호"},ip:{label:"IP주소",class:"text-left"},pop:{label:"PoP"},action:{label:"관리"}},items:[{index:10,ip:"255.255.255.0",pop:"",isEdit:!1}],originItems:[],pageInfo:{page:1,size:10,resultCount:1,totalCount:1},pageOptions:[10,20,50,100],queryParams:{},searchItem:{searchType:"ip",searchKeyword:null,popId:null},code:{searchType:[{code:"ip",codeName:"IP주소"}],popType:[{code:"01",codeName:"미등록"},{code:"02",codeName:"PoP 목록"}]},processId:10234,processStateCodeName:"실패"}},computed:{searchType:{get:function(){var t=this;return this.code.searchType.find(function(e){return e.code===t.searchItem.searchType})||null},set:function(t){this.searchItem.searchType=null!==t?t.code:null}},popType:{get:function(){var t=this;return this.code.popType.find(function(e){return e.code===t.searchItem.popType})||null},set:function(t){this.searchItem.popType=null!==t?t.code:null}}},created:function(){},methods:{fetchList:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]},onEdit:function(t){t.item.isEdit=!0},onView:function(t){t.item.isEdit=!1},onSubmit:function(t){},onSearch:function(){},onRowSelect:function(t){},onReset:function(){},onPagination:function(t){}}}},836:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"animated fadeIn"},[a("b-form",{staticClass:"searchBox",on:{reset:t.onReset}},[a("div",{staticClass:"form-row"},[a("b-form-fieldset",{staticClass:"inline",attrs:{label:"검색어",horizontal:!0}},[a("multiselect",{attrs:{label:"codeName",allowEmpty:!1,showLabels:!1,searchable:!1,options:t.code.searchType},model:{value:t.searchType,callback:function(e){t.searchType=e},expression:"searchType"}}),t._v(" "),a("b-form-input",{staticClass:"keyword",attrs:{type:"text",placeholder:"Enter Search text"},model:{value:t.searchItem.searchKeyword,callback:function(e){t.$set(t.searchItem,"searchKeyword",e)},expression:"searchItem.searchKeyword"}})],1)],1),t._v(" "),a("div",{staticClass:"form-row"},[a("b-form-fieldset",{attrs:{label:"PoP",horizontal:!0}},[a("multiselect",{attrs:{showLabels:!1,searchable:!1,options:t.code.popType,label:"codeName",placeholder:"전체"},model:{value:t.popType,callback:function(e){t.popType=e},expression:"popType"}})],1)],1),t._v(" "),a("div",{staticClass:"search-btn"},[a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{type:"reset",variant:"outline-secondary",title:"초기화"}},[a("i",{staticClass:"icon-reload"})]),t._v(" "),a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{type:"button",variant:"primary",title:"검색"},on:{click:t.onSearch}},[a("i",{staticClass:"icon-magnifier"})])],1)]),t._v(" "),a("b-form",{staticClass:"searchBox deploy",attrs:{inline:""}},[a("label",[t._v("배포상태")]),t._v(" "),a("input",{staticClass:"form-control-plaintext",staticStyle:{width:"50px"},attrs:{type:"text",readonly:"readonly"},domProps:{value:t.processStateCodeName}}),t._v(" "),a("a",{staticClass:"btn btn-in-table",attrs:{href:"#/workflow/service/"+t.processId,target:"_blank"}},[t._v(t._s(t.processId))]),t._v(" "),a("div",{staticClass:"search-btn"},[a("b-button",{attrs:{type:"button",variant:"outline-secondary"}},[t._v("배포 이력")]),t._v(" "),a("b-button",{attrs:{type:"button",variant:"primary"}},[t._v("배포")])],1)]),t._v(" "),a("section",{staticClass:"board"},[a("b-table",{attrs:{"show-empty":"",items:t.items,fields:t.fields},scopedSlots:t._u([{key:"pop",fn:function(e){return[e.item.isEdit?a("span",[a("multiselect",{attrs:{multiple:"",showLabels:!1,searchable:!1,options:["목동","의정부","수원","안양"],placeholder:"전체"}})],1):a("span",[a("i",{staticClass:"text-danger"},[t._v("미등록")])])]}},{key:"action",fn:function(e){return[e.item.isEdit?a("span",[a("b-button",{attrs:{type:"button",variant:"in-table"},on:{click:function(a){t.onView(e)}}},[t._v("취소")]),t._v(" "),a("b-button",{attrs:{type:"button",variant:"in-table"},on:{click:function(a){t.onSubmit(e)}}},[t._v("저장")])],1):a("span",[a("b-button",{attrs:{type:"button",variant:"in-table"},on:{click:function(a){t.onEdit(e)}}},[t._v("수정")])],1)]}}])})],1),t._v(" "),a("section",{staticClass:"board-article d-flex justify-content-between"},[a("b-form",{attrs:{inline:""}},[a("multiselect",{staticClass:"inline sm",attrs:{value:t.pageInfo.size,allowEmpty:!1,showLabels:!1,searchable:!1,options:t.pageOptions},on:{input:t.onRowSelect}}),t._v(" "),a("label",{staticClass:"ml-sm-2"},[t._v("Row Per Page")])],1),t._v(" "),a("b-pagination",{staticClass:"mt-2",attrs:{value:t.pageInfo.page,"total-rows":t.pageInfo.totalCount,"per-page":t.pageInfo.size},on:{input:t.onPagination}})],1)],1)},s=[],n={render:o,staticRenderFns:s};e.a=n}});