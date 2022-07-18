import Main from "./Main"
import NavBar, { NavBarProps } from "./NavBar"

export type LayoutProps = React.PropsWithChildren<{
    navBarProps: NavBarProps
}>

const Layout: React.FC<LayoutProps> = ({children, navBarProps}) => {
    return (
        <>
            <NavBar {...navBarProps} />
            <Main>{children}</Main>
        </>
    )
}

export default Layout