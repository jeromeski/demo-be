const User = require("../models/user");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const users = require("../data/users.json");

// CWD --> C:\Users\Admin\Desktop\mydemoDB\utils
dotenv.config({ path: `${__dirname}/../config/.env` });

mongoose
	.connect(process.env.DATABASE, {
		useNewUrlParser: true
	})
	.then(() => console.log("DB CONNECTED"))
	.catch((err) => console.log("DB CONNECTION ERR", err));

const seedUsers = async () => {
	try {
		await User.deleteMany();
		console.log("Users are deleted.");
		await User.insertMany(users);
		console.log("Users are added.");
		process.exit();
	} catch (error) {
		console.log(error.message);
		process.exit();
	}
};

seedUsers();
