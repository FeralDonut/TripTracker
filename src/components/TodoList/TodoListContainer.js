import { connect } from 'react-redux';
import { deleteTodo } from '../Redux/actions/actions';
import TodoList from './TodoList';

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps={
  deleteTodo
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);