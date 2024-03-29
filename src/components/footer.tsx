import React from 'react'
import styles from "@/styles/Footer.module.css"
import { PhoneIcon } from "@heroicons/react/24/outline"
import Link from 'next/link'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <>
        <div className='bg-[#161616]'>
            <div className='xl:container xl:mx-auto px-40 md:px-5 sm:px-5 lg:px-10 px-5 py-20'>

                <div className='grid xl:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-16'>
                    <div>
                        <h3 className='uppercase text-amber-400 text-2xl font-bold mb-3'>about</h3>
                        <p className="text-base font-light leading-relaxed mt-0 mb-4 text-white-700">
                        Chez E-Taxi Lille, nous sommes votre choix de confiance pour des déplacements en taxi dans la région. Avec une équipe de chauffeurs expérimentés et une flotte de véhicules modernes, nous nous engageons à vous offrir des trajets confortables et sécurisés. Que ce soit pour des courses en ville, des transferts vers l'aéroport ou d'autres besoins de déplacement, comptez sur E-Taxi Lille pour vous conduire avec fiabilité vers votre destination.
                        </p>
                    </div>

                    <div>
                        <h3 className='uppercase text-amber-400 text-2xl font-bold mb-3'>Liens Utiles</h3>
                        <div className='flex xl:grid-cols-2 justify-between'>
                            <div className='w-5/12'>
                                <ul>
                                    <li className={styles.withSeparator + " mb-1"}><Link className={styles.footerLink + " hover:text-amber-400"} href='/'>Accueil</Link></li>
                                    <li className={styles.withSeparator + " mb-1"}><Link className={styles.footerLink + " hover:text-amber-400"} href='/#bookingBanner'>Reservation</Link></li>
                                    <li className={styles.withSeparator + " mb-1"}><Link className={styles.footerLink + " hover:text-amber-400"} href='/#services'>Services</Link></li>
                                </ul>
                            </div>
                            <div className='w-5/12'>
                                <ul>
                                    <li className={styles.withSeparator + " mb-1"}><Link className={styles.footerLink + " hover:text-amber-400"} href='/#carDetail'>Véhicule</Link></li>
                                    <li className={styles.withSeparator + " mb-1"}><Link className={styles.footerLink + " hover:text-amber-400"} href='/#testimonials'>Avis Client</Link></li>
                                    <li className={styles.withSeparator + " mb-1"}><Link className={styles.footerLink + " hover:text-amber-400"} href='/blog'>Blog</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className='uppercase text-amber-400 text-2xl font-bold mb-3'>contactez-nous</h3>
                        <div className='flex flex-col xl:grid-cols-1 '>
                            <div className='flex mb-3.5'>
                                <PhoneIcon className='h-6 w-6 mr-4 text-amber-400' />
                                <p className=''>06.85.35.74.48</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#0C0C0C]'>
                <div className='xl:container xl:mx-auto px-40 sm:px-5 md:px-5 lg:px-10 py-10 px-5'>
                    <p>© {year} <span className="text-amber-400">E-Taxi-Lille.</span> Tous droits réservés.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer