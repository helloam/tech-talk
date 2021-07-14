const { Post } = require('../models');

const postDB = [
  {
    title: 'This is a post about tech',
    text: 'Twinkle twinkle little star, how I wonder what you are.',
    user_id: 1
  },
  {
    title: 'This is another post about tech.',
    text: 'Old McDonald had a farm, ee-i-ee-i-oh.',
    user_id: 2
  },
  {
    title: 'Yet another post about tech.',
    text: 'Peter Piper picked a peck of pickled peppers.',
    user_id: 3
  },
  {
    title: 'Fourth post about tech.',
    text: 'The itsy bitsy spider went up the water spout.',
    user_id: 4
  },
  {
    title: 'Hello World',
    text: 'How are you doing today?',
    user_id: 5
  }
];

const seedPosts = () => Post.bulkCreate(postDB);

module.exports = seedPosts;
