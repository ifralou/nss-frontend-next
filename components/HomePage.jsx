import React from 'react';
import {
    Box,
    Button,
    Card, CardBody, CardFooter,
    Container, Divider,
    Flex,
    Image,
    Heading,
    HStack, Stack,
    Tab,
    TabList,
    Tabs,
    Text, Breadcrumb, BreadcrumbItem, BreadcrumbLink,
} from "@chakra-ui/react";
import {FaMeetup} from "react-icons/fa";
import Template from "@/components/Template";

const rooms = [
    {
        name: "Main room",
        description: "A large, well-equipped space for presentations and conferences, featuring comfortable seating and audio-visual equipment.",
        img: "",
        capacity: 20,
        occupied: false
    }, {
        name: "War room",
        description: "An intimate setting for brainstorming and strategy sessions, complete with a whiteboard, round table, and cozy chairs.",
        img: "",
        capacity: 10,
        occupied: false
    }, {
        name: "Occupied room",
        description: "A versatile, multipurpose space for small meetings and private work sessions, offering a flexible layout and office supplies.",
        img: "",
        capacity: 20,
        occupied: true
    },
    {
        name: "Toilet",
        description: "A clean, hygienic facility for personal needs, providing essential amenities like soap, paper towels, and air fresheners.",
        img: "",
        capacity: 20,
        occupied: false
    }
]

const HomePage = () => {
    return (
        <Template login>
            <Stack as="section" maxW="90%" spacing={6} p={12}>
                <Heading py={5} align="left" size="3xl">Streamlined Meeting Room Booking: The Reservation System Simplified</Heading>
                <Text align="left" py={8} fontSize="lg">
                    The Meeting Room Reservation System is a user-friendly and efficient web application designed to
                    streamline the process of booking and managing meeting rooms in offices. With an intuitive
                    interface, the system allows employees to quickly reserve meeting rooms based on their needs and
                    preferences. Admins have the ability to set priorities for both rooms and employees, ensuring that
                    resources are allocated effectively. The system also displays room attributes such as maximum
                    capacity and available equipment, making it easy for users to choose the most suitable room for
                    their meetings. By automating recurring meeting reservations and integrating with popular calendar
                    applications, the Meeting Room Reservation System greatly simplifies office logistics, ensuring a
                    more organized and productive work environment.
                </Text>
            </Stack>

            <HStack spacing={8} w="90%" align="start" justify="space-between" px={8}>
                {
                    rooms.map(({name, description, img, capacity, occupied}, i) =>
                        <Card key={i} opacity={occupied ? 0.6 : 1} h="300px">
                            <CardBody>
                                {/* eslint-disable-next-line react/jsx-no-undef */}
                                <Stack spacing={3}>
                                    <Heading size="md">{name}</Heading>
                                    <Image src={"/" + img} alt="just a pic" borderRadius="lg"/>
                                    <Text fontSize="xs">{description}</Text>
                                </Stack>
                            </CardBody>
                            <CardFooter pt={0} justify="space-between">
                                <Button variant="outline"
                                        colorScheme={occupied ? "red" : "green"}>{occupied ? "Sorry" : "Reserve"}</Button>
                                <Button variant="outline" colorScheme={occupied ? "red" : "green"}>{capacity}</Button>
                            </CardFooter>
                        </Card>
                    )
                }
            </HStack>
        </Template>

    );
};

export default HomePage;