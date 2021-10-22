import { Box, Circle, Flex, Spacer, Text } from "@chakra-ui/react";
import LogoutButton from "../LogoutButton";

const NameIcon = () => {
  return (
    <>
      <Flex>
        <Spacer /><LogoutButton/>
        <Box borderRadius="md" bg="#31986a" color="white" w={40} h={10} mx={5}>
          <Circle size="1.5em" bg="tomato" color="white">
            VY
          </Circle>
          <Text>Valerio Yrral</Text>
        </Box>
      </Flex>
      
    </>
  );
};

export default NameIcon;