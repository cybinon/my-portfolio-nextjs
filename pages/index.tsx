import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <Box width={"100%"} background="linear-gradient(to bottom, #073B4C 0%, #118AB2 100%)">
      <Head>
        <title>Chingun | Cybinon</title>
      </Head>

      <Box
        width={"100%"}
        height="20vh"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        background="linear-gradient(to right, #073B4C 0%, #118AB2 100%)"
      >
        <Box
          as="h1"
          fontSize="5xl"
          fontWeight="bold"
          color="white"
        >
          Chingun
        </Box>
      </Box>
      <Box>
        Test
      </Box>
      <Box minH={"100vh"}>
      </Box>
    </Box>
  )
}

export default Home
