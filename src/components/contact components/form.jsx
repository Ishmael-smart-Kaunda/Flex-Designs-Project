

export default function Form(){
     

       return(
                <form className="w-full flex flex-col gap-4 bg-zinc-100 py-10 px-5 rounded-r-sm">
                <input 
                    type="text"
                    name="user_name" 
                    placeholder="Full name" 
                    className="w-full p-3 border border-zinc-300 bg-zinc-200 rounded-md rounded-md placeholder: text-placeholder  focus:outline-none "
                    required
                />
                <input 
                    type="email"
                    name="email" 
                    placeholder="Email address" 
                    className="w-full p-3 border border-zinc-300 bg-zinc-200 rounded-md placeholder: text-placeholder bg-bgSecondary focus:outline-none "
                />
                <input 
                    type="tel"
                    name="phone" 
                    placeholder="Phone" 
                    className="w-full p-3 border border-zinc-300 bg-zinc-200 rounded-md placeholder: text-placeholder bg-bgSecondary focus:outline-none"
                />
                <textarea 
                    name="message" 
                    placeholder="Message" 
                    className="w-full md:col-span-2 p-3 border border-zinc-300 bg-zinc-200 rounded-md placeholder: text-placeholder bg-bgSecondary focus:outline-none"
                    
                >
                </textarea>
                <div className="md:col-span-2 flex gap-4">
                    <button className="w-full px-4 py-3 bg-red-950 text-white font-semibold rounded-md hover:bg-red-900">Send</button>
            </div>
        </form>
       )
}