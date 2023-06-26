var hour=document.getElementById("hour");
var min=document.getElementById("min");
var sec=document.getElementById("sec");

var dates=document.getElementById("date");
var month=document.getElementById("month");
var years=document.getElementById("years");


var sun=document.getElementById("sun");
var mon=document.getElementById("mon");
var tue=document.getElementById("tue");
var wed=document.getElementById("wed");
var thu=document.getElementById("thu");
var fri=document.getElementById("fri");
var sat=document.getElementById("sat");



var date = new Date();

  var second=date.getSeconds();
 sec.innerHTML=second;

 var minute=date.getMinutes();
 min.innerHTML=minute;

 var hur=date.getHours();
 hour.innerHTML=hur;

 var dte=date.getDate();
 dates.innerHTML=dte;

 var moth=date.getMonth();
 month.innerHTML=moth+1;

 var yrs=date.getFullYear();
 years.innerHTML=yrs;

 var dy=date.getDay();


setInterval(function(){
    second++;
    sec.innerHTML=second;
    min.innerHTML=minute+":";
    hour.innerHTML=hur+":";
    if(second<10){
        sec.innerHTML="0"+second;
    }
    if(second>59){
        second="0"+0;
        sec.innerHTML=second;
        minute++;
        min.innerHTML=minute;
    }
    if(minute<10){
        min.innerHTML="0"+minute;
    }
    if(minute>59){
        minute="0"+0;
        min.innerHTML=minute;
        hur++;
        hour.innerHTML=hur;
    }
 if(hur<10){
     hour="0"+hur;
 }
 if(hur>23){
    hur="0"+0;
    hour.innerHTML=hur;
    dte++;
    dates.innerHTML=dte;
 }
 if(moth===0||month===2||month===4||month===6||month===7||month===9||month===11){
    if(dte>31){
    dte=1;
    dates.innerHTML=dte;
    moth++;
    month.innerHTML=moth+1;
    }
 }
 else if(moth===1||moth===3||moth===5||moth===8||moth===10){
    if(dte>30){
        dte=1;
        dates.innerHTML=dte;
        moth++;
        month.innerHTML=moth+1;
        }
 }
 if(yrs%4==0){
    if(dte>29){
        dte=1;
        dates.innerHTML=dte;
        moth++;
        month.innerHTML=moth+1;
        }
 }
 if(yrs%4!=0){
    if(dte>28){
        dte=1;
        dates.innerHTML=dte;
        moth++;
        month.innerHTML=moth+1;
        }
 }

 switch (dy+1){
    case 0:
    sun.style.color="red";
      break;
    case 1:
    mon.style.color="red";
      break;
    case 2:
    tue.style.color="red";
      break;
    case 3:
    wed.style.color="red";
      break;
    case 4:
    thu.style.color="red";
      break;
    case 5:
     fri.style.color="red";
      break;
    case 6:
    sat.style.color="red";
  }

},1000,second)

