import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { ButtonLink } from "components";
import { HOME_PATH } from "utils/constants";

export const ErrorPage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="col-span-full row-span-full flex flex-col items-center justify-center gap-4">
        <h1>An error has occured</h1>
        <p>
          <i>{error.statusText}</i>
        </p>
        <ButtonLink intent={"primary-link"} to={HOME_PATH}>
          Home
        </ButtonLink>
      </div>
    );
  }

  return (
    <div className="col-span-full col-start-2 row-span-full flex h-screen flex-col items-center justify-center gap-4">
      <h1>An error has occured</h1>
      <ButtonLink intent={"primary-link"} to={HOME_PATH}>
        Home
      </ButtonLink>
    </div>
  );
};
