import React from "react";
// countup
import CountUp from "react-countup";
// intersection-observer
import { InView, useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inViev] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about">
      <div className="container mx-auto">
        <div className="flex min-h-screen flex-col gap-y-4 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0">
          {/* image */}
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="min-h-[350px] flex-1 bg-about bg-contain bg-top bg-no-repeat mix-blend-lighten lg:h-[640px]"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
              I'm Freelance Front-end Developer with over 5 year of exprience.
            </h3>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              nisi aperiam eveniet, corporis aut iusto.
            </p>
            {/* stats */}
            <div className="mb-12 flex gap-x-6 lg:gap-x-10">
              <article>
                <div className="text-gradient mb-2 font-tertiary text-[30px] lg:text-[40px]">
                  {InView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br /> Exprience
                </div>
              </article>
              <article>
                <div className="text-gradient mb-2 font-tertiary text-[30px] lg:text-[40px]">
                  {InView ? <CountUp start={0} end={15} duration={3} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br /> Completed
                </div>
              </article>
              <article>
                <div className="text-gradient mb-2 font-tertiary text-[30px] lg:text-[40px]">
                  {InView ? <CountUp start={0} end={12} duration={3} /> : null}{" "}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br /> Clients
                </div>
              </article>
            </div>
            {/* stats end */}
            <div className="flex items-center gap-x-8">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
