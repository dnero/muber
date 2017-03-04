const Driver = require('../models/driver');

module.exports = {
	create(req, res, next) {
		const driverProps = req.body;

		Driver.create(driverProps)
			.then(driver => res.send(driver))
			.catch(next);
	},

	greeting(req, res) {
		res.send({ greet: 'Hello world' });
	}
};