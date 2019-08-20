//var SYS_DEVICE = "BCM";

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
  var transData = {'transType':'01',
  'AMOUNT':Math.round(money),
  'transData':{'consum_type':'codePay','bill_info':orderNo}};

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
 var transData = {'transType':'01',
  'AMOUNT':Math.round(money),
  'transData':{'consum_type':'cardPay','bill_info':orderNo}};

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
  else if (value == "RCV") return "储值卡";
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
  function refund(pluginSucceed,failed,traceNo,credit,payCode,item){
    if(failed == null){
      failed = pluginFailed;
    }
    console.log(payCode);
    var transData = null;
    if(payCode == "PUN" || payCode == "PUN_CARD"){
      var ps = traceNo.split('_');
      var orderNo = item.accnt;
          if(!orderNo){
              orderNo = item.checkNum+""+item.checkSeq;
          }
         orderNo = orderNo+"C";
      var payMoney = Math.round(item.money * 100)
      //相同金额当天走撤消
//      if(credit == payMoney && ps[2] == getNowDate()){
        transData = {'transType':'02',
        'AMOUNT':credit,
        'transData':{'oldTrace':ps[1],'bill_info':orderNo}};
//      }
//      else{
//        transData = {'transType':'03',
//        'AMOUNT':credit,
//        'transData':{'oldReferenceNo':ps[0],'return_type':'card','bill_info':orderNo}};
//      }
    }
    else{
      var ps = traceNo.split('_');
      transData = {'transType':'03',
      'AMOUNT':credit,
      'transData':{'return_type':'code','bill_info':orderNo}};
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
    var ps = traceNo.split('_');
    var method = payCode == 'PUN_CARD'? '退货' : (payCode == 'PUN_UPAY'?"银联二维码退货":"微信/支付宝退货");
    var transData = {'transId':method,
  'transData':{'amt':Math.round(money),'orgRefNo':ps[0],'transDate':ps[2], 'lsOrderNo':item.accnt+'C'}};

    console.log(JSON.stringify(transData));
      cordova.exec(pluginSucceed, failed, "gcPlugin", "pay", transData);
  }
  
function reDoFund(pluginSucceed, failed, traceNo, lastRefundId,item) {     
  var transData = {'transId':'按唯一订单号查询',
  'transData':{'lsOrderNo':item.accnt+'C'}};
    console.log(JSON.stringify(transData));
    cordova.exec(pluginSucceed, failed, "gcPlugin", "pay", transData);
}
/**
*交易核对
*/
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
     * 通用打印
     * JsonData为数据json
     */
    function printPub(pluginSucceed, failed, jsonData) {
      if (failed == null) {
        failed = pluginFailed;
      }
      cordova.exec(pluginSucceed, failed, "gcPlugin", "pubPrint", jsonData);
    }