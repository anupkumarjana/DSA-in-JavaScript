// checking sum zero
// [-5,-4,-3,-2,0, 2,4,6,8]   determine the first pair which sum to zero for sorted array

// O(n2)

const firstPairZeroSum = (arr) => {
  if (arr.length < 2) {
    return;
  }
  let i;
  let j;
  let res = [];
  for (i = 0; i < arr.length - 1; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        res.push(arr[i], arr[j]);
        return res;
      }
    }
  }
};
console.log(firstPairZeroSum([-5, -4, -3, -2, 0, 2, 4, 6, 8]));

//  O(n)

const firstPairZeroSum1 = (arr) => {
  if (arr.length < 2) {
    return;
  }
  let i = 0;
  let j = arr.length - 1;
  //   let mid = (i + j) / 2;
  while (i < j) {
    let sum = arr[i] + arr[j];
    if (sum === 0) {
      return [arr[i], arr[j]];
    } else if (sum < 0) {
      i += 1;
    } else {
      j -= 1;
    }
  }
};
const arr = [-5, -4, -3, -2, 0, 2, 4, 6, 8];
console.log(firstPairZeroSum1(arr));
