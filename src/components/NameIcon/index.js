import { Avatar, Box, Flex, Spacer, Text } from "@chakra-ui/react";
import css from "./NameIcon.module.css";

const NameIcon = ({ name }) => {
  let capitalizedName;
  if (name) capitalizedName = name.replace(/./, (match) => match.toUpperCase());
  return (
    <>
      <Flex>
        <Spacer />
        <Box
          className={`${css.shadow} ${css.center} `}
          borderRadius="md"
          bg="#004ba0"
          color="white"
          w="fit-content"
          p="0.5vw"
          h="3em"
          m="1vw"
        >
          <Flex justify="space-around" align="center">
            <Avatar
              className={`${css.shadow} ${css.icon}`}
              name={capitalizedName}
              bg="white"
              color="#004ba0"
              size="sm"
              m="0 1em 0 0"
            />
            <Text className={css.name}>{capitalizedName}</Text>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default NameIcon;
