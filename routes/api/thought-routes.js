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

// /api/thoughts/
router.route('/').get(getAllThoughts).post(addThought);

// /api/thoughts/<thoughtId>
router.route('/:thoughtId').get(getThoughtById).put(updateThought);

// /api/thoughts/<userId>/<thoughtId>
router.route('/:userId/:thoughtId').delete(removeThought);

// /api/thoughts/reaction/<thoughtId>
router.route('/reaction/:thoughtId').post(addReaction);

// remove a Reaction
// /api/thoughts/reaction/<thoughtId>/<ReactionId>
router.route('/reaction/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;