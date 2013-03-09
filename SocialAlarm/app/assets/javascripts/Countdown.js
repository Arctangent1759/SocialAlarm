function countDown(date){
	//to do! Assuming that date is of type Date object as of now.
	var today = new Date();
	timeNow = today.getTime();
	timeAlarm = date.getTime();
	if(timeAlarm<timeNow){
		console.log("beep")
		window.clearInterval(i);
		//beep();
		return;
	}
	timeDiff = timeAlarm - timeNow;
	//Convert milliseconds to seconds.
	timeDiff = timeDiff/1000;
	//3600 seconds in an hour.
	hours = timeDiff/3600;
	//Number of minutes left.
	minutes = timeDiff%3600/60;
	seconds = (timeDiff%3600)%60;
	return [hours,minutes,seconds];
}

function updateClock(){
	var a = countDown(date);
	if(a){
		$(".clock-hours").html(Math.floor(a[0]));  
		if(a[1]<10){
			$(".clock-minutes").html("0"+Math.floor(a[1])); 
		}else{
			$(".clock-minutes").html(Math.floor(a[1])); 
		}
		if(a[2]<10){
			$(".clock-seconds").html("0"+Math.floor(a[2])); 
		}else{
			$(".clock-seconds").html(Math.floor(a[2]));
		}
 	}
 	else{
		if (window.location.pathname!="/alarms/new"){
			beep();
		}
 	}
}

var snd;
function beep(){
	snd = new Audio("http://dl.dropbox.com/u/56526468/file.wav"); // buffers automatically when created
	snd.addEventListener('ended', function() {
		this.currentTime = 0;
		this.play();
	}, false);
	snd.play();
	$(".metadata").hide();
	$(".checkin_phase").show();
	setInterval(checkDone,1000);
}

function stopBeep(){
	snd.pause();
}
function checkIn(){
	$.get(window.location.pathname.split(".")[0]+"/check_in");
}
function checkDone(){
	var json = $.getJSON(window.location.pathname.split(".")+".json",function(data) { 
		if (data.expected == 0){
			stopBeep();
		}
		$(".checkins_needed").html(data.expected);
	});
}

$(".checkin_phase").hide();
var i=setInterval(updateClock,1000);
