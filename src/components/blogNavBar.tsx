import Logo from '@/assets/navbar_logo.png'
import Image from 'next/image'
import BlogMobileNav from './blogMobileNav'
import { navigationData } from './navbar'

const BlogNavBar = () => {
  return (
    <header className="bg-black py-5 sm:py-10">
      <div className='mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 flex items-center justify-between'>
        <div>
          <a href="/" aria-label="E-Taxi Lille">
            <div className="flex items-center justify-between">
                <div className="hidden h-6 text-2xl font-bold text-yellow-500 sm:block">
                  E-Taxi Lille
                </div>
            </div>
          </a>
        </div>
        <div className="flex items-center leading-5 space-x-4 sm:space-x-6">
          <BlogMobileNav />
        </div>
      </div>
    </header>
  )
}

export default BlogNavBar
