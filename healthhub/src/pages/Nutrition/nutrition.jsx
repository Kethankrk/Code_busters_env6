import React, { useState } from 'react';
import nutrition from '../../assets/nutrition.png'
import searchIcon from '../../assets/searchicon.gif'
import axios from 'axios'

const Nutrition = () => {

    const [UserInput ,setuserInput] = useState();
    const [result ,setresult] = useState();

    

      const submit = async(e)=>{
        e.preventDefault() 
        const options = {
          method: 'GET',
          url: 'https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition',
          params: {
            query: UserInput
          },
          headers: {
            'X-RapidAPI-Key': '05b9e7f8f1mshfbdb403c2392a92p17f3b1jsn057a3006496e',
            'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
          }
        };
        try {
          const response = await axios.request(options);
          setresult(response.data);
        } catch (error) {
          console.error(error);
        }
      }
      
      

    return (
        <div className='px-4 flex flex-col items-center pb-28'>
        <div className='w-full flex  flex-col p-5 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] mt-5 rounded-3xl'>
            <div className="flex items-center gap-3">
                <img src={nutrition} alt="" className='w-16' />
                <div className=""><h1 className='font-bold text-2xl'>Nutrition Calculator</h1>
            <p> Keep track your food nutrients </p></div>
            </div>

            <h1 className='font-bold text-lg mt-7'>Food name</h1>
            <h1 className=''>Enter the food you want to track</h1>
            <form onSubmit={submit} className='flex  shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-5 py-3 rounded-full gap-1 mt-5'>
            <input
              type='text'
              required
              placeholder='Enter the food '
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
              <h1 className='font-bold mb-3'>Nutrition content :</h1>
              {result.map(e=>(
                <div className="flex gap-2">
                 <h1>{e.name.slice(0, 1).toUpperCase() + e.name.slice(1)} have :</h1>

                  <div className="">
                  Serving size: {e.serving_size_g} g <br/>
                  Calories: {e.calories}  <br/>
                  Fat: {e.fat_total_g} g  <br/>
                  Protein: {e.protein_g} g  <br/>
                  Carbohydrates: {e.carbohydrates_total_g} g  <br/>
                  Fiber: {e.fiber_g} g  <br/>
                  Suger: {e.sugar_g} g  <br/>
                  </div>

                  
                </div>
              ))}
        </div>) : <p></p>}
       
    </div>
    );
}

export default Nutrition;
