import { Button, Card, Flex, Icon, Tabs, TabList, Tab, TabPanel, TabPanels, Tag, HStack } from '@chakra-ui/react'
import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { BsDownload } from "react-icons/bs";
import TransactionTable from './components/TransactionTable';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { BsSearch } from "react-icons/bs";

const Transaction = () => {
    const tabs = [
        {
            name: "All",
            count: 349
        },
        {
            name: "Deposit",
            count: 213
        },
        {
            name: "Withdraw",
            count: 103
        },
        {
            name: "Trade",
            count: 49
        },
    ]
    return (
        <DashboardLayout title={'Transactions'}>
            <Flex justify='end' mt={6} mb={3}>
                <Button leftIcon={<Icon as={BsDownload} />}>Export CSV</Button>
            </Flex>
            <Card borderRadius={'1rem'}>
                <Tabs>
                    <TabList pt={'4'} display={'flex'} justifyContent={'space-between'}>
                        <HStack>
                            {
                                tabs.map((tab) => (
                                    <Tab key={tab.name} pb={'4'} display={'flex'} gap={'2'}> {tab.name}<Tag colorScheme='gray' borderRadius={'full'}>{tab.count}</Tag></Tab>
                                ))
                            }
                        </HStack>

                        <InputGroup maxW={'200px'} pr={'6'}>
                            <InputLeftElement pointerEvents='none'>
                                <Icon as={BsSearch} />
                            </InputLeftElement>
                            <Input type='tel' placeholder='Search....' />
                        </InputGroup>


                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <TransactionTable />
                        </TabPanel>
                        <TabPanel>
                            <TransactionTable />

                        </TabPanel>
                        <TabPanel>
                            <TransactionTable />

                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Card>
        </DashboardLayout>

    )
}

export default Transaction
