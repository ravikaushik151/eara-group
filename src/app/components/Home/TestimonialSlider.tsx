'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
    "Nature is at the heart of this community, not just an afterthought. The preservation of trees, the native landscaping, and the peaceful ambiance make Amidst Nature feel like home even before I build.",
    "What EARA is creating isn’t just another plotted layout, it’s a lifestyle upgrade. We were impressed by the thoughtful planning, open spaces, and how seamlessly nature is woven into every corner. Can’t wait to build our home here and wake up to fresh air every day!",
    "I see Amidst Nature as the perfect escape from the hustle, not too far from the city, yet totally unplugged from the chaos. EARA has nailed the balance of lifestyle, nature, and investment potential. This is the future of premium living.",
    "I’ve been waiting for a project that truly respects nature without compromising on modern living, EARA’s Amidst Nature is exactly that. The moment I saw their plan, I knew this is where I want to build my forever home. A green, peaceful sanctuary that’s still so well-connected to the city!",
    "I’ve been waiting for a development that blends thoughtful design with real environmental consciousness, EARA’s Amidst Nature is exactly that. It’s more than a plotted community; it’s a vision for peaceful, healthy living that feels just right.",
    "What stood out to me was EARA’s commitment to sustainability. Amidst Nature isn’t just another real estate project — it’s a green investment for future generations. I’m happy to be part of something so mindful and long-term.",
];

const TestimonialSlider = () => {
    return (
        <section className="px-md-5 px-3 py-5 bg-light theme-bg-light">
            <h2 className="text-center mb-4 fw-bold theme-color-dark">TESTIMONIALS</h2>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className='mb-3'
            >
                {testimonials.map((text, index) => (
                    <SwiperSlide key={index}>
                        <div className="info-box p-4 bg-white  theme-bg-dark shadow-sm h-100 rounded">
                            <p className="text-muted theme-color-light">{text}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default TestimonialSlider;
