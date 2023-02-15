import React, { useState } from "react";
import './adminpage.css';
import data from "../data/data.json";
import axios from "axios";
// const fs = require('fs');





let [Data,setData]=[];    

let delateScheme=(id,i)=>{ 
  // console.log(id.$oid,i);
  // document.getElementsByClassName("scheadit")[i].style.display="none";
  Data.

  axios.post('http://localhost:5000/delUser', {
                  "userid":id.$oid  
            }).then((res) => {
                if(res.data.status==="OK" )
                {
                    console.log(res);
                  //    fs.writeFile('./myFile.json', JSON.stringify(data), (err) => {    
                  //     if (err) console.log('Error writing file:', err);
                  // })
                  }
             }).catch((e)=>{
                console.log(e);
             })

}


export default function AdminPage() {
  
[Data,setData]=useState(data);   
  console.log(data);

  return (
    <>
      <div className="adminPage">
      <div className="admin-header">
          <h1>Admin Panel</h1>
        </div>
      <div className="adminFieldBody">
      <div className="adminField">

          {/* <input type="text" name="schemeT" placeholder="Scheme Title..." />
          <button>Add</button>
          <button>Remove</button>
          <button>Update</button> */}

          {
            Data.map((sche ,i)=>{
              return (
                <div className="scheadit">
                  <h1>
                  {sche.SchemeTitle}
                </h1>
                <div className="bin" onClick={()=>{
                  delateScheme(sche._id,i);
                }}>❌</div>
                </div>
              )
            }

            )
          }
        </div>
      </div>
      </div>
    </>
  );
}
