const express = require('express');
const userRoutes = require('./user.route');
const authRoutes = require('./auth.route');
const followersRoutes = require('./followers.route');
const postRoutes = require('./post.route');


const router = express.Router();

router.get('/status', (req, res) => res.send('OK'));

router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/followers', followersRoutes);
router.use('/post', postRoutes);

module.exports = router;
