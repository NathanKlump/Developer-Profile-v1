import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-clay-red">SKILLSET</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
          I believe that my code and I can always be improved. I am constantly searching for ways to improve as a developer and as a person. 
          I am enthusiastic about learning new languages and acquiring new skills throughout my professional career. 
          I believe it is important to stay curious about development as it is a constantly evolving field. 
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-clay-red before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Spring Backend Development
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-baby-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          My employment at the Oakland University UTS department provided me with 
          plentiful experience both creating, modifying, and improving the backends and APIs 
          for Oakland Universities numerous applications and websites.
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                React Frontend Development
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-clay-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          Although I am always eager to learn new libraries and frameworks, my primary experience with frontend web development is through the React.js library. 
          I have used this library for professional projects through my employment, in school projects, and personal projects.
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Git Workflow
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-baby-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          I am familiar with enterprise level Git workflow through my employment at the Oakland University UTS department. 
          I also recently started displaying some of my projects through a github account on my personal email, which can be accessed 
          <a className="text-clay-red" href="https://github.com/NathanKlump">&nbsp;here.</a>

          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
