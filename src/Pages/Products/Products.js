import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const [category, setCategory] = useState("all")
    const [products, setProducts] = useState([])
    console.log(products)
    useEffect(() => {
        console.log(category)
        fetch(`http://localhost:5000/products/${category}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [category])
    return (
        <div className='md:pt-36  flex justify-evenly'>
            <ul className="menu border-2 h-fit bg-base-100 w-56 p-2 rounded-box">
                <li className='hover:underline underline-offset-8' onClick={() => setCategory("vegetables")}><a>Vegetables</a></li>
                <li className='hover:underline underline-offset-8' onClick={() => setCategory("fishies and meats")}><a>Fishies and meats</a></li>
                <li className='hover:underline underline-offset-8' onClick={() => setCategory("milk and dairies")}><a>Milk and dairies</a></li>
                <li className='hover:underline underline-offset-8' onClick={() => setCategory("fruits")}><a>Fruits</a></li>
            </ul>
            <div className='grid grid-cols-3 gap-16'>
                {
                    products.map(product=> <ProductCard product={product} key={product.id}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;