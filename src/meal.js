function nameMenuItem(menuItemName) {
  //var updatedMenuName = (`Delicious ${menuItemName}`);
  return `Delicious ${menuItemName}`
}

function createMenuItem(nameOfMenuItem,priceOfMenuItem,typeOfMenuItem) {
  var newMenuItem = { name: nameOfMenuItem,
  price: priceOfMenuItem,
  type: typeOfMenuItem
}
if (nameOfMenuItem||priceOfMenuItem||typeOfMenuItem){
  return newMenuItem
} else {
  return {}
}
}         


function addIngredients(ingredient,array){
  if (!array.includes(ingredient)) {
  array.push(ingredient);
  return array;
}
}

function formatPrice(initialPrice){
  //var formattedPrice = (`$${initialPrice}`);
  return (`$${initialPrice}`);
}
function decreasePrice(decreasedPrice){
  var newDecreasedPrice = (decreasedPrice-decreasedPrice*.10)
  return newDecreasedPrice

}       
function createRecipe(title,ingredients,menuItemType){
  var createRecipeObject = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }
  return createRecipeObject
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


