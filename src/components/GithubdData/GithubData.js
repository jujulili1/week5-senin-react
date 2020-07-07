import React,{useState, useEffect} from 'react'
import styled from "styled-components";



const Div = styled.div`
width:auto;
text-align:center;
font-family: "Quicksand", sans-serif;
`;

const Form = styled.form`
    width:300px;
    margin:auto;
    margin-top:50px;
    margin-bottom:50px;
`;

const Input = styled.input`
width: 100%;
  padding: 12px 20px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  text-align: center;
`;
const Main = styled.div`
display:flex;
font-family: "Quicksand", sans-serif;
flex-direction:column;
margin:auto`;

function GithubData() {
    const [user,setUser] = useState('');
    const [data,setData] = useState('');
 
    function handleChange(event){
       setUser(event.target.value)
    
    }

    const handleSubmit = async (event) => {
            event.preventDefault();
            const url = `https://api.github.com/users/` + user;

            const response = await fetch(url);
            const result = await response.json();
    
            setData(result);
            console.log(data);
           
        }

    useEffect(() => {
            if(data !== ''){

            document.getElementById('content').innerHTML = 
            `   <div>
                    <img 
                    src=${data.avatar_url} 
                    alt="avatar" 
                    style='width:150px; 
                    height:150px;
                    margin:auto;
                    border-radius:100%;
                    ' />
            
                    <h1>${data.login}</h1>
                    <div 
                        style=
                        "margin:auto;
                        margin-top:20px;
                        border:2px solid grey;
                        display:flex;
                        justify-content:space-evenly;">
                    <div>
                        <h2>Followers:${data.followers}</h2>
                    </div>
            
                    <div>
                        <h2>Repositories:${data.public_repos}</h2>
                    </div>
            
                    <div>
                        <h2> Following:${data.following} </h2>
                    </div>
                    </div>
                 </div>`
        }
    });
 
    return (
        <Div>
            <Form onSubmit={handleSubmit}>

            <Input 
            type="text" 
            name="name" 
            id="name" 
            value={user}
            onChange={handleChange}
            placeholder="Type a username and press enter"/>
            </Form>

            <Main id="content">
           </Main>
        </Div> 
    )
}

export default GithubData