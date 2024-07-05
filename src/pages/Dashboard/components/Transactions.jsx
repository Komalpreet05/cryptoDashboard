import React from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { Text } from '@chakra-ui/react'

const Transactions = () => {
    const transactions = [{
        icon: "",
        title: "Cad Deposit",
        amount: "+$4500"
    }]
    return (
        <CustomCard>
            <Text fontSize={'sm'} color={'black.80'}>Recent Transactions</Text>
        </CustomCard>
    )
}

export default Transactions
