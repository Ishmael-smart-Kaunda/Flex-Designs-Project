

import { useState } from "react"
import resi3 from "../../assets/images/resi22.jpg"
import backView from "../../assets/images/resi31.jpg"
import residentialData from "../../data/residentialData"


export default function Residential(){
    const residentialImages=[
            {id:0, src:resi3, alt:"front View"},
            {id:1, src:backView, alt:"front View"},
            {id:2, src:resi3, alt:"front View"},
            {id:3, src:backView, alt:"front View"},
            {id:4, src:resi3, alt:"front View"},
            
    ]
    const [{currentImg, index}, setState] =useState({currentImg: backView, index: 0})
    const [{currentTImg, Tindex}, setTState] =useState({currentTImg: residentialData[0].townHouse[0].src, Tindex: 0})
    const [{currentFImg, Findex}, setFState] =useState({currentFImg: residentialData[1].fourBedHouse[0].src, Findex: 0})
    const [{currentTrImg, Trindex}, setTrState] =useState({currentTrImg: residentialData[2].threeBedHouse[0].src, Trindex: 0})
    
    const imgDots=residentialImages.map((dot,i)=>{
            return(
                   <span key={dot.id} className={` size-3 rounded-full ${i===index ? 'bg-amber-600/50': 'bg-white/50 transition-colors 200'} `}></span>
            )
    })
    const pics=  residentialImages.map((image, i)=>{ 
            return(   
                    <img  src={image.src} key={image.id} onClick={()=>setState({currentImg: image.src,index: i})} className="size-9 hover:scale=102"/>   
                  )   
               })
     const townHouse=residentialData.find((house)=> house.townHouse)?.townHouse;
     const fourbedHouse=residentialData.find((house)=> house.fourBedHouse)?.fourBedHouse;
     const threebedHouse=residentialData.find((house)=> house.threeBedHouse)?.threeBedHouse;
     
     const townHouseImgs=townHouse.map((image, i)=>{
                            return (
                                    <img  src={image.src} alt={image.alt} key={image.id} onClick={()=>setTState({currentTImg: image.src,Tindex: i})} className="size-9 hover:scale=102"/>   
                                   )
                            })
     const fourbedHouseImgs=fourbedHouse.map((image, i)=>{
                            return (
                                    <img  src={image.src} alt={image.alt} key={image.id} onClick={()=>setFState({currentFImg: image.src,Findex: i})} className="size-9 hover:scale=102"/>   
                                   )
                            })
      const threebedHouseImgs=threebedHouse.map((image, i)=>{
                            return (
                                    <img  src={image.src} alt={image.alt} key={image.id} onClick={()=>setTrState({currentTrImg: image.src,Trindex: i})} className="size-9 hover:scale=102"/>   
                                   )
                            })

      const imgTDots=townHouseImgs.map((dot,i)=>{
                            return(
                                <span key={dot.id} className={` size-3 rounded-full ${i===Tindex ? 'bg-amber-600/50': 'border border-black-400/70 transition-colors 200'} `}></span>
                            )
                        })
     const imgFDots=fourbedHouseImgs.map((dot,i)=>{
                            return(
                                <span key={dot.id} className={` size-3 rounded-full ${i===Findex ? 'bg-amber-600/50': 'border border-black-400/70 transition-colors 200'} `}></span>
                            )
                        })
    const imgTrDots=threebedHouseImgs.map((dot,i)=>{
                            return(
                                <span key={dot.id} className={` size-3 rounded-full ${i===Trindex ? 'bg-amber-600/50': 'border border-black-400/70 transition-colors 200'} `}></span>
                            )
                        })

    return(
        <section className="max-w-6xl lg:max-w-7xl lg:px-5 mx-5 md:mx-auto  bg-blue-950/0 rounded-lg text-center  pb-10 text-zinc-500">
                               <h4 className="text-2xl text-zinc-50 font-bold  pb-7">Residential Houses</h4>
                               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                   <article className="flex flex-col gap-1 justify-between bg-blue-950/5 rinng-ston/10 shadow-sm shadow-stone-600 rounded-lg p-2 text-justify hover:scale-101 transtion-transform duration-300">
                                      
                                       <img src={currentImg} alt="residential" className="w-full object-cover h-60 rounded-lg"/>
                                       
                                        <div className="m-auto flex flex-row items-center p-1 gap-1 -translate-y-10">
                                        {imgDots}
                                       </div>

                                       <div className="min-picBox w-[fit-content] h-10 m-auto flex flex-row items-center p-1 gap-2 ring rign-zinc-400/50 -translate-y-5">
                                         {pics}
                                       </div>
                                       
                                       <h4 className="text-left font-medium text-zinc-200">THREE BEDROOM HOUSE</h4>
                                       <p>Modern Residential designs that blend vibrant colors 
                                          and spaces for lively home.
                                       </p> 
                                     <a href="/contact" className=" text-center bg-yellow-400/70 hover:bg-yellow-400/80 rounded-sm w-[fit-content]  p-2 px-15 self-center text-black font-bold">Reach Us</a>                                       
       
                                   </article>
                                    <article className="flex flex-col gap-1 justify-between bg-blue-700/5 rinng-ston/10 shadow-sm shadow-stone-600 rounded-lg p-2 text-justify hover:scale-101 transtion-transform duration-300">
                                      
                                       <img src={currentFImg} alt="residential" className="w-full object-cover h-60 rounded-lg"/>
                                       
                                        <div className="m-auto flex flex-row items-center p-1 gap-1 -translate-y-10">
                                        {imgFDots}
                                       </div>

                                       <div className="min-picBox w-[fit-content] h-10 m-auto flex flex-row items-center p-1 gap-2 ring rign-zinc-400/50 -translate-y-5">
                                         {fourbedHouseImgs}
                                       </div>
                                       
                                       <h4 className="text-left font-medium text-zinc-200">FOUR BEDROOM HOUSE</h4>
                                       <p>Modern Residential designs that blend vibrant colors 
                                          and spaces for lively home.
                                       </p> 
                                     <a href="/contact" className=" text-center bg-yellow-400/70 hover:bg-yellow-400/80  rounded-sm  w-[fit-content]  p-2 px-15 self-center text-black font-bold">Reach Us</a>                                       
       
                                   </article>

                                     <article className="flex flex-col gap-1 justify-between bg-blue-950/5 rinng-ston/10 shadow-sm shadow-stone-600 rounded-lg p-2 text-justify hover:scale-101 transtion-transform duration-300">
                                      
                                       <img src={currentTImg} alt="residential" className="w-full object-cover h-60 rounded-lg"/>
                                       
                                        <div className="m-auto flex flex-row items-center p-1 gap-1 -translate-y-10">
                                        {imgTDots}
                                       </div>

                                       <div className="min-picBox w-[fit-content] h-10 m-auto flex flex-row items-center p-1 gap-2 ring rign-zinc-400/50 -translate-y-5">
                                         {townHouseImgs}
                                       </div>
                                       
                                       <h4 className="text-left font-medium text-zinc-200">TOWN HOUSE</h4>
                                       <p>Modern Residential designs that blend vibrant colors 
                                          and spaces for lively home.
                                       </p> 
                                     <a href="/contact" className=" text-center bg-yellow-400/70 hover:bg-yellow-400/80  rounded-sm  w-[fit-content]  p-2 px-15 self-center text-black font-bold">Reach Us</a>                                       
       
                                   </article>
       
                                     <article className="flex flex-col gap-1 justify-between bg-blue-700/5 rinng-ston/10 shadow-sm shadow-stone-600 rounded-lg p-2 text-justify hover:scale-101 transtion-transform duration-300">
                                      
                                       <img src={currentTrImg} alt="residential" className="w-full object-cover h-60 rounded-lg"/>
                                       
                                        <div className="m-auto flex flex-row items-center p-1 gap-1 -translate-y-10">
                                        {imgTrDots}
                                       </div>

                                       <div className="min-picBox w-[fit-content] h-10 m-auto flex flex-row items-center p-1 gap-2 ring rign-zinc-400/50 -translate-y-5">
                                         {threebedHouseImgs}
                                       </div>
                                       
                                       <h4 className="text-left font-medium text-zinc-200">THREE BEDROOM HOUSE</h4>
                                       <p>Modern Residential designs that blend vibrant colors 
                                          and spaces for lively home.
                                       </p> 
                                     <a href="/contact" className=" text-center bg-yellow-400/70 hover:bg-yellow-400/80  rounded-sm  w-[fit-content]  p-2 px-15 self-center text-black font-bold">Reach Us</a>                                       
       
                                   </article>
       
                                 
       
                               </div>
       
                              </section>
                       )
                    }