import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const Gallery: React.FC = () => {
  // Using picsum with specific seeds to get consistent random images
  const images = [
    { src: "https://picsum.photos/seed/kid1/600/400", class: "col-span-1 md:col-span-2 row-span-2" },
    { src: "https://picsum.photos/seed/kid2/300/300", class: "col-span-1" },
    { src: "https://picsum.photos/seed/kid3/300/300", class: "col-span-1" },
    { src: "https://picsum.photos/seed/kid4/300/300", class: "col-span-1" },
    { src: "https://picsum.photos/seed/kid5/300/300", class: "col-span-1" },
  ];

  return (
    <section id="gallery" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="font-display font-bold text-4xl text-kid-dark mb-4">Galeri Ceria</h2>
              <p className="text-gray-600">Mengintip keseruan aktivitas sehari-hari di TK Bintang Ceria.</p>
            </div>
            <button className="bg-white text-kid-dark font-bold py-2 px-6 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
              Lihat Instagram @tkbintangceria
            </button>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[200px]">
          {images.map((img, idx) => (
            <RevealOnScroll key={idx} delay={idx * 100} className={`${img.class} h-full`}>
              <div className="relative rounded-3xl overflow-hidden group h-full w-full">
                <img 
                  src={img.src} 
                  alt={`Gallery ${idx}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-display font-bold">Kegiatan Seru</span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;