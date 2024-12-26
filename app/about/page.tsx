import Image from 'next/image'

export default function About() {
  return (
    <div className="mx-auto max-w-screen-2xl p-4">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <Image
            src={'/images/misc/-47.jpg'}
            className="w-full h-full object-contain"
            alt="abandoned barn"
            width={600} 
            height={600} 
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>
        <div className="ml-0 md:ml-12 pt-8 md:pt-44 relative text-left space-y-4 w-full md:w-2/3 text-xl md:text-3xl font-thin">
          <p>
            Ben Power is a San Diego and LA photographer. His work primarily consists of street photography, concerts, portraiture, and cars. 
          </p>
        </div>
        <div className="ml-0 md:ml-12 pt-8 md:pt-96 text-right pr-8 space-y-2 w-full md:w-1/2 font-thin text-lg md:text-2xl">
          <p>
            His work has been featured in multiple art shows in LA, San Diego, and LA counties.
          </p>
        </div>
        <div className="mt-16 md:mt-0 pt-8 md:pt-44 md:mr-4">
          <Image
            src={'/images/misc/-59.jpg'}
            className="w-full h-full object-contain mt-20"
            alt="streetlight"
            width={600} 
            height={600} 
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>
      </div>
      <p className="mt-8 md:absolute md:mt-80 text-base font-thin left-8">contact@benpowerphotography.com</p>
    </div>
  )
}
