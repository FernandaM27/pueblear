const express = require('express');
const router = express.Router();
const controllerComment = require('../controllers/controlComment');

router.put('/comment', controllerComment.saveComment);
router.get('/comments', controllerComment.getComments);
router.get('/comment/:id', controllerComment.getComment);
router.delete('/comment/:id', controllerComment.deleteComment);
router.post('/comment/:id', controllerComment.updateComment);

module.exports.comment = router;
