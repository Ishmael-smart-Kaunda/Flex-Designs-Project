import img from "../../assets/images/valuation/valuation.jpg"

const Description = () => {
  return (
    <div className='max-w-[1300px] m-auto p-7 mt-16 lg:mt-25'>
        <div className='grid md:grid-cols-2 gap-6'>
            <div className='w-full h-[300px] rounded-lg'>
                <img 
                    className='w-full h-[300px] lg:h-[380px] object-cover rounded-lg'
                    src={img}
                    alt="Market Evaluation" 
                />
            </div>
            <div className='border rounded-lg shadow-lg bg-[#FAF8F8]/30 border-white/10 p-3'>
                <h1 className='font-bold text-2xl lg:text-3xl text-[#FAF8F8] text-slate-900'>ABOUT US</h1>
                <br />
                <p className='text-[16px] text-[#FAF8F8] text-slate-900'>We are an independent property advisory firm providing 
                professional valuation, management, development, and 
                investment services across the property lifecycle.</p>
                <br />
                <p className='text-[16px] text-[#FAF8F8] text-slate-900'>Our work is grounded in market evidence, technical 
                expertise, and a clear understanding of regulatory and 
                commercial requirements. We support property owners, 
                investors, developers, and institutions with objective 
                advice that enables confident, well-informed decisions.</p>
                <br />
                <p className='text-[16px] text-[#FAF8F8] text-slate-900'>From valuation and feasibility analysis to development 
                coordination, asset management, and investment appraisal, 
                we approach each instruction with diligence, accuracy, 
                and professional integrity. Our focus is on delivering 
                defensible outcomes that stand up to scrutiny and add 
                long-term value.</p>
            </div>
        </div>
        <div className='grid md:grid-cols-2 gap-6 mt-20'>
            <div className='border rounded-lg shadow-lg bg-[#FAF8F8]/30 border-white/10 p-3 text-slate-900'>
                <h1 className='font-bold text-2xl lg:text-3xl text-[#FAF8F8] text-slate-900'>Our Mission</h1>
                <br />
                <p className='text-[16px] text-[#FAF8F8] text-slate-900'>To provide independent, accurate, and defensible 
                property advice that enables informed decision-making 
                across valuation, development, management, and 
                investment.</p>
            </div>
            <div className='w-full h-[300px] rounded-lg'>
                <img 
                    className='w-full h-[300px]  object-cover rounded-lg'
                    src={img} 
                    alt="Data Driven" 
                />
            </div>
        </div>
    </div>
  )
}

export default Description