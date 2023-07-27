import React from 'react'
import {TodosListContainer,
        SingleTodoContainer,
        Heading,
        AddedTasktext,
        Checkbox,
        DeleteBtn,
        
        } from './styledComponents'

const TodoList = ({ todos, deleteHandler, toggleCheckBox }) => {
    return (
      <TodosListContainer>
        <Heading>Adding Tasks</Heading>
        {todos.map((todo, index) => (
          <SingleTodoContainer key={index}>
            <Checkbox
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCheckBox(index)}
            />
            <AddedTasktext completed={todo.completed}>{todo.task}</AddedTasktext>
            <DeleteBtn onClick={() => deleteHandler(index)}>Delete</DeleteBtn>
          </SingleTodoContainer>
        ))}
      </TodosListContainer>
    );
  };


export default TodoList; 