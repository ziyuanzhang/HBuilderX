var APPID="2aaf0f13b92c46988204e1498148ebf1";//正式
//var APPID="201705041538001234567887654321";
//var SYS_DEVICE = "PUN";
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
  console.log(money);
  //money = "1";
  if(failed == null){
    failed = pluginFailed;
  }
   var appName = "POS 通";
   var bizName = "扫一扫";
   var transData = {'amt':Math.round(money),'isNeedPrintReceipt':'false','appId':APPID,"extOrderNo":orderNo,"extBillNo":orderNo};
   cordova.exec(pluginSucceed, failed, "UPosPlugin", "CallTrans", [{'AppName':appName,'BizName':bizName,'TransData':transData}]);
  }
function getPayWay(data){
if(data.cardNo != "" && data.cardNo != "0000000000000000"){
  return "PUN_CARD";
}
 var memInfo = data.memInfo;
 var json = JSON.parse(memInfo);
 if(json.channelName == "支付宝钱包") return "PUN_ALIPAY";
 else if(json.channelName == "微信钱包") return "PUN_WEIXIN";
 else if(json.channelName == "银联二维码") return "PUN_UPAY";
 else return "PUN";
}
function getPayWayName(value){
  if (value == null || value == "") return "";
  else if (value == "PUN_ALIPAY") return "支付宝";
  else if (value == "PUN_WEIXIN") return "微信";
  else if (value == "PUN_CARD") return "银行卡";
  else if (value == "PUN_UPAY") return "银联云闪付";
  else if (value == "RCV") return "储值卡";
  else return "其它";
}
function getPayWayPOS(data){
  if(data.cardNo != "" && data.cardNo != "0000000000000000"){
    return "PUN_CARD";
  }
   var memInfo = data.memInfo;
   var json = JSON.parse(memInfo);
   if(json.channelName == "支付宝钱包") return "PUN_ALIPAY";
   else if(json.channelName == "微信钱包") return "PUN_WEIXIN";
   else if(json.channelName == "银联二维码") return "PUN_UPAY";
   else return "PUN";
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
   var appName = "银行卡收款";
   var bizName = "消费";
   var transData = {'amt':Math.round(money),'appId':APPID,"extOrderNo":orderNo,"extBillNo":orderNo};
   cordova.exec(pluginSucceed, failed, "UPosPlugin", "CallTrans", [{'AppName':appName,'BizName':bizName,'TransData':transData}]);
  }
  /**
   * 退款（traceNo为流水号）
   */
  function refund(pluginSucceed,failed,traceNo,credit,payCode,item,orderNo){
  if(failed == null){
    failed = pluginFailed;
  }
   var appName = "公共资源";
   var bizName = "撤销";
   if(!orderNo){
     orderNo = item.accnt;
    if(!orderNo){
      orderNo = item.checkNum+""+item.checkSeq;
    }
    orderNo = orderNo+"CT";
  }
   var transData = {'orgTraceNo':traceNo,'appId':APPID,"extOrderNo":orderNo,"extBillNo":orderNo};
   cordova.exec(pluginSucceed, failed, "UPosPlugin", "CallTrans", [{'AppName':appName,'BizName':bizName,'TransData':transData}]);
  }
  function reDoFund(pluginSucceed, failed, traceNo, lastRefundId,item) {     
    if(failed == null){
      failed = pluginFailed;
    }
     var appName = "公共资源";
     var bizName = "交易明细";
     var orderNo = lastRefundId;
     if(!orderNo){
      orderNo = item.checkNum+""+item.checkSeq;
      orderNo = orderNo+"CT";
     }
     var transData = {'extOrderNo':orderNo,'appId':APPID};
     cordova.exec(pluginSucceed, failed, "UPosPlugin", "CallTrans", [{'AppName':appName,'BizName':bizName,'TransData':transData}]);
  }
  function reAccount(pluginSucceed,failed,orderNo){
  if(failed == null){
    failed = pluginFailed;
  }
   var appName = "公共资源";
   var bizName = "交易明细";
   var transData = {};
   if(orderNo == "000000"){
    transData = {"traceNo":orderNo,'appId':APPID};
   }
   else{
    transData = {'extOrderNo':orderNo,"extBillNo":orderNo,'appId':APPID};
   }
   cordova.exec(pluginSucceed, failed, "UPosPlugin", "CallTrans", [{'AppName':appName,'BizName':bizName,'TransData':transData}]);
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
    cordova.exec(pluginSucceed, failed, "UPosPlugin", "GetBaseSysInfo", [{data:""}]);
  }
