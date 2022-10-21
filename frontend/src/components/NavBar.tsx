import { Menu } from "@headlessui/react"
import React from "react"
import Logo from "./svg/Logo.svg"

type MenuItem = {
    text: string
    link: string
    uid: string
}

export type NavBarProps = {
    menus: {
        text: string
        items: MenuItem[]
        uid: string
    }[]
}

const NavBar: React.FC<NavBarProps> = ({ menus }) => {
    return (
        <header className="flex justify-start p-4 max-h-32">
            <Logo className="fill-blue-300 max-w-sm" />
            <nav>
                {menus.map(
                    ({ text, items, uid }) => (
                        <Menu key={uid}>
                            {({ open }) => (
                                <>
                                    <Menu.Button className="px-2 py-8">
                                        {text}
                                    </Menu.Button>
                                    <Menu.Items className="flex flex-col absolute">
                                        {items.map(
                                            ({ text, link, uid }) => (
                                                <Menu.Item key={uid}>
                                                    {({ active }) => (
                                                        <a className={`p-2`} href={link}>
                                                            {text}
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            )
                                        )}
                                    </Menu.Items>
                                </>
                            )}
                        </Menu>
                    )
                )}
            </nav>
        </header>
    )
}

export default NavBar;