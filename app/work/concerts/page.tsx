import Image from 'next/image'

const photos = [
    {
        image: '/images/',
    },
    {
        image: '/images/',
    },
    {
        image: '/images/',
    },
    {
        image: '/images/',
    },
]

export default function concerts() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {photos.map((category, index) => (
            <div key={index} className="overflow-hidden">
              <Image
                src={category.image}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                alt="Concert photos"
                width={500}
                height={375}
              />
            </div>
        ))}
      </div>
    </div>
  )
}
