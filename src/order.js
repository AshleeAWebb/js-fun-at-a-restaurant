function takeOrder(order,takeOutOrder){
  if (takeOutOrder.length <= 2) {
  return takeOutOrder.push(order)
}
}

function refundOrder(orderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === orderNumber) {
      return deliveryOrders.splice(i, 1);
    }
  }
}

function listItems(deliveryOrders) {
  var deliveryOrderItems = '';
  for (var i = 0; i < deliveryOrders.length; i++) {
    deliveryOrderItems += deliveryOrders[i].item;
    if (i < deliveryOrders.length - 1) {
      deliveryOrderItems += ", ";
    }
  } 
  return deliveryOrderItems;
}
function searchOrder (deliveryOrders, item) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === item) {
      return true;
    } 
  }
  return false;
}



module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}