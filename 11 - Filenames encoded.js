/**
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */
function decodeFilename(filename) {
  // Separar string en array con elems entre los _
  let splited = filename.split('_');

  // Quitar el primer elementos (el número largo)
  splited.shift();

  // Volver a juntar los elementos, separándolos con _
  filename = splited.join('_')

  // Separar el string con los elems entre los .
  splited = filename.split('.');

  // Quitar el último elemento (la extensión del Grinch)
  splited.pop();

  // Volver a jutarlos, separándolos con .
  return splited[0] + '.' + splited[1];
}