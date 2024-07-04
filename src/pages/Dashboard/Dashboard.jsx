import React from 'react'
import SideNav from '../../components/SideNav'
import TopNav from '../../components/TopNav'
import { Box, Flex } from '@chakra-ui/react'

const Dashboard = () => {
    return (
        <div>
            <Flex>
                <SideNav></SideNav>
                <Box flexGrow={1}>
                    <TopNav></TopNav>
                </Box>
            </Flex>
        </div>
    )
}

export default Dashboard
