import { Box, Button, Flex, Heading, HStack, Icon, Stack, StackProps, Text } from "@chakra-ui/react";
import NewIcon  from "../icons/NewIcon"

export const ListItem = (props: StackProps) => {
    const { children, ...rest } = props
    return(
        <HStack as={"li"} spacing={"1.25rem"} {...rest}>
            <Icon as={NewIcon} w={"1.25rem"} h={"1.25rem"}/>
            <Text>{children}</Text>
        </HStack>
    )
}

export function Pricing() {
    return (
      <Box mx={"1.5rem"}>
        <Box
          maxWidth={"994px"}
          margin={"auto"}
          mt={"-16rem"}
          borderRadius={"0.875rem"}
          overflow={"hidden"}
          boxShadow={
            "0px 10px 10px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.4)"
          }
        >
          <Flex flexDirection={["column", "column", "row"]}> {/* layout responsivo */}
            <Box textAlign={"center"} bg={"#F0EAFB"} p={"3.5rem"} alignItems={"center"}>
              <Text fontSize={"1.5rem"} fontWeight={"800"}>
                Premium PRO
              </Text>
              <Heading as={"h3"} fontSize={["5xl", "5xl", "6xl"]}  mt={"1rem"}>
                $329
              </Heading>
              <Text
                color={"#171923"}
                fontSize={"1rem"}
                fontWeight={"500"}
                mt={"0.5rem"}
              >
                billed just once
              </Text>
              <Button
                colorScheme={"purple"}
                size={"lg"}
                w={["52", "52", "72"]} // button responsive
                mt={"1.5rem"}
              >
                Get Started
              </Button>
            </Box>
            <Box p={"2.5rem"} fontSize={"1rem"} bg={"white"}>
              <Text textAlign={"left"}>
                Access these features when you get this pricing package for your
                business
              </Text>
              <Stack as={"ul"} spacing={"1.25rem"} pt={"1.5rem"}>
                <ListItem>International calling and messaging API</ListItem>
                <ListItem>Additional phone numbers</ListItem>
                <ListItem>Automated messages via Zapier</ListItem>
                <ListItem>24/7 support and consulting</ListItem>
              </Stack>
            </Box>
          </Flex>
        </Box>
      </Box>
    );
}