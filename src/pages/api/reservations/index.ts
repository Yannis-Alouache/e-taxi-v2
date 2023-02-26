// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { reservation } from '@prisma/client'
import { getReservations } from '@/models/reservation'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<reservation[]>
) {
    const { method } = req

    switch (method) {
      case 'GET' :
        const reservations: reservation[] = await getReservations()
        res.status(200).json(reservations)
        break
      default :
        res.setHeader('Allow', ['GET'])
        res.status(405).end({status: "error", message: "Method not supported"})
        break
    }
}
