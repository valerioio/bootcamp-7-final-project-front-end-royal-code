import React from "react";
import { Flex, Link, Text } from "@chakra-ui/react";
import css from "./NavBar.module.css";
import logo from "../../socLogo.png";
import { v4 as uuidv4 } from "uuid";
import LogoutButton from "../LogoutButton";

const navbarLinksCoaches = [
  { linkText: "Dashboard", href: "/home" },
  // { linkText: "Curriculum", href: "/curriculum" },
  { linkText: "Energiser list", href: "/energisers" },
];
const navbarLinksBootcampers = [
  { linkText: "Dashboard", href: "/home" },
  { linkText: "Journey", href: "/journey" },
  // { linkText: "Reading List", href: "/reading" },
  // { linkText: "Recordings", href: "/recordings" },
];

const NavBar = ({ email }) => {
  return (
    <Flex>
      <Flex
        className={css.navbar}
        as="nav"
        direction="column"
        align="center"
        wrap="wrap"
        w="10em"
        h="100vh"
        p={3}
        bg="#005b4f"
        color="white"
      >
        <img
          src={logo}
          alt="logo"
        />
        <Flex
          as="nav"
          direction="column"
          align="center"
          justify="space-around"
          wrap="wrap"
          w="100%"
          mt="30%"
        >
          {(email === "bootcamper@schoolofcode.co.uk"
            ? navbarLinksBootcampers
            : email === "coach@schoolofcode.co.uk"
            ? navbarLinksCoaches
            : [{ linkText: "Dashboard", href: "/home" }]
          ).map((link) => {
            return (
              <Link
                key={uuidv4()}
                href={link.href}
                style={{ margin: "1.5em 0" }}
              >
                <Text display="block">{link.linkText}</Text>
              </Link>
            );
          })}
        </Flex>
        <LogoutButton />
      </Flex>
    </Flex>
  );
};

export default NavBar;
