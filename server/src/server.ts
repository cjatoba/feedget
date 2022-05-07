import express from 'express';
import nodemailer from 'nodemailer';
import { prisma } from './prisma';

const app = express();

app.use(express.json());

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "d1258b820557d7",
    pass: "146854831f9bcb"
  }
});

app.post('/feedbacks', async ( req, res) => {
  const { type, comment, screenshot } = req.body;
  
  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    }
  })

  await transport.sendMail({
    from: 'Equipe Feedget <suporte@feedget.com>',
    to: 'Teste <teste@gmail.com>',
    subject: 'Feedback do usuário',
    html: [
      `<div style="font-family: sans-serif; font-size: 16px, color:#111", background-color:gray>`,
      `<p>Tipo de feedback ${feedback.type}</p>`,
      `<p>Comentário do feedback ${feedback.comment}</p>`,
      `</div>`,
    ].join('\n')
  });

  return res.status(201).json({ data: feedback });
})

app.listen(3333, () => {
  console.log('Server started on port 3333');
});