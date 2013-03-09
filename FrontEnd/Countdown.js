function Countdown(date){
	Date today = new Date();
	timeNow = today.getTime();
	timeAlarm = date.getTime();
	timeDiff = timeAlarm - timeNow;
	//Convert milliseconds to seconds.
	timeDiff = timeDiff/1000;
	//3600 seconds in an hour.
	hours = timeDiff/3600;
	//Number of minutes left.
	minutes = timeDiff%3600/60;
	seconds = (timeDiff%3600)%60;
	setTimer()
}