import { connect } from 'react-redux';
import { deleteItem } from '../../Redux/actions/actions';
import PackingList from './PackingList';

const mapStateToProps = state => ({
  packingItems: state.packingItems,
});

const mapDispatchToProps={
  deleteItem
}
export default connect(mapStateToProps, mapDispatchToProps)(PackingList);