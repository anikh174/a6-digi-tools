import React from 'react';

const UserPremiumRating = () => {
    return (
        <div>
            <div className='flex justify-between px-52 py-14 text-white bg-linear-to-l from-[#9514FA] to-[#4F39F6]'>
                <div>
                    <p className='font-extrabold text-6xl'>50k+</p>
                    <p>Active Users</p>
                </div>

                <div className='border-l border-r px-32'>
                    <p className='font-extrabold text-6xl'>200+</p>
                    <p>Premium Tools</p>
                </div>
                
                <div>
                    <p className='font-extrabold text-6xl'>4.9</p>
                    <p>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default UserPremiumRating;