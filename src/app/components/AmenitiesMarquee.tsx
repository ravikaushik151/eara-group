'use client';

import Image from 'next/image';
import styles from '../../public/css/AmenitiesMarquee.module.css';

const images = [
    { src: '/images/Ganesha-Temple.jpg', title: 'Ganesha Temple' },
    { src: '/images/Basketball-Court.jpg', title: 'Basketball Court' },
    { src: '/images/CCTV.jpg', title: 'CCTV Surveillance' },
    { src: '/images/Elders-Garden.jpg', title: 'Elders Garden' },
    { src: '/images/Ev.jpg', title: 'EV Charging' },
    { src: '/images/Gym.jpg', title: 'Gymnasium' },
    { src: '/images/Joggin.jpg', title: 'Jogging Track' },
    { src: '/images/Landscape-Garden.jpg', title: 'Landscape Garden' },
    { src: '/images/Tennis.jpg', title: 'Tennis Court' },
    { src: '/images/Yoga-Lawn.jpg', title: 'Yoga Lawn' },
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
