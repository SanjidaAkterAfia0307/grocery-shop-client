import React from 'react';
import vegBanner from '../../assests/busket food.png';
import greenBack from '../../assests/green-texture.jpg';
const Section2 = () => {
    return (
        <div style={{backgroundImage:`url(${greenBack})`, backgroundRepeat:"no-repeat"}} className='w-full  md:flex items-center gap-20 md:p-16 p-5'>
            <img src={vegBanner} alt="" />
            <div className='' >
                <h3 className='text-3xl font-bold my-5'>Welcome to our venue</h3>
                <p className='text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro molestiae iste amet perferendis inventore laudantium ea consequuntur sequi praesentium dicta, obcaecati quaerat quas deserunt sit dolorum, tempore ut explicabo officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sequi pariatur voluptates blanditiis dolorem non eius cumque culpa repellendus, modi placeat sapiente consectetur temporibus. Suscipit voluptatem nemo fugit earum velit.</p>
            </div>
        </div>
    );
};

export default Section2;