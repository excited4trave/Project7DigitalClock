
addEventListener("load",show_time());
show_time();
function show_time(){

var date=new Date();

var dayNumber=date.getDay();
var weekDays=["Sunday","Tuesday","Monday","Wednesday","Thursday","Friday","Sat","Sun"];

var h=date.getHours();
var m=date.getMinutes();
var s=date.getSeconds();
var ampm="";

document.getElementById("day").innerHTML=weekDays[dayNumber];
document.getElementById("hour").innerHTML=h;
document.getElementById("minute").innerHTML=m;
document.getElementById("seconds").innerHTML=s;

if(h<12){
    ampm="AM";
}else{
    ampm="PM";
}

document.getElementById("ampm").innerHTML=ampm;

setInterval(show_time,1000);

}
