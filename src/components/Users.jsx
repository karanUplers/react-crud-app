import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Users = ()=>{
    const [columns, setColumns] = useState([]);
   const [records, setRecords] = useState([]);

   useEffect(()=>{
      axios.get("http://localhost:8000/users")
      .then(res =>{
         setColumns(Object.keys(res.data[0]));
         setRecords(res.data);
      }).catch(err => console.log(err))
   },[])

   function handleDelete(id){
    console.log(id);
    const cnf = confirm("are you sure want to Delete this record?")
    if(cnf){
        axios.delete("http://localhost:8000/users/"+ id)
        .then(res =>{
            location.reload();
        })
    }
   }

   return (
      <>
         <div className="buttons">
            <Link to="/create" className='button'>Add +</Link>
         </div>
         <table>
            <tbody>
               <tr>
                  {columns.map((c, i)=>(
                     <th key={i}>{c}</th>
                  ))}
                  <th className='w-160'>Action</th>
               </tr>
               {records.map((r, i)=>(
                  <tr key={i}>
                     <td>{r.id}</td>
                     <td>{r.name}</td>
                     <td>{r.email}</td>
                     <td>
                        <div className="buttons">
                            <Link to={`/update/${r.id}`} className='button button-sm button-success'>EDIT</Link>
                            <button className='button button-sm button-danger' onClick={()=> handleDelete(r.id)}>DELETE</button>
                        </div>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>

      </>
   )
}
export default Users;