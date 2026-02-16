

export default function Form(){
        const AlertMmessage=()=>{
                 alert("We have received your message. we'll get back soon!")
        }

       return(
                <form className="w-full flex flex-col gap-4 bg-zinc-100 py-10 px-5 rounded-r-sm">
                <input 
                    type="text"
                    name="user_name" 
                    placeholder="Full name" 
                    className="w-full p-3 text-gray-600/90 border border-zinc-300 bg-zinc-200 rounded-md rounded-md placeholder: text-placeholder  focus:outline-none "
                    required
                />
                <input 
                    type="email"
                    name="email" 
                    placeholder="Email address" 
                    className="w-full p-3 text-gray-600/90 border border-zinc-300 bg-zinc-200 rounded-md focus:outline-none "
                />
                <input 
                    type="tel"
                    name="phone" 
                    placeholder="Phone" 
                    className="w-full p-3 text-gray-600/90 border border-zinc-300 bg-zinc-200 rounded-md focus:outline-none"
                />
                <select 
                name="interest" 
                className="p-3 border border-zinc-300 rounded-md text-gray-600/90 text-[13px] border-zinc-300 bg-zinc-200  rounded-md focus:outline-none"
                required
            >
                <option value="">Your property your way! pick the service you need.</option>
                <option className="bg-red hover:bg-red-800">Property Valuation</option>
                <option>Property Management</option>
                <option>Deed Processing</option>
                <option>Building Designing</option>
                <option>Investiment Advisory/Appraisal</option>
            </select>
                <textarea 
                    name="message" 
                    placeholder="Message" 
                    className="w-full p-3 text-gray-600/90 border border-zinc-300 bg-zinc-200 rounded-md focus:outline-none"
                    
                >
                </textarea>
            
                <button onClick={AlertMmessage}
                className="w-full px-4 py-3 bg-blue-950 border-none text-white font-semibold rounded-md hover:bg-blue-950/95">Send</button>
            
        </form>
       )
}