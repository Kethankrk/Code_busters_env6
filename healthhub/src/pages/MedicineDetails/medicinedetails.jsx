import React, { useState } from 'react';
import medicine from '../../assets/medicine.png'
import searchIcon from '../../assets/searchicon.gif'    
import axios from 'axios';

const Medicinedetails = () => {
    const [UserInput ,setuserInput] = useState();
    const [result ,setresult] = useState();

    

      const submit = async(e)=>{
        e.preventDefault() 

        // setresult([])
        const options = {
          method: 'GET',
          url: `https://api.fda.gov/drug/label.json?search=%22${UserInput}%22`,
        };
        try {
          const response = await axios.request(options);
        //   setresult(response.data);
          setresult(response.data.results[0])
        } catch (error) {
          console.error(error);
        }
      }
    return (
        <div className='px-4 flex flex-col items-center pb-28'>
        <div className='w-full flex  flex-col p-5 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] mt-5 rounded-3xl'>
            <div className="flex items-center gap-3">
                <img src={medicine} alt="" className='w-16' />
                <div className=""><h1 className='font-bold text-2xl'>Medicine Details</h1>
            <p> Find the details of your medicine </p></div>
            </div>

            <h1 className='font-bold text-lg mt-7'>Medicine name</h1>
            <h1 className=''>Enter the medicine you want to check</h1>
            <form onSubmit={submit} className='flex  shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-5 py-3 rounded-full gap-1 mt-5'>
            <input
              type='text'
              required
              placeholder='Enter the medicine    '
              className='w-full outline-none'
              value={UserInput}
              onChange={e=> setuserInput(e.target.value)}
            />
            <button className='w-8' type='submit'>
              <img src={searchIcon} alt='' />
            </button>
          </form>
      
        </div>
        {result != null ? ( <div className='w-full flex flex-col p-5 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] mt-5 rounded-3xl'>
             <>
             <h1 className='font-bold mb-3'>Result :</h1>
              <span>
              <span className='font-bold'>USES : </span> {result.indications_and_usage.map(e=>(
                <p>{e.replace("•","")}</p>
              ))}
              </span>
              <span>
              <span className='font-bold mt-1'> Purpose  : </span> {result.purpose.map(e=>(
                <p>{e.replace("•","")}</p>
              ))}
              </span>
             </>
              
        </div>) : <p></p>}
       
    </div>
    );
}

export default Medicinedetails;
