// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as nodemailer from 'nodemailer'


type Data = {
  type: string,
  message: string,
  error?: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const { method, body } = req
    const { departure_address, arrival_address, phone_number, date } = body

    switch (method) {
      case 'POST' :
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.MAILER_MAIL,
            pass: process.env.MAILER_PASSWORD,
          },
        });

        const html = 
        "<html>" +
          "<p><strong>adresse de départ : </strong>" + departure_address + "</p>" +
          "<p><strong>adresse d'arrivé : </strong>" + arrival_address + "</p>" +
          "<p><strong>Numéro de téléphone : </strong>" + phone_number + "</p>" +
          "<p><strong>Date et heure : </strong>" + date + "</p>" +
          "<p>Appeller pour confirmer RDV</p>" +
        "</html>";


        const mailOptions = {
          from: process.env.MAILER_MAIL,
          to: process.env.MAILER_MAIL2,
          subject: "Nouvelle Réservation sur le site !",
          html: html,
        };

        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            res.status(200).json({type: 'failure', message: "Problème serveur", error: error})
          } else {
            res.status(200).json({type: 'success', message: "reservation successfull"})
          }
        });
        break
      default :
        res.setHeader('Allow', ['POST'])
        res.status(405).end({status: "error", message: "Method not supported"})
        break
    }
}
