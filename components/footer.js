import { Heading, Divider, Box, Image, Button, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';

function Footer() {
  const bg = useColorModeValue('gray.50', 'gray.900');
  return (
    <Box>
      <Divider />
      <Box p={[5, 5, 8]}>
        <Heading>Footer</Heading>
      </Box>
    </Box>
  );
}

export default Footer;
