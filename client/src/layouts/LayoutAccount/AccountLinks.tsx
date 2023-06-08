import { NavLink } from "react-router-dom";

interface AccountLinksProps {
  classes?: string;
}

export const AccountLinks = ({ classes }: AccountLinksProps) => {
  const paths = {
    "/account": "General",
    profile: "Edit Profile",
    password: "Password",
  };

  return (
    <ul className={`w-20 flex-col gap-3 ${classes}`}>
      {Object.entries(paths).map((entry) => (
        <li key={`path: ${entry[0]}`}>
          <NavLink to={entry[0]} end>
            {entry[1]}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
