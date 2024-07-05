import { Glow } from "@codaworks/react-glow";
import MyProjects from "../components/MyProjects";

const Projects = () => {
  return (
    <div className="min-h-screen-custom flex justify-center items-center ">
      <Glow color="hsl(338.69 100% 48.04%)">
        <div className="space-y-5">
          <div className="space-y-3 flex flex-col items-center">
            <div className=" glowable-text">
              <h1 className="md:text-5xl  font-semibold">
                My &#123; Dev &#125; Projects
              </h1>
            </div>

            <h3 className="text-base font-semibold text-center">
              Here are some of the projects I have worked on.{" "}
            </h3>
          </div>{" "}
        </div>
        {/* Project Showcase Here */}
        <div className="flex justify-center my-5">
          <MyProjects/>
        </div>
      </Glow>
    </div>
  );
};

export default Projects;
