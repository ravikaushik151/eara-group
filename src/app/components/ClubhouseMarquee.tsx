'use client';

import Image from 'next/image';

const images = [
    { src: '/icons/Gym.png', title: 'Lounge & Gym' },
    { src: '/icons/lou.webp', title: 'Pool & Deck' },
    { src: '/icons/indoorgames.png', title: 'Indoor/Outdoor Party Areas' },
    { src: '/icons/pool.webp', title: 'Jacuzzi' },
    { src: '/icons/spa.png', title: 'Steam & Sauna' },
    { src: '/icons/Common Library.png', title: 'Library' },
    { src: '/icons/Cafeteria.webp', title: 'Café' },
    { src: '/icons/Yoga.png', title: 'Yoga Room' },
    { src: '/icons/Biliiards.png', title: 'Board Games & More' },
];

export default function Clubhouse() {
    return (
        <section className="py-5">
            <div className="container text-center">
                <div className="row g-4">
                    {images.map((item, idx) => (
                        <div key={idx} className="col-6 col-sm-4 col-md-3 col-lg-2">
                            <div className="p-3 border rounded-3 shadow-sm bg-white h-100 d-flex flex-column align-items-center justify-content-center amenity-card">
                                <Image src={item.src} alt={item.title} width={60} height={60} />
                                <p className="small mt-2 text-center">{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
