function getMin(x){
	var Min=arguments[0];
for(var i=0;i<arguments.length;i++)
{
if(arguments[i]<Min)Min=arguments[i];
}
return Min;
}