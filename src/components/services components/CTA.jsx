import { Link } from "react-router-dom"
const CTA = () => {
  return (
    <div className='max-w-[1500px] m-auto pb-0'>
        <div className='w-full md:w-[90%] m-auto mb-15 bg-[#FAF8F8] bckdrop-blur-md shadow-lg border-[1px] border-blue-950/20 rounded-xl text-gray-700 p-6 text-[16px] md:text-[18px]'>
            <p>
                <span className='font-bold text-red-900'>Do you want credit facility, insure your property or produce financial report? </span> 
                 Credit approval, insurance coverage, preparing financial reports or any transactional decision on real etate asset depends on knowing its value.
                 Professional valuations ensure decisions are supported by accurate data and market evidence.
            </p>
            <Link to="/contact">
                <button className='text-center w-fit block mt-10 font-bold m-auto cursor-pointer border border-blue-900/50 rounded-md p-2 text-blue-950'>
                    Request A service
                </button>
            </Link>
        </div>

       
    </div>
  )
}
export default CTA