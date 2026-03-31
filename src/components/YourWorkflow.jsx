import React from 'react';

const YourWorkflow = () => {
    return (
        <div className='bg-linear-to-l from-[#9514FA] to-[#4F39F6] lg:mt-10'>
            <div className='max-w-7xl mx-auto py-10 lg:py-28 text-white text-center'>
                <h2 className='font-extrabold text-xl lg:text-5xl mb-2 lg:mb-5'>Ready to Transform Your Workflow?</h2>
                <p className='text-[9px] lg:text-lg'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>

                <div className='flex justify-center my-5 lg:my-10 gap-5'>
                    <button className='btn rounded-full bg-white text-[#4F39F6]'>Explore Products</button>
                    <button className='btn rounded-full bg-linear-to-l from-[#9514FA] to-[#4F39F6] bg-clip-text text-white font-bold'>View Pricing</button>
                </div>

                <p className='text-[12px] lg:text-lg'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default YourWorkflow;