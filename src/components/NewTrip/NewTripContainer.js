import { connect } from "react-redux";
import { setIndividualTrip } from "../Redux/actions/actions";
import NewTripForm from "./NewTripForm";

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  setIndividualTrip
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTripForm);
