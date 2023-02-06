import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";

import GpaCalculator from "../assets/GpaCalculator.png";
import PinBall from "../assets/PinBall.png";
import StarRealEstate from "../assets/StarRealEstate.png";
import PasswordInformation from "../assets/PasswordInformation.png";
import MySailSoffits from "../assets/MySail.png";
import WebPage from "../assets/WebPage.png";
import dinnerPlanner from "../assets/dinner-planner.png";
import GPTPortal from "../assets/GPTPortal.png";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Projects = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-clay-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
        The following are some examples of my work for both personal and professional projects. 
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <motion.div variants={projectVariant} className="relative">
            <div className={`${isDesktop ? "p-16" : "p-3"} overflow-scroll absolute h-full w-full opacity-0 hover:opacity-90 
              transition duration-500 bg-grey z-30 flex flex-col justify-center items-center 
              text-center text-deep-blue`}>
                <p className="text-2xl font-playfair">Dinner Planner</p>
                  <p className="mt-7">
                  This project is a full stack MERN app that records dinner ideas in a data base. Its functionality includes for adding, updating, and deleting ideas for dinner and is currently live and hosted
                  <a className="text-clay-red" target="_blank" rel="noreferrer" href="https://dinner-plans-nathan.vercel.app/">&nbsp;here.</a>
                  </p>
              </div>
                <img src={dinnerPlanner} alt="dinnerPlanner" />
            </motion.div>
            <motion.div variants={projectVariant} className="relative">
              <div className={`${isDesktop ? "p-16" : "p-3"} overflow-scroll absolute h-full w-full opacity-0 hover:opacity-90 
              transition duration-500 bg-grey z-30 flex flex-col justify-center items-center 
              text-center text-deep-blue`}>
                <p className="text-2xl font-playfair">GPA Calculator</p>
                  <p className="mt-7">
                  This project involved adding a function to retrieve the users grades directly from the Oakland University database and import the grades directly to the users gpa calculation. 
                  The code for this project can be examined
                  <a className="text-clay-red" target="_blank" rel="noreferrer" href="https://github.com/NathanKlump/gpa-calculator">&nbsp;here.</a>
                  </p>
              </div>
                <img src={GpaCalculator} alt="GPA calculator" />
            </motion.div>
            <motion.div variants={projectVariant} className="relative">
            <div className={`${isDesktop ? "p-16" : "p-3"} overflow-scroll absolute h-full w-full opacity-0 hover:opacity-90 
              transition duration-500 bg-grey z-30 flex flex-col justify-center items-center 
              text-center text-deep-blue`}>
                <p className="text-2xl font-playfair">3D Pinball Machine</p>
                  <p className="mt-7">
                  This is a pinball machine built in Unity using C#. This was my first major project in school and I believe it served as a unique learning experience as not only did it 
                  improve my experience in working as a team using a scrum workflow, 
                  but it also helped me familiarize myself with learning new development languages-a skill that I am always happy to exercise. 
                  The code for this project can be examined
                  <a className="text-clay-red" target="_blank" rel="noreferrer" href="https://github.com/NathanKlump/Sophomore-Project">&nbsp;here.</a>
                  </p>
              </div>
                <img src={PinBall} alt="PinBall" />
            </motion.div>

          {/* ROW 2 */}
          <motion.div variants={projectVariant} className="relative">
          <div className={`${isDesktop ? "p-16" : "p-3"} overflow-scroll absolute h-full w-full opacity-0 hover:opacity-90 
              transition duration-500 bg-grey z-30 flex flex-col justify-center items-center 
              text-center text-deep-blue`}>
                <p className="text-2xl font-playfair">Password Information Portal</p>
                  <p className="mt-7">
                  Tasked with creating a portal to display the number of days since a user had changed their 
                  password to the Oakland University MySail website. Created a React application with a Spring backend and CAS server authentication. 
                  The code for this project can be examined
                  <a className="text-clay-red" target="_blank" rel="noreferrer" href="https://github.com/NathanKlump/password-information">&nbsp;here.</a>
                  </p>
              </div>
                <img src={PasswordInformation} alt="PasswordInformation" />
            </motion.div>
            <motion.div variants={projectVariant} className="relative">
            <div className={`${isDesktop ? "p-16" : "p-3"} overflow-scroll absolute h-full w-full opacity-0 hover:opacity-90 
              transition duration-500 bg-grey z-30 flex flex-col justify-center items-center 
              text-center text-deep-blue`}>
                <p className="text-2xl font-playfair">MySail Soffits</p>
                  <p className="mt-7">
                  Tasked with creating the react apps to be rendered in the Oakland University home page MySail. 
                  These apps hold links to the various services and programs the University offers.
                  The webpage where these projects live can be found
                  <a className="text-clay-red" target="_blank" rel="noreferrer" href="https://mysail.oakland.edu/uPortal/f/welcome/normal/render.uP">&nbsp;here.</a>
                  </p>
              </div>
                <img src={MySailSoffits} alt="MySailSoffits" />
            </motion.div>
            <motion.div variants={projectVariant} className="relative">
            <div className={`${isDesktop ? "p-16" : "p-3"} overflow-scroll absolute h-full w-full opacity-0 hover:opacity-90 
              transition duration-500 bg-grey z-30 flex flex-col justify-center items-center 
              text-center text-deep-blue`}>
                <p className="text-2xl font-playfair">Profile Page</p>
                  <p className="mt-7">
                  I have decided to test my web development skills by creating a personalized website in react using Tailwind CSS and framer Motion. 
                  This website will list my projects and I plan on updating it frequently.
                  The code for this project can be examined
                  <a className="text-clay-red" target="_blank" rel="noreferrer" href="https://github.com/NathanKlump/Portfolio-Website">&nbsp;here.</a>
                  </p>
              </div>
                <img src={WebPage} alt="WebPage" />
            </motion.div>
          {/* ROW 3 */}
          <motion.div variants={projectVariant} className="relative">
            <div className={`${isDesktop ? "p-16" : "p-3"} overflow-scroll absolute h-full w-full opacity-0 hover:opacity-90 
              transition duration-500 bg-grey z-30 flex flex-col justify-center items-center 
              text-center text-deep-blue`}>
                <p className="text-2xl font-playfair">Real Estate Comparison Tool</p>
                  <p className="mt-7">
                  The All Star Real Estate Comparison tool was designed to compare two or more houses on the market based on size, bedrooms, price per square foot ect. 
                  I utilized Rapid.api to scrape information from Zillow to use for the comparison. 
                  </p>
              </div>
                <img src={StarRealEstate} alt="StarRealEstate" />
            </motion.div>
            <motion.div variants={projectVariant} className="relative">
            <div className={`${isDesktop ? "p-16" : "p-3"} overflow-scroll absolute h-full w-full opacity-0 hover:opacity-90 
              transition duration-500 bg-grey z-30 flex flex-col justify-center items-center 
              text-center text-deep-blue`}>
                <p className="text-2xl font-playfair">Personal GPT-3 API Access</p>
                  <p className="mt-7">
                  I created this tool to hit the OpenAi API to bypass security included in the chatGPT product. This url can also be accessed from every browser and also on
                  mobile devices or virtual machines without an account or sign in. This tool can be accessed 
                  <a className="text-clay-red" target="_blank" rel="noreferrer" href="https://personal-ai-access.vercel.app/">&nbsp;here.</a>
                  </p>
              </div>
                <img src={GPTPortal} alt="GPTPortal" />
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
