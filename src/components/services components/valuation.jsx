
import { useState, useRef } from "react"
import plantValuation from "../../assets/images/valuation/plant valuation.jpg"
import insuranceValuation from "../../assets/images/valuation/insurance valuation.jpg"
import valuationClip from "../../assets/videos/valuation/valuation.mp4"
import { FaPlay, FaPause } from "react-icons/fa6"
import CTA from "./CTA"

export default function Valuation(){
          const videoRef=useRef(null)
          const progressRef =useRef(null)

          const [playing, setPlaying]=useState(false)
          const [progress, setProgress]=useState(0)

          {/*handle playing */}
          const handlePlay =()=>{
                videoRef.current.play();
                setPlaying(true)
          }
           {/*handle pause */}
          const handlePause =()=>{
                videoRef.current.pause();
                setPlaying(false)
          }

          {/*handle end */}
          const handleEnd = () =>{
                setPlaying(false)
                setProgress(0)
                videoRef.current.currentTime=0;
          }
         {/*handle progress */}
         const handleTimeUpdate = ()=>{
                const video =videoRef.current
                const percent = (video.currentTime/ video.duration)*100
                setProgress(percent)
         }
        {/* handle seek */}
        const handleSeek=(e)=>{
                const bar =progressRef.current;
                const rect = bar.getBoundingClientRect();
                const clickX =e.clientX - rect.left;
                const percent = clickX / rect.width;

                videoRef.current.currentTime=percent*videoRef.current.duration
        }

        return(
               <>
            
             
                <section className="max-w-[1500px] m-auto p-7 mt-15 md:mt-20">
                   <h1 className="text-3xl text-blue-950 text-center font-bold my-7">Property Valuation</h1>
                   <div className=" grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-6">
                   <article className="relative
                                       rounded-md
                                       size-full
                                       min-h-50
                                       md:h-full
                                       overflow-hidden 
                                       md:col-span-2 col-start-1 
                                       row-span-2"
                                       
                                       >
                            <video 
                                   
                                   ref={videoRef} 
                                   
                                   onEnded={handleEnd}
                                   onTimeUpdate={handleTimeUpdate}
                                   className=" absolute inset-0 w-full object-cover">
                                   
                                <source src={valuationClip} type="video/mp4"/>
                            </video>
                            {!playing ?(
                                        <button onClick={handlePlay}
                                        className=" p-3 rounded-full absolute top-1/2 left-1/2 -translate-1/2 border-none flex items-center justify-center bg-black/30"
                                        aria-label="Play video">
                                                <FaPlay className="text-white"/>
                                        </button>
                                      ) : 
                                      (
                                        <button onClick={handlePause}
                                        className="p-3 rounded-full absolute top-1/2 left-1/2 -translate-1/2 border-none flex items-center justify-center bg-black/30"
                                        aria-label="pause video">
                                                <FaPause className="text-white"/>
                                        </button>
                                      )
                             }
                           
                            <div
                               ref={progressRef}
                               onClick={handleSeek}
                               className="w-[70%] absolute bottom-5 left-[50%] translate-x-[-50%] h-2 bg-slate-200/60 rounded cursor-pointer"
                            >
                                <div
                                    className="h-full bg-red-900 rounded"
                                    style={{width: ` ${progress}%`}}
                                />                            
                           </div>

                    </article>

                    <article className="col-span-1 size-full text-gray-500">
                             <h1 className=" text-blue-900 font-semibold pb-2">Mortgage lending Valuation</h1>
                            <p className="text-justify">
                              We provide independent and well researched property valuations that support mortgage 
                              lending decisons, ensuring accurate collateral assessment, risk mitigation, and compliance
                              with lending requirements.
                              Our work is consistently trusted by lenders for dependable and defensible valuations.  
                               
                            </p>
                    </article>

                    <article className="col-span-1 size-full text-gray-500">
                             <h1 className=" text-blue-900 font-semibold pb-2">Valuation for Buying and Selling</h1>
                            <p className="text-justify">
                             Our team run tearlessly to provide independent, marke-based valuations that support informed
                             decisions on buying or selling your property. We are bring clarity and fairness in property 
                             market transaction.
                            </p>
                    </article>

                    <article className="md:row-start-1 md:col-start-4 col-span-1 md:row-span-2 size-full text-gray-500">
                            <h1 className="text-blue-900 font-semibold pb-2">Plant and machinery Valuations</h1>
                            <img src={plantValuation} className="w-full h-auto"/>
                            <p className="text-justify">
                             We are geared to assess the value of plants and machinery you have to support financial
                             reporting, accessing credit facility or any other purpose. Each assessment reflects asset 
                             condition, functionality, and market trends to ensure fairness and clarity in the valuation.
                            </p>
                    </article>

                    <article className="md:row-start-3 md:row-span-2 size-full text-gray-500">
                            <h1 className="text-blue-900 font-semibold pb-2">Valuation for Insurance purpose</h1>
                            <img src={insuranceValuation} className="w-full h-auto"/>
                            <p className="text-justify">
                            Our assessment in insurance purpose valuaions help clients determine appropriate sums and
                            support effective risk protection. We consider replacement costs, asset condition, and current market
                            factors to ensure properties are adequately insured.
                            </p>
                    </article>

                     <article className="md:row-start-3 row-span-1 size-full text-gray-500">
                            <h1 className="text-blue-900 font-semibold pb-2">Valuation for Letters of Administration</h1>
                            <p className="text-justify">
                             For deceased estates, we provide accurate, and comprehemsive assessment of properties and other assets.
                             Each report enstablishes both the maket value at the death and the current value to ensure fairness in asset
                             distribution and definsiblity in legal matters.
                            </p>
                    </article>
                     <article className="md:row-start-4 row-span-1 size-full text-gray-500">
                            <h1 className="text-blue-900 font-semibold pb-2">Valuation for Auditing and financial reporting</h1>
                            <p className="text-justify">
                              Here we provide independent and accurate assessment of assets and libilities, each valuation prepared 
                              inline with accounting and reguratory standards, which helps to deliver clear and defensible fingures 
                              to support audits, financial statements, and cooporate decision making.
                            </p>
                    </article>
                     <article className="md:row-start-3 md:row-span-2 md:col-span-2 size-full">
                            <CTA/>
                    </article>
                   </div>


                </section>

                   </>
        )
}