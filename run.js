unit = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve"]
ten = ["zero","ten","twenty","thirty"]
past_ten = ["ten","eleven","twelve", "thirteen", "fourteen", "fiveteen", "sixteen", "seventeen", "eighteen", "nineteen"]

hour = parseInt(prompt("Hour"));
minute = parseInt(prompt("Minute"));

function get_time(hour,minute){
	if (minute == 0) { return unit[hour]+" o' clock"; }
	if (minute == 60) { return unit[hour+1]+" o' clock"; }
	if (minute <= 30) { return get_minute(minute)+" past "+unit[hour]; }
	return get_minute(60-minute)+" to "+unit[hour+1];
}

function get_minute(minute){
	if (minute == 30) { return "half"; }
	if (minute == 15 || minute == 45) { return "quarter"; }
	if (minute == 1) { return "one minute"; }
	if (minute <= 10) { return unit[minute]+" minutes"; }
	if (minute <20) { return past_ten[minute-10]+" minutes"; }
	if (minute%10 == 0) { return ten[minute/10]+" minutes"; }
	return ten[parseInt(minute/10)]+" "+unit[minute%10]+" minutes";
}
document.getElementById("answer").innerHTML = get_time(hour,minute);
