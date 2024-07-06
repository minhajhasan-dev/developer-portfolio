import { Glow } from "@codaworks/react-glow";
import { BiLogoJavascript } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";
import { LiaReact } from "react-icons/lia";
import { RiNodejsLine } from "react-icons/ri";
import { SiCss3, SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <div className="min-h-screen-custom flex justify-center items-center ">
      <Glow color="hsl(338.69 100% 48.04%)">
        <div className="space-y-5">
          <div className="space-y-3 flex flex-col items-center">
            <div className=" glowable-text">
              <h1 className="md:text-5xl text-3xl  font-semibold">
                My &#123; Development &#125; Skills
              </h1>
            </div>

            <h3 className="md:text-base text-sm font-semibold text-center">
              As a MERN stack developer, I have gained the following skills.
            </h3>
          </div>{" "}
        </div>
        {/* skills grid here */}
        <div className="pt-16 gap-10 p-5 grid md:grid-cols-4 grid-cols-1 lg:max-w-5xl max-w-3xl mx-auto">
          <div className="flex flex-col space-y-2">
            <BiLogoJavascript className="size-14" />

            <div className="flex flex-col items-start">
              <h3 className="text-lg font-semibold text-center">JavaScript</h3>
              <p className="text-sm font-semibold">
                Strong JS fundamentals, ES6+ features, and modern JS concepts.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <SiTailwindcss className="size-14" />

            <div className="flex flex-col items-start">
              <h3 className="text-lg font-semibold text-center">TailwindCSS</h3>
              <p className="text-sm font-semibold">
                Proficient in TailwindCSS, a utility-first CSS framework.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <LiaReact className="size-14" />

            <div className="flex flex-col items-start">
              <h3 className="text-lg font-semibold text-center">React</h3>
              <p className="text-sm font-semibold">
                Building fast and efficient React Apps and websites.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <FaGitAlt className="size-14 " />

            <div className="flex flex-col items-start">
              <h3 className="text-lg font-semibold text-center">Git</h3>
              <p className="text-sm font-semibold">
                DevOps tools for streamlined source code management.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <SiCss3 className="size-14 " />
            <div className="flex flex-col items-start">
              <h3 className="text-lg font-semibold text-center">CSS</h3>
              <p className="text-sm font-semibold">
                Proficient in CSS, and modern CSS frameworks.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <SiMongodb className="size-14 " />
            <div className="flex flex-col items-start">
              <h3 className="text-lg font-semibold text-center">MongoDB</h3>
              <p className="text-sm font-semibold">
                Using MongoDB for scalable databases on the backend.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <SiExpress className="size-14 " />
            <div className="flex flex-col items-start">
              <h3 className="text-lg font-semibold text-center">ExpressJS</h3>
              <p className="text-sm font-semibold">
                Building robust backend APIs using ExpressJS.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <RiNodejsLine className="size-14 " />
            <div className="flex flex-col items-start">
              <h3 className="text-lg font-semibold text-center">NodeJS</h3>
              <p className="text-sm font-semibold">
                Building scalable backend applications using NodeJS.
              </p>
            </div>
          </div>
        </div>
      </Glow>
    </div>
  );
};

export default Skills;
