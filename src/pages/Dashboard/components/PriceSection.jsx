import { HStack, Stack, Text, Icon, Button, Flex, Image, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import React from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { BsArrowUpRight } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";

const PriceSection = () => {
    const timeStamps = ['7:15pm', '8:15pm', '9:15pm', '10:15pm', '11:15pm']

    return (
        <CustomCard>
            <Flex justifyContent={'space-between'} align={'start'}>
                <Stack>
                    <HStack color="black.80">
                        <Text fontSize="sm" >Current Price</Text>
                    </HStack>
                    <HStack spacing={2} align={{ base: "flex-start", sm: "center" }} flexDir={{
                        base: "column",
                        sm: "row"
                    }}>
                        <HStack>
                            <Text textStyle={'h2'} fontWeight={'medium'}>22.39401000</Text>
                            <HStack fontWeight={'medium'} color={'green.500'}>
                                <Icon as={BsArrowUpRight} />
                                <Text fontSize={'sm'} fontWeight={'medium'}>22%</Text>
                            </HStack>
                        </HStack>

                    </HStack>
                </Stack>

                <HStack>
                    <Button leftIcon={
                        <Icon as={AiFillPlusCircle} />
                    }>Buy</Button>
                    <Button leftIcon={
                        <Icon as={AiOutlineMinusCircle} />
                    }>Sell</Button>
                </HStack>
            </Flex>
            <Tabs variant='soft-rounded'>
                <Flex justify={'end'} >
                    <TabList bg={'black.5'} p={'3px'}>
                        {
                            ['1H', '1D', '1W', '1M'].map((tab) => (
                                <Tab _selected={{ bg: 'white' }} key={tab} fontSize={'sm'} p={'6px'} borderRadius={'4'}>{tab}</Tab>
                            ))
                        }

                    </TabList>
                </Flex>
                <TabPanels>
                    <TabPanel>
                        <Image src='images/Graph.svg' w={'100%'} mt={'48px'} />
                        <HStack justify={'space-between'}>
                            {
                                timeStamps.map((stamp) => (
                                    <Text key={stamp} fontSize={'sm'} color={'black.80'}>{stamp}</Text>
                                ))
                            }
                        </HStack>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>

        </CustomCard>
    )
}

export default PriceSection
