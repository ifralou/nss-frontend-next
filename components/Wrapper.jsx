import React from 'react';
import {Box, TabPanel} from "@chakra-ui/react";

const Wrapper = ({children}) => {
    return (
        <TabPanel align="center">
           <Box w="1100px" as="main" border="1px" borderRadius="10px" overflow="hidden">
               {children}
           </Box>
        </TabPanel>
    );
};

export default Wrapper;