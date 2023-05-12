import { FC } from "react";
import moon from "assets/icon-moon.svg";

const ThemeSwitch: FC = () => {
  return (
    <button className="h-fit">
      <img src={moon} alt="switch theme" />
    </button>
  );
};

export default ThemeSwitch;
