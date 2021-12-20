function arrayFront9(nums){
  let len = nums.length;
  if(len <= 4)
  {
    for(let i=0; i<len; i++)
    {
      if(nums[i] == 9)
      {
        return true;
      } 
    }
  }
  else
  {
    for(let j=0; j<4; j++)
    {
      if(nums[j] == 9)
      {
        return true;
      }
    }
  }
  return false;
}