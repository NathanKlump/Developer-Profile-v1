import GitHubLogo from "../assets/GitHubLogo.png";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/nathaniel-klump-325190229/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/NathanKlump"
        target="_blank"
        rel="noreferrer"
      >
        <img className="rounded" alt="github-link" src={GitHubLogo} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
