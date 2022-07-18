import { Menu, MenuButton, MenuLink, MenuList } from "@reach/menu-button"
import "@reach/menu-button/styles.css"
import React from "react"
import styles from '../styles/NavBar.module.css'

type MenuItem = {
    text: string
    link: string
}

export type NavBarProps = {
    menus: {
        text: string
        items: MenuItem[]
    }[]
}

const NavBar: React.FC<NavBarProps> = ({menus}) => {
    return (
        <header className={styles.container}>
            <nav>
                <Menu>
                    {menus.map(
                        ({ text, items }) => (
                            <>
                                <MenuButton>
                                    {text}
                                </MenuButton>
                                <MenuList>
                                    {items.map(
                                        ({ text, link }) => (
                                            <MenuLink href={link}>
                                                {text}
                                            </MenuLink>
                                        )
                                    )}
                                </MenuList>
                            </>
                        )
                    )}
                </Menu>
            </nav>
        </header>
    )
}

export default NavBar;