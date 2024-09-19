const mongoose = require('mongoose');

const { TEST_APP_MONGODB_HOST, TEST_APP_MONGODB_DATABASE } = process.env;
const MONGODB_URL = `mongodb://${TEST_APP_MONGODB_HOST}/${TEST_APP_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URL, {
})
    .then(db => console.log('Database is conected'))
    .catch(err => console.log(err));