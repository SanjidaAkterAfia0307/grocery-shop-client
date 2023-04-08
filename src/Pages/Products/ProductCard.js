import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
    const {item,price,img}=product
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl h-44" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{item}</h2>
                    <p>{price}</p>
                    <div className="card-actions">
                        <Link to='/booking' className="btn text-white btn-primary hover:bg-secondary border-none">Buy Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;