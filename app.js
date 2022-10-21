const express  = require("express");
const bodyParser = require("body-parser");
const URI = require("./config/db.js");
const mongoose = require("mongoose");
const indexRoute = require("./routes/index.js");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const connectDB = async function() {
	await mongoose.connect(URI);
}

app.use("/", indexRoute);

app.listen(PORT, async () => {
	console.log(`Conexión puerto ${PORT}`);
	await connectDB();
	console.log("Conexión mongo");
});
