import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-28 bg-clay-red pt-10">
      <div className="w-10/12 mx-auto">
        <div className="md:flex justify-center md:justify-between text-center ">
          <p>
            Created By Nathaniel Klump,
          </p>
          <p>nathanieljklump@gmail.com</p>
          <p>(810)-280-5977</p>
        </div>
        <p>The code for this website is available 
          <a className="text-baby-blue" href="https://github.com/NathanKlump">&nbsp;here.</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
