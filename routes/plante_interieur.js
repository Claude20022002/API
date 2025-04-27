const express = require("express");
const router = express.Router();
const data = require("../data/plantes_Interieur.js");

// GET all plants
router.get("/interieur/all", (req, res) => {
    if (!data || data.length === 0) {
        return res.status(404).json({ message: "Aucune donnée trouvée" });
    } else {
        res.status(200).json(data);
    }
});

// GET a specific plant by ID
router.get("/interieur/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ message: "ID invalide" });
    }

    const plante = data.find((p) => p.id === id);
    if (!plante) {
        return res.status(404).json({ message: "Plante non trouvée" });
    } else {
        res.status(200).json(plante);
    }
});

// Get a specific plant by common name
router.get("/interieur/name/:name", (req, res) => {
    const name = req.params.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, ""); // Enlever les accents
    const plante = data.find(
        (p) =>
            p.nom
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "") === name
    );

    if (!plante) {
        return res.status(404).json({ message: "Plante non trouvée" });
    } else {
        res.status(200).json(plante);
    }
});

module.exports = router;
