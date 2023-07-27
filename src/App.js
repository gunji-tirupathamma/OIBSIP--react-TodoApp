import React,{useState,useEffect} from 'react'
import {MainContainer,
        InnerContainer,
        Heading,
        FormContainer,
        Input,
        AddButton,
        SaveBtn
        } from './styledComponents'

    import TodoList from './components/TodoList'    

        
    function App() {
      const [task, setTask] = useState('');
      const [todos, setTodos] = useState([]);
    
      const onChangeHandler = (e) => {
        setTask(e.target.value);
      };
    
      const onSubmitionHandler = (e) => {
        e.preventDefault();
        console.log(task);
        if (task.trim().length === 0) {
          alert('Required task');
        } else {
          const newTodo = [...todos, { task, completed: false }]; // Store the task with completed: false
          setTodos(newTodo);
          setTask('');
        }
      };
    
      const onDeleteHandler = (indexvalue) => {
        const newTodos = todos.filter((todo, index) => index !== indexvalue);
        setTodos(newTodos);
      };
    
      const saveToLocalStorage = (key, data) => {
        try {
          localStorage.setItem(key, JSON.stringify(data));
        } catch (error) {
          console.log(error);
        }
      };
    
      const onSaveHandler = () => {
        saveToLocalStorage('todos', todos);
      };
    
      useEffect(() => {
        const storedTodo = localStorage.getItem('todos');
        if (storedTodo) {
          setTodos(JSON.parse(storedTodo));
        }
      }, []);
    
      const toggleCheckBox = (index) => {
        setTodos((prevTodos) =>
          prevTodos.map((todo, idx) =>
            idx === index ? { ...todo, completed: !todo.completed } : todo
          )
        );
      };
    
      return (
        <MainContainer className="App">
          <InnerContainer>
            <Heading>Todo Application</Heading>
            <FormContainer onSubmit={onSubmitionHandler}>
              <Input type="text" name="Task" value={task} onChange={onChangeHandler} />
              <AddButton type="submit" value="Add" />
            </FormContainer>
            <TodoList todos={todos} deleteHandler={onDeleteHandler} toggleCheckBox={toggleCheckBox} />
            <SaveBtn onClick={onSaveHandler}>Save</SaveBtn>
          </InnerContainer>
        </MainContainer>
      );
    }
    

export default App; 