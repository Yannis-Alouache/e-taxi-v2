import { PhoneIcon, MapPinIcon, CalendarDaysIcon } from "@heroicons/react/24/solid"

const inputs = [
  {type: "text", name: "lorem", id: "lorem", placeholder: "Départ...", icon: <MapPinIcon className="pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />, key: "0"},
  {type: "text", name: "lorem", id: "lorem", placeholder: "Arrivé...", icon: <MapPinIcon className="pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />, key: "1"},
  {type: "text", name: "lorem", id: "lorem", placeholder: "Téléphone", icon: <PhoneIcon className="pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />, key: "2"},
  {type: "text", name: "lorem", id: "lorem", placeholder: "Date et Heure", icon: <CalendarDaysIcon className="pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />, key: "3"},
]


function BookingBanner() {
  return (
    <>
        <div className='xl:h-80 bg-amber-400 -mt-[4.35em] pt-28 md:pt-28 xl:pt-0 flex items-center'>
            <div className='container mx-auto px-5'>

                  <div className="grid xl:grid-cols-4 sm:grid-cols-1 gap-3">
                    {inputs.map((input) => {
                      return (
                        <div className="relative mt-1 rounded-md shadow-sm" key={input.key}>
                          {input.icon}
                          <input
                            type={input.type}
                            name={input.name}
                            id={input.id}
                            className="block w-full rounded-md text-gray-900 border-gray-300 sm:text-sm xl:text-base focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-10 py-3"
                            placeholder={input.placeholder}
                          />
                        </div>
                      )
                    })}
                  </div>

                  <div className="flex justify-center mt-10 mb-10 xl:mb-0">
                    <input className="bg-blue-800 px-5 py-3" type="submit" value="Envoyer"/>
                  </div>

            </div>
        </div>
    </>
  )
}

export default BookingBanner