/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
  // Dimensiones del tablero
  const height = board.length;
  const length = board[0].length;

  // Encontrar la posición de @
  let col_head, row_head;
  for (let line = 0; line < height; line++) {
    row_head = board[line].indexOf('@');
    if (row_head !== -1) {
      col_head = line;
      break;
    }
  }

  // Mapeo de movimientos a cambios en las coordenadas
  const moveMap = {
    'L': [0, -1], 
    'R': [0, 1],  
    'U': [-1, 0], 
    'D': [1, 0]
  };

  // Obtener las nuevas coordenadas (new) según el movimiento
  const [rowChange, colChange] = moveMap[mov];
  const newRow = col_head + rowChange;
  const newCol = row_head + colChange;

  // Si new está fuera del tablero se choca
  if (newRow < 0 || newRow >= height || newCol < 0 || newCol >= length) {
    return 'crash';
  }

  // Consultar qué hay en new
  const next = board[newRow][newCol];

  // Devolver resultado
  if (next === '*') {
    return 'eat';
  } else if (next === '·' ) {
    return 'none';
  }

  return 'crash';
}
