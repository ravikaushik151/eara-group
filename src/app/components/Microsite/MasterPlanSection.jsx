'use client';
import Image from 'next/image';

export default function MasterPlanSection() {
    const amenities = [
        { text: 'Entry/Exit', icon: '/icons/Ear Master Plan Icon-06.webp' },
        { text: 'Entrance Archway', icon: '/icons/Ear Master Plan Icon-07.webp' },
        { text: 'Roundabout', icon: '/icons/Ear Master Plan Icon-08.webp' },
        { text: 'Pet Park', icon: '/icons/Ear Master Plan Icon-05.webp' },
        { text: 'Tennis Court', icon: '/icons/Ear Master Plan Icon-04.webp' },
        { text: 'Multipurpose Court', icon: '/icons/Ear Master Plan Icon-03.webp' },
        { text: 'Open Park', icon: '/icons/Ear Master Plan Icon-01.webp' },
        { text: 'Kids Play Area', icon: '/icons/Ear Master Plan Icon-09.webp' },
        { text: 'Clubhouse', icon: '/icons/Ear Master Plan Icon-02.webp' },
        { text: 'Community Seating', icon: '/icons/Ear Master Plan Icon-10.webp' },
        { text: 'Box Cricket', icon: '/icons/Ear Master Plan Icon-06.webp' },
        { text: 'Parking', icon: '/icons/Ear Master Plan Icon-07.webp' },
        { text: 'Bird Watching Zone', icon: '/icons/Ear Master Plan Icon-08.webp' },
        { text: 'Amphitheatre', icon: '/icons/Ear Master Plan Icon-05.webp' },
        { text: 'Multipurpose Lawn', icon: '/icons/Ear Master Plan Icon-04.webp' },
        { text: 'Senior Citizen Park', icon: '/icons/Ear Master Plan Icon-03.webp' },
        { text: 'Padel Tennis', icon: '/icons/Ear Master Plan Icon-01.webp' },
        { text: 'Garden Pavilion', icon: '/icons/Ear Master Plan Icon-09.webp' },
        { text: 'Leisure Park', icon: '/icons/Ear Master Plan Icon-02.webp' },
        { text: 'Miyawaki Forest', icon: '/icons/Ear Master Plan Icon-02.webp' },
        { text: 'Avenue Plantation', icon: '/icons/Ear Master Plan Icon-10.webp' },
        { text: 'Outdoor Gym', icon: '/icons/Ear Master Plan Icon-06.webp' },
        { text: 'Services', icon: '/icons/Ear Master Plan Icon-07.webp' }
    ];

    // Split the array into three columns to match the visual layout in the image
    const col1 = amenities.slice(0, 6); // Items 1-8
    const col2 = amenities.slice(8, 14); // Items 9-15
    const col3 = amenities.slice(15, 21); // Items 16-23

    // Combine into an array of columns for easier mapping
    const columns = [col1, col2, col3];

    /**
     * Helper function to render a column of amenities.
     * @param {Array} column - The array of amenities for the column.
     * @param {number} startNumber - The starting number for the items in this column.
     */
    const renderAmenityColumn = (column, startNumber) => (
        <div className="col-md-4">
            {column.map((item, index) => (
                <div
                    key={index}
                    // Adjusted classes to better handle the item structure and spacing
                    className="mb-4 d-flex align-items-center m-center  ps-0 ps-md-3"
                >
                    <div className="d-flex align-items-center justify-content-center ">
                        {/* Number Circle */}
                        <span
                            className="accent-bg theme-color-light rounded-circle d-flex align-items-center justify-content-center me-3"
                            style={{
                                width: "34px",
                                height: "34px",
                                fontSize: "14px",
                                flexShrink: 0,
                            }}
                        >
                            {startNumber + index} {/* Correct numbering for each column */}
                        </span>
                        {/* Amenity Text */}
                        <div className="amenity-text theme-color-dark fw-semibold d-flex align-items-center justify-content-center">
                            <p className='mb-0 lh-sm text-start m-center'>{item.text}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <section
            data-w-id="8905ac58-eaf7-356f-bf47-4ad8001e257f"
            className="section_home-masterplan theme-bg-light lifestyle-section py-5"
            id="master-plan"
        >
            <div className="container">
                <div className="row align-items-center">

                    {/* Right Column - Amenities (Now taking more space for the 3 columns) */}
                    <div className="col-md-12  d-block mx-auto">

                        <div className="row">

                            <div className="col-md-6 px-md-4 d-flex align-items-center">
                                <div>
                                    <div className="text-center m-center  ps-md-3">
                                        <h2 className="text-color-dark-rainforest theme-color-dark mb-5">
                                            Master Plan
                                        </h2>
                                    </div>

                                    <div className="row justify-content-center text-start">
                                        {/* Column 1: Items 1-8 */}
                                        {renderAmenityColumn(col1, 1)}

                                        {/* Column 2: Items 9-15 */}
                                        {renderAmenityColumn(col2, 9)}

                                        {/* Column 3: Items 16-23 */}
                                        {renderAmenityColumn(col3, 16)}
                                    </div>
                                </div>



                            </div>
                            {/* Left Column - Masterplan Image (Reduced width to make space for the amenity columns) */}
                            <div className="col-md-6 mb-5 d-flex align-items-center ">
                                <div>
                                    <p className='py-4 d-md-block d-none'> &nbsp;</p>
                                    <Image
                                        width={633}
                                        height={444}
                                        src="/images/MasterPlan_.webp"
                                        loading="lazy"
                                        alt="Eara Master Plan"
                                        className="w-100  img-fluid mt-md-4"
                                    />
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}