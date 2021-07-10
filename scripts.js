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

console.log(gridTraveler(0, 1));
console.log(gridTraveler(1, 1));
console.log(gridTraveler(2, 3));
