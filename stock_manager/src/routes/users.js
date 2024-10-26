const { Router } = require('express');
//const { getMessage } = require('../controllers/users');
const { getAll, getById } = require('../controllers/users');

const router = Router();

//router.get('/', getMessage);
router.get('/', getAll);
router.get('/:id', getById)

module.exports = router;