import { connect } from 'react-redux';
import { selectEntry, deleteEntry, deselectEntry } from '../Redux/actions/actions';
import journalEntry from './journalEntry';

const mapStateToProps = state => ({
  activeEntry: state.activeEntry,
});

const mapDispatchToProps = {
  selectEntry,
  deleteEntry,
  deselectEntry,
}
export default connect(mapStateToProps, mapDispatchToProps)(journalEntry);
