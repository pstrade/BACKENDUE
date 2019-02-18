import { Strategy as VkStrategy } from 'passport-vkontakte';

export const vkStrategy = new VkStrategy({
  clientID: process.env.VKONTAKTE_APP_ID,
  clientSecret: process.env.VKONTAKTE_APP_SECRET,
  callbackURL: '/auth/vk/callback',
}, (_accessToken, _refresToken, _params, _profile, done) => {
  done(null, {});
});
