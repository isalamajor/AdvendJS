/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
function organizeShoes(shoes) {
  
  let derecha = [], izquierda = [], pairs = [];

  shoes.forEach( ({type, size}) => {

    if (type === 'I' && derecha.includes(size)) {
      pairs.push(size);
      derecha.pop(derecha.indexOf(size));
    } else if (type === 'I') {
      izquierda.push(size);
    } else if (type === 'R' && izquierda.includes(size)) {
      pairs.push(size);
      izquierda.pop(izquierda.indexOf(size));
    } else {
      derecha.push(size);
    }
  })

  return pairs
}