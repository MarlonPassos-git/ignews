import Head from 'next/head'
import Image from 'next/image'
import { GetStaticProps } from 'next'
import { useState } from 'react'
import { Header } from '../components/Header/Header'
import { Main } from '../components/Main/Main'
import { stripe } from '../services/stripe'

interface HomeProps { 
  product: {
    priceId: string,
    amount: number,
  }
}


export default function Home({ product}: HomeProps) {

  return (
    <>
    <Head>
        <title> | ig.news</title>
    </Head>

      <Header />
      <Main
        price={product.amount}
        priceId={product.priceId}
      />
      
    </>
  )
}

 
export const getStaticProps: GetStaticProps = async () => {
  // Aqui chamo o serviço do stripe para pegar o preço do produto
  const price = await stripe.prices.retrieve('price_1K5kSCEh7YFjIusGS4CT1SZw', { 
    expand: ['product'],
  })

  console.log('ola')

  const product = {
    priceId: price.id,
    amount: price.unit_amount / 100,
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 // 1 dia
    
  }
  
  
}