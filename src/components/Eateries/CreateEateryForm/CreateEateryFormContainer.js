import { connect } from 'react-redux';
import { editPendingEatery, publishEatery, deleteEatery } from '../../Redux/actions/actions';
import CreateEateryForm from './CreateEateryForm';

const mapStateToProps = state => ({
  id: state.pendingEatery.id,
  description: state.pendingEatery.description,
});

const mapDisptachToProps = {
  editPendingEatery,
  publishEatery,
  deleteEatery
};

export default connect(mapStateToProps, mapDisptachToProps)(CreateEateryForm);