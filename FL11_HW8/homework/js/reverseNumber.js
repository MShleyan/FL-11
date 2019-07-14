function reverseNumber(x){
var str= String(x);
var result='';
var temp=-1;
var endIndex=str.length;
for(var i=str.length-1;i>0;i--){
if(str.charAt(i)=="0")endIndex--;
else break;
}
str= str.substring(0,endIndex);
if(str.charAt(0)=='-'){result='-'; temp=0};
for(var i=str.length;i>temp;i--){
	result=result+str.charAt(i);
}	
return result;
}