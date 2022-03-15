import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { HeaderModule } from '../components/Header'
import { NavbarModule } from '../components/Navbar/Navbar'
import { FooterModule } from '../components/Footer/Footer'
export default function Home() {
  return (
    <div className={styles.container} id='container'>
      <HeaderModule title="Groupomania" description="None yet" />
      <NavbarModule />
      <FooterModule />
     </div>
  )
}
