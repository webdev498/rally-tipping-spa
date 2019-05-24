const Modal = {
	Initial: function () {
		return {
            showDriverModal: false,
            showTipModal: false,
			showForgotTipModal: false,
			showPaymentModal: false,
			showThankYouModal: false,			
		};
	},
	Actions: function (update) {
		return {
			toggleDriverModal: function(value) {
				update(model => {
					model.showDriverModal = value;
					return model;
				});
            },
            toggleTipModal: function(value) {
				update(model => {
					model.showTipModal = value;
					return model;
				});
			},
            toggleForgotTipModal: function(value) {
                update(model => {
                    model.showForgotTipModal = value;
                    return model;
                });
			},
			togglePaymentModal: function(value) {
                update(model => {
                    model.showPaymentModal = value;
                    return model;
                });
			},
			toggleThankYouModal: function(value) {
                update(model => {
                    model.showThankYouModal = value;
                    return model;
                });
            },
		};
	}
};

export default Modal;