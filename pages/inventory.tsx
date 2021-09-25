import type { NextPage } from 'next'
// import Image from 'next/image'
import Layout from "../components/layout";
import { Box, Image, Heading,   } from "@chakra-ui/react";



const Home: NextPage = () => {
  return (
    <Layout title="Inventory">

      <Box  px={[5, 5, 10]}>
        <Heading fontWeight="bold" textTransform="uppercase" size="lg">
        Inventory
        </Heading>
      </Box>

    
    </Layout>
  )
}

export default Home