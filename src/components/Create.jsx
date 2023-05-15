import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

const Create = () => {

    const [newUser, setNewUser] = useState({
        name : "",
        email : ""
    })
    const navigate = useNavigate();


    function handleSubmit(e){
        e.preventDefault();

        axios.post("http://localhost:8000/users", newUser)
        .then((res) =>{
            alert("User created successfully!");
            navigate('/');
        }).catch(err => console.log(err))
    }
    return (
        <>
            <h3>Create User</h3>
            <form action="" onSubmit={handleSubmit}>
                {/* <div className="field">
                    <label htmlFor="">ID</label>
                    <input type="text" name="id" disabled/>
                </div> */}
                <div className="field">
                    <label htmlFor="">Name</label>
                    <input type="text" onChange={e => setNewUser({...newUser, name: e.target.value})}/>
                </div>
                <div className="field">
                    <label htmlFor="">Email</label>
                    <input type="email" onChange={e => setNewUser({...newUser, email: e.target.value})}/>
                </div>
                <div className="field button-wrap">
                    <button type="submit" className="button">submit</button>
                </div>
            </form>
        </>
     );
}

export default Create;