import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';

import Button from '../UI/Button';

import styles from './TodosActions.module.css';

function TodosActions({
  resetTodos,
  deleteCompletedTodos,
  completedTodoExist,
}) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title='Reset Todos' onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title='Clear Complete Todos'
        onClick={deleteCompletedTodos}
        disabled={!completedTodoExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default TodosActions;
