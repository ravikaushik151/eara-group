'use client';
import Image from 'next/image';

export default function MasterPlanSection() {
    const amenities = [
        { text: 'Grand entrance gate', icon: '/icons/Ear Master Plan Icon-06.webp' },
        { text: 'Concrete roads', icon: '/icons/Ear Master Plan Icon-07.webp' },
        { text: 'Street light', icon: '/icons/Ear Master Plan Icon-08.webp' },
        { text: 'Fruit bearing trees on streets', icon: '/icons/Ear Master Plan Icon-05.webp' },
        { text: 'Sewage treatment plant', icon: '/icons/Ear Master Plan Icon-04.webp' },
        { text: 'Water connections to every plot', icon: '/icons/Ear Master Plan Icon-03.webp' },
        { text: 'Sewage connection to every plot', icon: '/icons/Ear Master Plan Icon-01.webp' },
        { text: 'Underground storm water drains', icon: '/icons/Ear Master Plan Icon-09.webp' },
        { text: 'Electricity connection to every plot', icon: '/icons/Ear Master Plan Icon-02.webp' },
        {
            text: 'Rain water recharge pits at every 40 feet on both sides of the road',
            icon: '/icons/Ear Master Plan Icon-10.webp',
        }
    ];

    return (
        <section
            data-w-id="8905ac58-eaf7-356f-bf47-4ad8001e257f"
            className="section_home-masterplan theme-bg-light lifestyle-section py-5"
            id="master-plan"
        >
            <div className="container">
                {/* Section Title */}
                <div className="text-center mb-5">
                    <h2 className="text-color-dark-rainforest theme-color-dark mb-0">
                        Master Plan
                    </h2>
                </div>

                {/* Main Row */}
                <div className="row align-items-center">
                    {/* Left Column - Masterplan Image */}
                    <div className="col-md-6 mb-5">
                        <Image
                            width={600}
                            height={500}
                            src="/images/Eara_masterplan.webp"
                            loading="lazy"
                            alt="Eara Master Plan"
                            className="w-100 rounded-3 shadow-sm img-fluid"
                        />
                    </div>
                    {/* Right Column - Amenities */}
                    <div className="col-md-6">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 justify-content-center ">
                            {amenities.map((item, index) => (
                                <div
                                    key={index}
                                    className="col mb-4 d-flex align-items-start ps-md-5 mb-md-5 ps-3 mb-3 m-center"
                                >
                                    <div className="d-flex align-items-center">
                                        {/* Number Circle */}
                                        <span
                                            className="theme-bg-dark theme-color-light rounded-circle d-flex align-items-center justify-content-center me-3"
                                            style={{
                                                width: "34px",
                                                height: "34px",
                                                fontSize: "14px",
                                                flexShrink: 0,
                                            }}
                                        >
                                            {index + 1}
                                        </span>
                                        {/* Amenity Text */}
                                        <div className="amenity-text theme-color-dark fw-semibold d-flex align-items-center">
                                         <p className='mb-0 lh-sm'>{item.text}</p>   
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
