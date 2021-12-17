const router = require('express').Router();
const {
    addUser,
    removeUser,
} = require('../../controllers/user-controller');

// /api/Users/>
router.route('/').post(addUser);

// /api/Users/>/<UserId>
router.route('/:UserId').delete(removeUser);

// remove a Reaction
// /api/Users/>/<UserId>/<ReactionId>
router.route('/:UserId/:reactionId').delete(removeReaction);

module.exports = router;