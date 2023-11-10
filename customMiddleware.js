import express from 'express';

const app = express();

const logger = (req, res, next) => {
	console.log('Request Method: ', req.method);
	console.log('Request URL: ', req.url);
	next();
};

app.use(logger);

app.get('/', (req, res) => {
	res.send('This is my own middleware');
});

app.listen(3600);
