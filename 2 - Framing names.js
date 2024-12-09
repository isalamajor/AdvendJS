/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
  // Code here
  let most_long = 0;
  names.forEach((s) => {if (s.length > most_long) {most_long = s.length;}});
  let marco = '*'.repeat(most_long + 4); // Una cada esquina + espacios a los lados

  names.forEach((s) => {marco = marco + '\n* ' + s + ' '.repeat(most_long - s.length) + ' *' });

  marco = marco + '\n' + '*'.repeat(most_long + 4);
  return marco
}