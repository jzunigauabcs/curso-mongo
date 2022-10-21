const express = require("express");
const Post = require("../models/post.js");

const router = express.Router();

router.get("/", async (req, res, next) => {
	const post = await Post.find({});
	res.json({"post": post});
})

router.post("/", async (req, res, next) => {
	const post = req.body;
	try {
		await Post.create(post);
		res.json({"status": "😄"});
	}catch(err) {
		console.log(err);
	}
})


module.exports = router;