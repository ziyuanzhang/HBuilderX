//var SYS_DEVICE = "BOC";

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
function unionScan(pluginSucceed,failed,money,orderNo,pw){
  if(failed == null){
    failed = pluginFailed;
  }
  var transData = {'transType':'01',
  'AMOUNT':Math.round(money),
  'transData':{'channel_type':pw,'bill_info':orderNo}};
    //console.log(JSON.stringify(transData));
   cordova.exec(pluginSucceed, failed, "gcPlugin", "pay", transData);
}
  /**
 * 银行卡支付
 */
function unionPay(pluginSucceed,failed,money,orderNo){
  if(failed == null){
    failed = pluginFailed;
  }
  var transData = {'transType':'01',
  'AMOUNT':Math.round(money),
  'transData':{'channel_type':'cardPay','bill_info':orderNo}};

  cordova.exec(pluginSucceed, failed, "gcPlugin", "pay", transData);
  }
function getPayWay(data){
  if(!data.CARD_ISSUER){
    return "PUN_CARD";
  }
 if(data.CARD_ISSUER.indexOf("支付宝")>=0) return "PUN_ALIPAY";
 else if(data.CARD_ISSUER.indexOf("微信")>=0) return "PUN_WEIXIN";
 else if(data.CARD_ISSUER.indexOf("银联二维码")>=0) return "PUN_UPAY";
 else return "PUN_CARD";
}
function getPayWayName(value){
  if (value == null || value == "") return "";
  else if (value == "PUN_ALIPAY") return "支付宝";
  else if (value == "PUN_WEIXIN") return "微信支付";
  else if (value == "PUN_CARD") return "银行卡";
  else if (value == "PUN_UPAY") return "银联二维码";
  else return "其它";
}
function getPayWayPOS2(data){
  return "PUN_CARD";
}
function getPayWayPOS(data){
   if(!data.CARD_ISSUER){
     return "PUN_CARD";
   }
   if(data.CARD_ISSUER.indexOf("支付宝")>=0) return "PUN_ALIPAY";
   else if(data.CARD_ISSUER.indexOf("微信")>=0) return "PUN_WEIXIN";
   else if(data.CARD_ISSUER.indexOf("银联二维码")>=0) return "PUN_UPAY";
   else return "PUN_CARD";
}

  /**
   * 退款（traceNo为流水号）
   */
  function refund(pluginSucceed,failed,traceNo,credit,payCode,item,orderNo){
    if(failed == null){
      failed = pluginFailed;
    }
    console.log(orderNo);
    var transData = null;
    var acc = item.accnt;
    if(!acc){
        acc = item.checkNum+""+item.checkSeq;
    }
    var ps = traceNo.split('_');
    var payMoney = Math.round(item.amount * 100)
    if(payCode == "PUN" || payCode == "PUN_CARD"){
          transData = {'transType':'02',
          'AMOUNT':credit,
          'transData':{'channel_type':'cardPay','traceNo':ps[1],'bill_info':acc}};
   }else if(payCode == "PUN_UPAY"){
         transData = {'transType':'02',
         'AMOUNT':credit,
         'transData':{'channel_type':'unionPay','payVoucherNum':ps[0],'traceNo':ps[1],'bill_info':acc}};
   }else{
         transData = {'transType':'02',
           'AMOUNT':credit,
           'transData':{'channel_type':ps[2],'orderNo':ps[0],'traceNo':ps[1],'bill_info':acc}};
         }
    cordova.exec(pluginSucceed, failed, "gcPlugin", "pay", transData);
  }
  function getNowDate(){
    var d = new Date();
    var m = d.getMonth()+1;
    var day = d.getDate();
    return ""+d.getFullYear()+(m<10?'0'+m:m)+(day<10?'0'+day:day);
  }
  function refundQR(pluginSucceed,failed,traceNo,money){
    if(failed == null){
      failed = pluginFailed;
    }
    var transData = {'transType':'QRREFUND',
    'AMOUNT':Math.round(money),
    'transData':{'OLD_QRCODE_ORDER':(traceNo != null && traceNo.indexOf("_") > 0) ?  traceNo.split('_')[1]:traceNo}};
      cordova.exec(pluginSucceed, failed, "gcPlugin", "pay", transData);
  }
  
  
