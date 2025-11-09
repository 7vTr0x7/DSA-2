let array = [2, 3, 4, 5, 6, 7, 7, 89, 99, 99, 90];

const secondLargest = (arr) => {
  let first = arr[0];
  let second = 0;

  arr.forEach((element) => {
    if (element > first) {
      first = element;
    } else if (element > second && element !== first) {
      second = element;
    }
  });

  return second;
};

console.log(secondLargest(array));
