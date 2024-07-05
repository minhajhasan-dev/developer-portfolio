import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer footer-center flex justify-between  text-base-content p-4">
      <aside>
        <p>
          Copyright © ${new Date().getFullYear()} - All right reserved by{" "}
          <a
            className="text-blue-400"
            target="_blank"
            href="https://www.facebook.com/minhajhasan117"
          >
            Minhajul Hasan
          </a>
        </p>
      </aside>
      <div>
        <div className="flex gap-2">
          <a href="https://github.com/minhajhasan-dev" target="_blank">
            <IoLogoGithub
              className="size-7 rounded-full button-glow"
              title="Github"
            />{" "}
          </a>
          <a href="https://www.linkedin.com/in/minhajul-hasan" target="_blank">
            <FaLinkedin
              className="size-7 rounded  button-glow"
              title="Linkedin"
            />
          </a>
          <a href="https://twitter.com/minhajhasan_dev" target="_blank">
            <FaSquareXTwitter
              className="size-7  rounded button-glow"
              title="Twitter"
            />{" "}
          </a>
          <a href="https://www.facebook.com/minhajhasan117" target="_blank">
            <FaFacebook
              className="size-7  rounded-full button-glow"
              title="Facebook"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
