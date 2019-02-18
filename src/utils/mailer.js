import nodeMailer from 'nodemailer';

// TODO
export const mailer = nodeMailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_MAIL,
    pass: process.env.GMAIL_PASSWORD,
  },
});
