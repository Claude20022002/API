const express = require("express");
const router = express.Router();
const data = require("../data/Faq_plant.js");

router.get("/faq/all", (req, res) => {
    if (!data) {
        return res
            .status(404)
            .json({ message: "Foire au questions non trouver" });
    } else {
        res.status(200).json(data);
    }
});

router.get("/faq/question", (req, res) => {});

module.exports = router;
