import { connect } from 'react-redux';
import { deleteEatery } from '../../Redux/actions/actions';
import EateriesList from './EateriesList';

const mapStateToProps = state => ({
  eateries: state.eateries,
});

const mapDispatchToProps={
  deleteEatery
}
export default connect(mapStateToProps, mapDispatchToProps)(EateriesList);