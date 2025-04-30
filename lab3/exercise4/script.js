// script.js
import {
  get_items,
  add_item,
  update_item_title_by_id,
  delete_item_by_id,
  get_item_title_by_id,
} from "./data.js";

// Test cases

console.log("Adding item 1:", add_item({ id: 1, title: "First Item" })); // true
console.log("Adding item 2:", add_item({ id: 2, title: "Second Item" })); // true
console.log(
  "Adding duplicate item 1:",
  add_item({ id: 1, title: "Duplicate" })
); // false

console.log("All items:", get_items());

console.log(
  "Updating title for id 2:",
  update_item_title_by_id(2, "Updated Second Item")
); // true
console.log(
  "Updating title for id 3:",
  update_item_title_by_id(3, "Nonexistent")
); // false

console.log("Title of item with id 2:", get_item_title_by_id(2)); // "Updated Second Item"
console.log("Title of item with id 3:", get_item_title_by_id(3)); // undefined

console.log("Deleting item with id 1:", delete_item_by_id(1)); // true
console.log("Deleting non-existent item with id 5:", delete_item_by_id(5)); // false

console.log("Final items:", get_items());
