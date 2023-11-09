import express from 'express';
const app = express();
const port = 3000

app.use('/users', (req, res, next) => {
    console.log('User Middleware');
    res.send('<h1>User Details</h1>')
})

app.use('/', (req, res, next) => {
    console.log('Home Middleware');
    res.send('<h1>Assignment Middleware</h1>')
})

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
