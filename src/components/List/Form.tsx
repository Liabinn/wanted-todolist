import { ChangeEvent, FormEvent, useState } from 'react'
import { v4 as uuidv4 } from "uuid"
import { useAppDispatch } from '../../store/hook'
import { addCard } from '../../modules/todoSlice';
import * as St from '../../style/FormStyle'

const Form = () => {

  const dispatch = useAppDispatch();

  const [title, setTitle] = useState('');
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title === '')
    return alert('내용을 입력해주세요');
    const newTodo = {
      id: uuidv4(),
      title,
    }
    dispatch(addCard(newTodo));
    setTitle('');
  }

  return (
    <St.Form onSubmit={onSubmit}>
      <St.Title htmlFor='title'>Title <St.Input id='title' type='text' value={title} onChange={handleOnChange} /></St.Title>
      <St.AddButton type='submit'>등록</St.AddButton>
    </St.Form>
  )
}

export default Form