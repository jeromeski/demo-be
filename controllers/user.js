const req = require("express/lib/request");
const User = require("../models/user");
const slugify = require("slugify");

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
		res.status(200).json(user);
	} catch (error) {
		res.status(400).json({
			success: false,
			error: error.message
		});
	}
};

exports.createUser = async (req, res) => {
	try {
		req.body.slug = slugify(req.body.name);
		const newUser = await new User(req.body).save();
		res.status(200).json(newUser);
	} catch (error) {
		console.log(error);
		res.status(400).json({
			error: error.message
		});
	}
};

exports.deleteUser = async (req, res) => {
	try {
		const deleted = await User.findOneAndRemove({ slug: req.params.slug });
		res.status(200).json(deleted);
	} catch (error) {
		console.log(error);
		res.status(400).send("User deletion failed");
	}
};

exports.updateUser = async (req, res) => {
	if (req.body.name) {
		req.body.slug = slugify(req.body.name);
	}

	try {
		const updated = await User.findOneAndUpdate(
			// find document
			{ slug: req.params.slug },
			// use whatever is inside of req.body
			req.body,
			// options
			{
				new: true,
				runValidators: true,
				useFindAndModify: false
			}
		);
		res.status(200).json(updated);
	} catch (error) {
		console.log(error);
		res.status(400).json({ error: error.message });
	}
};
