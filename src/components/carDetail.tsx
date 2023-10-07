import Image from 'next/image'
import React from 'react'

import Merco1 from '../assets/merco-1.webp'
import Merco2 from '../assets/merco-2.webp'
import Merco3 from '../assets/merco-3.webp'
import Merco4 from '../assets/merco-4.webp'

function CarDetail() {
  return (
    <div id='carDetail'>
      <div className="container mx-auto md:py-0 lg:py-0 xl:py-0 lg:px-6 sm:px-6 px-4">
      <div className="grid grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-1">
        <div>
          <h2 className="text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl mb-10 xl:mt-16 lg:mt-12 md:mt-12 sm:mt-10 mt-10">Le Véhicule</h2>
          <p className="mt-4 text-gray-500">
            E-Taxi-Lille vous propose une un véhicule de qualité supérieure,
            la Mercedes 220d, pour offrir à ses clients une expérience de voyage luxueuse et sécurisée.
            En outre, la Mercedes 220d est équipée de technologies de pointe pour garantir la sécurité des passagers et une conduite en douceur sur toutes les routes de lille. 
          </p>
          <p className="mt-4 text-gray-500">
            L'intérieur luxueux et spacieux de la Mercedes 220d offre également un confort optimal pour une expérience de voyage haut de gamme.
            Avec la fiabilité de la Mercedes 220d, E-Taxi-Lille peut offrir un service de taxi de qualité supérieure à ses clients, alliant luxe et sécurité. La voiture de luxe ajoutera une touche d'élégance à chaque trajet et garantira une expérience de voyage mémorable pour tous les clients.
          </p>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">

          <div>
            <Image
              src={Merco1}
              alt="Véhicule de transport confortable pour vos déplacements | E-Taxi"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto rounded-lg bg-gray-100"
            />
          </div>

          <div>
            <Image
              src={Merco2}
              alt="Véhicule de transport confortable pour vos déplacements | E-Taxi"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto rounded-lg bg-gray-100"
            />
          </div>

          <div>
            <Image
              src={Merco3}
              alt="Véhicule de transport confortable pour vos déplacements | E-Taxi"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto rounded-lg bg-gray-100"
            />
          </div>
          
          <div>
            <Image
              src={Merco4}
              alt="Véhicule de transport confortable pour vos déplacements | E-Taxi"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto rounded-lg bg-gray-100"
            />
          </div>

        </div>
      </div>
      </div>
    </div>
  )
}

export default CarDetail