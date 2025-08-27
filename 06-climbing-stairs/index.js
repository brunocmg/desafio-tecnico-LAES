function subirEscadas(n) {
  if (n <= 2) {
    return n;
  }

  let twoStepBack = 1;
  let oneStepBack = 2;
  let currentResult = 0;

  for (let i = 3; i <= n; i++) {
    currentResult = oneStepBack + twoStepBack;
    twoStepBack = oneStepBack;
    oneStepBack = currentResult;
  }

  return currentResult;
}

console.log(subirEscadas(3));
