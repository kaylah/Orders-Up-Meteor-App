// attach events to our order template
Template.order.events({

	// event to handle clicking a choice
	'click .changeStatus': function(event) {

		// prevent the default behavior
		event.preventDefault();

		// get the parent (poll) id
		var orderGeneratedID = $(event.currentTarget).parents('.order').data('id');
		var orderID = $(event.currentTarget).parents('.order').data('orderId');
		var orderItemId = $(event.currentTarget).parent('.orderedItem').attr('data-id');
		//var voteID = $(event.currentTarget).data('id');

		// create the incrementing object so we can add to the corresponding vote
		/*var voteString = 'choices.' + voteID + '.votes';
		var action = {};
		action[voteString] = 1;*/

		// update the status of this orderItem
		/*Orders.update(
			{ _id: orderGeneratedID },
			{ orderId: orderID },
			{ status: 'ready' },
			{ orderItemId }	
		);*/
		/*Orders.update({
			'_id': orderGeneratedID,
			'itemsOrdered.id': orderItemId,
		}, {$set: {'itemsOrdered.$.status': 'ready'}})*/
		Meteor.call('order.update.status', orderGeneratedID, orderItemId);
	}

});