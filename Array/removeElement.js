let array = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6];
let val = 3;

const removeElement = (arr, value) => {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== value) {
      arr[x] = arr[i];
      x += 1;
    }
  }
  return x;
};

console.log(removeElement(array, val));
