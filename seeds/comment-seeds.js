const { Comment } = require('../models');

const commentDB = [
  {
    comment_text: 'Good point.',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'That is great!',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'Agree!',
    user_id: 3,
    post_id: 3
  },
  {
    comment_text: 'That is interesting.',
    user_id: 4,
    post_id: 4
  },
  {
    comment_text: 'Thanks for this.',
    user_id: 5,
    post_id: 5
  }
];

const seedComments = () => Comment.bulkCreate(commentDB);

module.exports = seedComments;
