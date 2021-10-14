import express from 'express';
import { currentUser } from '../middlewars/current-user';
import { requireAuth } from '../middlewars/require-auth';

const router = express.Router();

router.get('/api/users/currentuser', currentUser, requireAuth, (req, res) => {
  if (!req.session?.jwt) {
    return res.send({ currentUser: null });
  }
  res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
