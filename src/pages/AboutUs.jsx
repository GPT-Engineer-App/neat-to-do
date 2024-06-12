import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl">About Us</Heading>
        <Text fontSize="lg">
          Welcome to our Todo App! We are dedicated to helping you manage your tasks efficiently and effectively.
        </Text>
        <Text fontSize="md">
          Our app is designed to be simple and intuitive, making it easy for you to stay organized and on top of your to-do list.
        </Text>
        <Text fontSize="md">
          Thank you for choosing our app to help you stay productive!
        </Text>
      </VStack>
    </Box>
  );
};

export default AboutUs;