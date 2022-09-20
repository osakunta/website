import type { GetStaticProps, NextPage } from 'next'
import Layout, { LayoutProps } from '../components/Layout'
import { Card } from '../components/Card'
import asuntolaImage from '../components/sato.jpeg'

type HomeProps = {
  layoutProps: LayoutProps
}

const Home: NextPage<HomeProps> = ({layoutProps}) => {
  const id = "1FAIpQLSdn2Rp4nWnjQDaJOXL-ylMTYnT_F2wrHaX7kVM98RKbbAJzVQ"
  return (
    <Layout {...layoutProps}>
    <div className="flex flex-wrap justify-center items-start gap-16 w-full p-10 font-normal bg-grey-900 text-grey-100">
      <Card
        image={asuntolaImage.src}
        title="Asuntola"
        text="Satakuntatalon asuntola sijaitsee loistavalla paikalla aivan Helsingin ydinkeskustan tuntumassa. 
          Korkeakoulut ovat hyvien kulkuyhteyksien päässä ja edulliselle vuokralle saa vastinetta monien etujen muodossa."
        button="Hae asuntoa" />
      
      <Card
        image="https://cdn.satakuntalainenosakunta.fi/images/toiminta/juhlat.jpg"
        title="Osakunta"
        text="Satakuntalainen Osakunta on Helsingin seudulla opiskelevien satakuntalaisten ja satakuntalaismielisten korkeakouluopiskelijoiden yhteisö. Tarjoamme jäsenillemme toimintaa, tapahtumia, palveluita ja kodin keskellä Kamppia."
        button="Liity jäseneksi" />

      <Card
        image={asuntolaImage.src}
        title="Asuntola"
        text="Satakuntatalon asuntola sijaitsee loistavalla paikalla aivan Helsingin ydinkeskustan tuntumassa. 
          Korkeakoulut ovat hyvien kulkuyhteyksien päässä ja edulliselle vuokralle saa vastinetta monien etujen muodossa."
        button="Hae asuntoa" />

      <Card
        image="https://cdn.satakuntalainenosakunta.fi/images/toiminta/juhlat.jpg"
        title="Osakunta"
        text="Satakuntalainen Osakunta on Helsingin seudulla opiskelevien satakuntalaisten ja satakuntalaismielisten korkeakouluopiskelijoiden yhteisö. Tarjoamme jäsenillemme toimintaa, tapahtumia, palveluita ja kodin keskellä Kamppia."
        button="Liity jäseneksi" /> 
      
      <Card
        image="https://cdn.satakuntalainenosakunta.fi/images/toiminta/juhlat.jpg"
        title="Osakunta"
        text="Satakuntalainen Osakunta on Helsingin seudulla opiskelevien satakuntalaisten ja satakuntalaismielisten korkeakouluopiskelijoiden yhteisö. Tarjoamme jäsenillemme toimintaa, tapahtumia, palveluita ja kodin keskellä Kamppia."
        button="Liity jäseneksi" />

      <Card
        image={asuntolaImage.src}
        title="Asuntola"
        text="Satakuntatalon asuntola sijaitsee loistavalla paikalla aivan Helsingin ydinkeskustan tuntumassa. 
          Korkeakoulut ovat hyvien kulkuyhteyksien päässä ja edulliselle vuokralle saa vastinetta monien etujen muodossa."
        button="Hae asuntoa" /> 

      <Card
        image="https://cdn.satakuntalainenosakunta.fi/images/toiminta/juhlat.jpg"
        title="Osakunta"
        text="Satakuntalainen Osakunta on Helsingin seudulla opiskelevien satakuntalaisten ja satakuntalaismielisten korkeakouluopiskelijoiden yhteisö. Tarjoamme jäsenillemme toimintaa, tapahtumia, palveluita ja kodin keskellä Kamppia."
        button="Liity jäseneksi" /> 
    </div>
    </Layout>
  )
}

//<div className="flex flex-col items-center justify-center w-full h-screen p-10">
//      <iframe className="w-96 h-full" src="https://docs.google.com/forms/d/e/1FAIpQLSdn2Rp4nWnjQDaJOXL-ylMTYnT_F2wrHaX7kVM98RKbbAJzVQ/viewform?embedded=true"></iframe>
//    </div>

export const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
  return {
    props: {
      layoutProps: {
        navBarProps: {
          menus: [
            {
              text: "Jäsenille", 
              uid: "dsa",
              items: [
                {text: "Kalenteri", link: "kalenteri", uid: "asd"},
                {text: "Postia hallitukselle", link: "postia-hallitukselle", uid: "asd1"},
                {text: "Häirintälomake", link: "hairintalomake", uid: "asd2"}
              ]
            }
          ]
        }
      }
    }
  }
}

export default Home
