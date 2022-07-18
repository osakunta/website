import styles from '../styles/Main.module.css'

const Main: React.FC<React.PropsWithChildren> = ({children}) => {
    return (
        <main className={styles.main}>
            {children}
        </main>
    )
}

export default Main