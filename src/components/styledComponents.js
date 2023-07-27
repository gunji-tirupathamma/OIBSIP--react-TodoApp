import styled from 'styled-components'

export const TodosListContainer=styled.div`
    display: flex;
    flex-direction: column;
`

export const SingleTodoContainer=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    
`

export const Heading=styled.h2`
    font-size: 25px;
    font-family: roboto;
    text-decoration: underline;
    color: #ad028b;
`

export const Checkbox=styled.input`
    margin: 10px;
    
`

export const AddedTasktext=styled.p`
    font-size: 18px;
    margin: 10px;
    text-decoration:${props => props.completed ? 'line-through' : 'none'};
`

export const DeleteBtn=styled.button`
    width: 50px;
    height: 30px;
    background-color: #fc5361;
    color: #ffffff;
    border-radius: 10px;
    border: 0px;
    outline: 0px;
    margin: 10px;   
    
    `

