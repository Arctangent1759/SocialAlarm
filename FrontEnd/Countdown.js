function Countdown(date){
	//to do! Assuming that date is of type Date object as of now.
	var today = new Date();
	timeNow = today.getTime();
	timeAlarm = date.getTime();
	if(timeAlarm>timeNow){
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
