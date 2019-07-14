function addOne(value){
  return 1+ value;
}
function pipe(a, f) {
 for(var i=1;i<arguments.length;i++)
  a=arguments[i](a);
  return a;
}

