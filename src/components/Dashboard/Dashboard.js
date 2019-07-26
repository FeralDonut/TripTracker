import React, {Fragment} from 'react';
// import useFetchData from '../../hooks/useFetchData';
// import useStore from '../../store/store';
import {Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
// import './Dashboard.css';
import CreateTodo from '../CreateTodo/CreateTodoContainter';
import TodoList from '../TodoList/TodoListContainer';
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
                  <TodoList />
                  <CreateTodo />
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
