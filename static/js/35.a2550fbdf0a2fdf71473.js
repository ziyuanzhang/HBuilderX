webpackJsonp([35],{498:function(t,e,n){function o(t){n(837)}var a=n(1)(n(673),n(934),o,"data-v-7beac3c4",null);t.exports=a.exports},519:function(t,e,n){"use strict";n.d(e,"a",function(){return A});var o=n(2),a=(n.n(o),n(17)),i=n.n(a),s=function(t,e){return e.vv=6,i.a.get(t,e).then(function(t){if(0==t.data.resultCode)return t.data;c(t.data.resultMsg)})},A=function(t,e){return i.a.post(t,e,{vv:6}).then(function(t){if(0==t.data.resultCode)return t.data;c(t.data.resultMsg)})},c=function(t){n.i(o.Toast)({message:t,position:"bottom",duration:3e3})};e.b=s},520:function(t,e,n){function o(t){n(523)}var a=n(1)(n(521),n(524),o,"data-v-d8466530",null);t.exports=a.exports},521:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{btnShow:String,titleText:String,url:String,isComponents:{type:Boolean,default:!1},headRightObj:{showWhat:"",text:""}},data:function(){return{}},methods:{goback:function(){this.isComponents?this.$emit("emitGoback"):this.$router.push(this.url)},rightFun:function(){this.$emit("emitHeadRight")}}}},522:function(t,e,n){e=t.exports=n(455)(!0),e.push([t.i,".content-header[data-v-d8466530]{height:46px;width:100%;background-color:#393c41;color:#fff;font-size:16px;position:fixed;top:0;z-index:9}.content-header .content-goback[data-v-d8466530],.content-header[data-v-d8466530]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.content-header .content-goback[data-v-d8466530]{position:absolute;left:0;top:10px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.content-header .content-goback .goback-icon[data-v-d8466530]{margin-left:13px}.content-header .content-goback .goback-text[data-v-d8466530]{font-size:16px}.content-header .title[data-v-d8466530]{font-size:18px;-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:center}.content-header .content-right[data-v-d8466530]{position:absolute;right:15px;top:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.content-header .content-right .icon-beizhu[data-v-d8466530]{font-size:18px}","",{version:3,sources:["E:/works/vue/mipos-front/src/components/common/mobileOrdering/headerUsually.vue"],names:[],mappings:"AACA,iCACE,YAAa,AACb,WAAY,AACZ,yBAA0B,AAO1B,WAAY,AACZ,eAAgB,AAChB,eAAgB,AAChB,MAAS,AACT,SAAW,CACZ,AACD,kFAZE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,kBAAoB,CAoB7B,AAbD,iDACE,kBAAmB,AACnB,OAAQ,AACR,SAAU,AAIV,wBAAyB,AACrB,qBAAsB,AAClB,sBAAwB,CAIjC,AACD,8DACE,gBAAkB,CACnB,AACD,8DACE,cAAgB,CACjB,AACD,wCACE,eAAgB,AAChB,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,iBAAmB,CACpB,AACD,gDACE,kBAAmB,AACnB,WAAY,AACZ,SAAU,AACV,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,yBAA0B,AACtB,sBAAuB,AACnB,kBAAoB,CAC7B,AACD,6DACE,cAAgB,CACjB",file:"headerUsually.vue",sourcesContent:["\n.content-header[data-v-d8466530] {\n  height: 46px;\n  width: 100%;\n  background-color: #393c41;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #fff;\n  font-size: 16px;\n  position: fixed;\n  top: 0px;\n  z-index: 9;\n}\n.content-header .content-goback[data-v-d8466530] {\n  position: absolute;\n  left: 0;\n  top: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.content-header .content-goback .goback-icon[data-v-d8466530] {\n  margin-left: 13px;\n}\n.content-header .content-goback .goback-text[data-v-d8466530] {\n  font-size: 16px;\n}\n.content-header .title[data-v-d8466530] {\n  font-size: 18px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: center;\n}\n.content-header .content-right[data-v-d8466530] {\n  position: absolute;\n  right: 15px;\n  top: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.content-header .content-right .icon-beizhu[data-v-d8466530] {\n  font-size: 18px;\n}\n"],sourceRoot:""}])},523:function(t,e,n){var o=n(522);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(456)("bae06bf4",o,!0)},524:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-header"},["true"==t.btnShow?n("div",{staticClass:"content-goback",on:{click:function(e){t.goback()}}},[n("div",{staticClass:"iconfont icon-jiantouzuo goback-icon"}),t._v(" "),n("span",{staticClass:"goback-text"},[t._v("返回")])]):t._e(),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.titleText))]),t._v(" "),n("div",{staticClass:"content-right",on:{click:function(e){t.rightFun()}}},[t.headRightObj&&"kitchenInfo"==t.headRightObj.showWhat?n("span",{staticClass:"iconfont icon-beizhu"}):t._e()])])},staticRenderFns:[]}},673:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(213),a=n.n(o),i=n(3),s=n.n(i),A=n(212),c=n.n(A),r=n(211),l=n.n(r),d=n(519),f=n(2),u=(n.n(f),n(520)),p=n.n(u);e.default={components:{headerUsually:p.a},data:function(){return{siteInfo:[{text:"描述",value:"",placeholder:"请输入站点描述",isEdit:!0},{text:"姓名",value:"",placeholder:"请输入姓名",isEdit:!0},{text:"电话",value:"",placeholder:"请输入电话",isEdit:!0}]}},methods:{okFun:function(){var t=this;return l()(a.a.mark(function e(){var o,i,A,r,l,f,u;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o=/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/,i=/^(?:13\d|15\d|18[123456789])-?\d{5}(\d{3}|\*{3})$/,o.test(t.siteInfo[2].value)||i.test(t.siteInfo[2].value)){e.next=5;break}return t.msg("电话号码格式不正确！"),e.abrupt("return");case 5:if(!(A=t.siteInfo.every(function(t){return t.value}))){e.next=16;break}return r=localStorage.getItem("dcgateway")?JSON.parse(localStorage.getItem("dcgateway")):{},l={stationDesc:t.siteInfo[0].value,magicCode:r.userInfo.magicNo,principal:t.siteInfo[1].value,phone:t.siteInfo[2].value},f={params:c()({},l)},e.next=12,n.i(d.b)("/pos/router?method=saveWorkStation",f);case 12:u=e.sent,u&&0==u.resultCode&&(r.siteInfo=c()({},l),r.userInfo.workStationCode=u.data.workStationCode,localStorage.setItem("dcgateway",s()(r)),t.$router.push("/mobileOrdering/selectClass")),e.next=17;break;case 16:t.msg("描述/姓名 不能为空！");case 17:case"end":return e.stop()}},e,t)}))()},msg:function(t){n.i(f.Toast)({message:t,position:"middle",duration:3e3})}}}},755:function(t,e,n){e=t.exports=n(455)(!0),e.push([t.i,".content-siteInfo[data-v-7beac3c4]{padding-top:46px}.content-siteInfo .content-main[data-v-7beac3c4]{background-color:#fff}.content-siteInfo .content-main .item[data-v-7beac3c4]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;font-size:14px;margin-left:15px;height:54px;padding:0;padding-right:15px;border-bottom:1px solid #ddd;-webkit-box-sizing:border-box;box-sizing:border-box}.content-siteInfo .content-main .item .val[data-v-7beac3c4]{text-align:right}.content-siteInfo .content-main .item input[data-v-7beac3c4]{outline:none;border:none}.content-siteInfo .content-main .item[data-v-7beac3c4]:last-child{border-bottom:none}.content-siteInfo .btn[data-v-7beac3c4]{font-size:14px;margin-top:20px;padding:11px;text-align:center;background-color:#fff;color:#c4ad68}","",{version:3,sources:["E:/works/vue/mipos-front/src/components/pages/mobileOrdering/login/siteInfo.vue"],names:[],mappings:"AACA,mCACE,gBAAkB,CACnB,AACD,iDACE,qBAAuB,CACxB,AACD,uDACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,yBAA0B,AACtB,sBAAuB,AACnB,8BAA+B,AACvC,eAAgB,AAChB,iBAAkB,AAClB,YAAa,AACb,UAAW,AACX,mBAAoB,AACpB,6BAA8B,AAC9B,8BAA+B,AACvB,qBAAuB,CAChC,AACD,4DACE,gBAAkB,CACnB,AACD,6DACE,aAAc,AACd,WAAa,CACd,AACD,kEACE,kBAAoB,CACrB,AACD,wCACE,eAAgB,AAChB,gBAAiB,AACjB,aAAc,AACd,kBAAmB,AACnB,sBAAuB,AACvB,aAAe,CAChB",file:"siteInfo.vue",sourcesContent:["\n.content-siteInfo[data-v-7beac3c4] {\n  padding-top: 46px;\n}\n.content-siteInfo .content-main[data-v-7beac3c4] {\n  background-color: #fff;\n}\n.content-siteInfo .content-main .item[data-v-7beac3c4] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  font-size: 14px;\n  margin-left: 15px;\n  height: 54px;\n  padding: 0;\n  padding-right: 15px;\n  border-bottom: 1px solid #ddd;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.content-siteInfo .content-main .item .val[data-v-7beac3c4] {\n  text-align: right;\n}\n.content-siteInfo .content-main .item input[data-v-7beac3c4] {\n  outline: none;\n  border: none;\n}\n.content-siteInfo .content-main .item[data-v-7beac3c4]:last-child {\n  border-bottom: none;\n}\n.content-siteInfo .btn[data-v-7beac3c4] {\n  font-size: 14px;\n  margin-top: 20px;\n  padding: 11px;\n  text-align: center;\n  background-color: #fff;\n  color: #c4ad68;\n}\n"],sourceRoot:""}])},837:function(t,e,n){var o=n(755);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(456)("15a3490b",o,!0)},934:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-siteInfo"},[n("headerUsually",{attrs:{titleText:"工作站资料",btnShow:"false",url:""}}),t._v(" "),n("div",{staticClass:"content-main"},t._l(t.siteInfo,function(e,o){return n("div",{key:o,staticClass:"item"},[n("div",{staticClass:"text"},[t._v(t._s(e.text))]),t._v(" "),0==e.isEdit?n("div",{staticClass:"val"},[t._v(t._s(e.value))]):n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"item.value"}],staticClass:"val",attrs:{placeholder:e.placeholder},domProps:{value:e.value},on:{input:function(n){n.target.composing||t.$set(e,"value",n.target.value)}}})])})),t._v(" "),n("div",{staticClass:"btn",on:{click:function(e){t.okFun()}}},[t._v("确定")])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=35.a2550fbdf0a2fdf71473.js.map