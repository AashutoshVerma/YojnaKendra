// const mongoose = require("mongoose");

// //User Schema for adminCheck
// const udsA = new mongoose.Schema({
//         "Username" : String,
//         "Password" : String
// },{
//     collection  : "Yojna",
// })
// mongoose.model("Yojna",udsA);



// //User Schema for Entering data
// const udsi = new mongoose.Schema({
        
//         "SchemeTitle" :String,
//         "SchemeInfo" : String ,
//         "MaxAge" : String ,
//         "MaxIncome" : String ,
//         "Gender" : String ,
//         "Caste" : String ,
//         "SchemeLink" : String ,
//         "ImagePath" : String 
//             }
// ,{
//     collection : "UserInfo",
// })
// mongoose.model("UserInfo",udsi);

// //User Scheme For English
// const udsE = new mongoose.Schema({
//     "Scheme-Title" : String,
//     "Scheme-info" : String,
// },{
//     collection:"YojnaKendraEnglish",
// });
  
// mongoose.model("YojnaKendraEnglish",udsE);


// //User Schema for Gujarati
// const udsG = new mongoose.Schema({
//     "Scheme-Title" : String,
//     "Scheme-info" : String,
// },{
//     collection:"YojnaKendraGujarati",
// });
  
// mongoose.model("YojnaKendraGujarati",udsG);




// //User Schema For Hindi
// const udsH = new mongoose.Schema({
//     "Scheme-Title" : String,
//     "Scheme-info" : String,
// },{
//     collection:"YojnaKendraHindi",
// });
  
// mongoose.model("YojnaKendraHindi",udsH);




// *******************************************************************






const mongoose = require("mongoose");

//User Schema for adminCheck
const udsA = new mongoose.Schema({
        "Username" : String,
        "Password" : String
},{
    collection  : "Yojna",
})
mongoose.model("Yojna",udsA);



//User Schema for Entering data
const udsi = new mongoose.Schema({
        
        "SchemeTitle" :String,
        "SchemeInfo" : String ,
        "MaxAge" : String ,
        "MaxIncome" : String ,
        "Gender" : String ,
        "Caste" : String ,
        "SchemeLink" : String ,
        "ImagePath" : String 
            }
,{
    collection : "UserInfo",
})
mongoose.model("UserInfo",udsi);

//User Scheme For English
const udsE = new mongoose.Schema({
    "Scheme-Title" : String,
    "Scheme-info" : String,
},{
    collection:"YojnaKendraEnglish",
});
  
mongoose.model("YojnaKendraEnglish",udsE);


//User Schema for Gujarati
const udsG = new mongoose.Schema({
    "Scheme-Title" : String,
    "Scheme-info" : String,
},{
    collection:"YojnaKendraGujarati",
});
  
mongoose.model("YojnaKendraGujarati",udsG);




//User Schema For Hindi
const udsH = new mongoose.Schema({
    "Scheme-Title" : String,
    "Scheme-info" : String,
},{
    collection:"YojnaKendraHindi",
});
  
mongoose.model("YojnaKendraHindi",udsH);