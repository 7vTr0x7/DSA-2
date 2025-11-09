// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1

const patter1 = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    let swap = true;
    for (let j = 0; j <= i; j++) {
      if (swap) {
        row += 1;
        swap = false;
      } else {
        row += 0;
        swap = true;
      }
    }
    console.log(row);
  }
};
patter1(5);
