import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const port = 3300;
let isAuth = false;

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.urlencoded({ extended: false }));

const checkPassword = (req, res, next) => {
	const password = req.body['password'];
	if (password === 'ThisIsMyPassword') {
		isAuth = true;
	}
	next();
};

app.use(checkPassword);

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});

app.post('/check', (req, res) => {
	if (isAuth) {
		res.sendFile(__dirname + '/public/secret.html');
	} else {
		res.send('<h2>Your Password is Incorrect</h2>');
	}
});

app.listen(port, () => {
	console.log(`Listning on port ${port}`);
});
