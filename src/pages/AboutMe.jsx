import { Glow } from "@codaworks/react-glow";
import { FaLayerGroup } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className="min-h-screen-custom flex justify-center items-center ">
      <Glow color="hsl(338.69 100% 48.04%)">
        <div className="space-y-5">
          <div className="space-y-3 flex flex-col items-center">
            <div className=" glowable-text">
              <h1 className="md:text-5xl  font-semibold">
                Problem solver &lt;coder&gt;
              </h1>
            </div>

            <h3 className="text-base font-semibold text-center">
              Frontend Developer with over 1 year of experience
            </h3>
          </div>{" "}
          {/* image with information of mine */}
          <div className="mt-3 md:flex gap-2 items-center md:max-w-5xl ">
            <div className="flex-1 space-y-5">
              <div>
                <FaLayerGroup className="text-xl"/>
                <h3 className="text-lg ">
                  {" "}
                  <span className="font-semibold">
                    Diploma in Engineering.
                  </span>{" "}
                  Graduated from Faridpur Polytechnic Institute as an Electrical
                  Engineer.
                </h3>
              </div>
              <div>
                <FaLayerGroup className="text-xl"/>
                <h3 className="text-lg ">
                  {" "}
                  <span className="font-semibold">
                    Complete Web Development Course.
                  </span>{" "}
                  Graduated from Programming Hero as a Complete Web Developer.
                </h3>
              </div>
              <div>
                <FaLayerGroup className="text-xl"/>
                <h3 className="text-lg ">
                  {" "}
                  <span className="font-semibold">
                    Specializing in MERN Stack.
                  </span>{" "}
                  I am constantly working on learning new technologies &
                  following industry trends.
                </h3>
              </div>
              <div>
                <FaLayerGroup className="text-xl"/>
                <h3 className="text-lg ">
                  {" "}
                  <span className="font-semibold">Love working in team.</span> I
                  enjoy working in a team environment, but I can also work
                  independently.
                </h3>
              </div>
            </div>
            <img
              className="rounded-full"
              src="./minhaj.png"
              alt="Minhajul Hasan"
            />
          </div>
        </div>
      </Glow>
    </div>
  );
};

export default AboutMe;
