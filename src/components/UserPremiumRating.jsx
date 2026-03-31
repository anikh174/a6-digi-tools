import React from 'react';

const UserPremiumRating = () => {
    return (
        <div>
            <div className='flex justify-between px-10 py-7 lg:px-52 lg:py-14 text-white bg-linear-to-l from-[#9514FA] to-[#4F39F6]'>
                <div className='text-center'>
                    <p className='font-extrabold text-2xl lg:text-6xl'>50k+</p>
                    <p className='text-[12px]'>Active Users</p>
                </div>

                <div className='border-l border-r px-6 lg:px-32 text-center'>
                    <p className='font-extrabold text-2xl lg:text-6xl'>200+</p>
                    <p className='text-[12px]'>Premium Tools</p>
                </div>
                
                <div className='text-center'>
                    <p className='font-extrabold text-2xl lg:text-6xl'>4.9</p>
                    <p className='text-[12px]'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default UserPremiumRating;