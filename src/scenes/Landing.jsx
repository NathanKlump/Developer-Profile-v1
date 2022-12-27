import SocialMediaIcons from "../components/SocialMediaIcons";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import nathan from "../assets/nathan.png";

const Landing = ({ setSelectedPage }) => {
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        
          <div
            className="relative z-0 ml-20 before:absolute before:-top-5 before:-left-5
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full 
            before:border-2 before:border-clay-red before:z-[-1]"
          >     
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[500px] md:max-w-[600px]"
              src={nathan}
            />
          </div>
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Nathaniel {""}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
            >
              Klump
            </span>
          </p>

          <p className="mt-10 mb-7 text-sm text-center md:text-start">
          Hardworking and determined developer with experience in service organizations. Known for a unique approach to problem-solving. 
          Familiar with web development tools such as React and Spring Boot. Familiar with object-oriented programming languages including Java. 
          Always ready to learn new developer techniques and become familiar with new languages and frameworks.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="rounded-r-sm bg-bofa-grey py-0.5 pr-0.5 pl-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-clay-red hover:text-baby-blue transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
