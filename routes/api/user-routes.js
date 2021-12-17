const router = require('express').Router();
const {
    getAllUser,
    getUserById,
    createUser,
    deleteUser,
    updateUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

// /api/user/>
router.route('/').get(getAllUser).post(createUser);

// /api/user/>/<userId>
router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);

// /api/user/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);


module.exports = router;