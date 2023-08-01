import express from 'express';
import {getUser, getUserFriends, addRemoveFriend, getAllUsers} from '../controllers/user.controllers.js';
import { auth } from '../middlewares/auth.middlewares.js';

const router = express.Router();

router.get('/:id', auth, getUser);
router.get('/:id/friends', auth, getUserFriends);
router.get('/users',  getAllUsers);

router.patch('/:id/:friendid', auth, addRemoveFriend);

export default router;