import React from "react";
// icon
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// services data
const services = [
  {
    name: "UI/UX Design",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam hic nobis magni quam rem ",
    link: "Learn More",
  },
  {
    name: "Development",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam hic nobis magni quam rem nihil a?",
    link: "Learn More",
  },
  {
    name: "Digital Marketing",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam hic nobis magni quam ",
    link: "Learn More",
  },
  {
    name: "Product Branding",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam hic nobis magni q",
    link: "Learn More",
  },
];

const Services = () => {
  return (
    <div className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="mb-12 flex-1 bg-no-repeat mix-blend-lighten lg:mb-0 lg:bg-services lg:bg-bottom"
          >
            <h2 className="h2 mb-6 text-accent">What I Do.</h2>
            <h3 className="h3 mb-16 max-w-[455px]">
              I'm Freelance Front-end Developer with over 5 year of exprience.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          {/* services*/}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* services list*/}
            <div>
              {services.map((servise, index) => {
                const { name, description, link } = servise;
                return (
                  <div
                    key={index}
                    className=" mb-[38px] flex border-b border-white/20"
                  >
                    <div className="max-w-[476px]">
                      <h4 className="mb-3 font-primary text-[20px] font-semibold tracking-wider">
                        {name}
                      </h4>
                      <p className="pr-4 font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="mb-3 flex flex-1 flex-col items-end">
                      <a
                        href="#"
                        className="btn mb-[30px] flex h-9 w-9 items-center justify-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
