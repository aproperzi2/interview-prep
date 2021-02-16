const fibonacci = num => {
  // store the fibonacci sequence you're going to generate
  // inside an array and initialize the array with the first two
  // numbers of the sequence
  const result = [0, 1]

  for (let i = 2; i <= num; i++) {
    // push the sum of the two numbers
    // preceeding the position of i in the result array
    // at the end of the result array
    const prevNum1 = result[i - 1]
    const prevNum2 = result[i - 2]
    result.push(prevNum1 + prevNum2)
    console.log(result);
  }

  // return the last value in the result aray
  console.log(result[num])
}

fibonacci(15)