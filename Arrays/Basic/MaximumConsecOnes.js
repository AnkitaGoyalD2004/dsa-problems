class Solution {
     findMaxConsecutiveOnes(nums) {
      let count = 0 
    let prevCount = 0
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] == 1){
            count++ ;
        }
       else if(nums[i] == 0 ){
        count = 0
       }
        if(prevCount < count)
            prevCount = count
    }
    return prevCount
    }
}