

const inputs = [
  {type: "text", name: "lorem", id: "lorem", placeholder: "lorem", key: "0"},
  {type: "text", name: "lorem", id: "lorem", placeholder: "lorem", key: "1"},
  {type: "text", name: "lorem", id: "lorem", placeholder: "lorem", key: "2"},
  {type: "text", name: "lorem", id: "lorem", placeholder: "lorem", key: "3"},
]


function BookingBanner() {
  return (
    <>
        <div className='xl:h-80 bg-amber-400 -mt-[3.6em] pt-28 md:pt-28 xl:pt-0 flex items-center'>
            <div className='container mx-auto px-5'>

                  <div className="grid xl:grid-cols-4 sm:grid-cols-1 gap-4">
                    {inputs.map((input) => {
                      return (
                        <div className="relative mt-1 rounded-md shadow-sm" key={input.key}>
                          
                          <input
                            type={input.type}
                            name={input.name}
                            id={input.id}
                            className="block w-full rounded-md border-gray-300 sm:text-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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