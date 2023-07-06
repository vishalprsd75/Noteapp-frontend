import { Box, Flex, Image, VStack } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser } from "../Redux/users/user.actions";
import login from "../assets/login.png";

export default function LoginPage() {
  const nav = useNavigate();
  const { auth, token, loading, error } = useSelector(
    (state) => state.userReducer
  );
  console.log(auth, token);
  if (auth) {
    nav("/notes");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(getUser({ email, password }));
  };

  return (
    <Flex padding={4} w="100%">
      <Image position={"absolute"} mt={20} right={10} w={450} src={login} />
      <VStack w={"50%"}>
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"}>Sign in to your account</Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                to enjoy all of our cool{" "}
                <Link color={"green.400"}>features</Link> ✌️
              </Text>
            </Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Link color={"green.400"}>Forgot password?</Link>
                  </Stack>
                  <Button
                    onClick={handleLogin}
                    bg={"green.400"}
                    color={"white"}
                    _hover={{
                      bg: "green.500",
                    }}
                  >
                    Sign in
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </VStack>
    </Flex>
  );
}
