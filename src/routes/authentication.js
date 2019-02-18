import { Router } from 'express';
import { passport, registerUser } from '../controllers/authentication';

export const authenticationRouter = Router();

authenticationRouter.get('/google', passport.authenticate('google', { scope: ['profile', 'email'], session: false }));

authenticationRouter.get('/google/callback', passport.authenticate('google', { failureRedirect: '/auth/fail' }),
  (_req, res) => {
    res.send('Suc');
  });

authenticationRouter.get('/vk', passport.authenticate('vkontakte', { scope: ['profile', 'email'], session: false }));

authenticationRouter.get('/vk/callback', passport.authenticate('vkontakte', { failureRedirect: '/auth/fail' }),
  (_req, res) => {
    res.send('Suc');
  });

authenticationRouter.post('/local', passport.authenticate('local', { failureRedirect: '/auth/fail' }),
  (_req, res) => {
    res.send('Suc');
  });

authenticationRouter.post('/register', async (req, res) => {
  await registerUser(req.body.email, req.body.password);
  res.send('Suc');
});

authenticationRouter.use('/fail', (_req, res) => {
  res.status(401).send('Wrong');
});
