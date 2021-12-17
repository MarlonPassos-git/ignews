    import { NextApiRequest, NextApiResponse } from 'next';

    export default function (request: NextApiRequest, response: NextApiResponse) {
        const users = [
            { id: 1, name: 'Marlon' },
            { id: 2, name: 'Jane Doe' },
            { id: 3, name: 'Jack Doe' },
        ]

        console.log('oi')
        /* const [,n1, n2] = request.query.users */

        
        return response.status(200).json(users)
    }