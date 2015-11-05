// run this when the meteor app is started
Meteor.startup(function() {

	// if there are no polls available, create sample data
	if (Menu.find().count() === 0) {

		// create sample polls
		var sampleMenu = [
			{
				'name': 'Al Fakher Mixes',
				'type': 'Hookah',
				'price': '12.00',
				'options': [
					{
						'name': 'The Pyramids',
						'description': '(orange/lemon/mint)',
						'shortcutId': '20'
					},
					{
						'name': 'Lotus',
						'description': '(mango/cherry/mint)',
						'shortcutId': '21'
					}
				]
			},
			{
				'name': 'Starbuzz Mixes',
				'type': 'Hookah',
				'price': '14.00',
				'options': [
					{
						'name': 'Red Crown',
						'description': '(sweet melon/white peach)',
						'shortcutId': '1'
					},
					{
						'name': 'Amun-Ra',
						'description': '(pirate\'s cave/orange/pomberry)',
						'shortcutId': '2'
					}
				]
			},
			{
				'name': 'Water',
				'type': 'Beverage',
				'subtype': 'Soft Drinks',
				'price': '1.00',
				'options': [
					{
						'name': 'Water'
					}
				]
			},
			{
				'name': 'Soda',
				'type': 'Beverage',
				'subtype': 'Soft Drinks',
				'price': '1.75',
				'options': [
					{
						'name': 'Pepsi'
					},
					{
						'name': 'Diet Pepsi'
					},
					{
						'name': 'Coke'
					},
					{
						'name': 'Diet Coke'
					},
					{
						'name': 'Sprite'
					},
					{
						'name': 'Orange'
					}
				]
			},
			{
				'name': 'Vimto',
				'type': 'Beverage',
				'subtype': 'Soft Drinks',
				'price': '1.99',
				'options': [
					{
						'name': 'Vimto'
					}
				]
			},
			{
				'name': 'Smoothies',
				'type': 'Beverage',
				'subtype': 'Smoothies',
				'price': '4.99',
				'options': [
					{
						'name': 'Strawberry'
					},
					{
						'name': 'Banana'
					},
					{
						'name': 'Watermelon'
					},
					{
						'name': 'Mango'
					},
					{
						'name': 'Pineapple'
					},
					{
						'name': 'Blueberry'
					}
				]
			}/*,
			{
				question: 'Is Meteor awesome?',
				choices: [
					{ text: 'Of course!', votes: 0 },
					{ text: 'Eh', votes: 0 },
					{ text: 'No. I like plain JS', votes: 0 }
				]
			},
			{
				question: 'Is CSS3 Flexbox the greatest thing since array_slice(bread)?',
				choices: [
					{ text: '100% yes', votes: 0 },
					{ text: '200% yes', votes: 0 },
					{ text: '300% yes', votes: 0 }
				]
			}*/
		];

		// loop over each sample poll and insert into database
		_.each(sampleMenu, function(menuItem) {
			Menu.insert(menuItem);
		});

	}

});