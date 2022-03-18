const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'This is a comment',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'Im going to the game.',
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: 'Its getting late!',
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;