import Head from 'next/head'
import Image from 'next/image'
import {Inter} from 'next/font/google'
import {
    Box, Button,
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
            <Center>
                <Heading p={12}>
                    <Button onClick={() => window.location.href = "/sitemap"}>to sitemap</Button>
                </Heading>

            </Center>
        </>
    )
}
