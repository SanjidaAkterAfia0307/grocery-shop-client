import React from 'react';
import review from '../../assests/customerReview.jpg';

const CustomerReview = () => {
    return (
        <div style={{ backgroundImage: `url(${review})`, backgroundRepeat: "no-repeat", height: "60vh", backgroundPosition: "center", backgroundSize: "cover" }}>
            <div className='text-white backdrop-brightness-50 flex gap-10 flex-col justify-center items-center h-full w-full'>
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <div className='flex gap-4 w-full items-center flex-col'>
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" />
                                </div>
                            </div>
                            <p className='text-lg font-bold'>Zendara Gomez</p>
                            <p className='w-1/2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, voluptatum velit nisi officiis rerum temporibus perspiciatis provident adipisci ex nobis ab dolores reprehenderit voluptates magni alias a. Debitis, velit quidem.</p>
                        </div>
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <div className='flex gap-4 w-full items-center flex-col'>
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src="https://media.istockphoto.com/id/637783298/photo/filling-life-with-love-and-happiness.jpg?s=170667a&w=0&k=20&c=hZW8NdqqAc9_BhexH9jbGbJwZ3JNDKtxAV3xpjMvGng=" />
                                </div>
                            </div>
                            <p className='text-lg font-bold'>Pawlin Gomez</p>
                            <p className='w-1/2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, voluptatum velit nisi officiis rerum temporibus perspiciatis provident adipisci ex nobis ab dolores reprehenderit voluptates magni alias a. Debitis, velit quidem.</p>
                        </div>
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <div className='flex gap-4 w-full items-center flex-col'>
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src="https://images.unsplash.com/profile-fb-1597131416-d09c2d466f86.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128" />
                                </div>
                            </div>
                            <p className='text-lg font-bold'>Lauren Gomez</p>
                            <p className='w-1/2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, voluptatum velit nisi officiis rerum temporibus perspiciatis provident adipisci ex nobis ab dolores reprehenderit voluptates magni alias a. Debitis, velit quidem.</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;