// - - - - *
// - - - * *
// - - * * *
// - * * * *

const patter1 = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i - 1; j++) {
      row += " _ ";
    }
    for (let k = 0; k <= i; k++) {
      row += " * ";
    }
    console.log(row);
  }
};
patter1(5);
