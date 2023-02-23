// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  msg?: string | undefined
  status?: string | undefined
  code?: number | undefined
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if (req.method === 'POST') {
      const {addressD, addressA, phone, date} = req.body
      res.status(200).send({"msg": "Reçu dans le serveur de traitement", "status": "success", "code": 552})
    } else {
      res.status(200).send({"msg": "En get"})
    }
}
