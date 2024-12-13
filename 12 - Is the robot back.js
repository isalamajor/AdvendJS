/**
 * @param {string[]} moves
 * @returns {true|[number, number]} Return true if robot returns or position
 */
function isRobotBack(moves) {
  let x = 0, y = 0;
  const invertions = { 'U': 'D', 'D': 'U', 'R': 'L', 'L': 'R' };
  const done = new Set();
  let double = false;
  let invertNext = false;
  let currentMove = '';

  for (let i = 0; i < moves.length; i++) {
    currentMove = moves[i];

    // Procesar modificadores
    if (currentMove === '*') {
      double = true;
      continue;
    }
    if (currentMove === '!') {
      invertNext = true;
      continue;
    }
    if (currentMove === '?') {
      // Salta si el movimiento ya se hizo
      if (done.has(moves[i + 1])) {
        i++; // Saltar el siguiente movimiento
        continue;
      }
      continue;
    }

    // Manejar inversión
    if (invertNext) {
      currentMove = invertions[currentMove];
      invertNext = false;
    }

    // Anotar movimiento en done
    done.add(currentMove);

    // Aplicar el movimiento
    if (currentMove === 'U') { y += double ? 2 : 1 }
    else if (currentMove === 'D') { y -= double ? 2 : 1 } 
    else if (currentMove === 'R') { x += double ? 2 : 1 } 
    else if (currentMove === 'L') { x -= double ? 2 : 1 }

    // Restablecer modificador de intensidad
    double = false;
  }

  // Verificar la posición final
  return x === 0 && y === 0 ? true : [x, y];
}
