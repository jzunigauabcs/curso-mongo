const express = require("express");
const Post = require("../models/post");

const router = express.Router();

router.get("/", async (req, res, next) => {
	const posts = await Post.find({});
	res.json({posts: posts});
});

router.post("/", async (req, res, next) => {
	const post = req.body;
	try {
		await Post.create(post);
		res.json({"status": "success"});
	} catch(err) {
		console.log("Error al guardar el post");
	}
});

module.exports = router;
