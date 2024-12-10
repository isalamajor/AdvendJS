/** @param {string[]} box
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
    // Iterar por las líneas internas, excluyendo los bordes superior e inferior
    for (let i = 1; i < box.length - 1; i++) {
      let line = box[i];
      let index = line.indexOf('*'); // Buscar posición del '*'
  
      // Verificar si '*' está en el interior
      if (index > 0 && index < line.length - 1) {
        return true; 
      }
    }
    // Si no, o no está o está en un borde
    return false; 
  }
  