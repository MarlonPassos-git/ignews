import React from 'react'
import { SubscribeButton } from '../SubscribeButton/SubscribeButton'
import styles from './styles.module.scss'

interface MainProps { 
    price: number,
    priceId: string,
}

export function Main({ price, priceId}: MainProps) {
    return (
        <main className={styles.container}>
            <section>
                <p><span className={styles.palmas}></span> Hey, welcome</p>  
                <h1>
                    News about<br />
                    the <span>React</span> world </h1>
                <p>
                    Get acess to all the publications<br />
                    <span>for ${ price } month</span>
                </p>
                <SubscribeButton priceId={ priceId }/>
                
            </section>
            <img className={styles.img} src="/images/avatar.svg" alt="garota programando" />
        </main>
    )
}
