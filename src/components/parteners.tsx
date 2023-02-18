import React from 'react'
import Image from 'next/image'

const parteners = [
    {image: "https://via.placeholder.com/70", alt: "a", id: "0"},
    {image: "https://via.placeholder.com/70", alt: "b", id: "1"},
    {image: "https://via.placeholder.com/70", alt: "c", id: "2"},
    {image: "https://via.placeholder.com/70", alt: "d", id: "3"},
    {image: "https://via.placeholder.com/70", alt: "e", id: "4"},
]

function Parteners() {
  return (
    <div className='mt-10 bg-amber-400'>
        <div className='container mx-auto px-40 py-10'>

            <div className="grid xl:grid-cols-6 sm:grid-cols-1">
                {parteners.map((partener) => {
                return (
                    <div key={partener.id}>
                        <div className="relative w-24 h-24 mx-auto">
                            <Image src={partener.image} alt={partener.alt} fill={true} />
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