// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { reservation } from '@prisma/client'
import { createReservation } from '@/models/reservation'

type Data = {
  type: string,
  message: string
  reservation: reservation
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const { method, body } = req
    const { departure_address, arrival_address, phone_number, date } = body

    switch (method) {
      case 'POST' :
        const reservation: reservation = await createReservation(departure_address, arrival_address, phone_number, date)
        res.status(200).json({type: 'success', message: "reservation successfull", reservation: reservation})
        break
      default :
        res.setHeader('Allow', ['POST'])
        res.status(405).end({status: "error", message: "Method not supported"})
        break
    }
}
