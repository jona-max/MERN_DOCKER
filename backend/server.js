const express = require('express');
const mongoose = require('mongoose');

const userRoute = require('./routes/employee');

const app = express();

app.use(express.json());

// Cors could be used here
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With,Content-Type, Accept, Authorization'
	);
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
	next();
});

app.use('/api/user', userRoute);

// To try locally with mongodb compass

// mongoose
// 	.connect('mongodb://localhost/addisSecond', {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	})
// 	.then(() => console.log('connected successfully'))
// 	.catch((error) => console.log(error));

// on docker container

mongoose
	.connect('mongodb://mongo:27017/addisSecond', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('connected successfully'))
	.catch((error) => console.log(error));

// on cloud atlas
// mongoose
// 	.connect(
// 		'mongodb+srv://addisSoft:x7SQEkkshEU1jITt@cluster0.niugy.mongodb.net/addisSoftware?retryWrites=true&w=majority',
// 		{
// 			useNewUrlParser: true,
// 			useUnifiedTopology: true,
// 		}
// 	)
// 	.then(() => console.log('connected successfully'))
// 	.catch((error) => console.log(error));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server connected on port ${port}`));
