require('dotenv').config({ path: `${__dirname}/../.env` });
const promisify = require('es6-promisify');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_URL, { useMongoClient: true })
  .catch((err) => {
    console.log(`Error connecting to database at url ${process.env.DATABASE_URL}`);
    console.error(err);
    process.exit();
  });

const User = require('../models/User');

const email = process.env.USER_EMAIL;
const password = process.env.USER_PASSWORD;

async function addUser() {
  try {
    if (!email || !password) {
      console.error('Either email or password is missing!');
      process.exit(1);
    }
    console.log('Inserting default user....');
    await promisify(User.register, User)(new User({ email }), password);
    console.log(`User with username ${email} inserted`);
    process.exit();
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

addUser();
