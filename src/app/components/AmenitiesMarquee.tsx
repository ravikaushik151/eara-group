'use client';

import Image from 'next/image';
import styles from '../../public/css/AmenitiesMarquee.module.css';

const images = [
    { src: '/images/Joggin.jpg', title: 'Concrete Roads' },
    { src: '/images/Ev.jpg', title: 'Underground Utilities' },
    { src: '/images/Yoga-Lawn.jpg', title: 'Rainwater Harvesting (RWH)' },
    { src: '/images/Landscape-Garden.jpg', title: 'Landscaped Gardens' },
    { src: '/images/Gym.jpg', title: 'Clubhouse' },
    { src: '/images/CCTV.jpg', title: 'CCTV, 24/7 Security' },
    { src: '/images/Tennis.jpg', title: 'Pickleball Court' },
    { src: '/images/Basketball-Court.jpg', title: 'Cricket Pitch' },
    { src: '/images/Ev.jpg', title: '8 Ft Compound Wall' },
    { src: '/images/Elders-Garden.jpg', title: 'Elders Park & Children’s Play Area' },
    { src: '/images/Ganesha-Temple.jpg', title: 'Ganesha Temple' },
    { src: '/images/Landscape-Garden.jpg', title: 'Amphitheatre' },
    { src: '/images/Landscape-Garden.jpg', title: 'Themed Plantation' },
];


export default function Amenities() {
    return (
        <section className={styles.section}>
            <div className={styles.marquee}>
                <div className={styles.marqueeContent} >
                    {images.concat(images).map((img, idx) => (
                        <div key={idx} className={styles.imageWrapper}>
                            <Image
                                src={img.src}
                                alt={img.title}
                                width={300}
                                height={200}
                                loading="lazy"
                                className={styles.image}
                            />
                            <p className={styles.imageTitle}>{img.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
