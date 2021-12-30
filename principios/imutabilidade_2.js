const nums = [4, 8, 3, 2, 9, 1, 9, 3];

// #3 RECURSIVIDADE

function somarArr(arr, total = 0) {
  if (arr.length === 0) {
    return total;
  }
  return somarArr(arr.slice(1), total + arr[0]);
}
const total = somarArr(nums);

console.log(total);

//#2 REDUCE

// const somar = (a, b) => a + b;
// const total = nums.reduce(somar);

// console.log(total);

// #1 - Dados mutáveis

// let total = 0;

// for (let i = 0; i < nums.length; i++) {
//   total += nums[i];
// }

// console.log(total);
