import { Box, HStack, Icon, StackProps, Text } from "@chakra-ui/react"
import { ElementType } from "react"
import HassleFreeIcon from "../icons/HassleFreeIcon"
import MoneyBackIcon from "../icons/MoneyBackIcon"
import MonthlySubsIcon from "../icons/MonthlySubsIcon"

interface FeatureProps extends StackProps {
    icon: ElementType
}

function Feature(props: FeatureProps) {
    const { icon, children, ...rest } = props

    return(
        <HStack {...rest} spacing={"1.5rem"} alignItems={"start"} >
            <Icon as={icon} boxSize={"3rem"} />
            <Text textAlign={["left", "left", "center"]} fontSize={"lg"} fontWeight={"bold"}>{children}</Text>
        </HStack>
    )
}

export function Features() {
    return (
      <Box maxWidth={"1024px"} m={"auto"} pt={"3.5rem"} pb={"2rem"} >
        <HStack px={"3rem"} spacing={"1.25rem"} flexDirection={["column", "column", "row"]} gap={"1rem"}>
          <Feature icon={MoneyBackIcon} >
            <Text>30 days money back Guarantee</Text>
          </Feature>

          <Feature icon={HassleFreeIcon}>
            <Text>No setup fees 100% hassle-free</Text>
          </Feature>

          <Feature icon={MonthlySubsIcon}>
            <Text>No monthly subscription Pay once and for all</Text>
          </Feature>
        </HStack>
      </Box>
    )
}