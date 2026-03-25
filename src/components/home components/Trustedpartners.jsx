import React from 'react'

const Trustedpartners = () => {
  return (
    <div className='max-w-[1500px] m-auto p-7 mb-12 mt-4  lg:mb-20 lg:mt-6'>
        <p className='text-gray-500 text-[16px] text-center lg:text-[18px]'>TRUSTED BY</p>
        <h1 className='text-xl font-bold text-blue-950 md:text-2xl lg:text-3xl text-center'>Industry-Leading Partners</h1>

        <div className="w-[90%] lg:w-[80%] m-auto my-14 grid gap-10 grid-cols-2 md:grid-cols-4">
            <div className='flex justify-center'>
                <img 
                    src="https://vectorseek.com/wp-content/uploads/2022/02/Mota-Engil-Logo-Vector.svg-.png" 
                    alt="mota-engil logo"
                    className='w-35' 
                />
            </div>
            <div className='flex justify-center'>
                <img 
                    src="https://vectorseek.com/wp-content/uploads/2026/01/Jones-Lang-LaSalle-Hotels-Logo-PNG-SVG-Vector-01.png" 
                    alt="mota-engil logo"
                    className='w-30' 
                />
            </div>
            <div className='flex justify-center'>
                <img 
                    src="https://vectorseek.com/wp-content/uploads/2022/01/American-Tower-Logo-Vector.png" 
                    alt="mota-engil logo"
                    className='w-30' 
                />
            </div>
            <div className='flex justify-center'>
                <img 
                    src="https://vectorseek.com/wp-content/uploads/2023/09/Emaar-Properties-Logo-Vector.svg-.png" 
                    alt="mota-engil logo"
                    className='w-20' 
                />
            </div>

            {/* grid row 2 */}
  
        </div>
        <p className='text-blue-950 text-center'>Partnered with over <span className='font-semibold'>500+ real estate companies</span> nationwide</p>
    </div>
  )
}

export default Trustedpartners