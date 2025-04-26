const express = require("express");
const router = express.Router();
const data = require("../data/plantes_exterieures.js");

// GET all plants
router.get("/exterieures/all", (req, res) => {
    if (!data || data.length === 0) {
        return res.status(404).json({ message: "Données non trouvé" });
    } else {
        res.status(200).json(data);
    }
});

// GET a specific plant by ID
// Note: In a real-world application, you would typically validate the ID and handle errors more robustly.
router.get("/exterieures/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const plante = data.find((p) => p.id === id);
    if (!plante) {
        return res.status(404).json({ message: "Plante non trouvé" });
    } else {
        res.status(200).json(plante);
    }
});

// Get a specific plant by common name
router.get("/exterieures/name/:name", (req, res) => {
    const name = req.params.name.toLowerCase();
    const plante = data.find((p) => p.common_name.toLowerCase() === name);
    if (!plante) {
        return res.status(404).json({ message: "Plante non trouvé" });
    } else {
        res.status(200).json(plante);
    }
});

// GET a specific plant by scientific name
router.get("/exterieures/scientific/:name", (req, res) => {
    const name = req.params.name.toLowerCase();
    const plante = data.find((p) =>
        p.scientific_name.some(
            (scientific) => scientific.toLowerCase() === name
        )
    );
    if (!plante) {
        return res.status(404).json({ message: "Plante non trouvée" });
    } else {
        res.status(200).json(plante);
    }
});

module.exports = router;
