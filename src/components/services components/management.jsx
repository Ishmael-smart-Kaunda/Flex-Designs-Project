
import { useState, useRef } from "react"
import valuationClip from "../../assets/videos/valuation/valuation.mp4"
import { FaPlay, FaPause } from "react-icons/fa6"
import CTA from "./CTA"
import managementData from "../../data/managementData"
import Services from "./services"

export default function Management(){
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
            
             
                <section className="max-w-[1500px] m-auto p-7">
                   <h1 className="text-3xl text-blue-950 text-center font-bold my-7">Property Management</h1>
                  
                   <div className=" w-full mb-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                             {/* services from management services data */}
                                {managementData.map(data => 
                                                < Services 
                                                key={data.id} 
                                                data={data} 
                                                />
                                        )
                                }
                     <article className="relative
                                       rounded-md
                                       size-full
                                       h-50
                                       md:h-full
                                       overflow-hidden
                                       md:col-start-3
                                       md:row-start-2
                                       col-span-1
                                       row-span-1"
                                       
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
                               className="w-[70%] absolute bottom-5 left-[50%] translate-x-[-50%] h-1 bg-slate-200/60 rounded cursor-pointer"
                            >
                                <div
                                    className="h-full bg-red-900 rounded"
                                    style={{width: ` ${progress}%`}}
                                />                            
                           </div>

                    </article>
                   
                   </div>

                <CTA/>
                </section>

                   </>
        )
}