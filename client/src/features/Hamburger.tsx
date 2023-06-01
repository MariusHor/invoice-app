import { LinkButton } from "components";
import { useState } from "react";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useLocation } from "react-router-dom";

export const Hamburger = () => {
  const { pathname } = useLocation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="center">
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuRoundedIcon sx={{ fontSize: 40, color: "#7c5dfa" }} />
      </Button>
      <Menu
        PaperProps={{
          style: {
            padding: 20,
            width: "20rem",
          },
        }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <LinkButton
          onClick={handleClose}
          to={pathname === "/" ? "login" : "/"}
          intent={"outlined"}
          className="mb-4 hover:text-skin-grey"
        >
          {pathname === "/" ? "Log In" : "Home"}
        </LinkButton>

        <LinkButton
          onClick={handleClose}
          to={pathname === "/register" ? "login" : "register"}
          intent={"primary"}
          className="hover:bg-skin-btn-primary-hover"
        >
          {pathname === "/register" ? "Log in" : "Register"}
        </LinkButton>
      </Menu>
    </div>
  );
};
