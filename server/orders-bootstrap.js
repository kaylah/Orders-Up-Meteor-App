// run this when the meteor app is started
Meteor.startup(function() {

	// if there are no orders available, create sample data
	if (Orders.find().count() === 0) {

		// create sample orders
		var sampleOrders = [
			{
				'orderNumber': '123',
				'server': 'Shero',
				'status': 'pending', //pending, served, paid, complete
				'itemsOrdered': [
					{
						'id': '4326',
						'name': 'Of course!',
						'qty': 1,
						'type': 'Hookah',
						'price': '12.00',
						'totalPrice': '',
						'status': 'pending'
					}, //ordered, pending, ready to serve, served, paid
					{
						'id': '4325',
						'name': 'Water',
						'qty': 1,
						'type': 'Beverage',
						'price': '1.00',
						'totalPrice': '',
						'status': 'served'
					}
				]
			},
			{
				'orderNumber': '124',
				'server': 'Shero',
				'status': 'pending', //pending, served, paid, complete
				'itemsOrdered': [
					{
						'id': '4320',
						'name': 'Of course!',
						'qty': 1,
						'type': 'Hookah',
						'price': '12.00',
						'totalPrice': '',
						'status': 'pending'
					}, //ordered, pending, ready to serve, served, paid
					{
						'id': '4319',
						'name': 'Water',
						'qty': 1,
						'type': 'Beverage',
						'price': '1.00',
						'totalPrice': '',
						'status': 'served'
					}
				]
			},
			{
				'orderNumber': '125',
				'server': 'Shero',
				'status': 'paid', //pending, served, paid, complete
				'itemsOrdered': [
					{
						'id': '4321',
						'name': 'Of course!',
						'qty': 1,
						'type': 'Hookah',
						'price': '12.00',
						'totalPrice': '',
						'status': 'pending'
					}, //ordered, pending, ready to serve, served, paid
					{
						'id': '4323',
						'name': 'Water',
						'qty': 1,
						'type': 'Beverage',
						'price': '1.00',
						'totalPrice': '',
						'status': 'served'
					}
				]
			}
		];

		// loop over each sample order and insert into database
		_.each(sampleOrders, function(order) {
			Orders.insert(order);
		});

	}

});