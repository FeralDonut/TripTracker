import { connect } from 'react-redux';
import { addPackingList } from '../../Redux/actions/actions';
import CreatePackingList from './CreatePackingList';

const mapStateToProps = state => ({
  id: state.pendingPackingList.id,
});

const mapDisptachToProps = {
  addPackingList
};

export default connect(mapStateToProps, mapDisptachToProps)(CreatePackingList);