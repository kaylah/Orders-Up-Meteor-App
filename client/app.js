Template.body.helpers({

	orders: function() {
		return Orders.find();
	}

});

// adds index to each item
UI.registerHelper('indexedArray', function(context, options) {
	if (context) {
		return context.map(function(item, index) {
			item._index = index;
			return item;
		});
	}
});

Router.route('/', {
    // options for the route
    template: 'home'
});

Router.route('/create-order', {
    // options for the route
    template: 'order-form'
});

Router.route('/orders', {
    // options for the route
    data: function(){
        var allOrders = { orders: Orders.find() };
        return allOrders;
    },
    template: 'orders'
});

Router.route('/orders/:orderType', {
    // options for the route
    data: function(){
        var currentOrderType = this.params.orderType;
        var ordersOfType = Orders.find({ 'itemsOrdered.type': currentOrderType });
        var allOrdersOfType = { orders: ordersOfType };
        return allOrdersOfType;
    },
    template: 'orders'
});

Router.route('/order/:orderNumber', {
    // options for the route
    data: function(){
        var currentOrderNumber = this.params.orderNumber;
        return Orders.findOne({ orderNumber: currentOrderNumber });
    },
    template: 'order'
});