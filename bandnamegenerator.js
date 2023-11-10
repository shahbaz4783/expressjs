import express from 'express';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(path.join(__filename));

const app = express();
const port = 3100;
let bandname;

app.use(express.urlencoded({ extended: true }));

const bandNameGenerator = (req, res, next) => {
	console.log(req.body);
	bandname = req.body['street'] + req.body['pet'];
	next();
};

app.use(bandNameGenerator);

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});

app.post('/submit', (req, res) => {
	res.send(`<h2>Your band name is: ${bandname}</h2>`);
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
