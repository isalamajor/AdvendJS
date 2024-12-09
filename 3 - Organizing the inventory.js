/**
 * @param {{ name: string, quantity: number, category: string }[]} inventory
 * @returns {object} The organized inventory
 */
function organizeInventory(inventory) {
  // Code here
  let inventory2 = new Object()
  inventory.forEach(({name, quantity, category}) => {
    if (category in inventory2) {
      if (name in inventory2[category]) {
        inventory2[category][name] += quantity
      } else {
        inventory2[category][name] = quantity
      }
    } else {
      inventory2[category] = new Object ();
      inventory2[category][name] = quantity;
    }
    })
  return inventory2
}