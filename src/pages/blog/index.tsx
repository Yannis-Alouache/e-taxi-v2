import Footer from '@/components/footer'
import BlogCardsLayout from '@/components/blogCardsLayout'
import { Inter } from '@next/font/google'
import Head from 'next/head'
import HeroBanner from '@/components/heroBanner'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Blog() {
  return (
    <>
        <Head>
            <title>Service de Taxi à Lille - Trajets Confortables avec E-Taxi Lille</title>
            <meta name="description" content="Découvrez E-Taxi Lille, votre partenaire de confiance pour des déplacements en taxi agréables à Lille et ses environs. Profitez de trajets confortables, d'une équipe de chauffeurs expérimentés et d'une flotte de véhicules modernes. Que ce soit pour des courses en ville ou des transferts vers l'aéroport, choisissez E-Taxi Lille pour des voyages sûrs et fiables." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="geo.region" content="FR-HDF" />
            <meta property="og:title" content="E-Taxi Lille - Votre Service de Taxi à Lille" />
            <meta name="twitter:title" content="Service de Taxi E-Taxi Lille" />
            <meta name="robots" content="index, follow" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <HeroBanner isBlogPage={true} />
        <BlogCardsLayout />
        <Footer />
    </>
  )
}