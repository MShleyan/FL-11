function formatTime(minutes){
var days=0, hours=0;
while(minutes-1440>=0)
{
minutes=minutes-1440;
days++;
}
while(minutes-60>=0)
{
minutes=minutes-60;
hours++;
}

var result= days+ " day(s) "+ hours +" hour(s) " + minutes +" minute(s).";
return result;
}