const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			trim: true,
			required: true,
			max: 32
		},
		userName: {
			type: String,
			trim: true,
			required: true,
			max: 32,
			unique: true,
			index: true,
			lowercase: true
		},
		slug: {
			type: String,
			unique: true,
			lowercase: true,
			index: true
		},
		email: {
			type: String,
			trim: true,
			required: true,
			unique: true,
			lowercase: true
		},
		address: {
			street: {
				type: String,
				trim: true,
				required: true,
				max: 32
			},
			suite: {
				type: String,
				trim: true,
				required: true,
				max: 32
			},
			city: {
				type: String,
				trim: true,
				required: true,
				max: 32
			},
			zipCode: {
				type: String,
				trim: true,
				required: true,
				max: 32
			},
			geo: {
				lat: {
					type: String,
					trim: true,
					required: false,
					max: 32
				},
				lng: {
					type: String,
					trim: true,
					required: false,
					max: 32
				}
			}
		},
		phone: {
			type: String,
			trim: true,
			required: true,
			unique: true,
			lowercase: true
		},
		website: {
			type: String,
			trim: true,
			required: false,
			unique: true,
			lowercase: true
		},
		company: {
			name: {
				type: String,
				trim: true,
				required: true,
				unique: true,
				lowercase: true
			},
			catchPhrase: {
				type: String,
				required: false,
				unique: true,
				lowercase: true
			},
			bs: {
				type: String,
				required: false,
				unique: true,
				lowercase: true
			}
		}
	},
	{
		timestamp: true
	}
);

module.exports = mongoose.model("User", userSchema);
