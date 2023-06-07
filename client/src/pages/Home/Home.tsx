import { useOutletContext } from "react-router-dom";
import { LinkButton } from "components";

export const Home = (): React.JSX.Element => {
  const { isLoggedIn } = useOutletContext<{ isLoggedIn: boolean }>();

  return (
    <div className="flex grow flex-col items-center justify-center gap-3 text-center">
      <h1 className="text-4xl font-bold text-skin-base sm:text-5xl md:text-6xl lg:text-8xl">
        Create<span className="text-skin-accent">.</span>Store
        <span className="text-skin-accent">.</span>Edit
        <span className="text-skin-accent">.</span>
      </h1>
      <p className="leading- max-w-sm text-base text-skin-muted md:max-w-lg md:text-lg lg:max-w-2xl lg:text-xl">
        Simplify your invoicing journey, effortlessly store and manage your
        Invoices and take control of your finances with{" "}
        <span className="text-lg font-bold text-skin-accent md:text-xl lg:text-3xl">
          Paperless
        </span>
        .
      </p>
      <LinkButton
        to={isLoggedIn ? "dashboard" : "demo"}
        intent={"primary-link"}
      >
        {isLoggedIn ? "Dashboard" : "Try a Demo"}
      </LinkButton>
    </div>
  );
};
