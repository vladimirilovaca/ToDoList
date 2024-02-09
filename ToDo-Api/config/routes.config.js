const router = require('express').Router();
const toDoController = require('../controllers/ToDo.controller');

router.get('/', (req, res, next) => res.json({ ok: true }));


module.exports = router;