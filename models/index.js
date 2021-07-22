const mongoose = require('mongoose');

const db = mongoose.connection;

const dbUrl = 'mongodb://localhost:27017/tidder';
const configs = {
    useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
};

mongoose
	.connect(process.env.DATABASE_URL || dbUrl, configs)
	.then(() =>
		console.log(
			`MongoDB successfully connected at ${db.host}:${db.port}`
		)
	)
	.catch((err) => console.log(`MongoDB connection FAILED :( Error: ${err}`));

module.exports = {
    User: require('./user')
}