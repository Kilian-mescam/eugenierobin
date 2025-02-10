import Image from 'next/image'
import { useState } from 'react';

export function BrandsPanel() {
     // States to track hover for each image
    const [hoveredImage, setHoveredImage] = useState(null);

    // Function to handle mouse enter
    const handleMouseEnter = (imageName: any) => {
        setHoveredImage(imageName);
    };

    // Function to handle mouse leave
    const handleMouseLeave = () => {
        setHoveredImage(null);
    };

      // Image data
    const images = [
        { src: '/images/Prairy.svg', width: 100, height: 70, alt: 'Prairy', name: 'prairy' },
        { src: '/images/Beaba.svg', width: 80, height: 70, alt: 'Beaba', name: 'beaba' },
        { src: '/images/APRR.svg', width: 80, height: 70, alt: 'APRR', name: 'aprr' },
        { src: '/images/Aida.svg', width: 60, height: 50, alt: 'Aida', name: 'aida' },
        { src: '/images/ecole-des-loisirs.svg', width: 150, height: 70, alt: 'Ecole des Loisirs', name: 'ecole' },
        { src: '/images/Cyril.svg', width: 170, height: 70, alt: 'Cyril', name: 'cyril' }
    ];


    return (
        <div className="py-7 bg-secondary flex flex-row h-40 items-center justify-around text-white w-full rounded-xl">
      {images.map((image) => (
        <div
          key={image.name}
          className={`transition-all duration-500 ${
            hoveredImage === image.name ? 'text-red-500 scale-110' : ''
          }`}
          onMouseEnter={() => handleMouseEnter(image.name)}
          onMouseLeave={handleMouseLeave}
          style={{ transform: hoveredImage === image.name ? 'scale(1.3)' : 'scale(1)', padding: '10px', borderRadius: '12px' }}
        >
          <Image 
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt}
            priority={true}
            title={image.alt}
            className="cursor-pointer"
          />
        </div>
      ))}
    </div>
    );
}