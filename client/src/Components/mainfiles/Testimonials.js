import React from "react";

export default function Testimonials()
{
  
const testimonials = [
    {
      name: 'Athira',
      
      imageSrc: '../Assets/Images/Testimonials/Athira.jpg',
      
      description: 'It was a wonderful experience. We did learn a lot  through the workshop.The workshop helped us a lot to improve ourselves',
    },
    {
        name: 'Ann Mariya Binoy',
        
        imageSrc: '../Assets/Images/Testimonials/Ann.jpg',
        
        description: 'The startup workshop was very useful for us.... We have learned many things for example how to develop an idea, how to implement it,etc.... Along with this classes was very much relevant and useful. We got an idea about how to improve on our project... We only just had an idea but the workshop helped us to improve our idea and work on it.... The idea pitching competition was also so good.. We got an idea where we need to change, improve etc.... All the mentors was very helpful in clearing our doubts.... Overall it was a wonderful section... Thank you iedc CET',
      },
      {
        name: 'Sreekanth Sreekumar',
        
        imageSrc: '../Assets/Images/Testimonials/Sreekanth.jpg',
        
        description: 'The startup workshop series conducted by IEDC was wonderful. The workshop sessions were fun and covered many relevant topics required for startups such as business models and funding strategies. The interactive activities taught us about collaboration and networking. The quiz at the end were really helpful in evaluating ourselves.',
      }
  ];
  
  return(
        <div className="p-4 w-3/4 l self-center text-white">
  <section className="mb-32 text-center">
    <h2 className="mb-12 pb-4 text-center text-3xl break-words font-bold">Testimonials</h2>

    <div className="grid gap-6 lg:grid-cols-3 md:flex-col xl:gap-x-12">
      {testimonials.map((testimonial, index) => (
        <div className="mb-6  lg:mb-0" key={index}>
          <div className="relative block border rounded-lg ">
            <div className="flex">
              <div className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]" data-te-ripple-init data-te-ripple-color="light">
                <img src={testimonial.imageSrc} className="w-full" />
                {testimonial.brochureLink && (
                  <a href={testimonial.brochureLink}>
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                    </div>
                  </a>
                )}
              </div>
            </div>
            <div className="p-6">
              <h5 className="mb-2 text-lg font-bold">{testimonial.name}</h5>
              <h6 className="mb-4 font-medium text-primary dark:text-primary-400">{testimonial.role}</h6>
              
              <p>{testimonial.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
</div>


    );
}
