import LinkButton from "components/LinkButton";

const ErrorBoundaryFallback = (): React.JSX.Element => (
  <div className="col-span-11 flex h-screen flex-col items-center justify-center gap-2">
    <h2 className="text-center">There was an error with this listing.</h2>
    <LinkButton to="/" title="Home" />
  </div>
);

export default ErrorBoundaryFallback;
