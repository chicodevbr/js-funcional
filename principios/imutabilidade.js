function ordernar(arr) {
  return [...arr].sort((a, b) => a - b);
}

const nums = Object.freeze([3, 1, 7, 9, 4, 6, 288, 1976, 9, 12]);
const ordenados = ordernar(nums);
console.log(nums, ordenados);

const parteNums = nums.slice(1);

console.log(parteNums, nums);
