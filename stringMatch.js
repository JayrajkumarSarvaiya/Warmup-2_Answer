function stringMatch(a, b){
  let len = Math.min(a.length, b.length);
  len count = 0;
  
  for(let i=0; i<len-1; i++)
  {
    let asub = a.substring(i,i+2);
    let bsub= b.substring(i,i+2);
    
    if(asub == bsub)
      count++
  }
  return count;
}