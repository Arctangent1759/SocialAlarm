var date = new Date("2013-03-09T12:27:00.000Z");
$(".name").html("Title")
$(".description").html("Insert embedded ruby here that will insert the description of the alarm i don't know what i'm saying it's late.")
$(".alarmtime").html((function (x){return x.getHours()+":"+x.getMinutes()+":"+x.getSeconds()+" on "+x.getDay()+"/"+x.getMonth()+"/"+x.getFullYear()})(date))
$(".checkins").html("5")
