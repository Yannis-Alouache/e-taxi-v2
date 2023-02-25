import React from 'react'
import Image from 'next/image'

const parteners = [
    {image: "partener_logo_auchan.png", alt: "a", id: "0"},
    {image: "partener_logo_leroy_merlin.png", alt: "b", id: "1"},
    {image: "partener_logo_losc.png", alt: "c", id: "2"},
    {image: "partener_logo_decathlon.png", alt: "c", id: "3"},
    {image: "partener_logo_ikea.png", alt: "c", id: "4"},
]

function Parteners() {
  return (
    <div id='parteners' className='mt-10 bg-amber-400'>
        <div className='xl:container xl:mx-auto md:px-5 lg:px-10 sm:px-5 py-10'>
            <div className="grid xl:grid-cols-6 sm:grid-cols-3 sm:gap-3 md:grid-cols-6 lg:grid-cols-6 items-center">

                <div>
                    <h3 className='text-gray-900 text-xl md:text-sm uppercase font-bold'>Nos Partenaires</h3>
                    <h3 className='text-white-900 text-3xl md:text-2xl uppercase font-bold'>Et Clients</h3>
                </div>
                {parteners.map((partener) => {
                return (
                    <div key={partener.id}>
                        <div className="relative lg:w-24 lg:h-24 md:w-20 md:h-20 sm:w-20 sm:h-20 mx-auto">
                            <Image src={require("@/assets/" + partener.image)} alt={partener.alt} fill={false} className="absolute top-1/2 -translate-y-1/2" />
                        </div>
                    </div>
                )
                })}

            </div>

        </div>
    </div>
  )
}

export default Parteners