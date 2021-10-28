import { Avatar, Box, Flex, Spacer, Text } from "@chakra-ui/react";
import LogoutButton from "../LogoutButton";
import css from "./NameIcon.module.css";

const NameIcon = ({ name }) => {
  let capitalizedName;
  if (name) capitalizedName = name.replace(/./, (match) => match.toUpperCase());
  return (
    <>
      <Flex>
        <Spacer />
        <LogoutButton />
        <Box
          className={`${css.shadow} ${css.center}`}
          borderRadius="md"
          bg="#1D5B40"
          color="white"
          w="fit-content"
          p="0.5em"
          h="3em"
          m="1vw"
        >
          <Flex justify="space-around" align="center">
            <Avatar
              className={css.shadow}
              name={capitalizedName}
              bg="white"
              color="#1D5B40"
              size="sm"
              m="0 1em 0 0"
            />
            <Text>{capitalizedName}</Text>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default NameIcon;
