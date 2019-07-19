import { connect } from 'react-redux';
import Todo from './Todo';

const mapStateToProps = state => ({
  todos: state.todos,
});


export default connect(mapStateToProps)(Todo);