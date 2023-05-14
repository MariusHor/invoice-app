import moon from "assets/icon-moon.svg";

const ThemeSwitch = (): React.JSX.Element => {
  return (
    <button className="h-fit">
      <img
        src={moon}
        alt="switch theme"
        className="transition-primary hover:-rotate-45"
      />
    </button>
  );
};

export default ThemeSwitch;
