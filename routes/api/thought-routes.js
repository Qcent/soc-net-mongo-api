const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    updateThought,
    addThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts?user=<userId>&thot=<thoughtId>
router.route('/').post(addThought).delete(removeThought).get(getThoughtById).put(updateThought);

// /api/thoughts/all
router.route('/all').get(getAllThoughts);

// /api/thoughts/reaction?thot=<thoughtId>&react=<reactionId>
router.route('/reaction').post(addReaction).delete(removeReaction);


// /api/thoughts/<thoughtId>
//router.route('/:thoughtId').get(getThoughtById).put(updateThought);

// /api/thoughts/<userId>/<thoughtId>
//router.route('/:userId/:thoughtId').delete(removeThought);
// replace with /api/thoughts?user=<userId>&thot=<thoughtId>

// remove a Reaction /* NOW handled by above /reaction route */
// /api/thoughts/reaction/<thoughtId>/<reactionId>
//router.route('/reaction/:thoughtId/:reactionId');

module.exports = router;