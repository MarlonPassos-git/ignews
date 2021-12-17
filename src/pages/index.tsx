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

  fetch('http://localhost:3000/api/users/12/30  ')
    .then(res => res)
    .then(data => console.log(data))
  
  
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