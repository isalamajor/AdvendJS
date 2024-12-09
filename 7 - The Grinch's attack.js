/**
 * @param {string} packages - String with parentheses
 * @returns {string} - String with reversed content in parentheses
 */
function fixPackages(packages) {
  let stack = [];
  
  for (let char of packages) {
    if (char === ')') {
      // Extraemos todo hasta el '(' y lo invertimos
      let temp = '';
      while (stack.length > 0 && stack[stack.length - 1] !== '(') {
        temp += stack.pop();
      }
      stack.pop(); // Quitamos el '('
      
      // Reinsertamos el contenido invertido
      for (let reversedChar of temp) {
        stack.push(reversedChar);
      }
    } else {
      stack.push(char); // Agregamos letras y '(' a la pila
    }
  }

  // Convertimos la pila a un string
  return stack.join('');
}