import React from 'react'

function CarDetail() {
  return (
    <div>
      <div className="mx-auto grid max-w-2xl grid-cols-1  gap-y-16 gap-x-8 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-1 lg:px-8">
        <div>
          <h2 className="text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">Le Véhicule</h2>
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
          <img
            src="https://img.autotrader.co.za/13604807/Crop800x600"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://img.autotrader.co.za/13604832/Crop800x600"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://alphubel.ch/limousine-service/cms/u/2016/08/E220-Nappa.jpg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://car-images.bauersecure.com/wp-images/12280/merc_e220d_coupe_03.jpg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  )
}

export default CarDetail