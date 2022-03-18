const { User } = require('../models');

const userdata = [
    {
        username: 'Merrl',
        password: 'password1'
    },
    {
        username: 'Joey',
        password: 'password12'
    },
    {
        username: 'Toby',
        password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;