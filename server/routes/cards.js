const router = require("express").Router();
const Card = require("../models/Card");

router.get("/", (req, res) => {
  Card.find()
    .then(cards => res.json(cards))
    .catch(err => res.json(err));
});

router.post("/", (req, res) => {
  Card.create(req.body)
    .then(card => res.json(card))
    .catch(err => res.json(err));
});

module.exports = router;
