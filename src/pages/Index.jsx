import React from "react";
import { Box, Heading, Text, Image, Flex, Link, UnorderedList, ListItem, Code } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
      <Heading as="h1" size="2xl" mb={8} textAlign="center">
        Data Wrangling Wizardry: Preprocessing for Optimal Outcomes
      </Heading>

      <Image src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkYXRhJTIwd3JhbmdsaW5nJTIwd2l6YXJkfGVufDB8fHx8MTcxMzgzODkxMHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Data Wrangling Wizard" mb={8} />

      <Text fontSize="xl" mb={8}>
        Welcome to the ultimate guide on data preprocessing techniques to optimize your machine learning models! Discover the magic of data wrangling and unlock insights from your datasets.
      </Text>

      <Heading as="h2" size="xl" mb={4}>
        Key Preprocessing Steps
      </Heading>
      <UnorderedList mb={8}>
        <ListItem>Handling missing data with techniques like mean/median imputation</ListItem>
        <ListItem>Encoding categorical variables using one-hot encoding or label encoding</ListItem>
        <ListItem>Scaling and normalization of numerical features</ListItem>
        <ListItem>Outlier detection and treatment methods</ListItem>
        <ListItem>Feature selection to identify most predictive variables</ListItem>
      </UnorderedList>

      <Heading as="h2" size="xl" mb={4}>
        Code Snippets
      </Heading>
      <Code display="block" whiteSpace="pre" p={4} mb={8}>
        {`from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
        `}
      </Code>

      <Text fontSize="xl" mb={8}>
        Mastering data preprocessing is key to building high-performing machine learning models. By applying these techniques, you can clean, transform and optimize your data for better results.
      </Text>

      <Flex justifyContent="center" mb={8}>
        <Link href="https://github.com/datapreprocessing" isExternal mr={4}>
          <FaGithub size={32} />
        </Link>
        <Link href="https://www.linkedin.com/in/datapreprocessing/" isExternal mr={4}>
          <FaLinkedin size={32} />
        </Link>
        <Link href="mailto:info@datapreprocessing.com" isExternal>
          <FaEnvelope size={32} />
        </Link>
      </Flex>

      <Text fontSize="lg" textAlign="center">
        Data Preprocessing Wizardry - Unleash the full potential of your data!
      </Text>
    </Box>
  );
};

export default Index;
