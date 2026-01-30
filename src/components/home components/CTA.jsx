import React from 'react'

const CTA = () => {
  return (
    <div className='max-w-[1500px] m-auto p-7 pb-0'>
        <div className='md:w-[70%] m-auto mb-15 bg-[#FAF8F8] backdrop-blur-md shadow-lg border-[1px] border-blue-950/20 rounded-xl text-gray-700 py-16 px-12 text-[16px] md:text-[18px]'>
            <p>
                <span className='font-bold text-blue-950'>Are You Stuck?</span> Making decisions on major 
                investments can feel uncertain especially when risk is 
                involved. While higher returns often come with higher risk, what truly matters is 
                that every risk is calculated and justified.
            </p>
            <br />
            <p>
                From valuation and development to legal considerations and final decision-making, we 
                support you at every stage to ensure clarity, confidence, and satisfaction.
            </p>
            <button className='block mt-10 font-bold m-auto cursor-pointer border-slate-950/20 text-blue-950'>
                Let Our Team Guide You
            </button>
        </div>

       
    </div>
  )
}

export default CTA