import { connect } from 'react-redux';
import { addTodo } from '../Redux/actions/actions';
import CreateTodo from './CreateTodo';

const mapStateToProps = state => ({
  id: state.pendingTodo.id,
});

const mapDisptachToProps = {
  addTodo
};

export default connect(mapStateToProps, mapDisptachToProps)(CreateTodo);