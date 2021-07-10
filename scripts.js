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
    gridTravelerMemo(rows - 1, columns, memo) +
    gridTravelerMemo(rows, columns - 1, memo);
  return memo[key];
};

/**
 * =============================
 * NOTE: When the function is called that the memo object
 * will be initialized and then passed down to the recursive
 * functions. thus, the memo has to passed to the recursive functions
 * `the idea is to remember any previous calculation and not repeat the
 * since it slows down performance`
 * ======================
 */

console.log(gridTravelerMemo(0, 1));
console.log(gridTravelerMemo(1, 1));
console.log(gridTravelerMemo(18, 18)); //very fast processing time

console.log(gridTraveler(0, 1));
console.log(gridTraveler(1, 1));
// console.log(gridTraveler(18, 18)); //resource intensive, very slow processing time
