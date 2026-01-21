import logo from "../assets/logo/logo.png"
import resi from "../assets/images/resi22.jpg"
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi"
import { useState } from "react"

export default function Nav(){
    const [menuBar, setMenuBar] =useState(false)
    return(
            <nav className="z-100 sticky top-0 left-0  relative flex justify-between items-center ring-zinc-100 bg-zinc-950 h-15 w-full px-5 py-2">
               <img src={logo} className="h-10 w-18" alt="logo"/>
               <ul className="hidden md:flex flex-row gap-10 items-center rounded-sm text-neutral-50 py-2">
                   <li className="hover:text-yellow-500">HOME</li>
                   <li className="hover:text-yellow-500">ABOUT</li>
                   <li className="hover:text-yellow-500">PROJECTS</li>
                   <li className="hover:text-yellow-500">CONTACT</li>
               </ul>
               <button onClick={()=>setMenuBar(!menuBar)} className="md:hidden ring ring-zinc-600/50 rounded-sm p-2 bg-zinc-900/30">{menuBar?<FiX className=" size-5 text-zinc-100"/> :<FiMenu className=" size-5 text-zinc-100"/> } </button>
              {menuBar && (<ul className="md:hidden absolute top-full left-0 w-full flex flex-col gap-5 items-center rounded-sm text-neutral-50 py-2 bg-zinc-950 transtion all duration-500">
                            <li className="hover:text-yellow-500">HOME</li>
                            <li className="hover:text-yellow-500">ABOUT</li>
                            <li className="hover:text-yellow-500">PROJECTS</li>
                            <li className="hover:text-yellow-500">CONTACT</li>
                    </ul>)}
              
            </nav>
    )
}