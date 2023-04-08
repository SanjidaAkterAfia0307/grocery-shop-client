import React from 'react';
import logo1 from '../../assests/logos/logo1.png';
import logo2 from '../../assests/logos/logo2.png';
import logo3 from '../../assests/logos/logo3.png';
import logo4 from '../../assests/logos/logo4.png';
import logo5 from '../../assests/logos/logo5.png';
const Partners = () => {
    return (
        <div>
            <h3 className='text-4xl text-primary text-center mb-16 font-bold my-5'>Our Farm Partners</h3>
            <div className='flex justify-center lg:gap-20'>
                <div className="avatar">
                    <div className="md:w-36 rounded-full">
                        <img src={logo1} />
                    </div>
                </div>
                <div className="avatar">
                    <div className="md:w-36 rounded-full">
                        <img src={logo2} />
                    </div>
                </div>
                <div className="avatar">
                    <div className="md:w-36 rounded-full">
                        <img src={logo3} />
                    </div>
                </div>
                <div className="avatar">
                    <div className="md:w-36 rounded-full">
                        <img src={logo4} />
                    </div>
                </div>
                <div className="avatar">
                    <div className="md:w-36 rounded-full">
                        <img src={logo5} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;