webpackJsonp([45],{517:function(t,e,n){function i(t){n(831)}var o=n(1)(n(692),n(928),i,null,null);t.exports=o.exports},574:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2);n.n(i);e.default={props:{show:{default:1},back:{default:!0},emptyRight:{default:!1},rightTitle:{default:""},title:{default:""},url:{default:""},replace:{default:"true"}},data:function(){return{sheetVisible:!1,actions:[]}},mounted:function(){this.actions=[{name:"云餐饮",method:this.gohome},{name:"Simphony",method:this.goSimphony}]},methods:{jump:function(){this.$emit("notseeChild")},geturl:function(){return null!=this.$route.query.redirect?this.$route.query.redirect:this.url},gohome:function(){this.$router.push("/")},goSimphony:function(){var t=this;i.MessageBox.confirm("是否切换Simphony","").then(function(e){localStorage.setItem("system",3),t.goSystem()}).catch(function(t){})},goSystem:function(){var t=localStorage.system;"1"==t?"true"==localStorage.isLogin?this.$router.push("/"):this.$router.push("/loginCloudDining"):"2"==t?this.$router.push("/anypay"):"3"==t?this.$router.push("/operapay"):"4"==t?this.$router.push("/checkIndex"):"5"==t&&this.$router.push("/foodLogin"),localStorage.isLogin="false"},refresh:function(){location.reload()}},components:{actionsheet:i.Actionsheet}}},581:function(t,e,n){e=t.exports=n(455)(!0),e.push([t.i,".topHeader[data-v-752fe291]{height:1.04rem;background:#00487c}.topHeader .mint-header[data-v-752fe291]{color:#fff;z-index:100;background:#00487c!important}.topHeader .mint-header .mint-button[data-v-752fe291]{vertical-align:top}.topHeader .is-left a[data-v-752fe291]{color:#fff;padding:.2rem .6rem .2rem 0}.topHeader .mint-header-button>a[data-v-752fe291]{text-decoration:none}.topHeader .prints[data-v-752fe291]{margin-right:10px}","",{version:3,sources:["E:/works/vue/mipos-front/src/components/common/topNavCloudDining.vue"],names:[],mappings:"AACA,4BACE,eAAgB,AAChB,kBAAoB,CACrB,AACD,yCACE,WAAY,AACZ,YAAa,AACb,4BAA+B,CAChC,AACD,sDACE,kBAAoB,CACrB,AACD,uCACE,WAAY,AACZ,2BAAgC,CACjC,AACD,kDACE,oBAAsB,CACvB,AACD,oCACE,iBAAmB,CACpB",file:"topNavCloudDining.vue",sourcesContent:["\n.topHeader[data-v-752fe291] {\n  height: 1.04rem;\n  background: #00487c;\n}\n.topHeader .mint-header[data-v-752fe291] {\n  color: #fff;\n  z-index: 100;\n  background: #00487c !important;\n}\n.topHeader .mint-header .mint-button[data-v-752fe291] {\n  vertical-align: top;\n}\n.topHeader .is-left a[data-v-752fe291] {\n  color: #fff;\n  padding: 0.2rem 0.6rem 0.2rem 0;\n}\n.topHeader .mint-header-button > a[data-v-752fe291] {\n  text-decoration: none;\n}\n.topHeader .prints[data-v-752fe291] {\n  margin-right: 10px;\n}\n"],sourceRoot:""}])},590:function(t,e,n){var i=n(581);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(456)("4e644ac3",i,!0)},603:function(t,e,n){function i(t){n(590)}var o=n(1)(n(574),n(610),i,"data-v-752fe291",null);t.exports=o.exports},610:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topHeader"},[n("mt-header",{staticStyle:{backgroundColor:"'#00487C'"},attrs:{title:t.title,fixed:""}},[n("router-link",{attrs:{slot:"left",to:t.geturl(),replace:"true"==t.replace},slot:"left"},[1==t.show?n("i",{staticClass:"mintui mintui-back",on:{click:function(e){t.jump()}}}):t._e()]),t._v(" "),t.emptyRight?[n("div",{staticClass:"mint-header-button"})]:[""!=t.rightTitle?n("mt-button",{staticClass:"prints",attrs:{slot:"right"},slot:"right"},[t._v(t._s(t.rightTitle))]):n("mt-button",{directives:[{name:"show",rawName:"v-show",value:1==t.show,expression:"show==1"}],attrs:{slot:"right",icon:"more"},on:{click:function(e){t.sheetVisible=!0}},slot:"right"})]],2),t._v(" "),n("actionsheet",{attrs:{actions:t.actions},model:{value:t.sheetVisible,callback:function(e){t.sheetVisible=e},expression:"sheetVisible"}})],1)},staticRenderFns:[]}},692:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),o=n.n(i),r=n(2),a=(n.n(r),n(17)),A=n.n(a),s=n(215),d=n.n(s),u=n(603),l=n.n(u);e.default={data:function(){return{address:[],select:null,vurl:"",ps:localStorage.ps?JSON.parse(localStorage.ps):{accountLogUser:"",invoice:!1,pccode:null,pcname:null,isCoupon:!1,printPayCount:1,printRoomCount:1}}},mounted:function(){var t=localStorage.getItem("gateway");null!=t&&(this.select=JSON.parse(t),this.vurl=this.select.url);try{var e=localStorage.getItem("address");if(null!=e){for(var n=e.split("|"),i=0;i<n.length;i++){var o=JSON.parse(n[i]);o.ping="",this.address.push(o)}this.ping()}}catch(t){}this.ps.isCoupon},methods:{clear:function(){localStorage.removeItem("gateway"),localStorage.removeItem("address"),this.address=[],this.ps.accountLogUser=""},clearpccode:function(){this.$refs.pccode.clear(),this.changeP()},changeP:function(){this.ps.pccode=this.$refs.pccode.getValue(),this.ps.pcname=this.$refs.pccode.getDisValueF(),this.saveParams()},getparams:function(){var t=this;this.$http.post("/pos/posUnion/getPosPccode",{}).then(function(e){if(0==e.data.errorCode){var n=[];_.forEach(e.data.result,function(t,e){n.push({code:t.code,name:t.descript})}),t.$refs.pccode.setData(n,t.ps.pccode,t.disCodeName)}else t.msg(e.data.errorMsg)})},disCodeName:function(t){return t.code+" -- "+t.name},ping:function(t){if(void 0==t&&(t=0),this.address.length>t){var e=this.address[t],n=(new Date).getTime();A.a.create({timeout:5e3}).get(e.url+"/pos/posUnion/ping").then(function(t){var i=(new Date).getTime(),o=Math.abs(n-i);e.ping=o}).catch(function(t){e.ping="超时"}),this.ping(t+1)}},saveParams:function(){this.ps.accountLogUser=this.ps.accountLogUser.toUpperCase(),localStorage.setItem("ps",o()(this.ps))},selectUrl:function(){for(var t=0;t<this.address.length;t++)if(this.address[t].url==this.vurl)return localStorage.setItem("gateway",o()(this.address[t])),void this.msg("选择成功");this.msg("没有选中节点")},switchFun:function(){},msg:function(t){n.i(r.Toast)({message:t,position:"bottom",duration:3e3})}},components:{gpicker:d.a,topNavCloudDining:l.a}}},749:function(t,e,n){e=t.exports=n(455)(!0),e.push([t.i,".aettingApiBox{width:100%;margin:0 auto;text-align:left}.aettingApiBox .titleS{width:96%;margin:0 auto;font-size:.32rem;display:block;height:1.0667rem;color:#666;line-height:1.0667rem}.aettingApiBox .settingContent{-webkit-box-shadow:0 0 .2133rem 0 #dadada;box-shadow:0 0 .2133rem 0 #dadada;border-radius:.1333rem;width:96%;margin:0 auto;height:auto;background:#fff}.aettingApiBox .settingContent table{margin:0 auto;font-size:.3733rem;width:98%}.aettingApiBox .settingContent table tr th{height:1.36rem;border-bottom:.0267rem solid #eee}.aettingApiBox .settingContent table tr td{height:1.0667rem;border-bottom:.0267rem dashed #eee}.aettingApiBox .settingContent table tr td .checkBox{width:.4267rem;height:.4267rem;margin:0 auto;border-radius:.1333rem}.aettingApiBox .settingContent table tr td .checkBox .icon-right{color:#6ed200;line-height:.4267rem}.aettingApiBox .settingContent .settingAll{width:100%;height:auto}.aettingApiBox .settingContent .settingAll .allBox{width:85%;margin:0 auto;margin-top:.5333rem;padding-bottom:.32rem}.aettingApiBox .settingContent .settingAll .allBox .testButton{width:44%;height:.9867rem;text-align:center;line-height:.9067rem;color:#fff;font-size:.3733rem;background:#ff8902;border-radius:.1867rem;display:inline-block;margin-bottom:.2667rem;margin-left:.36rem}.aettingApiBox .defaultNumber{-webkit-box-shadow:0 0 .2133rem 0 #dadada;box-shadow:0 0 .2133rem 0 #dadada;border-radius:.1333rem;width:96%;margin:0 auto;overflow:hidden;margin-top:.2667rem;background:#fff;padding-top:.0267rem}.aettingApiBox .defaultNumber h3{font-size:.32rem;color:#666;margin-top:.3733rem;margin-bottom:.1333rem;margin-left:3.65%}.aettingApiBox .defaultNumber .inputNumber{width:92.7%;margin:0 auto;padding-bottom:.5333rem}.aettingApiBox .defaultNumber .inputNumber .workNumber{width:90%;padding-left:.2667rem;border-radius:.1333rem;height:.9867rem;text-transform:uppercase;border:.0267rem solid #ccc;margin:0 auto}.aettingApiBox .defaultNumber .inputNumber .gpicker{position:relative;margin:0 .13333333rem;padding:0 .13333333rem;float:left;width:7rem;-webkit-box-sizing:border-box;box-sizing:border-box;height:.88rem;background:#fff;border:1px solid #e8e8e8;border-radius:2px}.aettingApiBox .defaultNumber .inputNumber .gpicker .ginput{border:none;width:100%;height:.82rem;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:2px}.aettingApiBox .defaultNumber .inputNumber .gpicker .iconfont{position:absolute;right:.26666667rem;top:0}.aettingApiBox .defaultNumber .mint-switch-input:checked+.mint-switch-core{border-color:#ff8902;background-color:#ff8902}","",{version:3,sources:["E:/works/vue/mipos-front/src/components/pages/settingApiCloudDining.vue"],names:[],mappings:"AACA,eACE,WAAY,AACZ,cAAe,AACf,eAAiB,CAClB,AACD,uBACE,UAAW,AACX,cAAe,AACf,iBAAmB,AACnB,cAAe,AACf,iBAAkB,AAClB,WAAe,AACf,qBAAuB,CACxB,AACD,+BACE,0CAA+C,AACvC,kCAAuC,AAC/C,uBAAyB,AACzB,UAAW,AACX,cAAe,AACf,YAAa,AACb,eAAiB,CAClB,AACD,qCACE,cAAe,AACf,mBAAqB,AACrB,SAAW,CACZ,AACD,2CACE,eAAgB,AAChB,iCAAuC,CACxC,AACD,2CACE,iBAAkB,AAClB,kCAAwC,CACzC,AACD,qDACE,eAAiB,AACjB,gBAAkB,AAClB,cAAe,AACf,sBAAyB,CAC1B,AACD,iEACE,cAAe,AACf,oBAAuB,CACxB,AACD,2CACE,WAAY,AACZ,WAAa,CACd,AACD,mDACE,UAAW,AACX,cAAe,AACf,oBAAsB,AACtB,qBAAwB,CACzB,AACD,+DACE,UAAW,AACX,gBAAkB,AAClB,kBAAmB,AACnB,qBAAuB,AACvB,WAAY,AACZ,mBAAqB,AACrB,mBAAoB,AACpB,uBAAyB,AACzB,qBAAsB,AACtB,uBAAyB,AACzB,kBAAqB,CACtB,AACD,8BACE,0CAA+C,AACvC,kCAAuC,AAC/C,uBAAyB,AACzB,UAAW,AACX,cAAe,AACf,gBAAiB,AACjB,oBAAsB,AACtB,gBAAiB,AACjB,oBAAuB,CACxB,AACD,iCACE,iBAAmB,AACnB,WAAe,AACf,oBAAsB,AACtB,uBAAyB,AACzB,iBAAmB,CACpB,AACD,2CACE,YAAa,AACb,cAAe,AACf,uBAA0B,CAC3B,AACD,uDACE,UAAW,AACX,sBAAwB,AACxB,uBAAyB,AACzB,gBAAkB,AAClB,yBAA0B,AAC1B,2BAAgC,AAChC,aAAe,CAChB,AACD,oDACE,kBAAmB,AACnB,sBAAwB,AACxB,uBAAyB,AACzB,WAAY,AACZ,WAAY,AACZ,8BAA+B,AACvB,sBAAuB,AAC/B,cAAgB,AAChB,gBAAiB,AACjB,yBAA0B,AAC1B,iBAAmB,CACpB,AACD,4DACE,YAAa,AACb,WAAY,AACZ,cAAgB,AAChB,8BAA+B,AACvB,sBAAuB,AAC/B,iBAAmB,CACpB,AACD,8DACE,kBAAmB,AACnB,mBAAqB,AACrB,KAAS,CAEV,AACD,2EACE,qBAAsB,AACtB,wBAA0B,CAC3B",file:"settingApiCloudDining.vue",sourcesContent:["\n.aettingApiBox {\n  width: 100%;\n  margin: 0 auto;\n  text-align: left;\n}\n.aettingApiBox .titleS {\n  width: 96%;\n  margin: 0 auto;\n  font-size: 0.32rem;\n  display: block;\n  height: 1.0667rem;\n  color: #666666;\n  line-height: 1.0667rem;\n}\n.aettingApiBox .settingContent {\n  -webkit-box-shadow: 0 0 0.2133rem 0rem #dadada;\n          box-shadow: 0 0 0.2133rem 0rem #dadada;\n  border-radius: 0.1333rem;\n  width: 96%;\n  margin: 0 auto;\n  height: auto;\n  background: #fff;\n}\n.aettingApiBox .settingContent table {\n  margin: 0 auto;\n  font-size: 0.3733rem;\n  width: 98%;\n}\n.aettingApiBox .settingContent table tr th {\n  height: 1.36rem;\n  border-bottom: 0.0267rem solid #eeeeee;\n}\n.aettingApiBox .settingContent table tr td {\n  height: 1.0667rem;\n  border-bottom: 0.0267rem dashed #eeeeee;\n}\n.aettingApiBox .settingContent table tr td .checkBox {\n  width: 0.4267rem;\n  height: 0.4267rem;\n  margin: 0 auto;\n  border-radius: 0.1333rem;\n}\n.aettingApiBox .settingContent table tr td .checkBox .icon-right {\n  color: #6ed200;\n  line-height: 0.4267rem;\n}\n.aettingApiBox .settingContent .settingAll {\n  width: 100%;\n  height: auto;\n}\n.aettingApiBox .settingContent .settingAll .allBox {\n  width: 85%;\n  margin: 0 auto;\n  margin-top: 0.5333rem;\n  padding-bottom: 0.32rem;\n}\n.aettingApiBox .settingContent .settingAll .allBox .testButton {\n  width: 44%;\n  height: 0.9867rem;\n  text-align: center;\n  line-height: 0.9067rem;\n  color: #fff;\n  font-size: 0.3733rem;\n  background: #ff8902;\n  border-radius: 0.1867rem;\n  display: inline-block;\n  margin-bottom: 0.2667rem;\n  margin-left: 0.36rem;\n}\n.aettingApiBox .defaultNumber {\n  -webkit-box-shadow: 0 0 0.2133rem 0rem #dadada;\n          box-shadow: 0 0 0.2133rem 0rem #dadada;\n  border-radius: 0.1333rem;\n  width: 96%;\n  margin: 0 auto;\n  overflow: hidden;\n  margin-top: 0.2667rem;\n  background: #fff;\n  padding-top: 0.0267rem;\n}\n.aettingApiBox .defaultNumber h3 {\n  font-size: 0.32rem;\n  color: #666666;\n  margin-top: 0.3733rem;\n  margin-bottom: 0.1333rem;\n  margin-left: 3.65%;\n}\n.aettingApiBox .defaultNumber .inputNumber {\n  width: 92.7%;\n  margin: 0 auto;\n  padding-bottom: 0.5333rem;\n}\n.aettingApiBox .defaultNumber .inputNumber .workNumber {\n  width: 90%;\n  padding-left: 0.2667rem;\n  border-radius: 0.1333rem;\n  height: 0.9867rem;\n  text-transform: uppercase;\n  border: 0.0267rem solid #cccccc;\n  margin: 0 auto;\n}\n.aettingApiBox .defaultNumber .inputNumber .gpicker {\n  position: relative;\n  margin: 0 0.13333333rem;\n  padding: 0 0.13333333rem;\n  float: left;\n  width: 7rem;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  height: 0.88rem;\n  background: #fff;\n  border: 1px solid #e8e8e8;\n  border-radius: 2px;\n}\n.aettingApiBox .defaultNumber .inputNumber .gpicker .ginput {\n  border: none;\n  width: 100%;\n  height: 0.82rem;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-radius: 2px;\n}\n.aettingApiBox .defaultNumber .inputNumber .gpicker .iconfont {\n  position: absolute;\n  right: 0.26666667rem;\n  top: 0px;\n  /* transform: rotate(-90deg);*/\n}\n.aettingApiBox .defaultNumber .mint-switch-input:checked + .mint-switch-core {\n  border-color: #ff8902;\n  background-color: #ff8902;\n}\n"],sourceRoot:""}])},831:function(t,e,n){var i=n(749);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(456)("a7e10758",i,!0)},928:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"aettingApiBox"},[n("topNavCloudDining",{attrs:{title:"参数设置",url:"/"}}),t._v(" "),n("div",{staticClass:"titleS"},[t._v("请选择云餐饮接口地址")]),t._v(" "),n("div",{staticClass:"settingContent"},[n("table",[t._m(0,!1,!1),t._v(" "),t._l(t.address,function(e){return n("tr",{key:e.url},[n("td",{staticStyle:{border:"none"}},[n("div",{staticClass:"checkBox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.vurl,expression:"vurl"}],attrs:{type:"radio",name:"urlcheck"},domProps:{value:e.url,checked:null!=t.select&&t.select.url==e.url,checked:t._q(t.vurl,e.url)},on:{change:function(n){t.vurl=e.url}}})])]),t._v(" "),n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.url))]),t._v(" "),n("td",[t._v(t._s(e.ping))])])})],2),t._v(" "),n("div",{staticClass:"settingAll"},[n("div",{staticClass:"allBox"},[n("div",{staticClass:"testButton",on:{click:function(e){t.ping(0)}}},[t._v("测试")]),t._v(" "),n("router-link",{attrs:{to:"addApiCloudDining"}},[n("div",{staticClass:"testButton"},[t._v("新增")])]),t._v(" "),n("div",{staticClass:"testButton",on:{click:t.selectUrl}},[t._v("选择")]),t._v(" "),n("div",{staticClass:"testButton",on:{click:t.clear}},[t._v("清空接口")])],1)])])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",{staticStyle:{width:"8%"}}),t._v(" "),n("th",{staticStyle:{width:"23.3%"}},[t._v("网络")]),t._v(" "),n("th",[t._v("地址")]),t._v(" "),n("th",{staticStyle:{width:"8.5%"}},[t._v("响应")])])}]}}});
//# sourceMappingURL=45.6e3fb3d30cbf7a55c354.js.map