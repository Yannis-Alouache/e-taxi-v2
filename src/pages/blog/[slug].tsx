import blogData from '@/blogData.json'
import BlogNavBar from '@/components/blogNavBar';
import Footer from '@/components/footer';
import Image from 'next/image';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';

export const getStaticPaths: GetStaticPaths = async () => {

    const paths = blogData.map(article => {
        return {params: {slug : article.url.toString()}}
    })

    return {
      paths,
      fallback: false, // false or "blocking"
    }
  }

function getArticle(slug: string): any {
    for (let index = 0; index < blogData.length; index++) {
        if (blogData[index].url == slug)
            return blogData[index];
    }
}


export const getStaticProps: GetStaticProps<{data: any}> = async (context) => {
    const slug = context.params?.slug;
    const data: any = await getArticle(slug as string)
    return { props: { data } }
}


export default function Article({data}: any) {
    return (
        <>
            <BlogNavBar/>
            <section className='mx-auto py-20 max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0'>
                <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal font-serif">
                    <div className="font-sans">
                        <p className="text-base md:text-sm text-yellow-500 font-bold">
                            &lt;<Link href="./" className="text-base md:text-sm text-yellow-500 font-bold uppercase no-underline hover:underline">Retourner sur le blog</Link>
                        </p>
                        <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
                            {data.title}
                        </h1>
                        <p className="text-sm md:text-base font-normal text-gray-600">{"Publié le " + data.date}</p>
                    </div>

                    <p className="py-6">
                        {data.subText}
			        </p>

                    <div className="w-full pb-6">
                        <Image 
                            src={"/articleImage/" + data.image.src}
                            width="0"
                            height="0"
                            sizes="100vw"
                            className="w-full h-auto rounded-xl"
                            alt={data.image.alt}>
                        </Image>
                    </div>

                    {data.sectionTitle.map(function(title: any, index: number) {
                        return (
                            <div key={index}>
                                <h3 className="py-2 text-3xl font-bold">{title}</h3>
                                <p className="py-5">{data.sectionContent[index]}</p>
                            </div>
                        )
                    })}

                    <h3 className="py-2 text-3xl font-bold">Foire Aux Questions</h3>
                    
                    {data.faqs.map(function(data: any, index: any) {
                        return (
                            <div key={index}>
                                <h4 className="py-4 text-2xl font-bold">{data.title}</h4>
                                <p className="py-2">{data.text}</p>
                            </div>
                        )
                    })}


                </div>
            </section>
            <Footer />
        </>
    )
}


