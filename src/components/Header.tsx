import { Box, Heading, Text } from "@chakra-ui/react";

export function Header() {
    return (
      <Box pb={"7rem"} as={"section"}>
        <Box
          color={"gray.50"}
          bg={"purple.600"}
          pt={"2.75rem"}
          pb={"12rem"}
          px={"2rem"}
          textAlign={["left", "left","center"]}
        >
          <Heading fontWeight={"extrabold"} fontSize={["3xl", "3xl", "5xl"]}>
            Simple pricing for your business
          </Heading>
          <Text fontWeight={"medium"} fontSize={["lg", "lg","2xl"]} pt={"1rem"}>
            Plans that are carefully crafted to suit your business
          </Text>
        </Box>
      </Box>
    );
}