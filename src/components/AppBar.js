import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from "./TabPanel";
import {makeStyles} from "@material-ui/core/styles";
import Stopwatch from "./Stopwatch";
import Tabata from "./Tabata";


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const useStyles = makeStyles((theme) => ( {
    root: {
        flexGrow: 1,
    },
    topBar: {
        backgroundColor: '#3A3D42',
        borderBottom: 'solid thick 3A3D42',
    }
}));

export default function CenteredTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Paper className={classes.topBar}>
            <Tabs
                classes={classes.topBar}
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >

                <Tab label="StopWatch" {...a11yProps(0)} />
                <Tab label="Tabata" {...a11yProps(1)} />
                <Tab label="Timer" {...a11yProps(2)} />
            </Tabs>

            <TabPanel value={value} index={0}>
                <Stopwatch/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Tabata/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </Paper>

    );
}
