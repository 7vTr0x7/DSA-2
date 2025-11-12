const array = [7, 2, 3, 4, 5, 6, 7, 8];

let target = 14;

const twoSum = (a) => {
  let map = {};

  for (let i = 0; i < a.length; i++) {
    map[a[i]] = i;
  }
  for (let i = 0; i < a.length; i++) {
    let foundPair = target - a[i];
    if (map[foundPair] && map[foundPair] !== i) {
      return [i, map[foundPair]];
    }
  }
};

console.log(twoSum(array));
