const array = [1, 2, 3, 4, 5, 6, 7, 8];

let target = 10;

const twoSum = (a) => {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (a[j] + a[i] === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum(array));
