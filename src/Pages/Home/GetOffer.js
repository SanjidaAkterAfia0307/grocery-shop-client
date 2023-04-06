import React from 'react';
import smallVeg from '../../assests/smallveg.webp';
import combo from '../../assests/combo.png';

const GetOffer = () => {
    return (
        <div >
            <h3 className='text-4xl text-primary text-center mb-16 font-bold my-5'>Dont Miss Today's Deal!</h3>
            <div style={{ backgroundImage: `url(${smallVeg})`, backgroundRepeat: "no-repeat", height: "80vh", backgroundPosition: "center", backgroundSize: "cover" }}>
                <div className='backdrop-brightness-50 text-white flex justify-evenly items-center h-full w-full'>
                    <div className='w-1/3'>
                        <h3 className='text-4xl  font-bold my-5'>Get this combo in 15% discount!</h3>
                        <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quam voluptatum doloribus repudiandae quo at consequatur dignissimos quos dolor accusamus! Numquam ratione dolorum blanditiis consequuntur accusantium illo, minus reprehenderit esse?</p>
                    </div>
                    <div className=' w-1/3'>
                        <img src={combo} className='rounded-xl' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetOffer;