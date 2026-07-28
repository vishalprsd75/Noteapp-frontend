import { Box, Heading, Image, Text, Button, Flex, Stack, Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import note from "../assets/note.png";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

export default function Homepage() {
  return (
    <Box 
      position="relative" 
      w="100vw" 
      h="100vh" 
      overflow="hidden"
      bg="gray.50" 
      color="gray.800"
    >
      {/* Background glowing blobs */}
      <MotionBox
        position="absolute"
        top="-10%"
        left="-10%"
        w={{ base: "300px", md: "500px" }}
        h={{ base: "300px", md: "500px" }}
        bg="yellow.300"
        borderRadius="full"
        filter="blur(120px)"
        opacity={0.6}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <MotionBox
        position="absolute"
        bottom="-10%"
        right="-10%"
        w={{ base: "300px", md: "600px" }}
        h={{ base: "300px", md: "600px" }}
        bg="green.300"
        borderRadius="full"
        filter="blur(140px)"
        opacity={0.5}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -60, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container maxW={"7xl"} h="100%" pt={"64px"} position="relative" zIndex={1}>
        <Stack
          h="100%"
          align={'center'}
          justify={'center'}
          spacing={{ base: 8, md: 10 }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 8 }} 
            bg="whiteAlpha.700" 
            p={{ base: 6, md: 10 }} 
            borderRadius="2xl" 
            backdropFilter="blur(16px)"
            border="1px solid"
            borderColor="whiteAlpha.800"
            boxShadow="xl"
          >
            <Heading
              lineHeight={1.2}
              fontWeight={700}
              fontSize={{ base: '4xl', sm: '5xl', lg: '6xl' }}
            >
              <Text as="span" bgGradient="linear(to-r, green.500, yellow.500)" bgClip="text">
                Organize your
              </Text>
              <br />
              <Text as={'span'} color={'green.600'}>
                thoughts instantly!
              </Text>
            </Heading>
            <Text color={'gray.600'} fontSize={{base: "md", md: "lg"}} maxW={"lg"} lineHeight="1.8">
              Our note application is a powerful tool designed to help you stay
              organized and efficient. Create, manage, and access your notes
              effortlessly across all devices. Sync instantly and collaborate seamlessly.
            </Text>
            <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
              <Link to="/register">
                <Button
                  rounded={'full'}
                  size={'lg'}
                  fontWeight={'bold'}
                  px={8}
                  w={{ base: 'full', sm: 'auto' }}
                  bgGradient="linear(to-r, green.400, yellow.400)"
                  _hover={{ bgGradient: "linear(to-r, green.500, yellow.500)", transform: "translateY(-2px)" }}
                  transition="all 0.2s"
                  color="white"
                  border="none"
                >
                  Get Started
                </Button>
              </Link>
              <Link to="/login">
                <Button
                  rounded={'full'}
                  size={'lg'}
                  fontWeight={'bold'}
                  px={8}
                  w={{ base: 'full', sm: 'auto' }}
                  variant="outline"
                  colorScheme={'green'}
                  color="green.600"
                  borderColor="green.500"
                  _hover={{ bg: 'green.50' }}
                >
                  Log In
                </Button>
              </Link>
            </Stack>
          </Stack>
          
          <Flex flex={1} justify={'center'} align={'center'} w={'full'}>
            <MotionBox
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              position="relative"
              w={{ base: "full", md: "90%" }}
            >
              <MotionImage
                src={note}
                alt={"Note App Hero Image"}
                objectFit={"contain"}
                w="full"
                maxH={{ base: "40vh", md: "70vh" }}
                filter="drop-shadow(0px 20px 30px rgba(0,0,0,0.15))"
                animate={{ y: [0, -20, 0], rotate: [0, 2, -2, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              />
            </MotionBox>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}
