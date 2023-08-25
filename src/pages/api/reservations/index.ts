// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Response = {
  response: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
    const { method } = req

    switch (method) {
      case 'GET' :
        res.status(200).json({response: "Hello World !"})
        break
      default :
        res.setHeader('Allow', ['GET'])
        res.status(405).end({status: "error", message: "Method not supported"})
        break
    }
}
