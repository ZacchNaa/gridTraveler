/**
 * ======================
 * grid traveler
 * ======================
 */
// m=rows and n=columns
const gridTraveler = (rows, columns) => {
  if (rows === 1 && columns === 1) return 1;
  if (rows === 0 || columns === 0) return 0;
  return gridTraveler(rows - 1, columns) + gridTraveler(rows, columns - 1);
};

// improving the function = memoization
const gridTravelerMemo = (rows, columns, memo = {}) => {
  // set the args[rows, columns] as key of the memo object
  const key = `${rows}, ${columns}`;
  // check if key exist in the memo
  if (key in memo) return memo[key];
  if (rows === 1 && columns === 1) return 1;
  if (rows === 0 || columns === 0) return 0;
  memo[key] =
    gridTravelerMemo(rows - 1, columns) + gridTravelerMemo(rows, columns - 1);
  return memo[key];
};

console.log(gridTravelerMemo(0, 1));
console.log(gridTravelerMemo(1, 1));
console.log(gridTravelerMemo(2, 3));
