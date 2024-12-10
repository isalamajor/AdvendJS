/**
 * @param {string[]} instructions - Array of assembly-like instructions
 * @returns {number | undefined} - The value of register A or undefined
 */
function compile(instructions) {
  let vars = {}; // Registros
  let i = 0; // Iterador

  while (i < instructions.length) {
    
    const [instr, x, y] = instructions[i].split(' ');

    if (instr === 'MOV') {
      // Si x es un registro, se accede a su valor o 0 si no tiene
      // Si x es un número, se asigna el número
      vars[y] = isNaN(x) ? (vars[x] ?? 0) : parseInt(x);
    }
    else if (instr === 'INC') { vars[x] = (vars[x] ?? 0) + 1 }
    else if (instr === 'DEC') { vars[x] = (vars[x] ?? 0) - 1 }
    else if (instr === 'JMP') {
      if ((vars[x] ?? 0) === 0) {
        i = parseInt(y) - 1; // Ajustar índice (-1 porque el bucle incrementará i)
      }
    }

    i++;
  }

  return vars['A'];
}

// (x ?? y) devuelve x si no es undefined o null, y si sí que lo es

