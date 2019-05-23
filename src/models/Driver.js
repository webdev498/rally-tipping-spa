const Driver = {
	Initial: function () {
		return {
			driver: null,
		};
	},
	Actions: function (update) {
		return {
			changeDriver: function (obj) {
				update(model => {
					model.driver = obj;
					return model;
				});
			}
		};
	}
};

export default Driver;