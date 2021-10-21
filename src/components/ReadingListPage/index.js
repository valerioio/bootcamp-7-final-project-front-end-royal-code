import { Box, Circle, Flex, Spacer, Text } from "@chakra-ui/react";

const ReadingListPage = () => {
  return (
    <>
      <Flex>
        <Spacer />
        <Box borderRadius="md" bg="green" color="white" w={40} h={10} mx={5}>
          <Circle size="1.5em" bg="tomato" color="white">
            VY
          </Circle>
          <Text>Valerio Yrral</Text>
        </Box>
      </Flex>
    </>
  );
};

export default ReadingListPage;
