import React from 'react';
import about from '../../assests/aboutBanner.jpg';
import walkingWoman from '../../assests/walkingWoman.jpg';
import aboutPeople from '../../assests/aboutPeople.webp';
const About = () => {
    return (
        <div className='md:px-24 px-6'>
            <div className='flex justify-center roun'>
                <img src={about} className='h-[80vh] w-[80vw] rounded-2xl ' alt="" />
            </div>
            <h2 className='text-4xl text-center my-8 font-bold'>Who We Are...</h2>
            <p className='my-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci id blanditiis ipsa incidunt autem quaerat dolore hic est dignissimos nihil excepturi ducimus voluptatibus, beatae odit, accusamus nemo eius recusandae maiores?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum corporis aut itaque placeat, pariatur atque tempora dolorem fugiat qui temporibus, laboriosam unde! Sapiente earum aspernatur dolorem nihil cum inventore ipsa. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci dolor et a nobis fugit. Voluptas iusto quae eum sint blanditiis? Temporibus sed dolorem excepturi mollitia distinctio optio dignissimos, voluptas rem?Lorem, ipsum dolor sit amet consectetur adipisicing elit. In explicabo debitis quo praesentium eum? Officia delectus quis magnam repudiandae saepe quos, hic error qui, accusamus cupiditate atque, ducimus fugit velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero inventore repudiandae at earum doloribus veniam veritatis aut, quis accusantium quae cum dolore incidunt eligendi quam expedita quisquam quod nobis. Corporis.</p>
            <div className='lg:flex my-16 justify-between gap-20'>
                <img  className='rounded-2xl max-h-72 ' src={walkingWoman} alt="" />
                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, consequatur, sapiente vero optio similique tenetur eius nihil placeat architecto nesciunt ratione officiis eos dolorum voluptate alias, repellat amet quia corporis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ea perferendis officia veritatis autem rerum, omnis eius? Perspiciatis, mollitia praesentium totam in reiciendis expedita explicabo quod impedit amet veritatis sit. Nostrum est dolore unde ipsam commodi dolores ullam, doloremque accusamus consequatur illum quis dicta repellat dolorum natus accusantium quae itaque, vero rerum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia architecto fugiat quam. Voluptas atque beatae dolorem cumque odio fugiat accusantium sint vero ad repudiandae maxime, asperiores, deleniti amet distinctio dolores.</p>
                </div>
            </div>
            <div className='lg:flex justify-between gap-20'>
                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, consequatur, sapiente vero optio similique tenetur eius nihil placeat architecto nesciunt ratione officiis eos dolorum voluptate alias, repellat amet quia corporis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ea perferendis officia veritatis autem rerum, omnis eius? Perspiciatis, mollitia praesentium totam in reiciendis expedita explicabo quod impedit amet veritatis sit. Nostrum est dolore unde ipsam commodi dolores ullam, doloremque accusamus consequatur illum quis dicta repellat dolorum natus accusantium quae itaque, vero rerum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia architecto fugiat quam. Voluptas atque beatae dolorem cumque odio fugiat accusantium sint vero ad repudiandae maxime, asperiores, deleniti amet distinctio dolores.</p>
                </div>
                <img  className='rounded-2xl max-h-72 ' src={aboutPeople} alt="" />
            </div>
        </div>
    );
};

export default About;