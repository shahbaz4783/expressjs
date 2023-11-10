import express from 'express';
import adminRoute from './routes/admin.js';
import postmeRoute from './routes/postme.js';

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));

app.use('/admin', adminRoute);
app.use(postmeRoute);

app.use((req, res) => {
	res.status(404).send('<h1>Page Not Found</h1>')
})

app.listen(port, () => {
	console.log(`Server is running at port ${port}`);
});
