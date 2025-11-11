let str = "lmao";

const reverseString = (str) => {
  let arr = str.split("");

  let i = 0;
  let x = arr.length - 1;

  while (i < x) {
    let temp = arr[i];
    arr[i] = arr[x];
    arr[x] = temp;
    i++;
    x--;
  }
  return arr.join("");
};

console.log(reverseString(str));
