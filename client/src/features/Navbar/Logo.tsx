import logo from "assets/logo.svg";

interface LogoProps {
  intent: string | null | undefined;
}

export const Logo = ({ intent }: LogoProps): React.JSX.Element => {
  return (
    <div
      className={`relative grid h-full w-18 place-items-center overflow-hidden rounded-r-3xl bg-primary-600 ${
        intent === "private" ? "lg:h-20 lg:w-full" : ""
      }`}
    >
      <div className="h-full w-full"></div>
      <div className="h-full w-full rounded-tl-3xl bg-primary-400"></div>
      <img
        src={logo}
        alt="invoice app logo"
        className="transition-primary absolute h-7 w-7 hover:rotate-45"
      />
    </div>
  );
};
