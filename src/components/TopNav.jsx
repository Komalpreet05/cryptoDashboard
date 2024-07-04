import { HStack, Heading, MenuButton, MenuList, MenuItem, Button, Menu, Box } from '@chakra-ui/react'
import React from 'react'

const TopNav = () => {
    return (
        <Box>
            <HStack boxShadow="xl" h="16" justify={'space-between'} px={32} maxW={'60rem'}>
                <Heading>Dashboard</Heading>
                <Menu>
                    <MenuButton as={Button}>
                        Actions
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
        </Box >
    )
}

export default TopNav
