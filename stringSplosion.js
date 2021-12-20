function stringSplosion(str){
  let len = str.length;
  let temp ="";
  
  for(let i=0; i<len+1; i++)
  {
    temp = temp + str.substring(0,i);
  }
  return temp;
}