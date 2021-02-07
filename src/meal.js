
function nameMenuItem(menuItemName) {
  return `Delicious ${menuItemName}`;

};

function createMenuItem(menuItemName, price, type) {
  var menuItem = {
    name: menuItemName,
    price: price,
    type: type,
  }
  return menuItem;
}

function addIngredients(ingredient, ingredients) {
  if (ingredients.includes(ingredient)) {
    return ingredients;
  } else {
 ingredients[ingredients.length] = ingredient;
  return ingredients;
  }
}

function formatPrice(initialPrice) {
formattedPrice = `$${initialPrice}`;
return formattedPrice;
}

function decreasePrice(initialPrice) {
  decreasedPrice = initialPrice * .9;
  return decreasedPrice;
}

function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType,
  }
  return recipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
