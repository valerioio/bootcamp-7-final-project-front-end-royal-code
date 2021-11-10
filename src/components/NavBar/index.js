import React from "react";
import { Flex, Link, Text, Spacer } from "@chakra-ui/react";
import css from "./NavBar.module.css";
import logo from "../../socLogo.png";
import { v4 as uuidv4 } from "uuid";
import LogoutButton from "../LogoutButton";
// import TimelineIcon from "@material-ui/icons/Timeline";
import {
  MdWindow,
  MdTimeline,
  MdOutlineWbSunny,
  MdBook,
  MdCameraRoll,
  MdPeopleOutline,
} from "react-icons/md";

const navbarLinksCoaches = [
  { linkText: "Dashboard", href: "/home", icon: <MdWindow /> },
  // { linkText: "Curriculum", href: "/curriculum", icon: null},
  {
    linkText: "Energiser list",
    href: "/energisers",
    icon: <MdOutlineWbSunny />,
  },
  {
    linkText: "Cohorts",
    href: "/cohorts",
    icon: <MdPeopleOutline />,
  },
];
const navbarLinksBootcampers = [
  { linkText: "Dashboard", href: "/home", icon: <MdWindow /> },
  { linkText: "Journey", href: "/journey", icon: <MdTimeline /> },
  { linkText: "Reading List", href: "/reading-list", icon: <MdBook /> },
  {
    linkText: "Lecture Recordings",
    href: "/lecture-recordings",
    icon: <MdCameraRoll />,
  },
];

const NavBar = ({ email, currentPage }) => {
  return (
    <Flex>
      <Flex
        className={css.navbar}
        as="nav"
        direction="column"
        align="center"
        wrap="wrap"
        w="15em"
        h="100vh"
      >
        <br />
        <img src={logo} alt="logo" width="50%" />
        <Flex
          as="nav"
          direction="column"
          align="center"
          justify="space-around"
          wrap="wrap"
          w="100%"
          mt="10%"
        >
          {(email === "bootcamper@schoolofcode.co.uk" ||
          email === "emanuel@email.com"
            ? navbarLinksBootcampers
            : email === "coach@schoolofcode.co.uk" ||
              email === "christina@schoolofcode.co.uk"
            ? navbarLinksCoaches
            : [{ linkText: "Dashboard", href: "/home" }]
          ).map((link) => {
            return (
              <Link
                key={uuidv4()}
                href={link.href}
                className={
                  link.href === currentPage
                    ? `${css.link} ${css.selected}`
                    : css.link
                }
              >
                <div className={css.icon}>{link.icon}</div>
                <Text pt="0.25em" display="block">
                  {link.linkText}
                </Text>
              </Link>
            );
          })}
        </Flex>
        <Spacer />
        <div className={css.link}>
          <LogoutButton />
        </div>
      </Flex>
    </Flex>
  );
};

export default NavBar;
