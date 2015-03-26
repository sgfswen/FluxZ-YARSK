var AppDispatcher = require('../AppDispatcher');
var ActionTypes = require('../Constants').ActionTypes;

var AppActions = {
	addToCart: function (item) {
		AppDispatcher.handleViewAction({
			type: ActionTypes.ADD_TO_CART,
			item: item
		});
	},
	removeFromCart: function(item) {
		AppDispatcher.handleViewAction({
			type: ActionTypes.REMOVE_FROM_CART,
			item: item
		});
	},
	clearCart: function() {
		AppDispatcher.handleViewAction({
			type: ActionTypes.CLEAR_CART
		});
	}
};

module.exports = AppActions;
