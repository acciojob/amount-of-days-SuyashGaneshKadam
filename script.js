//your JS code here. If required.
function daysOfAYear(year){
	if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return 366;
    } else {
        return 365;
    }
}