const User = require("../models/user");

exports.getUsers = async (req, res) => {
	try {
		const users = await User.find({});
		res.status(200).json({
			success: true,
			users
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			error: error.message
		});
	}
};

exports.getUser = async (req, res) => {
	try {
		const user = await User.findOne({ slug: req.params.slug });
		res.status(200).json({
			success: true,
			user
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			error: error.message
		});
	}
};

exports.createUser = () => {
	//
};

exports.deleteUser = () => {
	//
};

exports.updateUser = () => {
	//
};
