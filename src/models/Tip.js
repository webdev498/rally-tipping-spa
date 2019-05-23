const Rate = {
	Initial: function () {
		return {
            tip: 0,
		};
	},
	Actions: function (update) {
		return {
			changeTip: function (value) {
				update(model => {
					model.tip = value;
					return model;
				});
            	},
		};
	}
};

export default Rate;