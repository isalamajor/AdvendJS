/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
  // Code here
  let pista = '';
  let i = 0;
  let n = indices.length;
  indices.forEach( (posicion) => {
    i++;
    pista += ' '.repeat(n - i);
    if (posicion === 0) {
      pista += '~'.repeat(length) + ' /' + i;
    } else if (posicion > 0){
      pista += '~'.repeat(posicion) + 'r' + '~'.repeat(length- posicion - 1) + ' /' + i;
    } else {
      pista += '~'.repeat(length + posicion) + 'r' + '~'.repeat(- posicion - 1) + ' /' + i ;
    }
    // Salto de línea si no es la última pista
    if (i !== n) {
      pista += '\n';
    }
  })

  return pista 
}