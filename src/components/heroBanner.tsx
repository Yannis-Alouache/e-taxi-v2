import Image from 'next/image'
import heroBannerImage from "../assets/hero_banner_image.webp"


export default function HeroBanner(props: any) {

  let { isBlogPage } = props;

  return (
    <div id='heroBanner' className="isolate bg-[url('../assets/hero_banner_background.webp')] bg-no-repeat -mt-14 ">
      <main>
        <div className="relative px-6 lg:px-8">
          <div className={ "mx-auto max-w-5xl py-32 sm:py-48 " + ( isBlogPage ? "lg:py-32" : "lg:py-56" )}>
            <div className="text-center">
              <h1 className="text-5xl font-bold tracking-tight text-white-900 sm:text-5xl mb-2">
                Réservez votre Taxi maintenant
              </h1>
              <h1 className="text-5xl font-bold tracking-tight text-amber-400 sm:text-4xl">
                06.85.35.74.48
              </h1>
              <div className="mt-5 flex items-center justify-center">
                <Image 
                    src={heroBannerImage}
                    alt="taxi"
                    width={750}
                    priority={true}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
