import React from 'react';
import { 
    Paper, 
    Tabs, 
    Tab, 
    Container, 
    Box 
} from '@material-ui/core';
import LoginForm from '../Authentication/LoginForm';
import RegisterForm from '../Authentication/RegisterForm';

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: any;
    value: any;
}

const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <>{children}</>
          </Box>
        )}
      </div>
    );
  }

const Navigation = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

   

    return (
        <Container maxWidth="xs">
            <Paper square style={{ flexGrow : 1}}>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    centered
                >
                    <Tab label="Login"  />
                    <Tab label="Register" />
                </Tabs>
            </Paper>
            <TabPanel value={value} index={0}>
                <LoginForm/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <RegisterForm/>
            </TabPanel>
        </Container> 
    )
}

export default Navigation;
