let array = [0, 0, 1, 1, 2, 2, 2, 3, 4, 5];

const removeDuplicate = (array) => {
  let x = 0;
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[x]) {
      x += 1;
      array[x] = array[i];
      count++;
    }
  }

  return array;
};

console.log(removeDuplicate(array));
