
function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length >= 3) {
    return deliveryOrders;
  } else {
  deliveryOrders[deliveryOrders.length] = order;
  return deliveryOrders;
  }
}


// function refundOrder(orderNumber, deliveryOrders) {
//   deliveryOrders.splice(orderNumber-1,1);
//   return deliveryOrders;
// }
function refundOrder(orderNumber, deliveryOrders) {
    for (i = 0; i < deliveryOrders.length; i++) {
      if (deliveryOrders[i].orderNumber === orderNumber) {
    deliveryOrders.splice(i,1);
    return deliveryOrders;
  }}
}
function listItems(deliveryOrders) {
  var itms = new Array();
  for (i = 0; i < deliveryOrders.length; i++) {
    itms.push(deliveryOrders[i].item);
  } return `${itms[0]}, ${itms[1]}, ${itms[2]}`;
}

function searchOrder(deliveryOrders, item) {
  for (i = 0; i < deliveryOrders.length; i++) {
    if (item === deliveryOrders[i].item) {
      return true;
    } else continue;
  } return false;
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
