const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost/tidder', { 
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true 
});

const db = mongoose.connection;
// database connection event
db.on('connected', function () {
  console.log(`Mongoose connected to:${db.host}:${db.port}`);
 
  
  
});

module.exports = {
    User: require('./user')
}
