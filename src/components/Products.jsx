import React from 'react'

const Products = () => {
  const btnData = [
    "NEMA-Mounted VOLC 1160",
    "Retrofit Street Light Controller VOLC 2160",
    "Retrofit Street Light Controller VOLC 2180",
    "Retrofit Street Light Controller VOLC 4180",
  ]
  return (
    <div className='text-white ps-3 w-full h-auto pb-10 lg:pt-16 md:ps-32 lg:ps-32 bg-gradient-to-r from-sky-200 to-sky-50'>
       <span className="px-2 block  text-blue-800 w-16 lg:px-4 py-2 bg-gradient-to-r from-slate-500 to-slate-100">
        Products
      </span>
      <p className='text-black w-72 md:w-96 lg:w-96 lg:text-xl font-sans mt-5'>
        <span className='font-bold'>Cutting-edge hardware,</span>
        offering helping cities optimize resources and achieve smart development goals.
      </p>
      <div className='flex flex-wrap'>
        <button className=' bg-blue-700 px-1 m-2 py-1 rounded text-sm'>Centeralized Control & Monitoring System</button>
      {
        btnData.map((curElm)=>{
          return <button key={curElm} className='text-black px-4 py-3 border border-black rounded m-2
          hover:bg-blue-700 hover:text-white'>{curElm}</button>
        })
      }

      </div>

      <div className=' block md:flex lg:flex'>
        <div className='w-72 md:w-72 lg:w-80 ms-0 overflow-hidden md:ms-0 lg:ms-28 md: mt-5'>
          <img  className="overflow-hidden h-[100%] w-[100%]" src="public\images\smart_lights.png" alt="street" />
        </div>
        <div className='text-black w-72 md:w-80 md:mt-5 lg:w-80 lg:mt-5 bg-gradient-to-r from-slate-500 to-slate-100'>
          <span className='text-opacity-65 ps-8 text-slate-800 block pt-14 md:ps-8 lg:ps-8'>Products 1/5</span>
          <h2 className='font-serif font-bold ps-8 pe-8'>Centralized Control & Monitoring System</h2>
          <p className='ps-8 text-sm pe-4'>Designed indigenously for stree lighting projects, the CCMS oggers a complete feeder for a group of 30-50 street lights.</p>
          <span className='flex pb-5 text-blue-700 ps-8 pt-5'>Know More 
            <img className="w-6 pt-0 ms-3" src="public\images\icon_png.png" alt="icon" /></span>
        </div>
      </div>
    </div>
  )
}

export default Products