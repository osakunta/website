import Main from "./Main"
import NavBar, { NavBarProps } from "./NavBar"

export type LayoutProps = React.PropsWithChildren<{
    navBarProps: NavBarProps
}>

const Layout: React.FC<LayoutProps> = ({children, navBarProps}) => {
    return (
        <div className="min-h-screen text-grey-100 bg-grey-900">
            <NavBar {...navBarProps} />
            <Main>{children}</Main>
        </div>
    )
}

export default Layout