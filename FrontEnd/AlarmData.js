var date;
x=$.get(window.location.pathname.split(".")[0]+".json","hi",function(res){
	date = new Date(res.alarm_time);
	$(".name").html(res.name);
	$(".description").html(res.description);
	$(".alarmtime").html((function (x){return x.getHours()+":"+x.getMinutes()+":"+x.getSeconds()+" on "+x.getDay()+"/"+x.getMonth()+"/"+x.getFullYear()})(date));
	$(".checkins").html(res.expected);
},"json");
