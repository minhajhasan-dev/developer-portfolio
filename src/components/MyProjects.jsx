import { useEffect, useState } from "react";
import MyLoader from "./MyLoader";

const MyProjects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setTimeout(() => setIsLoading(false), 1000);
      });
  }, []);

  return (
    <div className="mt-8 grid gap-10 lg:grid-cols-3 md:grid-cols-2  grid-cols-1">
      {projects.map((project, index) => (
        <div key={index} className="space-y-3">
          {isLoading ? (
            <MyLoader />
          ) : (
            <div className="card bg-base-100 w-80 shadow-xl">
              <figure className="px-3">
                <img
                  className="rounded-t-lg"
                  src={project.image}
                  alt={project.project_name}
                />
              </figure>
              <div className="card-body">
                <div className="flex flex-wrap gap-2">
                  {project.technologies_used.map((tech, index) => (
                    <span
                      key={index}
                      className="badge badge-mern  badge-sm p-2 badge-outline "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <h2 className="card-title">{project.project_name}</h2>
                <p className="text-sm text-ellipsis">
                  {project.description.slice(0, 100) + "..."}
                </p>
                <div className="card-actions flex gap-5 justify-start">
                  <a
                    href={project.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" btn btn-outline btn-xs button-glow btn-primary  rounded-3xl"
                  >
                    See live
                  </a>
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b-2 border-primary text-sm text-primary"
                  >
                    See on Github
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MyProjects;
