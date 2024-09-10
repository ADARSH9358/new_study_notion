const mongoose = require("mongoose");
require("dotenv").config();

const { MONGODB_URL } = process.env;

exports.connect = () => {
	mongoose
		.connect("mongodb://127.0.0.1:27017/notion", {
			useNewUrlParser: true,  // Corrected the typo here
			useUnifiedTopology: true,
		})
		.then(() => console.log(`DB Connection Success`))  // Wrapped console.log in an arrow function
		.catch((err) => {
			console.log(`DB Connection Failed`);
			console.log(err);
			process.exit(1);
		});
};
