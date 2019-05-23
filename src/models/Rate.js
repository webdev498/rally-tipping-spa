const Rate = {
	Initial: function () {
		return {
            rate: {
                score: 0,
			    comment: ''
            }
		};
	},
	Actions: function (update) {
		return {
			changeRateScore: function (value) {
				update(model => {
					model.rate.score = value;
					return model;
				});
			},
			changeRateComment: function(value) {
				update(model => {
					model.rate.comment = value;
					return model;
				});
			},
		};
	}
};

export default Rate;