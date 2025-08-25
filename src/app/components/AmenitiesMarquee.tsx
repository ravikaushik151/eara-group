'use client';

import Image from 'next/image';

const amenities = [
    { icon: '/icons/Landscape Greenery.png', title: 'Pathway Canopied with Trees' },
    { icon: '/icons/Half Basketball Court.png', title: 'Half Basketball Court' },
    { icon: '/icons/Gym.png', title: 'Outdoor Gym' },
    { icon: '/icons/track.webp', title: 'Pedestrian Walkways' },
    { icon: '/icons/Visitor parking.png', title: 'Ample Parking Space' },
    { icon: '/icons/Multi-Purpose Court.webp', title: 'Multi purpose Lawn' },
    { icon: '/icons/pool.webp', title: 'Swimming Pool' },
    { icon: '/icons/Amphitheater.png', title: 'Amphitheater' },
    { icon: '/icons/Seating Area.png', title: 'Sitting area with Pavillion' },
    { icon: '/icons/Play Area for Kids.png', title: 'Play Area for Kids' },
    { icon: '/icons/elder_s corner.png', title: "Elder's Corner" },
    { icon: '/icons/cricketpractice-pitch.webp', title: 'Cricket Pitch' },
    { icon: '/icons/Water Feature.png', title: 'Water Feature' },
    { icon: '/icons/Event Lawn.png', title: 'Event Lawn' },
    { icon: '/icons/Jogging track.png', title: 'Jogging Tracks' },
    { icon: '/icons/Butterfly Garden.png', title: 'Butterfly Garden' },
    { icon: '/icons/Community Park & Space.png', title: 'Community Park & Space' },
    { icon: '/icons/Clubhouse.png', title: 'Clubhouse' },
];

export default function AmenitiesSection() {
    return (
        <section className="py-5">
            <div className="container text-center">
                <div className="row g-4 ">
                    {amenities.map((item, idx) => (
                        <div key={idx} className="col-6 col-sm-4 col-md-3 col-lg-2 ">
                            <div className="p-3 border rounded-3 shadow-sm bg-white theme-bg-dark h-100 d-flex flex-column align-items-center justify-content-center amenity-card">
                                <Image src={item.icon} alt={item.title} width={50} height={50} className='white-png' />
                                <p className="small mt-2 text-center theme-color-light">{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
