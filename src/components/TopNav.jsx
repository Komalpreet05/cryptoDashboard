import { HStack, Heading, MenuButton, MenuList, MenuItem, Button, Menu, Box, Icon } from '@chakra-ui/react'
import React from 'react'
import { FaCircleUser } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";

const TopNav = ({ title, onOpen }) => {
    return (
        <Box px={"4"} bg={'white'}>
            <HStack h="16" justify={'space-between'} maxW={'70rem'} mx={'auto'}>
                <Icon as={FaBars} onClick={onOpen} display={{ base: "block", lg: "none" }}></Icon>
                <Heading fontSize={'28px'} fontWeight={'medium'}>{title}</Heading>
                <Menu>
                    <MenuButton as={Button} bg={'none'}>
                        <Icon as={FaCircleUser} fontSize={'24px'} color={'black'} />
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Log Out</MenuItem>
                        <MenuItem>Support</MenuItem>

                    </MenuList>
                </Menu>
            </HStack>
        </Box >
    )
}

export default TopNav
