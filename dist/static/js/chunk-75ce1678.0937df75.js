(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75ce1678"],{"8d36":function(t,e,a){"use strict";a("af60")},ab88:function(t,e,a){"use strict";a.r(e);for(var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-button",{staticClass:"newApplicantBut",on:{click:t.editApplicant}},[t._v("newApplicant")]),a("a-button",{staticClass:"newApplicantBut",on:{click:t.log}},[t._v("log")]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isNewApplicant,expression:"isNewApplicant"}]},[a("div",{staticClass:"newApplicantBackGround"}),a("div",{staticClass:"newApplicant"},[a("a-input",{staticStyle:{margin:"20px",width:"400px"},attrs:{placeholder:"姓名"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}},[a("a-icon",{attrs:{slot:"prefix",type:"user"},slot:"prefix"}),a("a-tooltip",{attrs:{slot:"suffix",title:"Extra information"},slot:"suffix"},[a("a-icon",{staticStyle:{color:"rgba(0,0,0,.45)"},attrs:{type:"info-circle"}})],1)],1),a("a-input",{staticStyle:{margin:"20px",width:"400px"},attrs:{placeholder:"电话"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}},[a("a-icon",{attrs:{slot:"prefix",type:"mobile"},slot:"prefix"}),a("a-tooltip",{attrs:{slot:"suffix",title:"Extra information"},slot:"suffix"},[a("a-icon",{staticStyle:{color:"rgba(0,0,0,.45)"},attrs:{type:"info-circle"}})],1)],1),a("a-input",{staticStyle:{margin:"20px",width:"400px"},attrs:{placeholder:"毕业院校"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}},[a("a-icon",{attrs:{slot:"prefix",type:"book"},slot:"prefix"}),a("a-tooltip",{attrs:{slot:"suffix",title:"Extra information"},slot:"suffix"},[a("a-icon",{staticStyle:{color:"rgba(0,0,0,.45)"},attrs:{type:"info-circle"}})],1)],1),a("a-input",{staticStyle:{margin:"20px",width:"400px"},attrs:{placeholder:"学历"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}},[a("a-icon",{attrs:{slot:"prefix",type:"idcard"},slot:"prefix"}),a("a-tooltip",{attrs:{slot:"suffix",title:"Extra information"},slot:"suffix"},[a("a-icon",{staticStyle:{color:"rgba(0,0,0,.45)"},attrs:{type:"info-circle"}})],1)],1),a("a-input",{staticStyle:{margin:"20px",width:"400px"},attrs:{placeholder:"专业"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}},[a("a-icon",{attrs:{slot:"prefix",type:"tag"},slot:"prefix"}),a("a-tooltip",{attrs:{slot:"suffix",title:"Extra information"},slot:"suffix"},[a("a-icon",{staticStyle:{color:"rgba(0,0,0,.45)"},attrs:{type:"info-circle"}})],1)],1),a("a-input",{staticStyle:{margin:"20px",width:"400px"},attrs:{placeholder:"工作年限"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}},[a("a-icon",{attrs:{slot:"prefix",type:"calendar"},slot:"prefix"}),a("a-tooltip",{attrs:{slot:"suffix",title:"Extra information"},slot:"suffix"},[a("a-icon",{staticStyle:{color:"rgba(0,0,0,.45)"},attrs:{type:"info-circle"}})],1)],1),a("a-input",{staticStyle:{margin:"20px",width:"400px"},attrs:{placeholder:"面试岗位"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}},[a("a-icon",{attrs:{slot:"prefix",type:"read"},slot:"prefix"}),a("a-tooltip",{attrs:{slot:"suffix",title:"Extra information"},slot:"suffix"},[a("a-icon",{staticStyle:{color:"rgba(0,0,0,.45)"},attrs:{type:"info-circle"}})],1)],1),a("a-input",{staticStyle:{margin:"20px",width:"400px"},attrs:{placeholder:"地域"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}},[a("a-icon",{attrs:{slot:"prefix",type:"environment"},slot:"prefix"}),a("a-tooltip",{attrs:{slot:"suffix",title:"Extra information"},slot:"suffix"},[a("a-icon",{staticStyle:{color:"rgba(0,0,0,.45)"},attrs:{type:"info-circle"}})],1)],1),a("a-input",{staticStyle:{margin:"20px",width:"400px"},attrs:{placeholder:"关联需求"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}},[a("a-icon",{attrs:{slot:"prefix",type:"database"},slot:"prefix"}),a("a-tooltip",{attrs:{slot:"suffix",title:"Extra information"},slot:"suffix"},[a("a-icon",{staticStyle:{color:"rgba(0,0,0,.45)"},attrs:{type:"info-circle"}})],1)],1),a("a-button",{staticStyle:{float:"right",margin:"50px"},on:{click:t.editApplicant}},[t._v("Cancel")]),a("a-button",{staticStyle:{float:"right","margin-left":"50px","margin-top":"50px","margin-bottom":"50px"},on:{click:t.editApplicant}},[t._v("Create")])],1)]),a("a-table",{attrs:{columns:t.columns,"data-source":t.data,bordered:"",scroll:{x:1500,y:300}},scopedSlots:t._u([{key:"filterDropdown",fn:function(e){var n=e.setSelectedKeys,i=e.selectedKeys,o=e.confirm,r=e.clearFilters,s=e.column;return a("div",{staticStyle:{padding:"8px"}},[a("a-input",{directives:[{name:"ant-ref",rawName:"v-ant-ref",value:function(e){return t.searchInput=e},expression:"c => (searchInput = c)"}],staticStyle:{width:"188px","margin-bottom":"8px",display:"block"},attrs:{placeholder:"Search "+s.dataIndex,value:i[0]},on:{change:function(t){return n(t.target.value?[t.target.value]:[])},pressEnter:function(){return t.handleSearch(i,o,s.dataIndex)}}}),a("a-button",{staticStyle:{width:"90px","margin-right":"8px"},attrs:{type:"primary",icon:"search",size:"small"},on:{click:function(){return t.handleSearch(i,o,s.dataIndex)}}},[t._v(" Search ")]),a("a-button",{staticStyle:{width:"90px"},attrs:{size:"small"},on:{click:function(){return t.handleReset(r)}}},[t._v(" Reset ")])],1)}},{key:"filterIcon",fn:function(t){return a("a-icon",{style:{color:t?"#108ee9":void 0},attrs:{type:"search"}})}},{key:"customRender",fn:function(e,n,i,o){return[t.searchText&&t.searchedColumn===o.dataIndex?a("span",[t._l(e.toString().split(new RegExp("(?<="+t.searchText+")|(?="+t.searchText+")","i")),(function(e,n){return[e.toLowerCase()===t.searchText.toLowerCase()?a("mark",{key:n,staticClass:"highlight"},[t._v(t._s(e))]):[t._v(t._s(e))]]}))],2):[t._v(" "+t._s(e)+" ")]]}},t._l(["date","department","pdu","project","region","sow_num","project_num","new_project_num","offset_num","monthly_target","urgency","mouthly_reach","project_satisfaction","project_num_all","remarks","mouthly_target_reach"],(function(e){return{key:e,fn:function(n,i){return[a("div",{key:e},[i.editable?a("a-input",{staticStyle:{margin:"-5px 0"},attrs:{value:n},on:{change:function(a){return t.handleChange(a.target.value,i.key,e)}}}):[t._v(" "+t._s(n)+" ")]],2)]}}})),{key:"operation",fn:function(e,n){return[a("div",{staticClass:"editable-row-operations"},[n.editable?a("span",[a("a",{on:{click:function(){return t.save(n.key)}}},[t._v("Save")]),a("a-popconfirm",{attrs:{title:"Sure to cancel?"},on:{confirm:function(){return t.cancel(n.key)}}},[a("a",[t._v("Cancel")])])],1):a("span",[a("a",{attrs:{disabled:""!==t.editingKey},on:{click:function(){return t.edit(n.key)}}},[t._v("Edit")])])])]}}],null,!0)})],1)},i=[],o=(a("4de4"),a("d81d"),a("d3b7"),a("25f0"),a("2909")),r=a("5530"),s=a("1bab"),c=[{title:"日期",dataIndex:"date",width:200,scopedSlots:{customRender:"date"}},{title:"部门",dataIndex:"department",width:250,scopedSlots:{customRender:"department"}},{title:"PDU",dataIndex:"pdu",width:100,scopedSlots:{customRender:"pdu"}},{title:"项目",dataIndex:"project",width:100,scopedSlots:{customRender:"project"}},{title:"地域",dataIndex:"region",width:250,scopedSlots:{customRender:"region"}},{title:"sow人力",dataIndex:"sow_num",width:100,scopedSlots:{customRender:"sow_num"}},{title:"当前项目组人数",dataIndex:"project_num",width:200,scopedSlots:{customRender:"project_num"}},{title:"需求满足度",dataIndex:"project_satisfaction",width:200,scopedSlots:{customRender:"project_satisfaction"}},{title:"剩余需求总数",dataIndex:"project_num_all",width:200,scopedSlots:{customRender:"project_num_all"}},{title:"新增需求",dataIndex:"new_project_num",width:100,scopedSlots:{customRender:"new_project_num"}},{title:"离补需求",dataIndex:"offset_num",width:200,scopedSlots:{customRender:"offset_num"}},{title:"月度目标数",dataIndex:"monthly_target",width:150,scopedSlots:{customRender:"monthly_target"}},{title:"需求紧急程度",dataIndex:"urgency",width:150,scopedSlots:{customRender:"urgency"}},{title:"月度满足数",dataIndex:"mouthly_reach",width:150,scopedSlots:{customRender:"mouthly_reach"}},{title:"目标达成",dataIndex:"mouthly_target_reach",width:150,scopedSlots:{customRender:"mouthly_target_reach"}},{title:"备注",dataIndex:"remarks",width:150,scopedSlots:{customRender:"remarks"}},{title:"operation",dataIndex:"operation",fixed:"right",scopedSlots:{customRender:"operation"},width:130}],l=[],u=0;u<100;u++)l.push({key:u.toString(),name:"Edrward ".concat(u),age:32,address:"London Park no. ".concat(u),job:"Ed".concat(u)});var d={data:function(){return this.cacheData=l.map((function(t){return Object(r["a"])({},t)})),{data:l,columns:c,editingKey:"",isNewApplicant:!1,userName:"",searchText:"",searchInput:null,searchedColumn:""}},methods:{handleChange:function(t,e,a){var n=Object(o["a"])(this.data),i=n.filter((function(t){return e===t.key}))[0];i&&(i[a]=t,this.data=n)},edit:function(t){var e=Object(o["a"])(this.data),a=e.filter((function(e){return t===e.key}))[0];this.editingKey=t,a&&(a.editable=!0,this.data=e)},save:function(t){var e=Object(o["a"])(this.data),a=Object(o["a"])(this.cacheData),n=e.filter((function(e){return t===e.key}))[0],i=a.filter((function(e){return t===e.key}))[0];n&&i&&(delete n.editable,this.data=e,Object.assign(i,n),this.cacheData=a),this.editingKey="",this.updateProjectStatusInfo(t)},cancel:function(t){var e=Object(o["a"])(this.data),a=e.filter((function(e){return t===e.key}))[0];this.editingKey="",a&&(Object.assign(a,this.cacheData.filter((function(e){return t===e.key}))[0]),delete a.editable,this.data=e)},handleSearch:function(t,e,a){e(),this.searchText=t[0],this.searchedColumn=a},log:function(){console.log(this.searchedColumn),console.log(this.searchInput),console.log(this.searchText)},handleReset:function(t){t(),this.searchText=""},editApplicant:function(){this.isNewApplicant=!this.isNewApplicant},updateProjectStatusInfo:function(t){s["a"]({url:"http://139.9.160.24/update_project_status/",method:"post",data:{data:this.data[t]}}).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))},getProjectStatusInfo:function(){var t=this;s["a"]({url:"http://139.9.160.24/get_project_status_info/",method:"post"}).then((function(e){var a=e.data.infoList;t.data.length=0;for(var n=0;n<a.length;n++)console.log(a[n]),t.data.push(a[n]);t.cacheData=l.map((function(t){return Object(r["a"])({},t)}))})).catch((function(t){console.log(t)}))}},created:function(){this.getProjectStatusInfo()}},p=d,f=(a("8d36"),a("2877")),h=Object(f["a"])(p,n,i,!1,null,"ebf28daa",null);e["default"]=h.exports},af60:function(t,e,a){}}]);
//# sourceMappingURL=chunk-75ce1678.0937df75.js.map