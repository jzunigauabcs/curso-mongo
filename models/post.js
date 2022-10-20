const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
	nombre: String,
	contenido: String,
	createDate: {type: Date, default: Date.now},
	imagenUrl: String
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
