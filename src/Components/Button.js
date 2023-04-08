import React from 'react';
import { Link } from 'react-router-dom';

const Button = () => {
    return (
        <div className='my-5'>
            <Link to='products' className='bg-primary text-white hover:bg-secondary px-6 py-4 rounded-xl'>Buy Now</Link>
        </div>
    );
};

export default Button;