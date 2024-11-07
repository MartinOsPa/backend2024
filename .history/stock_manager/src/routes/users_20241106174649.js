const { Router } = require('express');
//const { getMessage } = require('../controllers/users');
const { getAll, getUserById, createUser, updateUser, deleteUser, getAllUsers } = require('../controllers/users');

const router = Router();

//router.get('/', getMessage);
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/', updateUser);
router.delete('/', deleteUser);

module.exports = router;