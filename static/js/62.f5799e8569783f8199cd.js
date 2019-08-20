webpackJsonp([62],{458:function(o,n,e){function t(o){e(784)}var r=e(1)(e(632),e(883),t,null,null);o.exports=r.exports},632:function(o,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e(32),r=e.n(t),A=e(0),a=e.n(A),i=e(215),s=e.n(i),l=e(2);e.n(l);n.default={data:function(){return{couponPs:localStorage.ps?JSON.parse(localStorage.ps):{pccode:null,pcname:null},cutOff:"",isEmpty:!0,masterTotal:0,listInfo:[],searchOption:{beginDate:a()().format("YYYY-MM-DD"),endDate:a()().add(1,"day").format("YYYY-MM-DD"),cardNo:"",pccode:"",userSource:"YPOS",couponType:null,maxResults:10,firstResult:0}}},computed:{},mounted:function(){this.searchOption.pccode=this.couponPs.pccode,this.getparams(),this.getSum(),this.getInfo()},filters:{tofixed:function(o){return parseFloat(o).toFixed(2)},niming:function(o){return o&&o.length>4?o.substr(0,2)+"***"+o.substr(o.length-2):o},fd:function(o){return null==o||""==o?"":o.substr(11)}},methods:{search:function(){this.searchOption.firstResult=0,this.listInfo=[],this.getSum()},getSum:function(){var o=this;this.$http.post("/pos/posUnion/findCouponSum",this.searchOption).then(function(n){if(0==n.data.errorCode){var e=0;if(n.data.result)for(var t=0;t<n.data.result.length;t++)e+=parseInt(n.data.result[t].count);o.masterTotal=e,o.masterTotal>0?o.getInfo():o.isEmpty=!0}else o.msg(n.data.errorMsg)})},getparams:function(){var o=this;this.$http.post("/pos/posUnion/listpccode",{}).then(function(n){if(0==n.data.errorCode){var e=[];_.forEach(n.data.result,function(o,n){e.push({code:o.code,name:o.descript})}),o.$refs.pccode.setData(e,o.couponPs.pccode)}else o.msg(n.data.errorMsg)})},savepccode:function(){this.searchOption.pccode=this.$refs.pccode.getValue(),this.search()},dateChange:function(o){this.searchOption.beginDate=a()(o).format("YYYY-MM-DD"),this.searchOption.endDate=a()(o).add(1,"day").format("YYYY-MM-DD"),this.listInfo=[],this.search()},getInfo:function(o){var n=this;this.cutOff=0,this.$http.post("/pos/posUnion/findCouponDetailDtoList",this.searchOption).then(function(e){0==e.data.errorCode?(n.isEmpty=!1,o?_.forEach(e.data.result,function(o,e){n.listInfo.push(o)}):n.listInfo=e.data.result,n.masterTotal>=4&&n.masterTotal<=n.searchOption.firstResult+n.searchOption.maxResults&&(n.cutOff=1),n.loading=!1,"0"==n.masterTotal&&(n.isEmpty=!0,n.cutOff=0)):n.msg(e.data.errorMsg)})},msg:function(o){e.i(l.Toast)({message:o,position:"bottom",duration:3e3})},loadMore:function(){if(this.masterTotal>=parseInt(this.searchOption.maxResults)+parseInt(this.searchOption.firstResult)){this.searchOption.firstResult+=this.searchOption.maxResults,this.loading=!0;this.getInfo(!0)}}},components:{actionsheet:l.Actionsheet,datepik:r.a,gpicker:s.a}}},702:function(o,n,e){n=o.exports=e(455)(!0),n.push([o.i,".CouponSearch{text-align:center;overflow-y:hidden}.CouponSearch .dateAll{width:100%;height:2.88rem;background:#fff;position:fixed;margin-top:-1px;z-index:2000}.CouponSearch .dateAll .dataBox{margin:0 auto;width:96%;height:100%}.CouponSearch .dateAll .dataBox .data{width:59%;height:1.0667rem;margin-top:.1067rem;display:inline-block}.CouponSearch .dateAll .dataBox .data .iconBox{border-radius:2.6667rem;width:.8533rem;height:.8533rem;display:inline-block;text-align:center;background:#fff;-webkit-transform:none;transform:none}.CouponSearch .dateAll .dataBox .data .iconBox .icon-caret-right-copy,.CouponSearch .dateAll .dataBox .data .iconBox .icon-jiantou{font-size:.32rem;line-height:.88rem;color:#d8d8d8;-webkit-transform:scale(.7);transform:scale(.7)}.CouponSearch .dateAll .dataBox .data .blakBg{background:#f6f8f9!important;border-radius:2.6667rem}.CouponSearch .dateAll .dataBox .data .fontBlack{color:#000!important}.CouponSearch .dateAll .dataBox .data .dataDtail{display:inline-block;font-size:.3733rem;color:#393c41;margin:.2667rem .3733rem 0}.CouponSearch .dateAll .dataBox .line{width:.0267rem;text-align:center;display:inline-block;vertical-align:top;margin-top:.3733rem;height:.5867rem;background:#ccc}.CouponSearch .dateAll .dataBox .allBox{width:38%;margin-top:.48rem;height:1.0667rem;display:inline-block;color:#393c41;font-size:.37rem;vertical-align:top}.CouponSearch .dateAll .dataBox .allBox b{color:red}.CouponSearch .dateAll .searchBox{height:1.6rem;margin:0 auto;width:100%;position:fixed;background:#f4f5f7;margin-top:-1px;top:2.3733rem}.CouponSearch .dateAll .searchBox .search{width:94%;margin:0 auto;height:.8rem;padding-top:.4rem}.CouponSearch .dateAll .searchBox .search .gpicker{width:3.3rem;float:left;position:relative;border:1px solid #ccc;background:#fff;border-radius:.1333rem}.CouponSearch .dateAll .searchBox .search .tableNuber{width:21%;margin-left:.1333rem}.CouponSearch .dateAll .searchBox .search .orderNumer,.CouponSearch .dateAll .searchBox .search .tableNuber{height:.7733rem;font-size:.3733rem;padding-left:.2667rem;background:#fff;border:.0267rem solid #ccc;border-radius:.1333rem;float:left}.CouponSearch .dateAll .searchBox .search .orderNumer{width:3rem;margin-left:.2667rem}.CouponSearch .dateAll .searchBox .search .searchResult{width:20.5%;height:.7733rem;font-size:.3733rem;background:#d8af68;border-radius:.1867rem;float:right;color:#fff;line-height:.7467rem;margin-right:.08rem;margin-top:.0533rem}.CouponSearch .scrollBox{position:fixed;margin-top:2.9rem;width:100%;height:79%;overflow-y:auto;padding-bottom:2rem}.CouponSearch .scrollBox .orderList{background:#fff;margin-bottom:.2667rem;width:96%;height:auto;padding-bottom:.2667rem;margin:0 auto .2667rem;-webkit-box-shadow:0 0 .2133rem 0 #dadada;box-shadow:0 0 .2133rem 0 #dadada;border-radius:.1333rem;position:relative}.CouponSearch .scrollBox .orderList .mintui{position:absolute;top:30%;right:5%;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.CouponSearch .scrollBox .orderList .top{width:100%;height:.5rem;line-height:.5rem;padding-top:.3rem;text-align:left;margin-bottom:-.4rem;margin-left:.2rem}.CouponSearch .scrollBox .orderList .blueLind{height:.3733rem;width:1.1%;background:#646f83;display:inline-block;float:left;margin-top:.48rem}.CouponSearch .scrollBox .orderList .infoL{width:49%;height:auto;text-align:left;display:inline-block;padding-top:.3733rem}.CouponSearch .scrollBox .orderList .infoL .lineInfo{margin:.1067rem auto;color:#999}.CouponSearch .scrollBox .orderList .infoL .lineInfo .titleThird{display:inline-block;color:#999;letter-spacing:.2667rem}.CouponSearch .scrollBox .orderList .infoL .lineInfo .titileS{display:inline-block;color:#999}.CouponSearch .scrollBox .orderList .infoL .lineInfo .nomalL{letter-spacing:0}.CouponSearch .scrollBox .orderList .infoL .lineInfo span{margin-left:.1333rem;font-size:.3733rem;color:#151515}.CouponSearch .scrollBox .orderList .infoR{width:45%}.CouponSearch .scrollBox .orderList .infoBo{text-align:left;margin-left:.3733rem}.CouponSearch .scrollBox .orderList .infoBo .titleThird{display:inline-block;color:#999;letter-spacing:.2667rem}.CouponSearch .scrollBox .orderList .infoBo .titileS{display:inline-block;color:#999}.CouponSearch .scrollBox .orderList .infoBo .nomalL{letter-spacing:0}.CouponSearch .scrollBox .orderList .infoBo span{margin-left:.1333rem;font-size:.3733rem;color:#151515}.CouponSearch .scrollBox .orderList .infoBo b{font-size:.32rem;color:#4990e2;text-decoration:underline;margin-left:.1333rem}.CouponSearch .nothing{width:80px;height:88px;margin:150px auto 0}.CouponSearch .nothingTxt{text-align:center;font-size:20px;color:#ccd1d5;margin-top:20px}.CouponSearch .show{display:block}.CouponSearch .hide{display:none}.CouponSearch .mint-popup-right{width:100%;height:100%}.CouponSearch .infoWarn{height:50px;color:#ccc}","",{version:3,sources:["E:/works/vue/mipos-front/src/components/pages/CouponSearch.vue"],names:[],mappings:"AACA,cACE,kBAAmB,AACnB,iBAAmB,CACpB,AACD,uBACE,WAAY,AACZ,eAAgB,AAChB,gBAAiB,AACjB,eAAgB,AAChB,gBAAiB,AACjB,YAAc,CACf,AACD,gCACE,cAAe,AACf,UAAW,AACX,WAAa,CACd,AACD,sCACE,UAAW,AACX,iBAAkB,AAClB,oBAAsB,AACtB,oBAAsB,CACvB,AACD,+CACE,wBAAyB,AACzB,eAAiB,AACjB,gBAAkB,AAClB,qBAAsB,AACtB,kBAAmB,AACnB,gBAAiB,AACjB,uBAAwB,AACxB,cAAgB,CACjB,AACD,mIAEE,iBAAmB,AACnB,mBAAqB,AACrB,cAAe,AACf,4BAA8B,AACtB,mBAAsB,CAC/B,AACD,8CACE,6BAA+B,AAC/B,uBAAyB,CAC1B,AACD,iDACE,oBAAwB,CACzB,AACD,iDACE,qBAAsB,AACtB,mBAAqB,AACrB,cAAe,AACf,0BAAiC,CAClC,AACD,sCACE,eAAiB,AACjB,kBAAmB,AACnB,qBAAsB,AACtB,mBAAoB,AACpB,oBAAsB,AACtB,gBAAkB,AAClB,eAAoB,CACrB,AACD,wCACE,UAAW,AACX,kBAAoB,AACpB,iBAAkB,AAClB,qBAAsB,AACtB,cAAe,AACf,iBAAmB,AACnB,kBAAoB,CACrB,AACD,0CACE,SAAW,CACZ,AACD,kCACE,cAAe,AACf,cAAe,AACf,WAAY,AACZ,eAAgB,AAChB,mBAAoB,AACpB,gBAAiB,AACjB,aAAe,CAChB,AACD,0CACE,UAAW,AACX,cAAe,AACf,aAAe,AACf,iBAAoB,CACrB,AACD,mDACE,aAAc,AACd,WAAY,AACZ,kBAAmB,AACnB,sBAAuB,AACvB,gBAAiB,AACjB,sBAAyB,CAC1B,AACD,sDACE,UAAW,AAOX,oBAAuB,CAExB,AACD,4GATE,gBAAkB,AAClB,mBAAqB,AACrB,sBAAwB,AACxB,gBAAiB,AACjB,2BAAgC,AAChC,uBAAyB,AAEzB,UAAY,CAYb,AAVD,sDACE,WAAY,AAQZ,oBAAuB,CACxB,AACD,wDACE,YAAa,AACb,gBAAkB,AAClB,mBAAqB,AACrB,mBAAoB,AACpB,uBAAyB,AACzB,YAAa,AACb,WAAY,AACZ,qBAAuB,AACvB,oBAAsB,AACtB,mBAAsB,CACvB,AACD,yBACE,eAAgB,AAChB,kBAAmB,AACnB,WAAY,AACZ,WAAY,AACZ,gBAAiB,AACjB,mBAAqB,CACtB,AACD,oCACE,gBAAoB,AACpB,uBAAyB,AACzB,UAAW,AACX,YAAa,AACb,wBAA0B,AAC1B,uBAAyB,AACzB,0CAA+C,AACvC,kCAAuC,AAC/C,uBAAyB,AACzB,iBAAmB,CACpB,AACD,4CACE,kBAAmB,AACnB,QAAS,AACT,SAAU,AACV,iCAAkC,AAC1B,wBAA0B,CACnC,AACD,yCACE,WAAY,AACZ,aAAe,AACf,kBAAoB,AACpB,kBAAoB,AACpB,gBAAiB,AACjB,qBAAuB,AACvB,iBAAoB,CACrB,AACD,8CACE,gBAAkB,AAClB,WAAY,AACZ,mBAAoB,AACpB,qBAAsB,AACtB,WAAY,AACZ,iBAAoB,CACrB,AACD,2CACE,UAAW,AACX,YAAa,AACb,gBAAiB,AACjB,qBAAsB,AACtB,oBAAuB,CACxB,AACD,qDACE,qBAAuB,AACvB,UAAe,CAChB,AACD,iEACE,qBAAsB,AACtB,WAAe,AACf,uBAA0B,CAC3B,AACD,8DACE,qBAAsB,AACtB,UAAe,CAChB,AACD,6DACE,gBAAqB,CACtB,AACD,0DACE,qBAAuB,AACvB,mBAAqB,AACrB,aAAe,CAChB,AACD,2CACE,SAAW,CACZ,AACD,4CACE,gBAAiB,AACjB,oBAAuB,CACxB,AACD,wDACE,qBAAsB,AACtB,WAAe,AACf,uBAA0B,CAC3B,AACD,qDACE,qBAAsB,AACtB,UAAe,CAChB,AACD,oDACE,gBAAqB,CACtB,AACD,iDACE,qBAAuB,AACvB,mBAAqB,AACrB,aAAe,CAChB,AACD,8CACE,iBAAmB,AACnB,cAAe,AACf,0BAA2B,AAC3B,oBAAuB,CACxB,AACD,uBACE,WAAY,AACZ,YAAa,AACb,mBAA0B,CAC3B,AACD,0BACE,kBAAmB,AACnB,eAAgB,AAChB,cAAe,AACf,eAAiB,CAClB,AACD,oBACE,aAAe,CAChB,AACD,oBACE,YAAc,CACf,AACD,gCACE,WAAY,AACZ,WAAa,CACd,AACD,wBACE,YAAa,AACb,UAAY,CACb",file:"CouponSearch.vue",sourcesContent:["\n.CouponSearch {\n  text-align: center;\n  overflow-y: hidden;\n}\n.CouponSearch .dateAll {\n  width: 100%;\n  height: 2.88rem;\n  background: #fff;\n  position: fixed;\n  margin-top: -1px;\n  z-index: 2000;\n}\n.CouponSearch .dateAll .dataBox {\n  margin: 0 auto;\n  width: 96%;\n  height: 100%;\n}\n.CouponSearch .dateAll .dataBox .data {\n  width: 59%;\n  height: 1.0667rem;\n  margin-top: 0.1067rem;\n  display: inline-block;\n}\n.CouponSearch .dateAll .dataBox .data .iconBox {\n  border-radius: 2.6667rem;\n  width: 0.8533rem;\n  height: 0.8533rem;\n  display: inline-block;\n  text-align: center;\n  background: #fff;\n  -webkit-transform: none;\n  transform: none;\n}\n.CouponSearch .dateAll .dataBox .data .iconBox .icon-jiantou,\n.CouponSearch .dateAll .dataBox .data .iconBox .icon-caret-right-copy {\n  font-size: 0.32rem;\n  line-height: 0.88rem;\n  color: #d8d8d8;\n  -webkit-transform: scale(0.7);\n          transform: scale(0.7);\n}\n.CouponSearch .dateAll .dataBox .data .blakBg {\n  background: #f6f8f9 !important;\n  border-radius: 2.6667rem;\n}\n.CouponSearch .dateAll .dataBox .data .fontBlack {\n  color: black !important;\n}\n.CouponSearch .dateAll .dataBox .data .dataDtail {\n  display: inline-block;\n  font-size: 0.3733rem;\n  color: #393c41;\n  margin: 0.2667rem 0.3733rem 0rem;\n}\n.CouponSearch .dateAll .dataBox .line {\n  width: 0.0267rem;\n  text-align: center;\n  display: inline-block;\n  vertical-align: top;\n  margin-top: 0.3733rem;\n  height: 0.5867rem;\n  background: #cccccc;\n}\n.CouponSearch .dateAll .dataBox .allBox {\n  width: 38%;\n  margin-top: 0.48rem;\n  height: 1.0667rem;\n  display: inline-block;\n  color: #393c41;\n  font-size: 0.37rem;\n  vertical-align: top;\n}\n.CouponSearch .dateAll .dataBox .allBox b {\n  color: red;\n}\n.CouponSearch .dateAll .searchBox {\n  height: 1.6rem;\n  margin: 0 auto;\n  width: 100%;\n  position: fixed;\n  background: #f4f5f7;\n  margin-top: -1px;\n  top: 2.3733rem;\n}\n.CouponSearch .dateAll .searchBox .search {\n  width: 94%;\n  margin: 0 auto;\n  height: 0.8rem;\n  padding-top: 0.4rem;\n}\n.CouponSearch .dateAll .searchBox .search .gpicker {\n  width: 3.3rem;\n  float: left;\n  position: relative;\n  border: 1px solid #ccc;\n  background: #fff;\n  border-radius: 0.1333rem;\n}\n.CouponSearch .dateAll .searchBox .search .tableNuber {\n  width: 21%;\n  height: 0.7733rem;\n  font-size: 0.3733rem;\n  padding-left: 0.2667rem;\n  background: #fff;\n  border: 0.0267rem solid #cccccc;\n  border-radius: 0.1333rem;\n  margin-left: 0.1333rem;\n  float: left;\n}\n.CouponSearch .dateAll .searchBox .search .orderNumer {\n  width: 3rem;\n  height: 0.7733rem;\n  font-size: 0.3733rem;\n  padding-left: 0.2667rem;\n  background: #fff;\n  border: 0.0267rem solid #cccccc;\n  border-radius: 0.1333rem;\n  float: left;\n  margin-left: 0.2667rem;\n}\n.CouponSearch .dateAll .searchBox .search .searchResult {\n  width: 20.5%;\n  height: 0.7733rem;\n  font-size: 0.3733rem;\n  background: #d8af68;\n  border-radius: 0.1867rem;\n  float: right;\n  color: #fff;\n  line-height: 0.7467rem;\n  margin-right: 0.08rem;\n  margin-top: 0.0533rem;\n}\n.CouponSearch .scrollBox {\n  position: fixed;\n  margin-top: 2.9rem;\n  width: 100%;\n  height: 79%;\n  overflow-y: auto;\n  padding-bottom: 2rem;\n}\n.CouponSearch .scrollBox .orderList {\n  background: #ffffff;\n  margin-bottom: 0.2667rem;\n  width: 96%;\n  height: auto;\n  padding-bottom: 0.2667rem;\n  margin: 0 auto 0.2667rem;\n  -webkit-box-shadow: 0 0 0.2133rem 0rem #dadada;\n          box-shadow: 0 0 0.2133rem 0rem #dadada;\n  border-radius: 0.1333rem;\n  position: relative;\n}\n.CouponSearch .scrollBox .orderList .mintui {\n  position: absolute;\n  top: 30%;\n  right: 5%;\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n.CouponSearch .scrollBox .orderList .top {\n  width: 100%;\n  height: 0.5rem;\n  line-height: 0.5rem;\n  padding-top: 0.3rem;\n  text-align: left;\n  margin-bottom: -0.4rem;\n  margin-left: 0.2rem;\n}\n.CouponSearch .scrollBox .orderList .blueLind {\n  height: 0.3733rem;\n  width: 1.1%;\n  background: #646f83;\n  display: inline-block;\n  float: left;\n  margin-top: 0.48rem;\n}\n.CouponSearch .scrollBox .orderList .infoL {\n  width: 49%;\n  height: auto;\n  text-align: left;\n  display: inline-block;\n  padding-top: 0.3733rem;\n}\n.CouponSearch .scrollBox .orderList .infoL .lineInfo {\n  margin: 0.1067rem auto;\n  color: #999999;\n}\n.CouponSearch .scrollBox .orderList .infoL .lineInfo .titleThird {\n  display: inline-block;\n  color: #999999;\n  letter-spacing: 0.2667rem;\n}\n.CouponSearch .scrollBox .orderList .infoL .lineInfo .titileS {\n  display: inline-block;\n  color: #999999;\n}\n.CouponSearch .scrollBox .orderList .infoL .lineInfo .nomalL {\n  letter-spacing: 0rem;\n}\n.CouponSearch .scrollBox .orderList .infoL .lineInfo span {\n  margin-left: 0.1333rem;\n  font-size: 0.3733rem;\n  color: #151515;\n}\n.CouponSearch .scrollBox .orderList .infoR {\n  width: 45%;\n}\n.CouponSearch .scrollBox .orderList .infoBo {\n  text-align: left;\n  margin-left: 0.3733rem;\n}\n.CouponSearch .scrollBox .orderList .infoBo .titleThird {\n  display: inline-block;\n  color: #999999;\n  letter-spacing: 0.2667rem;\n}\n.CouponSearch .scrollBox .orderList .infoBo .titileS {\n  display: inline-block;\n  color: #999999;\n}\n.CouponSearch .scrollBox .orderList .infoBo .nomalL {\n  letter-spacing: 0rem;\n}\n.CouponSearch .scrollBox .orderList .infoBo span {\n  margin-left: 0.1333rem;\n  font-size: 0.3733rem;\n  color: #151515;\n}\n.CouponSearch .scrollBox .orderList .infoBo b {\n  font-size: 0.32rem;\n  color: #4990e2;\n  text-decoration: underline;\n  margin-left: 0.1333rem;\n}\n.CouponSearch .nothing {\n  width: 80px;\n  height: 88px;\n  margin: 150px auto 0 auto;\n}\n.CouponSearch .nothingTxt {\n  text-align: center;\n  font-size: 20px;\n  color: #ccd1d5;\n  margin-top: 20px;\n}\n.CouponSearch .show {\n  display: block;\n}\n.CouponSearch .hide {\n  display: none;\n}\n.CouponSearch .mint-popup-right {\n  width: 100%;\n  height: 100%;\n}\n.CouponSearch .infoWarn {\n  height: 50px;\n  color: #ccc;\n}\n"],sourceRoot:""}])},784:function(o,n,e){var t=e(702);"string"==typeof t&&(t=[[o.i,t,""]]),t.locals&&(o.exports=t.locals);e(456)("e7357288",t,!0)},883:function(o,n,e){o.exports={render:function(){var o=this,n=o.$createElement,t=o._self._c||n;return t("div",{staticClass:"CouponSearch"},[t("topNav",{attrs:{title:"核销历史",url:"/CouponUse"}}),o._v(" "),t("div",{staticClass:"dateAll"},[t("div",{staticClass:"dataBox"},[t("div",{staticClass:"data"},[t("datepik",{staticStyle:{margin:"0 auto",float:"none"},attrs:{limit:"pre",step:"1"},on:{change:o.dateChange}})],1),o._v(" "),t("div",{staticClass:"line"}),o._v(" "),t("div",{staticClass:"allBox"},[o._v("\r\n                共 "),t("b",[o._v(o._s(o.masterTotal))]),o._v(" 笔\r\n            ")])]),o._v(" "),t("div",{staticClass:"searchBox"},[t("div",{staticClass:"search"},[t("gpicker",{ref:"pccode",on:{change:o.savepccode}}),o._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:o.searchOption.cardNo,expression:"searchOption.cardNo"}],staticClass:"orderNumer",attrs:{type:"text",name:"",id:"",placeholder:"会员卡号"},domProps:{value:o.searchOption.cardNo},on:{input:function(n){n.target.composing||o.$set(o.searchOption,"cardNo",n.target.value)}}}),o._v(" "),t("div",{staticClass:"searchResult",on:{click:o.search}},[o._v("查询")])],1)])]),o._v(" "),t("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:o.loadMore,expression:"loadMore"}],staticClass:"scrollBox",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"10"}},[o._l(o.listInfo,function(n){return t("div",{key:n.index,staticClass:"orderList"},[t("div",{staticClass:"blueLind"}),o._v(" "),t("div",{staticClass:"top"},[o._v("\r\n                券号 ："+o._s(n.no)+"\r\n            ")]),o._v(" "),t("div",{staticClass:"infoL"},[t("div",{staticClass:"lineInfo"},[t("div",{staticClass:"titleThird nomalL"},[o._v("名称")]),o._v(" :\r\n                    "),t("span",[o._v(o._s(n.couponName))])]),o._v(" "),t("div",{staticClass:"lineInfo"},[t("div",{staticClass:"titleThird nomalL"},[o._v("营业点")]),o._v(" :\r\n                    "),t("span",[o._v(o._s(n.pccode))])]),o._v(" "),t("div",{staticClass:"lineInfo"},[t("div",{staticClass:"titleThird nomalL"},[o._v("价值")]),o._v(" :\r\n                    "),t("span",[o._v(o._s(n.realValue))])]),o._v(" "),t("div",{staticClass:"lineInfo"},[t("div",{staticClass:"titleThird nomalL"},[o._v("核销时间")]),o._v(" :\r\n                    "),t("span",[o._v(o._s(o._f("fd")(n.consumeDate)))])])]),o._v(" "),t("div",{staticClass:"infoL infoR"},[t("div",{staticClass:"lineInfo"},[t("div",{staticClass:"titleThird nomalL"},[o._v("会员卡号")]),o._v(" :\r\n                    "),t("span",[o._v(o._s(o._f("niming")(n.cardNo)))])]),o._v(" "),t("div",{staticClass:"lineInfo"},[t("div",{staticClass:"titleThird nomalL"},[o._v("姓名")]),o._v(" :\r\n                    "),t("span",[o._v(o._s(n.cardName))])]),o._v(" "),t("div",{staticClass:"lineInfo"},[t("div",{staticClass:"titleThird nomalL"},[o._v("核销人")]),o._v(" :\r\n                    "),t("span",[o._v(o._s(n.consumeUser))])]),o._v(" "),t("div",{staticClass:"lineInfo"},[t("div",{staticClass:"titleThird nomalL"},[o._v("状态")]),o._v(" :\r\n                    "),t("span",[o._v(o._s(n.sta))])])])])}),o._v(" "),t("div",{class:{hide:!o.isEmpty}},[t("img",{staticClass:"nothing",attrs:{src:e(4)}}),o._v(" "),t("p",{staticClass:"nothingTxt"},[o._v("什么都没有")])]),o._v(" "),1==o.cutOff?t("div",{staticClass:"infoWarn"},[o._v(" —— 我是有底线的 —— ")]):o._e()],2)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=62.f5799e8569783f8199cd.js.map