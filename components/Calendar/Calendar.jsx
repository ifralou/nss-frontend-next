import React from 'react';
import {Box, Button, Card, Center, HStack, Select, Text, VStack} from "@chakra-ui/react";

const days = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [29, 30, 31, 1, 2, 3, 4]
]

const Calendar = () => {
    return (
        <Center w="800px" h="600px" flexDirection="column">

            <HStack p={4} w="100%">

                <Select placeholder="Room selection">
                    <option value="war">War Room</option>
                    <option value="war">Main Room</option>
                    <option value="war">Occupied room</option>
                    <option value="war">Toilet</option>
                </Select>

                <Select placeholder="Date">
                    <option value="war">Today</option>
                    <option value="war">Tomorrow</option>
                    <option value="war">Day after tomorrow</option>
                </Select>

                <Select placeholder="Priority">
                    <option value="war">High</option>
                    <option value="war">Medium</option>
                    <option value="war">Low</option>
                    <option value="war">Insane</option>
                </Select>

                <Button px={3}>Filter</Button>
            </HStack>
            <Card w="100%" h="100%" p={3}>
                {
                    days.map((week, i) =>
                        <HStack key={i} justify="space-between" h="20%" py="5px">
                            {
                                week.map((day, j) =>
                                    <Card key={j} h="100%" w="15%">
                                        <Center w="100%" h="100%">
                                            {day}
                                        </Center>
                                    </Card>
                                )
                            }
                        </HStack>
                    )
                }

            </Card>
        </Center>
    );
};

export default Calendar;