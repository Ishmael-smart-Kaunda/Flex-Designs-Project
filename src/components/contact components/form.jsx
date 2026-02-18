import emailjs from 'emailjs-com'
import { useState } from 'react'


export default function Form(){
     const [clientData, setClientData] = useState({
        user_name: "",
        email: "",
        phone: "",
        message: "",
        service_interest: ""
     })

     console.log(clientData)

     function handleChange(e) {
        const {name, value} = e.target

        setClientData(prevState => ({
            ...prevState,
            [name] : value
        }))
     }

     const sendEmail = (e) => {
            e.preventDefault();
            console.log(clientData)

            emailjs
            .send('service_l5vejlc', 'template_2i2udge',{
                user_name: clientData.user_name,
                email: clientData.email,
                phone: clientData.phone,
                service_interest: clientData.service_interest,
                message: clientData.message
            } , 'kq9oqzpPmAuIwXXM5')
            .then(
                () => {
                console.log('SUCCESS!');
                alert("Your request has been submitted successfully.")
                setClientData({
                    user_name:"",
                    email:"",
                    phone:"",
                    message:"",
                    service_interest: ""
                })
                },
                (error) => {
                console.log('FAILED...', error.text);
                alert("Error submitting your request.")
                },
            );
        };

       return(
                <form onSubmit={sendEmail} className="w-full flex flex-col gap-4 bg-zinc-100 py-10 px-5 rounded-r-sm">
                    <input 
                        type="text"
                        name="user_name" 
                        placeholder="Full name" 
                        className="w-full p-3 text-gray-600/90 border border-zinc-300 bg-zinc-200 rounded-md rounded-md placeholder: text-placeholder  focus:outline-none "
                        required
                        value={clientData.user_name}
                        onChange={handleChange}
                    />
                    <input 
                        type="email"
                        name="email" 
                        required
                        value={clientData.email}
                        onChange={handleChange}
                        placeholder="Email address" 
                        className="w-full p-3 text-gray-600/90 border border-zinc-300 bg-zinc-200 rounded-md focus:outline-none "
                    />
                    <input 
                        type="tel"
                        name="phone" 
                        required
                        value={clientData.phone}
                        onChange={handleChange}
                        placeholder="Phone" 
                        className="w-full p-3 text-gray-600/90 border border-zinc-300 bg-zinc-200 rounded-md focus:outline-none"
                    />
                    <select 
                        name="service_interest" 
                        className="p-3 border border-zinc-300 rounded-md text-gray-600/90 text-[13px] border-zinc-300 bg-zinc-200  rounded-md focus:outline-none"
                        required
                        value={clientData.service_interest}
                        onChange={handleChange}
                    >
                        <option value="">Your property your way! pick the service you need.</option>
                        <option className="bg-red hover:bg-red-800">Property Valuation</option>
                        <option>Property Management</option>
                        <option>Deed Processing</option>
                        <option>Building Designs</option>
                        <option>Investiment Advisory/Appraisal</option>
                    </select>
                    <textarea 
                        name="message" 
                        placeholder="Message" 
                        className="w-full p-3 text-gray-600/90 border border-zinc-300 bg-zinc-200 rounded-md focus:outline-none"
                        required
                        value={clientData.message}
                        onChange={handleChange}
                    >
                    </textarea>
                
                    <button className="w-full px-4 py-3 bg-blue-950 border-none text-white font-semibold rounded-md hover:bg-blue-950/95">Send</button>
                
                </form>
       )
}