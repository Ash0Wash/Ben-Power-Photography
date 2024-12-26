import Image from 'next/image'
import Link from 'next/link'

const categories = [
  {
    title: 'Concerts',
    slug: 'concerts',
    image: '/placeholder.svg?height=800&width=600',
  },
  {
    title: 'Portraits',
    slug: 'portraits',
    image: '/images/portraits/-06.jpg',
  },
  {
    title: 'Street Photography',
    slug: 'streetphotography', 
    image: '/images/street photography/-43.jpg',
  },
  {
    title: 'Cars',
    slug: 'cars',
    image: '/images/cars/2.jpg',
  },
]

export default function Work() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
        {categories.map((category) => (
          <Link key={category.slug} href={`/work/${category.slug}`} className="group">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-4 font-light">{category.title}</p>
          </Link>
        ))}
      </div>
    <p className="absolute mt-12 text-base font-thin pb-10 left-8">contact@benpowerphotography.com</p>
    </div>
  )
}
