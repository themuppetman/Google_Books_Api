const db = require('../config/connection');
const cleanDB = require('./cleanDB');
const { User, Book } = require('../models');
const userData = require('./userData.json');
const bookData = require('./bookData.json');

db.once('open', async () => {
  try {
    await cleanDB('User', 'users');
    await User.deleteMany({});
    await Book.deleteMany({});


    const createdUsers = await User.create(userData);
    const createdBooks = await Book.create(bookData);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});