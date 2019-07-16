function getNumbers(str){

var array=[];
var j=0;
for (var i in str){
	if ( parseInt(str[i]) ) {
    array[j]= str[i]
    j++;
  }
}
return array;
}

function findTypes(){
	var numbers=0;
	var booleans=0;
	var strings=0;
	var objects=0;
for(var i=0; i<arguments.length;i++)
	{
		if(typeof(arguments[i])=="number")numbers++;
			else if(typeof(arguments[i])=="boolean")booleans++;
				else if(typeof(arguments[i])=="string")strings++;
					else if(typeof(arguments[i])=="object")objects++;

	}
	var result={
		number: numbers,
		boolean: booleans,
		string: strings,
		object: objects
	};
	return result.boolean;

}
function executeforEach(array){
   arguments[1](array);

}

function mapArray(array){
	var arr=[];
	for (var i = 0; i < arguments[0].length; i++) {
		arr[i]=arguments[1](arguments[0][i]);
	}
  return arr;
}
function filterArray(array){
	var arr=[];
	for (var i = 0; i < arguments[0].length; i++) {
		if(arguments[1](arguments[0][i])==true)arr.push(arguments[0][i]);
	}
  return arr;
}
function showFormattedDate(date){
	
	var month='';
	switch(date.getMonth()){
		case 0: month="Jan"; break;
		case 1:month="Feb";break;
		case 2:month="Mar";break;
		case 3:month="Apr";break;
		case 4:month="May";break;
		case 5:month="Jun";break;
		case 6:month="Jul";break;
		case 7:month="Aug";break;
		case 8:month="Sep";break;
		case 9:month="Oct";break;
		case 10:month="Nov";break;
		case 11:month="Dec";break;
	}
	var dates="Date: "+ month+' '+date.getDate()+" "+date.getFullYear();
return dates;
}

function canConvertToDate(str){
	var date=new Date(str);
	if(date=="Invalid Date")return false;else return true;
}

function daysBetween(date1, date2){
var days = Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
return days;
}
function getAmountOfAdultPeople(data){
var currentDate=new Date;
var num=0;
for (var i = 0; i < arguments.length; i++) {
var temp=new Date(arguments[i].birthday);

if(daysBetween(currentDate,temp)>6570)num++;
}
return num;
}


function keys(obj){
	return Object.keys(obj);
}
function values(obj){
	return Object.values(obj);
}
