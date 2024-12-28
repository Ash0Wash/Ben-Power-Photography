"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import StackGrid from "react-stack-grid";
import Link from 'next/link'

const photos = [
    { image: '/images/portraits/stb-2.jpg'},
    { image: '/images/portraits/stb-1.jpg'},
    { image: '/images/portraits/stb-3.jpg'},
    { image: '/images/portraits/stb-4.jpg'},
    { image: '/images/portraits/stb-5.jpg'},
    { image: '/images/portraits/stb-6.jpg'},
    { image: '/images/portraits/stb-7.jpg'},
    { image: '/images/portraits/-06.jpg'},
    { image: '/images/portraits/-04.jpg'},
    { image: '/images/portraits/-03.jpg'},
    { image: '/images/portraits/-07.jpg'},
    { image: '/images/portraits/-05.jpg'},
    { image: '/images/portraits/-09.jpg'},
    { image: '/images/portraits/-34.jpg'},
    { image: '/images/portraits/-65.jpg'},
    { image: '/images/portraits/-14.jpg'},
    { image: '/images/portraits/-15.jpg'},
    { image: '/images/portraits/-16.jpg'},
    { image: '/images/portraits/-17.jpg'},
    { image: '/images/portraits/-18.jpg'},
    { image: '/images/portraits/-19.jpg'},
    { image: '/images/portraits/-20.jpg'},
    { image: '/images/portraits/-22.jpg'},
    { image: '/images/portraits/-21.jpg'},
    { image: '/images/portraits/-39.jpg'},
    { image: '/images/portraits/-41.jpg'},
    { image: '/images/portraits/-40.jpg'},
    { image: '/images/portraits/-68.jpg'},
    { image: '/images/portraits/-69.jpg'},
    { image: '/images/portraits/-70.jpg'},
    { image: '/images/portraits/-71.jpg'},
    { image: '/images/portraits/-72.jpg'},
];

export default function portraits() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [imageSize, setImageSize] = useState<{ width: number; height: number }>({ width: 0, height: 0 });
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleImageClick = (image: string) => {
        setSelectedImage(image);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    useEffect(() => {
        if (selectedImage && isClient) {
            const handleResize = () => {
                const maxWidth = window.innerWidth * 0.9;
                const maxHeight = window.innerHeight * 0.9;

                const img = new window.Image();
                img.src = selectedImage;
                img.onload = () => {
                    const aspectRatio = img.width / img.height;

                    let width = maxWidth;
                    let height = maxWidth / aspectRatio;

                    if (height > maxHeight) {
                        height = maxHeight;
                        width = maxHeight * aspectRatio;
                    }

                    setImageSize({ width, height });
                };
            };

            handleResize();
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, [selectedImage, isClient]);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {isClient && (
                <StackGrid columnWidth={window.innerWidth <= 768 ? '100%' : window.innerWidth <= 1024 ? '33%' : '25%'} monitorImagesLoaded={true} gutterWidth={7} gutterHeight={7}>
                    {photos.map((category, index) => (
                        <div key={index} className="">
                            <div className="relative">
                                <Image
                                    src={category.image}
                                    className="w-full h-full cursor-pointer object-contain"
                                    alt="Portrait photos"
                                    width={500}
                                    height={500}
                                    // priority={true}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
                                    onClick={() => handleImageClick(category.image)}
                                />
                            </div>
                        </div>
                    ))}
                </StackGrid>
            )}

            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50"
                    onClick={handleClose}
                    tabIndex={-1}
                    ref={(div) => { if (div) div.focus(); }}
                    onKeyDown={(e) => {
                        if (e.key === 'Escape') {
                            handleClose();
                        } else if (e.key === 'ArrowLeft') {
                            const currentIndex = photos.findIndex(photo => photo.image === selectedImage);
                            const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
                            setSelectedImage(photos[prevIndex].image);
                        } else if (e.key === 'ArrowRight') {
                            const currentIndex = photos.findIndex(photo => photo.image === selectedImage);
                            const nextIndex = (currentIndex + 1) % photos.length;
                            setSelectedImage(photos[nextIndex].image);
                        }
                    }}
                >
                    <button
                        className="absolute top-4 right-4 text-white text-3xl"
                        onClick={handleClose}
                    >
                        &times;
                    </button>
                    <button
                        className="absolute left-4 text-white text-3xl"
                        onClick={(e) => {
                            e.stopPropagation();
                            const currentIndex = photos.findIndex(photo => photo.image === selectedImage);
                            const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
                            setSelectedImage(photos[prevIndex].image);
                        }}
                    >
                        &lt;
                    </button>
                    <button
                        className="absolute right-4 text-white text-3xl"
                        onClick={(e) => {
                            e.stopPropagation();
                            const currentIndex = photos.findIndex(photo => photo.image === selectedImage);
                            const nextIndex = (currentIndex + 1) % photos.length;
                            setSelectedImage(photos[nextIndex].image);
                        }}
                    >
                        &gt;
                    </button>
                    <div
                        className="relative"
                        style={{ width: imageSize.width, height: imageSize.height }}
                        onClick={(e) => {
                            e.stopPropagation();
                            const rect = e.currentTarget.getBoundingClientRect();
                            const clickX = e.clientX - rect.left;
                            if (clickX < rect.width / 2) {
                                const currentIndex = photos.findIndex(photo => photo.image === selectedImage);
                                const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
                                setSelectedImage(photos[prevIndex].image);
                            } else {
                                const currentIndex = photos.findIndex(photo => photo.image === selectedImage);
                                const nextIndex = (currentIndex + 1) % photos.length;
                                setSelectedImage(photos[nextIndex].image);
                            }
                        }}
                    >
                        <Image
                            src={selectedImage}
                            className="object-contain"
                            alt="Full scale photo"
                            layout="fill"
                        />
                    </div>
                </div>
            )} <p className="absolute mt-12 text-base font-thin pb-10 left-8">contact@benpowerphotography.com</p>
            <Link href="/work/cars">
            <p className="absolute text-3xl pt-10 right-40">Cars →</p>
        </Link>
        </div>
    );
}
