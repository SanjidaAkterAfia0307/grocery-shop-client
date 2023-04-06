import React from 'react';
import subs from '../../assests/subs.jpg';

const Subscribe = () => {
    return (
        <div style={{ backgroundImage: `url(${subs})`, backgroundRepeat: "no-repeat", height: "80vh", backgroundPosition: "center", backgroundSize: "cover" }}>
            <div className='text-white backdrop-brightness-50 flex flex-col justify-center items-center h-full w-full'>
                <div className=' flex flex-col gap-4 '>
                    <h3 className='text-4xl font-bold my-5'>Subscribe For Discount!</h3>
                    <p>Lorem ipsum suscipit quam delectus, sint commodi eos quo voluptatibus illum iusto soluta harum necessitatibus quae, consequuntur adipisci provident! Sint, recusandae.</p>
                    <div className='flex'>
                        <input type="email" name="email" id="" className=' w-[750px] rounded-s-md focus:outline outline-offset-1 outline-primary border-none py-4 px-2' />
                        <button type="submit" className='bg-primary rounded-e-md font-bold hover:bg-secondary p-4'>Subscribe Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;