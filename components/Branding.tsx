import Image from 'next/image'
import { InfiniteSlider } from './ui/infinite-slider'

const Branding = () => {
  return (
    <section className="overflow-hidden w-full">
      <div className="group relative mx-auto max-w-full px-6">
        <div className="relative py-6 w-full">
          <InfiniteSlider speedOnHover={20} speed={40} gap={80}>
            {/* Brand Logos */}
            <div className="flex p-4 justify-center items-center">
              <Image
                className="mx-auto"
                src="/Brands/adidas.png"
                alt="Adidas Logo"
                height={100}
                width={100}
                objectFit="contain"
              />
            </div>

            <div className="flex p-4 justify-center items-center">
              <Image
                className="mx-auto"
                src="/Brands/nike.png"
                alt="Nike Logo"
                height={100}
                width={100}
                objectFit="contain"
              />
            </div>

            <div className="flex p-4 justify-center items-center">
              <Image
                className="mx-auto"
                src="/Brands/reebok.png"
                alt="Reebok Logo"
                height={100}
                width={100}
                objectFit="contain"
              />
            </div>

            <div className="flex p-4 justify-center items-center">
              <Image
                className="mx-auto"
                src="/Brands/puma.png"
                alt="Puma Logo"
                height={100}
                width={100}
                objectFit="contain"
              />
            </div>

            <div className="flex p-4 justify-center items-center">
              <Image
                className="mx-auto"
                src="/Brands/converse.png"
                alt="Converse Logo"
                height={100}
                width={100}
                objectFit="contain"
              />
            </div>

            <div className="flex p-4 justify-center items-center">
              <Image
                className="mx-auto"
                src="/Brands/newbalance.png"
                alt="New Balance Logo"
                height={100}
                width={100}
                objectFit="contain"
              />
            </div>
          </InfiniteSlider>
        </div>
      </div>
    </section>
  )
}

export default Branding
