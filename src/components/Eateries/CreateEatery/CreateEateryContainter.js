import { connect } from 'react-redux';
import { addEatery } from '../../Redux/actions/actions';
import CreateEatery from './CreateEatery';

const mapStateToProps = state => ({
  id: state.pendingEatery.id,
});

const mapDisptachToProps = {
  addEatery
};

export default connect(mapStateToProps, mapDisptachToProps)(CreateEatery);