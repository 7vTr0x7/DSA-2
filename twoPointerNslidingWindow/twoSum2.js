const array = [0, 2, 7, 11, 15];
let target = 9;
const twoSum2 = (a) => {
  let i = 0;
  let x = a.length - 1;

  while (i < x) {
    let sum = a[i] + a[x];
    if (sum > target) {
      --x;
    } else if (sum < target) {
      ++i;
    } else {
      return [i, x];
    }
  }
};

console.log(twoSum2(array));
