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

// /api/users?user=<userId>
router.route('/').post(createUser).get(getUserById).put(updateUser).delete(deleteUser);

// /api/users/all
router.route('/all').get(getAllUser);

// /api/users/friends?user=<userId>&frNd=<friendId>
router.route('/friends').post(addFriend).delete(removeFriend);

// /api/user/>/<userId>
//router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);

// /api/user/:userId/friends/:friendId
//router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);


module.exports = router;