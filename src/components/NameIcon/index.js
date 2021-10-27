import { Avatar, Box, Flex, Spacer, Text } from "@chakra-ui/react";
import LogoutButton from "../LogoutButton";
import css from "./NameIcon.module.css";

const NameIcon = ({ name }) => {
  if (name) name = name.replace(/./, (match) => match.toUpperCase());
  return (
    <>
      <Flex>
        <Spacer />
        <LogoutButton />
        <Box
          className={`${css.shadow} ${css.center}`}
          borderRadius="md"
          bg="#31986a"
          color="white"
          w="fit-content"
          p="0.5em"
          h="3em"
          m="1vw"
        >
          <Flex justify="space-around" align="center">
            <Avatar
              className={css.shadow}
              name={name}
              bg="white"
              color="#31986a"
              size="sm"
              m="0 1em 0 0"
            />
            <Text>{name}</Text>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default NameIcon;
