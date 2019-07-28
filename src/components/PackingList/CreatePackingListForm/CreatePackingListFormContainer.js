import { connect } from 'react-redux';
import { editPendingPackingList, publishPackingList, deleteItem } from '../../Redux/actions/actions';
import CreatePackingForm from './CreatePackingForm';

const mapStateToProps = state => ({
  id: state.pendingPackingList.id,
  description: state.pendingPackingList.description,
});

const mapDisptachToProps = {
  editPendingPackingList,
  publishPackingList,
  deleteItem
};

export default connect(mapStateToProps, mapDisptachToProps)(CreatePackingForm);