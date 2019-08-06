import { connect } from 'react-redux';
import JournalList from './JournalList';

const mapStateToProps = state => ({
 journalEntry: state.journalEntry,
});

export default connect(mapStateToProps)(JournalList);
