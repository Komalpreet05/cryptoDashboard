import React from 'react'
import { Box, HStack, Heading, Icon, Stack, Text } from '@chakra-ui/react'
import { PiGridFourFill } from "react-icons/pi";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";

const SideNav = () => {
    const navLinks = [{
        icon: PiGridFourFill,
        text: "Dashboard",
        link: "/"
    },
    {
        icon: GrTransaction,
        text: "Transactions",
        link: "/transactions"
    }]

    return (
        <Stack boxShadow="lg" maxW="16rem" h="100vh" justify="space-between">
            <Box>
                <Heading as="h1" fontSize="20px" textAlign="center" pt="3.5rem">
                    @DEVKOMAL
                </Heading>
                <Box mt="6" mx="3">
                    {
                        navLinks.map((navLink) => (
                            <HStack key={navLink.text} px="4" py="3" color="#797E82" borderRadius="10px" _hover={{
                                bg: "#F3F3F7",
                                color: "#171717"
                            }}>
                                <Icon as={navLink.icon} />
                                <Text fontSize="14px" fontWeight="medium" >{navLink.text}</Text>
                            </HStack>
                        ))
                    }
                </Box>
            </Box>
            <Box mb="6">
                <HStack px="4" py="3" color="#797E82" borderRadius="10px" _hover={{
                    bg: "#F3F3F7",
                    color: "#171717"
                }}>
                    <Icon as={BiSupport} />
                    <Text fontSize="14px" fontWeight="medium" >Support</Text>
                </HStack>
            </Box>
        </Stack>
    )
}

export default SideNav
