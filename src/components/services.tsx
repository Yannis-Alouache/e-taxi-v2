import Image from 'next/image'
import React from 'react'
import styles from "@/styles/Services.module.css"

const services = [
    {
        title: "trajet citadin rapide",
        image: "https://img.icons8.com/ios/100/F3C74F/city-block.png",
        alt: "trajet citadin taxi de lille",
        text: "Nos taxis vous garantissent des déplacements efficaces en ville, en évitant les retards. Voyagez rapidement et en toute confiance avec nos chauffeurs expérimentés, pour arriver à destination sans soucis.",
        id: "lorem",
        placeholder: "lorem",
        key: "0"
    },
    {
        title: "transfert aéroport",
        image: "https://img.icons8.com/ios/100/F3C74F/airport.png",
        alt: "trajet vers aéroport taxi de lille",
        text: "Facilitez vos déplacements vers l'aéroport de Lille-Lesquin grâce à nos chauffeurs expérimentés. Profitez de trajets en toute quiétude, alliant ponctualité et confort, pour un début ou une fin de voyage en toute sérénité.",
        id: "lorem",
        placeholder: "lorem",
        key: "1"
    },
    {
        title: "transport de baggage",
        image: "https://img.icons8.com/ios/100/F3C74F/suitcase.png",
        alt: "transport de baggage inclut dans le taxi",
        text: "Facilitez le transport de vos bagages vers votre destination. Nos chauffeurs expérimentés se chargent de vos effets, vous permettant de voyager sans encombre. Profitez de trajets confortables et tranquilles, en sachant que vos bagages sont entre de bonnes mains.",
        id: "lorem",
        placeholder: "lorem",
        key: "2"
    },
    {
        title: "conduite écologique",
        image: "https://img.icons8.com/ios/100/F3C74F/ecology-button--v1.png",
        alt: "conduite écologique du taxi de lille",
        text: "Optez pour une conduite écologique avec nos chauffeurs experts. Nous mettons en œuvre des pratiques respectueuses de l'environnement pour des trajets plus durables. Profitez de voyages confortables tout en réduisant votre empreinte carbone.",
        id: "lorem",
        placeholder: "lorem",
        key: "3"
    },
]

function Services() {
  return (
    <>
        <div id='services' className='mb-16 sm:mb-20 sm:mt-24 mt-10'>
            <div className='container mx-auto lg:px-6 md:px-6 sm:px-6 px-5 py-10'>
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight md:mb-4 lg:mb-10 text-gray-900 sm:text-4xl sm:mb-8 xl:mb-20">Nos Services</h2>
                    
                    <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                        {services.map((service) => {
                            return (
                                <div key={service.key} className={styles.withSeparator}>
                                    <div className="relative w-24 h-24 mx-auto md:mb-4 lg:mb-2 sm:mt-5 sm:mb-5 mt-8 mb-4">
                                        <Image src={service.image} alt={service.alt} fill={true} />
                                    </div>
                                    <h3 className='text-gray-900 text-mb sm:text-xl sm:mb-1 md:mb-1 lg:mb-3 xl:mt-10 xl:mb-3 uppercase font-bold'>{service.title}</h3>
                                    <p className="text-base font-light leading-relaxed mt-0 mb-4 text-gray-800 px-4">
                                        {service.text}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Services