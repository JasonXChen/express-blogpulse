const express = require("express");
const db = require("../models");
const router = express.Router();

// POST /articles/:id/comments - create a new comment
router.post("/", (req, res) =>
{
    // db.comment.create(req.body);
    res.redirect(`/articles/${req.body.articleId}`);
    // /${req.params.id}
})

module.exports = router;