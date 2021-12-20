function noTriples(nums){
  let len = nums.length;
  
  for(let i=0; i<len-2; i++)
  {
    if((nums[i] == nums[i+1]) && (nums[i] == nums[i+2]))
      return false;
  }
  return true;
}