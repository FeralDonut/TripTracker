// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

// function TabPanel(props) {
//   const { children, value, index } = props;

//   return (
//     <Typography
//       component="div"
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       // {...other}
//     >
//       <Box p={3}>{children}</Box>
//     </Typography>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//     width: 750,
//   },
// }));

// export default function SimpleTabs() {
//   const classes = useStyles();
//   const theme = useTheme();
//   const [value, setValue] = useState(0);

//   function handleChange(event, newValue) {
//     setValue(newValue);
//   }

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Tabs value={value} onChange={handleChange} aria-label="Simple tabs example">
//           <Tab label="Things to Do" {...a11yProps(0)} />
//           <Tab label="Journal" {...a11yProps(1)} />
//           <Tab label="Important Info" {...a11yProps(2)} />
//           <Tab label="Packing List" {...a11yProps(3)} />
//         </Tabs>
//       </AppBar>
//       <TabPanel value={value} index={0}>
//         Item One
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         Item Two
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         Item Three
//       </TabPanel>
//       <TabPanel value={value} index={3}>
//         Item Four
//       </TabPanel>
//     </div>
//   );
// }

import React, {Fragment} from 'react';
// import useFetchData from '../../hooks/useFetchData';
// import useStore from '../../store/store';
import {Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
// import './Dashboard.css';
import CreateTodo from '../CreateTodo/CreateTodoContainter';
const Dashboard = props => {
  const { activeTab, setActiveTab } = props;

  const tabPicker = event => {
    setActiveTab(event.target.name);
  };

  const tabLinks = [
    {tabName: 'attractions', tabText: 'Things To Do'},
    {tabName: 'journal', tabText: 'Journal'},
    {tabName: 'info', tabText: 'Important Info'},
    {tabName: 'packing', tabText: 'Packing List'},
  ];
  const tabRouting = tabLinks.map(tabLink => (
      <Fragment key={tabLink.tabName}>
        <NavItem>
          <NavLink
              className={activeTab === tabLink.tabName ? 'active' : ''}
              name={tabLink.tabName}
              onClick={tabPicker}
          >
            {tabLink.tabText}
          </NavLink>
        </NavItem>
      </Fragment>
  ));
  return (
      <div>
        {/* {!(users.length && teams.length) ? (
            <div className={'dashboard-loader'}>
              <Spinner color="primary"/>
            </div>
        ) : ( */}
            {/* <div className="dashboard-tabtable"> */}
              <Nav tabs>{tabRouting}</Nav>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="attractions">
                  Things to do
                </TabPane>
                <TabPane tabId="journal">
                  Journal
                </TabPane>
                <TabPane tabId="info">
                  Important Information
                </TabPane>
                <TabPane tabId="packing">
                  Packing List
                </TabPane>
              </TabContent>
            {/* </div> */}
        {/* )} */}
      </div>
  );
};

export default Dashboard;
