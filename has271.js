function has271(nums){
  let len = nums.length;
  
  for(let i=0; i<len; i++)
  {
    if((nums[i]==2)&&(nums[i+1]==7)&&(nums[i+2]==1))
      return true;
  }
  return false;
}