import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const Edit = () => {
    let {id} = useParams();
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get("http://localhost:8000/users/" + id)
        .then(res =>{
            setData(res.data)
        })
    },[])

    function handleSubmit(e){
        e.preventDefault();
        axios.put("http://localhost:8000/users/" + id, data)
        .then(res =>{
            alert("user info updated successfully!");
            navigate('/');
        })
    }
    return (
        <>
            <h3>User Update</h3>
             <form action="" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="">ID</label>
                    <input type="text"  disabled value={data.id}/>
                </div>
                <div className="field">
                    <label htmlFor="">Name</label>
                    <input type="text" value={data.name} onChange={e => setData({...data, name : e.target.value})}/>
                </div>
                <div className="field">
                    <label htmlFor="">Email</label>
                    <input type="email" value={data.email} onChange={e => setData({...data, email: e.target.value})}/>
                </div>
                <div className="field button-wrap">
                    <button type="submit" className="button">Update</button>
                </div>
            </form>
        </>
    );
}

export default Edit;