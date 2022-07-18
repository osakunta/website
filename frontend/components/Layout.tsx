

export default function Layout({children}) {
    return (
        <NavBar />
        <Main> {children} </Main>
        <Footer />
    )
}