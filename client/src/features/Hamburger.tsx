import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import { NavLinks } from "components";

export const Hamburger = () => {
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
            padding: 30,
            width: "15rem",
          },
        }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
          },
        }}
      >
        <NavLinks handleClose={handleClose} />
      </Menu>
    </div>
  );
};
