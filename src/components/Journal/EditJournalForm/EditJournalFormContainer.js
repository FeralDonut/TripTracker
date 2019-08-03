import { connect } from 'react-redux';
import { deleteEntry, editEntry, updateEntry, deselectEntry } from '../../Redux/actions/actions';
import EditJournalForm from './EditJournalForm';

const mapStateToProps = state => ({
  editActiveENtry: state.editActiveEntry,
});

const mapDispatchToProps = {
  deleteEntry,
  editEntry,
  updateEntry,
  deselectEntry,
}

export default connect(mapStateToProps, mapDispatchToProps)(EditJournalForm);