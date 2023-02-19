import Image from 'next/image'
import React from 'react'
import styles from "@/styles/Services.module.css"

const services = [
    {
        title: "trajet citadin rapide",
        image: "https://img.icons8.com/ios/100/F3C74F/city-block.png",
        alt: "trajet citadin taxi de lille",
        id: "lorem",
        placeholder: "lorem",
        key: "0"
    },
    {
        title: "transfert aéroport",
        image: "https://img.icons8.com/ios/100/F3C74F/airport.png",
        alt: "trajet vers aéroport taxi de lille",
        id: "lorem",
        placeholder: "lorem",
        key: "1"
    },
    {
        title: "transport de baggage",
        image: "https://img.icons8.com/ios/100/F3C74F/suitcase.png",
        alt: "transport de baggage inclut dans le taxi",
        id: "lorem",
        placeholder: "lorem",
        key: "2"
    },
    {
        title: "conduite écologique",
        image: "https://img.icons8.com/ios/100/F3C74F/ecology-button--v1.png",
        alt: "conduite écologique du taxi de lille",
        id: "lorem",
        placeholder: "lorem",
        key: "3"
    },
]

function Services() {
  return (
    <>
        <div className='mb-32 mt-24'>
            <div className='container mx-auto px-40 py-10'>
                <div className="text-center">
                    <h2 className='text-5xl xl:mb-20 font-bold tracking-tight text-gray-900 sm:text-5xl'>
                        Nos Services
                    </h2>
                    
                    <div className="grid xl:grid-cols-4 sm:grid-cols-1">
                        {services.map((service) => {
                            return (
                                <div key={service.key} className={styles.withSeparator}>
                                    <div className="relative w-24 h-24 mx-auto">
                                        <Image src={service.image} alt={service.alt} fill={true} />
                                    </div>
                                    <h3 className='text-gray-900 text-xl xl:mt-10 xl:mb-3 uppercase font-bold'>{service.title}</h3>
                                    <p className="text-base font-light leading-relaxed mt-0 mb-4 text-gray-800 px-4">
                                        I will be the leader of a company that ends up being worth billions
                                        of dollars, because I got the answers. I understand culture. I am
                                        the nucleus. I think that’s a responsibility that I have, to push
                                        possibilities, to show people, this is the level that things could
                                        be at.
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