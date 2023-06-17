import { NavLink } from "react-router-dom";
import { ACCOUNT_ROUTES_PATHS } from "utils/constants";

interface AccountLinksProps {
  classes?: string;
}

export const AccountLinks = ({
  classes,
}: AccountLinksProps): React.JSX.Element => {
  return (
    <ul className={`w-20 flex-col gap-3 ${classes}`}>
      {Object.entries(ACCOUNT_ROUTES_PATHS).map((entry) => (
        <li key={`path: ${entry[0]}`}>
          <NavLink to={entry[0]} end>
            {entry[1]}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
