import LocalStrategy from 'passport-local';
import { User } from '../../models';

export async function registerUser(email, password) {
  const a = new User({ email, password });
  await a.save();
}

async function login(email, password, done) {
  const user = await User.findOne({ email });
  const res = await user.verifyPassword(password);
  if (res) {
    return done(null, user);
  }
  return done(null, false);
}

export const localStrategy = new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
}, login);
