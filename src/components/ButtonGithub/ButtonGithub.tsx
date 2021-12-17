import { FaGithub } from 'react-icons/fa';
import styles from './styles.module.scss'
import { FiX } from 'react-icons/fi'
import { signIn, useSession, signOut } from 'next-auth/react';

export default function ButtonGithub() {
   const { data: session, status } = useSession()

    console.log(session)
    
    let buttonReturn: JSX.Element;

    if (session) {
        buttonReturn = (
            <button type="button" className={styles.container}>
                <FaGithub color="var(--green-500)" />
                <span>{ session.user.name }</span>
                <span
                    className={styles.x}
                    onClick={() => signOut()}
                >
                    <FiX color="var(--blue-500)" />
                </span>
            </button>
        )
        
    }
    else { 
        buttonReturn = (
            <button
                type="button"
                className={styles.container}
                onClick={()=> signIn('github') }

            >
                <FaGithub color="var(--yellow-500)" />
                <span>Sing in with GitHub</span>
            </button>
        )
    }

    return buttonReturn
}
