import React, { useState } from "react";
import "./admin.css";
import axios from "axios";
import AdminPage from "./AdminPage";



const Admin = () => {
    const[isLogin,setIsLogin]=useState(false);  
  return (
    <> {isLogin?<> <AdminPage/> </> : <>
        <div className="admin">
        <div className="admin-header">
          <h1>Admin</h1>
        </div>
        <div className="admin-body">
          <div className="box">
            <div className="field">
              <h3>Login</h3>
              <input type="text" name="login" id="login" />
            </div>
            <div className="field">
              <h3>Password</h3>
              <input type="text" name="pass" id="pass" />
            </div>
            <button
            onClick={()=>{
                  const user=document.getElementById("login").value;
                  const pass=document.getElementById("pass").value;

                axios.post('http://localhost:5000/adminCheck', {
                    Username:user,
                    "Password" : pass
            }).then((res) => {
                if(res.data.status==="Login Successful" )
                {
                    setIsLogin(true);
                }
             }).catch((e)=>{
                console.log(e);
             })
                  
            }}
            >Log in</button>
          </div>
        </div>
      </div>
    </> }
    </>
  );
};

export default Admin;
