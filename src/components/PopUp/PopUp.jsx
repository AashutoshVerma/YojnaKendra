import React from "react";
import "./popup.css";

window.addEventListener("load", function () {
  setTimeout(function () {
    document.querySelector(".popup").style.display = "grid";
    document.getElementById("blur").classList.add("active");
    document.getElementById("blur2").classList.add("active2");
    document.getElementById("blur3").classList.add("active3");
    document.getElementById("blur4").classList.add("active4");
    document.getElementById("blur5").classList.add("active5");
    document.getElementById("blur6").classList.add("active6");
  }, 2000);
});
  
const closePopUp=()=>{
    document.querySelector(".popup").style.display = "none";
    document.getElementById("blur").classList.remove("active");
    document.getElementById("blur2").classList.remove("active2");
    document.getElementById("blur3").classList.remove("active3");
    document.getElementById("blur4").classList.remove("active4");
    document.getElementById("blur5").classList.remove("active5");
    document.getElementById("blur6").classList.remove("active6");
};

const PopUp = ({ onSubmit }) => {
  const onClickSubmit = () => {
    let genderValue = "";
    let incomeValue = 0;
    let casteValue = "";
    let ageValue = 0;
    var gender = document.getElementsByName("gender");
    var age = document.getElementsByName("age");
    var income = document.getElementsByName("income");
    var caste = document.getElementsByName("caste");
    for (let i = 0; i < gender.length; i++) {
      if (gender[i].checked) {
        genderValue = gender[i].value;
      }
      if (income[i].checked) {
        incomeValue = income[i].value;
      }
      if (age[i].checked) {
        ageValue = age[i].value;
      }
      if (caste[i].checked) {
        casteValue = caste[i].value;
      }
    }
    onSubmit({
      gender : genderValue,
      income : incomeValue,
      caste : casteValue,
      age : ageValue,
    });
  };
  return (
    <div className="popup" value="">
      <button id="close" onClick={closePopUp}>&times;</button>
      <h1 className="popupHeading">Looking for filter</h1>
      <div className="column">
        <div className="leftCard1">
          <h1>Gender</h1>
          <div className="gender">
            <div className="container">
              <input type="radio" name="gender" id="male" value="Male" />
              <label htmlFor="male">&nbsp;Male</label>
            </div>
            <div className="container">
              <input type="radio" name="gender" id="female" value="fe" />
              <label htmlFor="female">&nbsp;Female</label>
            </div>
            <div className="container">
              <input type="radio" name="gender" id="other" value="" />
              <label htmlFor="other">&nbsp;Other</label>
            </div>
          </div>
        </div>
        <div className="rightCard1">
          <h1>Age</h1>
          <div className="gender">
            <div className="container">
              <input type="radio" name="age" id="firstAge" value="18" />
              <label htmlFor=">18">&nbsp;&lt;&nbsp;18</label>
            </div>
            <div className="container">
              <input type="radio" name="age" id="secondAge" value="70" />
              <label htmlFor="<18">&nbsp;&gt;&nbsp;18</label>
            </div>
            <div className="container">
              <input type="radio" name="age" id="thirdAge" value="100" />
              <label htmlFor=">70">&nbsp;&gt;70</label>
            </div>
          </div>
        </div>
        <div className="leftCard1" id="leftborder">
          <h1>Caste</h1>
          <div className="gender">
            <div className="container">
              <input type="radio" name="caste" id="genral" value="General" />
              <label htmlFor="Genral">&nbsp;GENERAL</label>
            </div>
            <div className="container">
              <input type="radio" name="caste" id="obc" value="OBC" />
              <label htmlFor="OBC">&nbsp;OBC</label>
            </div>
            <div className="container">
              <input type="radio" name="caste" id="scst" value="SC/ST" />
              <label htmlFor="SC/ST">&nbsp;SC/ST</label>
            </div>
          </div>
        </div>
        <div className="rightCard1">
          <h1>Income</h1>
          <div className="gender">
            <div className="container">
              <input type="radio" name="income" id="less6" value="600000" />
              <label htmlFor="<6">&nbsp;&lt;&nbsp; 6 Lakh</label>
            </div>
            <div className="container">
              <input type="radio" name="income" id="more6" value="1000000" />
              <label htmlFor=">6">&nbsp;&gt;&nbsp; 6 Lakh</label>
            </div>
            <div className="container">
              <input type="radio" name="income" id="other" value="0" />
              <label htmlFor="Other">&nbsp; OTHER</label>
            </div>
          </div>
        </div>
      </div>
      <button
        className="final_submit"
        onClick={function () {
          document.querySelector(".popup").style.display = "none";
          document.getElementById("blur").classList.remove("active");
          document.getElementById("blur2").classList.remove("active2");
          document.getElementById("blur3").classList.remove("active3");
          document.getElementById("blur4").classList.remove("active4");
          document.getElementById("blur5").classList.remove("active5");
          document.getElementById("blur6").classList.remove("active6");
          onClickSubmit();
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default PopUp;
