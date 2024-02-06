import React, { useState } from 'react';
import Tiket from '../../assets/ticket.png'
import Select from 'react-select'
import opLand from '../../assets/oplanding.svg'



const Opbooking = () => {
    const [hospital ,setHospital] = useState("");
    const [docter ,setDocter] = useState("");

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ] 
    return (
        <div className='p-4 flex flex-col mt-3 pb-36 '>
               <div className="flex  mb-6"><img src={Tiket} alt="" srcset="" className='w-9' /> <h1 className='font-bold text-2xl'>Book OP ticket</h1></div>
            <div className="flex justify-center">
            <img src={opLand} alt=""  className='w-3/4'/>
            </div>
          

            <form className="flex flex-col gap-3 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] w-full rounded-2xl p-5">
              
                <h1 className='font-bold text-lg'>Select hospital</h1>
                <Select options={options} 
                required
                onChange={e=> setHospital(e.value)}
                />
                <h1 className='font-bold text-lg mt-4'>Select doctor</h1>

                <Select options={options} 
                required
                onChange={e=> setDocter(e.value)}
                />
                 <h1 className='font-bold text-lg'>Select booking date</h1>
                 <input required type="date" placeholder='When you want to book' className='w-full bg-white outline-none h-10 placeholder:text-black border rounded-sm '/>

                 <button className='bg-blue-400 p-4 text-white font-bold rounded-lg'>Book</button>
            </form>
            
        </div>
    );
}

export default Opbooking;
