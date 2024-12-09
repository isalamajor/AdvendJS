/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {
  /* Code here */
  let tree = '';
  let width = 1 + 2*(height-1);
  for (let i = 1; i <= width;  i+= 2) {
    tree += '_'.repeat((width - i)/2) + ornament.repeat(i) + '_'.repeat((width - i)/2) + '\n'; 
  }
  tree += '_'.repeat((width-1)/2) + '#' + '_'.repeat((width-1)/2) + '\n'
  tree += '_'.repeat((width-1)/2) + '#' + '_'.repeat((width-1)/2)
  return tree
}