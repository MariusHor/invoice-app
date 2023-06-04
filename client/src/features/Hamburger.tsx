import { useState } from "react";
import Button from "@mui/material/Button";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { motion, AnimatePresence } from "framer-motion";

import { LinkButton } from "components";
import { useAuth } from "hooks";
import { ButtonSignout } from "components/Button/ButtonSignout";

export const Hamburger = () => {
  const { auth } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = "isLoggedIn" in auth && auth.isLoggedIn;

  return (
    <div className="center">
      <Button
        id="basic-button"
        aria-controls={isOpen ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : undefined}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="z-50"
      >
        <MenuRoundedIcon sx={{ fontSize: 40, color: "#7c5dfa" }} />
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            key="hamburger"
            className="flex-center absolute left-0 top-0 z-10 h-full w-full flex-col gap-4 bg-skin-fill text-skin-base"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            transition={{ duration: 0.8 }}
            exit={{
              opacity: 0,
              transition: {
                ease: "easeInOut",
                duration: 0.5,
                delay: 1,
              },
            }}
          >
            <motion.li
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
                onClick={() => setIsOpen((isOpen) => !isOpen)}
                to={isLoggedIn ? "dashboard" : "login"}
                intent={"outlined"}
                size={"fixed"}
                className="hover:text-skin-grey"
              >
                {isLoggedIn ? "Dashboard" : "Log In"}
              </LinkButton>
            </motion.li>
            <motion.li
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
              {isLoggedIn ? (
                <ButtonSignout
                  signoutCallback={() => setIsOpen((isOpen) => !isOpen)}
                />
              ) : (
                <LinkButton
                  onClick={() => setIsOpen((isOpen) => !isOpen)}
                  to={"register"}
                  intent={"primary"}
                  size={"fixed"}
                  className="hover:bg-skin-btn-primary-hover"
                >
                  Register
                </LinkButton>
              )}
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
