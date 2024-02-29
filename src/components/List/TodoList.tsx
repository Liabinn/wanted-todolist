import { useSelector } from 'react-redux';
import { deleteCard, selectTodos } from '../../modules/todoSlice';
import { useAppDispatch } from '../../store/hook';
import * as St from '../../style/TodoListStyle'

const TodoList = () => {

  const todos = useSelector(selectTodos);
  const dispatch = useAppDispatch();

  return (
    <div>
      {todos.map((item) => (
          <St.Container key={item.id}>
            <St.Title>{item.title}</St.Title>
            <St.DeleteButton onClick={() => dispatch(deleteCard(item.id))}>X</St.DeleteButton>
          </St.Container>
      ))}
    </div>
  )
}

export default TodoList