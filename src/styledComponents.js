import styled from 'styled-components'

export const MainContainer=styled.div`
    display: flex;
    justify-content: center;
    paddin: 10px;
    margin: 10px;
`

export const InnerContainer=styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;   
    background-image: radial-gradient(#98edb7,#60f0df,#55d6fa);
    background-size: cover;
    height: 100vh;
    width: 80%;
    padding: 10px; 
    margin: 10px;
`

export const Heading=styled.h2`
    font-size: 30px;
    font-family: Italic;
    color: #a1060e;
    text-decoration: underline;
`

export const FormContainer=styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-top: 40px;
    @media screen and (min-width: 767px){
        flex-direction: row;
    }
`

export const Input=styled.input`
 height: 30px;
 width: 200px;
 outline: 0px;
 border: 0px;
 border-radius: 10px;
 margin: 10px;
 padding: 5px;
`

export const AddButton=styled.input`
    background-color: #03a331;
    color: #fff;
    height: 30px;
    width: 50px;
    border-radius: 10px;
    border: 0px;
    outline: 0px;
    margin: 10px;
`

export const SaveBtn=styled.button`
width: 50px;
height: 30px;
background-color: #020769;
color: #ffffff;
border-radius: 10px;
border: 0px;
outline: 0px;
margin: 10px;
`