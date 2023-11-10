import express from 'express';
const router = express.Router();
import fs from 'fs/promises';

// /admin/add-post => GET
router.get('/add-post', (req, res) => {
	res.send(`
    <form action="/admin/add-posts" method="POST">
    <input type="text" name="post" placeholder="Whats in your mind" />
    <button>Post!!</button>
    </form>
    `);
});

// /admin/add-post => POST
router.post('/add-posts', (req, res) => {
	console.log(req.body);
	fs.writeFile('./modularRoutes/post.txt', JSON.stringify(req.body.post));
	res.redirect('/');
});

export default router;