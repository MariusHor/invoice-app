import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { ButtonLink } from "components";
import { HOME_PATH } from "utils/constants";
import fallbackImg from "assets/illustration-empty.svg";

export const Errors = (): React.JSX.Element => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="col-span-full row-span-full flex flex-col items-center justify-center gap-4">
        <h1>An unexpected error has occured</h1>
        <p>
          <i>{error.statusText}</i>
        </p>
        <ButtonLink intent={"primary-link"} to={HOME_PATH}>
          Go to homepage
        </ButtonLink>
      </div>
    );
  }

  return (
    <div className="col-span-full col-start-2 row-span-full flex h-screen flex-col items-center justify-center gap-4">
      <img src={fallbackImg} alt="error fallback" />
      <h1>An unexpected error has occured</h1>
      <ButtonLink intent={"primary-link"} to={HOME_PATH}>
        Go to homepage
      </ButtonLink>
    </div>
  );
};
