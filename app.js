import express from 'express'
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello Working')
})
app.get('/about', (req, res) => {
    res.send('This is about Page')
})
app.get('/contact', (req, res) => {
    res.send('This is contact Page')
})


app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});