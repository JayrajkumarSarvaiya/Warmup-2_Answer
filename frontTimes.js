function frontTimes(str, n){
  let lan = str.length;
  let temp ="";
  if(lan<=3)
  {
    for(let i=0; i<n; i++)
    {
      temp = temp + str;
    }
  }
  else
  {
    for(let j=0; j<n; j++)
    {
      temp = temp + str.substr(0,3);
    }
  }
  return temp;
}