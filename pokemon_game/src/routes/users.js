const { Router } = require('express');
const { getAllUsers, createUser, getUser, updateUser, destroyUser,userProtected } = require('../controllers/users');
const verifyToken = require('../middlewares/verifyToken');

const router = Router();

router.get('/', verifyToken, getAllUsers);//Sesion iniciada
router.get('/protected', verifyToken, userProtected);
router.get('/:id', verifyToken, getUser);//Sesion iniciada
router.post('/', verifyToken, createUser);
router.put('/:id', verifyToken, updateUser);
router.delete('/:id', verifyToken,destroyUser);

module.exports = router;