import Stripe from 'stripe';
import { version } from '../../package.json';

export const stripe = new Stripe( // Aqui eu estou fazendo uma requisição para o stripe e passando a chave de acesso
    process.env.STRIPE_API_KEY,
    {
        apiVersion: '2020-08-27',
        appInfo: {
            name: 'ignews',
            version: version,
        
        }
    });