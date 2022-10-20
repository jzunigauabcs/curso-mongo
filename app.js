const express  = require("express");
const mongoose = require("mongoose");
const URI = require("./config/db.js");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;
const indexRoute = require("./routes/index");
const connectDB = async function() {
	await mongoose.connect(URI);
}

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/", indexRoute);

app.listen(PORT, () => {
	console.log(`Conexión puerto ${PORT}`);
	 connectDB()
		.then(()  => {
			console.log("Conexión a mongo");
		})
		.catch(err => {
			console.log(err);
		})
});
