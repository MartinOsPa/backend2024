const { Router } = require('express');
//const { getMessage } = require('../controllers/users');
const { getAll, getById, createUser, updateUser, deleteUser } = require('../controllers/users');

const router = Router();

//router.get('/', getMessage);
router.get('/', getAll);
router.get('/:id', getById);
router.post('/', createUser);
router.put('/', updateUser);
router.delete('/', deleteUser);

module.exports = router;