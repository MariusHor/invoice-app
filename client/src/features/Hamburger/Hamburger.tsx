import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";

import { Avatar, LinkButton, ButtonSignout } from "components";
import { useAuth, useUser } from "hooks";
import { capitalize } from "utils";

export const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: user } = useUser();
  const {
    auth: { isLoggedIn },
  } = useAuth();

  return (
    <div className="center">
      <IconButton
        id="basic-button"
        aria-controls={isOpen ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : undefined}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="z-50"
      >
        {isLoggedIn ? (
          <Avatar />
        ) : (
          <MenuRoundedIcon sx={{ fontSize: 40, color: "#7c5dfa" }} />
        )}
      </IconButton>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            key="hamburger"
            className="flex-center absolute left-0 top-0 z-10 h-full w-full flex-col gap-4 bg-skin-fill text-skin-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{
              opacity: 0,
              transition: {
                ease: "easeInOut",
                duration: 0.5,
                delay: 1.5,
              },
            }}
          >
            {isLoggedIn ? (
              <motion.li
                className="center mb-2 gap-2 font-bold"
                initial={{ top: 0, opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                exit={{
                  opacity: 0,
                  transition: {
                    ease: "easeInOut",
                    duration: 0.5,
                    delay: 1,
                  },
                }}
              >
                <Avatar />
                <span>{capitalize(user?.username ?? "")}</span>
              </motion.li>
            ) : null}
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
                to={isLoggedIn ? "/dashboard" : "login"}
                intent={"outlined-link"}
                size={"fixed"}
              >
                {isLoggedIn ? "Dashboard" : "Log In"}
              </LinkButton>
            </motion.li>
            {isLoggedIn ? (
              <motion.li
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
                exit={{
                  opacity: 0,
                  y: 90,
                  transition: {
                    ease: "easeInOut",
                    delay: 0.9,
                  },
                }}
              >
                <LinkButton
                  onClick={() => setIsOpen((isOpen) => !isOpen)}
                  to="account"
                  intent={"outlined-link"}
                  size={"fixed"}
                >
                  My Account
                </LinkButton>
              </motion.li>
            ) : null}
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
                  intent={"primary-link"}
                  size={"fixed"}
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
