import { connect } from 'react-redux';
import { setIndividualTrip } from '../Redux/actions/actions';
import TripList from './TripList';

const mapStateToProps = state => ({
 
});

const mapDispatchToProps={
  setIndividualTrip
}
export default connect(mapStateToProps, mapDispatchToProps)(TripList);