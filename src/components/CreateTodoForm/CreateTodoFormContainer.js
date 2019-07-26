import { connect } from 'react-redux';
import { editPendingTodo, publishTodo, deleteTodo } from '../Redux/actions/actions';
import CreateTodoForm from './CreateTodoForm';

const mapStateToProps = state => ({
  id: state.pendingTodo.id,
  description: state.pendingTodo.description,
});

const mapDisptachToProps = {
  editPendingTodo,
  publishTodo,
  deleteTodo
};

export default connect(mapStateToProps, mapDisptachToProps)(CreateTodoForm);