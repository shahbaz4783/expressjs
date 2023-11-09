import express from 'express';
const app = express();

app.use((req, res, next) => {
	console.log(`In The middleware`);
	next();
    // next() will allow to run next middleware
});

app.use((req, res, next) => {
	console.log(`In The middleware again`);
});

app.listen(3000);
