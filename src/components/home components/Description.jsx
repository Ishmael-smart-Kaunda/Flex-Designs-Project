import React from 'react'

const Description = () => {
  return (
    <div className='max-w-[1500px] m-auto p-7 mt-12  lg:mt-25'>
        <div className='grid md:grid-cols-2 gap-6 px-4'>
            <div className='w-full lg:ml-10'>
                <h1 className='text-xl font-bold text-blue-950 md:text-2xl lg:text-3xl'>ABOUT US</h1>
            </div>
            <div className='text-gray-500 text-[16px] text-left lg:text-[18px]'>
                <p>We are an independent property advisory firm providing 
                professional valuation, management, development, and 
                investment services across the property lifecycle.</p>
                <br />
                <p>Our work is grounded in market evidence, technical 
                expertise, and a clear understanding of regulatory and 
                commercial requirements. We support property owners, 
                investors, developers, and institutions with objective 
                advice that enables confident, well-informed decisions.</p>
                <br />
                <p>From valuation and feasibility analysis to development 
                coordination, asset management, and investment appraisal, 
                we approach each instruction with diligence, accuracy, 
                and professional integrity. Our focus is on delivering 
                defensible outcomes that stand up to scrutiny and add 
                long-term value.</p>
            </div>
        </div>

        <br />

        <div className='grid md:grid-cols-3 gap-10 mt-10'>
            <img 
                src="https://images.pexels.com/photos/8847042/pexels-photo-8847042.jpeg" 
                alt="" 
            />
            <img 
                src="https://images.pexels.com/photos/12675368/pexels-photo-12675368.jpeg" 
                alt="" 
            />
            <img 
                src="https://images.pexels.com/photos/14431776/pexels-photo-14431776.jpeg" 
                alt="" 
            />
        </div>

        <br />

        <hr 
            className='w-[80%] m-auto my-13  border-blue-950/20'
        />

        <br />

        <div className='grid md:grid-cols-2 gap-6'>
            <div className='w-full lg:ml-10'>
                <h1 className='text-xl font-bold text-blue-950 md:text-2xl lg:text-3xl'>OUR MISSION</h1>
            </div>
            <div className='text-gray-500 text-[16px] text-left lg:text-[18px]'>
                <p>To provide independent, accurate, and defensible 
                property advice that enables informed decision-making 
                across valuation, development, management, and 
                investment.</p>
            </div>
        </div>

                <br />

        <div className='grid md:grid-cols-3 gap-10 mt-10'>
            <div>
                <img 
                    src="https://images.pexels.com/photos/8847042/pexels-photo-8847042.jpeg" 
                    alt="" 
                />
                <div className='text-gray-500 text-[16px] mt-2 md:text-[18px]'>
                    <p>Investing in property should feel confident. 
                    That’s why we guide you through every stage of 
                    the process, supported by clear metrics and 
                    financial analysis.</p>
                </div>
            </div>
            <div>
                <img 
                    src="https://images.pexels.com/photos/7876144/pexels-photo-7876144.jpeg" 
                    alt="" 
                />
                <div className='text-gray-500 text-[16px] text-left lg:text-[18px] mt-2'>
                    <p>Legal considerations are critical in property transactions. 
                    That’s why we ensure you are supported by approved advisors to 
                    help guide and protect your investment decisions.</p>
                </div>
            </div>
            <div>
                <img 
                    src="https://images.pexels.com/photos/8470806/pexels-photo-8470806.jpeg" 
                    alt="" 
                />
                <div className='text-gray-500 text-[16px] mt-2 md:text-[18px]'>
                    <p>Ultimately, our goal is to help you build the life you envision. 
                    With the guidance and expertise of our team, that goal becomes 
                    achievable.</p>
                </div>
            </div>
            
        </div>

        <br />

        <hr 
            className='w-[80%] m-auto mt-13 mb-8  border-blue-950/20'
        />

        <br />

    </div>
  )
}

export default Description