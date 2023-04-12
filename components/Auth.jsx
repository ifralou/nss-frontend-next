import React from 'react';
import {
    Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink,
    Button,
    Card,
    CardBody, CardFooter, CardHeader,
    Flex, FormControl, FormLabel,
    Heading,
    HStack,
    Image, Input, Link,
    Stack,
    Tab,
    TabList, TabPanel, TabPanels,
    Tabs,
    Text
} from "@chakra-ui/react";
import {FaMeetup} from "react-icons/fa";
import Wrapper from "@/components/Wrapper";
import Template from "@/components/Template";

function TabsPanels(props) {
    return null;
}

const Auth = () => {
    return (
        <Template>
            <Card w="40%" my={12}>

                <Tabs isFitted size="lg" variant="enclosed" colorScheme="green">
                    <TabList>
                        <Tab>Login</Tab>
                        <Tab>Registration</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <CardBody>
                                <Stack spacing={5}>

                                    <FormControl>
                                        <FormLabel>Email</FormLabel>
                                        <Input type="email"/>
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>Password</FormLabel>
                                        <Input type="password"/>
                                    </FormControl>

                                </Stack>
                            </CardBody>
                        </TabPanel>
                        <TabPanel>
                            <CardBody>
                                <Stack spacing={5}>
                                    <FormControl>
                                        <FormLabel>Name</FormLabel>
                                        <Input type="text"/>
                                    </FormControl>

                                    <FormControl isRequired>
                                        <FormLabel>Email</FormLabel>
                                        <Input type="email"/>
                                    </FormControl>

                                    <FormControl isRequired>
                                        <FormLabel>Password</FormLabel>
                                        <Input type="password"/>
                                    </FormControl>

                                    <FormControl isRequired>
                                        <FormLabel>Confirm password</FormLabel>
                                        <Input type="password"/>
                                    </FormControl>
                                </Stack>
                            </CardBody>
                        </TabPanel>
                    </TabPanels>
                </Tabs>

                <CardFooter>
                    <HStack justify="space-between" w="100%">
                        <Button type="submit">Submit</Button>
                        <Link color="green">Restore password</Link>
                    </HStack>
                </CardFooter>
            </Card>
        </Template>
    )
        ;
};

export default Auth;