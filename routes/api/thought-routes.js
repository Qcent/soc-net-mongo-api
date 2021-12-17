const router = require('express').Router();
const {
    addThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts/>
router.route('/:userId').post(addThought);

// /api/thoughts/>/<thoughtId>
router.route('/:userId/:thoughtId').put(addReaction).delete(removeThought);

// remove a Reaction
// /api/thoughts/>/<thoughtId>/<ReactionId>
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;