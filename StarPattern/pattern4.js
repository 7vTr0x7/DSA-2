// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

const patter1 = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row += j + 1;
    }
    console.log(row);
  }
};
patter1(5);
