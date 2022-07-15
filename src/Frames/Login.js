import {useState} from "react";

const axios = require('axios').default;

function poster(){ axios.post('http://localhost:8080/tasks',{
    params: {
        name:'John',
        password: 123
    }
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        // always executed
    });}





export function Login (){
    const [Rusername, setRusername] = useState("");
    const [password, setPassword] = useState("");
    function register(){
        axios.post('http://localhost:8080/users/sign-up',
            {
                "username": Rusername,
                "password": password

            }).then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
    return(
        <div>
            <input placeholder={"registerusername"} onChange={e => setRusername(e.target.value)}/>
            <input placeholder={"registerpassword"} onChange={e => setPassword(e.target.value)}/>
            <input type={"submit"} value={"Create Accont"} onClick={register}/>
            <input placeholder={"Username"} type={"text"}/>
            <input placeholder={"Password"} type={"password"}/>
            <input type={"submit"} value={"Login"} onClick={() => {poster()}}/>
        </div>
    )
}