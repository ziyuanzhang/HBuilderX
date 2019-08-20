//var SYS_DEVICE = "ICBC";

var pluginFailed = function(echoValue){
    if(typeof echoValue == "string")
        alert(echoValue);
    else
      alert(JSON.stringify(echoValue));
};
function logData(data){
  cordova.exec(null, null, "gcPlugin", "log", data);
}
/**
 * 扫码支付
 * pluginSucceed 成功后回调
 * failed失败后的回调
 * money金额int 单位为分，*100
 */
function unionScan(pluginSucceed,failed,money,orderNo){
  //console.log(money);
  //money = "1";
  if(failed == null){
    failed = pluginFailed;
  }
  var transData = {'transId':'聚合扫码支付',
  'transData':{'amt':Math.round(money), 'lsOrderNo':orderNo}};

   cordova.exec(pluginSucceed, failed, "gcPlugin", "pay", transData);
  }
  /**
 * 银行卡支付
 */
function unionPay(pluginSucceed,failed,money,orderNo){

  //money = "1";
  if(failed == null){
    failed = pluginFailed;
  }
  var transData = {'transId':'消费',
  'transData':{'amt':Math.round(money), 'lsOrderNo':orderNo}};

  cordova.exec(pluginSucceed, failed, "gcPlugin", "pay", transData);
  }
function getPayWay(data){
  if(!data.CARD_ISSUER){
    return "PUN_CARD";
  }
 if(data.CARD_ISSUER.indexOf("支付宝")>=0) return "PUN_ALIPAY";
 else if(data.CARD_ISSUER.indexOf("微信")>=0) return "PUN_WEIXIN";
 else if(data.CARD_ISSUER.indexOf("CHANNEL_UNIONPAY")>=0) return "PUN_UPAY";
 else return "PUN_CARD";
}
function getPayWayName(value){
  if (value == null || value == "") return "";
  else if (value == "PUN_ALIPAY") return "支付宝";
  else if (value == "PUN_WEIXIN") return "微信";
  else if (value == "PUN_CARD") return "银行卡";
  else if (value == "PUN_UPAY") return "二维码消费";
  else if (value == "RCV") return "储值卡";
  else return "其它";
}
function getPayWayPOS(data){
   if(!data.CARD_ISSUER){
     return "PUN_CARD";
   }
   if(data.CARD_ISSUER.indexOf("支付宝")>=0) return "PUN_ALIPAY";
   else if(data.CARD_ISSUER.indexOf("微信")>=0) return "PUN_WEIXIN";
   else if(data.CARD_ISSUER.indexOf("CHANNEL_UNIONPAY")>=0) return "PUN_UPAY";
   else return "PUN_CARD";
}

  /**
   * 退款（traceNo为流水号）
   */
  function refund(pluginSucceed,failed,traceNo,credit,payCode,item){
    if(failed == null){
      failed = pluginFailed;
    }
    var ps = traceNo.split('_');
    var transData = null;
    var longpay = false;
    var acc = item.accnt;
    if(!acc){
        acc = item.checkNum+""+item.checkSeq;
    }
    acc = acc+"C";
    if(payCode == 'PUN_CARD'){
      transData = {'transId': '撤销','transData':{'orgTraceNo':ps[3], 'lsOrderNo':acc}};
    }
   else{
      var method ="";
       if(payCode == 'PUN_UPAY'){
         if(ps[0].length > 13){
            method = "龙支付退货";
            longpay = true;
         }
         else{
           method = "银联二维码退货";
         }
       }
       else {
         method = "微信/支付宝退货";
       }
       if(longpay){
        transData = {'transId': method,
        'transData':{'DPDSvcID':ps[0],'lsOrderNo':acc}};
       }
       else{
          transData = {'transId': method,
        'transData':{'amt':Math.round(credit),'orgRefNo':ps[0],'transDate':ps[2], 'lsOrderNo':acc}};
       }
   }
    console.log(JSON.stringify(transData));
    cordova.exec(pluginSucceed, failed, "gcPlugin", "pay", transData);
  }
  function refundQR(pluginSucceed,failed,traceNo,money){
    if(failed == null){
      failed = pluginFailed;
    }
    var ps = traceNo.split('_');
    var acc = item.accnt;
    if(!acc){
      acc = item.checkNum+""+item.checkSeq;
    }
    acc = acc+"C";
    var method = payCode == 'PUN_CARD'? '退货' : (payCode == 'PUN_UPAY'?"银联二维码退货":"微信/支付宝退货");
    var transData = {'transId':method,
  'transData':{'amt':Math.round(money),'orgRefNo':ps[0],'transDate':ps[2], 'lsOrderNo':acc}};
      console.log(JSON.stringify(transData));
      cordova.exec(pluginSucceed, failed, "gcPlugin", "pay", transData);
  }
  
