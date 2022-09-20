import styles from '../styles/Main.module.css'

const Main: React.FC<React.PropsWithChildren> = ({children}) => {
    return (
        <main className="flex flex-col justify-center content-center items-center">
            {children}
        </main>
    )
}

export default Main