import React from "react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import TestimonialCarBackground from "./TestimonialCarBackground";

const Testimonials: React.FC = () => {
  return (
    <div className="relative">
      <TestimonialCarBackground />
      <div className="relative z-10 grid gap-14 max-w-lg w-full mx-auto lg:gap-8 lg:grid-cols-3 lg:max-w-full">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="group">
            <div className="relative bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-[#2D6EB8]/10">
              {/* Racing line decoration */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2D6EB8]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="flex items-center mb-4 w-full justify-center lg:justify-start">
                <div className="relative">
                  <Image
                    src={testimonial.avatar}
                    alt={`${testimonial.name} avatar`}
                    width={50}
                    height={50}
                    className="rounded-full shadow-md ring-2 ring-[#2D6EB8]/20 group-hover:ring-[#2D6EB8]/40 transition-all duration-300"
                  />
                  {/* Small checkered flag accent */}
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 grid grid-cols-2 grid-rows-2 opacity-60">
                    <div className="bg-[#2D6EB8]"></div>
                    <div className="bg-white"></div>
                    <div className="bg-white"></div>
                    <div className="bg-[#2D6EB8]"></div>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-secondary">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-foreground-accent">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-foreground-accent text-center lg:text-left relative">
                <span className="absolute -top-2 -left-2 text-2xl text-[#2D6EB8]/20 font-serif">
                  &quot;
                </span>
                {testimonial.message}
                <span className="absolute -bottom-2 -right-2 text-2xl text-[#2D6EB8]/20 font-serif">
                  &quot;
                </span>
              </p>

              {/* Speed line effect on hover */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#2D6EB8]/40 via-[#2563D6]/40 to-[#2D6EB8]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 speed-blur-animate"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
