// const express = require("express");
// const app = express();
// app.use(express.json())
// const mongoose = require("mongoose");
// const cors = require("cors")
// app.use(cors())

 
// app.listen(5000,()=>{
//      console.log("server started")
// })

// app.post("/post",async(req,res)=>{
//      console.log(req.body)
//      const {data} = req.body
     
//     try {
//      if(data=="aaashu")
//     {
//         res.send({status:"ok"})
//     }
//     else{
//         res.send({status:"not ok"})
//     }
//     } catch (error) {
//         res.send({status:"error"})
//     }
// })


// const mongoUrl = "mongodb+srv://aashu:aashu@cluster0.nfmfbwb.mongodb.net/?retryWrites=true&w=majority";

// mongoose.connect('mongodb://127.0.0.1:27017/test',{useNewUrlParser:true}).then(()=>{
// // mongoose.connect(mongoUrl,{useNewUrlParser:true}).then(()=>{
//      console.log("Connected to database");
// }).catch((e)=> console.log(e));

// require("./user")
// const Useri  = mongoose.model("UserInfo");
// const UserA  = mongoose.model("Yojna");
// const User = mongoose.model("YojnaKendraEnglish");
// const User1 = mongoose.model("YojnaKendraGujarati");
// const User2 = mongoose.model("YojnaKendraHindi");
// app.post("/register",async(req,res)=>{
//      const{SchemeTitle,
//       SchemeInfo,
//       MaxAge,
//       MaxIncome,
//       Gender,
//       Caste,
//       SchemeLink,
//       ImagePath} = req.body;
//      console.log(req.body);
//      try { 
//           await Useri.create({
//                SchemeTitle,
//                SchemeInfo,
//                MaxAge,
//                MaxIncome,
//                Gender,
//                Caste,
//                SchemeLink,
//                ImagePath
//           });
//           res.send({status:"ok"})

          
//      } catch (error) {
//           res.send({status:"not ok"})
          
//      }
// })



// app.post("/adminCheck",async (req,res)=>{
//   const {Username,Password} = req.body;
//   console.log(Username);
//   console.log(Password);
//   const usera = await UserA.findOne({Username})
//   console.log(usera)
//   if(usera){
//     // console.log("ok")
//     // console.log(Password)
    
//       if ((Password === usera.Password)){
//         res.send({status : "Login Successful"})
//       }
//       else{
//         res.send({status : "Login Unsuccessful"})
//       }
//     }
//     else{
//           res.send({status : "User doesn't exist"})

//   }
// })


// app.get("/getAllUser",async (req,res) =>{
//     try {
//         const allUser = await User.find({})
//         res.send({status:"ok",data : allUser})
//     } catch (error) {
//         console.log(error)
//     }
// })

// //api for English Information
// app.get('/getEng', (req, res) => {
//     User.find({}, (err, items) => {
//       if (err) {
//         console.error(err);
//         res.status(500).send({ error: 'Error fetching items from database' });
//         return;
//       }
//       res.send(items);
//     });
//   });


// //api for Gujarati Information 
// app.get('/getGuj', (req, res) => {
//     User1.find({}, (err, items) => {
//       if (err) {
//         console.error(err);
//         res.status(500).send({ error: 'Error fetching items from database' });
//         return;
//       }
//       res.send(items);
//     });
//   });


// //api for Hindi Information
// app.get('/getHin', (req, res) => {
//     User2.find({}, (err, items) => {
//       if (err) {
//         console.error(err);
//         res.status(500).send({ error: 'Error fetching items from database' });
//         return;
//       }
//       res.send(items);
//     });
//   });


// *********************************************





const express = require("express");
const app = express();
app.use(express.json())
const mongoose = require("mongoose");
const cors = require("cors")
app.use(cors())

 
app.listen(5000,()=>{
     console.log("server started")
})

app.post("/post",async(req,res)=>{
     console.log(req.body)
     const {data} = req.body
     
    try {
     if(data=="aaashu")
    {
        res.send({status:"ok"})
    }
    else{
        res.send({status:"not ok"})
    }
    } catch (error) {
        res.send({status:"error"})
    }
})


const mongoUrl = "mongodb+srv://aashu:aashu@cluster0.nfmfbwb.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect('mongodb://127.0.0.1:27017/test',{useNewUrlParser:true}).then(()=>{
// mongoose.connect(mongoUrl,{useNewUrlParser:true}).then(()=>{
     console.log("Connected to database");
}).catch((e)=> console.log(e));

require("./user")
const Useri  = mongoose.model("UserInfo");
const UserA  = mongoose.model("Yojna");
const User = mongoose.model("YojnaKendraEnglish");
const User1 = mongoose.model("YojnaKendraGujarati");
const User2 = mongoose.model("YojnaKendraHindi");
app.post("/register",async(req,res)=>{
     const{SchemeTitle,
      SchemeInfo,
      MaxAge,
      MaxIncome,
      Gender,
      Caste,
      SchemeLink,
      ImagePath} = req.body;
     console.log(req.body);
     try { 
          await Useri.create({
               SchemeTitle,
               SchemeInfo,
               MaxAge,
               MaxIncome,
               Gender,
               Caste,
               SchemeLink,
               ImagePath
          });
          res.send({status:"ok"})

          
     } catch (error) {
          res.send({status:"not ok"})
          
     }
})



app.post("/adminCheck",async (req,res)=>{
  const {Username,Password} = req.body;
  const usera = await UserA.findOne({Username})
  console.log(usera)
  if(usera){
    // console.log("ok")
    // console.log(Password)
    
      if ((Password === usera.Password)){
        res.send({status : "Login Successful"})
      }
      else{
        res.send({status : "Login Unsuccessful"})
      }
    }
    else{
          res.send({status : "User doesn't exist"})

  }
})

// for deleting the user

app.post("/delUser", async (req,res)=>{
  const  {userid} = req.body;
  // const u= mongoose.Collection.
  // console.log(typeof(u));
  let sc={}
  try{
    //  sc = await Useri.findOne({_id : u})
  }catch(e){

    console.log(e)
  }
  // console.log(sc)
  
  try {
    Useri.deleteOne({_id : userid}, function (err,res ){
    })
    res.send({status : "OK", data : "Deleted"})
  } catch (error) {
    console.log("User Not Found")
  }
})
// app.post("/delUser", async (req,res)=>{
//   const {userid} = req.body;
//   try {
//     Useri.deleteOne({_id : userid}, function (err,res ){
//     })
//     res.send({status : "OK", data : "Deleted"})
//   } catch (error) {
//     console.log("User Not Found")
//   }
// })

//getting All User
app.get("/getAllUser",async (req,res) =>{
    try {
        const allUser = await User.find({})
        res.send({status:"ok",data : allUser})
    } catch (error) {
        // console.log(error)
    }
})

//api for English Information
app.get('/getEng', (req, res) => {
    User.find({}, (err, items) => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'Error fetching items from database' });
        return;
      }
      res.send(items);
    });
  });


//api for Gujarati Information 
app.get('/getGuj', (req, res) => {
    User1.find({}, (err, items) => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'Error fetching items from database' });
        return;
      }
      res.send(items);
    });
  });


//api for Hindi Information
app.get('/getHin', (req, res) => {
    User2.find({}, (err, items) => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'Error fetching items from database' });
        return;
      }
      res.send(items);
    });
  });