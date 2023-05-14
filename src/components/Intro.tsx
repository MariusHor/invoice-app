import fallbackImg from "assets/illustration-empty.svg";
import LinkButton from "./LinkButton";

const Intro = (): React.JSX.Element => {
  return (
    <div className="-none mx-auto my-8 flex h-full w-fit grow flex-col items-center justify-center gap-3 text-center lg:col-span-11 lg:col-start-2 lg:row-span-5 lg:row-start-1 lg:my-0">
      <img src={fallbackImg} alt="list is empty" />
      <h1 className="heading-md mt-2">Welcome</h1>
      <p className="paragraph-secondary mx-auto mt-2 max-w-42 text-center">
        You can use this app to store your invoices. Give it a try!
      </p>
      <LinkButton to="/invoices" title="Invoices" />
    </div>
  );
};

export default Intro;
