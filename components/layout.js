import Head from 'next/head';
import { Box, Grid, useColorMode, useColorModeValue,  IconButton, Icon } from '@chakra-ui/react';
import Header from '../components/header';
import Footer from '../components/footer';
import PageHeader from '../components/page-header';
import HomeButton from '../components/home-button';

import { HiOutlineSun } from "react-icons/hi"

function Layout({ children, title }) {
  const { toggleColorMode } = useColorMode();
  const  mobileHeaderBg = useColorModeValue("gray.50", "gray.900");
  // useEffect(() => {
  //   // resize script for mobile browser resize
  //   function setResize() {
  //     window.addEventListener("resize", () => {
  //       // We execute the same script as before
  //       let vh = window.innerHeight * 0.01;
  //       document.documentElement.style.setProperty("--vh", `${vh}px`);
  //     });
  //   }

  //   setResize();
  // }, []);


  return (
    <div>
      <Head>
        <title>{title || 'Titan App'}</title>
      </Head>

      <Grid templateColumns={['100%', '100%', '256px calc(100% - 256px)']}>
        <Box
          display={['none', 'none', 'block']}
         
          position="relative"
        >
          <Header />
        </Box>

        <Box >
          <Box position="relative">
            <PageHeader />
          </Box>

          <Box pt={["90px", "90px", 100]} minHeight="100vh">
            <main>{children}</main>

            <Footer />
          </Box>
        </Box>

        
      </Grid>

      <Box
        display={['block', 'block', 'none']}
        px={5}
        py={3}
        zIndex={1000}
        position="fixed"
        bottom={0}
        width="100vw"
        bg={ mobileHeaderBg }
        
      >

<IconButton fontSize="lg" variant="ghost" onClick={toggleColorMode} float="right">
          <Icon as={HiOutlineSun} />
        </IconButton>

        <HomeButton />

       
      </Box>
    </div>
  );
}

export default Layout;