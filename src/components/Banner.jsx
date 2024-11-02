import { Glow } from "@codaworks/react-glow";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Banner = () => {
  const handleDownload = () => {
    toast.success("Downloading CV...");
  };
  return (
    <div className="md:mt-5 flex justify-center items-center">
      <Glow color="hsl(338.69 100% 48.04%)">
        <div className="space-y-5">
          <div className="space-y-3  flex flex-col items-center">
            <div>
              <h1 className="lg:text-7xl md:text-5xl text-3xl pt-3 md:pt-0 glowable-text font-semibold">
                Frontend Developer
              </h1>
            </div>

            <h3 className="md:text-2xl text-sm font-semibold text-center">
              {" "}
              &#123; JavaScript, React, MongoDB, Express, Tailwind CSS &#125;{" "}
            </h3>
            <p className="max-w-md p-4 md:p-0 md:text-lg text-center">
              Specializing in MERN Stack I leverage cutting-edge technologies to
              bring web projects to life.
            </p>
          </div>{" "}
          <div className="flex justify-center gap-5">
            <Link to={"/projects"}>
              <button className="btn button-glow btn-primary btn-sm rounded-3xl">
                See my projects
              </button>
            </Link>
            <a
              href="https://drive.usercontent.google.com/download?id=1GLb33j1M7sOtm68VyYpGnHdzQQRFrpQJ&export=download"
              download={"Resume.pdf"}
            >
              <button
                onClick={handleDownload}
                className="border-b-2 border-primary text-sm text-primary "
              >
                Download Resume
              </button>
            </a>
          </div>
          <div className="flex  justify-center pt-5">
            <img
              className="w-40 md:w-80"
              src="./3d-programmer.png"
              alt="programmer"
            />
          </div>
        </div>
      </Glow>
    </div>
  );
};

export default Banner;
