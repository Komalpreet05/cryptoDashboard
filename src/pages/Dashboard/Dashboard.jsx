import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import PortfolioSection from './components/PortfolioSection'
import PriceSection from './components/PriceSection'
import { Grid, GridItem } from '@chakra-ui/react'
import Transactions from './components/Transactions'
import InfoCard from './components/InfoCard'


const Dashboard = () => {
    return (
        <DashboardLayout title="Dashboard">
            <Grid gridTemplateColumns={{
                xl: 'repeat(2,1fr)',
                base: 'repeat(1,1fr)'
            }} gap={6}>
                <GridItem colSpan={{
                    base: 1,
                    xl: 2
                }}>
                    <PortfolioSection />
                </GridItem>
                <GridItem colSpan={1}>
                    <PriceSection />
                </GridItem>
                <GridItem colSpan={1}>
                    <Transactions />
                </GridItem>

                <GridItem colSpan={1}>
                    <InfoCard imgUrl={'/images/loans.svg'} text={"Learn more about Loans - Keep your Bitcoin, access it's value without selling it"} tagText={'Loan'} inverted={false} />
                </GridItem>

                <GridItem colSpan={1}>
                    <InfoCard imgUrl={'/images/contact.svg'} tagText={'Contact'} text={"Learn more about our real estate, mortgage, and  corporate account services"} inverted={true} />
                </GridItem>
            </Grid>


        </DashboardLayout>
    )
}

export default Dashboard
