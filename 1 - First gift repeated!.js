/**
 * @param {number[]} gifts - The array of gifts to prepare
 * @returns {number[]} An array with the prepared gifts
 */
function prepareGifts(gifts) {
  
    // Set NO permite elems duplicados
    // [... Set] convierte el Set de nuevo en un array
    // sort() trata los números como cadenas, (a, b) => a - b los ordena correctamente
    return [...new Set(gifts)].sort((a, b) => a - b);
  }