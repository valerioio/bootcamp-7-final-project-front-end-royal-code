import { Avatar, Box, Circle, Flex, Spacer, Text } from "@chakra-ui/react";
import LogoutButton from "../LogoutButton";

const NameIcon = () => {
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
              name="Valerio Yrral"
              bg="white"
              color="#31986a"
              size="sm"
              src="https://bit.ly/broken-link"
            />
            <Text>Valerio Yrral</Text>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default NameIcon;
