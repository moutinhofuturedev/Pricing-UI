import { Box } from "@chakra-ui/react"
import { Features } from "./components/Features"
import { Header } from "./components/Header"
import { Pricing } from "./components/Pricing"

function App() {

  return (
    <Box h={"100vh"}>
      <Header />
      <Pricing />
      <Features />
    </Box>
  )
}

export default App
