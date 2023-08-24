import Image from "next/image"

const testimonials = [
    {
        text: "“Excellent service. J'ai été contraint de contacter en urgence suite à une panne de ma voiture. En un temps record, le taxi est arrivé et j'ai pu attraper mon train grâce à leur réactivité exemplaire. Je recommande vivement cette solution rapide et efficace !”.",
        img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        name: "Robert",
        work_function: "CTO, Robert Consultency",
        key: "0"
    },
    {
        text: '“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.',
        img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        name: "Robert",
        work_function: "CTO, Robert Consultency",
        key: "1"
    },
    {
        text: '“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.',
        img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        name: "Robert",
        work_function: "CTO, Robert Consultency",
        key: "2"
    },

]

function Testimonials() {
  return (
    <>
        <section id="testimonials" className="mb-24">
            <div className="container mx-auto lg:px-6 px-6 py-10">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl xl:mb-4 xl:mt-4">Nos Avis Clients</h2>
                </div>

                <p className="max-w-2xl mx-auto mt-2 text-center text-gray-900">
                    Voyez donc ce que nos clients pensent de nous !
                </p>

                <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-20 lg:grid-cols-2 xl:grid-cols-3">


                    {testimonials.map((testimonial) => {
                        return (
                            <div className="p-8 border rounded-lg border-amber-400" key={testimonial.key}>
                                <p className="leading-loose text-gray-500">
                                    {testimonial.text}
                                </p>
        
                                <div className="flex items-center mt-8 -mx-2">
                                    <Image className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src={testimonial.img} width={880} height={880} alt="" />
        
                                    <div className="mx-2">
                                        <h1 className="font-semibold text-gray-800">{testimonial.name}</h1>
                                        <span className="text-sm text-gray-500">{testimonial.work_function}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </section>
            </div>
        </section>

        {/* <div className='mb-32 mt-10'>
            <div className='container mx-auto px-40 py-10'>
                <div className="text-center">
                    <h2 className='text-5xl xl:mb-12 font-bold tracking-tight text-gray-900 sm:text-5xl'>
                        Nos Avis
                    </h2>
                </div>
            </div>
        </div> */}
    </>
  )
}

export default Testimonials