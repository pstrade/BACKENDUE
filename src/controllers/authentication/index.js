import passport from 'passport';
import { googleStrategy } from './google';
import { vkStrategy } from './vk';
import { localStrategy, registerUser } from './local';

passport.use(googleStrategy);
passport.use(vkStrategy);
passport.use(localStrategy);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

export { passport, registerUser };
