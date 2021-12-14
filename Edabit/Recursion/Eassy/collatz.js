/**
 * @param {int} num
 * @return {int}
 */

function collatz(num, round = 0) {
  if (num == 1) return round;
  round += 1;
  return num % 2 === 0 ? collatz(num / 2, round) : collatz(num * 3 + 1, round);
}

collatz(2); //1
collatz(10); //6
collatz(72); //22
