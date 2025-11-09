// 1
// 2 2
// 3 3 3
// 4 4 4 4

const patter1 = (n) => {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += i;
    }
    console.log(row);
  }
};
patter1(5);
