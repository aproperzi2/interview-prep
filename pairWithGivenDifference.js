function pairWithGivenDifference(list, diff) {
  // Create new set object
  let set1 = new Set();
  // iterate through list as many times as it's length
  for (let i = 0; i < list.length; i++) {
    // target that number at the current index with e
    let currNum = list[i]
    // if the set object has the value of the difference + the current number, 
    // return an array with the difference + the current number and the number 
    if (set1.has(diff + currNum)) {
      return [diff + currNum, currNum]
    }
    // if the set has the value of the current number - the difference, 
    // return an array with the current number - the difference and the current number
    if (set1.has(currNum - diff)) {
      return [currNum - diff, currNum]
    }
    // if there's no solution yet, add that number to the set
    set1.add(currNum)
  }
  return []
}

console.log(pairWithGivenDifference([5, 20, 3, 2, 50, 80], 78))          /*  [ 2, 80 ] (80 - 2 = 78)  */ 
console.log(pairWithGivenDifference([8, 20, 0, 96, 60, 22], 14))         /*  [ 8, 22 ] (22 - 8 = 14)  */
console.log(pairWithGivenDifference([1, 3, 99, 15, 17, 9], 90))          /*  [ 99, 9 ] (99 - 9 = 90)  */
