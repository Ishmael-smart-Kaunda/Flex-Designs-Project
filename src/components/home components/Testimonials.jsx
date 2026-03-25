import React from 'react'
import testimonialsData from '../../data/testimonialsData'
import Testcards from './Testcards'

const Testimonials = () => {

    const renderTestimonials = testimonialsData.map(card => {
        return <Testcards 
                key={card.id}
                client_name={card.client_name}
                client_desc={card.client_desc}
                test_desc={card.test_desc}
                client_img= {card.client_img}
                rating={card.rating}
            />
    })


  return (
    <div className='max-w-[1500px] m-auto p-7 '>
        <h1 className='text-xl font-bold text-blue-950 md:text-2xl lg:text-3xl text-center'>What Our Clients Say</h1>
        <p className='text-gray-500 text-[16px] text-center lg:text-[18px]'>
            Join thousands of satisfied clients who found their dream properties through our platform
        </p>

        {/* Testimonial Cards */}

        <div className="grid md:grid-cols-3 gap-6 my-10">
            {renderTestimonials}
        </div>
    </div>
  )
}

export default Testimonials