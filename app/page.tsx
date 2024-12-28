import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 pt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link href="/work/concerts" className="group">
            <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src='/images/concerts/b3-08.jpg'
              alt="Concert photography"
              layout="fill"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105 transform"
            />
            </div>
          <p className="mt-4 font-light">Concerts</p>
        </Link>
        <Link href="/work/portraits" className="group">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/portraits/-34.jpg"
              alt="Portrait photography"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105 brightness-125"
            />
          </div>
          <p className="mt-4 font-light">Portraits</p>
        </Link>
      </div>
      <p className="absolute ml-4 mt-36 text-base font-thin left-8">contact@benpowerphotography.com</p>
      <Link href="/work">
        <p className="absolute text-2xl mt-20 right-20">See the rest of my portfolio in the work tab →</p>
      </Link>
    </div>
  )
}
