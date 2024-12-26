import Image from 'next/image'
import Link from 'next/link'

const locations = [
  { id: 1, name: 'New York', image: '/placeholder.svg?height=300&width=400&text=New York' },
  { id: 2, name: 'Paris', image: '/placeholder.svg?height=300&width=400&text=Paris' },
  { id: 3, name: 'Tokyo', image: '/placeholder.svg?height=300&width=400&text=Tokyo' },
  { id: 4, name: 'London', image: '/placeholder.svg?height=300&width=400&text=London' },
]

export default function Locations() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center">Photo Locations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {locations.map((location) => (
          <Link href={`/locations/${location.id}`} key={location.id} className="block">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src={location.image}
                alt={location.name}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h2 className="text-white text-2xl font-bold">{location.name}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