function reDoFund(pluginSucceed, failed, traceNo, lastRefundId,item) {
  var acc = item.accnt;
  if(!acc){
    acc = item.checkNum+""+item.checkSeq;
  }
  acc = acc+"C";     
  var transData = {'transId':'按唯一订单号查询',
  'transData':{'lsOrderNo':acc}};
    console.log(JSON.stringify(transData));
    cordova.exec(pluginSucceed, failed, "gcPlugin", "pay", transData);
}
  function reAccount(pluginSucceed,failed,orderNo){
    var transData = {'transId':'按唯一订单号查询',
    'transData':{'lsOrderNo':(orderNo != null && orderNo.indexOf("_") > 0) ?  orderNo.split('_')[0]:orderNo}};
      console.log(JSON.stringify(transData));
    cordova.exec(pluginSucceed, failed, "gcPlugin", "pay", transData);

  }
  /**
   * 打印数据，
   * JsonData为数据json
   */
  function printData(pluginSucceed,failed,jsonData){
    if(failed == null){
      failed = pluginFailed;
    }
    cordova.exec(pluginSucceed, failed, "gcPlugin", "gcPrint", jsonData);
  }
  /**
 * 通用打印
 * JsonData为数据json
 */
function printPub(pluginSucceed, failed, jsonData) {
  if (failed == null) {
    failed = pluginFailed;
  }
  cordova.exec(pluginSucceed, failed, "gcPlugin", "pubPrint", jsonData);
}

  function printSimphonyData(pluginSucceed,failed,jsonData){
    if(failed == null){
      failed = pluginFailed;
    }
    cordova.exec(pluginSucceed, failed, "gcPlugin", "simphonyPrint", jsonData);
  }
  /**
   * 扫码结果回调函数里
   */
  function ScanData(pluginSucceed,failed){
    if(failed == null){
      failed = pluginFailed;
    }
    cordova.exec(pluginSucceed, failed, "gcPlugin", "gcScan", "");
  }
  function handWrite(pluginSucceed,failed,jsonData){
    if(failed == null){
      failed = pluginFailed;
    }
    cordova.exec(pluginSucceed, failed, "gcPlugin", "handwrite", jsonData);
  }
  function printDataSign(pluginSucceed,failed,jsonData){
    if(failed == null){
      failed = pluginFailed;
    }
    cordova.exec(pluginSucceed, failed, "gcPlugin", "PrintSign", jsonData);
  }
  
  /**
   * 设备信息
   */
  function getSysInfo(pluginSucceed,failed){
    if(failed == null){
      failed = pluginFailed;
    }
    cordova.exec(pluginSucceed, failed, "gcPlugin", "gcInfo","");
  }

  /**
   * 预授权
   * @param {*} pluginSucceed 
   * @param {*} failed 
   * @param {*} money 
   * @param {*} orderNo 
   */
  function preAuth(pluginSucceed,failed,money,orderNo){

    var transData = {'transId':'预授权',
    'transData':{'amt':Math.round(money),'lsOrderNo':orderNo}};
      console.log(JSON.stringify(transData));

    cordova.exec(pluginSucceed, failed, "gcPlugin", "pay", transData);
  }

  function addAuth(pluginSucceed,failed,money,authId,transDate,orderNo){
    alert('不支持');
  }
  
  function preAuthEnd(pluginSucceed,failed,money,authId,transDate,orderNo){

    var transData = {'transId':'预授权完成',
    'transData':{'amt':Math.round(money),'orgAuthCode':authId,'isFastPreAuth':true,'transDate':transDate,'lsOrderNo':orderNo}};
    console.log(JSON.stringify(transData));
    cordova.exec(pluginSucceed, failed, "gcPlugin", "pay", transData);
  }

  /**
   * 预授权撤销
   * @param {*} pluginSucceed 
   * @param {*} failed 
   * @param {*} money 
   * @param {*} authId 
   * @param {*} transDate 
   * @param {*} orderNo 
   */
  function preAuthVoid(pluginSucceed,failed,money,authId,transDate,orderNo){
    var transData = {'transId':'预授权撤销',
    'transData':{'amt':Math.round(money),'orgAuthCode':authId,'isFastPreAuth':true,'transDate':transDate,'lsOrderNo':orderNo}};
    console.log(JSON.stringify(transData));
    cordova.exec(pluginSucceed, failed, "gcPlugin", "pay", transData);
  }

  /**
   * 预授权完成撤销
   * @param {*} pluginSucceed 
   * @param {*} failed 
   * @param {*} refNo 
   * @param {*} orderNo 
   */
  function posVoid(pluginSucceed,failed,refNo,orderNo){
    var transData = {'transId':'预授权完成撤销',
    'transData':{'orgTraceNo':refNo,'lsOrderNo':orderNo}};
    console.log(JSON.stringify(transData));
    cordova.exec(pluginSucceed, failed, "gcPlugin", "pay", transData);
  }

    /**
   * 会员卡扫码
   * @param {*} pluginSucceed 
   * @param {*} failed 
   * @param {*} data 
   */
  function rfcScan(pluginSucceed,failed,data){
    if(failed == null){
      failed = pluginFailed;
    }
    cordova.exec(pluginSucceed, failed, "gcPlugin", "RFCard", data);
}
    /**
   * 房号扫码
   * @param {*} pluginSucceed 成功回调
   * @param {*} failed  失败回调可空
   * @param {*} data   数据块号，填写20
   */
  function rfcRoom(pluginSucceed,failed,data){
    if(failed == null){
      failed = pluginFailed;
    }
    cordova.exec(pluginSucceed, failed, "gcPlugin", "RFRoom", data);
  }
  function rfcRoomStop(){
    cordova.exec(null, null, "gcPlugin", "RFRoomStop","");
  }

  /**
   * 播放声音  1成功，0失败，其它待扩展
   * @param {*} data 
   */
  function playSound(data){
    cordova.exec(null, null, "gcPlugin", "playSound", data);
  }