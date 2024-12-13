/**
 * @param {number[]} reindeer
 * @param {number[]} stables
 * @returns {number}
 */
function minMovesToStables(reindeer, stables) {
    // Ordenar los arrays en orden ascendente
    reindeer.sort((a, b) => a - b);
    stables.sort((a, b) => a - b);
  
    // Calcular la suma de las diferencias absolutas de cada uno con el de su mismo índice
    let sum = 0;
    for (let i = 0; i < reindeer.length; i++) {
      sum += Math.abs(reindeer[i] - stables[i]);
    }
  
    return sum;
  }
  