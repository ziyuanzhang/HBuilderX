webpackJsonp([54],{472:function(o,n,t){function e(o){t(783),t(782)}var i=t(1)(t(646),t(882),e,"data-v-06d1fadb",null);o.exports=i.exports},593:function(o,n,t){o.exports=t.p+"static/img/food-login-bg.8c36344.jpg"},594:function(o,n,t){o.exports=t.p+"static/img/foodLogo.3457d6c.png"},646:function(o,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=t(3),i=t.n(e),a=t(2);t.n(a);n.default={data:function(){return{hotelCode:"",userName:"",passWord:"",checkVal:[],isShowPassWord:!1,loginData:null,options:[{label:"记住账号密码",value:"1"}]}},mounted:function(){if(localStorage.foodUserSet){var o=JSON.parse(localStorage.foodUserSet);this.hotelCode=o.hotelCode,this.userName=o.userName,this.passWord=o.passWord,this.checkVal=[o.checkVal]}},methods:{toggelPassWordFun:function(){this.isShowPassWord=!this.isShowPassWord},loginFun:function(){var o=this;if(console.log("checkVal:",this.checkVal),!this.hotelCode||!this.userName||!this.passWord)return void this.msg("请输入酒店代码或用户名或密码！");"1"==this.checkVal[0]?localStorage.foodUserSet=i()({hotelCode:this.hotelCode,userName:this.userName,passWord:this.passWord,checkVal:1}):localStorage.foodUserSet="",this.$http.get("/ohotel/router",{params:{method:"loginCenter",hotelCode:this.hotelCode,userName:this.userName,passwd:this.passWord},vv:5}).then(function(n){console.log("denglu:",n),"0"==n.data.code?(localStorage.foodUserInfo=i()(n.data.data),localStorage.waiter=o.userName,o.loginData=n.data.data,window.navigator.userAgent.indexOf("Cordova")>0?getSn(o.getSnSuccess):o.checkBinding("111111111",n.data.data)):o.msg(n.data.msg)})},getSnSuccess:function(o){this.checkBinding(o,this.loginData)},checkBinding:function(o,n){var t=this;this.$http.get("/ohotel/router",{params:{method:"checkWorkstationExist",sinNo:o},vv:5}).then(function(o){"0"==o.data.code?o.data.data.existsFlag?(n.workStationCode=o.data.data.workStationCode,localStorage.foodUserInfo=i()(n),t.$router.push("/foodIndex")):t.$router.push("/foodSite"):t.msg(o.data.msg)})},gotoSetApi:function(){localStorage.setApi="foodLogin",this.$router.push("/foodSettingApi")},msg:function(o){t.i(a.Toast)({message:o,position:"bottom",duration:3e3})}},watch:{hotelCode:function(){this.hotelCode=this.hotelCode.toUpperCase()},userName:function(){this.userName=this.userName.toUpperCase()}}}},700:function(o,n,t){n=o.exports=t(455)(!0),n.push([o.i,".food-login .mint-field-core{text-align:center}.food-login .settings-container .mint-checklist-title{display:none}.food-login .settings-container .mint-cell{width:auto;background:none}.food-login .settings-container .mint-cell .mint-cell-wrapper{padding:0;background:none}.food-login .settings-container .mint-cell .mint-cell-wrapper .mint-checklist-label{padding:0}.food-login .settings-container .mint-cell .mint-checkbox-label{color:#fff;font-size:.373rem}.food-login .settings-container .mint-cell .mint-checkbox-core{border-radius:3px;width:.373rem;height:.373rem;background-color:#fff;border-color:#fff}.food-login .settings-container .mint-cell .mint-checkbox-core:after{border-color:#f89635;top:-1px;left:4px;width:6px;height:11px}","",{version:3,sources:["E:/works/vue/mipos-front/src/components/pages/foodLogin.vue"],names:[],mappings:"AACA,6BACE,iBAAmB,CACpB,AACD,sDACE,YAAc,CACf,AACD,2CACE,WAAY,AACZ,eAAiB,CAClB,AACD,8DACE,UAAW,AACX,eAAiB,CAClB,AACD,oFACE,SAAW,CACZ,AACD,gEACE,WAAY,AACZ,iBAAoB,CACrB,AACD,+DACE,kBAAmB,AACnB,cAAgB,AAChB,eAAiB,AACjB,sBAAuB,AACvB,iBAAmB,CACpB,AACD,qEACE,qBAAsB,AACtB,SAAU,AACV,SAAU,AACV,UAAW,AACX,WAAa,CACd",file:"foodLogin.vue",sourcesContent:["\n.food-login .mint-field-core {\n  text-align: center;\n}\n.food-login .settings-container .mint-checklist-title {\n  display: none;\n}\n.food-login .settings-container .mint-cell {\n  width: auto;\n  background: none;\n}\n.food-login .settings-container .mint-cell .mint-cell-wrapper {\n  padding: 0;\n  background: none;\n}\n.food-login .settings-container .mint-cell .mint-cell-wrapper .mint-checklist-label {\n  padding: 0;\n}\n.food-login .settings-container .mint-cell .mint-checkbox-label {\n  color: #fff;\n  font-size: 0.373rem;\n}\n.food-login .settings-container .mint-cell .mint-checkbox-core {\n  border-radius: 3px;\n  width: 0.373rem;\n  height: 0.373rem;\n  background-color: #fff;\n  border-color: #fff;\n}\n.food-login .settings-container .mint-cell .mint-checkbox-core::after {\n  border-color: #f89635;\n  top: -1px;\n  left: 4px;\n  width: 6px;\n  height: 11px;\n}\n"],sourceRoot:""}])},701:function(o,n,t){n=o.exports=t(455)(!0),n.push([o.i,".food-login[data-v-06d1fadb]{position:relative}.food-login .login-bg[data-v-06d1fadb]{width:100%;height:100vh;position:absolute;top:0;left:0;z-index:-1}.food-login .login-img[data-v-06d1fadb]{width:106px;margin-top:72px;margin-bottom:1.067rem}.food-login .input-container[data-v-06d1fadb]{position:relative;margin:0 1.2rem;border-bottom:1px solid #fff;padding:.133rem 0;margin-bottom:28px}.food-login .input-container input[data-v-06d1fadb]{width:100%;border:none;background:none;outline:none;color:#fff;font-size:.427rem}.food-login .input-container input[data-v-06d1fadb]::-webkit-input-placeholder{color:#fff}.food-login .input-container .pw-btn[data-v-06d1fadb]{position:absolute;top:0;right:0;color:#fff}.food-login .settings-container[data-v-06d1fadb]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:286px;margin:auto}.food-login .settings-container .settings[data-v-06d1fadb]{font-size:.373rem;color:#fff}.food-login .settings-container .settings .iconfont[data-v-06d1fadb]{margin-right:6px}.food-login .login-btn[data-v-06d1fadb]{margin:0 1.2rem;margin-top:.933rem;margin-bottom:2.4rem;font-size:.48rem;color:#fff;height:44px;line-height:44px;background-image:-webkit-gradient(linear,right top,left top,from(#f6a129),color-stop(98%,#ff6e61));background-image:linear-gradient(-90deg,#f6a129,#ff6e61 98%);border-radius:2.667rem}","",{version:3,sources:["E:/works/vue/mipos-front/src/components/pages/foodLogin.vue"],names:[],mappings:"AACA,6BACE,iBAAmB,CACpB,AACD,uCACE,WAAY,AACZ,aAAc,AACd,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,UAAY,CACb,AACD,wCACE,YAAa,AACb,gBAAiB,AACjB,sBAAwB,CACzB,AACD,8CACE,kBAAmB,AACnB,gBAAiB,AACjB,6BAAiC,AACjC,kBAAoB,AACpB,kBAAoB,CACrB,AACD,oDACE,WAAY,AACZ,YAAa,AACb,gBAAiB,AACjB,aAAc,AACd,WAAY,AACZ,iBAAoB,CACrB,AACD,+EACE,UAAY,CACb,AACD,sDACE,kBAAmB,AACnB,MAAS,AACT,QAAW,AACX,UAAY,CACb,AACD,iDACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,8BAA+B,AACvC,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,YAAa,AACb,WAAa,CACd,AACD,2DACE,kBAAoB,AACpB,UAAe,CAChB,AACD,qEACE,gBAAkB,CACnB,AACD,wCACE,gBAAiB,AACjB,mBAAqB,AACrB,qBAAsB,AACtB,iBAAmB,AACnB,WAAe,AACf,YAAa,AACb,iBAAkB,AAClB,mGAAyG,AACzG,6DAAmE,AACnE,sBAAwB,CACzB",file:"foodLogin.vue",sourcesContent:["\n.food-login[data-v-06d1fadb] {\n  position: relative;\n}\n.food-login .login-bg[data-v-06d1fadb] {\n  width: 100%;\n  height: 100vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n.food-login .login-img[data-v-06d1fadb] {\n  width: 106px;\n  margin-top: 72px;\n  margin-bottom: 1.067rem;\n}\n.food-login .input-container[data-v-06d1fadb] {\n  position: relative;\n  margin: 0 1.2rem;\n  border-bottom: 1px solid #ffffff;\n  padding: 0.133rem 0;\n  margin-bottom: 28px;\n}\n.food-login .input-container input[data-v-06d1fadb] {\n  width: 100%;\n  border: none;\n  background: none;\n  outline: none;\n  color: #fff;\n  font-size: 0.427rem;\n}\n.food-login .input-container input[data-v-06d1fadb]::-webkit-input-placeholder {\n  color: #fff;\n}\n.food-login .input-container .pw-btn[data-v-06d1fadb] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  color: #fff;\n}\n.food-login .settings-container[data-v-06d1fadb] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 286px;\n  margin: auto;\n}\n.food-login .settings-container .settings[data-v-06d1fadb] {\n  font-size: 0.373rem;\n  color: #ffffff;\n}\n.food-login .settings-container .settings .iconfont[data-v-06d1fadb] {\n  margin-right: 6px;\n}\n.food-login .login-btn[data-v-06d1fadb] {\n  margin: 0 1.2rem;\n  margin-top: 0.933rem;\n  margin-bottom: 2.4rem;\n  font-size: 0.48rem;\n  color: #ffffff;\n  height: 44px;\n  line-height: 44px;\n  background-image: -webkit-gradient(linear, right top, left top, from(#f6a129), color-stop(98%, #ff6e61));\n  background-image: linear-gradient(-90deg, #f6a129 0%, #ff6e61 98%);\n  border-radius: 2.667rem;\n}\n"],sourceRoot:""}])},782:function(o,n,t){var e=t(700);"string"==typeof e&&(e=[[o.i,e,""]]),e.locals&&(o.exports=e.locals);t(456)("0f9b90a2",e,!0)},783:function(o,n,t){var e=t(701);"string"==typeof e&&(e=[[o.i,e,""]]),e.locals&&(o.exports=e.locals);t(456)("e0fb8266",e,!0)},882:function(o,n,t){o.exports={render:function(){var o=this,n=o.$createElement,e=o._self._c||n;return e("div",{staticClass:"food-login"},[e("img",{staticClass:"login-bg",attrs:{src:t(593),alt:""}}),o._v(" "),e("img",{staticClass:"login-img",attrs:{src:t(594),alt:""}}),o._v(" "),e("div",{staticClass:"input-container"},[e("input",{directives:[{name:"model",rawName:"v-model",value:o.hotelCode,expression:"hotelCode"}],attrs:{type:"text",placeholder:"酒店代码"},domProps:{value:o.hotelCode},on:{input:function(n){n.target.composing||(o.hotelCode=n.target.value)}}})]),o._v(" "),e("div",{staticClass:"input-container"},[e("input",{directives:[{name:"model",rawName:"v-model",value:o.userName,expression:"userName"}],attrs:{type:"text",placeholder:"用 户 名"},domProps:{value:o.userName},on:{input:function(n){n.target.composing||(o.userName=n.target.value)}}})]),o._v(" "),e("div",{staticClass:"input-container"},[e("div",{staticClass:"pw-btn",on:{click:function(n){o.toggelPassWordFun()}}},[o.isShowPassWord?e("i",{staticClass:"iconfont icon-eye"}):e("i",{staticClass:"iconfont icon-eye1"})]),o._v(" "),"checkbox"===[o.isShowPassWord?"text":"password"]?e("input",{directives:[{name:"model",rawName:"v-model",value:o.passWord,expression:"passWord"}],attrs:{placeholder:"密 码",type:"checkbox"},domProps:{checked:Array.isArray(o.passWord)?o._i(o.passWord,null)>-1:o.passWord},on:{change:function(n){var t=o.passWord,e=n.target,i=!!e.checked;if(Array.isArray(t)){var a=o._i(t,null);e.checked?a<0&&(o.passWord=t.concat([null])):a>-1&&(o.passWord=t.slice(0,a).concat(t.slice(a+1)))}else o.passWord=i}}}):"radio"===[o.isShowPassWord?"text":"password"]?e("input",{directives:[{name:"model",rawName:"v-model",value:o.passWord,expression:"passWord"}],attrs:{placeholder:"密 码",type:"radio"},domProps:{checked:o._q(o.passWord,null)},on:{change:function(n){o.passWord=null}}}):e("input",{directives:[{name:"model",rawName:"v-model",value:o.passWord,expression:"passWord"}],attrs:{placeholder:"密 码",type:[o.isShowPassWord?"text":"password"]},domProps:{value:o.passWord},on:{input:function(n){n.target.composing||(o.passWord=n.target.value)}}})]),o._v(" "),e("div",{staticClass:"login-btn",on:{click:function(n){o.loginFun()}}},[o._v("登 录")]),o._v(" "),e("div",{staticClass:"settings-container"},[e("mt-checklist",{attrs:{options:o.options},model:{value:o.checkVal,callback:function(n){o.checkVal=n},expression:"checkVal"}}),o._v(" "),e("div",{staticClass:"settings",on:{click:o.gotoSetApi}},[e("i",{staticClass:"iconfont icon-shezhi"}),o._v("连接设置\n    ")])],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=54.0706cb703766d5a920e2.js.map