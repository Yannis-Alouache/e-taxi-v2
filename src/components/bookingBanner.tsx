import { PhoneIcon, MapPinIcon, CalendarDaysIcon } from "@heroicons/react/24/solid"
import { useEffect, useRef, useState } from "react"
import { Combobox } from '@headlessui/react'
import axios from "axios"

function BookingBanner() {

  const [addressDepart, setAddressDepart] = useState("")
  const [query, setQuery] = useState("")
  const [data, setData] = useState([])
  let res = null

  const filteredPeople = [
    "6 avenue du général de gaulle, 59130 Lambersart",
    "Fab",
    "Leo",
    "Jules"
  ]

  async function getData() {
    const { data } = await axios.get("https://api-adresse.data.gouv.fr/search/")
    setData(data.features)
  }

  useEffect(() => {
    getData()
    console.log(data)
  }, [query])
  

  return (
    <>
      <div id="bookingBanner" className='xl:h-80 bg-amber-400 -mt-[4.35em] pt-28 md:pt-28 xl:pt-0 flex items-center'>
          <div className='container mx-auto px-5'>

            <div className="grid xl:grid-cols-4 sm:grid-cols-1 gap-3">
      
              {/* <div className="relative mt-1 rounded-md shadow-sm">
                <MapPinIcon className="pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
                <input
                  type="text"
                  name="depart"
                  id="depart"
                  onChange={(e) => {
                    setAddressDepart(e.target.value)
                  }}
                  className="block w-full rounded-md text-gray-900 border-gray-300 sm:text-sm xl:text-base focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-10 py-3"
                  placeholder="Départ..."
                />
              </div> */}

              <div className="relative mt-1 rounded-md shadow-sm">
                <Combobox value={addressDepart} name="depart">
                  <MapPinIcon className="pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
                  <Combobox.Input onChange={(event) => setQuery(event.target.value)} placeholder="Départ..." className="block w-full rounded-md text-gray-900 border-gray-300 sm:text-sm xl:text-base focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-10 py-3" />
                  <Combobox.Options className="bg-white text-gray-900 absolute transform rounded-md inline-block top-[110%] w-[160%]">
                    {filteredPeople.map((person) => (
                      <Combobox.Option className="py-2 px-5 cursor-pointer rounded-md hover:bg-slate-50 flex" key={person} value={person} onClick={() => setAddressDepart(person)}>
                        <MapPinIcon className="w-6 mr-3 text-gray-400"/> 
                        {person}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                </Combobox>
              </div>

              <div className="relative mt-1 rounded-md shadow-sm">
                <MapPinIcon className="pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
                <input
                  type="text"
                  name="arrive"
                  id="arrive"
                  className="block w-full rounded-md text-gray-900 border-gray-300 sm:text-sm xl:text-base focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-10 py-3"
                  placeholder="Arrivé..."
                />
              </div>

              <div className="relative mt-1 rounded-md shadow-sm">
                <PhoneIcon className="pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
                <input
                  type="text"
                  name="telephone"
                  id="telephone"
                  className="block w-full rounded-md text-gray-900 border-gray-300 sm:text-sm xl:text-base focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-10 py-3"
                  placeholder="Téléphone"
                />
              </div>

              <div className="relative mt-1 rounded-md shadow-sm">
                <CalendarDaysIcon className="pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
                <input
                  type="text"
                  name="date_et_heure"
                  id="date_et_heure"
                  className="block w-full rounded-md text-gray-900 border-gray-300 sm:text-sm xl:text-base focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-10 py-3"
                  placeholder="Date et Heure"
                />
              </div>

            </div>

            <div className="flex justify-center mt-10 mb-10 xl:mb-0">
              <input className="bg-[#9F340A] uppercase font-bold rounded-full cursor-pointer drop-shadow-2xl px-5 py-3 " type="submit" value="Reservez un Taxi"/>
            </div>

          </div>
      </div>
    </>
  )
}

export default BookingBanner