import { connect } from 'react-redux';
import { setActiveTab } from '../Redux/actions/actions';
import Dashboard from './Dashboard';

const mapStateToProps = state => ({
  activeTab: state.dashboardTab.activeTab
});

const mapDisptachToProps = {
  setActiveTab
};

export default connect(mapStateToProps, mapDisptachToProps)(Dashboard);