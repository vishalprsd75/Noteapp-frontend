import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Navbar } from "../components/Homepage/Navbar";
import note from "../assets/note.png";
export default function Homepage() {
  return (
    <Box padding={8}>
      <Image position={"absolute"} right={0} w={390} src={note} />
      <Heading textColor={"yellowgreen"} mt={16} textAlign={"start"} size={"4xl"}>
        Notes App
      </Heading>
      <Text textColor={"green"} fontSize={"16px"} fontWeight={"600"} mt={8} maxW={"50%"} textAlign={"justify"}>
        Our note application is a powerful tool designed to help you stay
        organized and efficient. Whether you're a student, professional, or
        simply someone who wants to keep track of important information, our
        note app is here to simplify your life. With its user-friendly interface
        and robust features, you can create, manage, and access your notes
        effortlessly. One ofthe main features of a note application is its
        ability to create and edit notes. Another useful feature of a note
        application is the ability to share notes. Users can share their notes
        with colleagues, friends, or family members, making collaboration on
        projects or ideas seamless. This is especially useful for professionals
        who need to work on team projects or students who want to collaborate on
        group assignments. Many note applications also include advanced features
        like syncing across multiple devices, making it easy to access and edit
        notes from anywhere. This ensures that users always have access to their
        notes, no matter where they are. Overall, a note application is an
        essential tool for anyone looking to stay organized and productive.
      </Text>
    </Box>
  );
}
