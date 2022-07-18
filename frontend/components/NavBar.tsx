import { GetStaticProps } from "next"
import React from "react"

type MenuItem = {
    text: string
    link: string
}

type NavBarProps = {
    menus: {
        text: string
        items: MenuItem[]
    }[]
}

const NavBar: React.FC<NavBarProps> = ({menus}) => {
    return (
        
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    return {
    
    }
}

export default NavBar;