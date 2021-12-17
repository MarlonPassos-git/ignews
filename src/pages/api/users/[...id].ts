  import { NextApiRequest, NextApiResponse } from 'next';

  export default function (request: NextApiRequest, response: NextApiResponse) {
          

    const {0: n1, 1: n2} = request.query.id
          /* const [,n1, n2] = request.query.id */
          const resposta = [{resposta : +n1 + +n2}]
          
          return response.status(200).json(resposta)
      }