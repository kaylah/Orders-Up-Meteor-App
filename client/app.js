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

Router.route('/orders');