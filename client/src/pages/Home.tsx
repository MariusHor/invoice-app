import { LinkButton } from "components";

export const Home = (): React.JSX.Element => {
  return (
    <div className="flex grow flex-col items-center justify-center gap-3 text-center lg:col-span-11 lg:col-start-2 lg:row-span-5 lg:row-start-1">
      <h1 className="text-8xl font-bold text-skin-base">
        Create<span className="text-skin-accent">.</span>Store
        <span className="text-skin-accent">.</span>Edit
        <span className="text-skin-accent">.</span>
      </h1>
      <p className="max-w-3xl text-xl text-skin-muted">
        Simplify Your Invoicing Journey, Effortlessly Store and Manage Invoices
        for Individuals and Small Businesses, and Take Control of Your Finances
        with Ease.
      </p>
      <LinkButton to="invoices" className="hover:bg-skin-btn-primary-hover">
        Try a Demo
      </LinkButton>
    </div>
  );
};
