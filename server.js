const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const morgan = require("morgan");
const cors = require("cors");

dotenv.config({ path: `${__dirname}/config/.env` });

const userRoutes = require("./routes/user");

/* -----------------------------------------------
check relative path of the file you're working in.
-------------------------------------------------*/
console.log(process.cwd());

mongoose
	.connect(process.env.DATABASE, {
		useNewUrlParser: true
	})

	.then(() => console.log("DB CONNECTED"))
	.catch((err) => console.log("DB CONNECTION ERR", err));

/* ----------third party middleware-------------*/

app.use(morgan("dev"));
app.use(cors());

/* ----------routes middleware -------------*/
app.use("/api", userRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);
});
