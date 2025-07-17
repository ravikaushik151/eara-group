'use client';

import Image from 'next/image';
import styles from '../../public/css/AmenitiesMarquee.module.css';

const images = [
    { src: '/images/Gym.jpg', title: 'Lounge & Gym' },
    { src: '/images/Yoga-Lawn.jpg', title: 'Pool & Deck' },
    { src: '/images/Basketball-Court.jpg', title: 'Indoor/Outdoor Party Areas' },
    { src: '/images/Landscape-Garden.jpg', title: 'Jacuzzi' },
    { src: '/images/Ev.jpg', title: 'Steam & Sauna' },
    { src: '/images/Elders-Garden.jpg', title: 'Library' },
    { src: '/images/CCTV.jpg', title: 'Café' },
    { src: '/images/Yoga-Lawn.jpg', title: 'Yoga Room' },
    { src: '/images/Tennis.jpg', title: 'Board Games & More' },
];



export default function Clubhouse() {
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
