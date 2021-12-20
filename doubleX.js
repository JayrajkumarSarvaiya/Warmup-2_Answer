function doubleX(str){
  for(let i=0; i<str.length-1; i++)
  {
    if(str.charAt(i)=='x')
    {
      if (str.charAt(i+1)=='x')
      {
        return true;
      } 
      else 
      {
        return false;
      }
    }
 }
  return false;
}