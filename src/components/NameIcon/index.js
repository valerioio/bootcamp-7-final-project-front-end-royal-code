import { Avatar, Box, Flex, Spacer, Text } from "@chakra-ui/react";
import LogoutButton from "../LogoutButton";

const NameIcon = ({ name }) => {
  if (name) name = name.replace(/./, (match) => match.toUpperCase());
  return (
    <>
      <Flex>
        <Spacer />
        <LogoutButton />
        <Box
          borderRadius="md"
          bg="#31986a"
          color="white"
          w="10em"
          h="3em"
          m="1vw"
        >
          <Flex justify="space-around" align="center">
            <Avatar
              name={name}
              bg="white"
              color="#31986a"
              size="sm"
              src="https://bit.ly/broken-link"
            />
            <Text>{name}</Text>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default NameIcon;
