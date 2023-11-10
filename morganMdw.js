import express from 'express';
import morgan from 'morgan';
const app = express();
const port = 7500;

app.use(
	morgan(function (tokens, req, res) {
		return [
			tokens.method(req, res),
			tokens.url(req, res),
			tokens.status(req, res),
			tokens.res(req, res, 'content-length'),
			'-',
			tokens['response-time'](req, res),
			'ms',
		].join(' ');
	})
);


app.get('/', (req, res) => {
	res.send('Hello Working');
});

app.listen(port, () => {
	console.log(`Server is running at port ${port}`);
});
