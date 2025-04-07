// Utilidades para estimar el enésimo número primo con precisión mejorada
function esPrimo(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  const sqrt = Math.floor(Math.sqrt(num));
  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function estimarPrimoMejorado(n) {
  if (n < 6) {
    const primos = [2, 3, 5, 7, 11];
    return primos[n - 1];
  }

  const ln = Math.log(n);
  const lnln = Math.log(ln);

  // Corrección dinámica refinada
  const dynamicCorrection = ((lnln - 1.9) + (0.25 * lnln / ln)) / ln;
  const estimate = n * (ln + lnln - 1 + dynamicCorrection);

  return Math.round(estimate);
}

function obtenerPrimoExacto(n) {
  let estimado = estimarPrimoMejorado(n);
  let offset = 0;

  while (true) {
    if (esPrimo(estimado - offset)) return estimado - offset;
    if (esPrimo(estimado + offset)) return estimado + offset;
    offset++;
  }
}
