import React from 'react'
import BlogUnit from './blogUnit';
import blogData from '@/blogData.json'



function BlogCardsLayout() {
    return (
        <>
            <section className='mx-auto py-5 max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0'>
                <div className="divide-y divide-gray-300">
                    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
                        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-800 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                            Blog
                        </h1>
                        <p className="text-lg leading-7 text-gray-500 dark:text-gray-500">Toute l'actualité du transport à la personne sur Lille et sa métropole</p>
                    </div>
                    <ul className="divide-y divide-gray-300">
                        {blogData.map(function(data, index){
                            return (
                                <BlogUnit {...data} key={index} />
                            )
                        })}
                    </ul>
                </div>
            </section>
        </>
    )
}



export default BlogCardsLayout;