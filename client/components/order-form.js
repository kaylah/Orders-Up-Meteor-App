Template.orderForm.helpers({

	menu: function() {
		return Menu.find();
	},

	beverageTypes: function() {
		var allBeverages = Menu.find({type: "Beverage"}).fetch(),
			uniqueBeverageTypes = _.uniq(_.pluck(allBeverages, 'subtype'));
		return uniqueBeverageTypes;
	},

	beverageNames: function() {
		var selectedBeverageType = Session.get('selectedBeverageType');
		if (!selectedBeverageType) { return false; }
		var allBeverages = Menu.find({subtype: Session.get('selectedBeverageType')}).fetch(),
			beverageNames = _.flatten(_.pluck(allBeverages, 'options'));
		return beverageNames;
	},

	hookahTypes: function() {
		var allHookah = Menu.find({type: "Hookah"}).fetch(),
			uniqueHookahTypes = _.pluck(allHookah, 'name');
		return uniqueHookahTypes;
	},

	hookahFlavors: function() {
		var selectedHookahName = Session.get('selectedHookahName');
		if (!selectedHookahName) { return false; }
		var allHookahFlavors = Menu.find({name: selectedHookahName}).fetch(),
			hookahFlavors = _.flatten(_.pluck(allHookahFlavors, 'options'));
		return hookahFlavors;
	},

	selectedBeverages: function() {
		var orderedItems = Session.get('orderedItems') || [];
		if (!orderedItems) { return false; }
		var allBeverages = _.where(orderedItems, {'type': 'Beverage'});
		console.log('allBeverages', allBeverages);
		return allBeverages;
	},

	selectedHookah: function() {
		var orderedItems = Session.get('orderedItems') || [];
		if (!orderedItems) { return false; }
		var allHookah = _.where(orderedItems, {'type': 'Hookah'});
		console.log('allHookah', allHookah);
		return allHookah;
	}
});

Template.orderForm.events({
    'change .beverageTypes': function (event, template) {
    	var selectedBeverageType = $(event.target).val();
		Session.set('selectedBeverageType', selectedBeverageType);
    },

    'change .beverageNames': function (event, template) {
    	var selectedBeverageName = $(event.target).val();
		Session.set('selectedBeverageName', selectedBeverageName);
    },

    'change .hookahNames': function (event, template) {
    	var selectedHookahName = $(event.target).val();
		Session.set('selectedHookahName', selectedHookahName);
    },

    'change .hookahFlavors': function (event, template) {
    	var selectedHookahFlavor = $(event.target).val();
		Session.set('selectedHookahFlavor', selectedHookahFlavor);
    },

    'click .addBeverage': function (event, template) {
    	//var selectedBeverageType = $(event.target).val();

    	event.preventDefault();

    	var orderedItems = Session.get('orderedItems') || [];

    	var drinkQty = $('.drinkQty').val();
		// increment the counter when button is clicked
		//Session.set('counter', Session.get('counter') + 1);

		var selectedBeverage = Menu.find({
			'subtype': Session.get('selectedBeverageType'),
			'options.name': Session.get('selectedBeverageName')
		}).fetch();

		console.log('selectedBeverage', selectedBeverage);

		var newOrderedItem = {
			'id': Random.id(),
			'name': Session.get('selectedBeverageType'),
			'flavor': Session.get('selectedBeverageName'),
			'qty': drinkQty,
			'type': 'Beverage',
			'price': selectedBeverage.price,
			'totalPrice': '',
			'status': 'pending'
		};

		orderedItems.push(newOrderedItem);
		console.log('set orderedItems', orderedItems);
		Session.set('orderedItems', orderedItems);
    },

    'click .addHookah': function (event, template) {

    	event.preventDefault();

    	var orderedItems = Session.get('orderedItems') || [];

    	var hookahQty = $('.hookahQty').val();
		
    	var selectedHookah = Menu.find({
			'name': Session.get('selectedHookahName'),
			'options.name': Session.get('selectedHookahFlavor')
		}).fetch();

		var newOrderedItem = {
			'id': Random.id(),
			'name': Session.get('selectedHookahName'),
			'flavor': Session.get('selectedHookahFlavor'),
			'qty': hookahQty,
			'type': 'Hookah',
			'price': selectedHookah.price,
			'totalPrice': '',
			'status': 'pending'
		};

		orderedItems.push(newOrderedItem);
		console.log('set orderedItems', orderedItems);
		Session.set('orderedItems', orderedItems);
    },

    'click .create-order': function (event, template) {
    	//var selectedBeverageType = $(event.target).val();

    	event.preventDefault();

    	console.log('get orderedItems', Session.get('orderedItems'));

    	var orderedItems = Session.get('orderedItems') || [];
		// increment the counter when button is clicked
		//Session.set('counter', Session.get('counter') + 1);
		var newOrder = {
				'orderNumber': '1234',
				'server': 'Shero',
				'status': 'pending', //pending, served, paid, complete
				'itemsOrdered': orderedItems
			}
		Orders.insert(newOrder);
		Session.set('orderedItems', []);
		sAlert.success('Your order has been added');
		//orderedItems.push(newOrderedItem);
		//Session.set('orderedItems', orderedItems);
    }
});