import { useState } from 'react';

const MyAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='container mx-auto'>
            <div className="join join-vertical w-full relative">
                {[1, 2, 3].map((item, index) => (
                    <div key={index} className="collapse collapse-arrow join-item border-base-300 border">
                        <input
                            type="radio"
                            name="my-accordion-4"
                            checked={activeIndex === index}
                            onChange={() => handleToggle(index)}
                        />
                        <div
                            className="collapse-title text-xl font-medium cursor-pointer"
                            onClick={() => handleToggle(index)}
                        >
                            Click to open this one and close others
                        </div>
                        <div
                            className={`collapse-content absolute left-full top-0 bg-white border border-gray-300 ${activeIndex === index ? 'block' : 'hidden'
                                }`}
                            style={{ width: 'calc(100% - 1rem)', height: '100%', marginLeft: '1rem' }}
                        >
                            <p className="p-4 text-black">hello</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyAccordion;
