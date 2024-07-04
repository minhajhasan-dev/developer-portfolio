import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="md:mt-5 flex justify-center items-center">
      <div className="space-y-5">
        <div className="space-y-3 flex flex-col items-center">
          <h1 className="md:text-7xl  font-semibold">Frontend Developer</h1>
          <h3 className="text-2xl text-center">
            {" "}
            &#123; JavaScript, React, MongoDB, Express, Tailwind CSS &#125;{" "}
          </h3>
          <p className="max-w-md text-lg text-center">
            Specializing in MERN Stack I leverage cutting-edge technologies to
            bring web projects to life.
          </p>
        </div>
        <div className="flex justify-center gap-5">
          <Link to={"/projects"}>
            <button className="btn btn-primary btn-sm rounded-3xl">
              See my projects
            </button>
          </Link>
          <a
            href="https://drive.usercontent.google.com/u/0/uc?id=1EQiME0vRnAkntA5uwef0CpRkUNHdrAaG&export=download"
            download={"Resume.pdf"}
          >
            <button className="border-b-2 border-primary text-sm text-primary">
              Download CV
            </button>
          </a>
        </div>
        <div className="flex justify-center pt-5">
          <img width={350} src="./3d-programmer.png" alt="programmer" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