function reDoFund(pluginSucceed, failed, traceNo, lastRefundId) {
  if(failed == null){
    failed = pluginFailed;
  }
  var  transData = {'transType':'QUERY_TRANS_REC',
      'AMOUNT':0,
      'transData':{'OLD_REF_NO':(orderNo != null && orderNo.indexOf("_") > 0) ?  orderNo.split('_')[0]:orderNo}};
    cordova.exec(pluginSucceed, failed, "gcPlugin", "pay", transData);
}
function reAccount(pluginSucceed,failed,orderNo){
  if(failed == null){
    failed = pluginFailed;
  }
    var  transData = {'transType':'09',
      'AMOUNT':0,
      'transData':{'bill_info':orderNo}};
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
    var  transData = {'transType':'05',
      'AMOUNT':Math.round(money),
      'transData':{'bill_info':orderNo}};
    //  console.log(JSON.stringify(transData));
    cordova.exec(pluginSucceed, failed, "gcPlugin", "pay", transData);
  }

  function addAuth(pluginSucceed,failed,money,authId,transDate,orderNo){
    var  transData = {'transType':'ADDPREAUTH',
      'AMOUNT':Math.round(money),
      'transData':{'OLD_AUTH_ID':authId,'OLD_TRANS_DATE':transDate,'bill_info':orderNo}};
   //   console.log(JSON.stringify(transData));
    cordova.exec(pluginSucceed, failed, "gcPlugin", "pay", transData);
  }
  
  /**
   * 预授权完成
   * @param {*} pluginSucceed 
   * @param {*} failed 
   * @param {*} money 
   * @param {*} authId 
   * @param {*} transDate 
   * @param {*} orderNo 
   */

  function preAuthEnd(pluginSucceed,failed,money,authId,transDate,orderNo,item){
     var ps = item.orderNo.split("_");
     var  transData = {'transType':'07',
      'AMOUNT':Math.round(money),
      'transData':{'auth_code':authId,'bill_info':orderNo}};
   //   console.log(JSON.stringify(transData));
    cordova.exec(pluginSucceed, failed, "gcPlugin", "pay", transData);
  }

  /**
   * 预授权撤消
   * @param {*} pluginSucceed 
   * @param {*} failed 
   * @param {*} money 
   * @param {*} authId 
   * @param {*} transDate 
   * @param {*} orderNo 
   */
  function preAuthVoid(pluginSucceed,failed,money,authId,transDate,orderNo,item){
    var ps = item.orderNo.split("_");
    var  transData = {'transType':'06',
      'AMOUNT':Math.round(money),
      'transData':{'traceNo':ps[1],'tranDatetime':ps[2],'authNo':ps[3],'bill_info':orderNo}};
     // console.log(JSON.stringify(transData));
    cordova.exec(pluginSucceed, failed, "gcPlugin", "pay", transData);
  }

  /**
   * 预授权完成撤消
   * @param {*} pluginSucceed 
   * @param {*} failed 
   * @param {*} refNo 
   * @param {*} orderNo 
   */
  function posVoid(pluginSucceed,failed,refNo,orderNo,item){
    var ps = item.orderNo.split("_");
    var  transData = {'transType':'08',
      'AMOUNT':Math.round(item.money*100),
       'transData':{'traceNo':ps[1],'bill_info':orderNo}};
     console.log(JSON.stringify(transData));
    cordova.exec(pluginSucceed, failed, "gcPlugin", "pay", transData);
  }
  function rfcScan(pluginSucceed,failed,data){
    console.log(data);
    cordova.exec(pluginSucceed, failed, "gcPlugin", "RFCard", data);
  }