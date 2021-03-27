import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { Tab, Tabs } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { useState } from 'react'
import PropTypes from 'prop-types'

import AccountProfile from './AccountProfile'
import Connections from './Connections'
import Posts from './Posts'


const Profile = () => {
    const [tab, setTab] = useState(0)

    const handleChangeTab = (event, newValue) => {
        setTab(newValue)
    }

    const TabPanel = (props) => {
        const { children, value, index, ...other } = props;

        return (
            <Typography
                component="div"
                role="tabpanel"
                hidden={value !== index}
                id={`wrapped-tabpanel-${index}`}
                aria-labelledby={`wrapped-tab-${index}`}
                {...other}
            >
                {value === index && <Box p={3}>{children}</Box>}
            </Typography>
        )
    }

    TabPanel.propTypes = {
        children: PropTypes.any.isRequired,
        value: PropTypes.number.isRequired,
        index: PropTypes.number.isRequired,
    }

    return (
        <Container maxWidth='lg'>
            <Grid container spacing={4}>
                <Grid item md={4} xs={12}>
                    <AccountProfile />
                </Grid>
                <Grid item md={8}>
                    <Tabs value={tab} onChange={handleChangeTab}>
                        <Tab label='Post' />
                        <Tab label='Conexões' />
                    </Tabs>
                    <TabPanel value={tab} index={0}>
                        <Posts />
                    </TabPanel>
                    <TabPanel value={tab} index={1}>
                        <Connections />
                    </TabPanel>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Profile