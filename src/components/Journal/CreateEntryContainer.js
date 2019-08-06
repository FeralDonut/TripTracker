import { connect } from 'react-redux';
import { addJournalEntry } from '../Redux/actions/actions';
import CreateEntry from './CreateEntry';

const mapStateToProps = state => ({
  id: state.pendingEntry.id,
});

const mapDispatchToProps = {
  addJournalEntry,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateEntry);
