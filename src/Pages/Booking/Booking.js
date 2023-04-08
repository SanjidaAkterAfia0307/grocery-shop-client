import React from 'react';
import bkash from '../../assests/logos/bkash.png';
import nagad from '../../assests/logos/Nagad.png';
import dutch from '../../assests/logos/dutch.png';
import paypal from '../../assests/logos/Paypal-logo.png';
const Booking = () => {
    return (
        <div className='md:pt-36'>
            <div className='lg:w-2/5 mx-auto shadow-xl p-12 rounded-lg'>

                <form className=''>
                    <div className='flex my-4 gap-24'>
                        <div>
                            <label className='block my-1'>Product name</label>
                            <input type="text" placeholder="Type here" className="input rounded-3xl input-bordered w-full max-w-xs" />
                        </div>
                        <div>
                            <label className='block my-1'>Product price (per kg)</label>
                            <input type="text" placeholder="Type here" className="input rounded-3xl input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div>
                        <label className='block my-1'>Quantity</label>
                        <input type="text" placeholder="Type here" className="input rounded-3xl input-bordered w-full max-w-xs" />
                    </div>
                </form>
                <div className="divider"></div>
                <div className='grid grid-cols-2 gap-6'>
                    <div className='hover:backdrop-brightness-50'>
                        <img className='w-2/5 h-4/5 ' src={bkash} alt="" />
                    </div>
                    <div className='hover:backdrop-brightness-50'>
                        <img className='w-2/5 h-4/5 ' src={nagad} alt="" />
                    </div>
                    <div className='hover:backdrop-brightness-50'>
                        <img className='w-2/5 h-4/5 ' src={dutch} alt="" />
                    </div>
                    <div className='hover:backdrop-brightness-50'>
                        <img className='w-2/5 h-4/5 ' src={paypal} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;