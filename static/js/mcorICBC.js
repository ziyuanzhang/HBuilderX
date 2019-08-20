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

  //money = "1";
  if(failed == null){
    failed = pluginFailed;
  }
  var transData = {'transType':'MULTI_PURCHASE',
  'AMOUNT':Math.round(money),
  'transData':{'TRANS_LIST':'QRPURCHASE','bill_info':orderNo}};
   console.log(JSON.stringify(transData));
   cordova.exec(pluginSucceed, failed, "gcPlugin", "pay", transData);
  }
  /**
 * 银行卡支付
 */
function unionPay(pluginSucceed,failed,money,orderNo){
  console.log(money);
  //money = "1";
  if(failed == null){
    failed = pluginFailed;
  }
  var transData = {'transType':'MULTI_PURCHASE',
  'AMOUNT':Math.round(money),
  'transData':{'TRANS_LIST':'PURCHASE','bill_info':orderNo}};

  cordova.exec(pluginSucceed, failed, "gcPlugin", "pay", transData);
  }
  function getPayWay(data){
    if(!data.CARD_ISSUER){
      return "PUN_CARD";
    }
    if(data.CARD_ISSUER.indexOf("支付宝")>=0) return "PUN_ALIPAY";
    else if(data.CARD_ISSUER.indexOf("微信支付")>=0) return "PUN_WEIXIN";
    else if(data.CARD_ISSUER.indexOf("二维码消费")>=0) return "PUN_UPAY";
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
      else if(data.CARD_ISSUER.indexOf("微信支付")>=0) return "PUN_WEIXIN";
      else if(data.CARD_ISSUER.indexOf("二维码消费")>=0) return "PUN_UPAY";
      else return "PUN_CARD";
   }

  /**
   * 退款（traceNo为流水号）
   */
  function refund(pluginSucceed,failed,traceNo,credit,payCode,item,orderNo){
    if(failed == null){
      failed = pluginFailed;
    }

    var transData = null;
    if(!orderNo){
         orderNo = item.accnt;
        if(!orderNo){
          orderNo = item.checkNum+""+item.checkSeq;
        }
        orderNo = orderNo+"C";
    }
    if(payCode == "PUN" || payCode == "PUN_CARD"){
      transData = {'transType':'POS_VOID',
      'AMOUNT':0,
      'transData':{'OLD_REF_NO':traceNo,'bill_info':orderNo}};
    }
    else{
      transData = {'transType':'QRREFUND',
      'AMOUNT':credit,
      'transData':{'LAST_OF_CARDNO':'','OLD_QRCODE_ORDER':(traceNo != null && traceNo.indexOf("_") > 0) ?  traceNo.split('_')[1]:traceNo,'bill_info':orderNo}};
    }
    cordova.exec(pluginSucceed, failed, "gcPlugin", "pay", transData);
  }
  function refundQR(pluginSucceed,failed,traceNo,money){
    if(failed == null){
      failed = pluginFailed;
    }
    var orderNo = item.accnt;
    if(!orderNo){
      orderNo = item.checkNum+""+item.checkSeq;
    }
    orderNo = orderNo+"C";
    var transData = {'transType':'QRREFUND',
    'AMOUNT':Math.round(money),
    'transData':{'OLD_QRCODE_ORDER':(traceNo != null && traceNo.indexOf("_") > 0)? traceNo.split('|')[1]:traceNo,'bill_info':orderNo }};
      cordova.exec(pluginSucceed, failed, "gcPlugin", "pay", transData);
  }
  function reDoFund(pluginSucceed, failed, traceNo, lastRefundId,item) {
    if(failed == null){
      failed = pluginFailed;
    }  
    var orderNo = lastRefundId;
    if(!orderNo){
      orderNo = item.checkNum+""+item.checkSeq;
      orderNo = orderNo+"C";  
    }
    var  transData = {'transType':'QUERY_TRANS_REC',
      'AMOUNT':0,
      'transData':{'EXT_ORDER_NO':orderNo}};
    cordova.exec(pluginSucceed, failed, "gcPlugin", "pay", transData);
  }
  
  function reAccount(pluginSucceed,failed,orderNo){
    if(failed == null){
      failed = pluginFailed;
    }
    var  transData = {'transType':'QUERY_TRANS_REC',
      'AMOUNT':0,
      'transData':{'EXT_ORDER_NO':orderNo}};
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