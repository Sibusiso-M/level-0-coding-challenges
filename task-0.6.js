//bonus question attempt
function getMaximum() {
  let max = arguments[0];

  for (let index = 0; index < arguments.length; index++) {
    if (max < arguments[index]) {
      max = arguments[index];
    }
  }

  return max;
}

console.log(getMaximum(100, 88, 9, 99, 0, 7, 600));
console.log(getMaximum(-100, -88, -9, -99, 0, -7, -600));
