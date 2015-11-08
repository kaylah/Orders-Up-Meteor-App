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

Meteor.startup(function () {

    sAlert.config({
        effect: '',
        position: 'top-right',
        timeout: 5000,
        html: false,
        onRouteClose: true,
        stack: true,
        // or you can pass an object:
        // stack: {
        //     spacing: 10 // in px
        //     limit: 3 // when fourth alert appears all previous ones are cleared
        // }
        offset: 0, // in px - will be added to first alert (bottom or top - depends of the position in config)
        beep: false
        // examples:
        // beep: '/beep.mp3'  // or you can pass an object:
        // beep: {
        //     info: '/beep-info.mp3',
        //     error: '/beep-error.mp3',
        //     success: '/beep-success.mp3',
        //     warning: '/beep-warning.mp3'
        // }
    });

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