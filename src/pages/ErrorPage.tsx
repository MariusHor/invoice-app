import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { LinkCustom } from "components";

export const ErrorPage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="col-span-full row-span-full flex flex-col items-center justify-center gap-4">
        <h1>An error has occured</h1>
        <p>
          <i>{error.statusText}</i>
        </p>
        <LinkCustom to="/" title="Home" />
      </div>
    );
  } else {
    return (
      <div className="col-span-full col-start-2 row-span-full flex flex-col items-center justify-center gap-4">
        <h1>An error has occured</h1>
        <LinkCustom to="/" title="Home" />
      </div>
    );
  }
};
