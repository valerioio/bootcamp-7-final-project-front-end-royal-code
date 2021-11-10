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
          p="1.7vw 1.3vw "
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
              src={
                name === "christina"
                  ? "https://ca.slack-edge.com/T6L933W4X-URP49GRN2-363ac7421e9d-512"
                  : name === "emanuel"
                  ? "https://ca.slack-edge.com/T6L933W4X-U0280RAM4RE-31d1651f6a96-512"
                  : ""
              }
            />
            <Text className={css.name}>{capitalizedName}</Text>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default NameIcon;
