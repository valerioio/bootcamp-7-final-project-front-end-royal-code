import React from "react";
import { Flex, Link, Text } from "@chakra-ui/react";

const NavBar = ({ children }) => {
  return (
    <Flex>
      <Flex
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
          <Link href="/bootcamp8">
            <Text display="block">Bootcamp 8</Text>
          </Link>
          <Link href="/bootcamp9">
            <Text display="block">Bootcamp 9</Text>
          </Link>
          <Link href="/bootcamp10">
            <Text display="block">Bootcamp 10</Text>
          </Link>
          <Link href="/curriculum">
            <Text display="block">Curriculum</Text>
          </Link>
          <Link href="/energisers">
            <Text display="block">Energiser list</Text>
          </Link>
        </Flex>
      </Flex>
      <Flex
      direction='column'>{children}</Flex>
    </Flex>
  );
};

export default NavBar;