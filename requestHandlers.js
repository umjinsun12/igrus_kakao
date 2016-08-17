var forecast = require("./app/weather");




function keyboard(response, postData){
  console.log("keyboard was called.");
  var resObj = {
    "type": "buttons",
    "buttons": [
        "테스트",
        "날씨보기",
        "메뉴3",
        "메뉴4",
        "메뉴5"
    ]
  }

  var resStr = JSON.stringify(resObj);
  response.writeHead(200,{"Content-Type" : "text/plain"});
  response.write(resStr);
  response.end();
}

function message(response ,postData) {
  console.log("message was called.");
  var reqData = JSON.parse(postData);
  var weatherMsg;



  console.log("resData : ", weatherMsg);

  var resObj = {
    "message":{
      "text" : "다른 버튼은 누르지 마세요."
    },
    "keyboard": {
      "type": "buttons",
      "buttons": [
        "테스트",
        "날씨보기",
        "메뉴3",
        "메뉴4",
        "메뉴5"
      ]
    }
  }

  if(reqData.content === "테스트"){
    resObj.message ={"text" : "메세지를 응답합니다. 축하합니당."};

    var resStr = JSON.stringify(resObj);
    response.writeHead(200,{"Content-Type" : "text/plain"});
    response.write(resStr);
    response.end();
  }
  if(reqData.content === "날씨보기"){
    forecast.getKoreanWeather('인천','남구','용현1동',function(err, topObj, midObj, leafObj, resData){
      resObj.message ={"text" : "인하대학교의 오늘 날씨는 \n'" + resData.wfKor + "' 이고\n기온은 \n'" + resData.temp +"'도 입니다."};
      var resStr = JSON.stringify(resObj);
      response.writeHead(200,{"Content-Type" : "text/plain"});
      response.write(resStr);
      response.end();
    });
  }


}

exports.keyboard = keyboard;
exports.message = message;
