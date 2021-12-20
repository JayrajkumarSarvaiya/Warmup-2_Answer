function last2(str){
  let len = str.length;
  if(len < 2)
  {
    return 0;
  }
  let end = str.substring(len-2);
  let count = 0;
  
  for(let i=0; i<len-2; i++)
  {
    let sub = str.substring(i,i+2);
    if(sub === end)
    {
      count ++;
    }
  }
  return count;
}