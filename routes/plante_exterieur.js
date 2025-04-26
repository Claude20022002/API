const express = require("express");
const router = express.Router();
const data = require("../data/plantes_exterieures.js");

router.get("/exterieures/all", (req, res) => {
    res.json(data);
});

module.exports = router;
