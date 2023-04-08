import React from 'react';
import woman from '../../assests/young-woman-buying-vegetables.jpg';
const Contact = () => {
    return (
        <div >
            <div className='mx-auto pt-24'>

                <h1 className='text-4xl font-bold  my-10  text-center'>Contact Me</h1>
                <div className='md:flex px-6 justify-center gap-16'>

                    <div>
                        <img className='rounded-lg h-full' src={woman} alt="" />
                    </div>
                    <form id="fs-frm" name="simple-contact-form" acceptCharset="utf-8" className='flex  flex-col' action="https://formspree.io/f/xrgdnroz" method="post">
                        <h3 className='lg:text-3xl text-2xl font-semibold my-3'>Let us know about our service...</h3>
                        <label className='mt-5 mb-2 text-lg' htmlFor="full-name">Full Name</label>
                        <input className="input input-bordered rounded-3xl w-full max-w-xs" type="text" name="name" id="full-name" placeholder="First and Last" required="" />
                        <label className='mt-5 mb-2 text-lg' htmlFor="email-address">Email Address</label>
                        <input className="input input-bordered rounded-3xl w-full max-w-xs" type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required="" />
                        <label className='mt-5 mb-2 text-lg' htmlFor="message">Message</label>
                        <textarea className="textarea w-full h-56 rounded-3xl textarea-bordered md:w-96" name="message" id="message" placeholder="Your Text" required=""></textarea>

                        <div >
                            <button className='w-full my-5 bg-primary text-white border-none rounded-lg py-2 px-4 hover:bg-secondary' type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;