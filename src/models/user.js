import { model, Schema } from 'mongoose';
import { compare, hashSync } from 'bcrypt';

const SALT_ROUNDS = 10;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: true,
    set: password => hashSync(password, SALT_ROUNDS),
  },
});

userSchema.methods.verifyPassword = function (password) {
  return compare(password, this.password);
};

export const User = model('User', userSchema);
