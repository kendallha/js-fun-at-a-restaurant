

function createRestaurant(restaurantName) {
  var restaurantObject = {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
  }
  return restaurantObject;
}

function addMenuItem(restaurantObject, menuItem) {
  var meal = menuItem.type;
  if (restaurantObject.menus[meal].includes(menuItem) === true) {

  } else {
restaurantObject.menus[meal].push(menuItem);
  return menuItem;
}
}

function removeMenuItem(restaurantObject, mealName, type) {

  var menu = restaurantObject.menus[type];
  console.log(menu.length);
  if (menu.length === 0) {
    return `Sorry, we don't sell ${mealName}, try adding a new recipe!`;
  }
for (var i = 0; i < menu.length; i++) {
  if (menu[i].name === mealName) {
    menu.splice(i);
    return `No one is eating our ${mealName} - it has been removed from the ${type} menu!`;
} else {
  return `Sorry, we don't sell ${mealName}, try adding a new recipe!`;
}
}}


module.exports = {
  createRestaurant,
   addMenuItem,
  removeMenuItem
}
