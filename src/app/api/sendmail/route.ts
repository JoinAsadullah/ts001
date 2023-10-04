// pages/api/sendemail.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  const mailtoLink = 'mailto:asadullah@devxio.com';
  res.redirect(mailtoLink);

//   res.setHeader('Location', mailtoLink);
//   res.status(302).end();
}
