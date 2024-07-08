import React from 'react'
import { Box, HStack, Heading, Icon, Stack, Text } from '@chakra-ui/react'
import { PiGridFourFill } from "react-icons/pi";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from 'react-router-dom';

const SideNav = () => {
    const location = useLocation();

    const isActiveLink = (link) => {
        return location.pathname === link
    }
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
        <Stack boxShadow={{
            base: "none",
            lg: "lg"
        }} bg={'white'} w={{ base: "full", lg: "16rem" }} h="100vh" justify="space-between">
            <Box>
                <Heading as="h1" fontSize="20px" textAlign="center" pt="3.5rem">
                    @DEVKOMAL
                </Heading>
                <Box mt="6" mx="3">
                    {
                        navLinks.map((navLink) => (
                            <Link to={navLink.link} key={navLink.text}>
                                <HStack px="4" py="3" borderRadius="10px"
                                    bg={isActiveLink(navLink.link) ? "#F3F3F7" : "transparent"}
                                    color={isActiveLink(navLink.link) ? "#171717" : "#797E82"}
                                    _hover={{
                                        bg: "#F3F3F7",
                                        color: "#171717"
                                    }}>
                                    <Icon as={navLink.icon} />
                                    <Text fontSize="14px" fontWeight="medium" >{navLink.text}</Text>
                                </HStack>
                            </Link>
                        ))
                    }
                </Box>
            </Box>
            <Box mb="6">
                <Link to={'/support'}>
                    <HStack px="4" py="3"
                        bg={isActiveLink("/support") ? "#F3F3F7" : "transparent"}
                        color={isActiveLink("/support") ? "#171717" : "#797E82"}
                        borderRadius="10px" _hover={{
                            bg: "#F3F3F7",
                            color: "#171717"
                        }}>
                        <Icon as={BiSupport} />
                        <Text fontSize="14px" fontWeight="medium" >Support</Text>
                    </HStack>
                </Link>
            </Box>
        </Stack>
    )
}

export default SideNav
