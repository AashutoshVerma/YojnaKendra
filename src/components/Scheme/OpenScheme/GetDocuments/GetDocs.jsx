import React from 'react'
import './getDocs.css'

const handleChangeDoc = () => {
  // console.log("Ok ave 6")
  // console.log("Tu click kares?")

    let ac = document.getElementsByName("ac");
    let rc = document.getElementsByName("rc");
    let cc = document.getElementsByName("cc");
    let ic = document.getElementsByName("ic");
    let dob = document.getElementsByName("dob");
    let pan = document.getElementsByName("pan");
    let pc = document.getElementById("pincode");

    if(pc.value === ""){
      alert("Enter a Pincode!!");
    }
  
    for(let i = 0 ; i < 2; i++){
      if(ac[i].checked){
        let aadharValue = ac[i].value;
        if(aadharValue === "off"){
          alert("To get the document visit, nearest Post Office!")
        }
      }
      if(rc[i].checked){
        let ratoinValue = rc[i].value;
        if(ratoinValue === "off"){
          alert("To get the document visit, nearest Mamlatdar Office")
        }
      }
      if(cc[i].checked){
        let casteCertificate = cc[i].value;
        if(casteCertificate === "off"){
          alert("To get the document visit, nearest Mamlatdar Office")
        }
      }
      if(ic[i].checked){
        let incomeCertificate = ic[i].value;
        if(incomeCertificate === "off"){
          alert("To get the document visit, nearest Mamlatdar Office")
        }
      }
      if(dob[i].checked){
        let dobValue = dob[i].value;
        if(dobValue === "off"){
          alert("To get the document visit, nearest Mamlatdar Office")
        }
      }
      if(pan[i].checked){
        let panValue = pan[i].value;
        if(panValue === "off"){
          alert("To get the document visit, nearest Cyber Cafe or PAN Card office")
        }
      }
    }
     
}

const GetDocuments = () => {
  
    
  return (
    <div className="getDocs">
      <h1>Fill below Information</h1>
      <input type="number" name="pincode" id="pincode" placeholder="Pincode" />
      <div className="field">
        <label htmlFor="dob">Pan Card</label>
        <div className="insideField">
          <div className="yes">
            <span>Yes</span>
            <input type="radio" name="pan" value="on" />
          </div>
          <div className="no">
            <span>No</span>
            <input type="radio" name="pan" value = "off" />
          </div>
        </div>
      </div>

      <div className="field">
        <label htmlFor="dob">Ration Card</label>
        <div className="insideField">
          <div className="yes">
            <span>Yes</span>
            <input type="radio" name="rc" value="on" />
          </div>
          <div className="no">
            <span>No</span>
            <input type="radio" name="rc" value="off" />
          </div>
        </div>
      </div>

      <div className="field">
        <label htmlFor="dob">Aadhar Card</label>
        <div className="insideField">
          <div className="yes">
            <span>Yes</span>
            <input type="radio" name="ac" value="on" />
          </div>
          <div className="no">
            <span>No</span>
            <input type="radio" name="ac" value = "off" />
          </div>
        </div>
      </div>
      
      <div className="field">
        <label htmlFor="dob">Birth Certificate</label>
        <div className="insideField">
          <div className="yes">
            <span>Yes</span>
            <input type="radio" name="dob" value="on" />
          </div>
          <div className="no">
            <span>No</span>
            <input type="radio" name="dob" value="off"  />
          </div>
        </div>
      </div>

      <div className="field">
        <label htmlFor="dob">Caste Certificate</label>
        <div className="insideField">
          <div className="yes">
            <span>Yes</span>
            <input type="radio" name="cc" value="on" />
          </div>
          <div className="no">
            <span>No</span>
            <input type="radio" name="cc" value="off" />
          </div>
        </div>
      </div>
      <div className="field">
        <label htmlFor="dob">Income Certificate</label>
        <div className="insideField">
          <div className="yes">
            <span>Yes</span>
            <input type="radio" name="ic" value="on"  />
          </div>
          <div className="no">
            <span>No</span>
            <input type="radio" name="ic" value="off" />
          </div>
        </div>
      </div>

      <button onClick={handleChangeDoc} value="Submit">
        Submit
      </button>
    </div>
  )
}

export default GetDocuments;