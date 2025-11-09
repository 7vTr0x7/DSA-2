let num = 212;

const isPalindrome = (n) => {
  let res = 0;
  let copy = n;
  while (n > 0) {
    let rem = n % 10;
    res = res * 10 + rem;
    n = Math.floor(n / 10);
  }
  return res === copy;
};

console.log(isPalindrome(num));
