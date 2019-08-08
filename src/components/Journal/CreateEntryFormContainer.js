import { connect } from "react-redux";
import {
  editPendingEntry,
  publishEntry,
  deleteEntry
} from "../Redux/actions/actions";
import CreateEntryForm from "./CreateEntryForm";

const mapStateToProps = state => ({
  id: state.pendingEntry.id,
  title: state.pendingEntry.title,
  description: state.pendingEntry.description
});

const mapDispatchToProps = {
  editPendingEntry,
  publishEntry,
  deleteEntry
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEntryForm);
