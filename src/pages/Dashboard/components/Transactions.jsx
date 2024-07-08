import React, { Fragment } from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { Text, Stack, Flex, Grid, Icon, Divider, Button } from '@chakra-ui/react'
import { FaDollarSign } from "react-icons/fa";
import { FaBtc } from "react-icons/fa";

const Transactions = () => {
    const transactions = [{
        id: "1",
        icon: FaDollarSign,
        title: "CAD Deposit",
        amount: "+$45012.80",
        timeStamp: "2024-05-23 12:00 AM"
    },
    {
        id: "2",
        icon: FaBtc,
        title: "BTC Sell",
        amount: "-$123012.80",
        timeStamp: "2024-06-12 12:00 AM"
    },
    {
        id: "3",
        icon: FaDollarSign,
        title: "CAD Deposit",
        amount: "+$35012.80",
        timeStamp: "2024-05-23 12:00 AM"
    }]
    return (
        <CustomCard h={'full'}>
            <Text fontSize={'sm'} color={'black.80'} mb={6}>Recent Transactions</Text>
            <Stack spacing={4}>
                {transactions.map((trans, i) => (
                    <Fragment key={trans.id}>
                        {i !== 0 && <Divider />}
                        <Flex gap={4}>
                            <Grid boxSize={10} borderRadius={'full'} bg={'black.5'} placeItems={'center'}>
                                <Icon as={trans.icon} />
                            </Grid>
                            <Flex justify={'space-between'} w={'full'}>
                                <Stack spacing={'0'}>
                                    <Text textStyle={'h6'} >
                                        {trans.title}
                                    </Text>
                                    <Text fontSize={'sm'} color={'black.40'}>
                                        {trans.timeStamp}
                                    </Text>
                                </Stack>
                                <Text textStyle={'h6'}>{trans.amount}</Text>
                            </Flex>
                        </Flex>
                    </Fragment>
                ))}
            </Stack>
            <Button w={'full'} colorScheme='gray' mt={6}>View All</Button>
        </CustomCard>
    )
}

export default Transactions
