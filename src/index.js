
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix === undefined) return [];
  matrix.forEach((e, i) => {
    if(i % 2 !== 0) e.reverse();
  });
  return [].concat(...matrix);
}
