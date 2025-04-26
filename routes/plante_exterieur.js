const express = require("express");
const router = express.Router();
const data = require("../data/plantes_exterieures.js");

router.get("/exterieures/all", (req, res) => {
    if (!data || data.length === 0) {
        return res.status(404).json({ message: "Données non trouvé" });
    } else {
        res.status(200).json(data);
    }
});

router.get("/exterieures/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const plante = data.find((p) => p.id === id);

    if (!plante) {
        return res.status(404).json({ message: "Plante non trouvé" });
    } else {
        res.status(200).json(plante);
    }
});

module.exports = router;
