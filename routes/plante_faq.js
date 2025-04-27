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

// GET all questions from FAQ
router.get("/faq/question", (req, res) => {
    if (!data || data.length === 0) {
        return res
            .status(404)
            .json({ message: "Foire aux questions non trouvée" });
    } else {
        const questions = data.map((item) => item.question); // Utilisation de map pour extraire les questions
        res.status(200).json(questions);
    }
});

// GET all answers from FAQ
router.get("/faq/answer", (req, res) => {
    if (!data || data.length === 0) {
        return res
            .status(404)
            .json({ message: "Foire aux questions non trouvée" });
    } else {
        const answers = data.map((item) => item.answer); // Utilisation de map pour extraire les réponses
        res.status(200).json(answers);
    }
});

// POST a new question and answer to the FAQ
router.post("/faq/add", (req, res) => {
    const { question, answer } = req.body;

    if (!question || !answer) {
        return res
            .status(400)
            .json({ message: "Question et réponse requises" });
    }

    const newEntry = {
        id: data.length + 1,
        question,
        answer,
    };

    data.push(newEntry);
    res.status(201).json(newEntry);
});

// PUT to update a question and answer in the FAQ
router.put("/faq/update/:id", (req, res) => {
    const { id } = req.params;
    const { question, answer } = req.body;

    const entry = data.find((item) => item.id === parseInt(id));

    if (!entry) {
        return res.status(404).json({ message: "Entrée non trouvée" });
    }

    if (question) entry.question = question;
    if (answer) entry.answer = answer;

    res.status(200).json(entry);
});
// DELETE a question and answer from the FAQ
router.delete("/faq/delete/:id", (req, res) => {
    const { id } = req.params;

    const index = data.findIndex((item) => item.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ message: "Entrée non trouvée" });
    }

    data.splice(index, 1);
    res.status(200).json({ message: "Entrée supprimée avec succès" });
});

// POST a new answer to the FAQ
router.post("/faq/answer/add", (req, res) => {
    const { answer } = req.body;

    if (!answer) {
        return res.status(400).json({ message: "Réponse requise" });
    }

    const newEntry = {
        id: data.length + 1,
        answer,
    };

    data.push(newEntry);
    res.status(201).json(newEntry);
});
// PUT to update an answer in the FAQ
router.put("/faq/answer/update/:id", (req, res) => {
    const { id } = req.params;
    const { answer } = req.body;

    const entry = data.find((item) => item.id === parseInt(id));

    if (!entry) {
        return res.status(404).json({ message: "Entrée non trouvée" });
    }

    if (answer) entry.answer = answer;

    res.status(200).json(entry);
});

module.exports = router;
