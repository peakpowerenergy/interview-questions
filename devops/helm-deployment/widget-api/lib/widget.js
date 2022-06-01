// Simulated API
const express = require('express');
const router = express.Router();

const widgets = {};

function makeWidget(req, res) {
  const id = require("crypto").randomBytes(16).toString("hex");
  widgets[id] = req.body;
  return res.sendStatus(201);
}

function getWidgets(req, res) {
  return res.json(widgets);
}

// Routes
router.use(express.json());
router.post('/', makeWidget);
router.get('/', getWidgets);

module.exports = router;
