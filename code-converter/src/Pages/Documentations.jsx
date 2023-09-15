import React from 'react';
import {
    Box,
    Stack,
    Text,
    useColorModeValue,
    Divider,
    Heading,
} from '@chakra-ui/react';
import {
    List,
    ListItem,
    ListIcon
} from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md'
export default function Documentations() {
    return (
        <Stack
            bg={useColorModeValue('gray.50', 'gray.800')}
            py={16}
            px={8}
            spacing={{ base: 8, md: 10 }}
            align={'center'}
            direction={'column'}
        >
    

            <Divider />

            <Box>
                <Heading as="h2" size="lg" mb={4}>
                    Features
                </Heading>
                <Text>
                    The Code Conversion App provides the following features:
                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Select the target programming language for code conversion.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Convert your code snippet to the selected language.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Debugging functionality to simulate debugging tasks.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Quality checking functionality to simulate quality assurance tasks.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Responsive design for mobile and desktop use.
                        </ListItem>
                        {/* You can also use custom icons from react-icons */}

                    </List>
                </Text>
            </Box>

            <Divider />

            <Box>
                <Heading as="h2" size="lg" mb={4}>
                    Getting Started
                </Heading>
                <Text>
                    To get started with the Code Conversion App:
                    {/* Add getting started information here */}
                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Open the app in your browser after starting the development server.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Choose the target programming language by the text.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Click the "Convert Code" button to convert your code.
                        </ListItem>
                    </List>
                </Text>
            </Box>

            <Divider />



            <Divider />



            <Divider />


            <Divider />


        </Stack>
    );
}
