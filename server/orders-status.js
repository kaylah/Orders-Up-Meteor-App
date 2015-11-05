Meteor.methods({
  'order.update.status': function(orderId, orderItemId) {
    check(orderId, String);
    check(orderItemId, String);

    var selector = {_id : orderId, 'itemsOrdered.id': orderItemId};
    var modifier = {$set: {'itemsOrdered.$.status': 'ready'}};
    Orders.update(selector, modifier);
  }
});