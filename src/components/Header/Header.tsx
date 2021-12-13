import React from 'react'
import ButtonGithub from '../ButtonGithub/ButtonGithub'
import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            
                <img src="/images/logo.svg" alt="Logo ig.news" />
                <nav>
                    <a className={ styles.navAtive}>Home</a>
                    <a>Posts</a>
                </nav>
                <ButtonGithub />
            
        </header>
    )
}
