import express from 'express';
import bodyParser from 'body-parser';
const port = 3000;
const app = express();
import fs from 'fs/promises';


app.use(bodyParser.urlencoded({ extended: false }));
// we can also use express body parser, so we will not have to install bodyparser, like this:
// app.use(express.urlencoded({ extended: false }));


app.use('/add-post', (req, res) => {
	res.send(`
    <form action="/posts" method="POST">
    <input type="text" name="post" placeholder="Whats in your mind" />
    <button>Post!!</button>
    </form>
    `);
});

app.post('/posts', (req, res) => {
	console.log(req.body);
    
    // This will create a file named 'post.txt' and put request in it
    fs.writeFile('post.txt', JSON.stringify(req.body));

    // to get only entered data
    fs.writeFile('post.txt', JSON.stringify(req.body.post));

	res.redirect('/');
});

app.use('/', (req, res) => {
	res.send('<h2>Welcome to PostMe.com</h2>');
});

app.listen(port, () => {
	console.log(`Server is running at port ${port}`);
});
