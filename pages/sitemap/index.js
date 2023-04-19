import Head from 'next/head'
import Image from 'next/image'
import {Inter} from 'next/font/google'
import {
    Box,
    Center,
    Container,
    Flex,
    Heading,
    HStack,
    Tab,
    TabList, TabPanel,
    TabPanels,
    Tabs,
    Text,
    VStack
} from "@chakra-ui/react";
import WelcomePage from "@/components/WelcomePage";
import React from "react";
import HomePage from "@/components/HomePage";
import Wrapper from "@/components/Wrapper";
import Auth from "@/components/Auth";
import Reservations from "@/components/Reservations";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <>
            <Head>
                <title>MEETER</title>
                <meta name="description" content="Meeting room reservation system."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <VStack as="main" p={6}>
                <Box w="100%" py={6}>
                    <Heading>MEETER</Heading>
                    <Text>Meeting room reservation system.</Text>
                </Box>
                <Tabs w="100%" isFitted variant="enclosed" colorScheme="violet" >
                    <TabList>
                        <Tab>Home</Tab>
                        <Tab>Login/Registration</Tab>
                        <Tab>Calendar</Tab>
                    </TabList>
                    <TabPanels>
                        <Wrapper><HomePage/></Wrapper>
                        <Wrapper><Auth/></Wrapper>
                        <Wrapper><Reservations/></Wrapper>
                    </TabPanels>
                </Tabs>
                <Container>

                </Container>

            </VStack>
        </>
    )
}
