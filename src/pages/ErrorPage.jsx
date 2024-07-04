import { NavLink } from "react-router-dom";
import ThemeController from "../components/ThemeController";

const ErrorPage = () => {
  return (
    <div
      data-theme={ThemeController.theme || "dark"}
      className="flex h-screen items-center justify-center text-2xl"
    >
      <p>
        You are in the wrong place, please go{" "}
        <NavLink className={"text-blue-400"} to={"/"}>
          back!
        </NavLink>
      </p>
    </div>
  );
};

export default ErrorPage;
