const Modal = {
	Initial: function () {
		return {
            showDriverModal: false,
            showTipModal: false,
			showThankYouModal: false,
            showForgotTipModal: false
			
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
            toggleThankYouModal: function(value) {
                update(model => {
                    model.showThankYouModal = value;
                    return model;
                });
            },
            toggleForgotTipModal: function(value) {
                update(model => {
                    model.showForgotTipModal = value;
                    return model;
                });
            }
		};
	}
};

export default Modal;