function unirIntervalos(intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }

  intervals.sort((a, b) => a[0] - b[0]);

  const resultado = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const intervaloAtual = intervals[i];
    const ultimoIntervaloUnido = resultado[resultado.length - 1];

    if (intervaloAtual[0] <= ultimoIntervaloUnido[1]) {
      ultimoIntervaloUnido[1] = Math.max(
        ultimoIntervaloUnido[1],
        intervaloAtual[1]
      );
    } else {
      resultado.push(intervaloAtual);
    }
  }

  return resultado;
}

console.log(
  unirIntervalos([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
