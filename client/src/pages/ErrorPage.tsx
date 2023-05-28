import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { LinkButton } from "components";

export const ErrorPage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="col-span-full row-span-full flex flex-col items-center justify-center gap-4">
        <h1>An error has occured</h1>
        <p>
          <i>{error.statusText}</i>
        </p>
        <LinkButton to="/">Home</LinkButton>
      </div>
    );
  }

  return (
    <div className="col-span-full col-start-2 row-span-full flex flex-col items-center justify-center gap-4">
      <h1>An error has occured</h1>
      <LinkButton to="/">Home</LinkButton>
    </div>
  );
};
