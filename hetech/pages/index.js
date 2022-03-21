import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from "Next/link"
import Intro from '../components/Intro'
import Services from './Services'
import {data} from '../data'
import Testimonials from '../components/Testimonials'

export default function Home({services}) {
  console.log(services)
  return (
    <div className={styles.container}>
      <Head>
        <title>H.E Technologies</title>
        <meta name="description" content="H.E Technologies Official Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Intro/>
        <Services services={services}/>
        <Testimonials/>
            </div>
  )
}

export const getStaticProps = async () =>{
  const services = data;
  return {
    props: { services }
  } 
};