import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import navBarLogo from "@/assets/navbar_logo.png"
import Link from 'next/link'


export const navigationData = [
  { name: 'Accueil', href: '/' },
  { name: 'Reservation', href: '#bookingBanner' },
  { name: 'Services', href: '#services' },
  { name: 'Véhicule', href: '#carDetail' },
  { name: 'Avis Client', href: '#testimonials' },
  { name: 'Blog', href: "blog" }
]


export default function Navbar() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  return (
    <div className="px-6 pt-6 lg:px-8 bg-transparent sticky z-50">
    <nav className="flex items-center justify-between" aria-label="Global">
      <div className="flex lg:flex-1">
      </div>
      <div className={mobileMenuOpen === true ? 'hidden' : 'flex' + " lg:hidden"}>
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {navigationData.map((item) => (
          <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white-900 hover:underline">
            {item.name}
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      </div>
    </nav>
    <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
      <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
        <div className="flex items-center justify-between">
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">E-Taxi-Lille</span>
            <Image className="h-8 w-full" src={navBarLogo} alt="" />
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigationData.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  </div>
  )
}
