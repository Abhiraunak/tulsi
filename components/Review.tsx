import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

export  function Review() {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Sharma",
      role: "Homeowner, Patna",
      review: "Tulsi Interior transformed our apartment beyond recognition. Their attention to detail and commitment to quality is unmatched. The wall panels they installed have become the centerpiece of our home!",
      rating: 5,
      image: "/avatar1.jpg"
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Office Manager, Patna",
      review: "We hired Tulsi for our office renovation and couldn't be happier. Their team was professional, punctual, and delivered exceptional results. The false ceiling design has completely changed our workspace atmosphere.",
      rating: 5,
      image: "/avatar2.jpg"
    },
    {
      id: 3,
      name: "Vikram Singh",
      role: "Restaurant Owner, Patna",
      review: "The flooring work Tulsi did for our restaurant has received countless compliments. Their team worked efficiently during non-business hours and left the place spotless. Truly a professional service!",
      rating: 4,
      image: "/avatar3.jpg"
    }
  ];

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden"
              >
                {/* Corner Image */}
                <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-full h-full" />
                  <div className="absolute top-4 right-4 w-16 h-16 rounded-full overflow-hidden border-4 border-white">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                  </div>
                </div>

                {/* Quote Icon */}
                <div className="text-green-500 mb-6">
                  <FaQuoteLeft size={36} />
                </div>

                {/* Review Text */}
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.review}"
                </p>

                {/* Client Info */}
                <div className="flex items-center">
                  <div className="mr-4">
                    <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}