import { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { motion, AnimatePresence } from "framer-motion";

import { LinkButton } from "components";

export const Hamburger = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const item = {
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
        delay: 1,
      },
    },
  };

  return (
    <div className="center">
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={() => setOpen(!open)}
        className="z-50"
      >
        <MenuRoundedIcon sx={{ fontSize: 40, color: "#7c5dfa" }} />
      </Button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="flex-center absolute left-0 top-0 z-10 h-full w-full flex-col gap-4 bg-skin-fill text-skin-base"
            variants={item}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            transition={{ duration: 0.8 }}
            exit="exit"
          >
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 1,
                },
              }}
            >
              <LinkButton
                onClick={() => setOpen(!open)}
                to={pathname === "/" ? "login" : "/"}
                intent={"outlined"}
                size={"fixed"}
                className="hover:text-skin-grey"
              >
                {pathname === "/" ? "Log In" : "Home"}
              </LinkButton>
            </motion.div>
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.8,
                },
              }}
            >
              <LinkButton
                onClick={() => setOpen(!open)}
                to={pathname === "/register" ? "login" : "register"}
                intent={"primary"}
                size={"fixed"}
                className="hover:bg-skin-btn-primary-hover"
              >
                {pathname === "/register" ? "Log in" : "Register"}
              </LinkButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
