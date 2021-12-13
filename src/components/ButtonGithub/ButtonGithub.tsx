import { FaGithub } from 'react-icons/fa';
import styles from './styles.module.scss'
import { FiX} from 'react-icons/fi'

export default function ButtonGithub() {

    const isUserLoggedIn = true;
    let buttonReturn: JSX.Element;

    if (isUserLoggedIn) {
        buttonReturn = (
            <button type="button" className={styles.container}>
                <FaGithub color="var(--green-500)" />
                <span>User name</span>
                <span  className={styles.x}>
                    <FiX color="var(--blue-500)" />
                </span>
            </button>
        )
        
    }
    else { 
        buttonReturn = (
            <button type="button" className={styles.container}>
                <FaGithub color="var(--yellow-500)" />
                <span>Sing in with GitHub</span>
            </button>
        )
    }

    return buttonReturn
}
