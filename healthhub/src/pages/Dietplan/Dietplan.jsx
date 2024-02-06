import React from 'react';
import diet from '../../assets/diet.png'

const Dietplan = () => {
    return (
        <div className='px-4 flex flex-col items-center pb-28'>
            <div className='w-full flex  flex-col p-5 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] mt-5 rounded-3xl'>
                <div className="flex items-center gap-3">
                    <img src={diet} alt="" className='w-16' />
                    <div className=""><h1 className='font-bold text-2xl'>Diet planner</h1>
                <p>Create your own diet be healthy</p></div>
                </div>
                    

            </div>
        </div>
    );
}

export default Dietplan;
