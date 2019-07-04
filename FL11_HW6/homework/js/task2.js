var a=prompt("Введите a",0);
var b=prompt("Введите b",0);
var c=prompt("Введите c",0);
if( ((a*1+b*1)<c*1)|| ((a*1+c*1)<b*1)|| ((b*1+c*1)<a*1))console.log("Triangle doesn’t exist");
else{
	if(a*1==b*1 &&a*1==c*1)console.log("Eequivalent triangle");
		else if( ((a*1==b*1)&&(a*1!=c*1)) || ((a*1==c*1)&&(a*1!=b*1)) ||((c*1==b*1)&&(a*1!=c*1))) console.log("Isosceles triangle");
			else console.log("Normal triangle");
}
