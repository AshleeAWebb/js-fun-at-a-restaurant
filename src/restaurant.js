function createRestaurant(restaurantName) {
  return {name: restaurantName, 
    menus: 
    {breakfast:[], 
      lunch: [], 
      dinner: [] 
    }
  
  };
}

function addMenuItem(restaurant, newItem) {
  if (!restaurant.menus[newItem.type].includes(newItem))
return restaurant.menus[newItem.type].push(newItem)
}

function removeMenuItem(restaurant, itemRemove, menuItemType) {
  for (var i = 0; i < restaurant.menus[menuItemType].length; i++) {
    if (restaurant.menus[menuItemType][i].name === itemRemove) {
      restaurant.menus[menuItemType].splice(i, 1);
      return `No one is eating our ${itemRemove} - it has been removed from the ${menuItemType} menu!`;
    }
  }
    return `Sorry, we don't sell ${itemRemove}, try adding a new recipe!`
  }
  


module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}