import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout, { LayoutProps } from '../components/Layout'
import styles from '../styles/Home.module.css'

type HomeProps = {
  layoutProps: LayoutProps
}

const Home: NextPage<HomeProps> = ({layoutProps}) => {
  return (
    <Layout {...layoutProps}>
      Welcome
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
  return {
    props: {
      layoutProps: {
        navBarProps: {
          menus: [
            {
              text: "Jäsenille", 
              items: [{text: "Ilmoittautuminen", link: "ilmo"}]
            }
          ]
        }
      }
    }
  }
}

export default Home
