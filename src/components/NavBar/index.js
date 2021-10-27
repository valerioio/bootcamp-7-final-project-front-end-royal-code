import React from "react";
import { Flex, Link, Text } from "@chakra-ui/react";
import css from "./NavBar.module.css";
import { v4 as uuidv4 } from "uuid";

const NavBar = ({ navbarLinks }) => {
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
        bg="#31986a"
        color="white"
      >
        <img
          src="https://d33wubrfki0l68.cloudfront.net/e6fddcbea146f91d2f3c160f7d56a9391a4740b0/4e758/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png"
          alt=""
        />
        <Flex
          as="nav"
          direction="column"
          align="center"
          justify="space-around"
          wrap="wrap"
          w="100%"
          h="50%"
          mt="30%"
        >
          {navbarLinks.map((link) => {
            return (
              <Link key={uuidv4()} href={link.href}>
                <Text display="block">{link.linkText}</Text>
              </Link>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NavBar;
