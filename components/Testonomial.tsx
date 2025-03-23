import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Testonomial() {
  const testimonials = [
    {
      quote:
        "Excellent service! The wall panels look stunning, and the installation was quick and hassle-free. Definitely worth it!",
      name: "Sonu Sharma",
      designation: "Wallpanel installation",
      src: "/Person/Man3.png",
    },
    {
      quote:
        "Great quality wallpaper and excellent installation service! My walls look stunning, and the entire process was smooth and hassle-free.",
      name: "Sudhir Kumar Singh",
      designation: "Wallpaper service",
      src: "/Person/Man4.jpg",
    },
    {
      quote:
        "Fantastic work! The false ceiling looks stunning, and the installation was smooth. It has added a classy touch to my home. Highly recommended!",
      name: "Prashant Pandey",
      designation: "False-celling installation",
      src: "/Person/Man1.jpg",
    },
    {
      quote:
        "Obsessed with my new floors! 😍 The design, texture, and finish are just perfect. My home feels fresh and stylish now. Big thanks to the team for their amazing work!.",
      name: "Ajit Kumar",
      designation: "Flooring service",
      src: "/Person/Man2.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
