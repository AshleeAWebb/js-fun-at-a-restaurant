class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
   }
  
  greetCustomer(customerName, morning = false){
   if (morning) {
    return `Good morning, ${customerName}!`;
   } else {
    return `Hello, ${customerName}!`;
  }
   }
  

  
  addFoodItem(foodItem)  {
    this.restaurant.menu = [];
   this.restaurant.menu.push(foodItem);
  }
  addMenuItem(foodItem) {
    this.restaurant.menu.push(foodItem);
  }
}
  module.exports = Chef;
//   checkForFood(itemOnMenu) {
//     for (let i = 0; i < this.restaurant.menu.length; i++) {
//       if (this.restaurant.menu[i].name === itemOnMenu.name) {
//         return `Yes, we're serving ${itemOnMenu.name} today!`;
//       }
//     }
//     return `Sorry,we aren't serving ${itemOnMenu.name} today.`;
//   }
// }
