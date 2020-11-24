import React from 'react';
import { Box, Container, Stack, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box
      backgroundColor="black"
      display="flex"
      height="10vh"
      textAlign={['center', 'center', 'initial']}
      alignItems="center"
    >
      <Container maxW="lg">
        <Stack>
          <Text color="white" as="h1" size="lg">
            Praktikum 3
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
