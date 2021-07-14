const sequelize = require('../config/connection');
const { User } = require('../models');

const userDB = [
  {
    username: 'Ana',
    email: 'ana@hotmail.com',
    password: 'password123'
  },
  {
    username: 'Bill',
    email: 'Bill@aol.com',
    password: 'password123'
  },
  {
    username: 'Cindy',
    email: 'cindy@yahoo.com',
    password: 'password123'
  },
  {
    username: 'David',
    email: 'david@gmail.com',
    password: 'password123'
  },
  {
    username: 'Eric',
    email: 'eric@aol.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userDB, {individualHooks: true});

module.exports = seedUsers;
