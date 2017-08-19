const mongoose = require('mongoose');

require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_URL, { useMongoClient: true })
  .catch((err) => {
    console.log(`Error connecting to database at url ${process.env.DATABASE_URL}`);
    console.error(err);
    process.exit();
  });

require('./models/Year');
require('./models/User');

const app = require('./app');
app.set('port', process.env.PORT || 3000);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
