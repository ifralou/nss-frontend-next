import React from 'react';
import {
    Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink,
    Button,
    Card,
    CardBody,
    CardFooter,
    Flex,
    HStack,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs
} from "@chakra-ui/react";
import {FaMeetup} from "react-icons/fa";

const Template = ({children, login}) => {
    return (
        <Box align="center" py={10}>
            <Flex w="80%" as="header" p={2} align="center" justify="space-between">
                <FaMeetup size={70} color="green"/>
                <Tabs variant="soft-rounded" colorScheme="green">
                    <TabList>
                        <Tab>page</Tab>
                        <Tab>page</Tab>
                        <Tab>page</Tab>
                        <Tab>page</Tab>
                        <Tab>page</Tab>
                        <Tab>page</Tab>
                    </TabList>
                </Tabs>
                {login && <HStack spacing={4}>
                    <Button>Login</Button>
                    <Button>Register</Button>
                </HStack>}
            </Flex>

            {children}

            <HStack as="footer" w="80%" pt={20} mb={20}>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <BreadcrumbLink>Help</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink>Support</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink>Privacy policy</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink>Terms of service</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </HStack>
        </Box>
    );
};

export default Template;