var pluginFailed = function (echoValue) {
  if (typeof echoValue == "string")
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
function getSystem() {
  var ssv = localStorage.system;
  if (!ssv) {
    localStorage.setItem("system", 1);
    ssv = "1";
  }
  return ssv;
}

function unionScan(pluginSucceed, failed, money, orderNo) {
  if (failed == null) {
    failed = pluginFailed;
  }
  var ssv = getSystem();
  orderNo = setUniOrderNo(orderNo,ssv);
  function unionScanPay(value) {
    var transData = {
      'sceneCode': getSceneCode(ssv),
      'userCode': "Admin",
      'totalFee': (money / 100.0).toFixed(2),
      'transType': '01',
      'authCode': value,
      'hotelOutId': orderNo,
      'descript': '扫码支付'
    };
    setHotelInfo(transData, ssv);

    cordova.exec(pluginSucceed, failed, "gcPlugin", "pay", transData);
  }
  cordova.exec(unionScanPay, failed, "gcPlugin", "gcScan", "");
}


/**
 * 银行卡支付
 */
function unionPay(pluginSucceed, failed, money, orderNo) {
  alert("不支持的支付类型");
}

function getPayWay(data) {
  if (data.CARD_ISSUER.indexOf("支付宝支付") >= 0) return "PUN_ALIPAY";
  else if (data.CARD_ISSUER.indexOf("微信支付") >= 0) return "PUN_WEIXIN";
  else if (data.CARD_ISSUER.indexOf("云闪付支付") >= 0) return "PUN_UPAY";
  else return "PUN_CARD";
}

function getPayWayName(value) {
  if (value == null || value == "") return "";
  else if (value == "PUN_ALIPAY") return "支付宝";
  else if (value == "PUN_WEIXIN") return "微信";
  else if (value == "PUN_CARD") return "银行卡";
  else if (value == "PUN_UPAY") return "银联云闪付";
  else if (value == "PUN_ROOM") return "客房挂账";
  else if (value == "RCV") return "储值卡";
  else return "其它";
}

function getPayWayPOS(data) {

  if (data.CARD_ISSUER.indexOf("支付宝支付") >= 0) return "PUN_ALIPAY";
  else if (data.CARD_ISSUER.indexOf("微信支付") >= 0) return "PUN_WEIXIN";
  else if (data.CARD_ISSUER.indexOf("云闪付支付") >= 0) return "PUN_UPAY";
  else return "PUN_CARD";
}

function getTransModel(payCode) {
  if (payCode == "PUN_ALIPAY") return "01";
  if (payCode == "PUN_WEIXIN") return "02";
  if (payCode == "PUN_UPAY") return "03";
  else return "99";

}
/**
 * 退款（traceNo为流水号）
 */
function refund(pluginSucceed, failed, traceNo, credit, payCode, item) {
  if (failed == null) {
    failed = pluginFailed;
  }
  var tr = (traceNo != null && traceNo.indexOf("_") > 0) ? traceNo.split('_')[1] : traceNo
  var ssv = getSystem();
  var orderNo =  ssv == "1" ? item.accnt : (ssv == "2" ? item.id : item.checkNum + "" + item.checkSeq);
  orderNo = setUniOrderNo(orderNo,ssv);
  var refundId = tr + "_T";
  if (ssv == "3" && item.refundNo) {
    refundId = item.refundNo + "T";
  }
  else{
    refundId = setUniOrderNo(refundId,ssv);
  }
  var transData = {
    'sceneCode': getSceneCode(ssv),
    'userCode': "Admin",
    'totalFee': (credit / 100.0).toFixed(2),
    'transType': '04',
    'transMode': getTransModel(payCode),
    'authCode': null,
    'orgGcsn': tr,
    'refundId': refundId,
    'hotelOutId':orderNo,
    'descript': '扫码退款'
  };

  setHotelInfo(transData, ssv);
  //console.log(transData);
  cordova.exec(pluginSucceed, failed, "gcPlugin", "pay", transData);
}

function reAccount(pluginSucceed, failed, orderNo) {
  if (failed == null) {
    failed = pluginFailed;
  }
  var ssv = getSystem();
  orderNo = setUniOrderNo(orderNo,ssv);
  var transData = {
    'sceneCode': getSceneCode(ssv),
    'userCode': "Admin",
    'transType': '07',
    'authCode': null,
    'hotelOutId': orderNo
  };
  setHotelInfo(transData, ssv);

  cordova.exec(pluginSucceed, failed, "gcPlugin", "pay", transData);
}

function getSceneCode(v) {
  return v == "1" ? "posapp" : (v == "2" ? "anypay" : "simphony");
}

function reDoFund(pluginSucceed, failed, traceNo, lastRefundId,item) {
  if (failed == null) {
    failed = pluginFailed;
  }
  var tr = (traceNo != null && traceNo.indexOf("_") > 0) ? traceNo.split('_')[1] : traceNo
  var ssv = getSystem();
  var refundId = tr + "_T";
  if (ssv == "3" && lastRefundId) {
    refundId = lastRefundId + "T";
  }
  var transData = {
    'sceneCode': getSceneCode(ssv),
    'userCode': "Admin",
    'transType': '07',
    'authCode': null,
    'refundId': refundId,
  };
  setHotelInfo(transData, ssv);
  cordova.exec(pluginSucceed, failed, "gcPlugin", "pay", transData);
}

function setHotelInfo(transData, ssv) {
  var gatewayJson = localStorage.getItem(ssv == "1" ? "gateway" : (ssv == "2" ? "anygateway" : "simgateway"));
  var gateway = null;
  if (gatewayJson != null) {
    gateway = JSON.parse(gatewayJson);
    transData.hotelGroupCode = gateway.hotelGroupCode;
    transData.hotelCode = gateway.hotelCode;
  }
}

function setUniOrderNo(orderNo, ssv) {
  var gatewayJson = localStorage.getItem(ssv == "1" ? "gateway" : (ssv == "2" ? "anygateway" : "simgateway"));
  if (gatewayJson != null) {
    var gateway = JSON.parse(gatewayJson);
    return gateway.hotelCode + "_" + orderNo;
  }
  return orderNo;
}
/**
 * 打印数据，
 * JsonData为数据json
 */
function printData(pluginSucceed, failed, jsonData) {
  if (failed == null) {
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

function printSimphonyData(pluginSucceed, failed, jsonData) {
  if (failed == null) {
    failed = pluginFailed;
  }
  cordova.exec(pluginSucceed, failed, "gcPlugin", "simphonyPrint", jsonData);
}
/**
 * 扫码结果回调函数里
 */
function ScanData(pluginSucceed, failed) {
  if (failed == null) {
    failed = pluginFailed;
  }
  cordova.exec(pluginSucceed, failed, "gcPlugin", "gcScan", "");
}

function handWrite(pluginSucceed, failed, jsonData) {
  if (failed == null) {
    failed = pluginFailed;
  }
  cordova.exec(pluginSucceed, failed, "gcPlugin", "handwrite", jsonData);
}

function printDataSign(pluginSucceed, failed, jsonData) {
  if (failed == null) {
    failed = pluginFailed;
  }
  cordova.exec(pluginSucceed, failed, "gcPlugin", "PrintSign", jsonData);
}
function printDcData(pluginSucceed, failed, jsonData) {
  if (failed == null) {
    failed = pluginFailed;
  }
  console.log(JSON.stringify(jsonData));
  cordova.exec(pluginSucceed, failed, "gcPlugin", "dcPrint", jsonData);
}

/**
 * 设备信息
 */
function getSysInfo(pluginSucceed, failed) {
  if (failed == null) {
    failed = pluginFailed;
  }
  cordova.exec(pluginSucceed, failed, "gcPlugin", "gcInfo", "");
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

/**
 * 设备信息
 */
function getSn(pluginSucceed, failed) {
  if (failed == null) {
    failed = pluginFailed;
  }
  cordova.exec(pluginSucceed, failed, "gcPlugin", "getSN", "");
}