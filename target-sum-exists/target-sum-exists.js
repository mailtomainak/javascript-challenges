const targetSumExistsInTwoNumbers = (list, target) => {
  
  const inputSpace = [...list,...list.map(number=>number*2)];
  const inputSpaceLength = inputSpace.length;
  let possibleCombinations=[];

  //loop inside a loop thankfully its a smaller array
  for(var i=0;i<inputSpaceLength;i++){
    for(var j=0;j<inputSpaceLength;j++){
      if(j!==i){
      possibleCombinations.push(inputSpace[i]+inputSpace[j]);
      }
    }
  }
  
  return possibleCombinations.filter(num=>num===target).length!==0?true:false
}

const targetSumExistsInThreeNumbers = (list, target) => {
  return false
}

module.exports = {
  targetSumExistsInTwoNumbers,
  targetSumExistsInThreeNumbers
}
