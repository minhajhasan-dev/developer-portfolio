const Footer = () => {
  return (
    <footer className="footer footer-center  text-base-content p-4">
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
    </footer>
  );
};

export default Footer;
