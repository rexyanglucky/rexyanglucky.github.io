webpackJsonp([2],{"0ecl":function(e,t,i){"use strict";function n(e){i("Ov1A")}var a={props:{placeholder:{type:String,default:function(){return"搜索考场/候选人"}},searchClick:{type:Function,default:function(){}},searchSubmit:{type:Function,default:function(){}},focusCallBack:{type:Function,default:function(){console.log(1)}},autofocus:{type:Boolean,default:function(){return!1}},width:{type:Number,default:12}}},o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"search_warper",style:{width:e.width+"rem"}},[e.autofocus?i("input",{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"search_input",attrs:{type:"search",placeholder:e.placeholder},on:{focus:e.focusCallBack,keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.searchSubmit(t.target.value)},click:e.searchClick}}):i("input",{staticClass:"search_input",attrs:{type:"search",placeholder:e.placeholder},on:{focus:e.focusCallBack,keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.searchSubmit(t.target.value)},click:e.searchClick}})])},r=[],c={render:o,staticRenderFns:r},s=c,l=i("VU/8"),u=n,m=l(a,s,!1,u,"data-v-4339bd16",null);t.a=m.exports},"B+wh":function(e,t,i){t=e.exports=i("FZ+f")(!0),t.push([e.i,".search_warper[data-v-4339bd16]{display:inline-block;vertical-align:middle;background:#f3f6f9;width:12rem;height:1.5rem;border-radius:.75rem;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 0 0 .5rem}.search_warper[data-v-4339bd16]:before{display:inline-block;width:.8rem;height:.8rem;background:url("+i("k3R8")+') -.225rem -.225rem;background-size:16rem 5rem;vertical-align:middle;content:""}.search_warper .search_input[data-v-4339bd16]{font-size:.65rem;margin-left:.4rem;width:10rem}',"",{version:3,sources:["E:/zhilian/interview/src/components/common/SearchInput.vue"],names:[],mappings:"AACA,gCACE,qBAAsB,AACtB,sBAAuB,AACvB,mBAAoB,AACpB,YAAa,AACb,cAAe,AACf,qBAAuB,AACvB,8BAA+B,AACvB,sBAAuB,AAC/B,mBAAsB,CACvB,AACD,uCACE,qBAAsB,AACtB,YAAc,AACd,aAAe,AACf,2DAAoE,AACpE,2BAA4B,AAC5B,sBAAuB,AACvB,UAAY,CACb,AACD,8CACE,iBAAmB,AACnB,kBAAoB,AACpB,WAAa,CACd",file:"SearchInput.vue",sourcesContent:['\n.search_warper[data-v-4339bd16] {\n  display: inline-block;\n  vertical-align: middle;\n  background: #f3f6f9;\n  width: 12rem;\n  height: 1.5rem;\n  border-radius: 0.75rem;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0 0 0 0.5rem;\n}\n.search_warper[data-v-4339bd16]:before {\n  display: inline-block;\n  width: 0.8rem;\n  height: 0.8rem;\n  background: url("../../assets/images/icon.png") -0.225rem -0.225rem;\n  background-size: 16rem 5rem;\n  vertical-align: middle;\n  content: "";\n}\n.search_warper .search_input[data-v-4339bd16] {\n  font-size: 0.65rem;\n  margin-left: 0.4rem;\n  width: 10rem;\n}\n'],sourceRoot:""}])},F83U:function(e,t,i){"use strict";function n(e){i("tVac")}function a(e){i("Nifp")}Object.defineProperty(t,"__esModule",{value:!0});var o=i("Dd8w"),r=i.n(o),c=i("0ecl"),s=i("NYxO"),l={props:{locationSuccessCallBack:{type:Function,default:function(e){alert(e)}},locationErrorCallBack:{type:Function,default:function(e){return alert("失败")}}},methods:r()({},Object(s.b)(["getExamCityList","setCurrentExamCity"]),{showCityInfo:function(e,t){var i=this;if(i.examCityList.currentCity.CityId)i.locationSuccessCallBack(i.examCityList.currentCity);else{(new AMap.CitySearch).getLocalCity(function(e,t){var n={cityId:null,cityName:""};if("complete"===e&&"OK"===t.info&&t&&t.city&&t.bounds){var a=t.city;t.bounds;n.cityName=a,n.cityId=511}i.getExamCityList({cityId:n.cityId}).then(function(){i.locationSuccessCallBack(i.examCityList.currentCity)})})}},showLocationInfo:function(){function e(e){console.log(e),e.accuracy&&AMap.service("AMap.Geocoder",function(){geocoder=new AMap.Geocoder({city:"010"});var t=[e.position.getLng(),e.position.getLat()];geocoder.getAddress(t,function(e,t){if("complete"===e&&"OK"===t.info){var i=t.city;t.bounds;o.cityName=i,o.cityId=511}else a.getExamCityList({cityId:o.cityId}).then(function(){a.locationSuccessCallBack(a.examCityList.currentCity)})})})}function t(e){a.getExamCityList({cityId:o.cityId}).then(function(){a.locationSuccessCallBack(a.examCityList.currentCity)})}var i,n,a=this,o={cityId:null,cityName:""};i=new AMap.Map("container",{resizeEnable:!0}),i.plugin("AMap.Geolocation",function(){n=new AMap.Geolocation({enableHighAccuracy:!0,timeout:1e4,buttonOffset:new AMap.Pixel(10,20),zoomToAccuracy:!0,buttonPosition:"RB"}),n.getCurrentPosition(),AMap.event.addListener(n,"complete",e),AMap.event.addListener(n,"error",t)})},selectCity:function(){var e=this,t=e.examCityList.dataList.map(function(e){return{value:e.CityId,text:e.CityName}});console.log(e.examCityList);var i=new mui.PopPicker;i.setData(t);var n=e.examCityList.currentCity;i.pickers[0].setSelectedValue(n.CityId,2e3),i.show(function(t){Array.isArray(t)&&t.length>0&&(console.log(t),e.setCurrentExamCity({currentCity:{CityId:t[0].value,CityName:t[0].text}}))})}}),computed:r()({},Object(s.c)(["examCityList"])),created:function(){this.showLocationInfo()}},u=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{staticClass:"location",on:{click:e.selectCity}},[i("span",{staticClass:"location_city",attrs:{cityId:e.examCityList.currentCity.CityId}},[e._v(e._s(e.examCityList.currentCity.CityName))])])},m=[],d={render:u,staticRenderFns:m},A=d,f=i("VU/8"),C=n,p=f(l,A,!1,C,"data-v-041fe358",null),y=p.exports,h=i("fIby"),b=i("GgDs"),g={methods:r()({},Object(s.b)(["getExamRoomList"]),{locationSuccessCallBack:function(e){this.getExamRoomList().then(function(){return console.log("fin")});var t=this;mui.init({pullRefresh:{container:"examlist",up:{height:50,auto:!0,contentrefresh:"正在加载...",contentnomore:"没有更多数据了",callback:function(){alert(1),t.getExamRoomList()}}}})},searchClick:function(){this.$router.push({name:"ExaminationSearch"})},redirectResumeList:function(e){this.$router.push({name:"ResumeList",query:{roomid:e}})}}),computed:r()({},Object(s.c)(["examRoomList"])),created:function(){},components:{search:c.a,location:y,"common-header":b.a,examitem:h.a}},B=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("common-header",{attrs:{title:"考场列表"}}),e._v(" "),i("div",{staticClass:"location_warp"},[i("location",{attrs:{locationSuccessCallBack:e.locationSuccessCallBack}}),e._v(" "),i("search",{attrs:{placeholder:"搜索考场/候选人",searchClick:e.searchClick}})],1),e._v(" "),i("ul",{attrs:{id:"examlist"}},[e._l(e.examRoomList,function(t,n){return i("examitem",{key:t.RoomID,attrs:{examinfo:t,itemClick:e.redirectResumeList}})}),e._v(" "),e._l(e.examRoomList,function(t,n){return i("examitem",{key:t.RoomID,attrs:{examinfo:t,itemClick:e.redirectResumeList}})}),e._v(" "),e._l(e.examRoomList,function(t,n){return i("examitem",{key:t.RoomID,attrs:{examinfo:t,itemClick:e.redirectResumeList}})}),e._v(" "),e._l(e.examRoomList,function(t,n){return i("examitem",{key:t.RoomID,attrs:{examinfo:t,itemClick:e.redirectResumeList}})}),e._v(" "),e._l(e.examRoomList,function(t,n){return i("examitem",{key:t.RoomID,attrs:{examinfo:t,itemClick:e.redirectResumeList}})}),e._v(" "),e._l(e.examRoomList,function(t,n){return i("examitem",{key:t.RoomID,attrs:{examinfo:t,itemClick:e.redirectResumeList}})})],2)],1)},v=[],k={render:B,staticRenderFns:v},x=k,w=i("VU/8"),L=a,_=w(g,x,!1,L,"data-v-cdb83a78",null);t.default=_.exports},Nifp:function(e,t,i){var n=i("zB4w");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("901bfb20",n,!0)},Ov1A:function(e,t,i){var n=i("B+wh");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("618fa336",n,!0)},aoeL:function(e,t,i){t=e.exports=i("FZ+f")(!0),t.push([e.i,".location[data-v-041fe358]{font-size:.65rem}.location[data-v-041fe358]:after{display:inline-block;width:.4rem;height:.35rem;background:url("+i("k3R8")+') -3.775rem -.25rem;background-size:16rem 5rem;vertical-align:middle;margin-left:.25rem;content:""}',"",{version:3,sources:["E:/zhilian/interview/src/components/common/Location.vue"],names:[],mappings:"AACA,2BACE,gBAAmB,CACpB,AACD,iCACE,qBAAsB,AACtB,YAAc,AACd,cAAgB,AAChB,2DAAmE,AACnE,2BAA4B,AAC5B,sBAAuB,AACvB,mBAAqB,AACrB,UAAY,CACb",file:"Location.vue",sourcesContent:['\n.location[data-v-041fe358] {\n  font-size: 0.65rem;\n}\n.location[data-v-041fe358]:after {\n  display: inline-block;\n  width: 0.4rem;\n  height: 0.35rem;\n  background: url("../../assets/images/icon.png") -3.775rem -0.25rem;\n  background-size: 16rem 5rem;\n  vertical-align: middle;\n  margin-left: 0.25rem;\n  content: "";\n}\n'],sourceRoot:""}])},tVac:function(e,t,i){var n=i("aoeL");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("0a020129",n,!0)},zB4w:function(e,t,i){t=e.exports=i("FZ+f")(!0),t.push([e.i,"body[data-v-cdb83a78]{background:#f3f6f9}.location_warp[data-v-cdb83a78]{margin-top:2.2rem;background:#fff;padding:.525rem 0 .525rem .75rem;-webkit-box-sizing:border-box;box-sizing:border-box}","",{version:3,sources:["E:/zhilian/interview/src/components/ExaminationRoom.vue"],names:[],mappings:"AACA,sBACE,kBAAoB,CACrB,AACD,gCACE,kBAAmB,AACnB,gBAAiB,AACjB,iCAAqC,AACrC,8BAA+B,AACvB,qBAAuB,CAChC",file:"ExaminationRoom.vue",sourcesContent:["\nbody[data-v-cdb83a78] {\n  background: #f3f6f9;\n}\n.location_warp[data-v-cdb83a78] {\n  margin-top: 2.2rem;\n  background: #fff;\n  padding: 0.525rem 0 0.525rem 0.75rem;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=examination_room.1802992ef3e8909fa7f6.js.map