const{Router}=require('express');
const { getAllUsers,
    getUserById, 
    loginUser,
    createUser, 
    updateUser, 
    deleteUser 
} = require('../controllers/users');

//anterior : const{getAll, getById}=require('../controllers/users');

const router=Router();

router.get('/',getAllUsers);

router.get('/:id',getUserById);

router.post('/login', loginUser);

//tarea
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);


module.exports=router;